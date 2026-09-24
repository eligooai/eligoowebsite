/**
 * Client-side content loading. Every page is prerendered, so the browser only needs the
 * content of the section it is on (to hydrate) plus whatever it navigates to. Sections are
 * separate chunks; the SSR entry primes the cache synchronously from the static registry.
 */
import type { PageContent } from './types';

type SectionName =
  | 'core' | 'solutions' | 'employees' | 'industries' | 'integrations' | 'use-cases' | 'compare'
  | 'resources' | 'guides' | 'glossary' | 'research' | 'templates';

const LOADERS: Record<SectionName, () => Promise<{ default: PageContent[] }>> = {
  core: () => import('./core'),
  solutions: () => import('./solutions'),
  employees: () => import('./employees'),
  industries: () => import('./industries'),
  integrations: () => import('./integrations'),
  'use-cases': () => import('./use-cases'),
  compare: () => import('./compare'),
  resources: () => import('./resources'),
  guides: () => import('./guides'),
  glossary: () => import('./glossary'),
  research: () => import('./research'),
  templates: () => import('./templates'),
};

/** Normalise a pathname to its registry key (adds the trailing slash). */
export const normalisePath = (pathname: string) => (pathname === '/' ? '/' : pathname.replace(/\/+$/, '') + '/');

/** Which chunk holds the page for a path. Mirrors the directory layout under src/content. */
export function sectionFor(path: string): SectionName {
  if (path.startsWith('/solutions/')) return 'solutions';
  if (path.startsWith('/ai-employees/') && path !== '/ai-employees/') return 'employees';
  if (path.startsWith('/industries/')) return 'industries';
  if (path.startsWith('/integrations/')) return 'integrations';
  if (path.startsWith('/use-cases/')) return 'use-cases';
  if (path.startsWith('/compare/')) return 'compare';
  if (path.startsWith('/resources/guides/')) return 'guides';
  if (path.startsWith('/resources/glossary/')) return 'glossary';
  if (path.startsWith('/resources/research/')) return 'research';
  if (path.startsWith('/resources/templates/')) return 'templates';
  if (path === '/resources/') return 'resources';
  return 'core';
}

type Tracked = Promise<PageContent[]> & { status?: 'pending' | 'fulfilled' | 'rejected'; value?: PageContent[]; reason?: unknown };
const cache = new Map<SectionName, Tracked>();

/** SSR: make every section available synchronously before rendering. */
export function primeSections(sections: Partial<Record<SectionName, PageContent[]>>) {
  for (const [name, pages] of Object.entries(sections) as [SectionName, PageContent[]][]) {
    const p = Promise.resolve(pages) as Tracked;
    p.status = 'fulfilled'; p.value = pages;
    cache.set(name, p);
  }
}

/** A status-tracked promise for React's use(): resolved sections return synchronously. */
export function sectionPromise(name: SectionName): Promise<PageContent[]> {
  let p = cache.get(name);
  if (!p) {
    p = LOADERS[name]().then((m) => m.default) as Tracked;
    p.status = 'pending';
    p.then((v) => { p!.status = 'fulfilled'; p!.value = v; }, (e) => { p!.status = 'rejected'; p!.reason = e; });
    cache.set(name, p);
  }
  return p;
}

/** Warm the chunk a link points at (hover / touch), so the click renders instantly. */
export function prefetchPath(href: string) {
  try {
    const u = new URL(href, location.origin);
    if (u.origin !== location.origin) return;
    void sectionPromise(sectionFor(normalisePath(u.pathname)));
  } catch { /* not a navigable link */ }
}

/** After hydration and once the browser is idle: pull every section (a few hundred KB in total). */
export function prefetchAll() {
  const run = () => { for (const name of Object.keys(LOADERS) as SectionName[]) void sectionPromise(name); };
  if ('requestIdleCallback' in window) (window as Window & { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void }).requestIdleCallback(run, { timeout: 4000 });
  else setTimeout(run, 2500);
}
