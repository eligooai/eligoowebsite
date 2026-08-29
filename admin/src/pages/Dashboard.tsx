import { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts'
import { api } from '../api'

const CORAL = '#FF5A36', INK = '#041A17', PALETTE = ['#FF5A36', '#041A17', '#5C6B67', '#FF9A7E', '#8FB5AC', '#C6D4CF', '#7A8C87', '#FFC9B8']

export default function Dashboard() {
  const [days, setDays] = useState(30)
  const [d, setD] = useState<any>(null)
  useEffect(() => { api(`/eapi/admin/analytics/summary?days=${days}`).then(setD).catch(() => {}) }, [days])
  if (!d) return <p>Loading…</p>
  const stats = [
    { k: 'Visitors today', v: d.totals.today },
    { k: `Visitors (${days}d)`, v: d.totals.visitors },
    { k: `Page views (${days}d)`, v: d.totals.pageviews },
    { k: 'Leads', v: d.totals.leads },
    { k: 'Published blogs', v: d.totals.blogs },
  ]
  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="eyebrow m-0" style={{ color: CORAL }}>Overview</p>
          <h1 className="font-display m-0 mt-1" style={{ fontSize: 30, fontWeight: 900 }}>Dashboard</h1>
        </div>
        <div className="flex gap-2">
          {[7, 30, 90].map(n => (
            <button key={n} className={`btn ${days === n ? 'btn-ink' : 'btn-ghost'}`} onClick={() => setDays(n)}>{n}d</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
        {stats.map(s => (
          <div key={s.k} className="card p-5">
            <p className="eyebrow m-0" style={{ color: '#9AA8A4' }}>{s.k}</p>
            <p className="font-display m-0 mt-2" style={{ fontSize: 32, fontWeight: 900 }}>{s.v}</p>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        <div className="card p-5 lg:col-span-2">
          <p className="eyebrow m-0 mb-4" style={{ color: '#9AA8A4' }}>Visitors by day</p>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={d.byDay}>
              <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={CORAL} stopOpacity={0.35} /><stop offset="100%" stopColor={CORAL} stopOpacity={0} /></linearGradient></defs>
              <XAxis dataKey="d" tick={{ fontSize: 11 }} tickFormatter={(v: string) => v.slice(5)} /><YAxis tick={{ fontSize: 11 }} width={30} allowDecimals={false} />
              <Tooltip /><Area type="monotone" dataKey="visitors" stroke={CORAL} fill="url(#g)" strokeWidth={2} />
              <Area type="monotone" dataKey="views" stroke={INK} fillOpacity={0} strokeWidth={1.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="card p-5">
          <p className="eyebrow m-0 mb-2" style={{ color: '#9AA8A4' }}>Devices</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart><Pie data={d.byDevice} dataKey="c" nameKey="k" innerRadius={50} outerRadius={80} paddingAngle={3}>
              {d.byDevice.map((_: any, i: number) => <Cell key={i} fill={PALETTE[i % PALETTE.length]} />)}
            </Pie><Tooltip /></PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center">
            {d.byDevice.map((x: any, i: number) => (
              <span key={x.k} className="text-xs font-semibold flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: PALETTE[i % PALETTE.length] }} />{x.k} · {x.c}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        <div className="card p-5">
          <p className="eyebrow m-0 mb-4" style={{ color: '#9AA8A4' }}>Top countries</p>
          <ResponsiveContainer width="100%" height={Math.max(160, d.byCountry.length * 30)}>
            <BarChart data={d.byCountry} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" hide /><YAxis type="category" dataKey="k" width={70} tick={{ fontSize: 12 }} />
              <Tooltip /><Bar dataKey="c" fill={CORAL} radius={[0, 6, 6, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card p-5">
          <p className="eyebrow m-0 mb-3" style={{ color: '#9AA8A4' }}>Top pages</p>
          {d.topPages.map((p: any) => (
            <div key={p.k} className="flex justify-between text-sm py-1.5" style={{ borderBottom: '1px solid #F0F3F1' }}>
              <span className="truncate mr-3">{p.k}</span><span className="font-semibold">{p.c}</span>
            </div>
          ))}
        </div>
        <div className="card p-5">
          <p className="eyebrow m-0 mb-3" style={{ color: '#9AA8A4' }}>Browsers & referrers</p>
          {d.byBrowser.map((p: any) => (
            <div key={p.k} className="flex justify-between text-sm py-1.5" style={{ borderBottom: '1px solid #F0F3F1' }}>
              <span>{p.k}</span><span className="font-semibold">{p.c}</span>
            </div>
          ))}
          {d.topReferrers.slice(0, 5).map((p: any) => (
            <div key={p.k} className="flex justify-between text-sm py-1.5" style={{ borderBottom: '1px solid #F0F3F1', color: '#5C6B67' }}>
              <span className="truncate mr-3">{p.k}</span><span>{p.c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
