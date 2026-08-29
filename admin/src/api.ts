export const token = { get: () => localStorage.getItem('elg_admin_token') || '', set: (t: string) => localStorage.setItem('elg_admin_token', t), clear: () => localStorage.removeItem('elg_admin_token') };

export async function api<T = any>(path: string, opts: RequestInit = {}): Promise<T> {
  const r = await fetch(path, {
    ...opts,
    headers: { ...(opts.body && !(opts.body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}), Authorization: `Bearer ${token.get()}`, ...(opts.headers || {}) },
  });
  if (r.status === 401 && !path.includes('/auth/')) { token.clear(); location.href = '/login'; throw new Error('unauthorized'); }
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error((data as any).error || `HTTP ${r.status}`);
  return data as T;
}
export const fmtDate = (s?: string | null) => (s ? new Date(s.includes('T') ? s : s + 'Z').toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : '—');
