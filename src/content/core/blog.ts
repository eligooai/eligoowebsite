import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/blog/',
  title: 'The Eligoo Blog',
  eyebrow: 'Resources · Blog',
  metaTitle: 'Eligoo Blog — AI Employees, Voice Agents, Outbound and Automation',
  metaDescription: 'Articles and product updates on AI employees, AI workforces, voice agents, AI SDRs, outbound sales and business automation from the Eligoo team.',
  primaryKeyword: 'AI employees blog',
  secondaryKeywords: ['AI workforce articles', 'AI voice agent articles', 'AI SDR articles', 'AI automation articles'],
  answer: 'Articles from the Eligoo team on AI employees, AI workforces, voice agents, AI SDRs, outbound sales and business automation — written answer-first, with definitions up front and no invented numbers.',
  hero: { primary: { label: 'Browse guides', href: '/resources/guides/' }, secondary: { label: 'Glossary', href: '/resources/glossary/' } },
  sections: [
    { kind: 'blogfeed' },
    related([LINKS.guides, LINKS.glossary, LINKS.templates, LINKS.research, LINKS.compare, LINKS.useCases], 'More resources'),
    cta('Put the ideas to work', 'Start a free trial and give Atlas one objective.'),
  ],
  breadcrumb: CRUMBS.resources,
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
