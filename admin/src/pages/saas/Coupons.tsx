import { useEffect, useMemo, useState } from 'react'
import { Plus, TicketPercent } from 'lucide-react'
import { fmtMoney, fmtTs, platform } from '../../api'
import { Confirm, EmptyState, ErrorState, Field, LoadingRows, Modal, PageHeader, Pill, SearchInput, Spinner, useAction, useLoad, useToast } from '../../components/ui'

const amountLabel = (c: any) => (c.type === 'percentage' ? `${(c.amount / 100).toLocaleString('en-US', { maximumFractionDigits: 2 })}%` : fmtMoney(c.amount, c.currency))

export default function SaasCoupons() {
  const st = useLoad(() => platform.get('saas/coupons'))
  const plans = useLoad(() => platform.get('saas/plans'))
  const [q, setQ] = useState('')
  const [creating, setCreating] = useState(false)
  const [off, setOff] = useState<any | null>(null)
  const toast = useToast()
  const planName = (id: string) => ((plans.data as any)?.plans || []).find((p: any) => p.id === id)?.name || id
  const rows = useMemo(() => {
    const n = q.trim().toLowerCase()
    return ((st.data as any)?.coupons || []).filter((c: any) => !n || `${c.code} ${c.name}`.toLowerCase().includes(n))
  }, [st.data, q])

  return (
    <div>
      <PageHeader title="Coupons" description="Discount codes customers enter at checkout."
        actions={<button className="btn btn-primary" onClick={() => setCreating(true)}><Plus size={15} /> New coupon</button>} />
      <div className="mb-4"><SearchInput value={q} onChange={setQ} placeholder="Search codes" /></div>
      <div className="card">
        {st.error && !st.data ? <ErrorState message={st.error} onRetry={() => st.reload()} /> : !st.data ? <LoadingRows /> : !rows.length ? (
          <EmptyState icon={TicketPercent} text={q ? 'No coupons match.' : 'No coupons yet.'} action={!q && <button className="btn btn-primary btn-sm" onClick={() => setCreating(true)}>New coupon</button>} />
        ) : (
          <div className="overflow-x-auto">
            <table className="tbl">
              <thead><tr><th>Code</th><th className="r">Discount</th><th className="r">Used</th><th>Plans</th><th>Cycles</th><th>Expires</th><th>Status</th><th></th></tr></thead>
              <tbody>
                {rows.map((c: any) => {
                  const expired = c.expires_at && c.expires_at * 1000 < Date.now()
                  return (
                    <tr key={c.code}>
                      <td><div className="font-medium mono">{c.code}</div>{c.name && c.name !== c.code && <div className="caption">{c.name}</div>}</td>
                      <td className="r">{amountLabel(c)}</td>
                      <td className="r">{c.times_used || 0}{c.usage_limit ? <span className="muted"> / {c.usage_limit}</span> : ''}</td>
                      <td>{c.restricted_plan_ids?.length ? c.restricted_plan_ids.map(planName).join(', ') : 'All'}</td>
                      <td>{c.subscription_cycles ? `${c.subscription_cycles}` : 'Forever'}</td>
                      <td className="whitespace-nowrap">{c.expires_at ? fmtTs(c.expires_at, false) : 'Never'}</td>
                      <td>{!c.active ? <Pill dot>Inactive</Pill> : expired ? <Pill tone="amber" dot>Expired</Pill> : <Pill tone="green" dot>Active</Pill>}</td>
                      <td className="r">{!!c.active && <button className="btn btn-danger btn-sm" onClick={() => setOff(c)}>Deactivate</button>}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <CouponModal open={creating} onClose={() => setCreating(false)} plans={((plans.data as any)?.plans || []).filter((p: any) => p.kind === 'paid')} onDone={() => { toast('Coupon created'); st.reload(true) }} />
      <Confirm open={!!off} onClose={() => setOff(null)} danger confirmLabel="Deactivate" title={`Deactivate ${off?.code}?`}
        description="The code stops working for new checkouts. Existing discounts are not changed."
        onConfirm={async () => { await platform.del(`saas/coupons/${encodeURIComponent(off.code)}`); toast('Coupon deactivated'); st.reload(true) }} />
    </div>
  )
}

function CouponModal({ open, onClose, plans, onDone }: { open: boolean; onClose: () => void; plans: any[]; onDone: () => void }) {
  const blank = { code: '', name: '', type: 'percentage', amount: '', usage_limit: '', expires: '', cycles: '', plan_ids: [] as string[] }
  const [f, setF] = useState(blank)
  const [errs, setErrs] = useState<Record<string, string>>({})
  const act = useAction()
  useEffect(() => { if (open) { setF(blank); setErrs({}); act.setError('') } }, [open]) // eslint-disable-line
  const set = (k: string, v: any) => setF(p => ({ ...p, [k]: v }))
  const submit = async () => {
    const e: Record<string, string> = {}
    if (!/^[A-Z0-9_-]{3,32}$/.test(f.code)) e.code = '3 to 32 letters, digits, dashes or underscores'
    if (f.type === 'percentage') { if (!/^\d+(\.\d{1,2})?$/.test(f.amount) || +f.amount <= 0 || +f.amount > 100) e.amount = 'Enter 0.01 to 100' }
    else if (!/^\d+(\.\d{1,2})?$/.test(f.amount) || +f.amount <= 0) e.amount = 'Enter an amount above 0'
    if (f.usage_limit && (!/^\d+$/.test(f.usage_limit) || +f.usage_limit < 1)) e.usage_limit = 'Whole number, 1 or more'
    if (f.cycles && (!/^\d+$/.test(f.cycles) || +f.cycles < 1)) e.cycles = 'Whole number, 1 or more'
    if (f.expires && new Date(f.expires + 'T23:59:59').getTime() < Date.now()) e.expires = 'Pick a future date'
    setErrs(e); if (Object.keys(e).length) return
    const body = {
      code: f.code, name: f.name.trim(), type: f.type, amount: Math.round(+f.amount * 100),
      usage_limit: f.usage_limit ? +f.usage_limit : null, expires_at: f.expires ? new Date(f.expires + 'T23:59:59').getTime() / 1000 : null,
      restricted_plan_ids: f.plan_ids, subscription_cycles: f.cycles ? +f.cycles : null,
    }
    const r = await act.run(() => platform.post('saas/coupons', body))
    if (r) { onClose(); onDone() }
  }
  const togglePlan = (id: string) => set('plan_ids', f.plan_ids.includes(id) ? f.plan_ids.filter(x => x !== id) : [...f.plan_ids, id])
  return (
    <Modal open={open} onClose={onClose} wide title="New coupon" description="Created with the payment provider so it works at checkout."
      footer={<><button className="btn btn-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary" onClick={submit} disabled={act.busy}>{act.busy && <Spinner size={14} />}Create coupon</button></>}>
      <div className="grid grid-cols-2 gap-x-4">
        <Field label="Code" error={errs.code}><input className={`input mono ${errs.code ? 'invalid' : ''}`} value={f.code} onChange={e => set('code', e.target.value.toUpperCase().replace(/\s/g, ''))} placeholder="LAUNCH20" autoFocus /></Field>
        <Field label="Name"><input className="input" value={f.name} onChange={e => set('name', e.target.value)} placeholder="Launch offer" maxLength={80} /></Field>
        <Field label="Type">
          <select className="input" value={f.type} onChange={e => set('type', e.target.value)}><option value="percentage">Percentage</option><option value="flat">Fixed amount (USD)</option></select>
        </Field>
        <Field label={f.type === 'percentage' ? 'Percent off' : 'Amount off (USD)'} error={errs.amount}>
          <input className={`input ${errs.amount ? 'invalid' : ''}`} inputMode="decimal" value={f.amount} onChange={e => set('amount', e.target.value)} placeholder={f.type === 'percentage' ? '20' : '10'} />
        </Field>
        <Field label="Usage limit" error={errs.usage_limit} hint="Blank for unlimited."><input className={`input ${errs.usage_limit ? 'invalid' : ''}`} inputMode="numeric" value={f.usage_limit} onChange={e => set('usage_limit', e.target.value)} /></Field>
        <Field label="Billing cycles" error={errs.cycles} hint="Blank applies to every renewal."><input className={`input ${errs.cycles ? 'invalid' : ''}`} inputMode="numeric" value={f.cycles} onChange={e => set('cycles', e.target.value)} /></Field>
        <Field label="Expires" error={errs.expires} hint="Blank never expires."><input type="date" className={`input ${errs.expires ? 'invalid' : ''}`} value={f.expires} onChange={e => set('expires', e.target.value)} /></Field>
      </div>
      <div className="field">
        <label className="field-label">Plans</label>
        <div className="flex flex-wrap gap-2">
          {plans.map(p => <label key={p.id} className="check card" style={{ padding: '6px 10px' }}><input type="checkbox" checked={f.plan_ids.includes(p.id)} onChange={() => togglePlan(p.id)} />{p.name}</label>)}
        </div>
        <div className="field-hint">None selected applies to every paid plan.</div>
      </div>
      {act.error && <div className="field-error">{act.error}</div>}
    </Modal>
  )
}
