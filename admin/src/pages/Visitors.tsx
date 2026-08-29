import { useEffect, useState } from 'react'
import { api, fmtDate } from '../api'

export default function Visitors() {
  const [page, setPage] = useState(1)
  const [d, setD] = useState<any>(null)
  useEffect(() => { api(`/eapi/admin/analytics/visits?page=${page}`).then(setD).catch(() => {}) }, [page])
  return (
    <div>
      <p className="eyebrow m-0" style={{ color: '#FF5A36' }}>Analytics</p>
      <h1 className="font-display m-0 mt-1 mb-6" style={{ fontSize: 30, fontWeight: 900 }}>Visitors</h1>
      <div className="card overflow-x-auto">
        <table className="tbl">
          <thead><tr><th>Time</th><th>Location</th><th>Device</th><th>Browser / OS</th><th>Page</th><th>Referrer</th></tr></thead>
          <tbody>
            {d?.items.map((v: any, i: number) => (
              <tr key={i}>
                <td className="whitespace-nowrap">{fmtDate(v.ts)}</td>
                <td>{[v.city, v.region, v.country].filter(Boolean).join(', ') || '—'}</td>
                <td className="capitalize">{v.device}</td>
                <td>{v.browser}{v.os ? ` / ${v.os}` : ''}</td>
                <td className="max-w-[220px] truncate">{v.path}</td>
                <td className="max-w-[200px] truncate" style={{ color: '#5C6B67' }}>{v.referrer || '—'}</td>
              </tr>
            ))}
            {d && !d.items.length && <tr><td colSpan={6} className="text-center py-8" style={{ color: '#9AA8A4' }}>No visits recorded yet.</td></tr>}
          </tbody>
        </table>
      </div>
      {d && d.pages > 1 && (
        <div className="flex gap-2 mt-4 items-center">
          <button className="btn btn-ghost" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Prev</button>
          <span className="text-sm">Page {d.page} / {d.pages}</span>
          <button className="btn btn-ghost" disabled={page >= d.pages} onClick={() => setPage(p => p + 1)}>Next</button>
        </div>
      )}
    </div>
  )
}
