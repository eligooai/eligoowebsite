import { Suspense, lazy, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cloud, ArrowRight, Compass, Hammer, PackageCheck, Gauge, ShieldCheck } from 'lucide-react';
import { Eyebrow, Reveal, Button, Words, EASE, BOOK_URL } from './ui';
import { EMPLOYEES } from '../data/employees';
import type { Employee } from '../data/employees';
const ProfileViewer = lazy(() => import('./three/ProfileViewer'));

function Card({ e, onOpen }: { e: Employee; onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-full text-left cursor-pointer p-0 rounded-[24px] bg-white overflow-hidden"
      style={{ border: '1px solid #E1E8E5' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      animate={{ boxShadow: hover ? '0 24px 48px rgba(4,26,23,0.12)' : '0 1px 2px rgba(4,26,23,0.04)' }}
      transition={{ duration: 0.45, ease: EASE }}
      whileHover={{ y: -4 }}
    >
      <div className="relative overflow-hidden" style={{ height: 280, backgroundColor: '#F3F6F4' }}>
        <div className="absolute inset-0 dots-dark opacity-40" />
        <motion.div
          className="absolute inset-x-0 bottom-0"
          style={{ height: '75%', background: 'radial-gradient(ellipse at 50% 100%, rgba(255,90,54,0.35), transparent 65%)' }}
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.45 }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 rounded-full" style={{ bottom: 18, width: '48%', height: 14, background: 'radial-gradient(ellipse, rgba(4,26,23,0.28), transparent 70%)', filter: 'blur(4px)' }} />
        <motion.img
          src={e.image}
          alt={e.name}
          draggable={false}
          className="absolute left-1/2 bottom-5"
          style={{ height: 232, width: 'auto', x: '-50%', transformOrigin: 'bottom center', filter: 'drop-shadow(0 12px 18px rgba(4,26,23,0.2))' }}
          animate={{ scale: hover ? 1.05 : 1, y: hover ? -6 : 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        />
        <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase" style={{ letterSpacing: '0.12em', backgroundColor: '#041A17', color: '#fff' }}>
          <motion.span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF5A36' }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
          WFC · Online
        </span>
        <span className="absolute top-4 right-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase" style={{ letterSpacing: '0.12em', backgroundColor: 'rgba(255,255,255,0.85)', color: '#041A17' }}>
          {e.dept}
        </span>
      </div>
      <div className="px-6 pb-6 pt-5">
        <p className="font-display m-0" style={{ fontSize: 24, fontWeight: 900, color: '#041A17', lineHeight: 1.1 }}>{e.name}</p>
        <p className="m-0 mt-1 text-sm font-semibold" style={{ color: '#FF5A36' }}>{e.role}</p>
        <p className="m-0 mt-3 text-[13px]" style={{ color: '#5C6B67', lineHeight: 1.55, height: 60, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{e.tagline}</p>
        <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid #E1E8E5' }}>
          <span className="text-[11px] font-bold uppercase" style={{ letterSpacing: '0.14em', color: '#64736F' }}>KPI-managed</span>
          <span className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: '#041A17' }}>
            <motion.span animate={{ opacity: hover ? 1 : 0, x: hover ? 0 : 6 }} transition={{ duration: 0.25 }}>View profile</motion.span>
            <motion.span className="w-8 h-8 rounded-full flex items-center justify-center" animate={{ backgroundColor: hover ? '#FF5A36' : '#F3F6F4', color: hover ? '#ffffff' : '#041A17' }} transition={{ duration: 0.25 }}>
              <ArrowRight size={14} strokeWidth={2.5} />
            </motion.span>
          </span>
        </div>
      </div>
    </motion.button>
  );
}

/* ---------- profile modal with interactive 3D ---------- */
function SpecBlock({ icon: Icon, title, items }: { icon: typeof Compass; title: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow m-0 flex items-center gap-1.5" style={{ color: '#64736F' }}>
        <Icon size={12} strokeWidth={2.5} style={{ color: '#FF5A36' }} /> {title}
      </p>
      <ul className="m-0 mt-2 p-0 flex flex-col gap-1.5" style={{ listStyle: 'none' }}>
        {items.map((r) => (
          <li key={r} className="flex items-start gap-2 text-[13px]" style={{ color: '#041A17', lineHeight: 1.5 }}>
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#FF5A36' }} />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Profile({ e, onClose }: { e: Employee; onClose: () => void }) {
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => ev.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 flex items-end sm:items-center justify-center sm:p-6"
      style={{ zIndex: 200, backgroundColor: 'rgba(4,26,23,0.7)', backdropFilter: 'blur(8px)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full bg-white overflow-hidden flex flex-col sm:flex-row rounded-t-[28px] sm:rounded-[28px]"
        style={{ maxWidth: 980, maxHeight: '92vh' }}
        initial={{ y: 80, opacity: 0, scale: 0.97 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 60, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(ev) => ev.stopPropagation()}
      >
        <button type="button" aria-label="Close" onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center border-0 cursor-pointer" style={{ backgroundColor: 'rgba(4,26,23,0.6)', color: '#fff', zIndex: 3 }}>
          <X size={18} />
        </button>

        {/* interactive 3D — drag to orbit */}
        <div className="relative sm:w-[40%] shrink-0 overflow-hidden" style={{ backgroundColor: '#041A17', minHeight: 300 }}>
          <div className="absolute inset-0 dots opacity-50" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 100%, rgba(255,90,54,0.4), transparent 60%)' }} />
          <Suspense fallback={<img src={e.image} alt={e.name} width={e.imgW} height={e.imgH} className="absolute left-1/2 bottom-6" style={{ height: '70%', width: 'auto', transform: 'translateX(-50%)' }} />}>
            <ProfileViewer model={e.model} />
          </Suspense>
          <p className="absolute bottom-3 inset-x-0 text-center eyebrow m-0 pointer-events-none" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 9 }}>Drag to rotate</p>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <p className="eyebrow m-0 flex items-center gap-2" style={{ color: '#FF5A36' }}>
            <Cloud size={12} strokeWidth={2.5} /> AI Employee · WFC · {e.dept}
          </p>
          <h3 className="font-display m-0 mt-2" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1, color: '#041A17' }}>{e.name}</h3>
          <p className="m-0 mt-1 text-base font-semibold" style={{ color: '#041A17' }}>{e.role}</p>
          <p className="m-0 mt-3 text-sm" style={{ color: '#5C6B67', lineHeight: 1.65 }}>{e.tagline}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <SpecBlock icon={Compass} title="Decides" items={e.decides} />
            <SpecBlock icon={Hammer} title="Does" items={e.does} />
            <SpecBlock icon={PackageCheck} title="Delivers" items={e.delivers} />
          </div>

          <div className="mt-6 rounded-2xl p-4 flex items-start gap-3" style={{ backgroundColor: '#F3F6F4' }}>
            <Gauge size={16} strokeWidth={2.5} style={{ color: '#FF5A36', marginTop: 2, flexShrink: 0 }} />
            <div>
              <p className="eyebrow m-0" style={{ color: '#64736F' }}>Measured by</p>
              <p className="m-0 mt-1 text-[13px]" style={{ color: '#041A17', lineHeight: 1.55 }}>{e.kpi}</p>
            </div>
          </div>
          <div className="mt-3 rounded-2xl p-4 flex items-start gap-3" style={{ backgroundColor: '#FFE9E3' }}>
            <ShieldCheck size={16} strokeWidth={2.5} style={{ color: '#FF5A36', marginTop: 2, flexShrink: 0 }} />
            <div>
              <p className="eyebrow m-0" style={{ color: '#D0451B' }}>Approval boundary</p>
              <p className="m-0 mt-1 text-[13px]" style={{ color: '#041A17', lineHeight: 1.55 }}>{e.boundary}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href={BOOK_URL} onClick={onClose}>Hire {e.name}</Button>
            <Button href="#plans" variant="ghost-dark" onClick={onClose} arrow={false}>See plans</Button>
          </div>
          <p className="m-0 mt-4 text-[11px]" style={{ color: '#64736F', lineHeight: 1.6 }}>
            {e.name} is a role-based AI system with defined inputs, decisions, outputs, KPIs and approval boundaries — not a person.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- section ---------- */
export default function Department() {
  const [selected, setSelected] = useState<Employee | null>(null);

  return (
    <section id="team" className="relative px-5 sm:px-10" style={{ backgroundColor: '#ffffff', paddingTop: 'clamp(56px, 9vh, 120px)', paddingBottom: 'clamp(56px, 9vh, 120px)' }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>Your AI Growth Department</Eyebrow></Reveal>
            <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(34px, 4.2vw, 56px)', lineHeight: 1.0, fontWeight: 900, color: '#041A17' }}>
              <Words text="Meet the team that works while you run the business." accent={['business']} />
            </h2>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="m-0 text-base sm:text-lg" style={{ color: '#5C6B67', lineHeight: 1.65 }}>
                Seven specialists, one manager. Each is a transparent, role-based AI system with defined decisions,
                deliverables, KPIs and approval boundaries — hire them individually or as a coordinated department.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {EMPLOYEES.map((e) => (
            <Card key={e.id} e={e} onOpen={() => setSelected(e)} />
          ))}
          {/* filler tile keeps the 4-column grid balanced */}
          <Reveal className="hidden xl:flex">
            <div className="relative w-full rounded-[24px] overflow-hidden flex flex-col justify-between p-6" style={{ backgroundColor: '#041A17' }}>
              <div className="absolute inset-0 dots opacity-50" />
              <div className="relative">
                <p className="eyebrow m-0" style={{ color: '#FF7A5C' }}>One team</p>
                <p className="font-display m-0 mt-3 text-white" style={{ fontSize: 26, fontWeight: 900, lineHeight: 1.15 }}>
                  Seven employees. One goal: <span style={{ color: '#FF5A36' }}>your growth.</span>
                </p>
                <p className="m-0 mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                  Atlas coordinates the other six toward the objective you set — with your approval boundaries built in.
                </p>
              </div>
              <div className="relative mt-6">
                <Button href={BOOK_URL} variant="coral">Build Your AI Team</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

            <AnimatePresence>{selected && <Profile e={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}

