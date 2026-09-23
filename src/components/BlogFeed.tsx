import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { get, fmtDate, type BlogCard } from '../lib/api';

interface ListResp { items: BlogCard[]; total: number; page: number; pages: number; topics: string[] }

function Card({ b, featured = false }: { b: BlogCard; featured?: boolean }) {
  return (
    <div className={featured ? 'md:col-span-2 lg:col-span-3' : ''}>
      <Link to={`/resources/blog/${b.slug}/`} className={`group block no-underline rounded-[24px] overflow-hidden bg-white h-full ${featured ? 'lg:grid lg:grid-cols-2' : ''}`} style={{ border: '1px solid #E1E8E5' }}>
        <div className="relative overflow-hidden" style={{ height: featured ? undefined : 200, minHeight: featured ? 260 : undefined, backgroundColor: '#041A17' }}>
          {b.cover
            ? <img src={b.cover} alt="" width={800} height={450} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            : <div className="absolute inset-0 flex items-center justify-center dots" style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,90,54,0.4), #041A17 70%)' }}>
                <img src="/brand/mark-white-md.webp" alt="" width={768} height={413} loading="lazy" style={{ width: '55%', height: 'auto', opacity: 0.85 }} />
              </div>}
          {b.topic && <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase" style={{ letterSpacing: '0.12em', backgroundColor: '#FF5A36', color: '#fff' }}>{b.topic}</span>}
        </div>
        <div className={`p-5 sm:p-6 ${featured ? 'lg:p-10 flex flex-col justify-center' : ''}`}>
          <p className="m-0 text-xs font-semibold flex items-center gap-2" style={{ color: '#64736F' }}>
            {fmtDate(b.published_at)} <span>·</span> <Clock size={11} aria-hidden /> {Math.max(1, Math.round(((b.excerpt || '').length + 800) / 500))} min read
          </p>
          <h3 className="font-display m-0 mt-2 transition-colors group-hover:text-[#FF5A36]" style={{ fontSize: featured ? 'clamp(22px, 2.6vw, 34px)' : 19, fontWeight: 900, color: '#041A17', lineHeight: 1.15 }}>{b.title}</h3>
          <p className="m-0 mt-2 text-sm" style={{ color: '#5C6B67', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: featured ? 3 : 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{b.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold" style={{ color: '#FF5A36' }}>Read article <ArrowRight size={14} aria-hidden /></span>
        </div>
      </Link>
    </div>
  );
}

export default function BlogFeed() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, parseInt(params.get('page') || '1'));
  const topic = params.get('topic') || '';
  const [d, setD] = useState<ListResp | null>(null);
  useEffect(() => {
    get<ListResp>(`/eapi/blogs?page=${page}&per=10${topic ? `&topic=${encodeURIComponent(topic)}` : ''}`).then(setD).catch(() => setD({ items: [], total: 0, page: 1, pages: 1, topics: [] }));
  }, [page, topic]);

  const featured = page === 1 && !topic && d?.items.length ? d.items[0] : null;
  const rest = featured ? d!.items.slice(1) : d?.items || [];
  const pill = (active: boolean) => ({ backgroundColor: active ? '#041A17' : '#fff', color: active ? '#fff' : '#041A17', border: '1px solid #E1E8E5', minHeight: 44 });

  return (
    <div>
      {!!d?.topics.length && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setParams({})} className="rounded-full px-4 text-[13px] font-semibold cursor-pointer" style={pill(!topic)}>All</button>
          {d.topics.map((t) => (
            <button key={t} onClick={() => setParams({ topic: t })} className="rounded-full px-4 text-[13px] font-semibold cursor-pointer" style={pill(topic === t)}>{t}</button>
          ))}
        </div>
      )}
      {!d && <p className="m-0" style={{ color: '#5C6B67' }}>Loading articles…</p>}
      {d && !d.items.length && (
        <div className="text-center py-16">
          <img src="/brand/mark-sm.png" alt="" width={120} height={65} style={{ width: 120, height: 'auto', opacity: 0.3, margin: '0 auto' }} />
          <p className="font-display mt-6 m-0" style={{ fontSize: 22, fontWeight: 900, color: '#041A17' }}>First articles are on their way.</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured && <Card b={featured} featured />}
        {rest.map((b) => <Card key={b.id} b={b} />)}
      </div>
      {d && d.pages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button disabled={page <= 1} aria-label="Previous page" onClick={() => setParams(topic ? { topic, page: String(page - 1) } : { page: String(page - 1) })}
            className="rounded-full flex items-center justify-center cursor-pointer disabled:opacity-30" style={{ width: 44, height: 44, border: '1.5px solid #041A17', background: 'transparent', color: '#041A17' }}><ArrowLeft size={17} aria-hidden /></button>
          <span className="text-sm font-semibold" style={{ color: '#5C6B67' }}>Page {d.page} of {d.pages}</span>
          <button disabled={page >= d.pages} aria-label="Next page" onClick={() => setParams(topic ? { topic, page: String(page + 1) } : { page: String(page + 1) })}
            className="rounded-full flex items-center justify-center cursor-pointer disabled:opacity-30" style={{ width: 44, height: 44, border: '1.5px solid #041A17', background: 'transparent', color: '#041A17' }}><ArrowRight size={17} aria-hidden /></button>
        </div>
      )}
    </div>
  );
}
