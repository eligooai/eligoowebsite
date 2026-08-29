import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus } from 'lucide-react';
import { Eyebrow, Reveal, Words, Button, EASE, BOOK_URL } from './ui';
import Footer from './Footer';
import { byId } from '../data/employees';

/* ---------- 14. Why now ---------- */
const THEN = ['More campaigns required more marketers.', 'More leads required more researchers.', 'More outreach required more SDRs.', 'More data required more analysts.'];

export function WhyNow() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-10" style={{ backgroundColor: '#041A17', paddingTop: 'clamp(60px, 10vh, 170px)', paddingBottom: 'clamp(60px, 10vh, 170px)' }}>
      <div className="absolute inset-0 dots opacity-50 pointer-events-none" />
      <div className="absolute pointer-events-none" style={{ right: '-20%', bottom: '-30%', width: 900, height: 900, background: 'radial-gradient(circle, rgba(255,90,54,0.25), transparent 60%)' }} />
      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
        <Reveal><Eyebrow light>Why now</Eyebrow></Reveal>
        <h2 className="font-display m-0 mt-4 text-white" style={{ fontSize: 'clamp(42px, 7vw, 96px)', lineHeight: 0.96, fontWeight: 900 }}>
          <Words text="The cost of intelligence" />
          <br />
          <Words text="is collapsing." delay={0.25} accent={['collapsing']} />
        </h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Reveal>
              <p className="m-0 text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>For decades, growing a company meant growing headcount.</p>
            </Reveal>
            <div className="mt-5 flex flex-col gap-2">
              {THEN.map((t, i) => (
                <motion.p
                  key={t}
                  className="m-0 text-base sm:text-lg"
                  style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'line-through', textDecorationColor: '#FF5A36', lineHeight: 1.5 }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                >
                  {t}
                </motion.p>
              ))}
            </div>
            <Reveal delay={0.5} className="mt-6">
              <p className="font-display m-0 text-white" style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.25 }}>
                AI changes that equation. For the first time, businesses can add operational intelligence{' '}
                <span style={{ color: '#FF5A36' }}>without adding equivalent human headcount.</span>
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative rounded-[28px] p-8 sm:p-10 h-full overflow-hidden" style={{ backgroundColor: '#FF5A36' }}>
              <div className="absolute inset-0 grain opacity-30" />
              <p className="relative font-display m-0 text-white" style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 900, lineHeight: 1.12 }}>
                The companies that win won't simply “use AI.”
                <br />
                <span style={{ color: '#041A17' }}>They'll redesign how work gets done.</span>
              </p>
              <p className="relative m-0 mt-6 text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>Eligoo is building that workforce.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 15. Who it's for ---------- */
const FIT = ['A clear product or service.', 'A repeatable sales or marketing process.', 'Existing business tools.', 'Enough activity to justify automation.', 'Teams spending too much time on repetitive growth work.'];

export function WhoFor() {
  return (
    <section className="relative bg-white px-5 sm:px-10" style={{ paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start" style={{ maxWidth: 1100 }}>
        <div>
          <Reveal><Eyebrow>Built for companies that have more work than people</Eyebrow></Reveal>
          <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', lineHeight: 1.0, fontWeight: 900, color: '#041A17' }}>
            <Words text="When growth creates work," />
            <br />
            <Words text="Eligoo creates capacity." delay={0.25} accent={['capacity']} />
          </h2>
          <Reveal delay={0.3} className="mt-6">
            <p className="m-0 text-base" style={{ color: '#5C6B67', lineHeight: 1.7 }}>
              If the underlying process doesn't work, adding AI won't magically fix it. But when the process works and
              capacity is the bottleneck, an AI workforce can change the economics dramatically.
            </p>
          </Reveal>
        </div>
        <div className="rounded-[28px] p-6 sm:p-8" style={{ backgroundColor: '#F3F6F4' }}>
          <p className="eyebrow m-0" style={{ color: '#9AA8A4' }}>Eligoo is best suited for businesses that already have</p>
          <ul className="m-0 mt-5 p-0 flex flex-col gap-3" style={{ listStyle: 'none' }}>
            {FIT.map((f, i) => (
              <motion.li
                key={f}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5"
                style={{ border: '1px solid #E1E8E5' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
              >
                <motion.span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#FF5A36', color: '#fff' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <Check size={13} strokeWidth={3} />
                </motion.span>
                <span className="text-sm sm:text-base font-semibold" style={{ color: '#041A17' }}>{f}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 16. FAQ ---------- */
const FAQ = [
  ['Are Eligoo AI Employees real employees?', 'No. They are role-based AI systems configured to perform defined business responsibilities. “AI Employee” is how Eligoo packages and manages the capability: by role, responsibilities and outcomes rather than as generic software access.'],
  ['Are they fully autonomous?', 'They can operate autonomously within the permissions and guardrails you define. Actions that require human approval can remain approval-based.'],
  ['Can I hire only one AI Employee?', 'Yes. You can start with one role and expand as required.'],
  ['Do I need Atlas?', 'Not necessarily. Atlas becomes especially useful when multiple AI Employees need to work together toward shared goals.'],
  ['Can the employees use our existing tools?', 'Depending on the role and available integrations, Eligoo can connect employees to the business systems required to perform their work.'],
  ['Will Eligoo replace my existing team?', "That shouldn't be the objective. The stronger use case is giving your existing team additional execution capacity and removing repetitive operational work."],
  ['How is this different from using ChatGPT or another AI tool?', 'A general AI tool waits for someone to prompt it. An Eligoo AI Employee is configured around a role, responsibilities, business context, tools, workflows and goals. One helps you do the work. The other is designed to do the work with you.'],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative px-5 sm:px-10" style={{ backgroundColor: '#F3F6F4', paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10" style={{ maxWidth: 1100 }}>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.0, fontWeight: 900, color: '#041A17' }}>
              <Words text="Straight answers." />
            </h2>
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-3">
          {FAQ.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 0.04}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left border-0 cursor-pointer rounded-3xl bg-white p-5 sm:p-6"
                  style={{ border: `1px solid ${isOpen ? '#FF5A36' : '#E1E8E5'}`, transition: 'border-color 300ms' }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display" style={{ fontSize: 'clamp(17px, 1.8vw, 21px)', fontWeight: 800, color: '#041A17', lineHeight: 1.3 }}>{q}</span>
                    <motion.span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: isOpen ? '#FF5A36' : '#F3F6F4', color: isOpen ? '#fff' : '#041A17' }}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </motion.span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="m-0 pt-4 text-sm sm:text-base" style={{ color: '#5C6B67', lineHeight: 1.7 }}>{a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 17 + 18. Final CTA + footer ---------- */

export function FinalCta() {
  const [vw, setVw] = useState(1200);
  useEffect(() => {
    const f = () => setVw(window.innerWidth);
    f();
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  const narrow = vw < 640;
  // V formation — Atlas front and center, wings receding
  const V = [
    { id: 'pixel', h: 0.58 }, { id: 'maven', h: 0.72 }, { id: 'sage', h: 0.87 },
    { id: 'atlas', h: 1 },
    { id: 'radar', h: 0.87 }, { id: 'hook', h: 0.72 }, { id: 'ledger', h: 0.58 },
  ].map((v) => ({ ...v, e: byId(v.id) }));
  return (
    <section id="hire" className="relative overflow-hidden" style={{ backgroundColor: '#041A17' }}>
      <div className="absolute inset-0 dots opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: '70%', background: 'radial-gradient(ellipse at 50% 100%, rgba(255,90,54,0.4), transparent 60%)' }} />
      <div className="relative mx-auto px-5 sm:px-10 text-center" style={{ maxWidth: 1100, paddingTop: 'clamp(60px, 10vh, 170px)' }}>
        <Reveal><div className="flex justify-center"><Eyebrow light>Your next hire could be WFC</Eyebrow></div></Reveal>
        <h2 className="font-display m-0 mt-4 text-white" style={{ fontSize: 'clamp(42px, 7.5vw, 104px)', lineHeight: 0.96, fontWeight: 900 }}>
          <Words text="Build the team" />
          <br />
          <Words text="your business needs next." delay={0.25} accent={['next']} />
        </h2>
        <Reveal delay={0.3} className="mt-6">
          <p className="m-0 text-base sm:text-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 560 }}>
            Start with one AI Employee. Add specialists when you need them. Build an AI department when you're ready.
          </p>
        </Reveal>
        <Reveal delay={0.4} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={BOOK_URL}>Build Your AI Team</Button>
          <Button href="#team" variant="ghost">Meet the AI Employees</Button>
        </Reveal>
        <Reveal delay={0.5} className="mt-5">
          <p className="eyebrow m-0" style={{ color: 'rgba(255,255,255,0.45)' }}>Eligoo — AI Employees. Work From Cloud.</p>
        </Reveal>

        <div className="relative mt-12 flex items-end justify-center" style={{ height: 'clamp(190px, 32vh, 400px)' }}>
          {(narrow ? V.slice(1, 6) : V).map((v, i0) => {
            const i = narrow ? i0 + 1 : i0;
            return (
            <motion.img
              key={v.id}
              src={v.e.image}
              alt={v.e.name}
              width={v.e.imgW}
              height={v.e.imgH}
              draggable={false}
              style={{
                height: `${v.h * 100}%`,
                width: 'auto',
                marginLeft: i === 0 ? 0 : narrow ? -Math.round(vw * 0.055) : 'clamp(-26px, -1.6vw, -10px)',
                marginBottom: `${(1 - v.h) * 46}px`,
                zIndex: 10 - Math.abs(i - 3),
                filter: `drop-shadow(0 24px 30px rgba(0,0,0,0.5)) brightness(${1 - Math.abs(i - 3) * 0.06})`,
              }}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: Math.abs(i - 3) * 0.12, ease: EASE }}
            />
            );
          })}
        </div>
      </div>

      <Footer />
    </section>
  );
}
