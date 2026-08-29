import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Nav from './components/Nav';
import HeroCinematic from './components/HeroCinematic';
import { trackPageView } from './lib/track';

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
  useEffect(() => { trackPageView(loc.pathname); }, [loc.pathname]);
  useEffect(() => { if (!loc.hash) window.scrollTo(0, 0); }, [loc.pathname, loc.hash]);
  return (
    <>
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
    </>
  );
}
