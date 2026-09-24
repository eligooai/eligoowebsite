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
          <h1 className="page-title m-0">Pages</h1>
          <p className="m-0 mt-2 text-sm" style={{ color: '#71717A' }}>Legal & footer pages — Terms, Privacy Policy, or any custom page. Pages marked "in footer" appear automatically in the site footer.</p>
        </div>
        <Link to="/pages/new" className="btn btn-coral no-underline"><Plus size={15} /> New page</Link>
      </div>
      <div className="card overflow-x-auto">
        <table className="tbl">
          <thead><tr><th>Title</th><th>URL</th><th>In footer</th><th>Updated</th><th></th></tr></thead>
          <tbody>
            {items.map(p => (
              <tr key={p.id}>
                <td><Link to={`/pages/${p.id}`} className="font-semibold no-underline" style={{ color: '#09090B' }}>{p.title}</Link></td>
                <td style={{ color: '#71717A' }}>/p/{p.slug}</td>
                <td>{p.show_in_footer ? 'Yes' : 'No'}</td>
                <td className="whitespace-nowrap">{fmtDate(p.updated_at)}</td>
                <td className="whitespace-nowrap">
                  <a href={`https://eligoo.in/p/${p.slug}`} target="_blank" rel="noreferrer" className="tt-btn inline-flex"><ExternalLink size={14} /></a>
                  <button className="tt-btn" style={{ color: '#DC2626' }} onClick={async () => { if (confirm(`Delete "${p.title}"?`)) { await api(`/eapi/admin/pages/${p.id}`, { method: 'DELETE' }); load() } }}><Trash2 size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
