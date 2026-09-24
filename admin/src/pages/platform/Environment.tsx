import { useEffect, useMemo, useState } from 'react'
import { Lock } from 'lucide-react'
import { platform } from '../../api'
import { Card, Confirm, ErrorState, LoadingRows, PageHeader, Pill, Spinner, useAction, useLoad, useToast } from '../../components/ui'

const VALIDATORS: Record<string, (v: string) => string> = {
  dodo_environment: v => (['live', 'test'].includes(v) ? '' : 'Use live or test'),
  billing_enforce: v => (['true', 'false'].includes(v.toLowerCase()) ? '' : 'Use true or false'),
  platform_smtp_port: v => (/^\d{2,5}$/.test(v) && +v <= 65535 ? '' : 'A port number, e.g. 587'),
  rate_limit_per_minute: v => (/^\d+$/.test(v) && +v >= 1 ? '' : 'A whole number, 1 or more'),
  platform_smtp_from: v => (/^[^@\s<>]+@[^@\s<>]+\.[^@\s<>]+$|<[^@\s]+@[^@\s]+\.[^@\s]+>$/.test(v) ? '' : 'An email address'),
}

export default function Environment() {
  const st = useLoad(() => platform.get('console/config'))
  const [draft, setDraft] = useState<Record<string, string>>({})
  const [errs, setErrs] = useState<Record<string, string>>({})
  const [clear, setClear] = useState<any | null>(null)
  const act = useAction()
  const toast = useToast()
  const d: any = st.data
  useEffect(() => { setDraft({}); setErrs({}) }, [d])

  const groups = useMemo(() => {
    const g: Record<string, any[]> = {}
    for (const f of d?.fields || []) (g[f.group] ||= []).push(f)
    return g
  }, [d])
  const changed = Object.keys(draft).filter(k => { const f = d?.fields.find((x: any) => x.name === k); return f && draft[k] !== (f.secret ? '' : String(f.value ?? '')) })

  const save = async () => {
    const e: Record<string, string> = {}
    for (const k of changed) { const v = draft[k].trim(); if (v && VALIDATORS[k]) { const m = VALIDATORS[k](v); if (m) e[k] = m } }
    setErrs(e); if (Object.keys(e).length) return
    const values: Record<string, string> = {}
    for (const k of changed) { const v = draft[k].trim(); const f = d.fields.find((x: any) => x.name === k); if (f.secret && !v) continue; values[k] = v }
    if (!Object.keys(values).length) { setDraft({}); return }
    const r = await act.run(() => platform.put('console/config', { values }))
    if (r) { toast('Environment saved'); st.reload(true) }
  }

  return (
    <div>
      <PageHeader title="Environment" description="Runtime settings for the platform. Saved values override the server configuration."
        actions={<button className="btn btn-primary" onClick={save} disabled={!changed.length || act.busy}>{act.busy && <Spinner size={14} />}Save changes{changed.length ? ` (${changed.length})` : ''}</button>} />
      {act.error && <div className="field-error mb-4">{act.error}</div>}
      {st.error && !d ? <div className="card"><ErrorState message={st.error} onRetry={() => st.reload()} /></div> : !d ? <div className="card"><LoadingRows rows={8} /></div> : (
        <div className="flex flex-col gap-6" style={{ maxWidth: 860 }}>
          {Object.entries(groups).map(([group, fields]) => (
            <Card key={group} title={group} bodyClass="">
              {fields.map((f: any, i: number) => {
                const val = draft[f.name] ?? (f.secret ? '' : String(f.value ?? ''))
                return (
                  <div key={f.name} className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-6 items-start" style={{ padding: '14px 20px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                    <div>
                      <div className="text-[13px] font-medium">{f.label}</div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <code className="caption">{f.name}</code>
                        {f.source === 'console' ? <Pill tone="accent">Console</Pill> : f.source === 'env' ? <Pill>Server</Pill> : <Pill tone="amber">Not set</Pill>}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <input className={`input ${f.secret ? 'input-mono' : ''} ${errs[f.name] ? 'invalid' : ''}`} type={f.secret ? 'password' : 'text'} autoComplete="off"
                          value={val} placeholder={f.secret ? (f.set ? `${f.value}  (leave blank to keep)` : 'Not set') : ''}
                          onChange={e => setDraft(p => ({ ...p, [f.name]: e.target.value }))} />
                        {f.source === 'console' && <button className="btn btn-plain btn-sm" onClick={() => setClear(f)}>Reset</button>}
                      </div>
                      {errs[f.name] && <div className="field-error">{errs[f.name]}</div>}
                    </div>
                  </div>
                )
              })}
            </Card>
          ))}
          {!!d.read_only?.length && (
            <Card title={<span className="flex items-center gap-1.5"><Lock size={14} /> Fixed at deploy</span>} bodyClass="">
              {d.read_only.map((f: any, i: number) => (
                <div key={f.name} className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-6" style={{ padding: '12px 20px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                  <div><div className="text-[13px] font-medium">{f.label}</div><code className="caption">{f.name}</code></div>
                  <div className="mono text-[12.5px] break-all" style={{ paddingTop: 2 }}>{String(f.value ?? '') || <span className="muted">—</span>}</div>
                </div>
              ))}
            </Card>
          )}
        </div>
      )}
      <Confirm open={!!clear} onClose={() => setClear(null)} danger confirmLabel="Reset" title={`Reset ${clear?.label}?`}
        description="The console value is removed and the server configuration applies again."
        onConfirm={async () => { await platform.put('console/config', { values: { [clear.name]: '' } }); toast('Value reset'); st.reload(true) }} />
    </div>
  )
}
