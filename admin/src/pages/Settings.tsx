import { useEffect, useState } from 'react'
import { Copy, KeyRound, Plus, Trash2 } from 'lucide-react'
import { api, fmtDate } from '../api'

const SOCIALS = [
  { k: 'linkedin', label: 'LinkedIn' }, { k: 'x', label: 'X (Twitter)' }, { k: 'instagram', label: 'Instagram' },
  { k: 'youtube', label: 'YouTube' }, { k: 'facebook', label: 'Facebook' },
]

export default function Settings() {
  const [social, setSocial] = useState<any>({})
  const [keys, setKeys] = useState<any[]>([])
  const [pw, setPw] = useState({ current: '', next: '' })
  const [msg, setMsg] = useState<{ [k: string]: string }>({})
  const loadKeys = () => api<any[]>('/eapi/admin/api-keys').then(setKeys).catch(() => {})
  useEffect(() => { api('/eapi/admin/social').then(setSocial).catch(() => {}); loadKeys() }, [])
  const say = (k: string, v: string) => { setMsg(m => ({ ...m, [k]: v })); setTimeout(() => setMsg(m => ({ ...m, [k]: '' })), 3000) }

  return (
    <div className="max-w-3xl">
      <p className="eyebrow m-0" style={{ color: '#FF5A36' }}>Configuration</p>
      <h1 className="font-display m-0 mt-1 mb-6" style={{ fontSize: 30, fontWeight: 900 }}>Settings</h1>

      <div className="card p-6 mb-5">
        <h2 className="font-display m-0" style={{ fontSize: 18, fontWeight: 900 }}>Social media links</h2>
        <p className="m-0 mt-1 text-sm" style={{ color: '#5C6B67' }}>Shown as icons in the website footer. Leave empty to hide an icon.</p>
        {SOCIALS.map(s => (<div key={s.k}><label className="lbl">{s.label}</label>
          <input className="input" placeholder={`https://${s.k === 'x' ? 'x.com' : s.k + '.com'}/eligoo`} value={social[s.k] || ''} onChange={e => setSocial({ ...social, [s.k]: e.target.value })} /></div>))}
        <div className="flex items-center gap-3 mt-5">
          <button className="btn btn-coral" onClick={async () => { await api('/eapi/admin/social', { method: 'PUT', body: JSON.stringify(social) }); say('social', 'Saved ✓') }}>Save links</button>
          {msg.social && <span className="text-sm" style={{ color: '#1D7A3E' }}>{msg.social}</span>}
        </div>
      </div>

      <div className="card p-6 mb-5">
        <h2 className="font-display m-0 flex items-center gap-2" style={{ fontSize: 18, fontWeight: 900 }}><KeyRound size={17} /> API keys — external blog posting</h2>
        <p className="m-0 mt-1 text-sm" style={{ color: '#5C6B67' }}>
          POST HTML blogs from anywhere: <code style={{ background: '#F3F6F4', padding: '1px 6px', borderRadius: 4 }}>POST https://eligoo.in/eapi/v1/posts</code> with header <code style={{ background: '#F3F6F4', padding: '1px 6px', borderRadius: 4 }}>Authorization: Bearer &lt;key&gt;</code> and JSON
          {' '}<code style={{ background: '#F3F6F4', padding: '1px 6px', borderRadius: 4 }}>{'{title, html, slug?, topic?, tags?, cover?, image_base64?, seo_title?, seo_description?, publish?}'}</code>
        </p>
        <table className="tbl mt-4">
          <thead><tr><th>Name</th><th>Key</th><th>Created</th><th>Last used</th><th></th></tr></thead>
          <tbody>
            {keys.map(k => (
              <tr key={k.id}>
                <td className="font-semibold">{k.name}</td>
                <td><code className="text-xs">{k.key.slice(0, 10)}…{k.key.slice(-4)}</code>
                  <button className="tt-btn" title="Copy" onClick={() => { navigator.clipboard.writeText(k.key); say('key', 'Copied ✓') }}><Copy size={13} /></button></td>
                <td>{fmtDate(k.created_at)}</td><td>{fmtDate(k.last_used)}</td>
                <td><button className="tt-btn" style={{ color: '#D0451B' }} onClick={async () => { if (confirm('Revoke this key?')) { await api(`/eapi/admin/api-keys/${k.id}`, { method: 'DELETE' }); loadKeys() } }}><Trash2 size={14} /></button></td>
              </tr>
            ))}
            {!keys.length && <tr><td colSpan={5} className="text-center py-6" style={{ color: '#9AA8A4' }}>No keys yet.</td></tr>}
          </tbody>
        </table>
        <div className="flex items-center gap-3 mt-4">
          <button className="btn btn-ink" onClick={async () => { const name = prompt('Key name (e.g. n8n, zapier)') || 'default'; await api('/eapi/admin/api-keys', { method: 'POST', body: JSON.stringify({ name }) }); loadKeys() }}><Plus size={15} /> Generate key</button>
          {msg.key && <span className="text-sm" style={{ color: '#1D7A3E' }}>{msg.key}</span>}
        </div>
      </div>

      <div className="card p-6">
        <h2 className="font-display m-0" style={{ fontSize: 18, fontWeight: 900 }}>Change password</h2>
        <label className="lbl">Current password</label>
        <input className="input" type="password" value={pw.current} onChange={e => setPw({ ...pw, current: e.target.value })} />
        <label className="lbl">New password (min 8 chars)</label>
        <input className="input" type="password" value={pw.next} onChange={e => setPw({ ...pw, next: e.target.value })} />
        <div className="flex items-center gap-3 mt-5">
          <button className="btn btn-coral" onClick={async () => {
            try { await api('/eapi/admin/password', { method: 'PUT', body: JSON.stringify(pw) }); setPw({ current: '', next: '' }); say('pw', 'Password changed ✓') }
            catch (e: any) { say('pw', e.message) }
          }}>Update password</button>
          {msg.pw && <span className="text-sm" style={{ color: msg.pw.includes('✓') ? '#1D7A3E' : '#D0451B' }}>{msg.pw}</span>}
        </div>
      </div>
    </div>
  )
}
