import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Bot } from 'lucide-react';
import { Eyebrow, Reveal, Words, Mark, EASE } from './ui';

/* ---------- 8. WFC ---------- */
const BIG = ['Always available.', 'Connected to your tools.', 'Built around your business.'];

export function WfcSection() {
  return (
    <section id="wfc" className="relative overflow-hidden px-5 sm:px-10" style={{ backgroundColor: '#041A17', borderRadius: '40px 40px 0 0',  paddingTop: 'clamp(60px, 10vh, 170px)', paddingBottom: 'clamp(60px, 10vh, 170px)' }}>
      <div className="absolute inset-0 dots opacity-50 pointer-events-none" />
      <motion.div
        className="absolute pointer-events-none"
        style={{ left: '-10%', top: '5%', opacity: 0.05 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Mark size={760} variant="white" />
      </motion.div>
      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
        <Reveal><Eyebrow light>WFC — Work From Cloud</Eyebrow></Reveal>
        <div className="mt-8">
          {BIG.map((line, i) => (
            <motion.p
              key={line}
              className="font-display m-0"
              style={{ fontSize: 'clamp(34px, 6vw, 84px)', lineHeight: 1.02, fontWeight: 900, color: i === 2 ? '#FF5A36' : '#fff' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. Business outcomes ---------- */
const OUTCOMES = [
  'More qualified prospects',
  'Faster campaign execution',
  'More consistent content',
  'Faster lead response',
  'Better follow-up',
  'More meetings booked',
  'Better advertising efficiency',
  'Stronger pipeline visibility',
  'More work completed without expanding operational overhead',
];

export function Outcomes() {
  return (
    <section className="relative bg-white px-5 sm:px-10" style={{ paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <Reveal><Eyebrow>Don't measure AI by how smart it sounds</Eyebrow></Reveal>
        <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(36px, 5.4vw, 72px)', lineHeight: 1.0, fontWeight: 900, color: '#041A17' }}>
          <Words text="Measure it by the work it gets done." accent={['work', 'done']} />
        </h2>
        <Reveal delay={0.2} className="mt-5">
          <p className="m-0 text-base sm:text-lg" style={{ color: '#5C6B67', lineHeight: 1.7, maxWidth: 600 }}>
            Eligoo isn't built to impress people with conversations. It is built to produce business outcomes.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OUTCOMES.map((o, i) => (
            <motion.div
              key={o}
              className="group rounded-3xl p-6 flex items-start justify-between gap-4"
              style={{ backgroundColor: i === OUTCOMES.length - 1 ? '#041A17' : '#F3F6F4' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: EASE }}
              whileHover={{ y: -6 }}
            >
              <p className="font-display m-0" style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.2, color: i === OUTCOMES.length - 1 ? '#fff' : '#041A17' }}>{o}</p>
              <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:rotate-45" style={{ backgroundColor: '#FF5A36', color: '#fff' }}>
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </motion.div>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="font-display m-0 text-center mx-auto" style={{ fontSize: 'clamp(22px, 3vw, 38px)', fontWeight: 900, lineHeight: 1.2, color: '#041A17', maxWidth: 820 }}>
            AI becomes valuable when it stops being a demo and starts <span style={{ color: '#FF5A36' }}>becoming part of the workforce.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 10. Human + AI ---------- */
const HUMAN = ['Judgment', 'Relationships', 'Leadership', 'Creativity', 'Accountability', 'Human approval'];
const AI = ['Repetitive work', 'Research-heavy tasks', 'Operational execution', 'Data-driven decisions', 'Constantly recurring work'];

export function HumanAI() {
  return (
    <section className="relative px-5 sm:px-10" style={{ backgroundColor: '#F3F6F4', paddingTop: 'clamp(56px, 9vh, 150px)', paddingBottom: 'clamp(56px, 9vh, 150px)' }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <Reveal><Eyebrow>Not human or AI</Eyebrow></Reveal>
        <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(36px, 5.4vw, 72px)', lineHeight: 1.0, fontWeight: 900, color: '#041A17' }}>
          <Words text="Build a better team with both." accent={['both']} />
        </h2>
        <Reveal delay={0.2} className="mt-5">
          <p className="m-0 text-base sm:text-lg" style={{ color: '#5C6B67', lineHeight: 1.7, maxWidth: 640 }}>
            Eligoo isn't designed to replace every person in your company. That would be unrealistic.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-3xl p-7 sm:p-8 bg-white h-full" style={{ border: '1px solid #E1E8E5' }}>
              <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#041A17', color: '#fff' }}><Users size={20} /></span>
              <p className="font-display m-0 mt-5" style={{ fontSize: 26, fontWeight: 900, color: '#041A17' }}>Let humans lead where humans are strongest.</p>
              <p className="m-0 mt-2 text-sm" style={{ color: '#5C6B67', lineHeight: 1.6 }}>Some work requires:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {HUMAN.map((h, i) => (
                  <motion.span key={h} className="rounded-full px-3.5 py-1.5 text-xs font-semibold" style={{ backgroundColor: '#F3F6F4', color: '#041A17' }}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }}>
                    {h}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative rounded-3xl p-7 sm:p-8 h-full overflow-hidden" style={{ backgroundColor: '#041A17' }}>
              <div className="absolute inset-0 dots opacity-50" />
              <span className="relative w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#FF5A36', color: '#fff' }}><Bot size={20} /></span>
              <p className="relative font-display m-0 mt-5 text-white" style={{ fontSize: 26, fontWeight: 900 }}>Let AI handle the work machines can execute better.</p>
              <p className="relative m-0 mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>That's where AI employees create enormous leverage:</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {AI.map((h, i) => (
                  <motion.span key={h} className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06 }}>
                    {h}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

