import { useEffect, useState } from 'react'
import { Layers, Plus, RefreshCw, Star, Trash2 } from 'lucide-react'
import { EMPLOYEE_IDS, employeeName, fmtMoney, fmtNum, platform } from '../../api'
import { Confirm, Drawer, EmptyState, ErrorState, Field, LoadingRows, Modal, PageHeader, Pill, Spinner, Switch, useAction, useLoad, useToast } from '../../components/ui'

const KIND_LABEL: Record<string, string> = { paid: 'Paid', free_trial: 'Free trial', free: 'Free' }
const FEATURES: { key: 'calling' | 'publishing' | 'paid_ads' | 'meetings'; label: string }[] = [
  { key: 'calling', label: 'AI calling' }, { key: 'publishing', label: 'Publishing' }, { key: 'paid_ads', label: 'Paid ads' }, { key: 'meetings', label: 'Meetings' },
]

type Form = {
  name: string; description: string; kind: string; price: string; currency: string; interval: string; trial_days: string
  employee_cap: string; employees_allowed: string[]; calling: boolean; publishing: boolean; paid_ads: boolean; meetings: boolean
  seats: string; voice_minutes: string; active: boolean; sort_order: string; highlight: boolean
}
const EMPTY: Form = {
  name: '', description: '', kind: 'paid', price: '', currency: 'USD', interval: 'month', trial_days: '0', employee_cap: '8', employees_allowed: [],
  calling: true, publishing: true, paid_ads: false, meetings: true, seats: '2', voice_minutes: '0', active: true, sort_order: '0', highlight: false,
}
const toForm = (p: any): Form => ({
  name: p.name || '', description: p.description || '', kind: p.kind || 'paid', price: p.price_cents ? String(p.price_cents / 100) : '', currency: p.currency || 'USD',
  interval: p.interval || 'month', trial_days: String(p.trial_days ?? 0), employee_cap: String(p.employee_cap ?? 8), employees_allowed: p.employees_allowed || [],
  calling: !!p.features?.calling, publishing: !!p.features?.publishing, paid_ads: !!p.features?.paid_ads, meetings: !!p.features?.meetings,
  seats: String(p.features?.seats ?? 1), voice_minutes: String(p.voice_minutes ?? 0), active: !!p.active, sort_order: String(p.sort_order ?? 0), highlight: !!p.highlight,
})
const isInt = (s: string, min = 0, max = 1_000_000) => /^\d+$/.test(s.trim()) && +s >= min && +s <= max

export default function SaasPlans() {
  const st = useLoad(() => platform.get('saas/plans'))
  const [editing, setEditing] = useState<any | null>(null) // plan object or {} for new
  const [del, setDel] = useState<any | null>(null)
  const [syncOut, setSyncOut] = useState<any | null>(null)
  const sync = useAction()
  const toast = useToast()
  const plans: any[] = ((st.data as any)?.plans || []).filter((p: any) => p.kind !== 'topup')

  const runSync = async () => {
    const r: any = await sync.run(() => platform.post('saas/plans/sync'))
    if (r) { setSyncOut(r); st.reload(true) } else toast('Sync failed', true)
  }

  return (
    <div>
      <PageHeader title="Plans" description="What customers can buy: price, employees, seats, features and calling minutes."
        actions={<>
          <button className="btn btn-secondary" onClick={runSync} disabled={sync.busy}>{sync.busy ? <Spinner size={14} /> : <RefreshCw size={14} />} Sync to payments</button>
          <button className="btn btn-primary" onClick={() => setEditing({})}><Plus size={15} /> New plan</button>
        </>} />
      {sync.error && <div className="card mb-4" style={{ padding: '10px 16px', borderColor: '#FCA5A5' }}><span className="field-error" style={{ margin: 0 }}>{sync.error}</span></div>}
      <div className="card">
        {st.error && !st.data ? <ErrorState message={st.error} onRetry={() => st.reload()} /> : !st.data ? <LoadingRows /> : !plans.length ? (
          <EmptyState icon={Layers} text="No plans yet." action={<button className="btn btn-primary btn-sm" onClick={() => setEditing({})}>New plan</button>} />
        ) : (
          <div className="overflow-x-auto">
            <table className="tbl">
              <thead><tr><th>Plan</th><th>Type</th><th className="r">Price</th><th>Employees</th><th className="r">Seats</th><th className="r">Minutes</th><th>Features</th><th>Payments</th><th>Status</th><th></th></tr></thead>
              <tbody>
                {plans.map(p => (
                  <tr key={p.id} className="clickable" onClick={() => setEditing(p)}>
                    <td><div className="font-medium flex items-center gap-1.5">{p.name}{!!p.highlight && <Star size={12} style={{ color: 'var(--amber)' }} fill="currentColor" />}</div><div className="caption truncate" style={{ maxWidth: 260 }}>{p.description}</div></td>
                    <td>{KIND_LABEL[p.kind] || p.kind}{p.trial_days ? <div className="caption">{p.trial_days}-day trial</div> : null}</td>
                    <td className="r whitespace-nowrap">{p.kind === 'paid' ? <>{fmtMoney(p.price_cents, p.currency)}<span className="muted">/{p.interval === 'year' ? 'yr' : 'mo'}</span></> : <span className="muted">Free</span>}</td>
                    <td>{p.employees_allowed?.length ? <span title={p.employees_allowed.map(employeeName).join(', ')}>{p.employees_allowed.length} selected</span> : 'All'}<span className="caption"> · cap {p.employee_cap}</span></td>
                    <td className="r">{fmtNum(p.features?.seats ?? 0)}</td>
                    <td className="r">{fmtNum(p.voice_minutes ?? 0)}</td>
                    <td><div className="flex gap-1 flex-wrap">{FEATURES.filter(f => p.features?.[f.key]).map(f => <Pill key={f.key}>{f.label}</Pill>)}</div></td>
                    <td>{p.kind !== 'paid' ? <span className="muted">—</span> : p.dodo_product_id ? <Pill tone="green" dot>Synced</Pill> : <Pill tone="amber" dot>Not synced</Pill>}</td>
                    <td>{p.active ? <Pill tone="green" dot>Active</Pill> : <Pill dot>Inactive</Pill>}</td>
                    <td className="r"><button className="icon-btn" aria-label="Delete plan" onClick={e => { e.stopPropagation(); setDel(p) }}><Trash2 size={14} style={{ color: 'var(--red)' }} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <PlanDrawer plan={editing} onClose={() => setEditing(null)} onSaved={(p, isNew) => { toast(isNew ? 'Plan created' : 'Plan saved'); if (p?.dodo_error) toast(`Saved, but payments sync failed: ${p.dodo_error}`, true); st.reload(true) }} />
      <Confirm open={!!del} onClose={() => setDel(null)} danger confirmLabel="Delete plan" title={`Delete ${del?.name}?`}
        description="Plans with live subscriptions are deactivated instead, so existing customers keep them."
        onConfirm={async () => { await platform.del(`saas/plans/${encodeURIComponent(del.id)}`); toast('Plan deleted'); st.reload(true) }} />
      <Modal open={!!syncOut} onClose={() => setSyncOut(null)} title={syncOut?.ok ? 'Plans synced' : 'Sync finished with errors'}
        footer={<button className="btn btn-primary" onClick={() => setSyncOut(null)}>Done</button>}>
        {!syncOut?.results?.length ? <div className="muted text-[13px]">No active paid plans to sync.</div> : (
          <table className="tbl"><tbody>{syncOut.results.map((r: any) => (
            <tr key={r.id}><td className="font-medium">{plans.find(p => p.id === r.id)?.name || r.id}</td>
              <td>{r.error ? <span className="field-error" style={{ margin: 0 }}>{r.error}</span> : <Pill tone="green" dot>Synced</Pill>}</td></tr>
          ))}</tbody></table>
        )}
      </Modal>
    </div>
  )
}

function PlanDrawer({ plan, onClose, onSaved }: { plan: any | null; onClose: () => void; onSaved: (p: any, isNew: boolean) => void }) {
  const isNew = !!plan && !plan.id
  const [f, setF] = useState<Form>(EMPTY)
  const [errs, setErrs] = useState<Record<string, string>>({})
  const act = useAction()
  useEffect(() => { if (plan) { setF(plan.id ? toForm(plan) : EMPTY); setErrs({}); act.setError('') } }, [plan]) // eslint-disable-line
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF(p => ({ ...p, [k]: v }))
  const paid = f.kind === 'paid'

  const validate = () => {
    const e: Record<string, string> = {}
    if (!f.name.trim()) e.name = 'Name is required'
    if (paid) {
      if (!/^\d+(\.\d{1,2})?$/.test(f.price.trim()) || +f.price <= 0) e.price = 'Enter a price above 0, e.g. 49 or 49.99'
    }
    if (!/^[A-Za-z]{3}$/.test(f.currency.trim())) e.currency = 'Three-letter code, e.g. USD'
    if (!isInt(f.trial_days, 0, 365)) e.trial_days = '0 to 365'
    if (f.kind === 'free_trial' && +f.trial_days < 1) e.trial_days = 'A free trial needs at least 1 day'
    if (!isInt(f.employee_cap, 1, 99)) e.employee_cap = '1 to 99'
    if (!isInt(f.seats, 1, 999)) e.seats = '1 to 999'
    if (!isInt(f.voice_minutes, 0, 1_000_000)) e.voice_minutes = 'Whole minutes, 0 or more'
    if (!/^-?\d+$/.test(f.sort_order.trim())) e.sort_order = 'Whole number'
    setErrs(e)
    return !Object.keys(e).length
  }

  const save = async () => {
    if (!validate()) return
    const body = {
      name: f.name.trim(), description: f.description.trim(), kind: f.kind, price_cents: paid ? Math.round(+f.price * 100) : 0,
      currency: f.currency.trim().toUpperCase(), interval: f.interval, trial_days: +f.trial_days, employee_cap: +f.employee_cap,
      employees_allowed: f.employees_allowed, voice_minutes: +f.voice_minutes, active: f.active, sort_order: +f.sort_order, highlight: f.highlight,
      features: { ...(plan?.features || {}), calling: f.calling, publishing: f.publishing, paid_ads: f.paid_ads, meetings: f.meetings, seats: +f.seats },
    }
    const r = await act.run(() => isNew ? platform.post('saas/plans', body) : platform.patch(`saas/plans/${encodeURIComponent(plan.id)}`, body))
    if (r) { onSaved(r, isNew); onClose() }
  }
  const toggleEmp = (id: string) => set('employees_allowed', f.employees_allowed.includes(id) ? f.employees_allowed.filter(x => x !== id) : [...f.employees_allowed, id])

  return (
    <Drawer open={!!plan} onClose={onClose} title={isNew ? 'New plan' : plan?.name || 'Plan'} subtitle={isNew ? undefined : plan?.id}
      actions={<button className="btn btn-primary btn-sm" onClick={save} disabled={act.busy}>{act.busy && <Spinner size={14} />}{isNew ? 'Create plan' : 'Save'}</button>}>
      <div className="flex flex-col">
        <Field label="Name" error={errs.name}><input className={`input ${errs.name ? 'invalid' : ''}`} value={f.name} onChange={e => set('name', e.target.value)} maxLength={80} /></Field>
        <Field label="Description" hint="Shown on the pricing page."><textarea className="input" rows={2} value={f.description} onChange={e => set('description', e.target.value)} maxLength={300} /></Field>
        <div className="grid grid-cols-2 gap-x-4">
          <Field label="Type">
            <select className="input" value={f.kind} onChange={e => set('kind', e.target.value)}>
              <option value="paid">Paid</option><option value="free_trial">Free trial</option><option value="free">Free</option>
            </select>
          </Field>
          <Field label="Billing interval">
            <select className="input" value={f.interval} onChange={e => set('interval', e.target.value)} disabled={!paid}>
              <option value="month">Monthly</option><option value="year">Yearly</option>
            </select>
          </Field>
          <Field label="Price" error={errs.price}>
            <input className={`input ${errs.price ? 'invalid' : ''}`} inputMode="decimal" value={paid ? f.price : ''} placeholder={paid ? '49' : 'Free'} disabled={!paid} onChange={e => set('price', e.target.value)} />
          </Field>
          <Field label="Currency" error={errs.currency}><input className={`input ${errs.currency ? 'invalid' : ''}`} value={f.currency} maxLength={3} onChange={e => set('currency', e.target.value.toUpperCase())} /></Field>
          <Field label="Trial days" error={errs.trial_days} hint={paid ? 'Card-on-file trial before the first charge.' : f.kind === 'free_trial' ? 'Length of the free trial.' : undefined}>
            <input className={`input ${errs.trial_days ? 'invalid' : ''}`} inputMode="numeric" value={f.trial_days} onChange={e => set('trial_days', e.target.value)} />
          </Field>
          <Field label="Calling minutes per period" error={errs.voice_minutes} hint="Included each billing period; does not roll over.">
            <input className={`input ${errs.voice_minutes ? 'invalid' : ''}`} inputMode="numeric" value={f.voice_minutes} onChange={e => set('voice_minutes', e.target.value)} />
          </Field>
          <Field label="Seats" error={errs.seats}><input className={`input ${errs.seats ? 'invalid' : ''}`} inputMode="numeric" value={f.seats} onChange={e => set('seats', e.target.value)} /></Field>
          <Field label="Employee cap" error={errs.employee_cap} hint="How many employees can be active at once."><input className={`input ${errs.employee_cap ? 'invalid' : ''}`} inputMode="numeric" value={f.employee_cap} onChange={e => set('employee_cap', e.target.value)} /></Field>
        </div>

        <div className="field">
          <label className="field-label">Employees</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {EMPLOYEE_IDS.map(id => (
              <label key={id} className="check card" style={{ padding: '8px 10px' }}>
                <input type="checkbox" checked={f.employees_allowed.includes(id)} onChange={() => toggleEmp(id)} />{employeeName(id)}
              </label>
            ))}
          </div>
          <div className="field-hint">{f.employees_allowed.length ? `${f.employees_allowed.length} selected` : 'None selected means every employee is included.'}</div>
        </div>

        <div className="field">
          <label className="field-label">Features</label>
          <div className="card">
            {FEATURES.map((ft, i) => (
              <div key={ft.key} className="flex items-center justify-between" style={{ padding: '10px 14px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                <span className="text-[13.5px]">{ft.label}</span><Switch on={f[ft.key]} onChange={v => set(ft.key, v)} label={ft.label} />
              </div>
            ))}
          </div>
        </div>

        <div className="field">
          <label className="field-label">Visibility</label>
          <div className="card">
            <div className="flex items-center justify-between" style={{ padding: '10px 14px' }}>
              <div><div className="text-[13.5px]">Active</div><div className="caption">Inactive plans are hidden from new customers.</div></div><Switch on={f.active} onChange={v => set('active', v)} label="Active" />
            </div>
            <div className="flex items-center justify-between" style={{ padding: '10px 14px', borderTop: '1px solid var(--border)' }}>
              <div><div className="text-[13.5px]">Highlight</div><div className="caption">Marked as recommended on the pricing page.</div></div><Switch on={f.highlight} onChange={v => set('highlight', v)} label="Highlight" />
            </div>
          </div>
        </div>
        <Field label="Sort order" error={errs.sort_order} hint="Lower numbers are shown first."><input className={`input ${errs.sort_order ? 'invalid' : ''}`} style={{ width: 120 }} inputMode="numeric" value={f.sort_order} onChange={e => set('sort_order', e.target.value)} /></Field>
        {act.error && <div className="field-error">{act.error}</div>}
      </div>
    </Drawer>
  )
}
