import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

export default function LegalPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<{ title: string; html: string; updated_at: string } | null>(null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    let alive = true;
    setPage(null); setMissing(false);
    fetch(`/eapi/pages/${slug}`)
      .then(async (r) => {
        const body = await r.json().catch(() => null);
        if (!alive) return;
        if (r.ok && body) { setPage(body); document.title = `${body.title} — Eligoo`; return; }
        // renamed page (e.g. terms-and-conditions → terms): follow the redirect the API reports
        if (r.status === 404 && body?.redirectTo) { navigate(`/p/${body.redirectTo}`, { replace: true }); return; }
        setMissing(true);
      })
      .catch(() => { if (alive) setMissing(true); });
    return () => { alive = false; };
  }, [slug, navigate]);
  return (
    <main style={{ backgroundColor: '#F3F6F4', minHeight: '100vh' }}>
      <section className="relative px-5 sm:px-10" style={{ backgroundColor: '#041A17', paddingTop: 'clamp(110px, 15vh, 150px)', paddingBottom: 48 }}>
        <div className="absolute inset-0 dots opacity-50 pointer-events-none" />
        <div className="relative mx-auto" style={{ maxWidth: 880 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-[13px] font-semibold no-underline" style={{ color: 'rgba(255,255,255,0.65)' }}><ArrowLeft size={14} /> Home</Link>
          <h1 className="font-display m-0 mt-4 text-white" style={{ fontSize: 'clamp(30px, 4.6vw, 52px)', lineHeight: 1.05, fontWeight: 900 }}>
            {missing ? 'Page not found' : page?.title || ''}
          </h1>
          {page && <p className="m-0 mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Last updated {new Date(page.updated_at.includes('T') ? page.updated_at : page.updated_at + 'Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>}
        </div>
      </section>
      <section className="px-5 sm:px-10 py-12">
        <div className="mx-auto bg-white rounded-[24px] px-6 sm:px-10 py-8 sm:py-10" style={{ maxWidth: 880, border: '1px solid #E1E8E5' }}>
          {page ? <div className="prose-eligoo" dangerouslySetInnerHTML={{ __html: page.html }} /> : <p style={{ color: '#5C6B67' }}>{missing ? 'This page does not exist.' : 'Loading…'}</p>}
        </div>
      </section>
      <Footer />
    </main>
  );
}
