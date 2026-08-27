import { motion } from 'framer-motion';
import { Cloud, Bot, Zap, ShieldCheck } from 'lucide-react';
import { Eyebrow, Reveal, Words, Mark, EASE } from './ui';

const PILLARS = [
  { icon: Cloud, title: 'Cloud-Native', text: 'Work from anywhere, anytime. No office, no desk, no commute.' },
  { icon: Bot, title: 'AI Employee', text: 'Smart, efficient and always on. A role, not a tool.' },
  { icon: Zap, title: 'Speed & Efficiency', text: 'Accelerating your business forward, 24/7.' },
  { icon: ShieldCheck, title: 'Reliable & Secure', text: 'You focus on growth. We handle the rest — within the rules you set.' },
];

const SOMEONE = ['research', 'plan', 'create', 'follow up', 'monitor performance', 'connect everything back to growth'];

export default function Statement() {
  return (
    <section className="relative bg-white px-5 sm:px-10" style={{ paddingTop: 'clamp(56px, 9vh, 120px)', paddingBottom: 'clamp(56px, 9vh, 120px)' }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        {/* category statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>The category</Eyebrow></Reveal>
            <h2 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(40px, 6.4vw, 92px)', lineHeight: 0.96, fontWeight: 900, color: '#041A17' }}>
              <Words text="Your next employee" />
              <br />
              <Words text="doesn't need a desk." delay={0.2} accent={['desk']} />
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <Reveal delay={0.2}>
              <p className="m-0 text-base sm:text-lg" style={{ color: '#041A17', lineHeight: 1.65 }}>
                Businesses already hire remote employees. Eligoo takes that idea one step further.
              </p>
              <p className="m-0 mt-4 text-base" style={{ color: '#5C6B67', lineHeight: 1.7 }}>
                Eligoo AI Employees live in the cloud and work across the tools your business already uses. They research
                markets, plan campaigns, create content, find prospects, write outreach, handle replies, manage ads, analyze
                revenue and coordinate work across your growth operation.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full pl-2 pr-5 py-2" style={{ backgroundColor: '#FFE9E3' }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white"><Mark size={22} /></span>
                <span className="text-sm font-semibold" style={{ color: '#041A17' }}>Meet WFC — Work From Cloud.</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* pillars */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-[28px] p-6"
              style={{ backgroundColor: '#F3F6F4' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              whileHover={{ y: -6 }}
            >
              <span className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white" style={{ color: '#FF5A36', border: '1px solid #E1E8E5' }}>
                <p.icon size={20} strokeWidth={2.2} />
              </span>
              <p className="font-display m-0 mt-5" style={{ fontSize: 20, fontWeight: 900, color: '#041A17' }}>{p.title}</p>
              <p className="m-0 mt-2 text-sm" style={{ color: '#5C6B67', lineHeight: 1.6 }}>{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* why eligoo exists */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal><Eyebrow>Why Eligoo exists</Eyebrow></Reveal>
            <h3 className="font-display m-0 mt-4" style={{ fontSize: 'clamp(30px, 3.6vw, 48px)', lineHeight: 1.02, fontWeight: 900, color: '#041A17' }}>
              <Words text="You probably don't need more software." />
              <br />
              <Words text="You need more work getting done." delay={0.25} accent={['work', 'done']} />
            </h3>
            <Reveal delay={0.3} className="mt-5">
              <p className="m-0 text-base" style={{ color: '#5C6B67', lineHeight: 1.7 }}>
                Most businesses already have enough tools — CRM, email, analytics, ad platforms, social, project management,
                AI tools. The problem is that someone still has to operate all of them.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[28px] overflow-hidden" style={{ border: '1px solid #E1E8E5' }}>
              {SOMEONE.map((s, i) => (
                <motion.div
                  key={s}
                  className="flex items-center gap-4 px-5 sm:px-7 py-4"
                  style={{ borderTop: i ? '1px solid #E1E8E5' : 'none' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: EASE }}
                >
                  <span className="eyebrow shrink-0" style={{ color: '#FF5A36', letterSpacing: '0.1em' }}>0{i + 1}</span>
                  <p className="font-display m-0" style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 800, color: '#041A17' }}>
                    Someone has to <span style={{ color: '#FF5A36' }}>{s}</span>.
                  </p>
                </motion.div>
              ))}
              <motion.div
                className="flex items-center gap-4 px-5 sm:px-7 py-6"
                style={{ backgroundColor: '#041A17' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Mark size={44} variant="white" />
                <p className="font-display m-0 text-white" style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 900 }}>
                  Eligoo gives that work to <span style={{ color: '#FF5A36' }}>AI employees.</span>
                </p>
              </motion.div>
            </div>
            <Reveal className="mt-6">
              <p className="font-display m-0" style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 900, lineHeight: 1.2, color: '#041A17' }}>
                Don't subscribe to another AI tool. <span style={{ color: '#FF5A36' }}>Hire an AI employee to do the work.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
