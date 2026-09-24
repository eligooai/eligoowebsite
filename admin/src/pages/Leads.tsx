import { useEffect, useState } from 'react'
import { Download, Trash2 } from 'lucide-react'
import { api, fmtDate } from '../api'

export default function Leads() {
  const [items, setItems] = useState<any[]>([])
  const load = () => api<any[]>('/eapi/admin/leads').then(setItems).catch(() => {})
  useEffect(() => { load() }, [])
  const csv = () => {
    const rows = [['Time', 'Name', 'Email', 'Company', 'Message', 'Source'], ...items.map(l => [l.ts, l.name, l.email, l.company, l.message.replace(/\n/g, ' '), l.source_path])]
    const blob = new Blob([rows.map(r => r.map((c: string) => `"${String(c || '').replace(/"/g, '""')}"`).join(',')).join('\n')], { type: 'text/csv' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'eligoo-leads.csv'; a.click()
  }
  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
        <div>
          <h1 className="page-title m-0">Leads</h1>
        </div>
        <button className="btn btn-ink" onClick={csv}><Download size={15} /> Export CSV</button>
      </div>
      <div className="card overflow-x-auto">
        <table className="tbl">
          <thead><tr><th>Time</th><th>Name</th><th>Email</th><th>Company</th><th>Message</th><th>Source</th><th></th></tr></thead>
          <tbody>
            {items.map(l => (
              <tr key={l.id}>
                <td className="whitespace-nowrap">{fmtDate(l.ts)}</td>
                <td className="font-semibold">{l.name || '—'}</td>
                <td><a href={`mailto:${l.email}`} style={{ color: '#F4451E' }}>{l.email}</a></td>
                <td>{l.company || '—'}</td>
                <td className="max-w-[320px]">{l.message || '—'}</td>
                <td style={{ color: '#71717A' }}>{l.source_path || '—'}</td>
                <td><button className="tt-btn" style={{ color: '#DC2626' }} onClick={async () => { if (confirm('Delete lead?')) { await api(`/eapi/admin/leads/${l.id}`, { method: 'DELETE' }); load() } }}><Trash2 size={14} /></button></td>
              </tr>
            ))}
            {!items.length && <tr><td colSpan={7} className="text-center py-10" style={{ color: '#71717A' }}>No leads yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
