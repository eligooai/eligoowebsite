import { useState } from 'react'
import { api, token } from '../api'

export default function Login() {
  const [email, setEmail] = useState('admin@eligoo.in')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setErr('')
    try {
      const r = await api<{ token: string }>('/eapi/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })
      token.set(r.token); location.href = '/'
    } catch (e: any) { setErr(e.message) } finally { setBusy(false) }
  }
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
      <form onSubmit={submit} className="card p-8 w-full" style={{ maxWidth: 380 }}>
        <img src="https://eligoo.in/brand/logo.svg" alt="Eligoo" style={{ height: 24 }} />
        <h1 className="page-title m-0 mt-5">Sign in to admin</h1>
        <label className="lbl">Email</label>
        <input className="input" value={email} onChange={e => setEmail(e.target.value)} autoComplete="username" />
        <label className="lbl">Password</label>
        <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
        {err && <p className="m-0 mt-3 text-sm" style={{ color: '#DC2626' }}>{err}</p>}
        <button className="btn btn-coral w-full justify-center mt-6" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      </form>
    </div>
  )
}
