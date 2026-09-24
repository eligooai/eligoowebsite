import { Suspense, lazy, use, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Nav from './components/Nav';
import PageView from './components/page/PageView';
import NotFound from './pages/NotFound';
import { normalisePath, prefetchAll, prefetchPath, sectionFor, sectionPromise } from './content/loader';
import { trackPageView } from './lib/track';
import ErrorBoundary from './components/ErrorBoundary';

// only the API-backed pages are client-rendered; everything in the registry is prerendered
const BlogPost = lazy(() => import('./pages/BlogPost'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

/** /blog/:slug → /resources/blog/:slug/ (the server also 301s; this covers client-side navigation). */
function BlogRedirect() {
  const { slug } = useParams();
  return <Navigate to={slug ? `/resources/blog/${slug}/` : '/resources/blog/'} replace />;
}

/**
 * Resolves the content page for the current path from its section chunk. On the server the
 * chunk is primed, so this renders synchronously; in the browser the prerendered HTML stays on
 * screen while the chunk loads, then hydrates.
 */
function ContentRoute() {
  const path = normalisePath(useLocation().pathname);
  const pages = use(sectionPromise(sectionFor(path)));
  const page = pages.find((p) => p.slug === path);
  // the new page is on screen now (not merely requested): put the viewport at its top
  useLayoutEffect(() => { if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }); }, [path]);
  return page ? <PageView page={page} /> : <NotFound />;
}

/** Thin accent bar at the top on every client-side navigation, so a click is visibly acknowledged. */
function RouteProgress({ pathname }: { pathname: string }) {
  const [tick, setTick] = useState(0);
  const first = useRef(true);
  useEffect(() => { if (first.current) { first.current = false; return; } setTick((t) => t + 1); }, [pathname]);
  if (!tick) return null;
  return <div key={tick} className="route-bar" aria-hidden />;
}

export default function App() {
  const loc = useLocation();
  useEffect(() => { trackPageView(loc.pathname); }, [loc.pathname]);
  useEffect(() => { try { history.scrollRestoration = 'manual'; } catch { /* older browsers */ } }, []);
  useEffect(() => { if (!loc.hash) window.scrollTo(0, 0); }, [loc.pathname, loc.hash]);
  // content chunks: warm the one under the pointer, then everything once idle — navigation never waits on the network
  useEffect(() => {
    const warm = (e: Event) => { const a = (e.target as Element | null)?.closest?.('a[href^="/"]'); if (a) prefetchPath((a as HTMLAnchorElement).getAttribute('href') || ''); };
    document.addEventListener('pointerover', warm, { passive: true });
    document.addEventListener('touchstart', warm, { passive: true });
    prefetchAll();
    return () => { document.removeEventListener('pointerover', warm); document.removeEventListener('touchstart', warm); };
  }, []);
  return (
    <ErrorBoundary
      fallback={
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, background: '#041A17', color: '#fff', fontFamily: 'Inter, Inter Fallback, sans-serif', textAlign: 'center', padding: 20 }}>
          <img src="/brand/mark-white-sm.png" alt="" width={120} height={65} style={{ width: 120, height: 'auto' }} />
          <p style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Something went wrong — a quick refresh fixes it.</p>
          <button onClick={() => window.location.reload()} style={{ background: '#FF5A36', color: '#041A17', fontWeight: 700, border: 'none', borderRadius: 999, padding: '12px 28px', fontSize: 14, cursor: 'pointer' }}>Refresh</button>
        </div>
      }
    >
      <Nav />
      <RouteProgress pathname={loc.pathname} />
      <Suspense fallback={<main style={{ minHeight: '100vh', backgroundColor: '#041A17' }} />}>
        <div key={loc.pathname} className="page-enter">
        <Routes>
          <Route path="/resources/blog/:slug" element={<BlogPost />} />
          <Route path="/blog" element={<Navigate to="/resources/blog/" replace />} />
          <Route path="/blog/:slug" element={<BlogRedirect />} />
          <Route path="/p/:slug" element={<LegalPage />} />
          <Route path="*" element={<ContentRoute />} />
        </Routes>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
