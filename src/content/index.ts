/**
 * Page registry. Routes, the prerender list, sitemap and llms.txt are generated from PAGES.
 * Add a page by creating src/content/<section>/<slug>.ts and listing it in that section's index.ts.
 */
import type { PageContent } from './types';
import core from './core';
import solutions from './solutions';
import employees from './employees';
import industries from './industries';
import integrations from './integrations';
import useCases from './use-cases';
import compare from './compare';
import resources from './resources';
import guides from './guides';
import glossary from './glossary';
import research from './research';
import templates from './templates';

export const PAGES: PageContent[] = [
  ...core, ...solutions, ...employees, ...industries, ...integrations, ...useCases, ...compare,
  ...resources, ...guides, ...glossary, ...research, ...templates,
];

const seen = new Set<string>();
for (const p of PAGES) {
  if (seen.has(p.slug)) throw new Error(`duplicate page slug ${p.slug}`);
  if (p.slug !== '/' && !p.slug.endsWith('/')) throw new Error(`page slug must end with / : ${p.slug}`);
  seen.add(p.slug);
}

export const PAGE_BY_PATH: Map<string, PageContent> = new Map(PAGES.map((p) => [p.slug, p]));

/** Section-grouped listing used by llms.txt. */
export const SECTIONS: { label: string; pages: PageContent[] }[] = [
  { label: 'Core', pages: core },
  { label: 'Solutions', pages: solutions },
  { label: 'AI employees', pages: employees },
  { label: 'Industries', pages: industries },
  { label: 'Integrations', pages: integrations },
  { label: 'Use cases', pages: useCases },
  { label: 'Comparisons', pages: compare },
  { label: 'Resources', pages: resources },
  { label: 'Guides', pages: guides },
  { label: 'Glossary', pages: glossary },
  { label: 'Research', pages: research },
  { label: 'Workflow templates', pages: templates },
];
