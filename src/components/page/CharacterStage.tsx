import { Suspense, lazy, useEffect, useState } from 'react';
import type { Employee } from '../../data/employees';
import ErrorBoundary from '../ErrorBoundary';

const ProfileViewer = lazy(() => import('../three/ProfileViewer'));

/**
 * Employee character for a hero. Always renders the static webp (that is what the
 * prerendered HTML, phones and reduced-motion users get); on a ≥768px viewport with
 * motion allowed and WebGL available, the 3D model loads lazily after mount.
 */
export default function CharacterStage({ employee, priority = false, still = false }: { employee: Employee; priority?: boolean; still?: boolean }) {
  const [three, setThree] = useState(false);
  useEffect(() => {
    if (!employee.model || still) return;
    const ok = () => {
      if (window.innerWidth < 768) return false;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
      try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
    };
    const t = setTimeout(() => setThree(ok()), 300);
    return () => clearTimeout(t);
  }, [employee.model, still]);

  const isMark = !employee.model;
  return (
    <div className="relative mx-auto w-full" style={{ maxWidth: isMark ? 420 : 380, aspectRatio: isMark ? '1 / 1' : '380 / 520' }}>
      <div className="absolute inset-0 rounded-[32px]" style={{ background: 'radial-gradient(60% 60% at 50% 70%, rgba(255,90,54,0.35), transparent 70%)' }} aria-hidden />
      {isMark ? (
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <img src={employee.image} alt={`${employee.name} — ${employee.role}`} width={employee.imgW} height={employee.imgH} className="w-full h-auto" style={{ maxWidth: 320 }} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
        </div>
      ) : (
        <img src={employee.image} alt={`${employee.name} — ${employee.role}`} width={employee.imgW} height={employee.imgH}
          className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto object-contain transition-opacity duration-500"
          style={{ opacity: three ? 0 : 1, maxHeight: '100%' }} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
      )}
      {three && employee.model && (
        <div className="absolute inset-0" aria-hidden>
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <ProfileViewer model={employee.model} />
            </Suspense>
          </ErrorBoundary>
        </div>
      )}
    </div>
  );
}
