import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { Seo } from '../lib/head';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found — Eligoo" description="The page you were looking for does not exist." canonical="https://eligoo.in/404" />
      <main className="min-h-screen flex flex-col" style={{ backgroundColor: '#F3F6F4' }}>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
          <img src="/brand/mark-sm.png" alt="" width={130} height={70} style={{ width: 130, height: 'auto', opacity: 0.35 }} />
          <h1 className="font-display mt-6 m-0" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, color: '#041A17' }}>Page not found</h1>
          <p className="m-0 mt-3 text-base" style={{ color: '#5C6B67', maxWidth: 460, lineHeight: 1.6 }}>The address may have changed. Start from the home page or pick a section from the menu.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 no-underline rounded-full px-6 text-sm font-bold" style={{ backgroundColor: '#041A17', color: '#fff', minHeight: 48 }}><ArrowLeft size={15} aria-hidden /> Back to home</Link>
        </div>
        <Footer />
      </main>
    </>
  );
}
