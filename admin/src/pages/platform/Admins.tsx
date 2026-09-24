import { useState } from 'react'
import { ShieldCheck, Trash2 } from 'lucide-react'
import { fmtTs, platform } from '../../api'
import { Card, Confirm, EmptyState, ErrorState, LoadingRows, PageHeader, Pill, Spinner, useAction, useLoad, useToast } from '../../components/ui'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export default function Admins() {
  const st = useLoad(() => platform.get('saas/admins'))
  const [email, setEmail] = useState('')
  const [err, setErr] = useState('')
  const [del, setDel] = useState<string | null>(null)
  const act = useAction()
  const toast = useToast()
  const d: any = st.data
  const all: any[] = d ? [
    ...(d.env || []).map((e: string) => ({ email: e, env: true })),
    ...(d.admins || []).filter((a: any) => !(d.env || []).map((x: string) => x.toLowerCase()).includes(a.email)),
  ] : []
  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = email.trim().toLowerCase()
    if (!EMAIL_RE.test(v)) { setErr('Enter a valid email'); return }
    if (all.some(a => a.email.toLowerCase() === v)) { setErr('Already an admin'); return }
    setErr('')
    const r = await act.run(() => platform.post('saas/admins', { email: v }))
    if (r) { setEmail(''); toast('Admin added'); st.reload(true) }
  }
  return (
    <div>
      <PageHeader title="Admins" description="People who can open the operator console inside the product." />
      <div className="flex flex-col gap-6" style={{ maxWidth: 760 }}>
        <Card title="Add admin">
          <form onSubmit={add} className="flex items-start gap-2 flex-wrap">
            <div className="flex-1" style={{ minWidth: 240 }}>
              <input className={`input ${err ? 'invalid' : ''}`} type="email" placeholder="name@company.com" value={email} onChange={e => setEmail(e.target.value)} aria-label="Email" />
              {(err || act.error) && <div className="field-error">{err || act.error}</div>}
            </div>
            <button className="btn btn-primary" disabled={act.busy}>{act.busy && <Spinner size={14} />}Add admin</button>
          </form>
        </Card>
        <Card title="Admins" bodyClass="">
          {st.error && !d ? <ErrorState message={st.error} onRetry={() => st.reload()} /> : !d ? <LoadingRows rows={3} /> : !all.length ? <EmptyState icon={ShieldCheck} text="No admins yet." /> : (
            <table className="tbl"><thead><tr><th>Email</th><th>Source</th><th>Added</th><th></th></tr></thead>
              <tbody>{all.map(a => (
                <tr key={a.email}>
                  <td className="font-medium">{a.email}</td>
                  <td>{a.env ? <Pill>Server config</Pill> : <Pill tone="accent">Console</Pill>}</td>
                  <td className="whitespace-nowrap">{a.env ? '—' : fmtTs(a.added_at, false)}</td>
                  <td className="r">{!a.env && <button className="icon-btn" aria-label="Remove" onClick={() => setDel(a.email)}><Trash2 size={14} style={{ color: 'var(--red)' }} /></button>}</td>
                </tr>
              ))}</tbody>
            </table>
          )}
        </Card>
      </div>
      <Confirm open={!!del} onClose={() => setDel(null)} danger confirmLabel="Remove" title={`Remove ${del}?`} description="They lose operator access right away."
        onConfirm={async () => { await platform.del(`saas/admins/${encodeURIComponent(del!)}`); toast('Admin removed'); st.reload(true) }} />
    </div>
  )
}
