import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Editor from '../components/Editor'
import { api } from '../api'

export default function PageEditor() {
  const { id } = useParams()
  const nav = useNavigate()
  const [p, setP] = useState<any>({ title: '', slug: '', html: '', show_in_footer: 1 })
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  useEffect(() => { if (id) api(`/eapi/admin/pages/${id}`).then(setP).catch(() => nav('/pages')) }, [id])
  const save = async () => {
    setBusy(true); setMsg('')
    try {
      const body = JSON.stringify(p)
      if (id) await api(`/eapi/admin/pages/${id}`, { method: 'PUT', body })
      else { const r = await api<any>('/eapi/admin/pages', { method: 'POST', body }); nav(`/pages/${r.id}`, { replace: true }) }
      setMsg('Saved ✓')
    } catch (e: any) { setMsg(e.message) } finally { setBusy(false) }
  }
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <button className="btn btn-ghost" onClick={() => nav('/pages')}><ArrowLeft size={15} /> Pages</button>
        <div className="flex items-center gap-3">
          {msg && <span className="text-sm" style={{ color: msg.includes('✓') ? '#1D7A3E' : '#D0451B' }}>{msg}</span>}
          <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
            <input type="checkbox" checked={!!p.show_in_footer} onChange={e => setP({ ...p, show_in_footer: e.target.checked ? 1 : 0 })} /> Show in footer
          </label>
          <button className="btn btn-coral" disabled={busy} onClick={save}>Save</button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <input className="input font-display lg:col-span-2" style={{ fontSize: 22, fontWeight: 900 }} placeholder="Page title (e.g. Privacy Policy)" value={p.title} onChange={e => setP({ ...p, title: e.target.value })} />
        <div className="flex items-center gap-1"><span className="text-xs shrink-0" style={{ color: '#9AA8A4' }}>/p/</span>
          <input className="input" placeholder="auto from title" value={p.slug} onChange={e => setP({ ...p, slug: e.target.value })} /></div>
      </div>
      <Editor value={p.html} onChange={h => setP((prev: any) => ({ ...prev, html: h }))} />
    </div>
  )
}
