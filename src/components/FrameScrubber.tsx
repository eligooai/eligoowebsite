import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

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
  const loadedRef = useRef<Set<number>>(new Set());
  const [loaded, setLoaded] = useState(0);
  const [progress, setProgress] = useState(0);

  // Progressive loading: frame 0 first (paint ASAP), then sparse keyframes so
  // scrubbing works coarsely, then the rest in the background after page load.
  useEffect(() => {
    let alive = true;
    const imgs: HTMLImageElement[] = new Array(count);
    imagesRef.current = imgs;
    const loadedSet = loadedRef.current;
    loadedSet.clear();

    const loadOne = (i: number) => new Promise<void>((resolve) => {
      if (imgs[i]) return resolve();
      const img = new Image();
      img.decoding = 'async';
      img.src = src(i);
      img.onload = () => {
        if (!alive) return resolve();
        loadedSet.add(i);
        setLoaded(loadedSet.size);
        if (i === 0 || Math.round(frameRef.current) === i) draw(frameRef.current);
        resolve();
      };
      img.onerror = () => resolve();
      imgs[i] = img;
    });

    const pool = async (indices: number[], concurrency: number) => {
      const queue = indices.filter((i) => !imgs[i]);
      const workers = Array.from({ length: concurrency }, async () => {
        while (alive && queue.length) await loadOne(queue.shift()!);
      });
      await Promise.all(workers);
    };

    (async () => {
      await loadOne(0);
      const keys: number[] = [];
      for (let i = 0; i < count; i += 6) keys.push(i);
      keys.push(count - 1);
      await pool(keys, 4);
      if (!alive) return;
      // remaining frames: wait for full page load + idle so they never compete
      // with critical resources
      await new Promise<void>((r) => {
        if (document.readyState === 'complete') r();
        else window.addEventListener('load', () => r(), { once: true });
      });
      await new Promise((r) => setTimeout(r, 800));
      const rest: number[] = [];
      for (let i = 0; i < count; i++) if (!imgs[i]) rest.push(i);
      await pool(rest, 3);
    })();

    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const nearestLoaded = (index: number) => {
    const want = Math.round(index);
    const imgs = imagesRef.current;
    if (imgs[want]?.complete && imgs[want]?.naturalWidth) return imgs[want];
    for (let d = 1; d < imgs.length; d++) {
      for (const j of [want - d, want + d]) {
        if (j >= 0 && j < imgs.length && imgs[j]?.complete && imgs[j]?.naturalWidth) return imgs[j];
      }
    }
    return null;
  };
  const draw = (index: number) => {
    const canvas = canvasRef.current;
    const img = nearestLoaded(index);
    if (!canvas || !img) return;
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

  // scroll-scrub → frame (plain rAF smoothing; no animation library needed)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onResize = () => draw(frameRef.current);
    window.addEventListener('resize', onResize);
    if (reduce) {
      frameRef.current = count - 1;
      const t = setTimeout(() => draw(count - 1), 300);
      setProgress(1);
      return () => { clearTimeout(t); window.removeEventListener('resize', onResize); };
    }
    let raf = 0;
    let current = 0;
    let running = true;
    const tick = () => {
      if (!running) return;
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const target = p * (count - 1);
      // exponential smoothing ≈ the old scrub feel
      current += (target - current) * (1 - Math.pow(0.001, 1 / (scrub * 60)));
      if (Math.abs(target - current) < 0.05) current = target;
      const idx = Math.round(current);
      if (idx !== Math.round(frameRef.current)) { frameRef.current = current; draw(idx); }
      else frameRef.current = current;
      setProgress(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, scrub]);

  // as frames stream in, refresh the displayed frame with a sharper neighbour
  useEffect(() => {
    if (loaded > 0) draw(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const ready = loaded >= 1;

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
