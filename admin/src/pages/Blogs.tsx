import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, ExternalLink, Trash2 } from 'lucide-react'
import { api, fmtDate } from '../api'

export default function Blogs() {
  const [items, setItems] = useState<any[]>([])
  const load = () => api<any[]>('/eapi/admin/blogs').then(setItems).catch(() => {})
  useEffect(() => { load() }, [])
  const del = async (b: any) => {
    if (!confirm(`Delete "${b.title}" permanently?`)) return
    await api(`/eapi/admin/blogs/${b.id}`, { method: 'DELETE' }); load()
  }
  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="eyebrow m-0" style={{ color: '#FF5A36' }}>Content</p>
          <h1 className="font-display m-0 mt-1" style={{ fontSize: 30, fontWeight: 900 }}>Blog posts</h1>
        </div>
        <Link to="/blogs/new" className="btn btn-coral no-underline"><Plus size={15} /> New post</Link>
      </div>
      <div className="card overflow-x-auto">
        <table className="tbl">
          <thead><tr><th>Title</th><th>Slug</th><th>Topic</th><th>Status</th><th>Views</th><th>Source</th><th>Updated</th><th></th></tr></thead>
          <tbody>
            {items.map(b => (
              <tr key={b.id}>
                <td><Link to={`/blogs/${b.id}`} className="font-semibold no-underline" style={{ color: '#041A17' }}>{b.title}</Link></td>
                <td style={{ color: '#5C6B67' }}>/{b.slug}</td>
                <td>{b.topic || '—'}</td>
                <td><span className="text-[11px] font-bold uppercase px-2 py-1 rounded-full" style={{ background: b.status === 'published' ? '#E8F5EC' : '#F3F6F4', color: b.status === 'published' ? '#1D7A3E' : '#5C6B67' }}>{b.status}</span></td>
                <td>{b.views}</td>
                <td>{b.source}</td>
                <td className="whitespace-nowrap">{fmtDate(b.updated_at)}</td>
                <td className="whitespace-nowrap">
                  {b.status === 'published' && <a href={`https://eligoo.in/blog/${b.slug}`} target="_blank" rel="noreferrer" className="tt-btn inline-flex"><ExternalLink size={14} /></a>}
                  <button className="tt-btn" onClick={() => del(b)} style={{ color: '#D0451B' }}><Trash2 size={14} /></button>
                </td>
              </tr>
            ))}
            {!items.length && <tr><td colSpan={8} className="text-center py-10" style={{ color: '#9AA8A4' }}>No posts yet — create your first one.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
