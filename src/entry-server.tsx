// Build-time prerender entry — renders any registry route to static HTML plus its head tags.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { HeadProvider, renderHead, type HeadData } from './lib/head';
import { PAGES, SECTIONS } from './content';
import { primeSections } from './content/loader';
import core from './content/core';
import solutions from './content/solutions';
import employees from './content/employees';
import industries from './content/industries';
import integrations from './content/integrations';
import useCases from './content/use-cases';
import compare from './content/compare';
import resources from './content/resources';
import guides from './content/guides';
import glossary from './content/glossary';
import research from './content/research';
import templates from './content/templates';

// every section is available synchronously to the renderer
primeSections({ core, solutions, employees, industries, integrations, 'use-cases': useCases, compare, resources, guides, glossary, research, templates });

export function render(url: string): { html: string; head: string } {
  let head: HeadData | null = null;
  const html = renderToString(
    <HeadProvider onHead={(d) => { head = d; }}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadProvider>,
  );
  return { html, head: head ? renderHead(head) : '' };
}

/** Every prerendered route with its last-modified date (consumed by the sitemap). */
export function routes(): { path: string; lastmod: string }[] {
  return PAGES.map((p) => ({ path: p.slug, lastmod: p.updated }));
}

/** llms.txt built from the registry so it always lists every section. */
export function llmsTxt(site = 'https://eligoo.in'): string {
  const lines: string[] = [
    '# Eligoo — AI Workforce Platform',
    '',
    '> Eligoo is an AI workforce platform. Businesses hire AI employees — Atlas, Maven, Sage, Pixel, Radar, Hook, Ledger and Boost — that market,',
    '> sell, call, prospect, create and automate business operations using the customer’s own AI provider accounts. Each employee has a defined',
    '> role, KPI and approval boundary; actions that reach the outside world wait for human approval.',
    '',
    `Sitemap: ${site}/sitemap.xml`,
    '',
  ];
  for (const s of SECTIONS) {
    lines.push(`## ${s.label}`, '');
    for (const p of s.pages) lines.push(`- [${p.title}](${site}${p.slug}): ${p.metaDescription}`);
    lines.push('');
  }
  lines.push('## Legal', '', `- [Terms of Service](${site}/p/terms)`, `- [Privacy Policy](${site}/p/privacy)`, `- [Refund Policy](${site}/p/refunds)`, '');
  lines.push('## Contact', '', '- [Book a 30-minute call](https://calendly.com/eligooai/30min): Talk to the Eligoo team.', `- [Start a free trial](${site}/app/sign-up?plan=plan_trial)`, '');
  return lines.join('\n');
}
