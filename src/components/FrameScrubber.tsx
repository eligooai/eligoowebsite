import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

export interface Overlay {
  /** progress window [start, end] in which the overlay is fully visible */
  from: number;
  to: number;
  node: ReactNode;
  className?: string;
  /** allow clicks (CTAs) inside this overlay */
  interactive?: boolean;
}

interface Props {
  /** e.g. (i) => `/frames/logo/frame_${String(i).padStart(3,'0')}.webp` */
  src: (i: number) => string;
  count: number;
  /** scroll length in viewport heights */
  length?: number;
  fit?: 'cover' | 'contain';
  /** 0–1 vertical anchor of the image inside the canvas */
  anchorY?: number;
  scrub?: number;
  overlays?: Overlay[];
  background?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Pinned, scroll-scrubbed image sequence drawn to a canvas (the "Apple product page"
 * technique). Frames are preloaded, the canvas is HiDPI-aware and re-fit on resize, and
 * users with reduced-motion preference just see the final frame.
 */
export default function FrameScrubber({ src, count, length = 3, fit = 'contain', anchorY = 0.5, scrub = 0.6, overlays = [], background = '#041A17', children, className = '' }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const [loaded, setLoaded] = useState(0);
  const [progress, setProgress] = useState(0);

  // preload every frame
  useEffect(() => {
    let alive = true;
    const imgs: HTMLImageElement[] = [];
    let done = 0;
    for (let i = 0; i < count; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = src(i);
      img.onload = img.onerror = () => {
        if (!alive) return;
        done += 1;
        setLoaded(done);
        if (i === 0) draw(0);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const draw = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[Math.round(index)];
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.clientWidth, H = canvas.clientHeight;
    if (canvas.width !== W * dpr || canvas.height !== H * dpr) {
      canvas.width = W * dpr;
      canvas.height = H * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, W, H);
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = W / H;
    let dw: number, dh: number;
    if (fit === 'cover' ? ir < cr : ir > cr) { dw = W; dh = W / ir; } else { dh = H; dw = H * ir; }
    // contain on narrow screens shouldn't shrink to nothing — allow gentle overflow
    if (fit === 'contain' && dw < W * 0.9 && ir > cr) { dw = W * 1.15; dh = dw / ir; }
    const dx = (W - dw) / 2;
    const dy = (H - dh) * anchorY;
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // scroll-scrub → frame
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const proxy = { f: 0 };
    const onResize = () => draw(frameRef.current);
    window.addEventListener('resize', onResize);
    if (reduce) {
      frameRef.current = count - 1;
      const t = setTimeout(() => draw(count - 1), 300);
      setProgress(1);
      return () => { clearTimeout(t); window.removeEventListener('resize', onResize); };
    }
    const tween = gsap.to(proxy, {
      f: count - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub,
        onUpdate: (self) => setProgress(self.progress),
      },
      onUpdate: () => {
        const idx = Math.round(proxy.f);
        if (idx !== frameRef.current) {
          frameRef.current = idx;
          draw(idx);
        }
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, scrub]);

  // once enough frames are in, make sure frame 0 is drawn
  useEffect(() => {
    if (loaded > 0) draw(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const ready = loaded >= Math.min(count, 12);

  return (
    <div ref={sectionRef} className={`relative ${className}`} style={{ height: `${length * 100}vh`, backgroundColor: background }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: ready ? 1 : 0, transition: 'opacity 600ms', zIndex: 1 }} />
        {overlays.map((o, i) => {
          const fadeIn = o.from <= 0 ? 1 : Math.min(1, Math.max(0, (progress - o.from) / 0.06));
          const fadeOut = o.to >= 1 ? 1 : Math.min(1, Math.max(0, (o.to - progress) / 0.06));
          const op = progress < o.from - 0.06 || progress > o.to + 0.06 ? 0 : Math.min(fadeIn, fadeOut);
          return (
            <div
              key={i}
              className={`absolute ${o.interactive && op > 0.5 ? 'pointer-events-auto' : 'pointer-events-none'} ${o.className ?? ''}`}
              style={{ opacity: op, transform: `translateY(${(1 - op) * 18}px)`, transition: 'opacity 120ms linear, transform 120ms linear', zIndex: 2 }}
            >
              {o.node}
            </div>
          );
        })}
        {children}
      </div>
    </div>
  );
}
