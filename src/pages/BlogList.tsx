import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import { Eyebrow, EASE } from '../components/ui';
import { get, fmtDate, type BlogCard } from '../lib/api';

interface ListResp { items: (BlogCard & { html?: string })[]; total: number; page: number; pages: number; topics: string[] }

function Card({ b, i, featured = false }: { b: BlogCard; i: number; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: EASE }}
      className={featured ? 'md:col-span-2 lg:col-span-3' : ''}
    >
      <Link to={`/blog/${b.slug}`} className={`group block no-underline rounded-[24px] overflow-hidden bg-white h-full ${featured ? 'lg:grid lg:grid-cols-2' : ''}`} style={{ border: '1px solid #E1E8E5' }}>
        <div className="relative overflow-hidden" style={{ height: featured ? undefined : 210, minHeight: featured ? 280 : undefined, backgroundColor: '#041A17' }}>
          {b.cover
            ? <img src={b.cover} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            : <div className="absolute inset-0 flex items-center justify-center dots" style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,90,54,0.4), #041A17 70%)' }}>
                <img src="/brand/mark-white.png" alt="" style={{ width: '55%', opacity: 0.85 }} />
              </div>}
          {b.topic && <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase" style={{ letterSpacing: '0.12em', backgroundColor: '#FF5A36', color: '#fff' }}>{b.topic}</span>}
        </div>
        <div className={`p-6 ${featured ? 'lg:p-10 flex flex-col justify-center' : ''}`}>
          <p className="m-0 text-xs font-semibold flex items-center gap-2" style={{ color: '#64736F' }}>
            {fmtDate(b.published_at)} <span>·</span> <Clock size={11} /> {Math.max(1, Math.round((b.excerpt.length + 800) / 500))} min read
          </p>
          <h3 className="font-display m-0 mt-2 transition-colors group-hover:text-[#FF5A36]" style={{ fontSize: featured ? 'clamp(24px, 2.6vw, 36px)' : 20, fontWeight: 900, color: '#041A17', lineHeight: 1.15 }}>{b.title}</h3>
          <p className="m-0 mt-2 text-sm" style={{ color: '#5C6B67', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: featured ? 3 : 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{b.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold" style={{ color: '#FF5A36' }}>
            Read article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogList() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, parseInt(params.get('page') || '1'));
  const topic = params.get('topic') || '';
  const [d, setD] = useState<ListResp | null>(null);
  useEffect(() => {
    document.title = 'Blog — Eligoo';
    get<ListResp>(`/eapi/blogs?page=${page}&per=10${topic ? `&topic=${encodeURIComponent(topic)}` : ''}`).then(setD).catch(() => setD({ items: [], total: 0, page: 1, pages: 1, topics: [] }));
  }, [page, topic]);

  const featured = page === 1 && !topic && d?.items.length ? d.items[0] : null;
  const rest = featured ? d!.items.slice(1) : d?.items || [];

  return (
    <main style={{ backgroundColor: '#F3F6F4', minHeight: '100vh' }}>
      <section className="relative overflow-hidden px-5 sm:px-10" style={{ backgroundColor: '#041A17', paddingTop: 'clamp(120px, 16vh, 180px)', paddingBottom: 'clamp(48px, 7vh, 90px)' }}>
        <div className="absolute inset-0 dots opacity-50 pointer-events-none" />
        <div className="absolute pointer-events-none" style={{ right: '-12%', top: '-30%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(255,90,54,0.28), transparent 60%)' }} />
        <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
          <Eyebrow light>The Eligoo Blog</Eyebrow>
          <h1 className="font-display m-0 mt-4 text-white" style={{ fontSize: 'clamp(38px, 6vw, 76px)', lineHeight: 0.98, fontWeight: 900 }}>
            Ideas from the <span style={{ color: '#FF5A36' }}>AI workforce.</span>
          </h1>
          <p className="m-0 mt-4 text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, maxWidth: 560 }}>
            Playbooks, product updates and thinking on AI employees, growth operations and Work From Cloud.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-10 py-12">
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          {!!d?.topics.length && (
            <div className="flex flex-wrap gap-2 mb-8">
              <button onClick={() => setParams({})} className="rounded-full px-4 py-2 text-[13px] font-semibold cursor-pointer"
                style={{ backgroundColor: !topic ? '#041A17' : '#fff', color: !topic ? '#fff' : '#041A17', border: '1px solid #E1E8E5' }}>All</button>
              {d.topics.map((t) => (
                <button key={t} onClick={() => setParams({ topic: t })} className="rounded-full px-4 py-2 text-[13px] font-semibold cursor-pointer"
                  style={{ backgroundColor: topic === t ? '#041A17' : '#fff', color: topic === t ? '#fff' : '#041A17', border: '1px solid #E1E8E5' }}>{t}</button>
              ))}
            </div>
          )}

          {!d && <p style={{ color: '#5C6B67' }}>Loading…</p>}
          {d && !d.items.length && (
            <div className="text-center py-20">
              <img src="/brand/mark.png" alt="" style={{ width: 120, opacity: 0.3, margin: '0 auto' }} />
              <p className="font-display mt-6" style={{ fontSize: 22, fontWeight: 900, color: '#041A17' }}>First stories coming soon.</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured && <Card b={featured} i={0} featured />}
            {rest.map((b, i) => <Card key={b.id} b={b} i={i} />)}
          </div>

          {d && d.pages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-3">
              <button disabled={page <= 1} onClick={() => setParams(topic ? { topic, page: String(page - 1) } : { page: String(page - 1) })}
                className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer disabled:opacity-30" style={{ border: '1.5px solid #041A17', background: 'transparent', color: '#041A17' }}>
                <ArrowLeft size={17} /></button>
              <span className="text-sm font-semibold" style={{ color: '#5C6B67' }}>Page {d.page} of {d.pages}</span>
              <button disabled={page >= d.pages} onClick={() => setParams(topic ? { topic, page: String(page + 1) } : { page: String(page + 1) })}
                className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer disabled:opacity-30" style={{ border: '1.5px solid #041A17', background: 'transparent', color: '#041A17' }}>
                <ArrowRight size={17} /></button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
