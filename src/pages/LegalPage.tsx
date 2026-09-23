import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { Container } from '../components/ui';
import { Seo } from '../lib/head';

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
        if (r.ok && body) { setPage(body); return; }
        // renamed page (e.g. terms-and-conditions → terms): follow the redirect the API reports
        if (r.status === 404 && body?.redirectTo) { navigate(`/p/${body.redirectTo}`, { replace: true }); return; }
        setMissing(true);
      })
      .catch(() => { if (alive) setMissing(true); });
    return () => { alive = false; };
  }, [slug, navigate]);
  return (
    <main style={{ backgroundColor: '#F3F6F4', minHeight: '100vh' }}>
      <Seo title={`${missing ? 'Page not found' : page?.title || 'Legal'} — Eligoo`} description={page ? `${page.title} for the Eligoo AI workforce platform.` : 'Eligoo legal page.'} canonical={`https://eligoo.in/p/${slug}`} />
      <section className="relative" style={{ backgroundColor: '#041A17', paddingTop: 100, paddingBottom: 48 }}>
        <div className="absolute inset-0 dots opacity-40 pointer-events-none" aria-hidden />
        <Container className="relative" max={880}>
          <Link to="/" className="inline-flex items-center gap-2 text-[13px] font-semibold no-underline py-2" style={{ color: 'rgba(255,255,255,0.65)' }}><ArrowLeft size={14} aria-hidden /> Home</Link>
          <h1 className="font-display m-0 mt-4 text-white" style={{ fontSize: 'clamp(30px, 4.6vw, 52px)', lineHeight: 1.05, fontWeight: 900 }}>
            {missing ? 'Page not found' : page?.title || ''}
          </h1>
          {page && <p className="m-0 mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Last updated {new Date(page.updated_at.includes('T') ? page.updated_at : page.updated_at + 'Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>}
        </Container>
      </section>
      <section className="py-12">
        <Container max={880}>
          <div className="bg-white rounded-[24px] px-5 sm:px-10 py-8 sm:py-10" style={{ border: '1px solid #E1E8E5' }}>
            {page ? <div className="prose-eligoo" dangerouslySetInnerHTML={{ __html: page.html }} /> : <p style={{ color: '#5C6B67' }}>{missing ? 'This page does not exist.' : 'Loading…'}</p>}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
