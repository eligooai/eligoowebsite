export const token = { get: () => localStorage.getItem('elg_admin_token') || '', set: (t: string) => localStorage.setItem('elg_admin_token', t), clear: () => localStorage.removeItem('elg_admin_token') };

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) { super(message); this.status = status }
}

function errorMessage(data: any, status: number): string {
  if (!data || typeof data !== 'object') return `Request failed (${status})`
  if (typeof data.error === 'string' && data.error) return data.error
  const d = data.detail
  if (typeof d === 'string' && d) return d
  if (Array.isArray(d) && d.length) {
    return d.map((e: any) => {
      const loc = Array.isArray(e?.loc) ? e.loc.filter((x: any) => x !== 'body').join('.') : ''
      return loc ? `${loc}: ${e?.msg || 'invalid'}` : (e?.msg || 'invalid')
    }).join('; ')
  }
  return `Request failed (${status})`
}

export async function api<T = any>(path: string, opts: RequestInit = {}): Promise<T> {
  const r = await fetch(path, {
    ...opts,
    headers: { ...(opts.body && !(opts.body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}), Authorization: `Bearer ${token.get()}`, ...(opts.headers || {}) },
  });
  if (r.status === 401 && !path.includes('/auth/') && !path.startsWith('/eapi/platform/')) { token.clear(); location.href = '/login'; throw new ApiError('unauthorized', 401); }
  const data = await r.json().catch(() => ({}));
  if (r.status === 401 && path.startsWith('/eapi/platform/') && (data as any).error === 'unauthorized') { token.clear(); location.href = '/login'; throw new ApiError('unauthorized', 401); }
  if (!r.ok) throw new ApiError(errorMessage(data, r.status), r.status);
  return data as T;
}

/** SaaS platform operator API, proxied by the admin server: `/eapi/platform/<path>` -> platform `/api/admin/<path>`. */
export const platform = {
  get: <T = any>(path: string) => api<T>(`/eapi/platform/${path}`),
  post: <T = any>(path: string, body: unknown = {}) => api<T>(`/eapi/platform/${path}`, { method: 'POST', body: JSON.stringify(body) }),
  put: <T = any>(path: string, body: unknown = {}) => api<T>(`/eapi/platform/${path}`, { method: 'PUT', body: JSON.stringify(body) }),
  patch: <T = any>(path: string, body: unknown = {}) => api<T>(`/eapi/platform/${path}`, { method: 'PATCH', body: JSON.stringify(body) }),
  del: <T = any>(path: string) => api<T>(`/eapi/platform/${path}`, { method: 'DELETE' }),
};

export const fmtDate = (s?: string | null) => (s ? new Date(s.includes('T') ? s : s + 'Z').toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : '—');

/** Platform timestamps are unix seconds. */
export const fmtTs = (t?: number | null, withTime = true) =>
  t ? new Date(t * 1000).toLocaleString('en-IN', withTime ? { dateStyle: 'medium', timeStyle: 'short' } : { dateStyle: 'medium' }) : '—';

export const fmtMoney = (cents?: number | null, currency = 'USD') => {
  const v = (cents || 0) / 100
  try { return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency || 'USD', maximumFractionDigits: v % 1 ? 2 : 0 }).format(v) }
  catch { return `${currency} ${v.toFixed(2)}` }
};

export const fmtNum = (n?: number | null) => (n == null ? '—' : new Intl.NumberFormat('en-US').format(n));

export const EMPLOYEE_NAMES: Record<string, string> = {
  nexa: 'Atlas', caspian: 'Maven', cora: 'Sage', medi: 'Pixel', ivy: 'Radar', otto: 'Hook', revi: 'Ledger', boost: 'Boost',
};
export const EMPLOYEE_IDS = Object.keys(EMPLOYEE_NAMES);
export const employeeName = (id: string) => EMPLOYEE_NAMES[id] || id;
