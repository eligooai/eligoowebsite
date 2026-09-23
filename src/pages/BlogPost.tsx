import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Check } from 'lucide-react';
import Footer from '../components/Footer';
import { Eyebrow, BOOK_URL, Container } from '../components/ui';
import { Seo } from '../lib/head';
import { fmtDate, readingTime, type BlogCard } from '../lib/api';

type Post = BlogCard & { html: string; more: BlogCard[]; canonical?: string; cover: string };
const SITE = 'https://eligoo.in';

function LeadForm({ sourcePath }: { sourcePath: string }) {
  const [f, setF] = useState({ name: '', email: '', company: '', message: '' });
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setState('busy');
    try {
      const r = await fetch('/eapi/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...f, sourcePath }) });
      if (!r.ok) throw new Error();
      setState('done');
    } catch { setState('error'); }
  };
  if (state === 'done') return (
    <div className="rounded-[22px] p-7 text-center" style={{ backgroundColor: '#041A17' }}>
      <span className="mx-auto w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF5A36' }}><Check size={22} color="#fff" strokeWidth={3} aria-hidden /></span>
      <p className="font-display m-0 mt-4 text-white" style={{ fontSize: 20, fontWeight: 900 }}>Got it — we’ll be in touch.</p>
      <p className="m-0 mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>Your message reached the team. Expect a reply within one business day.</p>
    </div>
  );
  return (
    <form onSubmit={submit} className="rounded-[22px] p-6" style={{ backgroundColor: '#041A17' }}>
      <p className="eyebrow m-0" style={{ color: '#FF7A5C' }}>Talk to Eligoo</p>
      <p className="font-display m-0 mt-2 text-white" style={{ fontSize: 21, fontWeight: 900, lineHeight: 1.2 }}>Want an AI team like this working for you?</p>
      {(['name', 'email', 'company'] as const).map((k) => (
        <input key={k} required={k === 'email'} type={k === 'email' ? 'email' : 'text'} aria-label={k}
          placeholder={k === 'name' ? 'Your name' : k === 'email' ? 'Work email *' : 'Company'}
          value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })}
          className="w-full mt-3 rounded-xl px-4 text-sm outline-none box-border"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', minHeight: 46 }} />
      ))}
      <textarea placeholder="What do you want to automate?" aria-label="Message" rows={3} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })}
        className="w-full mt-3 rounded-xl px-4 py-3 text-sm outline-none box-border"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', resize: 'vertical' }} />
      <button type="submit" disabled={state === 'busy'} className="w-full mt-4 rounded-full text-sm font-bold cursor-pointer border-0" style={{ backgroundColor: '#FF5A36', color: '#041A17', minHeight: 48 }}>
        {state === 'busy' ? 'Sending…' : 'Get in touch'}
      </button>
      {state === 'error' && <p className="m-0 mt-2 text-xs" style={{ color: '#FF9A7E' }}>Something went wrong — try again.</p>}
      <p className="m-0 mt-3 text-[11px] text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>Or book directly: <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#FF7A5C' }}>30-min call</a></p>
    </form>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const nav = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    setPost(null); setMissing(false);
    fetch(`/eapi/blogs/${slug}`)
      .then(async (r) => {
        const data = await r.json();
        if (r.ok) setPost(data);
        else if (data.redirectTo) nav(`/resources/blog/${data.redirectTo}/`, { replace: true });
        else setMissing(true);
      })
      .catch(() => setMissing(true));
  }, [slug, nav]);

  if (missing) return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: '#F3F6F4' }}>
      <Seo title="Post not found — Eligoo" description="This article does not exist." canonical={`${SITE}/resources/blog/`} />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
        <img src="/brand/mark-sm.png" alt="" width={130} height={70} style={{ width: 130, height: 'auto', opacity: 0.35 }} />
        <h1 className="font-display mt-6 m-0" style={{ fontSize: 30, fontWeight: 900, color: '#041A17' }}>Post not found</h1>
        <Link to="/resources/blog/" className="mt-5 inline-flex items-center gap-2 no-underline rounded-full px-6 text-sm font-bold" style={{ backgroundColor: '#041A17', color: '#fff', minHeight: 48 }}><ArrowLeft size={15} aria-hidden /> Back to blog</Link>
      </div>
      <Footer />
    </main>
  );
  if (!post) return <main className="min-h-screen" style={{ backgroundColor: '#F3F6F4' }} />;

  const canonical = post.canonical || `${SITE}/resources/blog/${post.slug}/`;
  const img = post.cover ? (post.cover.startsWith('http') ? post.cover : SITE + post.cover) : undefined;
  return (
    <main style={{ backgroundColor: '#F3F6F4' }}>
      <Seo
        title={`${post.seo_title || post.title} — Eligoo Blog`}
        description={post.seo_desc || post.excerpt}
        canonical={canonical}
        ogType="article"
        ogImage={img}
        jsonld={[
          { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: post.published_at, image: img, author: { '@type': 'Organization', name: 'Eligoo' }, publisher: { '@type': 'Organization', name: 'Eligoo' }, mainEntityOfPage: canonical },
          { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE}/resources/` },
            { '@type': 'ListItem', position: 3, name: 'Blog', item: `${SITE}/resources/blog/` },
            { '@type': 'ListItem', position: 4, name: post.title, item: canonical },
          ] },
        ]}
      />
      <section className="relative overflow-hidden" style={{ backgroundColor: '#041A17', paddingTop: 100, paddingBottom: 56 }}>
        <div className="absolute inset-0 dots opacity-40 pointer-events-none" aria-hidden />
        <Container className="relative" max={1140}>
          <Link to="/resources/blog/" className="inline-flex items-center gap-2 text-[13px] font-semibold no-underline py-2" style={{ color: 'rgba(255,255,255,0.65)' }}><ArrowLeft size={14} aria-hidden /> All articles</Link>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            {post.topic && <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase" style={{ letterSpacing: '0.12em', backgroundColor: '#FF5A36', color: '#fff' }}>{post.topic}</span>}
            <span className="text-xs font-semibold flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {fmtDate(post.published_at)} · <Clock size={11} aria-hidden /> {readingTime(post.html)} min read
            </span>
          </div>
          <h1 className="font-display m-0 mt-4 text-white" style={{ fontSize: 'clamp(30px, 4.6vw, 56px)', lineHeight: 1.05, fontWeight: 900, maxWidth: 860 }}>{post.title}</h1>
        </Container>
      </section>

      <section className="pb-16">
        <Container max={1140}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <article className="lg:col-span-2 min-w-0">
              {post.cover && (
                <img src={post.cover} alt="" width={1200} height={630} className="w-full h-auto rounded-[24px] mt-6 mb-8" style={{ maxHeight: 440, objectFit: 'cover', border: '1px solid #E1E8E5' }} />
              )}
              <div className={`bg-white rounded-[24px] px-5 sm:px-10 py-8 sm:py-10 ${post.cover ? '' : 'mt-6'}`} style={{ border: '1px solid #E1E8E5' }}>
                <div className="prose-eligoo" dangerouslySetInnerHTML={{ __html: post.html }} />
                {post.tags && (
                  <div className="mt-8 pt-6 flex flex-wrap gap-2" style={{ borderTop: '1px solid #E1E8E5' }}>
                    {post.tags.split(',').map((t) => t.trim()).filter(Boolean).map((t) => (
                      <span key={t} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#F3F6F4', color: '#5C6B67' }}>#{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
            <aside className="lg:sticky lg:top-24 mt-6 flex flex-col gap-5">
              <LeadForm sourcePath={`/resources/blog/${post.slug}/`} />
              {post.more.length > 0 && (
                <div className="bg-white rounded-[22px] p-6" style={{ border: '1px solid #E1E8E5' }}>
                  <Eyebrow>Keep reading</Eyebrow>
                  <div className="mt-4 flex flex-col gap-4">
                    {post.more.map((m) => (
                      <Link key={m.id} to={`/resources/blog/${m.slug}/`} className="group no-underline">
                        <p className="font-display m-0 group-hover:text-[#FF5A36] transition-colors" style={{ fontSize: 15, fontWeight: 800, color: '#041A17', lineHeight: 1.3 }}>{m.title}</p>
                        <p className="m-0 mt-1 text-xs" style={{ color: '#64736F' }}>{fmtDate(m.published_at)}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
