import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';
import { Eyebrow, Reveal, Words, Button, EASE, useScrollProgress, BOOK_URL } from './ui';

/* ---------- 5. Core difference ---------- */
const ROWS: [string, string][] = [
  ['Buy access to software', 'Hire for a role'],
  ['Learn the platform', 'Assign the goal'],
  ['Build workflows yourself', 'Employee executes workflows'],
  ['Operate multiple AI tools', 'AI Employee operates your tools'],
  ['Manage prompts', 'Manage outcomes'],
  ['Pay a software subscription', 'Pay a simple monthly salary'],
  ['Another tool for your team', 'Another worker on your team'],
];

const OLD = ['Another dashboard to learn.', 'Another prompt box.', 'Another workflow builder.', 'Another tool your team has to manage.'];
const NEW = ['You define the role.', 'You define the goal.', 'Your AI Employee does the work.'];

export function Difference() {
  return (
    <section className="relative px-5 sm:px-10" style={{ backgroundColor: '#041A17', borderRadius: '40px 40px 0 0', marginTop: -40, paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="absolute inset-0 dots opacity-40 pointer-events-none" />
      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
        <Reveal><Eyebrow light>Software gives you features. Eligoo gives you workers.</Eyebrow></Reveal>
        <h2 className="font-display m-0 mt-4 text-white" style={{ fontSize: 'clamp(40px, 6.5vw, 88px)', lineHeight: 0.98, fontWeight: 900 }}>
          <Words text="Stop operating AI." />
          <br />
          <Words text="Put AI to work." delay={0.25} accent={['work']} />
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-3xl p-7 h-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="eyebrow m-0" style={{ color: 'rgba(255,255,255,0.45)' }}>Traditional AI software</p>
              <ul className="m-0 mt-4 p-0 flex flex-col gap-3" style={{ listStyle: 'none' }}>
                {OLD.map((t, i) => (
                  <motion.li
                    key={t}
                    className="flex items-center gap-3 text-base"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                      <X size={12} strokeWidth={3} />
                    </span>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative rounded-3xl p-7 h-full overflow-hidden" style={{ backgroundColor: '#FF5A36' }}>
              <div className="absolute inset-0 grain opacity-30" />
              <p className="eyebrow m-0 relative" style={{ color: 'rgba(255,255,255,0.8)' }}>Eligoo works differently</p>
              <ul className="relative m-0 mt-4 p-0 flex flex-col gap-3" style={{ listStyle: 'none' }}>
                {NEW.map((t, i) => (
                  <motion.li
                    key={t}
                    className="font-display flex items-center gap-3 text-white"
                    style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 900 }}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.15 }}
                  >
                    <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#041A17' }}>
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="grid grid-cols-2 px-5 sm:px-8 py-4 eyebrow" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}>
              <span>Traditional AI software</span>
              <span style={{ color: '#FF7A5C' }}>Eligoo AI Employees</span>
            </div>
            {ROWS.map(([a, b], i) => (
              <motion.div
                key={a}
                className="grid grid-cols-2 items-center px-5 sm:px-8 py-4 text-sm sm:text-base"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>{a}</span>
                <span className="flex items-center gap-2 font-semibold text-white">
                  <ArrowRight size={14} style={{ color: '#FF5A36', flexShrink: 0 }} /> {b}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 6. How it works ---------- */
const STEPS = [
  { n: '01', title: 'Choose the role', text: 'Start with the work your business needs done. Content. Lead generation. Outreach. Ads. SEO. Revenue operations. Or an entire Growth Department.' },
  { n: '02', title: 'Give us the business context', text: 'Your goals. Brand. Customers. Offers. Processes. Rules. Tools. Approval requirements. Eligoo configures your AI Employee around your business.' },
  { n: '03', title: 'Connect the tools', text: 'Your AI Employees can work with the systems needed for their role. CRM. Email. Advertising. Analytics. Social platforms. Documents. Calendars. Internal systems.' },
  { n: '04', title: 'Set goals and guardrails', text: 'Define what the employee should achieve and what requires approval. Your business stays in control.' },
  { n: '05', title: 'Put them to work', text: 'Your AI Employee begins executing assigned responsibilities from the cloud.' },
  { n: '06', title: 'Grow the workforce', text: 'Start with one employee. Add specialists as your needs grow. Eventually, build an AI department that works together.' },
];

function Step({ s, i }: { s: (typeof STEPS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollProgress({ target: ref, offset: ['start 75%', 'start 40%'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [14, 0]);
  return (
    <motion.div ref={ref} className="relative pl-16 sm:pl-20 pb-12" style={{ x, scale, transformOrigin: 'left center' }}>
      <motion.span
        className="absolute left-0 top-0 w-11 h-11 rounded-full flex items-center justify-center font-display text-sm"
        style={{ backgroundColor: '#041A17', color: '#fff', fontWeight: 900, boxShadow: '0 0 0 6px #fff' }}
        initial={{ scale: 0.6 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-30% 0px -30% 0px' }}
        transition={{ type: 'spring', stiffness: 300, damping: 16, delay: i * 0.02 }}
      >
        {s.n}
      </motion.span>
      <h3 className="font-display m-0" style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 900, color: '#041A17', lineHeight: 1.1 }}>{s.title}</h3>
      <p className="m-0 mt-3 text-base" style={{ color: '#5C6B67', lineHeight: 1.7, maxWidth: 560 }}>{s.text}</p>
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollProgress({ target: ref, offset: ['start 60%', 'end 70%'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how" className="relative bg-white px-5 sm:px-10" style={{ paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16" style={{ maxWidth: 1100 }}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal><Eyebrow>From vacancy to WFC</Eyebrow></Reveal>
            <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', lineHeight: 1.0, fontWeight: 900, color: '#041A17' }}>
              <Words text="Build your AI team" />
              <br />
              <Words text="like you build a real team." delay={0.25} accent={['real', 'team']} />
            </h2>
            <Reveal delay={0.3} className="mt-8">
              <Button href={BOOK_URL}>Build Your AI Team</Button>
            </Reveal>
          </div>
        </div>
        <div ref={ref} className="lg:col-span-7 relative">
          <div className="absolute left-[21px] sm:left-[21px] top-2 bottom-10 w-[2px]" style={{ backgroundColor: '#E1E8E5' }} />
          <motion.div
            className="absolute left-[21px] top-2 bottom-10 w-[2px]"
            style={{ backgroundColor: '#FF5A36', scaleY: lineScale, transformOrigin: 'top' }}
          />
          {STEPS.map((s, i) => (
            <Step key={s.n} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
