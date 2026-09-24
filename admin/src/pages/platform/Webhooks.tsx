import { useMemo, useState } from 'react'
import { RotateCw, Webhook } from 'lucide-react'
import { fmtTs, platform } from '../../api'
import { Card, CopyButton, EmptyState, ErrorState, LoadingRows, PageHeader, Pill, SearchInput, Spinner, StatusPill, useAction, useLoad, useToast } from '../../components/ui'

export default function Webhooks() {
  const st = useLoad(() => platform.get('saas/webhooks?limit=300'))
  const [q, setQ] = useState('')
  const reg = useAction()
  const toast = useToast()
  const d: any = st.data
  const rows = useMemo(() => { const n = q.trim().toLowerCase(); return (d?.receipts || []).filter((r: any) => !n || `${r.event_type} ${r.status} ${r.detail} ${r.id}`.toLowerCase().includes(n)) }, [d, q])
  const register = async () => {
    const r: any = await reg.run(() => platform.post('saas/webhooks/register'))
    if (r) { toast(r.created ? 'Webhook registered' : 'Webhook already registered'); if (r.note) toast(r.note, true); st.reload(true) }
  }
  return (
    <div>
      <PageHeader title="Webhooks" description="Payment events received from the payments provider."
        actions={<>
          <button className="btn btn-secondary" onClick={() => st.reload()}><RotateCw size={14} /> Refresh</button>
          <button className="btn btn-primary" onClick={register} disabled={reg.busy}>{reg.busy ? <Spinner size={14} /> : <Webhook size={14} />} Register webhook</button>
        </>} />
      {reg.error && <div className="field-error mb-4">{reg.error}</div>}
      {st.error && !d ? <div className="card"><ErrorState message={st.error} onRetry={() => st.reload()} /></div> : !d ? <div className="card"><LoadingRows /></div> : (
        <div className="flex flex-col gap-6">
          <Card title="Endpoint">
            <dl className="kv">
              <dt>URL</dt><dd className="flex items-center gap-1"><code className="text-[12.5px] break-all">{d.url}</code><CopyButton text={d.url} /></dd>
              <dt>Signing secret</dt><dd>{d.secret_set ? <Pill tone="green" dot>Set</Pill> : <Pill tone="amber" dot>Missing</Pill>}</dd>
              <dt>Registration</dt><dd>{d.registered_id ? <span className="mono text-[12.5px]">{d.registered_id}</span> : <Pill tone="amber" dot>Not registered</Pill>}</dd>
              <dt>Events</dt><dd><div className="flex flex-wrap gap-1">{(d.events || []).map((e: string) => <Pill key={e}>{e}</Pill>)}</div></dd>
            </dl>
          </Card>
          <div>
            <div className="flex items-center justify-between gap-3 mb-3 flex-wrap"><h2 className="section-title">Deliveries</h2><SearchInput value={q} onChange={setQ} placeholder="Filter deliveries" /></div>
            <div className="card">
              {!rows.length ? <EmptyState icon={Webhook} text={q ? 'No deliveries match.' : 'No deliveries yet.'} /> : (
                <div className="overflow-x-auto"><table className="tbl">
                  <thead><tr><th>Received</th><th>Event</th><th>Status</th><th>Result</th><th>Delivery id</th></tr></thead>
                  <tbody>{rows.map((r: any) => (
                    <tr key={r.id}>
                      <td className="whitespace-nowrap">{fmtTs(r.received_at)}</td>
                      <td className="mono text-[12.5px]">{r.event_type}</td>
                      <td><StatusPill status={r.status} /></td>
                      <td className="caption truncate" style={{ maxWidth: 320 }} title={r.detail}>{r.detail || '—'}</td>
                      <td className="mono caption truncate" style={{ maxWidth: 180 }}>{r.id}</td>
                    </tr>
                  ))}</tbody>
                </table></div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
