import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowDown, ArrowUp, BookOpen, Bot, ExternalLink, Pencil, Plus, RotateCcw, Trash2, X } from 'lucide-react'
import { employeeName, fmtTs, platform } from '../../api'
import { Confirm, EmptyState, ErrorState, Field, LoadingRows, Modal, PageHeader, Pill, SearchInput, Spinner, Tabs, useAction, useDebounced, useLoad, useToast } from '../../components/ui'

type Tab = 'instructions' | 'processes' | 'skills'

export default function Employees() {
  const { id } = useParams()
  const nav = useNavigate()
  const roster = useLoad(() => platform.get('console/employees'))
  const list: any[] = (roster.data as any)?.employees || []
  useEffect(() => { if (!id && list.length) nav(`/platform/employees/${list[0].id}`, { replace: true }) }, [id, list.length]) // eslint-disable-line
  const current = list.find(e => e.id === id)

  return (
    <div>
      <PageHeader title="Employees" description="Instructions, processes and skills for each AI employee, shared by every workspace." />
      {roster.error && !roster.data ? <div className="card"><ErrorState message={roster.error} onRetry={() => roster.reload()} /></div> : !roster.data ? <div className="card"><LoadingRows /></div> : !list.length ? (
        <div className="card"><EmptyState icon={Bot} text="No employees are enabled." /></div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <nav className="card w-full lg:w-[220px] shrink-0" style={{ padding: 6 }}>
            {list.map(e => (
              <button key={e.id} onClick={() => nav(`/platform/employees/${e.id}`)} aria-current={e.id === id ? 'page' : undefined} className="w-full flex items-center"
                style={{ border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', color: 'inherit', padding: '7px 10px', textAlign: 'left', background: e.id === id ? 'var(--elevated)' : 'transparent', boxShadow: e.id === id ? 'inset 2px 0 0 var(--accent)' : 'none' }}>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-[13.5px]">{e.name || employeeName(e.id)}</div>
                  <div className="caption truncate">{e.title}</div>
                </div>
              </button>
            ))}
          </nav>
          <div className="flex-1 min-w-0 w-full">
            {current ? <EmployeePanel key={current.id} emp={current} onChanged={() => roster.reload(true)} /> : <div className="card"><EmptyState text="Choose an employee." /></div>}
          </div>
        </div>
      )}
    </div>
  )
}

function EmployeePanel({ emp, onChanged }: { emp: any; onChanged: () => void }) {
  const [tab, setTab] = useState<Tab>('instructions')
  const pb = useLoad(() => platform.get(`employees/${emp.id}/playbook`), [emp.id])
  const d: any = pb.data
  return (
    <div>
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <h2 className="section-title" style={{ fontSize: 18 }}>{emp.name}</h2>
        <span className="caption">{emp.title} · {emp.department}</span>
        {d?.seeded && <Pill>Default playbook</Pill>}
      </div>
      <div className="caption mb-4">{d?.updated_at ? `Last changed ${fmtTs(d.updated_at)}` : ' '}</div>
      <Tabs<Tab> value={tab} onChange={setTab} tabs={[
        { id: 'instructions', label: 'Instructions' },
        { id: 'processes', label: `Processes${d ? ` (${d.processes.length})` : ''}` },
        { id: 'skills', label: `Skills${d ? ` (${d.skills.length})` : ''}` },
      ]} />
      {pb.error && !d ? <div className="card"><ErrorState message={pb.error} onRetry={() => pb.reload()} /></div> : !d ? <div className="card"><LoadingRows /></div> : (
        tab === 'instructions' ? <Instructions emp={emp} pb={d} onSaved={nd => { pb.setData(nd); onChanged() }} onReset={nd => { pb.setData({ ...d, ...nd }); onChanged() }} />
          : tab === 'processes' ? <Processes emp={emp} pb={d} onSaved={nd => { pb.setData({ ...d, ...nd }); onChanged() }} />
            : <Skills emp={emp} pb={d} onChanged={() => { pb.reload(true); onChanged() }} />
      )}
    </div>
  )
}

function Instructions({ emp, pb, onSaved, onReset }: { emp: any; pb: any; onSaved: (d: any) => void; onReset: (d: any) => void }) {
  const [text, setText] = useState(pb.instructions || '')
  const [confirm, setConfirm] = useState(false)
  const act = useAction()
  const toast = useToast()
  useEffect(() => { setText(pb.instructions || '') }, [pb.instructions])
  const dirty = text !== (pb.instructions || '')
  const over = text.length > 6000
  const save = async () => {
    if (over) return
    const r = await act.run(() => platform.put(`employees/${emp.id}/playbook`, { instructions: text }))
    if (r) { toast('Instructions saved'); onSaved({ ...pb, ...r }) }
  }
  return (
    <div className="card card-body">
      <Field label="Standing instructions" error={over ? `${text.length - 6000} characters over the 6000 limit` : undefined}
        hint={`Added to every conversation with ${emp.name}. ${text.length}/6000`}>
        <textarea className={`input ${over ? 'invalid' : ''}`} rows={14} value={text} onChange={e => setText(e.target.value)} placeholder={`e.g. Always write in British English. Never promise delivery dates.`} />
      </Field>
      {act.error && <div className="field-error mb-3">{act.error}</div>}
      <div className="flex items-center justify-between gap-2">
        <button className="btn btn-secondary btn-sm" onClick={() => setConfirm(true)}><RotateCcw size={14} /> Reset playbook</button>
        <div className="flex gap-2">
          {dirty && <button className="btn btn-plain" onClick={() => setText(pb.instructions || '')}>Discard</button>}
          <button className="btn btn-primary" disabled={!dirty || over || act.busy} onClick={save}>{act.busy && <Spinner size={14} />}Save</button>
        </div>
      </div>
      <Confirm open={confirm} onClose={() => setConfirm(false)} danger confirmLabel="Reset" title={`Reset ${emp.name}'s playbook?`}
        description="Instructions are cleared and processes go back to the defaults. Skills are not changed."
        onConfirm={async () => { const r = await platform.post(`employees/${emp.id}/playbook/reset`); toast('Playbook reset'); onReset(r) }} />
    </div>
  )
}

function Processes({ emp, pb, onSaved }: { emp: any; pb: any; onSaved: (d: any) => void }) {
  const [edit, setEdit] = useState<{ index: number; p: any } | null>(null)
  const [del, setDel] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)
  const toast = useToast()
  const list: any[] = pb.processes || []
  const persist = async (next: any[], msg: string) => {
    setBusy(true)
    try { const r = await platform.put(`employees/${emp.id}/playbook`, { processes: next }); onSaved(r); toast(msg) }
    catch (e: any) { toast(e.message || 'Could not save', true); throw e }
    finally { setBusy(false) }
  }
  const move = (i: number, dir: -1 | 1) => { const n = [...list]; const [x] = n.splice(i, 1); n.splice(i + dir, 0, x); persist(n, 'Order saved').catch(() => {}) }
  return (
    <div className="card">
      <div className="card-head">
        <div className="caption" style={{ fontSize: 13 }}>Named routines {emp.name} follows when asked. Up to 20.</div>
        <div className="flex items-center gap-2">{busy && <Spinner size={14} />}<button className="btn btn-primary btn-sm" disabled={list.length >= 20} onClick={() => setEdit({ index: -1, p: { key: '', name: '', prompt: '' } })}><Plus size={14} /> Add process</button></div>
      </div>
      {!list.length ? <EmptyState text="No processes yet." /> : (
        <div>
          {list.map((p, i) => (
            <div key={p.key || i} className="flex items-start gap-3" style={{ padding: '12px 16px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
              <div className="caption num" style={{ width: 18, paddingTop: 2 }}>{i + 1}</div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-[13.5px]">{p.name}</div>
                <div className="caption" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.prompt || 'No steps written.'}</div>
              </div>
              <div className="flex items-center shrink-0">
                <button className="icon-btn" aria-label="Move up" disabled={busy || i === 0} onClick={() => move(i, -1)}><ArrowUp size={14} /></button>
                <button className="icon-btn" aria-label="Move down" disabled={busy || i === list.length - 1} onClick={() => move(i, 1)}><ArrowDown size={14} /></button>
                <button className="icon-btn" aria-label="Edit" disabled={busy} onClick={() => setEdit({ index: i, p })}><Pencil size={14} /></button>
                <button className="icon-btn" aria-label="Delete" disabled={busy} onClick={() => setDel(i)}><Trash2 size={14} style={{ color: 'var(--red)' }} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ProcessModal edit={edit} onClose={() => setEdit(null)} existing={list} onSave={async p => {
        const n = [...list]; if (edit!.index < 0) n.push(p); else n[edit!.index] = { ...n[edit!.index], ...p }
        await persist(n, edit!.index < 0 ? 'Process added' : 'Process saved')
      }} />
      <Confirm open={del !== null} onClose={() => setDel(null)} danger confirmLabel="Delete" title={`Delete "${del !== null ? list[del]?.name : ''}"?`}
        onConfirm={async () => { await persist(list.filter((_, i) => i !== del), 'Process deleted') }} />
    </div>
  )
}

function ProcessModal({ edit, onClose, onSave, existing }: { edit: { index: number; p: any } | null; onClose: () => void; onSave: (p: any) => Promise<void>; existing: any[] }) {
  const [name, setName] = useState('')
  const [prompt, setPrompt] = useState('')
  const [errs, setErrs] = useState<Record<string, string>>({})
  const act = useAction()
  useEffect(() => { if (edit) { setName(edit.p.name || ''); setPrompt(edit.p.prompt || ''); setErrs({}); act.setError('') } }, [edit]) // eslint-disable-line
  const submit = async () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Name is required'
    else if (name.trim().length > 80) e.name = 'At most 80 characters'
    else if (existing.some((p, i) => i !== edit?.index && p.name.trim().toLowerCase() === name.trim().toLowerCase())) e.name = 'A process with this name exists'
    if (prompt.length > 6000) e.prompt = 'At most 6000 characters'
    setErrs(e); if (Object.keys(e).length) return
    const ok = await act.run(async () => { await onSave({ key: edit?.p.key || '', name: name.trim(), prompt: prompt.trim() }); return true })
    if (ok) onClose()
  }
  return (
    <Modal open={!!edit} onClose={onClose} wide title={edit && edit.index >= 0 ? 'Edit process' : 'Add process'}
      footer={<><button className="btn btn-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary" onClick={submit} disabled={act.busy}>{act.busy && <Spinner size={14} />}Save</button></>}>
      <Field label="Name" error={errs.name}><input className={`input ${errs.name ? 'invalid' : ''}`} value={name} onChange={e => setName(e.target.value)} maxLength={80} autoFocus placeholder="e.g. Weekly LinkedIn post" /></Field>
      <Field label="Steps" error={errs.prompt} hint={`${prompt.length}/6000`}><textarea className={`input ${errs.prompt ? 'invalid' : ''}`} rows={10} value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="1. …" /></Field>
      {act.error && <div className="field-error">{act.error}</div>}
    </Modal>
  )
}

function Skills({ emp, pb, onChanged }: { emp: any; pb: any; onChanged: () => void }) {
  const nav = useNavigate()
  const toast = useToast()
  const [attach, setAttach] = useState(false)
  const [detach, setDetach] = useState<string | null>(null)
  const skills: any[] = pb.skills || []
  return (
    <div className="card">
      <div className="card-head">
        <div className="caption" style={{ fontSize: 13 }}>Skills {emp.name} can load while working.</div>
        <button className="btn btn-primary btn-sm" onClick={() => setAttach(true)} disabled={pb.library_available === false}><Plus size={14} /> Attach skill</button>
      </div>
      {!skills.length ? <EmptyState icon={BookOpen} text="No skills attached." /> : (
        <div className="overflow-x-auto"><table className="tbl">
          <thead><tr><th>Skill</th><th>Source</th><th>Shared with</th><th></th></tr></thead>
          <tbody>{skills.map(s => (
            <tr key={s.name}>
              <td><div className="font-medium mono text-[12.5px]">{s.name}</div><div className="caption truncate" style={{ maxWidth: 380 }}>{s.installed ? s.description : 'Not installed'}</div></td>
              <td>{s.custom ? <Pill tone="blue">Custom</Pill> : s.source === 'added' ? <Pill tone="accent">Added</Pill> : <Pill>Built in</Pill>}</td>
              <td className="caption">{s.shared_with?.length ? s.shared_with.map(employeeName).join(', ') : '—'}</td>
              <td className="r whitespace-nowrap">
                {s.installed && <button className="btn btn-plain btn-sm" onClick={() => nav(`/platform/skills/${encodeURIComponent(s.name)}`)}>Open <ExternalLink size={12} /></button>}
                <button className="icon-btn" aria-label="Detach" onClick={() => setDetach(s.name)}><X size={14} /></button>
              </td>
            </tr>
          ))}</tbody>
        </table></div>
      )}
      <AttachModal open={attach} onClose={() => setAttach(false)} emp={emp} attached={skills.map(s => s.name)} onDone={n => { toast(`${n} attached`); onChanged() }} />
      <Confirm open={!!detach} onClose={() => setDetach(null)} danger confirmLabel="Detach" title={`Detach ${detach} from ${emp.name}?`}
        description="The skill stays in the library and with any other employees."
        onConfirm={async () => { await platform.del(`employees/${emp.id}/skills/${encodeURIComponent(detach!)}`); toast('Skill detached'); onChanged() }} />
    </div>
  )
}

function AttachModal({ open, onClose, emp, attached, onDone }: { open: boolean; onClose: () => void; emp: any; attached: string[]; onDone: (name: string) => void }) {
  const [q, setQ] = useState('')
  const dq = useDebounced(q)
  const lib = useLoad(() => open ? platform.get(`skills?q=${encodeURIComponent(dq)}`) : Promise.resolve(null), [dq, open])
  const [busy, setBusy] = useState('')
  const [err, setErr] = useState('')
  useEffect(() => { if (open) { setQ(''); setErr('') } }, [open])
  const rows = useMemo(() => ((lib.data as any)?.skills || []).filter((s: any) => !attached.includes(s.name)).slice(0, 100), [lib.data, attached])
  const go = async (name: string) => {
    setBusy(name); setErr('')
    try { await platform.post(`employees/${emp.id}/skills`, { name }); onDone(name); onClose() } catch (e: any) { setErr(e.message) } finally { setBusy('') }
  }
  return (
    <Modal open={open} onClose={onClose} wide title={`Attach a skill to ${emp.name}`} footer={<button className="btn btn-secondary" onClick={onClose}>Close</button>}>
      <div className="mb-3"><SearchInput value={q} onChange={setQ} placeholder="Search the library" /></div>
      {err && <div className="field-error mb-2">{err}</div>}
      <div className="card" style={{ maxHeight: 380, overflowY: 'auto' }}>
        {lib.error ? <ErrorState message={lib.error} onRetry={() => lib.reload()} /> : lib.loading && !lib.data ? <LoadingRows rows={5} /> : !rows.length ? <EmptyState text="No skills match." /> : rows.map((s: any, i: number) => (
          <div key={s.name} className="flex items-center gap-3" style={{ padding: '10px 14px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
            <div className="flex-1 min-w-0"><div className="mono text-[12.5px] font-medium">{s.name}</div><div className="caption truncate">{s.description || s.path}</div></div>
            <button className="btn btn-secondary btn-sm" disabled={!!busy} onClick={() => go(s.name)}>{busy === s.name ? <Spinner size={13} /> : 'Attach'}</button>
          </div>
        ))}
      </div>
    </Modal>
  )
}
