import { useEffect, useState } from 'react'
import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Users, FileText, Inbox, PanelsTopLeft, Settings, LogOut, Menu, X, BarChart3, UserRound, Building2,
  Layers, TicketPercent, Handshake, PlugZap, Bot, BookOpen, SlidersHorizontal, Receipt, Webhook, ScrollText, ShieldCheck,
} from 'lucide-react'
import { token } from './api'
import { ToastProvider } from './components/ui'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Visitors from './pages/Visitors'
import Blogs from './pages/Blogs'
import BlogEditor from './pages/BlogEditor'
import Leads from './pages/Leads'
import Pages from './pages/Pages'
import PageEditor from './pages/PageEditor'
import SettingsPage from './pages/Settings'
import SaasOverview from './pages/saas/Overview'
import SaasUsers from './pages/saas/Users'
import SaasWorkspaces from './pages/saas/Workspaces'
import SaasPlans from './pages/saas/Plans'
import SaasCoupons from './pages/saas/Coupons'
import SaasAffiliates from './pages/saas/Affiliates'
import Integrations from './pages/platform/Integrations'
import Employees from './pages/platform/Employees'
import SkillsLibrary from './pages/platform/Skills'
import Environment from './pages/platform/Environment'
import BillingSettings from './pages/platform/BillingSettings'
import Webhooks from './pages/platform/Webhooks'
import AuditLog from './pages/platform/Audit'
import Admins from './pages/platform/Admins'

type NavItem = { to: string; label: string; icon: any; end?: boolean }
const NAV: { label: string; items: NavItem[] }[] = [
  { label: 'Website', items: [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
    { to: '/blogs', label: 'Blog', icon: FileText },
    { to: '/pages', label: 'Pages', icon: PanelsTopLeft },
    { to: '/leads', label: 'Leads', icon: Inbox },
    { to: '/visitors', label: 'Visitors', icon: Users },
  ] },
  { label: 'SaaS', items: [
    { to: '/saas', label: 'Overview', icon: BarChart3, end: true },
    { to: '/saas/users', label: 'Users', icon: UserRound },
    { to: '/saas/workspaces', label: 'Workspaces', icon: Building2 },
    { to: '/saas/plans', label: 'Plans', icon: Layers },
    { to: '/saas/coupons', label: 'Coupons', icon: TicketPercent },
    { to: '/saas/affiliates', label: 'Affiliates', icon: Handshake },
  ] },
  { label: 'Platform', items: [
    { to: '/platform/integrations', label: 'Integrations', icon: PlugZap },
    { to: '/platform/employees', label: 'Employees', icon: Bot },
    { to: '/platform/skills', label: 'Skills library', icon: BookOpen },
    { to: '/platform/environment', label: 'Environment', icon: SlidersHorizontal },
    { to: '/platform/billing', label: 'Billing settings', icon: Receipt },
    { to: '/platform/webhooks', label: 'Webhooks', icon: Webhook },
    { to: '/platform/audit', label: 'Audit log', icon: ScrollText },
    { to: '/platform/admins', label: 'Admins', icon: ShieldCheck },
  ] },
]

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <div className="flex items-center gap-2" style={{ height: 56, padding: '0 20px', borderBottom: '1px solid var(--border)' }}>
        <img src="https://eligoo.in/brand/logo.svg" alt="Eligoo" style={{ height: 22 }} />
        <span className="pill" style={{ marginLeft: 2 }}>Admin</span>
      </div>
      <nav className="flex-1 overflow-y-auto" style={{ paddingBottom: 12 }}>
        {NAV.map((g, i) => (
          <div key={i} className="nav-group">
            <div className="nav-group-label">{g.label}</div>
            {g.items.map(n => (
              <NavLink key={n.to} to={n.to} end={n.end} onClick={onNavigate} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <n.icon size={16} strokeWidth={1.8} /> {n.label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
      <div style={{ padding: 12, borderTop: '1px solid var(--border)' }}>
        <NavLink to="/settings" onClick={onNavigate} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <Settings size={16} strokeWidth={1.8} /> Settings
        </NavLink>
        <button className="nav-link w-full" style={{ border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
          onClick={() => { token.clear(); location.href = '/login' }}>
          <LogOut size={16} strokeWidth={1.8} /> Sign out
        </button>
      </div>
    </>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => { setOpen(false) }, [loc.pathname])
  return (
    <div className="min-h-screen flex">
      <aside className="sidebar hidden lg:flex"><Sidebar /></aside>
      {open && (
        <>
          <div className="overlay lg:hidden" onClick={() => setOpen(false)} />
          <aside className="sidebar flex lg:hidden" style={{ position: 'fixed', left: 0, top: 0, zIndex: 52 }}><Sidebar onNavigate={() => setOpen(false)} /></aside>
        </>
      )}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="lg:hidden flex items-center gap-3" style={{ height: 52, padding: '0 16px', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
          <button className="icon-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
          <img src="https://eligoo.in/brand/logo.svg" alt="Eligoo" style={{ height: 20 }} />
        </header>
        <main className="flex-1 min-w-0 overflow-x-hidden px-4 lg:px-8" style={{ paddingTop: 28, paddingBottom: 48 }}>
          <div className="page">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  const loc = useLocation()
  if (!token.get() && loc.pathname !== '/login') return <Navigate to="/login" replace />
  if (loc.pathname === '/login') return <Login />
  return (
    <ToastProvider>
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
          <Route path="/saas" element={<SaasOverview />} />
          <Route path="/saas/users" element={<SaasUsers />} />
          <Route path="/saas/workspaces" element={<SaasWorkspaces />} />
          <Route path="/saas/plans" element={<SaasPlans />} />
          <Route path="/saas/coupons" element={<SaasCoupons />} />
          <Route path="/saas/affiliates" element={<SaasAffiliates />} />
          <Route path="/platform/integrations" element={<Integrations />} />
          <Route path="/platform/employees" element={<Employees />} />
          <Route path="/platform/employees/:id" element={<Employees />} />
          <Route path="/platform/skills" element={<SkillsLibrary />} />
          <Route path="/platform/skills/:name" element={<SkillsLibrary />} />
          <Route path="/platform/environment" element={<Environment />} />
          <Route path="/platform/billing" element={<BillingSettings />} />
          <Route path="/platform/webhooks" element={<Webhooks />} />
          <Route path="/platform/audit" element={<AuditLog />} />
          <Route path="/platform/admins" element={<Admins />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Shell>
    </ToastProvider>
  )
}
