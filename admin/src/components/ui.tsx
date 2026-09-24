import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AlertCircle, Check, Copy, Inbox, Loader2, RotateCw, Search, X } from 'lucide-react'

/* ---------------------------------------------------------------- data loading */

export function useLoad<T>(fn: () => Promise<T>, deps: unknown[] = []) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const fnRef = useRef(fn)
  fnRef.current = fn
  const seq = useRef(0)
  const reload = useCallback(async (quiet = false) => {
    const n = ++seq.current
    if (!quiet) setLoading(true)
    setError('')
    try {
      const d = await fnRef.current()
      if (n === seq.current) setData(d)
    } catch (e: any) {
      if (n === seq.current) setError(e?.message || 'Something went wrong')
    } finally {
      if (n === seq.current) setLoading(false)
    }
  }, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { reload() }, deps)
  return { data, setData, error, loading, reload }
}

export function useDebounced<T>(value: T, ms = 250) {
  const [v, setV] = useState(value)
  useEffect(() => { const t = setTimeout(() => setV(value), ms); return () => clearTimeout(t) }, [value, ms])
  return v
}

/* ---------------------------------------------------------------- toasts */

type Toast = { id: number; text: string; error?: boolean }
const ToastCtx = createContext<(text: string, error?: boolean) => void>(() => {})
export const useToast = () => useContext(ToastCtx)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<Toast | null>(null)
  const push = useCallback((text: string, error = false) => {
    const id = Date.now()
    setToast({ id, text, error })
    setTimeout(() => setToast(t => (t && t.id === id ? null : t)), error ? 5000 : 2600)
  }, [])
  return (
    <ToastCtx.Provider value={push}>
      {children}
      {toast && <div role="status" className={`toast ${toast.error ? 'error' : ''}`}>{toast.text}</div>}
    </ToastCtx.Provider>
  )
}

/* ---------------------------------------------------------------- layout */

export function PageHeader({ title, description, actions }: { title: string; description?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="page-header">
      <div className="min-w-0">
        <h1 className="page-title m-0">{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2 flex-wrap">{actions}</div>}
    </div>
  )
}

export function Card({ title, actions, children, className = '', bodyClass = 'card-body' }: { title?: ReactNode; actions?: ReactNode; children: ReactNode; className?: string; bodyClass?: string }) {
  return (
    <section className={`card ${className}`}>
      {(title || actions) && (
        <div className="card-head">
          <h2 className="section-title">{title}</h2>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className={bodyClass}>{children}</div>
    </section>
  )
}

export function Stat({ label, value, hint }: { label: string; value: ReactNode; hint?: ReactNode }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div className="eyebrow">{label}</div>
      <div className="stat-value">{value}</div>
      {hint && <div className="caption mt-1">{hint}</div>}
    </div>
  )
}

/* ---------------------------------------------------------------- states */

export function Spinner({ size = 16 }: { size?: number }) {
  return <Loader2 size={size} className="animate-spin" style={{ color: 'var(--muted)' }} />
}

export function LoadingRows({ rows = 6 }: { rows?: number }) {
  return (
    <div className="p-4 flex flex-col gap-3" aria-busy="true" aria-label="Loading">
      {Array.from({ length: rows }).map((_, i) => <div key={i} className="skeleton" style={{ height: 20, width: `${90 - (i % 3) * 12}%` }} />)}
    </div>
  )
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3" style={{ padding: '40px 16px' }}>
      <AlertCircle size={22} style={{ color: 'var(--red)' }} />
      <div style={{ maxWidth: 440 }} className="text-[13px]">{message}</div>
      {onRetry && <button className="btn btn-secondary btn-sm" onClick={onRetry}><RotateCw size={14} /> Retry</button>}
    </div>
  )
}

export function EmptyState({ icon: Icon = Inbox, text, action }: { icon?: any; text: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3" style={{ padding: '40px 16px' }}>
      <Icon size={22} style={{ color: 'var(--subtle)' }} />
      <div className="text-[13px] muted">{text}</div>
      {action}
    </div>
  )
}

/** Loading / error / content switch for a useLoad result. */
export function Loadable<T>({ state, children, rows }: { state: { data: T | null; error: string; loading: boolean; reload: () => void }; children: (d: T) => ReactNode; rows?: number }) {
  if (state.error && !state.data) return <ErrorState message={state.error} onRetry={() => state.reload()} />
  if (!state.data) return <LoadingRows rows={rows} />
  return <>{children(state.data)}</>
}

/* ---------------------------------------------------------------- controls */

export function SearchInput({ value, onChange, placeholder = 'Search' }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="relative" style={{ width: 280, maxWidth: '100%' }}>
      <Search size={15} className="absolute" style={{ left: 10, top: 10, color: 'var(--muted)' }} />
      <input className="input" style={{ paddingLeft: 32 }} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} aria-label={placeholder} />
    </div>
  )
}

export function Field({ label, hint, error, children, className = '' }: { label: ReactNode; hint?: ReactNode; error?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`field ${className}`}>
      <label className="field-label">{label}</label>
      {children}
      {error ? <div className="field-error">{error}</div> : hint ? <div className="field-hint">{hint}</div> : null}
    </div>
  )
}

export function Switch({ on, onChange, label, disabled }: { on: boolean; onChange: (v: boolean) => void; label?: string; disabled?: boolean }) {
  return (
    <button type="button" role="switch" aria-checked={on} aria-label={label} disabled={disabled} className={`switch ${on ? 'on' : ''}`} onClick={() => onChange(!on)} />
  )
}

export function CopyButton({ text, label }: { text: string; label?: string }) {
  const [done, setDone] = useState(false)
  return (
    <button type="button" className={label ? 'btn btn-secondary btn-sm' : 'icon-btn'} title="Copy" aria-label="Copy"
      onClick={async () => { try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1500) } catch { /* ignore */ } }}>
      {done ? <Check size={14} style={{ color: 'var(--green)' }} /> : <Copy size={14} />}{label && (done ? 'Copied' : label)}
    </button>
  )
}

export function Tabs<T extends string>({ tabs, value, onChange }: { tabs: { id: T; label: ReactNode }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map(t => <button key={t.id} role="tab" aria-selected={value === t.id} className={`tab ${value === t.id ? 'on' : ''}`} onClick={() => onChange(t.id)}>{t.label}</button>)}
    </div>
  )
}

export type Tone = 'green' | 'amber' | 'red' | 'blue' | 'accent' | 'neutral'
export function Pill({ tone = 'neutral', children, dot }: { tone?: Tone; children: ReactNode; dot?: boolean }) {
  return <span className={`pill ${tone === 'neutral' ? '' : 'pill-' + tone}`}>{dot && <span className="dot" />}{children}</span>
}

const STATUS_TONE: Record<string, Tone> = {
  active: 'green', succeeded: 'green', processed: 'green', trialing: 'blue', past_due: 'amber', on_hold: 'amber', pending: 'amber',
  failed: 'red', cancelled: 'neutral', expired: 'neutral', refunded: 'amber', suspended: 'red', error: 'red', none: 'neutral', deleted: 'neutral',
}
export function StatusPill({ status }: { status?: string | null }) {
  const s = status || 'none'
  const label = s === 'none' ? 'No plan' : s.replace(/_/g, ' ').replace(/^./, c => c.toUpperCase())
  return <Pill tone={STATUS_TONE[s] || 'neutral'} dot>{label}</Pill>
}

/* ---------------------------------------------------------------- overlays */

function useEscape(onClose: () => void) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])
}

export function Drawer({ open, onClose, title, subtitle, actions, children }: { open: boolean; onClose: () => void; title: ReactNode; subtitle?: ReactNode; actions?: ReactNode; children: ReactNode }) {
  if (!open) return null
  return <DrawerInner onClose={onClose} title={title} subtitle={subtitle} actions={actions}>{children}</DrawerInner>
}
function DrawerInner({ onClose, title, subtitle, actions, children }: { onClose: () => void; title: ReactNode; subtitle?: ReactNode; actions?: ReactNode; children: ReactNode }) {
  useEscape(onClose)
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-modal="true">
        <div className="drawer-head">
          <div className="min-w-0">
            <h2 className="section-title truncate" style={{ fontSize: 16 }}>{title}</h2>
            {subtitle && <div className="caption mt-0.5 truncate">{subtitle}</div>}
          </div>
          <div className="flex items-center gap-2 shrink-0">{actions}<button className="icon-btn" onClick={onClose} aria-label="Close"><X size={16} /></button></div>
        </div>
        <div className="drawer-body">{children}</div>
      </aside>
    </>
  )
}

export function Modal({ open, onClose, title, description, children, footer, wide }: { open: boolean; onClose: () => void; title: ReactNode; description?: ReactNode; children?: ReactNode; footer?: ReactNode; wide?: boolean }) {
  if (!open) return null
  return <ModalInner onClose={onClose} title={title} description={description} footer={footer} wide={wide}>{children}</ModalInner>
}
function ModalInner({ onClose, title, description, children, footer, wide }: { onClose: () => void; title: ReactNode; description?: ReactNode; children?: ReactNode; footer?: ReactNode; wide?: boolean }) {
  useEscape(onClose)
  return (
    <>
      <div className="overlay modal-overlay" onClick={onClose} />
      <div className={`modal ${wide ? 'wide' : ''}`} role="dialog" aria-modal="true">
        <div className="modal-head">
          <h2 className="section-title">{title}</h2>
          {description && <p className="caption m-0 mt-1" style={{ fontSize: 13 }}>{description}</p>}
        </div>
        {children && <div className="modal-body">{children}</div>}
        {footer && <div className="modal-foot">{footer}</div>}
      </div>
    </>
  )
}

/** Confirm dialog for destructive or significant actions. `onConfirm` may throw; the message is shown inline. */
export function Confirm({ open, onClose, title, description, confirmLabel = 'Confirm', danger, onConfirm, children }: {
  open: boolean; onClose: () => void; title: string; description?: ReactNode; confirmLabel?: string; danger?: boolean; onConfirm: () => Promise<void> | void; children?: ReactNode
}) {
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  useEffect(() => { if (open) { setErr(''); setBusy(false) } }, [open])
  const go = async () => {
    setBusy(true); setErr('')
    try { await onConfirm(); onClose() } catch (e: any) { setErr(e?.message || 'Failed') } finally { setBusy(false) }
  }
  return (
    <Modal open={open} onClose={() => !busy && onClose()} title={title} description={description}
      footer={<>
        <button className="btn btn-secondary" onClick={onClose} disabled={busy}>Cancel</button>
        <button className={`btn ${danger ? 'btn-danger-solid' : 'btn-primary'}`} onClick={go} disabled={busy}>{busy && <Spinner size={14} />}{confirmLabel}</button>
      </>}>
      {(children || err) && <>{children}{err && <div className="field-error" style={{ marginTop: children ? 10 : 0 }}>{err}</div>}</>}
    </Modal>
  )
}

/** Small helper: run an async action with busy + error state. */
export function useAction() {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const run = useCallback(async <T,>(fn: () => Promise<T>): Promise<T | undefined> => {
    setBusy(true); setError('')
    try { return await fn() } catch (e: any) { setError(e?.message || 'Failed'); return undefined } finally { setBusy(false) }
  }, [])
  return { busy, error, setError, run }
}

export function TableWrap({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto">{children}</div>
}
