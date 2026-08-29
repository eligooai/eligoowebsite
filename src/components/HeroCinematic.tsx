import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import FrameScrubber from './FrameScrubber';
import { Button, BOOK_URL } from './ui';

const COUNT = 90;
const EASE = [0.4, 0, 0.2, 1] as const;
const landscape = (i: number) => `/frames/team/frame_${String(i).padStart(3, '0')}.webp`;
const portrait = (i: number) => `/frames/team-m/frame_${String(i).padStart(3, '0')}.webp`;

function Act1() {
  return (
    <div className="mx-auto flex flex-col items-center text-center px-5" style={{ maxWidth: 1000 }}>
      <motion.p className="eyebrow m-0" style={{ color: '#FF7A5C' }} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
        AI Employees. Work From Cloud.
      </motion.p>
      <h1 className="font-display m-0 mt-4 text-white" style={{ fontSize: 'clamp(38px, 5.6vw, 80px)', lineHeight: 0.98, fontWeight: 900 }}>
        {['Hire AI Employees.', 'Build Your AI Workforce.'].map((line, li) => (
          <span key={line} className="block overflow-hidden">
            <motion.span className="block" style={{ color: li === 1 ? '#FF5A36' : '#fff' }} initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ delay: 0.3 + li * 0.12, duration: 0.9, ease: EASE }}>
              {line}
            </motion.span>
          </span>
        ))}
      </h1>
      <motion.p className="m-0 mt-4 text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.74)', lineHeight: 1.6, maxWidth: 620 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }}>
        Seven AI employees for strategy, content, creative, pipeline, outbound and revenue — led by Atlas, your AI COO.
        They work from the cloud, use your tools and work toward the goals you give them.
      </motion.p>
      <motion.div className="mt-6 flex flex-wrap items-center justify-center gap-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
        <Button href={BOOK_URL}>Build Your AI Team</Button>
        <Button href="#team" variant="ghost">Meet the AI Employees</Button>
      </motion.div>
    </div>
  );
}

function Caption({ kicker, title, accent, text, align = 'left' }: { kicker: string; title: string; accent: string; text?: string; align?: 'left' | 'center' }) {
  return (
    <div className={align === 'center' ? 'mx-auto text-center flex flex-col items-center' : ''} style={{ maxWidth: 520 }}>
      <p className="eyebrow m-0" style={{ color: '#FF7A5C' }}>{kicker}</p>
      <p className="font-display m-0 mt-3 text-white" style={{ fontSize: 'clamp(26px, 3.6vw, 50px)', lineHeight: 1, fontWeight: 900 }}>
        {title} <span style={{ color: '#FF5A36' }}>{accent}</span>
      </p>
      {text && <p className="m-0 mt-3 text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>{text}</p>}
    </div>
  );
}

export default function HeroCinematic() {
  const [isPortrait, setIsPortrait] = useState(false);
  useEffect(() => {
    const f = () => setIsPortrait(window.innerWidth < 700 && window.innerHeight > window.innerWidth);
    f();
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);

  return (
    <section id="top">
      <FrameScrubber
        key={isPortrait ? 'p' : 'l'}
        src={isPortrait ? portrait : landscape}
        count={COUNT}
        length={4}
        fit="cover"
        anchorY={0.6}
        scrub={0.5}
        overlays={[
          { from: 0, to: 0.18, interactive: true, className: 'inset-x-0 top-[12vh] sm:top-[13vh]', node: <Act1 /> },
          { from: 0, to: 0.06, className: 'inset-x-0 bottom-5 flex justify-center', node: (
            <motion.span className="flex items-center gap-2 eyebrow text-white" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 1.2 }}>Scroll <ArrowDown size={13} strokeWidth={2.5} /></motion.span>
          ) },
          { from: 0.27, to: 0.54, className: 'left-5 sm:left-16 bottom-[8vh]', node: <Caption kicker="Meet your AI team" title="Every growth role," accent="covered." text="Strategy, content, creative, prospect intelligence, outbound and revenue — one coordinated team, 24/7, working toward the goals you set." /> },
          { from: 0.6, to: 0.8, className: 'inset-x-0 bottom-[7vh] px-5', node: <Caption align="center" kicker="Your AI Growth Department" title="Hire for the role." accent="Not the software." text="Every employee has defined decisions, deliverables, KPIs and approval boundaries." /> },
          { from: 0.88, to: 1, interactive: true, className: 'inset-x-0 top-[11vh] px-5', node: (
            <div className="mx-auto text-center flex flex-col items-center" style={{ maxWidth: 820 }}>
              <p className="eyebrow m-0" style={{ color: '#FF7A5C' }}>WFC — Work From Cloud</p>
              <p className="font-display m-0 mt-3 text-white" style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.05, fontWeight: 900 }}>
                Your AI team is ready. <span style={{ color: '#FF5A36' }}>They Work From Cloud.</span>
              </p>
              <div className="mt-4"><Button href="#team">Meet the AI Employees</Button></div>
            </div>
          ) },
        ]}
      >
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" style={{ zIndex: 1 }} />
        <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ zIndex: 1, height: '52%', background: 'linear-gradient(to bottom, rgba(4,26,23,0.85) 0%, rgba(4,26,23,0.35) 55%, transparent 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ zIndex: 1, height: '34%', background: 'linear-gradient(to top, rgba(4,26,23,0.85) 0%, transparent 100%)' }} />
      </FrameScrubber>
    </section>
  );
}
