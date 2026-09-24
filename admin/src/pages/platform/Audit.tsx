import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { RotateCw, ScrollText } from 'lucide-react'
import { fmtTs, platform } from '../../api'
import { EmptyState, ErrorState, LoadingRows, PageHeader, SearchInput, useDebounced, useLoad } from '../../components/ui'

export default function AuditLog() {
  const [q, setQ] = useState('')
  const [ws, setWs] = useState('')
  const [limit, setLimit] = useState(200)
  const dws = useDebounced(ws.trim(), 400)
  const st = useLoad(() => platform.get(`saas/audit?limit=${limit}&workspace_id=${encodeURIComponent(dws)}`), [dws, limit])
  const rows = useMemo(() => {
    const n = q.trim().toLowerCase()
    return ((st.data as any)?.audit || []).filter((r: any) => !n || `${r.action} ${r.actor} ${r.detail}`.toLowerCase().includes(n))
  }, [st.data, q])
  return (
    <div>
      <PageHeader title="Audit log" description="Every operator and billing action on the platform."
        actions={<button className="btn btn-secondary" onClick={() => st.reload()}><RotateCw size={14} /> Refresh</button>} />
      <div className="flex items-center gap-3 flex-wrap mb-4">
        <SearchInput value={q} onChange={setQ} placeholder="Search action, actor or detail" />
        <input className="input mono" style={{ width: 240 }} value={ws} onChange={e => setWs(e.target.value)} placeholder="Workspace id" aria-label="Workspace id" />
        <select className="input" style={{ width: 130 }} value={limit} onChange={e => setLimit(+e.target.value)} aria-label="Rows">
          {[100, 200, 500, 1000].map(n => <option key={n} value={n}>Last {n}</option>)}
        </select>
      </div>
      <div className="card">
        {st.error && !st.data ? <ErrorState message={st.error} onRetry={() => st.reload()} /> : !st.data ? <LoadingRows /> : !rows.length ? <EmptyState icon={ScrollText} text="No entries." /> : (
          <div className="overflow-x-auto"><table className="tbl">
            <thead><tr><th>Time</th><th>Action</th><th>Actor</th><th>Workspace</th><th>Detail</th></tr></thead>
            <tbody>{rows.map((r: any) => (
              <tr key={r.id}>
                <td className="whitespace-nowrap">{fmtTs(r.ts)}</td>
                <td className="mono text-[12.5px] whitespace-nowrap">{r.action}</td>
                <td className="truncate" style={{ maxWidth: 200 }}>{r.actor || '—'}</td>
                <td>{r.workspace_id ? <Link to={`/saas/workspaces?ws=${encodeURIComponent(r.workspace_id)}`} className="mono text-[12px]" style={{ color: 'var(--accent)' }}>{r.workspace_id}</Link> : <span className="muted">—</span>}</td>
                <td className="caption" style={{ maxWidth: 420, overflowWrap: 'anywhere' }}>{r.detail || '—'}</td>
              </tr>
            ))}</tbody>
          </table></div>
        )}
      </div>
    </div>
  )
}
