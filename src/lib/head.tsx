/**
 * Head management that works at SSR time and on the client.
 *
 * Server: entry-server wraps the app in <HeadProvider collect={…}>; every <Seo> call
 * during render records its data, and the prerender writes the tags into <head>.
 * Client: <Seo> syncs document.head in an effect on every route change.
 */
import { createContext, useContext, useEffect, type ReactNode } from 'react';

export interface HeadData {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  jsonld?: object[];
}

const HeadContext = createContext<((d: HeadData) => void) | null>(null);

/** Server only: receives the head declared by the page rendered inside. */
export function HeadProvider({ onHead, children }: { onHead: (d: HeadData) => void; children: ReactNode }) {
  return <HeadContext.Provider value={onHead}>{children}</HeadContext.Provider>;
}

const esc = (s: string) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Serialise the head tags for a prerendered document. */
export function renderHead(d: HeadData): string {
  const img = d.ogImage || 'https://eligoo.in/employees/atlas.webp';
  const tags = [
    `<title>${esc(d.title)}</title>`,
    `<meta name="description" content="${esc(d.description)}" />`,
    `<link rel="canonical" href="${esc(d.canonical)}" />`,
    `<meta property="og:type" content="${d.ogType || 'website'}" />`,
    `<meta property="og:site_name" content="Eligoo" />`,
    `<meta property="og:title" content="${esc(d.title)}" />`,
    `<meta property="og:description" content="${esc(d.description)}" />`,
    `<meta property="og:url" content="${esc(d.canonical)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(d.title)}" />`,
    `<meta name="twitter:description" content="${esc(d.description)}" />`,
    `<meta name="twitter:image" content="${esc(img)}" />`,
    ...(d.jsonld || []).map((o) => `<script type="application/ld+json" data-seo>${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`),
  ];
  return tags.join('\n');
}

function upsert(selector: string, create: () => HTMLElement, set: (el: HTMLElement) => void) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) { el = create(); document.head.appendChild(el); }
  set(el);
}
const meta = (attr: 'name' | 'property', key: string, content: string) =>
  upsert(`meta[${attr}="${key}"]`, () => { const m = document.createElement('meta'); m.setAttribute(attr, key); return m; }, (el) => el.setAttribute('content', content));

/** Apply head data to the live document (client-side navigation). */
export function applyHead(d: HeadData) {
  const img = d.ogImage || 'https://eligoo.in/employees/atlas.webp';
  document.title = d.title;
  meta('name', 'description', d.description);
  upsert('link[rel="canonical"]', () => { const l = document.createElement('link'); l.setAttribute('rel', 'canonical'); return l; }, (el) => el.setAttribute('href', d.canonical));
  meta('property', 'og:type', d.ogType || 'website');
  meta('property', 'og:site_name', 'Eligoo');
  meta('property', 'og:title', d.title);
  meta('property', 'og:description', d.description);
  meta('property', 'og:url', d.canonical);
  meta('property', 'og:image', img);
  meta('name', 'twitter:card', 'summary_large_image');
  meta('name', 'twitter:title', d.title);
  meta('name', 'twitter:description', d.description);
  meta('name', 'twitter:image', img);
  document.head.querySelectorAll('script[data-seo]').forEach((s) => s.remove());
  for (const o of d.jsonld || []) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-seo', '');
    s.textContent = JSON.stringify(o);
    document.head.appendChild(s);
  }
}

/** Declare the head for the current page. Renders nothing. */
export function Seo(d: HeadData) {
  const onHead = useContext(HeadContext);
  if (onHead) onHead(d); // SSR: recorded during render
  const key = JSON.stringify(d);
  useEffect(() => { applyHead(JSON.parse(key)); }, [key]);
  return null;
}
