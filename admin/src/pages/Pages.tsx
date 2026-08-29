import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, ExternalLink, Trash2 } from 'lucide-react'
import { api, fmtDate } from '../api'

export default function Pages() {
  const [items, setItems] = useState<any[]>([])
  const load = () => api<any[]>('/eapi/admin/pages').then(setItems).catch(() => {})
  useEffect(() => { load() }, [])
  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="eyebrow m-0" style={{ color: '#FF5A36' }}>Site content</p>
          <h1 className="font-display m-0 mt-1" style={{ fontSize: 30, fontWeight: 900 }}>Pages</h1>
          <p className="m-0 mt-2 text-sm" style={{ color: '#5C6B67' }}>Legal & footer pages — Terms, Privacy Policy, or any custom page. Pages marked "in footer" appear automatically in the site footer.</p>
        </div>
        <Link to="/pages/new" className="btn btn-coral no-underline"><Plus size={15} /> New page</Link>
      </div>
      <div className="card overflow-x-auto">
        <table className="tbl">
          <thead><tr><th>Title</th><th>URL</th><th>In footer</th><th>Updated</th><th></th></tr></thead>
          <tbody>
            {items.map(p => (
              <tr key={p.id}>
                <td><Link to={`/pages/${p.id}`} className="font-semibold no-underline" style={{ color: '#041A17' }}>{p.title}</Link></td>
                <td style={{ color: '#5C6B67' }}>/p/{p.slug}</td>
                <td>{p.show_in_footer ? 'Yes' : 'No'}</td>
                <td className="whitespace-nowrap">{fmtDate(p.updated_at)}</td>
                <td className="whitespace-nowrap">
                  <a href={`https://eligoo.in/p/${p.slug}`} target="_blank" rel="noreferrer" className="tt-btn inline-flex"><ExternalLink size={14} /></a>
                  <button className="tt-btn" style={{ color: '#D0451B' }} onClick={async () => { if (confirm(`Delete "${p.title}"?`)) { await api(`/eapi/admin/pages/${p.id}`, { method: 'DELETE' }); load() } }}><Trash2 size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
