import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Building2 } from 'lucide-react'
import { fmtNum, fmtTs, platform } from '../../api'
import { EmptyState, ErrorState, LoadingRows, PageHeader, Pill, SearchInput, StatusPill, useDebounced, useLoad } from '../../components/ui'
import WorkspaceDrawer from './WorkspaceDrawer'

const FILTERS = [
  { id: 'all', label: 'All' }, { id: 'active', label: 'Active' }, { id: 'trialing', label: 'Trialing' },
  { id: 'past_due', label: 'Past due' }, { id: 'none', label: 'No plan' }, { id: 'suspended', label: 'Suspended' },
]

export default function SaasWorkspaces() {
  const [params, setParams] = useSearchParams()
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('all')
  const dq = useDebounced(q)
  const st = useLoad(() => platform.get(`saas/workspaces?limit=500&q=${encodeURIComponent(dq)}`), [dq])
  const openId = params.get('ws')
  const setOpen = (id: string | null) => { const p = new URLSearchParams(params); if (id) p.set('ws', id); else p.delete('ws'); setParams(p, { replace: true }) }

  const rows = useMemo(() => {
    const list: any[] = (st.data as any)?.workspaces || []
    return list.filter(w => {
      if (filter === 'all') return true
      if (filter === 'suspended') return w.status === 'suspended'
      if (filter === 'past_due') return ['past_due', 'on_hold'].includes(w.billing_status)
      if (filter === 'none') return !w.unlimited && (!w.billing_status || ['none', 'expired', 'cancelled'].includes(w.billing_status))
      return w.billing_status === filter
    })
  }, [st.data, filter])

  return (
    <div>
      <PageHeader title="Workspaces" description="Every customer workspace, its plan and billing state." />
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
        <SearchInput value={q} onChange={setQ} placeholder="Search by name or owner email" />
        <div className="segmented">{FILTERS.map(f => <button key={f.id} className={filter === f.id ? 'on' : ''} onClick={() => setFilter(f.id)}>{f.label}</button>)}</div>
      </div>
      <div className="card">
        {st.error && !st.data ? <ErrorState message={st.error} onRetry={() => st.reload()} /> : !st.data ? <LoadingRows /> : !rows.length ? (
          <EmptyState icon={Building2} text={q || filter !== 'all' ? 'No workspaces match.' : 'No workspaces yet.'} />
        ) : (
          <div className="overflow-x-auto">
            <table className="tbl">
              <thead><tr><th>Workspace</th><th>Owner</th><th>Plan</th><th>Billing</th><th>Status</th><th className="r">Members</th><th>Created</th></tr></thead>
              <tbody>
                {rows.map(w => (
                  <tr key={w.id} className="clickable" onClick={() => setOpen(w.id)}>
                    <td><div className="font-medium">{w.name}</div><div className="caption">{w.slug}</div></td>
                    <td><div>{w.owner_name || '—'}</div><div className="caption">{w.owner_email}</div></td>
                    <td>{w.unlimited ? <Pill tone="accent">Unlimited</Pill> : w.plan?.name || <span className="muted">—</span>}</td>
                    <td><StatusPill status={w.unlimited ? 'active' : w.billing_status} /></td>
                    <td><StatusPill status={w.status} /></td>
                    <td className="r">{fmtNum(w.members)}</td>
                    <td className="whitespace-nowrap">{fmtTs(w.created_at, false)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {st.data && <div className="caption mt-3">{rows.length} of {(st.data as any).workspaces.length} workspaces</div>}
      <WorkspaceDrawer id={openId} onClose={() => setOpen(null)} onChanged={() => st.reload(true)} />
    </div>
  )
}
