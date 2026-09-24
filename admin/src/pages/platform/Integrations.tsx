import { useEffect, useMemo, useState } from 'react'
import { ExternalLink, PlugZap } from 'lucide-react'
import { fmtTs, platform } from '../../api'
import { Confirm, CopyButton, Drawer, EmptyState, ErrorState, Field, LoadingRows, PageHeader, Pill, SearchInput, Spinner, useAction, useLoad, useToast } from '../../components/ui'

export default function Integrations() {
  const st = useLoad(() => platform.get('console/oauth-apps'))
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState<'all' | 'configured' | 'missing'>('all')
  const [open, setOpen] = useState<any | null>(null)
  const d: any = st.data
  const apps: any[] = d?.apps || []
  const rows = useMemo(() => {
    const n = q.trim().toLowerCase()
    return apps.filter(a => (!n || `${a.name} ${a.key} ${a.category}`.toLowerCase().includes(n)) && (filter === 'all' || (filter === 'configured' ? a.configured : !a.configured)))
  }, [apps, q, filter])
  const configured = apps.filter(a => a.configured).length

  return (
    <div>
      <PageHeader title="Integrations" description="One OAuth app per provider, shared by every workspace. Customers only click Connect." />
      {d && (
        <div className="card mb-4" style={{ padding: '14px 20px' }}>
          <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
            <div className="flex items-center gap-2"><span className="caption">Status</span>{d.nango_online ? <Pill tone="green" dot>Online</Pill> : <Pill tone="red" dot>Offline</Pill>}</div>
            <div className="flex items-center gap-2"><span className="caption">Configured</span><span className="num font-medium">{configured} of {apps.length}</span></div>
            <div className="flex items-center gap-2 min-w-0 flex-1"><span className="caption whitespace-nowrap">Callback URL</span><code className="text-[12.5px] truncate">{d.callback_url}</code><CopyButton text={d.callback_url} /></div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
        <SearchInput value={q} onChange={setQ} placeholder="Search integrations" />
        <div className="segmented">
          {(['all', 'configured', 'missing'] as const).map(k => <button key={k} className={filter === k ? 'on' : ''} onClick={() => setFilter(k)}>{k === 'all' ? 'All' : k === 'configured' ? 'Configured' : 'Not configured'}</button>)}
        </div>
      </div>
      <div className="card">
        {st.error && !d ? <ErrorState message={st.error} onRetry={() => st.reload()} /> : !d ? <LoadingRows /> : !rows.length ? <EmptyState icon={PlugZap} text="No integrations match." /> : (
          <div className="overflow-x-auto">
            <table className="tbl">
              <thead><tr><th>Integration</th><th>Category</th><th>Status</th><th>Client ID</th><th>Provider console</th><th></th></tr></thead>
              <tbody>
                {rows.map(a => (
                  <tr key={a.key} className="clickable" onClick={() => setOpen(a)}>
                    <td><div className="font-medium">{a.name}</div><div className="caption truncate" style={{ maxWidth: 320 }}>{a.desc}</div></td>
                    <td className="capitalize">{a.category || '—'}</td>
                    <td>{a.configured ? <Pill tone="green" dot>Configured</Pill> : <Pill tone="amber" dot>Not configured</Pill>}</td>
                    <td className="mono text-[12px] truncate" style={{ maxWidth: 200 }}>{a.client_id || <span className="muted">—</span>}</td>
                    <td>{a.console_url ? <a href={a.console_url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="inline-flex items-center gap-1" style={{ color: 'var(--accent)' }}>Open <ExternalLink size={12} /></a> : <span className="muted">—</span>}</td>
                    <td className="r"><button className="btn btn-secondary btn-sm" onClick={e => { e.stopPropagation(); setOpen(a) }}>{a.configured ? 'Edit' : 'Set up'}</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Drawer open={!!open} onClose={() => setOpen(null)} title={open?.name || ''} subtitle={open?.category}>
        {open && <AppForm app={open} onSaved={() => { st.reload(true) }} onClose={() => setOpen(null)} />}
      </Drawer>
    </div>
  )
}

function AppForm({ app, onSaved, onClose }: { app: any; onSaved: () => void; onClose: () => void }) {
  const [f, setF] = useState({ client_id: app.client_id || '', client_secret: '', scopes: app.scopes || '' })
  const [errs, setErrs] = useState<Record<string, string>>({})
  const [confirmDel, setConfirmDel] = useState(false)
  const act = useAction()
  const toast = useToast()
  useEffect(() => { setF({ client_id: app.client_id || '', client_secret: '', scopes: app.scopes || '' }); setErrs({}) }, [app.key]) // eslint-disable-line
  const hasSecret = !!app.client_secret_masked
  const save = async () => {
    const e: Record<string, string> = {}
    if (f.client_id.trim().length < 3) e.client_id = 'Client ID is required'
    if (!hasSecret && !f.client_secret.trim()) e.client_secret = 'Client secret is required the first time'
    setErrs(e); if (Object.keys(e).length) return
    const r = await act.run(() => platform.put(`console/oauth-apps/${encodeURIComponent(app.key)}`, { client_id: f.client_id.trim(), client_secret: f.client_secret.trim(), scopes: f.scopes.trim() }))
    if (r) { toast(`${app.name} saved`); onSaved(); onClose() }
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">{app.configured ? <Pill tone="green" dot>Configured</Pill> : <Pill tone="amber" dot>Not configured</Pill>}{app.updated_at && <span className="caption">Updated {fmtTs(app.updated_at)}</span>}</div>
      {app.desc && <p className="m-0 text-[13px] muted">{app.desc}</p>}

      <div className="card" style={{ padding: 16 }}>
        <div className="section-title" style={{ fontSize: 14 }}>1. Create the app with the provider</div>
        <div className="caption mt-1" style={{ fontSize: 13 }}>{app.hint || 'Create an OAuth app in the provider console and add this redirect URL.'}</div>
        <div className="field-label" style={{ marginTop: 12 }}>Redirect / callback URL</div>
        <div className="flex items-center gap-2"><input className="input mono" readOnly value={app.callback_url} onFocus={e => e.target.select()} /><CopyButton text={app.callback_url} label="Copy" /></div>
        {app.console_url && <a href={app.console_url} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm mt-3">Open provider console <ExternalLink size={13} /></a>}
      </div>

      <div className="card" style={{ padding: 16 }}>
        <div className="section-title" style={{ fontSize: 14, marginBottom: 12 }}>2. Paste the credentials</div>
        <Field label="Client ID" error={errs.client_id}><input className={`input mono ${errs.client_id ? 'invalid' : ''}`} value={f.client_id} onChange={e => setF({ ...f, client_id: e.target.value })} autoComplete="off" /></Field>
        <Field label="Client secret" error={errs.client_secret} hint={hasSecret ? `Saved (${app.client_secret_masked}). Leave blank to keep it.` : undefined}>
          <input className={`input mono ${errs.client_secret ? 'invalid' : ''}`} type="password" value={f.client_secret} placeholder={hasSecret ? app.client_secret_masked : ''} onChange={e => setF({ ...f, client_secret: e.target.value })} autoComplete="new-password" />
        </Field>
        <Field label="Scopes" hint="Comma or space separated. Defaults are pre-filled.">
          <textarea className="input mono" rows={3} value={f.scopes} onChange={e => setF({ ...f, scopes: e.target.value })} />
        </Field>
        {act.error && <div className="field-error mb-3">{act.error}</div>}
        <div className="flex items-center justify-between gap-2">
          {app.client_id ? <button className="btn btn-danger btn-sm" onClick={() => setConfirmDel(true)}>Remove</button> : <span />}
          <button className="btn btn-primary" onClick={save} disabled={act.busy}>{act.busy && <Spinner size={14} />}Save</button>
        </div>
      </div>
      <Confirm open={confirmDel} onClose={() => setConfirmDel(false)} danger confirmLabel="Remove" title={`Remove the ${app.name} app?`}
        description="New customers cannot connect until it is set up again. Existing connections keep working until they expire."
        onConfirm={async () => { await platform.del(`console/oauth-apps/${encodeURIComponent(app.key)}`); toast(`${app.name} removed`); onSaved(); onClose() }} />
    </div>
  )
}
