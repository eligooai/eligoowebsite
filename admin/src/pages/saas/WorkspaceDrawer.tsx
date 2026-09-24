import { useEffect, useState } from 'react'
import { CalendarPlus, Ban, Layers, PauseCircle, PlayCircle } from 'lucide-react'
import { fmtMoney, fmtNum, fmtTs, platform } from '../../api'
import { Card, Confirm, Drawer, EmptyState, ErrorState, Field, LoadingRows, Modal, Pill, Spinner, StatusPill, Switch, useAction, useLoad, useToast } from '../../components/ui'

const parseMeta = (m: any) => { if (m && typeof m === 'object') return m; try { return JSON.parse(m || '{}') } catch { return {} } }

export default function WorkspaceDrawer({ id, onClose, onChanged }: { id: string | null; onClose: () => void; onChanged?: () => void }) {
  return (
    <Drawer open={!!id} onClose={onClose} title="Workspace" subtitle={id || ''}>
      {id && <WorkspaceDetail id={id} onChanged={onChanged} />}
    </Drawer>
  )
}

function WorkspaceDetail({ id, onChanged }: { id: string; onChanged?: () => void }) {
  const st = useLoad(() => platform.get(`saas/workspaces/${encodeURIComponent(id)}`), [id])
  const plans = useLoad(() => platform.get('saas/plans'))
  const toast = useToast()
  const [modal, setModal] = useState<'' | 'plan' | 'extend' | 'cancel' | 'suspend' | 'minutes'>('')
  const act = useAction()

  if (st.error && !st.data) return <ErrorState message={st.error} onRetry={() => st.reload()} />
  if (!st.data) return <LoadingRows rows={8} />
  const d: any = st.data
  const w = d.workspace || {}
  const meta = parseMeta(w.meta)
  const ent = d.entitlements || {}
  const sub = d.subscription
  const vm = ent.voice_minutes || {}
  const unlimited = !!(ent.unlimited || meta.unlimited)
  const suspended = w.status === 'suspended'
  const refresh = () => { st.reload(true); onChanged?.() }
  const ws = `saas/workspaces/${encodeURIComponent(id)}`

  const toggleUnlimited = async (v: boolean) => {
    const r = await act.run(() => platform.patch(ws, { unlimited: v }))
    if (r) { toast(v ? 'Unlimited access on' : 'Unlimited access off'); refresh() } else toast('Could not update the workspace', true)
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="section-title" style={{ fontSize: 18 }}>{w.name}</h3>
          <StatusPill status={w.status} />
          {unlimited && <Pill tone="accent">Unlimited</Pill>}
        </div>
        <div className="caption mt-1">{w.slug ? `/${w.slug} · ` : ''}Created {fmtTs(w.created_at, false)}{d.affiliate_id ? ` · Referred (${d.affiliate_id})` : ''}</div>
      </div>

      <Card title="Plan">
        <dl className="kv">
          <dt>Plan</dt><dd>{ent.plan?.name || (unlimited ? 'Unlimited' : '—')}</dd>
          <dt>Billing status</dt><dd><StatusPill status={unlimited ? 'active' : ent.status} /></dd>
          <dt>Provider</dt><dd className="capitalize">{sub?.provider || '—'}{sub?.meta?.manual ? ' (manual)' : ''}</dd>
          <dt>{sub?.trial_end ? 'Trial ends' : 'Period ends'}</dt><dd>{fmtTs(sub?.trial_end || sub?.current_period_end, false)}</dd>
          {sub?.cancel_at_period_end ? <><dt>Renewal</dt><dd><Pill tone="amber">Cancels at period end</Pill></dd></> : null}
          {sub?.coupon_code && <><dt>Coupon</dt><dd className="mono">{sub.coupon_code}</dd></>}
          {ent.blocked && <><dt>Access</dt><dd><Pill tone="red">{ent.blocked.message}</Pill></dd></>}
        </dl>
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="btn btn-primary btn-sm" onClick={() => setModal('plan')}><Layers size={14} /> Assign plan</button>
          <button className="btn btn-secondary btn-sm" disabled={!sub} onClick={() => setModal('extend')}><CalendarPlus size={14} /> Extend</button>
          <button className="btn btn-danger btn-sm" disabled={!sub || ['cancelled', 'expired'].includes(sub?.status)} onClick={() => setModal('cancel')}><Ban size={14} /> Cancel subscription</button>
        </div>
      </Card>

      <Card title="Calling minutes" actions={<button className="btn btn-secondary btn-sm" onClick={() => setModal('minutes')}>Adjust</button>}>
        {unlimited ? <div className="muted text-[13px]">Unlimited workspaces are not metered.</div> : (
          <div className="grid grid-cols-3 gap-4">
            <div><div className="eyebrow">Plan left</div><div className="stat-value" style={{ fontSize: 20 }}>{fmtNum(vm.plan_left ?? 0)}</div><div className="caption">of {fmtNum(vm.included ?? 0)} per period</div></div>
            <div><div className="eyebrow">Purchased left</div><div className="stat-value" style={{ fontSize: 20 }}>{fmtNum(vm.purchased_left ?? 0)}</div><div className="caption">rolls over</div></div>
            <div><div className="eyebrow">Total</div><div className="stat-value" style={{ fontSize: 20 }}>{fmtNum(vm.total_left ?? 0)}</div><div className="caption">{vm.period_end ? `resets ${fmtTs(vm.period_end, false)}` : ' '}</div></div>
          </div>
        )}
      </Card>

      <Card title="Access">
        <div className="flex items-center justify-between gap-4 py-1">
          <div><div className="text-[13.5px] font-medium">Unlimited</div><div className="caption">No plan limits and no metering.</div></div>
          <div className="flex items-center gap-2">{act.busy && <Spinner size={14} />}<Switch on={!!meta.unlimited} onChange={toggleUnlimited} label="Unlimited" disabled={act.busy} /></div>
        </div>
        <div className="flex items-center justify-between gap-4 pt-3 mt-3" style={{ borderTop: '1px solid var(--border)' }}>
          <div><div className="text-[13.5px] font-medium">{suspended ? 'Suspended' : 'Active'}</div><div className="caption">{suspended ? 'Members cannot use the workspace.' : 'Suspending blocks every member immediately.'}</div></div>
          <button className={`btn btn-sm ${suspended ? 'btn-secondary' : 'btn-danger'}`} onClick={() => setModal('suspend')}>
            {suspended ? <><PlayCircle size={14} /> Reactivate</> : <><PauseCircle size={14} /> Suspend</>}
          </button>
        </div>
      </Card>

      <Card title={`Members (${d.members?.length || 0})`} bodyClass="">
        {!d.members?.length ? <EmptyState text="No members." /> : (
          <div className="overflow-x-auto"><table className="tbl">
            <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th></tr></thead>
            <tbody>{d.members.map((m: any) => (
              <tr key={m.id}><td className="font-medium">{m.name || '—'}</td><td>{m.email}</td><td className="capitalize">{m.role}</td><td className="whitespace-nowrap">{fmtTs(m.joined_at, false)}</td></tr>
            ))}</tbody>
          </table></div>
        )}
      </Card>

      <Card title="Payments" bodyClass="">
        {!d.payments?.length ? <EmptyState text="No payments yet." /> : (
          <div className="overflow-x-auto"><table className="tbl">
            <thead><tr><th>Date</th><th>Type</th><th>Status</th><th className="r">Amount</th></tr></thead>
            <tbody>{d.payments.map((p: any) => (
              <tr key={p.id}><td className="whitespace-nowrap">{fmtTs(p.created_at)}</td><td className="capitalize">{p.kind}</td><td><StatusPill status={p.status} /></td><td className="r">{fmtMoney(p.amount_cents, p.currency)}</td></tr>
            ))}</tbody>
          </table></div>
        )}
      </Card>

      {d.stats && Object.keys(d.stats).length > 0 && (
        <Card title="Usage">
          <dl className="kv"><dt>Tasks</dt><dd className="num">{fmtNum(d.stats.tasks)}</dd><dt>Leads</dt><dd className="num">{fmtNum(d.stats.leads)}</dd></dl>
        </Card>
      )}

      <AssignPlanModal open={modal === 'plan'} onClose={() => setModal('')} ws={ws} plans={(plans.data as any)?.plans || []} current={ent.plan?.id} onDone={() => { toast('Plan assigned'); refresh() }} />
      <DaysModal open={modal === 'extend'} onClose={() => setModal('')} ws={ws} onDone={() => { toast('Subscription extended'); refresh() }} />
      <MinutesModal open={modal === 'minutes'} onClose={() => setModal('')} ws={ws} onDone={() => { toast('Minutes adjusted'); refresh() }} />
      <Confirm open={modal === 'cancel'} onClose={() => setModal('')} danger confirmLabel="Cancel subscription" title="Cancel this subscription now?"
        description="The workspace loses access immediately. Paid subscriptions are also cancelled with the payment provider."
        onConfirm={async () => { await platform.post(`${ws}/cancel`); toast('Subscription cancelled'); refresh() }} />
      <Confirm open={modal === 'suspend'} onClose={() => setModal('')} danger={!suspended} confirmLabel={suspended ? 'Reactivate' : 'Suspend'}
        title={suspended ? 'Reactivate this workspace?' : 'Suspend this workspace?'}
        description={suspended ? 'Members regain access right away.' : 'Every member is blocked and employees stop working until it is reactivated.'}
        onConfirm={async () => { await platform.patch(ws, { status: suspended ? 'active' : 'suspended' }); toast(suspended ? 'Workspace reactivated' : 'Workspace suspended'); refresh() }} />
    </div>
  )
}

function AssignPlanModal({ open, onClose, ws, plans, current, onDone }: { open: boolean; onClose: () => void; ws: string; plans: any[]; current?: string; onDone: () => void }) {
  const [planId, setPlanId] = useState('')
  const [days, setDays] = useState('')
  const [note, setNote] = useState('')
  const [errs, setErrs] = useState<Record<string, string>>({})
  const act = useAction()
  useEffect(() => { if (open) { setPlanId(current || ''); setDays(''); setNote(''); setErrs({}); act.setError('') } }, [open]) // eslint-disable-line
  const plan = plans.find(p => p.id === planId)
  const submit = async () => {
    const e: Record<string, string> = {}
    if (!planId) e.plan = 'Choose a plan'
    if (days && (!/^\d+$/.test(days) || +days < 1 || +days > 3650)) e.days = 'Enter 1 to 3650 days'
    setErrs(e); if (Object.keys(e).length) return
    const r = await act.run(() => platform.post(`${ws}/plan`, { plan_id: planId, days: days ? +days : null, note }))
    if (r) { onClose(); onDone() }
  }
  return (
    <Modal open={open} onClose={onClose} title="Assign plan" description="Starts the plan now without a card."
      footer={<><button className="btn btn-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary" onClick={submit} disabled={act.busy}>{act.busy && <Spinner size={14} />}Assign</button></>}>
      <Field label="Plan" error={errs.plan}>
        <select className={`input ${errs.plan ? 'invalid' : ''}`} value={planId} onChange={e => setPlanId(e.target.value)}>
          <option value="">Choose a plan</option>
          {plans.map(p => <option key={p.id} value={p.id}>{p.name}{p.kind !== 'paid' ? ` (${p.kind.replace('_', ' ')})` : ` · ${fmtMoney(p.price_cents, p.currency)}/${p.interval}`}{!p.active ? ' · inactive' : ''}</option>)}
        </select>
      </Field>
      <Field label="Days" error={errs.days} hint={`Default: ${plan?.trial_days || 30} days`}>
        <input className={`input ${errs.days ? 'invalid' : ''}`} inputMode="numeric" value={days} onChange={e => setDays(e.target.value)} placeholder={String(plan?.trial_days || 30)} />
      </Field>
      <Field label="Note" hint="Saved on the subscription and in the audit log.">
        <input className="input" value={note} onChange={e => setNote(e.target.value)} maxLength={200} placeholder="e.g. Sales-led pilot" />
      </Field>
      {act.error && <div className="field-error">{act.error}</div>}
    </Modal>
  )
}

function DaysModal({ open, onClose, ws, onDone }: { open: boolean; onClose: () => void; ws: string; onDone: () => void }) {
  const [days, setDays] = useState('7')
  const [err, setErr] = useState('')
  const act = useAction()
  useEffect(() => { if (open) { setDays('7'); setErr(''); act.setError('') } }, [open]) // eslint-disable-line
  const submit = async () => {
    if (!/^\d+$/.test(days) || +days < 1 || +days > 3650) { setErr('Enter 1 to 3650 days'); return }
    setErr('')
    const r = await act.run(() => platform.post(`${ws}/extend`, { days: +days }))
    if (r) { onClose(); onDone() }
  }
  return (
    <Modal open={open} onClose={onClose} title="Extend subscription" description="Moves the trial or period end forward. Expired subscriptions are reopened."
      footer={<><button className="btn btn-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary" onClick={submit} disabled={act.busy}>{act.busy && <Spinner size={14} />}Extend</button></>}>
      <Field label="Days" error={err}><input className={`input ${err ? 'invalid' : ''}`} inputMode="numeric" value={days} onChange={e => setDays(e.target.value)} autoFocus /></Field>
      {act.error && <div className="field-error">{act.error}</div>}
    </Modal>
  )
}

function MinutesModal({ open, onClose, ws, onDone }: { open: boolean; onClose: () => void; ws: string; onDone: () => void }) {
  const [mode, setMode] = useState<'add' | 'deduct'>('add')
  const [minutes, setMinutes] = useState('')
  const [note, setNote] = useState('')
  const [err, setErr] = useState('')
  const act = useAction()
  useEffect(() => { if (open) { setMode('add'); setMinutes(''); setNote(''); setErr(''); act.setError('') } }, [open]) // eslint-disable-line
  const submit = async () => {
    if (!/^\d+$/.test(minutes) || +minutes < 1 || +minutes > 1_000_000) { setErr('Enter a whole number of minutes'); return }
    setErr('')
    const n = mode === 'add' ? +minutes : -minutes
    const r = await act.run(() => platform.post(`${ws}/minutes`, { minutes: n, note }))
    if (r) { onClose(); onDone() }
  }
  return (
    <Modal open={open} onClose={onClose} title="Adjust calling minutes" description="Added minutes are purchased minutes and roll over. Deductions use plan minutes first."
      footer={<><button className="btn btn-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary" onClick={submit} disabled={act.busy}>{act.busy && <Spinner size={14} />}{mode === 'add' ? 'Add minutes' : 'Deduct minutes'}</button></>}>
      <div className="segmented mb-4">
        <button className={mode === 'add' ? 'on' : ''} onClick={() => setMode('add')}>Add</button>
        <button className={mode === 'deduct' ? 'on' : ''} onClick={() => setMode('deduct')}>Deduct</button>
      </div>
      <Field label="Minutes" error={err}><input className={`input ${err ? 'invalid' : ''}`} inputMode="numeric" value={minutes} onChange={e => setMinutes(e.target.value)} autoFocus /></Field>
      <Field label="Note"><input className="input" value={note} onChange={e => setNote(e.target.value)} maxLength={200} placeholder="e.g. Goodwill credit" /></Field>
      {act.error && <div className="field-error">{act.error}</div>}
    </Modal>
  )
}
