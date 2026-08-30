import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Nav from './components/Nav';
import HeroCinematic from './components/HeroCinematic';
import { trackPageView } from './lib/track';
import ErrorBoundary from './components/ErrorBoundary';

const LandingRest = lazy(() => import('./components/LandingRest'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

function Landing() {
  return (
    <>
      <Loader />
      <main>
        <HeroCinematic />
        <Suspense fallback={null}>
          <LandingRest />
        </Suspense>
      </main>
    </>
  );
}

export default function App() {
  const loc = useLocation();
  useEffect(() => {
    const el = document.getElementById('prepaint');
    if (el) requestAnimationFrame(() => requestAnimationFrame(() => el.remove()));
  }, []);
  useEffect(() => { trackPageView(loc.pathname); }, [loc.pathname]);
  useEffect(() => { if (!loc.hash) window.scrollTo(0, 0); }, [loc.pathname, loc.hash]);
  return (
    <ErrorBoundary
      fallback={
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, background: '#041A17', color: '#fff', fontFamily: 'Inter, Inter Fallback, sans-serif', textAlign: 'center', padding: 20 }}>
          <img src="/brand/mark-white-sm.png" alt="" style={{ width: 120 }} />
          <p style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Something went wrong — a quick refresh fixes it.</p>
          <button onClick={() => window.location.reload()} style={{ background: '#FF5A36', color: '#041A17', fontWeight: 700, border: 'none', borderRadius: 999, padding: '12px 28px', fontSize: 14, cursor: 'pointer' }}>Refresh</button>
        </div>
      }
    >
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/p/:slug" element={<LegalPage />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
