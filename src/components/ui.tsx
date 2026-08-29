import { motion, useScroll, useMotionValue, useMotionValueEvent } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';

export const EASE = [0.4, 0, 0.2, 1] as const;
export const BOOK_URL = 'https://calendly.com/eligooai/30min';

/**
 * Scroll progress as a plain MotionValue. framer-motion 13 tries to run
 * scroll-linked `opacity` through a native ViewTimeline animation and loses the
 * useTransform input ranges in the process — mirroring the value into an
 * unlinked MotionValue keeps every scroll-linked style JS-driven and correct.
 */
export function useScrollProgress(options: Parameters<typeof useScroll>[0]): MotionValue<number> {
  const { scrollYProgress } = useScroll(options);
  const mirror = useMotionValue(scrollYProgress.get());
  useMotionValueEvent(scrollYProgress, 'change', (v) => mirror.set(v));
  return mirror;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  style,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word reveal for headlines. The observer sits on the parent (the clipped
 *  children would never intersect on their own) and the words animate via variants. */
export function Words({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.05,
  accent,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  /** words (exact match) to color coral */
  accent?: string[];
}) {
  const words = text.split(' ');
  return (
    <motion.span
      className={className}
      style={style}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" style={{ marginRight: '0.24em' }}>
          <motion.span
            className="inline-block"
            style={{ color: accent?.includes(w.replace(/[.,]/g, '')) ? '#FF5A36' : undefined }}
            custom={i}
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: (idx: number) => ({
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: delay + idx * stagger, ease: EASE },
              }),
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Eyebrow({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p className={`eyebrow m-0 flex items-center gap-2 ${className}`} style={{ color: light ? '#FF7A5C' : '#FF5A36' }}>
      <span className="inline-block w-6 h-[2px] rounded-full" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  );
}

export function H2({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <h2
      className={`font-display m-0 mt-4 ${className}`}
      style={{ fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.02, fontWeight: 900, color: light ? '#ffffff' : '#041A17' }}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={`m-0 text-base sm:text-lg ${className}`}
      style={{ lineHeight: 1.7, color: light ? 'rgba(255,255,255,0.72)' : '#5C6B67', maxWidth: 620 }}
    >
      {children}
    </p>
  );
}

export function Button({
  children,
  href,
  variant = 'coral',
  className = '',
  arrow = true,
  onClick,
}: {
  children: ReactNode;
  href: string;
  variant?: 'coral' | 'ink' | 'ghost' | 'ghost-dark';
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
}) {
  const styles: Record<string, CSSProperties> = {
    coral: { backgroundColor: '#FF5A36', color: '#041A17', fontWeight: 700 },
    ink: { backgroundColor: '#041A17', color: '#ffffff' },
    ghost: { backgroundColor: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.35)' },
    'ghost-dark': { backgroundColor: 'transparent', color: '#041A17', border: '1.5px solid rgba(4,26,23,0.2)' },
  };
  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 no-underline rounded-full px-6 py-3.5 text-sm font-semibold ${className}`}
      style={styles[variant]}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {children}
      {arrow && <ArrowRight size={16} strokeWidth={2.5} />}
    </motion.a>
  );
}

/** The real Eligoo mark (rasterized from the supplied favicon SVG, untouched artwork;
 *  the white variant is a luminance inversion for dark surfaces). */
export function Mark({ size = 64, variant = 'dark', className, style }: { size?: number; variant?: 'dark' | 'white'; className?: string; style?: CSSProperties }) {
  return (
    <img
      src={variant === 'white' ? '/brand/mark-white.png' : '/brand/mark.png'}
      alt=""
      aria-hidden
      draggable={false}
      className={className}
      width={size}
      height={Math.round((size * 641) / 1191)}
      style={{ width: size, height: 'auto', display: 'block', ...style }}
    />
  );
}
