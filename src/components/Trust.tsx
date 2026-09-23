import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Mail, Wallet, ShieldAlert, Check, Cloud, Sparkles } from 'lucide-react';
import { Eyebrow, Reveal, Words, Button, EASE, BOOK_URL, SignupConsent } from './ui';

/* ---------- 11. Control & approvals ---------- */
const RULES = [
  { icon: Megaphone, q: 'Campaign ready?', a: 'Approve it.', mode: 'Requires approval' },
  { icon: Mail, q: 'Outreach ready?', a: 'Review it.', mode: 'Review before send' },
  { icon: Wallet, q: 'Budget change?', a: 'Require authorization.', mode: 'Authorization' },
  { icon: ShieldAlert, q: 'Sensitive customer interaction?', a: 'Escalate it.', mode: 'Escalate to human' },
];

function Toggle({ delay }: { delay: number }) {
  return (
    <motion.span
      className="relative inline-flex items-center rounded-full shrink-0"
      style={{ width: 44, height: 26, padding: 3 }}
      initial={{ backgroundColor: '#D5DDD9' }}
      whileInView={{ backgroundColor: '#FF5A36' }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <motion.span
        className="block rounded-full bg-white"
        style={{ width: 20, height: 20 }}
        initial={{ x: 0 }}
        whileInView={{ x: 18 }}
        viewport={{ once: true }}
        transition={{ delay, type: 'spring', stiffness: 400, damping: 20 }}
      />
    </motion.span>
  );
}

export function Control() {
  return (
    <section className="relative bg-white px-5 sm:px-10" style={{ paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16" style={{ maxWidth: 1100 }}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal><Eyebrow>Autonomy without losing control</Eyebrow></Reveal>
            <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', lineHeight: 1.0, fontWeight: 900, color: '#041A17' }}>
              <Words text="Your AI employees work for you." />
              <br />
              <Words text="You set the rules." delay={0.25} accent={['rules']} />
            </h2>
            <Reveal delay={0.25} className="mt-5">
              <p className="m-0 text-base" style={{ color: '#5C6B67', lineHeight: 1.7 }}>
                Not every action should happen automatically. Configure which activities an AI Employee can execute
                independently and which require human approval.
              </p>
              <p className="font-display m-0 mt-6" style={{ fontSize: 22, fontWeight: 900, color: '#041A17', lineHeight: 1.25 }}>
                AI should reduce management work — <span style={{ color: '#FF5A36' }}>not remove management control.</span>
              </p>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-4">
          {RULES.map((r, i) => (
            <motion.div
              key={r.q}
              className="flex items-center gap-4 sm:gap-5 rounded-3xl p-5 sm:p-6"
              style={{ backgroundColor: '#F3F6F4' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            >
              <span className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white" style={{ color: '#041A17', border: '1px solid #E1E8E5' }}>
                <r.icon size={20} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="m-0 text-sm font-semibold" style={{ color: '#5C6B67' }}>{r.q}</p>
                <p className="font-display m-0 mt-0.5" style={{ fontSize: 22, fontWeight: 900, color: '#041A17', lineHeight: 1.1 }}>{r.a}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <Toggle delay={0.4 + i * 0.15} />
                <span className="text-[10px] font-bold uppercase hidden sm:block" style={{ letterSpacing: '0.1em', color: '#64736F' }}>{r.mode}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 12. Integrations ---------- */
const TOOLS_A = ['Meta Ads', 'Google Ads', 'Gmail', 'LinkedIn', 'CRM platforms', 'Calendars', 'Analytics'];
const TOOLS_B = ['Social platforms', 'Documents', 'Spreadsheets', 'Content tools', 'Automation systems', 'Internal systems', 'Website'];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div className={`marquee-track gap-3 ${reverse ? 'reverse' : ''}`}>
        {doubled.map((t, i) => (
          <span key={`${t}-${i}`} className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap bg-white" style={{ color: '#041A17', border: '1px solid #E1E8E5' }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF5A36' }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Integrations() {
  return (
    <section className="relative px-0 overflow-hidden" style={{ backgroundColor: '#F3F6F4', paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="mx-auto px-5 sm:px-10 text-center" style={{ maxWidth: 900 }}>
        <Reveal><div className="flex justify-center"><Eyebrow>Works where your business works</Eyebrow></div></Reveal>
        <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.0, fontWeight: 900, color: '#041A17' }}>
          <Words text="Your employees shouldn't live inside another dashboard." accent={['dashboard']} />
        </h2>
        <Reveal delay={0.2} className="mt-5">
          <p className="m-0 text-base sm:text-lg mx-auto" style={{ color: '#5C6B67', lineHeight: 1.7, maxWidth: 620 }}>
            Eligoo AI Employees are designed to work across the systems businesses already rely on.
          </p>
        </Reveal>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <Row items={TOOLS_A} />
        <Row items={TOOLS_B} reverse />
      </div>
      <Reveal className="mt-10 px-5 text-center">
        <p className="m-0 text-sm" style={{ color: '#5C6B67', lineHeight: 1.7 }}>The exact tools depend on the employee's role and your business setup.</p>
        <p className="font-display m-0 mt-2" style={{ fontSize: 22, fontWeight: 900, color: '#041A17' }}>
          Your stack stays your stack. <span style={{ color: '#FF5A36' }}>Eligoo becomes the workforce operating across it.</span>
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- 13. Salary positioning ---------- */
const PLANS = [
  { name: '1 AI Employee', line: 'One role. One defined responsibility set.', points: ['Configured around your business', 'Connected to the tools for the role', 'Simple monthly salary'], featured: false },
  { name: 'AI Team', line: 'Multiple specialists working together.', points: ['Coordinated hand-offs between employees', 'Shared context and goals', 'Add Atlas to manage the team'], featured: true },
  { name: 'AI Department', line: 'A coordinated workforce managed around business outcomes.', points: ['Full Growth Department', 'Atlas included as AI Growth Manager', 'Outcome-based coordination'], featured: false },
];

/* Public plan shape served by the platform at /api/public/plans (same origin — eligoo.in/api is proxied to the platform).
 * There is no `points` field: bullets are derived from employee_cap / credits_included / features. */
type ApiPlan = {
  id: string; name: string; description: string;
  kind: 'paid' | 'free_trial' | 'free' | 'topup' | string;
  price_cents: number; currency: string; interval: 'month' | 'year' | 'once' | string;
  trial_days: number; credits_included: number; employee_cap: number; employees_allowed?: string[];
  features?: { calling?: boolean; publishing?: boolean; paid_ads?: boolean; meetings?: boolean; seats?: number | boolean };
  highlight?: number | boolean; sort_order?: number;
};
type PublicPlans = { plans: ApiPlan[]; packs: ApiPlan[] };
const TOTAL_EMPLOYEES = 8;

const LOCALE_BY_CURRENCY: Record<string, string> = { INR: 'en-IN', USD: 'en-US', EUR: 'de-DE', GBP: 'en-GB' };
function money(cents: number, currency: string) {
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
const FEATURE_LABEL: Record<string, string> = { calling: 'AI calling', publishing: 'Social publishing', paid_ads: 'Paid ads specialist', meetings: 'AI joins meetings' };

function planBullets(p: ApiPlan): string[] {
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

function useLivePlans(): PublicPlans | null {
  const [data, setData] = useState<PublicPlans | null>(null);
  useEffect(() => {
    let alive = true;
    fetch('/api/public/plans')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!alive || !d || !Array.isArray(d.plans) || !d.plans.length) return;
        const bySort = (a: ApiPlan, b: ApiPlan) => (Number(a.sort_order) || 0) - (Number(b.sort_order) || 0);
        setData({ plans: [...d.plans].sort(bySort), packs: Array.isArray(d.packs) ? [...d.packs].sort(bySort) : [] });
      })
      .catch(() => null);
    return () => { alive = false; };
  }, []);
  return data;
}

export function Plans() {
  const live = useLivePlans();
  const trial = live?.plans.find((p) => p.kind === 'free_trial') || null;
  const packs = live?.packs || [];
  const cards = live
    ? live.plans.map((p) => ({
        name: p.name,
        line: planLine(p),
        points: planBullets(p),
        featured: !!p.highlight,
        href: `/app/sign-up?plan=${encodeURIComponent(p.id)}`,
        cta: planCta(p),
      }))
    : PLANS.map((p) => ({ ...p, href: BOOK_URL, cta: 'See AI Employee Plans' }));
  const cols = cards.length >= 4 ? 'md:grid-cols-2 lg:grid-cols-4' : cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return (
    <section id="plans" className="relative bg-white px-5 sm:px-10" style={{ paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <div className="text-center">
          <Reveal><div className="flex justify-center"><Eyebrow>Simple AI resourcing</Eyebrow></div></Reveal>
          <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 0.98, fontWeight: 900, color: '#041A17' }}>
            <Words text="Hire the role." /> <Words text="Pay the salary." delay={0.2} accent={['salary']} />
          </h2>
          <Reveal delay={0.2} className="mt-5">
            <p className="m-0 text-base sm:text-lg mx-auto" style={{ color: '#5C6B67', lineHeight: 1.7, maxWidth: 640 }}>
              No complicated token calculations for your leadership team. No need to explain seats, prompts and automation
              runs every time you discuss your workforce. Each AI Employee is resourced around a defined role and scope.
            </p>
          </Reveal>
          {trial && (
            <Reveal delay={0.3} className="mt-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase" style={{ letterSpacing: '0.1em', backgroundColor: '#FFF0EB', color: '#D0451B', border: '1px solid #FFD2C6' }}>
                <Sparkles size={13} strokeWidth={2.5} /> {trial.trial_days}-day free trial, no card
              </span>
            </Reveal>
          )}
        </div>
        <div className={`mt-12 grid grid-cols-1 ${cols} gap-5 items-stretch`}>
          {cards.map((p, i) => (
            <motion.div
              key={p.name}
              className="relative rounded-[28px] p-7 sm:p-8 flex flex-col overflow-hidden"
              style={{ backgroundColor: p.featured ? '#041A17' : '#F3F6F4' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -8 }}
            >
              {p.featured && <div className="absolute inset-0 dots opacity-50" />}
              {p.featured && (
                <span className="absolute top-5 right-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase" style={{ letterSpacing: '0.12em', backgroundColor: '#FF5A36', color: '#fff' }}>Most popular</span>
              )}
              <span className="relative inline-flex items-center gap-1.5 text-[11px] font-bold uppercase" style={{ letterSpacing: '0.14em', color: p.featured ? '#FF7A5C' : '#FF5A36' }}>
                <Cloud size={12} strokeWidth={2.5} /> WFC
              </span>
              <h3 className="relative font-display m-0 mt-3" style={{ fontSize: 30, fontWeight: 900, color: p.featured ? '#fff' : '#041A17' }}>{p.name}</h3>
              <p className="relative m-0 mt-2 text-sm" style={{ color: p.featured ? 'rgba(255,255,255,0.7)' : '#5C6B67', lineHeight: 1.6 }}>{p.line}</p>
              <ul className="relative m-0 mt-6 p-0 flex flex-col gap-2.5 flex-1" style={{ listStyle: 'none' }}>
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: p.featured ? '#fff' : '#041A17' }}>
                    <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: p.featured ? '#FF5A36' : '#041A17', color: '#fff' }}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8">
                <Button href={p.href} variant={p.featured ? 'coral' : 'ink'} className="w-full justify-center">{p.cta}</Button>
              </div>
            </motion.div>
          ))}
        </div>
        {packs.length > 0 && (
          <Reveal className="mt-8 text-center">
            <p className="m-0 text-sm" style={{ color: '#5C6B67', lineHeight: 1.7 }}>
              <span className="font-semibold" style={{ color: '#041A17' }}>Need more credits?</span>{' '}
              Top up any time — {packs.map((k, i) => (
                <span key={k.id}>
                  {i > 0 && (i === packs.length - 1 ? ' or ' : ', ')}
                  {Number(k.credits_included).toLocaleString('en-US')} credits for {money(k.price_cents, k.currency)}
                </span>
              ))}. Packs never expire and stack with any plan.
            </p>
          </Reveal>
        )}
        {live && (
          <Reveal className="mt-4 flex justify-center">
            <SignupConsent />
          </Reveal>
        )}
      </div>
    </section>
  );
}
