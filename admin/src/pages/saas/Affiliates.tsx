import { useEffect, useMemo, useState } from 'react'
import { Handshake, Plus } from 'lucide-react'
import { fmtMoney, fmtNum, fmtTs, platform } from '../../api'
import { Card, CopyButton, Drawer, EmptyState, ErrorState, Field, LoadingRows, Modal, PageHeader, Pill, SearchInput, Spinner, StatusPill, Switch, useAction, useLoad, useToast } from '../../components/ui'

const pct = (bps: number) => `${(bps / 100).toLocaleString('en-US', { maximumFractionDigits: 2 })}%`
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export default function SaasAffiliates() {
  const st = useLoad(() => platform.get('saas/affiliates'))
  const [q, setQ] = useState('')
  const [creating, setCreating] = useState(false)
  const [open, setOpen] = useState<any | null>(null)
  const toast = useToast()
  const all: any[] = (st.data as any)?.affiliates || []
  const rows = useMemo(() => { const n = q.trim().toLowerCase(); return all.filter(a => !n || `${a.name} ${a.email} ${a.code}`.toLowerCase().includes(n)) }, [all, q])

  return (
    <div>
      <PageHeader title="Affiliates" description="Partners who refer customers with a ?ref link and earn commission on payments."
        actions={<button className="btn btn-primary" onClick={() => setCreating(true)}><Plus size={15} /> New affiliate</button>} />
      <div className="mb-4"><SearchInput value={q} onChange={setQ} placeholder="Search by name, email or code" /></div>
      <div className="card">
        {st.error && !st.data ? <ErrorState message={st.error} onRetry={() => st.reload()} /> : !st.data ? <LoadingRows /> : !rows.length ? (
          <EmptyState icon={Handshake} text={q ? 'No affiliates match.' : 'No affiliates yet.'} action={!q && <button className="btn btn-primary btn-sm" onClick={() => setCreating(true)}>New affiliate</button>} />
        ) : (
          <div className="overflow-x-auto">
            <table className="tbl">
              <thead><tr><th>Affiliate</th><th>Code</th><th className="r">Commission</th><th className="r">Visits</th><th className="r">Signups</th><th className="r">Subscriptions</th><th className="r">Revenue</th><th className="r">Earned</th><th>Status</th></tr></thead>
              <tbody>
                {rows.map(a => (
                  <tr key={a.id} className="clickable" onClick={() => setOpen(a)}>
                    <td><div className="font-medium">{a.name}</div><div className="caption">{a.email || '—'}</div></td>
                    <td><div className="flex items-center gap-1"><span className="mono">{a.code}</span><span onClick={e => e.stopPropagation()}><CopyButton text={a.link} /></span></div></td>
                    <td className="r">{pct(a.commission_bps)}</td>
                    <td className="r">{fmtNum(a.visits)}</td>
                    <td className="r">{fmtNum(a.signups)}</td>
                    <td className="r">{fmtNum(a.subscriptions)}</td>
                    <td className="r">{fmtMoney(a.revenue_cents)}</td>
                    <td className="r">{fmtMoney(a.commission_cents)}</td>
                    <td>{a.active ? <Pill tone="green" dot>Active</Pill> : <Pill dot>Paused</Pill>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <CreateModal open={creating} onClose={() => setCreating(false)} onDone={() => { toast('Affiliate created'); st.reload(true) }} />
      <Drawer open={!!open} onClose={() => setOpen(null)} title={open?.name || 'Affiliate'} subtitle={open?.code}>
        {open && <AffiliateDetail a={open} onChanged={() => st.reload(true)} />}
      </Drawer>
    </div>
  )
}

function validate(f: any, requireName = true) {
  const e: Record<string, string> = {}
  if (requireName && !f.name.trim()) e.name = 'Name is required'
  if (f.email && !EMAIL_RE.test(f.email.trim())) e.email = 'Enter a valid email'
  if (!/^\d+(\.\d{1,2})?$/.test(String(f.commission)) || +f.commission < 0 || +f.commission > 100) e.commission = '0 to 100'
  if (f.code !== undefined && f.code && !/^[A-Za-z0-9_-]{2,32}$/.test(f.code)) e.code = '2 to 32 letters, digits, dashes or underscores'
  return e
}

function CreateModal({ open, onClose, onDone }: { open: boolean; onClose: () => void; onDone: () => void }) {
  const blank = { name: '', email: '', code: '', commission: '20', coupon_code: '', landing_note: '' }
  const [f, setF] = useState(blank)
  const [errs, setErrs] = useState<Record<string, string>>({})
  const act = useAction()
  useEffect(() => { if (open) { setF(blank); setErrs({}); act.setError('') } }, [open]) // eslint-disable-line
  const set = (k: string, v: string) => setF(p => ({ ...p, [k]: v }))
  const submit = async () => {
    const e = validate(f); setErrs(e); if (Object.keys(e).length) return
    const r = await act.run(() => platform.post('saas/affiliates', { name: f.name.trim(), email: f.email.trim(), code: f.code.trim().toUpperCase(), commission_bps: Math.round(+f.commission * 100), coupon_code: f.coupon_code.trim().toUpperCase() || null, landing_note: f.landing_note.trim() }))
    if (r) { onClose(); onDone() }
  }
  return (
    <Modal open={open} onClose={onClose} title="New affiliate"
      footer={<><button className="btn btn-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary" onClick={submit} disabled={act.busy}>{act.busy && <Spinner size={14} />}Create affiliate</button></>}>
      <div className="grid grid-cols-2 gap-x-4">
        <Field label="Name" error={errs.name}><input className={`input ${errs.name ? 'invalid' : ''}`} value={f.name} onChange={e => set('name', e.target.value)} autoFocus maxLength={80} /></Field>
        <Field label="Email" error={errs.email}><input className={`input ${errs.email ? 'invalid' : ''}`} type="email" value={f.email} onChange={e => set('email', e.target.value)} /></Field>
        <Field label="Code" error={errs.code} hint="Blank uses the name."><input className={`input mono ${errs.code ? 'invalid' : ''}`} value={f.code} onChange={e => set('code', e.target.value.toUpperCase().replace(/\s/g, ''))} /></Field>
        <Field label="Commission (%)" error={errs.commission}><input className={`input ${errs.commission ? 'invalid' : ''}`} inputMode="decimal" value={f.commission} onChange={e => set('commission', e.target.value)} /></Field>
        <Field label="Coupon for referred visitors" hint="Optional existing coupon code."><input className="input mono" value={f.coupon_code} onChange={e => set('coupon_code', e.target.value.toUpperCase())} /></Field>
        <Field label="Note"><input className="input" value={f.landing_note} onChange={e => set('landing_note', e.target.value)} maxLength={200} /></Field>
      </div>
      {act.error && <div className="field-error">{act.error}</div>}
    </Modal>
  )
}

function AffiliateDetail({ a, onChanged }: { a: any; onChanged: () => void }) {
  const [f, setF] = useState({ name: a.name || '', email: a.email || '', commission: String((a.commission_bps || 0) / 100), coupon_code: a.coupon_code || '', landing_note: a.landing_note || '', active: !!a.active })
  const [errs, setErrs] = useState<Record<string, string>>({})
  const act = useAction()
  const toast = useToast()
  const ev = useLoad(() => platform.get(`saas/affiliates/${encodeURIComponent(a.id)}/events`), [a.id])
  const set = (k: string, v: any) => setF(p => ({ ...p, [k]: v }))
  const save = async () => {
    const e = validate(f); setErrs(e); if (Object.keys(e).length) return
    const r = await act.run(() => platform.patch(`saas/affiliates/${encodeURIComponent(a.id)}`, { name: f.name.trim(), email: f.email.trim(), commission_bps: Math.round(+f.commission * 100), coupon_code: f.coupon_code.trim().toUpperCase(), landing_note: f.landing_note.trim(), active: f.active }))
    if (r) { toast('Affiliate saved'); onChanged() }
  }
  const events: any[] = (ev.data as any)?.events || []
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[['Visits', fmtNum(a.visits)], ['Signups', fmtNum(a.signups)], ['Revenue', fmtMoney(a.revenue_cents)], ['Earned', fmtMoney(a.commission_cents)]].map(([k, v]) => (
          <div key={k} className="card" style={{ padding: 14 }}><div className="eyebrow">{k}</div><div className="stat-value" style={{ fontSize: 18 }}>{v}</div></div>
        ))}
      </div>
      <Card title="Referral link">
        <div className="flex items-center gap-2"><input className="input mono" readOnly value={a.link} onFocus={e => e.target.select()} /><CopyButton text={a.link} label="Copy" /></div>
      </Card>
      <Card title="Details" actions={<button className="btn btn-primary btn-sm" onClick={save} disabled={act.busy}>{act.busy && <Spinner size={14} />}Save</button>}>
        <div className="grid grid-cols-2 gap-x-4">
          <Field label="Name" error={errs.name}><input className={`input ${errs.name ? 'invalid' : ''}`} value={f.name} onChange={e => set('name', e.target.value)} /></Field>
          <Field label="Email" error={errs.email}><input className={`input ${errs.email ? 'invalid' : ''}`} value={f.email} onChange={e => set('email', e.target.value)} /></Field>
          <Field label="Commission (%)" error={errs.commission}><input className={`input ${errs.commission ? 'invalid' : ''}`} inputMode="decimal" value={f.commission} onChange={e => set('commission', e.target.value)} /></Field>
          <Field label="Coupon"><input className="input mono" value={f.coupon_code} onChange={e => set('coupon_code', e.target.value.toUpperCase())} /></Field>
        </div>
        <Field label="Note"><input className="input" value={f.landing_note} onChange={e => set('landing_note', e.target.value)} /></Field>
        <div className="flex items-center justify-between"><div><div className="text-[13.5px] font-medium">Active</div><div className="caption">Paused affiliates' links stop attributing.</div></div><Switch on={f.active} onChange={v => set('active', v)} label="Active" /></div>
        {act.error && <div className="field-error">{act.error}</div>}
      </Card>
      <Card title="Activity" bodyClass="">
        {ev.error && !ev.data ? <ErrorState message={ev.error} onRetry={() => ev.reload()} /> : !ev.data ? <LoadingRows rows={4} /> : !events.length ? <EmptyState text="No activity yet." /> : (
          <div className="overflow-x-auto"><table className="tbl">
            <thead><tr><th>Date</th><th>Event</th><th>Workspace</th><th className="r">Amount</th><th className="r">Commission</th></tr></thead>
            <tbody>{events.map(e => (
              <tr key={e.id}><td className="whitespace-nowrap">{fmtTs(e.created_at)}</td><td><StatusPill status={e.kind} /></td><td className="caption mono">{e.workspace_id || '—'}</td>
                <td className="r">{e.amount_cents ? fmtMoney(e.amount_cents, e.currency) : '—'}</td><td className="r">{e.commission_cents ? fmtMoney(e.commission_cents, e.currency) : '—'}</td></tr>
            ))}</tbody>
          </table></div>
        )}
      </Card>
    </div>
  )
}
