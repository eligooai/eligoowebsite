import { useEffect, useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Button, BOOK_URL, SignupConsent } from './ui';

/* Public plan shape served by the platform at /api/public/plans (same origin — eligoo.in/api is proxied to the platform).
 * There is no `points` field: bullets are derived from employee_cap / credits_included / features. */
export type ApiPlan = {
  id: string; name: string; description: string;
  kind: 'paid' | 'free_trial' | 'free' | 'topup' | string;
  price_cents: number; currency: string; interval: 'month' | 'year' | 'once' | string;
  trial_days: number; credits_included: number; employee_cap: number; employees_allowed?: string[];
  features?: { calling?: boolean; publishing?: boolean; paid_ads?: boolean; meetings?: boolean; seats?: number | boolean };
  highlight?: number | boolean; sort_order?: number;
};
export type PublicPlans = { plans: ApiPlan[]; packs: ApiPlan[] };
const TOTAL_EMPLOYEES = 8;

const LOCALE_BY_CURRENCY: Record<string, string> = { INR: 'en-IN', USD: 'en-US', EUR: 'de-DE', GBP: 'en-GB' };
export function money(cents: number, currency: string) {
  const code = (currency || 'USD').toUpperCase();
  const amount = (Number(cents) || 0) / 100;
  const whole = Number.isInteger(amount);
  try {
    return new Intl.NumberFormat(LOCALE_BY_CURRENCY[code] || 'en-US', { style: 'currency', currency: code, minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: whole ? 0 : 2 }).format(amount);
  } catch {
    return `${code} ${whole ? amount.toFixed(0) : amount.toFixed(2)}`;
  }
}
const per = (interval: string) => (interval === 'year' ? 'yr' : interval === 'month' ? 'mo' : interval);
const FEATURE_LABEL: Record<string, string> = { calling: 'AI calling', publishing: 'Social publishing', paid_ads: 'Paid ads specialist (Boost)', meetings: 'AI joins meetings' };

export function planBullets(p: ApiPlan): string[] {
  const cap = Number(p.employee_cap) || 0;
  const out: string[] = [];
  out.push(cap >= TOTAL_EMPLOYEES ? 'All eight AI employees' : cap > 0 ? `Up to ${cap} AI employee${cap === 1 ? '' : 's'}` : 'AI employees of your choice');
  if (p.credits_included) out.push(`${Number(p.credits_included).toLocaleString('en-US')} credits${p.interval === 'once' ? '' : ` every ${p.interval}`}`);
  else out.push('Pay-as-you-go credits');
  const f = p.features || {};
  for (const k of ['calling', 'publishing', 'paid_ads', 'meetings'] as const) if (f[k] === true) out.push(FEATURE_LABEL[k]);
  const seats = Number(f.seats);
  if (seats > 1) out.push(`${seats} team seats`);
  return out;
}
function planLine(p: ApiPlan) {
  if (p.description) return p.description;
  if (p.kind === 'free_trial') return `${p.trial_days}-day free trial, no card needed.`;
  if (p.kind === 'free' || !p.price_cents) return 'Free to start.';
  return `${money(p.price_cents, p.currency)} per ${p.interval}${p.trial_days ? ` · ${p.trial_days}-day trial` : ''}`;
}
function planCta(p: ApiPlan) {
  if (p.kind === 'free_trial') return `Start ${p.trial_days}-day free trial`;
  if (p.price_cents) return `Subscribe · ${money(p.price_cents, p.currency)}/${per(p.interval)}`;
  return 'Get started';
}

export function useLivePlans(): PublicPlans | null | undefined {
  // undefined = loading, null = unavailable
  const [data, setData] = useState<PublicPlans | null | undefined>(undefined);
  useEffect(() => {
    let alive = true;
    fetch('/api/public/plans')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!alive) return;
        if (!d || !Array.isArray(d.plans) || !d.plans.length) { setData(null); return; }
        const bySort = (a: ApiPlan, b: ApiPlan) => (Number(a.sort_order) || 0) - (Number(b.sort_order) || 0);
        setData({ plans: [...d.plans].sort(bySort), packs: Array.isArray(d.packs) ? [...d.packs].sort(bySort) : [] });
      })
      .catch(() => alive && setData(null));
    return () => { alive = false; };
  }, []);
  return data;
}

/** Static shape shown while plans load or when the platform API is unreachable. */
const FALLBACK = [
  { name: 'One AI employee', line: 'One role with a defined scope, connected to the tools it needs.', points: ['Configured around your business', 'Credits included every month', 'Approvals on every outside-world action'], featured: false },
  { name: 'AI team', line: 'Several employees working together with shared context.', points: ['Coordinated hand-offs', 'Shared goals and calendar', 'Atlas manages the team'], featured: true },
  { name: 'Full AI workforce', line: 'All eight employees coordinated around your objectives.', points: ['Every role, one workspace', 'Atlas included', 'Calling, publishing and paid ads where enabled'], featured: false },
];

export default function Plans() {
  const live = useLivePlans();
  const trial = live?.plans.find((p) => p.kind === 'free_trial') || null;
  const packs = live?.packs || [];
  const cards = live
    ? live.plans.map((p) => ({ name: p.name, line: planLine(p), points: planBullets(p), featured: !!p.highlight, href: `/app/sign-up?plan=${encodeURIComponent(p.id)}`, cta: planCta(p) }))
    : FALLBACK.map((p) => ({ ...p, href: BOOK_URL, cta: 'Talk to us about plans' }));
  const cols = cards.length >= 4 ? 'md:grid-cols-2 lg:grid-cols-4' : cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return (
    <div>
      {trial && (
        <p className="m-0 mt-5">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase" style={{ letterSpacing: '0.1em', backgroundColor: '#FFF0EB', color: '#D0451B', border: '1px solid #FFD2C6' }}>
            <Sparkles size={13} strokeWidth={2.5} aria-hidden /> {trial.trial_days}-day free trial, no card
          </span>
        </p>
      )}
      {live === null && <p className="m-0 mt-4 text-sm" style={{ color: '#5C6B67' }}>Live prices are temporarily unavailable — the shapes below are indicative; talk to us for current pricing.</p>}
      <div className={`mt-8 grid grid-cols-1 ${cols} gap-4 items-stretch`}>
        {cards.map((p) => (
          <div key={p.name} className="relative rounded-[28px] p-6 sm:p-7 flex flex-col overflow-hidden" style={{ backgroundColor: p.featured ? '#041A17' : '#F3F6F4', border: p.featured ? 'none' : '1px solid #E1E8E5' }}>
            {p.featured && <div className="absolute inset-0 dots opacity-50" aria-hidden />}
            {p.featured && <span className="absolute top-5 right-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase" style={{ letterSpacing: '0.12em', backgroundColor: '#FF5A36', color: '#fff' }}>Most popular</span>}
            <h3 className="relative font-display m-0" style={{ fontSize: 26, fontWeight: 900, color: p.featured ? '#fff' : '#041A17', lineHeight: 1.1 }}>{p.name}</h3>
            <p className="relative m-0 mt-2 text-sm" style={{ color: p.featured ? 'rgba(255,255,255,0.7)' : '#5C6B67', lineHeight: 1.6 }}>{p.line}</p>
            <ul className="relative m-0 mt-5 p-0 flex flex-col gap-2.5 flex-1" style={{ listStyle: 'none' }}>
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: p.featured ? '#fff' : '#041A17' }}>
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: p.featured ? '#FF5A36' : '#041A17', color: '#fff' }}><Check size={11} strokeWidth={3} aria-hidden /></span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="relative mt-7">
              <Button href={p.href} variant={p.featured ? 'coral' : 'ink'} className="w-full">{p.cta}</Button>
            </div>
          </div>
        ))}
      </div>
      {packs.length > 0 && (
        <p className="m-0 mt-6 text-sm" style={{ color: '#5C6B67', lineHeight: 1.7 }}>
          <span className="font-semibold" style={{ color: '#041A17' }}>Need more credits?</span>{' '}
          Top up any time — {packs.map((k, i) => (
            <span key={k.id}>
              {i > 0 && (i === packs.length - 1 ? ' or ' : ', ')}
              {Number(k.credits_included).toLocaleString('en-US')} credits for {money(k.price_cents, k.currency)}
            </span>
          ))}. Packs stack with any plan.
        </p>
      )}
      {live && <div className="mt-4"><SignupConsent /></div>}
    </div>
  );
}
