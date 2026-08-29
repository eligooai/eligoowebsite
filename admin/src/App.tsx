import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, FileText, Inbox, PanelsTopLeft, Settings, LogOut } from 'lucide-react'
import { token } from './api'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Visitors from './pages/Visitors'
import Blogs from './pages/Blogs'
import BlogEditor from './pages/BlogEditor'
import Leads from './pages/Leads'
import Pages from './pages/Pages'
import PageEditor from './pages/PageEditor'
import SettingsPage from './pages/Settings'

const NAV = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/visitors', label: 'Visitors', icon: Users },
  { to: '/blogs', label: 'Blog', icon: FileText },
  { to: '/leads', label: 'Leads', icon: Inbox },
  { to: '/pages', label: 'Pages', icon: PanelsTopLeft },
  { to: '/settings', label: 'Settings', icon: Settings },
]

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-60 shrink-0 flex flex-col" style={{ background: '#041A17' }}>
        <div className="px-6 py-6 flex items-center gap-2">
          <img src="https://eligoo.in/brand/logo-white.svg" alt="Eligoo" style={{ height: 26 }} />
          <span className="eyebrow" style={{ color: '#FF7A5C' }}>Admin</span>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {NAV.map(n => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}
              className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold no-underline transition-colors ${isActive ? 'text-white' : ''}`}
              style={({ isActive }) => ({ color: isActive ? '#fff' : 'rgba(255,255,255,0.55)', background: isActive ? 'rgba(255,90,54,0.9)' : 'transparent' })}>
              <n.icon size={17} /> {n.label}
            </NavLink>
          ))}
        </nav>
        <button className="m-4 btn btn-ghost !bg-transparent !border-white/15 !text-white/70" onClick={() => { token.clear(); location.href = '/login' }}>
          <LogOut size={15} /> Sign out
        </button>
      </aside>
      <main className="flex-1 min-w-0 p-6 lg:p-9 overflow-x-hidden">{children}</main>
    </div>
  )
}

export default function App() {
  const loc = useLocation()
  if (!token.get() && loc.pathname !== '/login') return <Navigate to="/login" replace />
  if (loc.pathname === '/login') return <Login />
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/new" element={<BlogEditor />} />
        <Route path="/blogs/:id" element={<BlogEditor />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pages/new" element={<PageEditor />} />
        <Route path="/pages/:id" element={<PageEditor />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Shell>
  )
}
