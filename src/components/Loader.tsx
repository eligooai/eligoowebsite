import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarkDraw from './MarkDraw';

const EASE = [0.76, 0, 0.24, 1] as const;

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const minTime = new Promise((r) => setTimeout(r, 2600));
    const loaded = new Promise<void>((r) => {
      if (document.readyState === 'complete') r();
      else window.addEventListener('load', () => r(), { once: true });
    });
    Promise.all([minTime, loaded]).then(() => {
      setShow(false);
      document.body.style.overflow = '';
    });
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
          style={{ zIndex: 1000, backgroundColor: '#041A17' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="absolute inset-0 dots opacity-60" />
          {/* coral pulse behind the mark */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(255,90,54,0.35), transparent 60%)', filter: 'blur(20px)' }}
            animate={{ scale: [0.8, 1.15, 0.9], opacity: [0.4, 0.9, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* the real mark, drawn stroke by stroke (traced from the supplied artwork) */}
          <motion.div
            className="relative"
            style={{ width: 'clamp(200px, 26vw, 320px)' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.3 } }}
          >
            <MarkDraw size={320} color="#ffffff" accent="#FF5A36" delay={0.25} />
          </motion.div>
          <motion.p
            className="eyebrow m-0 mt-10"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            AI Employees. Work From Cloud.
          </motion.p>
          <motion.div
            className="absolute bottom-10 h-[2px] rounded-full"
            style={{ backgroundColor: '#FF5A36', width: 140, transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
