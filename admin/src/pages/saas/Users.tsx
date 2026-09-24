import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, ShieldCheck, UserRound } from 'lucide-react'
import { fmtNum, fmtTs, platform } from '../../api'
import { Card, Confirm, Drawer, EmptyState, ErrorState, LoadingRows, PageHeader, Pill, SearchInput, StatusPill, useDebounced, useLoad, useToast } from '../../components/ui'

export default function SaasUsers() {
  const [q, setQ] = useState('')
  const dq = useDebounced(q)
  const st = useLoad(() => platform.get(`saas/users?limit=500&q=${encodeURIComponent(dq)}`), [dq])
  const [open, setOpen] = useState<string | null>(null)
  const users: any[] = (st.data as any)?.users || []

  return (
    <div>
      <PageHeader title="Users" description="Everyone who has signed in to the platform." />
      <div className="mb-4"><SearchInput value={q} onChange={setQ} placeholder="Search by name or email" /></div>
      <div className="card">
        {st.error && !st.data ? <ErrorState message={st.error} onRetry={() => st.reload()} /> : !st.data ? <LoadingRows /> : !users.length ? (
          <EmptyState icon={UserRound} text={q ? 'No users match.' : 'No users yet.'} />
        ) : (
          <div className="overflow-x-auto">
            <table className="tbl">
              <thead><tr><th>User</th><th>Status</th><th className="r">Workspaces</th><th>Signed up</th><th>Last seen</th></tr></thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id} className="clickable" onClick={() => setOpen(u.id)}>
                    <td>
                      <div className="flex items-center gap-3">
                        {u.image_url ? <img src={u.image_url} alt="" className="rounded-full" style={{ width: 26, height: 26 }} /> : <div className="rounded-full flex items-center justify-center text-[11px] font-medium" style={{ width: 26, height: 26, background: 'var(--elevated)' }}>{(u.name || u.email || '?').slice(0, 1).toUpperCase()}</div>}
                        <div className="min-w-0"><div className="font-medium truncate">{u.name || '—'}</div><div className="caption truncate">{u.email}</div></div>
                      </div>
                    </td>
                    <td><StatusPill status={u.suspended ? 'suspended' : 'active'} /></td>
                    <td className="r">{fmtNum(u.workspaces)}</td>
                    <td className="whitespace-nowrap">{fmtTs(u.created_at, false)}</td>
                    <td className="whitespace-nowrap">{fmtTs(u.last_seen_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {st.data && <div className="caption mt-3">{users.length} users</div>}
      <Drawer open={!!open} onClose={() => setOpen(null)} title="User" subtitle={open || ''}>
        {open && <UserDetail id={open} onChanged={() => st.reload(true)} />}
      </Drawer>
    </div>
  )
}

function UserDetail({ id, onChanged }: { id: string; onChanged: () => void }) {
  const st = useLoad(() => platform.get(`saas/users/${encodeURIComponent(id)}`), [id])
  const [confirm, setConfirm] = useState(false)
  const toast = useToast()
  const nav = useNavigate()
  if (st.error && !st.data) return <ErrorState message={st.error} onRetry={() => st.reload()} />
  if (!st.data) return <LoadingRows rows={6} />
  const d: any = st.data
  const u = d.user || {}
  const suspended = !!u.suspended
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        {u.image_url ? <img src={u.image_url} alt="" className="rounded-full" style={{ width: 44, height: 44 }} /> : null}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap"><h3 className="section-title" style={{ fontSize: 18 }}>{u.name || u.email}</h3>
            <StatusPill status={suspended ? 'suspended' : 'active'} />{d.is_admin && <Pill tone="blue"><ShieldCheck size={12} /> Admin</Pill>}</div>
          <div className="caption">{u.email}</div>
        </div>
      </div>
      <Card title="Details">
        <dl className="kv">
          <dt>User id</dt><dd className="mono text-[12px]">{u.id}</dd>
          <dt>Signed up</dt><dd>{fmtTs(u.created_at)}</dd>
          <dt>Last seen</dt><dd>{fmtTs(u.last_seen_at)}</dd>
        </dl>
      </Card>
      <Card title={`Workspaces (${d.workspaces?.length || 0})`} bodyClass="">
        {!d.workspaces?.length ? <EmptyState text="Not a member of any workspace." /> : (
          <table className="tbl"><tbody>
            {d.workspaces.map((w: any) => (
              <tr key={w.id} className="clickable" onClick={() => nav(`/saas/workspaces?ws=${encodeURIComponent(w.id)}`)}>
                <td><div className="font-medium">{w.name}</div><div className="caption">{w.slug}</div></td>
                <td className="capitalize">{w.role}</td>
                <td><StatusPill status={w.status} /></td>
                <td className="r"><ChevronRight size={15} className="muted" /></td>
              </tr>
            ))}
          </tbody></table>
        )}
      </Card>
      <Card title="Access">
        <div className="flex items-center justify-between gap-4">
          <div className="caption" style={{ fontSize: 13 }}>{suspended ? 'This user cannot sign in to any workspace.' : 'Suspending signs this user out of every workspace.'}</div>
          <button className={`btn btn-sm ${suspended ? 'btn-secondary' : 'btn-danger'}`} onClick={() => setConfirm(true)}>{suspended ? 'Reinstate' : 'Suspend user'}</button>
        </div>
      </Card>
      <Confirm open={confirm} onClose={() => setConfirm(false)} danger={!suspended} confirmLabel={suspended ? 'Reinstate' : 'Suspend'}
        title={suspended ? `Reinstate ${u.email}?` : `Suspend ${u.email}?`}
        description={suspended ? 'They can sign in again right away.' : 'They are blocked from every workspace until reinstated.'}
        onConfirm={async () => { await platform.post(`saas/users/${encodeURIComponent(id)}/suspend`, { suspended: !suspended }); toast(suspended ? 'User reinstated' : 'User suspended'); st.reload(true); onChanged() }} />
    </div>
  )
}
