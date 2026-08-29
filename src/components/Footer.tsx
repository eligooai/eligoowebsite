import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Mark, BOOK_URL } from './ui';
import { get } from '../lib/api';

const NAV_LINKS = [
  { label: 'AI Employees', href: '/#team' }, { label: 'How It Works', href: '/#how' },
  { label: 'Atlas', href: '/#atlas' }, { label: 'WFC', href: '/#wfc' },
  { label: 'Plans', href: '/#plans' }, { label: 'Blog', href: '/blog' },
];
const PATHS: Record<string, string> = {
  linkedin: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z',
  x: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z',
  instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
  youtube: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z',
  facebook: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z',
};
const SocialIcon = ({ name }: { name: string }) =>
  PATHS[name] ? <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d={PATHS[name]} /></svg> : null;

export default function Footer() {
  const [pages, setPages] = useState<{ title: string; slug: string }[]>([]);
  const [social, setSocial] = useState<Record<string, string>>({});
  useEffect(() => {
    get<{ title: string; slug: string }[]>('/eapi/pages').then(setPages).catch(() => {});
    get<Record<string, string>>('/eapi/social').then(setSocial).catch(() => {});
  }, []);
  const socials = Object.entries(social).filter(([, url]) => url);

  return (
    <footer className="relative" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#03140F' }}>
      <div className="mx-auto px-5 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-12 gap-8" style={{ maxWidth: 1100 }}>
        <div className="md:col-span-5">
          <img src="/brand/logo-white.svg" alt="Eligoo" style={{ height: 34 }} />
          <p className="m-0 mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 360 }}>
            AI Employees. Work From Cloud. Role-based AI systems configured around your business — transparently AI, resourced like a team.
          </p>
          <div className="mt-5 flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <Mark size={34} variant="white" style={{ opacity: 0.6 }} />
            <span className="eyebrow">WFC · Work From Cloud</span>
          </div>
          {socials.length > 0 && (
            <div className="mt-5 flex items-center gap-2">
              {socials.map(([k, url]) => (
                <a key={k} href={url} target="_blank" rel="noopener noreferrer" aria-label={k}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF5A36'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                  <SocialIcon name={k} />
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow m-0" style={{ color: 'rgba(255,255,255,0.4)' }}>Eligoo</p>
          <ul className="m-0 mt-4 p-0 grid grid-cols-2 gap-x-6 gap-y-2.5" style={{ listStyle: 'none' }}>
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                {l.href.startsWith('/#')
                  ? <a href={l.href} className="text-sm no-underline" style={{ color: 'rgba(255,255,255,0.75)' }}>{l.label}</a>
                  : <Link to={l.href} className="text-sm no-underline" style={{ color: 'rgba(255,255,255,0.75)' }}>{l.label}</Link>}
              </li>
            ))}
          </ul>
          {pages.length > 0 && (
            <>
              <p className="eyebrow m-0 mt-6" style={{ color: 'rgba(255,255,255,0.4)' }}>Legal</p>
              <ul className="m-0 mt-3 p-0 flex flex-col gap-2" style={{ listStyle: 'none' }}>
                {pages.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/p/${p.slug}`} className="text-sm no-underline" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="md:col-span-3 flex flex-col items-start md:items-end">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 no-underline rounded-full px-5 py-3 text-sm font-semibold" style={{ backgroundColor: '#FF5A36', color: '#fff' }}>
            Build Your AI Team <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </div>
      </div>
      <div className="mx-auto px-5 sm:px-10 pb-8 flex flex-col sm:flex-row justify-between gap-2 text-xs" style={{ maxWidth: 1100, color: 'rgba(255,255,255,0.35)' }}>
        <span>© {new Date().getFullYear()} Eligoo. All rights reserved.</span>
        <span>Every Eligoo employee is an AI system — transparently.</span>
      </div>
    </footer>
  );
}
