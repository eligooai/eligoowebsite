import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BookOpen, History, Plus, RotateCcw } from 'lucide-react'
import { employeeName, fmtTs, platform } from '../../api'
import { Card, Confirm, EmptyState, ErrorState, Field, LoadingRows, Modal, PageHeader, Pill, SearchInput, Spinner, useAction, useDebounced, useLoad, useToast } from '../../components/ui'

const NAME_RE = /^[a-z0-9][a-z0-9._-]{1,79}$/

export default function SkillsLibrary() {
  const { name } = useParams()
  const nav = useNavigate()
  const [q, setQ] = useState('')
  const dq = useDebounced(q)
  const lib = useLoad(() => platform.get(`skills?q=${encodeURIComponent(dq)}`), [dq])
  const [creating, setCreating] = useState(false)
  const [dirty, setDirty] = useState(false)
  const [pending, setPending] = useState<string | null>(null)
  const toast = useToast()
  const skills: any[] = (lib.data as any)?.skills || []
  const available = (lib.data as any)?.library_available !== false
  const go = (n: string) => { if (n === name) return; if (dirty) setPending(n); else nav(`/platform/skills/${encodeURIComponent(n)}`) }

  return (
    <div>
      <PageHeader title="Skills library" description="Every installed skill. Edits apply to all employees that use the skill."
        actions={<button className="btn btn-primary" onClick={() => setCreating(true)} disabled={!available}><Plus size={15} /> New skill</button>} />
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="card w-full lg:w-[320px] shrink-0">
          <div style={{ padding: 12, borderBottom: '1px solid var(--border)' }}><SearchInput value={q} onChange={setQ} placeholder="Search skills" /></div>
          <div style={{ maxHeight: 'calc(100vh - 230px)', overflowY: 'auto' }}>
            {lib.error && !lib.data ? <ErrorState message={lib.error} onRetry={() => lib.reload()} /> : !lib.data ? <LoadingRows rows={8} /> : !available ? (
              <EmptyState icon={BookOpen} text="The skills library is not available on the platform." />
            ) : !skills.length ? <EmptyState icon={BookOpen} text={q ? 'No skills match.' : 'No skills installed.'} /> : skills.map((s, i) => (
              <button key={s.name} onClick={() => go(s.name)} className="w-full text-left"
                style={{ display: 'block', padding: '9px 14px', border: 'none', borderTop: i ? '1px solid var(--border)' : 'none', background: s.name === name ? 'var(--elevated)' : 'transparent', cursor: 'pointer', fontFamily: 'inherit', color: 'inherit', boxShadow: s.name === name ? 'inset 2px 0 0 var(--accent)' : 'none' }}>
                <div className="flex items-center gap-2"><span className="mono text-[12.5px] font-medium truncate">{s.name}</span>{s.custom && <Pill tone="blue">Custom</Pill>}</div>
                <div className="caption truncate">{s.category}{s.used_by?.length ? ` · ${s.used_by.map(employeeName).join(', ')}` : ''}</div>
              </button>
            ))}
          </div>
          {lib.data && <div className="caption" style={{ padding: '8px 14px', borderTop: '1px solid var(--border)' }}>{skills.length} skills</div>}
        </div>
        <div className="flex-1 min-w-0 w-full">
          {name ? <SkillEditor key={name} name={name} onDirty={setDirty} onSaved={() => lib.reload(true)} /> : <div className="card"><EmptyState icon={BookOpen} text="Choose a skill to view or edit it." /></div>}
        </div>
      </div>
      <CreateSkill open={creating} onClose={() => setCreating(false)} onDone={n => { toast('Skill created'); lib.reload(true); setDirty(false); nav(`/platform/skills/${encodeURIComponent(n)}`) }} />
      <Confirm open={!!pending} onClose={() => setPending(null)} danger confirmLabel="Discard changes" title="Discard unsaved changes?"
        onConfirm={() => { setDirty(false); nav(`/platform/skills/${encodeURIComponent(pending!)}`) }} />
    </div>
  )
}

function SkillEditor({ name, onDirty, onSaved }: { name: string; onDirty: (d: boolean) => void; onSaved: () => void }) {
  const st = useLoad(() => platform.get(`skills/${encodeURIComponent(name)}`), [name])
  const [text, setText] = useState('')
  const [restore, setRestore] = useState<number | null>(null)
  const act = useAction()
  const toast = useToast()
  const d: any = st.data
  useEffect(() => { if (d) setText(d.content) }, [d?.content]) // eslint-disable-line
  const dirty = !!d && text !== d.content
  useEffect(() => { onDirty(dirty) }, [dirty]) // eslint-disable-line
  useEffect(() => () => onDirty(false), []) // eslint-disable-line
  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => { if (dirty) { e.preventDefault(); e.returnValue = '' } }
    window.addEventListener('beforeunload', h); return () => window.removeEventListener('beforeunload', h)
  }, [dirty])

  if (st.error && !d) return <div className="card"><ErrorState message={st.error} onRetry={() => st.reload()} /></div>
  if (!d) return <div className="card"><LoadingRows rows={10} /></div>
  const empty = !text.trim()
  const save = async () => {
    if (empty) return
    const r = await act.run(() => platform.put(`skills/${encodeURIComponent(name)}`, { content: text }))
    if (r) { st.setData(r); toast('Skill saved'); onSaved() }
  }
  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 's') { e.preventDefault(); if (dirty) save() }
    if (e.key === 'Tab') {
      e.preventDefault()
      const t = e.currentTarget, s = t.selectionStart, en = t.selectionEnd
      const v = text.slice(0, s) + '  ' + text.slice(en); setText(v)
      requestAnimationFrame(() => { t.selectionStart = t.selectionEnd = s + 2 })
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap"><h2 className="section-title mono" style={{ fontSize: 16 }}>{d.name}</h2>{d.custom && <Pill tone="blue">Custom</Pill>}{dirty && <Pill tone="amber">Unsaved</Pill>}</div>
          <div className="caption mt-0.5 mono truncate">{d.path}</div>
        </div>
        <div className="flex gap-2">
          {dirty && <button className="btn btn-plain" onClick={() => setText(d.content)}>Discard</button>}
          <button className="btn btn-primary" onClick={save} disabled={!dirty || empty || act.busy}>{act.busy && <Spinner size={14} />}Save</button>
        </div>
      </div>
      {act.error && <div className="field-error">{act.error}</div>}
      <div className="grid xl:grid-cols-[1fr_260px] gap-4 items-start">
        <div>
          <textarea className={`code-editor ${empty ? 'invalid' : ''}`} spellCheck={false} value={text} onChange={e => setText(e.target.value)} onKeyDown={onKey} aria-label="SKILL.md" />
          <div className="flex justify-between caption mt-1"><span>{empty ? <span style={{ color: 'var(--red)' }}>A skill cannot be empty</span> : 'SKILL.md · Ctrl/Cmd+S to save'}</span><span className="num">{text.length.toLocaleString()} chars</span></div>
        </div>
        <div className="flex flex-col gap-4">
          <Card title="Details">
            <dl className="kv" style={{ gridTemplateColumns: '80px 1fr' }}>
              <dt>Used by</dt><dd>{d.used_by?.length ? d.used_by.map(employeeName).join(', ') : '—'}</dd>
              <dt>Modified</dt><dd>{fmtTs(d.modified_at)}</dd>
            </dl>
            {d.description && <p className="caption m-0 mt-3" style={{ fontSize: 12.5 }}>{d.description}</p>}
          </Card>
          <Card title={<span className="flex items-center gap-1.5"><History size={14} /> History</span>} bodyClass="">
            {!d.history?.length ? <EmptyState text="No earlier versions." /> : d.history.map((h: any, i: number) => (
              <div key={i} className="flex items-center justify-between gap-2" style={{ padding: '9px 14px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                <div className="min-w-0"><div className="text-[12.5px]">{fmtTs(h.ts)}</div><div className="caption">{h.by} · {h.size.toLocaleString()} chars</div></div>
                <button className="icon-btn" title="Restore this version" aria-label="Restore" onClick={() => setRestore(i)}><RotateCcw size={14} /></button>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <Confirm open={restore !== null} onClose={() => setRestore(null)} confirmLabel="Restore" title="Restore this version?"
        description={dirty ? 'Your unsaved edits are discarded. The current version is kept in history.' : 'The current version is kept in history.'}
        onConfirm={async () => { const r = await platform.post(`skills/${encodeURIComponent(name)}/restore/${restore}`); st.setData(r); setText(r.content); toast('Version restored'); onSaved() }} />
    </div>
  )
}

function CreateSkill({ open, onClose, onDone }: { open: boolean; onClose: () => void; onDone: (name: string) => void }) {
  const [f, setF] = useState({ name: '', description: '' })
  const [errs, setErrs] = useState<Record<string, string>>({})
  const act = useAction()
  useEffect(() => { if (open) { setF({ name: '', description: '' }); setErrs({}); act.setError('') } }, [open]) // eslint-disable-line
  const submit = async () => {
    const n = f.name.trim().toLowerCase().replace(/\s+/g, '-')
    const e: Record<string, string> = {}
    if (!NAME_RE.test(n)) e.name = 'Lowercase letters, digits, dots, dashes or underscores; 2 to 80 characters'
    if (f.description.length > 300) e.description = 'At most 300 characters'
    setErrs(e); if (Object.keys(e).length) return
    const r: any = await act.run(() => platform.post('skills', { name: n, description: f.description.trim() }))
    if (r) { onClose(); onDone(r.name || n) }
  }
  return (
    <Modal open={open} onClose={onClose} title="New skill" description="Starts from a template you can edit."
      footer={<><button className="btn btn-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary" onClick={submit} disabled={act.busy}>{act.busy && <Spinner size={14} />}Create skill</button></>}>
      <Field label="Name" error={errs.name} hint="e.g. linkedin-founder-story"><input className={`input mono ${errs.name ? 'invalid' : ''}`} value={f.name} onChange={e => setF({ ...f, name: e.target.value })} autoFocus /></Field>
      <Field label="When to use" error={errs.description}><textarea className={`input ${errs.description ? 'invalid' : ''}`} rows={3} value={f.description} onChange={e => setF({ ...f, description: e.target.value })} /></Field>
      {act.error && <div className="field-error">{act.error}</div>}
    </Modal>
  )
}
