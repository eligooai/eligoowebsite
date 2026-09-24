import { Link } from 'react-router-dom'
import { RotateCw, Webhook } from 'lucide-react'
import { fmtMoney, fmtNum, fmtTs, platform } from '../../api'
import { Card, EmptyState, ErrorState, LoadingRows, PageHeader, Pill, Stat, StatusPill, useAction, useLoad, useToast } from '../../components/ui'

export default function SaasOverview() {
  const ov = useLoad(() => platform.get('saas/overview'))
  const wh = useLoad(() => platform.get('saas/webhooks?limit=5'))
  const reg = useAction()
  const toast = useToast()
  const d: any = ov.data
  const w: any = wh.data

  const register = async () => {
    const r: any = await reg.run(() => platform.post('saas/webhooks/register'))
    if (r) { toast(r.created ? 'Webhook registered' : 'Webhook already registered'); if (r.note) toast(r.note, true); wh.reload(true) }
  }

  return (
    <div>
      <PageHeader title="Overview" description="Revenue and subscriptions across every workspace."
        actions={<button className="btn btn-secondary" onClick={() => { ov.reload(); wh.reload() }}><RotateCw size={14} /> Refresh</button>} />

      {ov.error && !d ? <div className="card"><ErrorState message={ov.error} onRetry={() => ov.reload()} /></div> : !d ? <div className="card"><LoadingRows rows={5} /></div> : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Stat label="MRR" value={fmtMoney(d.mrr_cents)} />
            <Stat label="Revenue (30 days)" value={fmtMoney(d.revenue_30d_cents)} hint={`${fmtMoney(d.revenue_total_cents)} all time`} />
            <Stat label="Active subscriptions" value={fmtNum(d.active)} />
            <Stat label="Trials" value={fmtNum(d.trials)} />
            <Stat label="Past due" value={fmtNum(d.past_due)} />
            <Stat label="Churn (30 days)" value={fmtNum(d.churn_30d)} />
            <Stat label="Users" value={fmtNum(d.users)} hint={`${fmtNum(d.new_users_7d)} new in 7 days`} />
            <Stat label="Active workspaces" value={fmtNum(d.workspaces)} />
          </div>

          <div className="grid lg:grid-cols-3 gap-4" style={{ marginTop: 32 }}>
            <Card title="Recent payments" className="lg:col-span-2" bodyClass="" actions={<Link to="/saas/workspaces" className="btn btn-plain btn-sm">Workspaces</Link>}>
              {!d.recent_payments?.length ? <EmptyState text="No payments yet." /> : (
                <div className="overflow-x-auto">
                  <table className="tbl">
                    <thead><tr><th>Date</th><th>Workspace</th><th>Type</th><th>Status</th><th className="r">Amount</th></tr></thead>
                    <tbody>
                      {d.recent_payments.map((p: any) => (
                        <tr key={p.id}>
                          <td className="whitespace-nowrap">{fmtTs(p.created_at)}</td>
                          <td className="truncate" style={{ maxWidth: 220 }}>{p.ws_name || p.workspace_id || '—'}</td>
                          <td className="capitalize">{p.kind || '—'}</td>
                          <td><StatusPill status={p.status} /></td>
                          <td className="r">{fmtMoney(p.amount_cents, p.currency)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>

            <Card title="Payments webhook" actions={<Link to="/platform/webhooks" className="btn btn-plain btn-sm">Deliveries</Link>}>
              {wh.error && !w ? <ErrorState message={wh.error} onRetry={() => wh.reload()} /> : !w ? <LoadingRows rows={3} /> : (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="muted text-[13px]">Payments provider</span>
                    {d.dodo?.configured ? <Pill tone="green" dot>Connected</Pill> : <Pill tone="amber" dot>API key missing</Pill>}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="muted text-[13px]">Webhook</span>
                    {w.registered_id && w.secret_set ? <Pill tone="green" dot>Registered</Pill> : w.secret_set ? <Pill tone="blue" dot>Secret set</Pill> : <Pill tone="amber" dot>Not registered</Pill>}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="muted text-[13px]">Last delivery</span>
                    <span className="text-[13px]">{w.receipts?.[0] ? fmtTs(w.receipts[0].received_at) : '—'}</span>
                  </div>
                  <div className="caption mono truncate" title={w.url}>{w.url}</div>
                  {reg.error && <div className="field-error">{reg.error}</div>}
                  <button className="btn btn-primary" onClick={register} disabled={reg.busy || !d.dodo?.configured}><Webhook size={14} /> {reg.busy ? 'Registering…' : 'Register webhook'}</button>
                </div>
              )}
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
