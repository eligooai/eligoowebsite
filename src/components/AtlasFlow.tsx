import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import { Button, EASE, useScrollProgress, BOOK_URL } from './ui';
import { byId } from '../data/employees';

const CHAIN = [
  { id: 'radar', task: 'finds and verifies the right prospects.' },
  { id: 'maven', task: 'sets the messaging angle.' },
  { id: 'sage', task: 'writes the outreach copy.' },
  { id: 'hook', task: 'personalises, sends and books the meetings.' },
  { id: 'ledger', task: 'measures pipeline, show rate and revenue.' },
];
const TOTAL = CHAIN.length + 2; // intro + steps + closing

export default function AtlasFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const scrollYProgress = useScrollProgress({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStage(Math.min(TOTAL - 1, Math.floor(v * TOTAL))));
  const atlas = byId('atlas');
  const done = stage >= TOTAL - 1;

  return (
    <section id="atlas" ref={ref} className="relative" style={{ height: `${TOTAL * 60 + 100}vh`, backgroundColor: '#F3F6F4' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0 dots-dark opacity-60 pointer-events-none" />
        <div className="relative mx-auto w-full px-5 sm:px-10 flex-1 flex flex-col justify-center" style={{ maxWidth: 1180, paddingTop: 90, paddingBottom: 64 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* left */}
            <div className="lg:col-span-5">
              <p className="eyebrow m-0" style={{ color: '#FF5A36' }}>Your AI workforce needs management too</p>
              <h2 className="font-display m-0 mt-3" style={{ fontSize: 'clamp(30px, 4.2vw, 56px)', lineHeight: 1, fontWeight: 900, color: '#041A17' }}>
                Meet Atlas.
                <br />
                <span style={{ color: '#FF5A36' }}>Your AI Growth Manager.</span>
              </h2>
              <p className="m-0 mt-3 text-sm sm:text-base hidden sm:block" style={{ color: '#5C6B67', lineHeight: 1.7, maxWidth: 460 }}>
                Hiring multiple AI Employees shouldn't mean managing a fleet of separate bots. Atlas coordinates them.
                Give Atlas the business objective. Atlas breaks it into priorities, coordinates the right employees,
                monitors execution and keeps the workforce aligned.
              </p>

              {/* goal bubble */}
              <motion.div
                className="mt-5 sm:mt-7 flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ backgroundColor: '#041A17', color: '#fff' }}>You</span>
                <div className="rounded-2xl rounded-tl-md px-4 py-3 bg-white" style={{ border: '1px solid #E1E8E5', boxShadow: '0 10px 30px rgba(4,26,23,0.06)' }}>
                  <p className="m-0 text-sm sm:text-base font-semibold" style={{ color: '#041A17', lineHeight: 1.5 }}>
                    “We need 30 qualified sales meetings next month.”
                  </p>
                </div>
              </motion.div>

              <AnimatePresence>
                {stage >= 1 && (
                  <motion.div
                    className="mt-3 flex items-start gap-3"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 overflow-hidden" style={{ backgroundColor: '#FF5A36' }}>
                      <Crown size={15} strokeWidth={2.5} color="#fff" />
                    </span>
                    <div className="rounded-2xl rounded-tl-md px-4 py-3" style={{ backgroundColor: '#041A17' }}>
                      <p className="m-0 text-sm font-semibold text-white" style={{ lineHeight: 1.5 }}>
                        {done ? 'Pipeline is live. 30 meetings on track.' : `On it. Coordinating ${Math.min(stage, CHAIN.length)} of ${CHAIN.length} employees…`}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* right: chain */}
            <div className="lg:col-span-7 flex items-center gap-4 sm:gap-8">
              <div className="hidden md:block shrink-0" style={{ height: 'min(52vh, 480px)' }}>
                <motion.img
                  src={atlas.image}
                  alt="Atlas"
                  width={atlas.imgW}
                  height={atlas.imgH}
                  style={{ height: '100%', width: 'auto', filter: 'drop-shadow(0 24px 30px rgba(4,26,23,0.25))' }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <div className="flex-1 relative">
                <div className="absolute left-[19px] top-5 bottom-5 w-[2px]" style={{ backgroundColor: '#E1E8E5' }} />
                <motion.div
                  className="absolute left-[19px] top-5 w-[2px]"
                  style={{ backgroundColor: '#FF5A36', transformOrigin: 'top' }}
                  animate={{ height: `calc(${Math.max(0, Math.min(stage, CHAIN.length) - 1) / (CHAIN.length - 1) * 100}% - 40px)` }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  {CHAIN.map((c, i) => {
                    const e = byId(c.id);
                    const active = stage >= i + 1;
                    const current = stage === i + 1;
                    return (
                      <motion.div
                        key={c.id}
                        className="relative flex items-center gap-3 sm:gap-4 rounded-2xl px-2 py-1.5 sm:py-2"
                        animate={{
                          opacity: active ? 1 : 0.35,
                          x: current ? 6 : 0,
                          backgroundColor: current ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
                          boxShadow: current ? '0 12px 30px rgba(4,26,23,0.08)' : '0 0 0 rgba(0,0,0,0)',
                        }}
                        transition={{ duration: 0.45, ease: EASE }}
                      >
                        <motion.div
                          className="relative w-[38px] h-[38px] sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0"
                          style={{ backgroundColor: active ? '#FF5A36' : '#E1E8E5', boxShadow: '0 0 0 4px #F3F6F4' }}
                          animate={{ scale: current ? 1.12 : 1 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                        >
                          <img src={e.image} alt={e.name} style={{ height: '330%', width: 'auto', marginTop: '-2%' }} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className="m-0 text-sm sm:text-base" style={{ color: '#041A17', lineHeight: 1.3 }}>
                            <span className="font-display font-black">{e.name}</span>{' '}
                            <span style={{ color: '#5C6B67' }}>{c.task}</span>
                          </p>
                          <p className="m-0 text-[11px] font-semibold hidden sm:block" style={{ color: '#9AA8A4' }}>{e.role}</p>
                        </div>
                        <AnimatePresence>
                          {active && !current && (
                            <motion.span
                              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                              style={{ backgroundColor: '#041A17', color: '#fff' }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              <Check size={12} strokeWidth={3} />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* closing line */}
          <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ minHeight: 56 }}>
            <motion.p
              className="font-display m-0"
              style={{ fontSize: 'clamp(18px, 2.4vw, 30px)', fontWeight: 900, color: '#041A17', lineHeight: 1.2 }}
              animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              One goal. One AI manager. <span style={{ color: '#FF5A36' }}>An entire workforce behind it.</span>
            </motion.p>
            <motion.div animate={{ opacity: done ? 1 : 0 }} transition={{ delay: 0.2 }}>
              <Button href={BOOK_URL} variant="ink">Meet Atlas</Button>
            </motion.div>
          </div>
        </div>

        {/* progress */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <span key={i} className="h-1 rounded-full transition-all duration-300" style={{ width: i === stage ? 22 : 8, backgroundColor: i <= stage ? '#FF5A36' : '#D5DDD9' }} />
          ))}
        </div>
      </div>
    </section>
  );
}
