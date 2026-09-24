import { useEffect, useState } from 'react'
import { fmtMoney, platform } from '../../api'
import { Card, ErrorState, Field, LoadingRows, PageHeader, Spinner, Switch, useAction, useLoad, useToast } from '../../components/ui'

export default function BillingSettings() {
  const st = useLoad(() => platform.get('saas/overview'))
  const [f, setF] = useState({ price: '', min: '', once: true })
  const [errs, setErrs] = useState<Record<string, string>>({})
  const act = useAction()
  const toast = useToast()
  const s: any = (st.data as any)?.settings
  const init = s ? { price: String(s.voice_minute_price_cents ?? ''), min: String(s.voice_minutes_min_purchase ?? ''), once: String(s.trial_once_per_user) !== '0' } : null
  useEffect(() => { if (init) setF(init) }, [st.data]) // eslint-disable-line
  const dirty = !!init && (f.price !== init.price || f.min !== init.min || f.once !== init.once)

  const save = async () => {
    const e: Record<string, string> = {}
    if (!/^\d+$/.test(f.price) || +f.price < 1 || +f.price > 100000) e.price = 'Whole cents, 1 or more'
    if (!/^\d+$/.test(f.min) || +f.min < 1 || +f.min > 1000000) e.min = 'Whole minutes, 1 or more'
    setErrs(e); if (Object.keys(e).length) return
    const r = await act.run(() => platform.put('saas/settings', { values: { voice_minute_price_cents: f.price, voice_minutes_min_purchase: f.min, trial_once_per_user: f.once ? '1' : '0' } }))
    if (r) { toast('Billing settings saved'); st.reload(true) }
  }

  return (
    <div>
      <PageHeader title="Billing settings" description="Extra calling minutes and trial rules."
        actions={<button className="btn btn-primary" onClick={save} disabled={!dirty || act.busy}>{act.busy && <Spinner size={14} />}Save</button>} />
      {st.error && !st.data ? <div className="card"><ErrorState message={st.error} onRetry={() => st.reload()} /></div> : !s ? <div className="card"><LoadingRows rows={4} /></div> : (
        <div className="flex flex-col gap-6" style={{ maxWidth: 760 }}>
          <Card title="Calling minutes">
            <div className="grid sm:grid-cols-2 gap-x-4">
              <Field label="Price per extra minute (cents)" error={errs.price} hint={/^\d+$/.test(f.price) ? `${fmtMoney(+f.price)} per minute` : undefined}>
                <input className={`input ${errs.price ? 'invalid' : ''}`} inputMode="numeric" value={f.price} onChange={e => setF({ ...f, price: e.target.value })} />
              </Field>
              <Field label="Smallest purchase (minutes)" error={errs.min} hint={/^\d+$/.test(f.min) && /^\d+$/.test(f.price) ? `${fmtMoney(+f.min * +f.price)} minimum` : undefined}>
                <input className={`input ${errs.min ? 'invalid' : ''}`} inputMode="numeric" value={f.min} onChange={e => setF({ ...f, min: e.target.value })} />
              </Field>
            </div>
          </Card>
          <Card title="Trials">
            <div className="flex items-center justify-between gap-4">
              <div><div className="text-[13.5px] font-medium">One free trial per person</div><div className="caption">A user who already had a trial cannot start another in a new workspace.</div></div>
              <Switch on={f.once} onChange={v => setF({ ...f, once: v })} label="One free trial per person" />
            </div>
          </Card>
          {act.error && <div className="field-error">{act.error}</div>}
        </div>
      )}
    </div>
  )
}
