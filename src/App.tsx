import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Nav from './components/Nav';
import HeroCinematic from './components/HeroCinematic';
import Statement from './components/Statement';
import Department from './components/Department';
import { Difference, HowItWorks } from './components/Difference';
import AtlasFlow from './components/AtlasFlow';
import { WfcSection, Outcomes, HumanAI } from './components/Wfc';
import { Control, Integrations, Plans } from './components/Trust';
import { WhyNow, WhoFor, Faq, FinalCta } from './components/Closing';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import LegalPage from './pages/LegalPage';
import { trackPageView } from './lib/track';

function Landing() {
  return (
    <>
      <Loader />
      <main>
        <HeroCinematic />
        <Statement />
        <Department />
        <HowItWorks />
        <AtlasFlow />
        <Difference />
        <Outcomes />
        <HumanAI />
        <Control />
        <Integrations />
        <Plans />
        <WfcSection />
        <WhyNow />
        <WhoFor />
        <Faq />
        <FinalCta />
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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/p/:slug" element={<LegalPage />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}
