import type { PageContent, FaqSection, StepsSection } from '../content/types';
import type { HeadData } from './head';
import { byId } from '../data/employees';

export const SITE = 'https://eligoo.in';

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Eligoo',
  url: `${SITE}/`,
  logo: `${SITE}/brand/mark.png`,
  description: 'Eligoo is an AI workforce platform: AI employees that market, sell, call, prospect, create and automate business operations using your own AI accounts.',
};

/** Build the full head (meta + JSON-LD) for a content page. */
export function headFor(page: PageContent): HeadData {
  const canonical = `${SITE}${page.slug}`;
  const crumbs = [...page.breadcrumb, { label: page.title, href: page.slug }];
  const jsonld: object[] = [];

  if (page.schema.includes('Organization')) jsonld.push({ '@context': 'https://schema.org', ...ORG, sameAs: [] });
  if (page.schema.includes('WebSite')) {
    jsonld.push({ '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'Eligoo', publisher: { '@id': `${SITE}/#organization` } });
  }
  if (page.schema.includes('SoftwareApplication')) {
    jsonld.push({
      '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: page.slug === '/' ? 'Eligoo' : page.title,
      applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: canonical, description: page.metaDescription,
      publisher: { '@id': `${SITE}/#organization` }, offers: { '@type': 'Offer', url: `${SITE}/pricing/`, availability: 'https://schema.org/InStock' },
    });
  }
  if (page.schema.includes('Article')) {
    jsonld.push({
      '@context': 'https://schema.org', '@type': 'Article', headline: page.title, description: page.metaDescription, url: canonical,
      dateModified: page.updated, datePublished: page.updated, author: { '@id': `${SITE}/#organization` }, publisher: { '@id': `${SITE}/#organization` },
      mainEntityOfPage: canonical,
    });
  }
  if (page.schema.includes('DefinedTerm') && page.term) {
    jsonld.push({
      '@context': 'https://schema.org', '@type': 'DefinedTerm', name: page.term, description: page.answer, url: canonical,
      inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Eligoo AI Workforce Glossary', url: `${SITE}/resources/glossary/` },
    });
  }
  if (page.schema.includes('HowTo')) {
    const steps = page.sections.find((s): s is StepsSection => s.kind === 'steps');
    if (steps) {
      jsonld.push({
        '@context': 'https://schema.org', '@type': 'HowTo', name: steps.heading || page.title, description: page.answer, url: canonical,
        step: steps.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
      });
    }
  }
  if (page.schema.includes('CollectionPage')) {
    jsonld.push({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: page.title, description: page.metaDescription, url: canonical, isPartOf: { '@id': `${SITE}/#website` } });
  }
  if (page.schema.includes('FAQPage')) {
    const faq = page.sections.find((s): s is FaqSection => s.kind === 'faq');
    if (faq && faq.items.length) {
      jsonld.push({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      });
    }
  }
  // BreadcrumbList everywhere (home included: a single-item trail)
  jsonld.push({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `${SITE}${c.href}` })),
  });

  const ogImage = page.character ? `${SITE}${byId(page.character).image}` : undefined;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    canonical,
    ogType: page.schema.includes('Article') ? 'article' : 'website',
    ogImage,
    jsonld,
  };
}
