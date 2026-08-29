import { useScrollProgress } from './ui';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const LINKS = [
  { label: 'AI Employees', href: '/#team' },
  { label: 'How It Works', href: '/#how' },
  { label: 'Atlas', href: '/#atlas' },
  { label: 'WFC', href: '/#wfc' },
  { label: 'Plans', href: '/#plans' },
  { label: 'Blog', href: '/blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isLanding = pathname === '/';
  const scrollYProgress = useScrollProgress({});
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const hero = document.getElementById('top');
      // non-landing pages have a short dark header instead of the full hero
      setOverHero(hero ? window.scrollY < hero.offsetHeight - 120 : window.scrollY < 260);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = (scrolled && !overHero) || open;
  const glass = scrolled && overHero && !open;

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0"
        style={{ zIndex: 90 }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: isLanding ? 0.5 : 0.1, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className="mx-auto mt-3 sm:mt-4 flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all duration-500"
          style={{
            maxWidth: 1180,
            marginLeft: 'max(12px, calc((100% - 1180px) / 2))',
            marginRight: 'max(12px, calc((100% - 1180px) / 2))',
            backgroundColor: dark ? 'rgba(255,255,255,0.86)' : glass ? 'rgba(4,26,23,0.55)' : 'rgba(255,255,255,0)',
            backdropFilter: dark || glass ? 'blur(14px)' : 'none',
            boxShadow: dark ? '0 10px 30px rgba(4,26,23,0.08)' : 'none',
            border: dark ? '1px solid rgba(4,26,23,0.06)' : glass ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
          }}
        >
          <Link to="/" className="flex items-center">
            <img src={dark ? '/brand/logo.svg' : '/brand/logo-white.svg'} alt="Eligoo" width={73} height={30} style={{ height: 30, width: 'auto' }} />
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => l.href === '/blog' ? (
              <Link key={l.href} to={l.href} className="text-[13px] font-semibold no-underline transition-colors" style={{ color: dark ? '#041A17' : 'rgba(255,255,255,0.85)' }}>{l.label}</Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-semibold no-underline transition-colors"
                style={{ color: dark ? '#041A17' : 'rgba(255,255,255,0.85)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://calendly.com/eligooai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 no-underline rounded-full px-5 py-2.5 text-[13px] font-semibold"
              style={{ backgroundColor: '#FF5A36', color: '#041A17', fontWeight: 700 }}
            >
              Build Your AI Team <ArrowRight size={14} strokeWidth={2.5} />
            </a>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border-0 cursor-pointer"
              style={{ backgroundColor: dark ? '#041A17' : 'rgba(255,255,255,0.15)', color: '#fff' }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <motion.div className="fixed top-0 left-0 h-[3px] origin-left" style={{ width: '100%', scaleX: bar, backgroundColor: '#FF5A36', zIndex: 95 }} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex flex-col justify-center px-8"
            style={{ zIndex: 80, backgroundColor: '#041A17' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display no-underline text-white py-3"
                style={{ fontSize: 36, fontWeight: 900 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i }}
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="https://calendly.com/eligooai/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit items-center gap-2 no-underline rounded-full px-6 py-3.5 text-sm font-semibold"
              style={{ backgroundColor: '#FF5A36', color: '#041A17', fontWeight: 700 }}
            >
              Build Your AI Team <ArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
