import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, UploadCloud } from 'lucide-react'
import Editor from '../components/Editor'
import { api } from '../api'

const empty = { title: '', slug: '', html: '', excerpt: '', topic: '', tags: '', cover: '', seo_title: '', seo_desc: '', canonical: '', status: 'draft' }
const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/[\s_]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')

export default function BlogEditor() {
  const { id } = useParams()
  const nav = useNavigate()
  const [b, setB] = useState<any>(empty)
  const [slugTouched, setSlugTouched] = useState(!!id)
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  useEffect(() => { if (id) api(`/eapi/admin/blogs/${id}`).then(setB).catch(() => nav('/blogs')) }, [id])

  const set = (k: string, v: any) => setB((p: any) => ({ ...p, [k]: v, ...(k === 'title' && !slugTouched ? { slug: slugify(v) } : {}) }))
  const uploadCover = async (f: File) => {
    const fd = new FormData(); fd.append('file', f)
    const r = await api<{ url: string }>('/eapi/admin/upload', { method: 'POST', body: fd })
    set('cover', r.url)
  }
  const save = async (status: string) => {
    setBusy(true); setMsg('')
    try {
      const body = JSON.stringify({ ...b, status })
      if (id) { const r = await api<any>(`/eapi/admin/blogs/${id}`, { method: 'PUT', body }); setB((p: any) => ({ ...p, status, slug: r.slug })); setMsg('Saved ✓') }
      else { const r = await api<any>('/eapi/admin/blogs', { method: 'POST', body }); nav(`/blogs/${r.id}`, { replace: true }); setMsg('Saved ✓') }
    } catch (e: any) { setMsg(e.message) } finally { setBusy(false) }
  }
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <button className="btn btn-ghost" onClick={() => nav('/blogs')}><ArrowLeft size={15} /> Posts</button>
        <div className="flex items-center gap-2">
          {msg && <span className="text-sm mr-2" style={{ color: msg.includes('✓') ? '#1D7A3E' : '#D0451B' }}>{msg}</span>}
          <button className="btn btn-ghost" disabled={busy} onClick={() => save('draft')}>Save draft</button>
          <button className="btn btn-coral" disabled={busy} onClick={() => save('published')}>{b.status === 'published' ? 'Update' : 'Publish'}</button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 items-start">
        <div className="lg:col-span-2">
          <input className="input font-display" style={{ fontSize: 26, fontWeight: 900, padding: '14px 18px' }} placeholder="Post title" value={b.title} onChange={e => set('title', e.target.value)} />
          <div className="mt-4"><Editor value={b.html} onChange={h => set('html', h)} /></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="card p-5">
            <p className="eyebrow m-0" style={{ color: '#9AA8A4' }}>Post settings</p>
            <label className="lbl">Slug</label>
            <div className="flex items-center gap-1">
              <span className="text-xs" style={{ color: '#9AA8A4' }}>/blog/</span>
              <input className="input" value={b.slug} onChange={e => { setSlugTouched(true); set('slug', slugify(e.target.value) || e.target.value) }} />
            </div>
            <label className="lbl">Topic</label>
            <input className="input" placeholder="e.g. AI Employees" value={b.topic} onChange={e => set('topic', e.target.value)} />
            <label className="lbl">Tags (comma separated)</label>
            <input className="input" value={b.tags} onChange={e => set('tags', e.target.value)} />
            <label className="lbl">Excerpt</label>
            <textarea className="input" rows={3} value={b.excerpt} onChange={e => set('excerpt', e.target.value)} />
            <label className="lbl">Cover image</label>
            {b.cover && <img src={b.cover} alt="" className="w-full rounded-xl mb-2" style={{ maxHeight: 140, objectFit: 'cover' }} />}
            <label className="btn btn-ghost cursor-pointer"><UploadCloud size={15} /> {b.cover ? 'Replace' : 'Upload'}
              <input type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) uploadCover(f) }} />
            </label>
          </div>
          <div className="card p-5">
            <p className="eyebrow m-0" style={{ color: '#9AA8A4' }}>SEO</p>
            <label className="lbl">SEO title</label>
            <input className="input" placeholder={b.title} value={b.seo_title} onChange={e => set('seo_title', e.target.value)} />
            <label className="lbl">Meta description <span style={{ color: b.seo_desc.length > 160 ? '#D0451B' : '#9AA8A4' }}>({b.seo_desc.length}/160)</span></label>
            <textarea className="input" rows={3} value={b.seo_desc} onChange={e => set('seo_desc', e.target.value)} />
            <label className="lbl">Canonical URL (optional)</label>
            <input className="input" placeholder={`https://eligoo.in/blog/${b.slug || '…'}`} value={b.canonical} onChange={e => set('canonical', e.target.value)} />
            <div className="mt-4 p-3 rounded-xl" style={{ background: '#F8FAF9' }}>
              <p className="m-0 text-[13px] font-semibold truncate" style={{ color: '#1a0dab' }}>{b.seo_title || b.title || 'SEO preview'}</p>
              <p className="m-0 text-[11px] truncate" style={{ color: '#1D7A3E' }}>eligoo.in/blog/{b.slug || '…'}</p>
              <p className="m-0 text-[12px] mt-0.5" style={{ color: '#5C6B67', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{b.seo_desc || b.excerpt || 'Meta description preview appears here.'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
