import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Bot, Phone, Mail, Search, Target, Shield, Workflow, BarChart3, Calendar, Sparkles, Users, Layers, KeyRound,
  Check, Zap, Globe, Megaphone, PenLine, Image, Database, Clock, Lock, Brain, Building2, ExternalLink,
} from 'lucide-react';
import type { Section, IconName, EmployeeName } from '../../content/types';
import { byId } from '../../data/employees';
import { Button, Container, Eyebrow, SmartLink, SignupConsent } from '../ui';

const ICONS: Record<IconName, typeof Bot> = {
  bot: Bot, phone: Phone, mail: Mail, search: Search, target: Target, shield: Shield, workflow: Workflow, chart: BarChart3, calendar: Calendar,
  sparkles: Sparkles, users: Users, layers: Layers, key: KeyRound, check: Check, zap: Zap, globe: Globe, megaphone: Megaphone, pen: PenLine,
  image: Image, database: Database, clock: Clock, lock: Lock, brain: Brain, building: Building2,
};

import Plans from '../Plans';
import BlogFeed from '../BlogFeed';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return <h2 id={id} className="font-display m-0" style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', lineHeight: 1.1, fontWeight: 900, color: '#041A17', letterSpacing: '-0.02em' }}>{children}</h2>;
}
function Intro({ text }: { text?: string }) {
  return text ? <p className="m-0 mt-3 text-base" style={{ color: '#5C6B67', lineHeight: 1.7, maxWidth: 680 }}>{text}</p> : null;
}
function Block({ children, tone = 'white', id }: { children: ReactNode; tone?: 'white' | 'mist'; id?: string }) {
  return (
    <section id={id} className="scroll-mt-20" style={{ backgroundColor: tone === 'mist' ? '#F3F6F4' : '#fff', paddingTop: 'clamp(40px, 6vw, 72px)', paddingBottom: 'clamp(40px, 6vw, 72px)' }}>
      <Container>{children}</Container>
    </section>
  );
}

function EmployeeChip({ id, note }: { id: EmployeeName; note?: string }) {
  const e = byId(id);
  return (
    <Link to={e.href} className="flex items-center gap-3 no-underline rounded-2xl p-3 bg-white" style={{ border: '1px solid #E1E8E5', minHeight: 64 }}>
      <span className="shrink-0 rounded-xl overflow-hidden flex items-end justify-center" style={{ width: 44, height: 44, backgroundColor: '#041A17' }}>
        <img src={e.model ? e.image.replace('.webp', '-sm.webp') : e.image} alt="" width={e.model ? 22 : 36} height={e.model ? 44 : 20} style={e.model ? { height: 44, width: 'auto', display: 'block' } : { width: 36, height: 'auto', margin: 'auto' }} loading="lazy" />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-[15px]" style={{ fontWeight: 900, color: '#041A17' }}>{e.name} <span className="font-body text-[12px] font-semibold" style={{ color: '#FF5A36' }}>{e.short}</span></span>
        <span className="block text-[12.5px]" style={{ color: '#5C6B67', lineHeight: 1.4 }}>{note || e.role}</span>
      </span>
    </Link>
  );
}

export function RenderSection({ s, i }: { s: Section; i: number }) {
  const tone = i % 2 === 0 ? 'white' : 'mist';
  switch (s.kind) {
    case 'prose':
      return (
        <Block tone={tone} id={slug(s.heading)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4"><H2>{s.heading}</H2></div>
            <div className="lg:col-span-8 flex flex-col gap-4">
              {s.paragraphs.map((p, k) => <p key={k} className="m-0 text-[16px] sm:text-[17px]" style={{ color: '#26332F', lineHeight: 1.75 }}>{p}</p>)}
            </div>
          </div>
        </Block>
      );
    case 'list':
      return (
        <Block tone={tone} id={slug(s.heading)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4"><H2>{s.heading}</H2><Intro text={s.intro} /></div>
            <ul className="lg:col-span-8 m-0 p-0 flex flex-col gap-3" style={{ listStyle: 'none' }}>
              {s.items.map((it, k) => (
                <li key={k} className="flex items-start gap-3 text-[16px]" style={{ color: '#26332F', lineHeight: 1.65 }}>
                  <span className="mt-1 rounded-full flex items-center justify-center shrink-0" style={{ width: 22, height: 22, backgroundColor: '#041A17', color: '#fff' }}><Check size={12} strokeWidth={3} aria-hidden /></span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </Block>
      );
    case 'steps':
      return (
        <Block tone={tone} id={slug(s.heading)}>
          <H2>{s.heading}</H2><Intro text={s.intro} />
          <ol className="m-0 mt-8 p-0 grid grid-cols-1 md:grid-cols-2 gap-4" style={{ listStyle: 'none' }}>
            {s.steps.map((st, k) => (
              <li key={k} className="rounded-[24px] p-5 sm:p-6 flex gap-4" style={{ backgroundColor: tone === 'mist' ? '#fff' : '#F3F6F4', border: '1px solid #E1E8E5' }}>
                <span className="font-display shrink-0 rounded-full flex items-center justify-center" style={{ width: 40, height: 40, backgroundColor: '#FF5A36', color: '#041A17', fontWeight: 900, fontSize: 16 }}>{k + 1}</span>
                <div className="min-w-0">
                  <h3 className="font-display m-0" style={{ fontSize: 18, fontWeight: 900, color: '#041A17', lineHeight: 1.2 }}>{st.title}</h3>
                  <p className="m-0 mt-2 text-[15px]" style={{ color: '#5C6B67', lineHeight: 1.65 }}>{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>
      );
    case 'workflow':
      return (
        <Block tone={tone} id={slug(s.heading)}>
          <H2>{s.heading}</H2><Intro text={s.intro} />
          <ol className="m-0 mt-8 p-0 flex flex-col md:flex-row md:flex-wrap gap-2" style={{ listStyle: 'none' }}>
            {s.stages.map((st, k) => {
              const owner = st.owner ? byId(st.owner) : null;
              return (
                <li key={k} className="flex md:flex-col items-center md:items-stretch gap-2">
                  <div className="flex-1 rounded-2xl p-4 bg-white" style={{ border: '1px solid #E1E8E5', minWidth: 150 }}>
                    <span className="block text-[11px] font-bold uppercase" style={{ letterSpacing: '0.12em', color: '#FF5A36' }}>{String(k + 1).padStart(2, '0')}{owner ? ` · ${owner.name}` : ''}</span>
                    <span className="block font-display mt-1" style={{ fontSize: 17, fontWeight: 900, color: '#041A17', lineHeight: 1.2 }}>{st.label}</span>
                    {st.detail && <span className="block text-[13px] mt-1" style={{ color: '#5C6B67', lineHeight: 1.45 }}>{st.detail}</span>}
                  </div>
                  {k < s.stages.length - 1 && <span className="hidden md:flex justify-center" style={{ color: '#FF5A36' }} aria-hidden><ArrowRight size={16} className="rotate-90 md:rotate-0" /></span>}
                </li>
              );
            })}
          </ol>
        </Block>
      );
    case 'features':
      return (
        <Block tone={tone} id={slug(s.heading)}>
          <H2>{s.heading}</H2><Intro text={s.intro} />
          <ul className="m-0 mt-8 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ listStyle: 'none' }}>
            {s.items.map((f, k) => {
              const Icon = ICONS[f.icon || 'sparkles'];
              return (
                <li key={k} className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: tone === 'mist' ? '#fff' : '#F3F6F4', border: '1px solid #E1E8E5' }}>
                  <span className="rounded-2xl flex items-center justify-center" style={{ width: 44, height: 44, backgroundColor: '#041A17', color: '#FF7A5C' }}><Icon size={20} aria-hidden /></span>
                  <h3 className="font-display m-0 mt-4" style={{ fontSize: 18, fontWeight: 900, color: '#041A17', lineHeight: 1.2 }}>{f.title}</h3>
                  <p className="m-0 mt-2 text-[14.5px]" style={{ color: '#5C6B67', lineHeight: 1.65 }}>{f.text}</p>
                </li>
              );
            })}
          </ul>
        </Block>
      );
    case 'employees':
      return (
        <Block tone={tone} id={slug(s.heading)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4"><H2>{s.heading}</H2><Intro text={s.intro} /></div>
            <ul className="lg:col-span-8 m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ listStyle: 'none' }}>
              {s.names.map((n) => <li key={n}><EmployeeChip id={n} note={s.notes?.[n]} /></li>)}
            </ul>
          </div>
        </Block>
      );
    case 'example':
      return (
        <Block tone={tone} id={slug(s.heading)}>
          <div className="rounded-[28px] p-6 sm:p-10" style={{ backgroundColor: '#041A17' }}>
            <Eyebrow light>Worked example</Eyebrow>
            <h2 className="font-display m-0 mt-3 text-white" style={{ fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.1, fontWeight: 900 }}>{s.heading}</h2>
            <p className="m-0 mt-4 text-[16px]" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 720 }}>{s.scenario}</p>
            <ol className="m-0 mt-6 p-0 flex flex-col gap-3" style={{ listStyle: 'none' }}>
              {s.steps.map((st, k) => (
                <li key={k} className="flex gap-3 text-[15px]" style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.65 }}>
                  <span className="font-display shrink-0" style={{ color: '#FF7A5C', fontWeight: 900 }}>{k + 1}.</span><span>{st}</span>
                </li>
              ))}
            </ol>
            <p className="m-0 mt-6 rounded-2xl p-4 text-[15px]" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#fff', lineHeight: 1.65 }}><strong style={{ color: '#FF7A5C' }}>Outcome. </strong>{s.outcome}</p>
          </div>
        </Block>
      );
    case 'table':
      return (
        <Block tone={tone} id={slug(s.heading)}>
          <H2>{s.heading}</H2><Intro text={s.intro} />
          <div className="mt-6 overflow-x-auto rounded-[20px]" style={{ border: '1px solid #E1E8E5' }}>
            <table className="w-full text-[14px]" style={{ borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr style={{ backgroundColor: '#041A17', color: '#fff' }}>{s.columns.map((c, k) => <th key={k} className="text-left px-4 py-3 font-semibold">{c}</th>)}</tr>
              </thead>
              <tbody>
                {s.rows.map((r, k) => (
                  <tr key={k} style={{ backgroundColor: k % 2 ? '#F3F6F4' : '#fff' }}>
                    {r.map((c, j) => <td key={j} className="px-4 py-3 align-top" style={{ color: j === 0 ? '#041A17' : '#26332F', fontWeight: j === 0 ? 600 : 400, lineHeight: 1.5, borderTop: '1px solid #E1E8E5' }}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>
      );
    case 'pricing':
      return (
        <Block tone={tone} id="plans">
          <H2>{s.heading}</H2><Intro text={s.intro} />
          <Plans />
        </Block>
      );
    case 'directory':
      return (
        <Block tone={tone} id={s.heading ? slug(s.heading) : undefined}>
          {s.heading && <H2>{s.heading}</H2>}<Intro text={s.intro} />
          <ul className={`m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${s.heading || s.intro ? 'mt-8' : ''}`} style={{ listStyle: 'none' }}>
            {s.items.map((it, k) => (
              <li key={k}>
                <SmartLink href={it.href} className="group flex flex-col h-full no-underline rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: tone === 'mist' ? '#fff' : '#F3F6F4', border: '1px solid #E1E8E5' }}>
                  {it.badge && <span className="self-start rounded-full px-2.5 py-1 text-[10px] font-bold uppercase mb-3" style={{ letterSpacing: '0.12em', backgroundColor: '#FFE9E3', color: '#D0451B' }}>{it.badge}</span>}
                  <h3 className="font-display m-0 group-hover:text-[#FF5A36] transition-colors" style={{ fontSize: 18, fontWeight: 900, color: '#041A17', lineHeight: 1.2 }}>{it.title}</h3>
                  <p className="m-0 mt-2 text-[14px] flex-1" style={{ color: '#5C6B67', lineHeight: 1.6 }}>{it.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold" style={{ color: '#FF5A36' }}>Open <ArrowRight size={13} strokeWidth={2.5} aria-hidden /></span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </Block>
      );
    case 'blogfeed':
      return (
        <Block tone={tone}>
          <BlogFeed />
        </Block>
      );
    case 'faq':
      return (
        <Block tone={tone} id="faq">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4"><H2>{s.heading || 'Frequently asked questions'}</H2></div>
            <div className="lg:col-span-8 flex flex-col gap-2">
              {s.items.map((f, k) => (
                <details key={k} className="faq rounded-2xl bg-white" style={{ border: '1px solid #E1E8E5' }}>
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 px-5 py-4 font-display" style={{ fontSize: 17, fontWeight: 900, color: '#041A17', lineHeight: 1.3, minHeight: 56 }}>
                    <h3 className="m-0 font-display" style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>{f.q}</h3>
                    <span className="chev shrink-0 mt-0.5" style={{ color: '#FF5A36' }} aria-hidden>+</span>
                  </summary>
                  <p className="m-0 px-5 pb-5 text-[15px]" style={{ color: '#26332F', lineHeight: 1.7 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Block>
      );
    case 'sources':
      return (
        <Block tone={tone} id="sources">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">
            <div className="lg:col-span-4"><H2>{s.heading || 'Sources'}</H2></div>
            <ul className="lg:col-span-8 m-0 p-0 flex flex-col gap-2" style={{ listStyle: 'none' }}>
              {s.items.map((l, k) => (
                <li key={k}><a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[15px] font-semibold" style={{ color: '#041A17', minHeight: 32 }}>{l.label} <ExternalLink size={13} aria-hidden /></a></li>
              ))}
            </ul>
          </div>
        </Block>
      );
    case 'related':
      return (
        <Block tone={tone} id="related">
          <H2>{s.heading || 'Related pages'}</H2>
          <ul className="m-0 mt-6 p-0 flex flex-wrap gap-2" style={{ listStyle: 'none' }}>
            {s.links.map((l, k) => (
              <li key={k}>
                <SmartLink href={l.href} className="inline-flex items-center gap-2 no-underline rounded-full px-4 text-[14px] font-semibold bg-white" style={{ color: '#041A17', border: '1px solid #E1E8E5', minHeight: 44 }}>
                  {l.label} <ArrowRight size={13} strokeWidth={2.5} aria-hidden style={{ color: '#FF5A36' }} />
                </SmartLink>
              </li>
            ))}
          </ul>
        </Block>
      );
    case 'cta':
      return (
        <section style={{ backgroundColor: '#fff', paddingTop: 'clamp(24px, 4vw, 48px)', paddingBottom: 'clamp(48px, 7vw, 96px)' }}>
          <Container>
            <div className="relative overflow-hidden rounded-[32px] p-7 sm:p-12 text-center flex flex-col items-center" style={{ backgroundColor: '#041A17' }}>
              <div className="absolute inset-0 dots opacity-40 pointer-events-none" aria-hidden />
              <div className="absolute pointer-events-none" style={{ left: '50%', top: '-40%', width: 600, height: 600, transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(255,90,54,0.35), transparent 60%)' }} aria-hidden />
              <h2 className="relative font-display m-0 text-white" style={{ fontSize: 'clamp(28px, 4.2vw, 48px)', lineHeight: 1.05, fontWeight: 900, maxWidth: 760 }}>{s.title}</h2>
              <p className="relative m-0 mt-4 text-[16px]" style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, maxWidth: 640 }}>{s.text}</p>
              <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button href={s.primary.href}>{s.primary.label}</Button>
                {s.secondary && <Button href={s.secondary.href} variant="ghost">{s.secondary.label}</Button>}
              </div>
              {s.primary.href.startsWith('/app/sign-up') && <SignupConsent light className="relative mt-4" />}
            </div>
          </Container>
        </section>
      );
    default:
      return null;
  }
}
