/**
 * Content system for eligoo.in.
 *
 * One file per page under src/content/<section>/<slug>.ts exports a PageContent.
 * src/content/index.ts registers them; routes, the sitemap, llms.txt and the
 * prerender list are all generated from that registry.
 *
 * Every page follows the same order (sections that would be filler are omitted):
 * H1 → direct answer → what / how / what it can do → workflow → features → example →
 * integrations → pricing pointer → comparisons → FAQ → sources → CTA.
 */

export type EmployeeName = 'atlas' | 'maven' | 'sage' | 'pixel' | 'radar' | 'hook' | 'ledger' | 'boost';

export type SchemaType =
  | 'Organization'
  | 'WebSite'
  | 'WebPage'
  | 'SoftwareApplication'
  | 'FAQPage'
  | 'Article'
  | 'DefinedTerm'
  | 'HowTo'
  | 'CollectionPage'
  | 'BreadcrumbList';

export type IconName =
  | 'bot' | 'phone' | 'mail' | 'search' | 'target' | 'shield' | 'workflow' | 'chart' | 'calendar'
  | 'sparkles' | 'users' | 'layers' | 'key' | 'check' | 'zap' | 'globe' | 'megaphone' | 'pen'
  | 'image' | 'database' | 'clock' | 'lock' | 'brain' | 'building';

export interface PageLink { label: string; href: string; }

/** Plain paragraphs under a heading. */
export interface ProseSection { kind: 'prose'; heading: string; paragraphs: string[]; }
/** Bulleted list under a heading. */
export interface ListSection { kind: 'list'; heading: string; intro?: string; items: string[]; }
/** Numbered steps (also used for "How Eligoo works for X"). Rendered as HowTo when the page schema includes HowTo. */
export interface StepsSection { kind: 'steps'; heading: string; intro?: string; steps: { title: string; text: string }[]; }
export interface WorkflowStage { label: string; detail?: string; owner?: EmployeeName; }
/** A chain of stages (e.g. Research → Find prospects → Enrich → …). */
export interface WorkflowSection { kind: 'workflow'; heading: string; intro?: string; stages: WorkflowStage[]; }
/** Feature grid. */
export interface FeaturesSection { kind: 'features'; heading: string; intro?: string; items: { title: string; text: string; icon?: IconName }[]; }
/** Compact linked roster of AI employees; `notes` is an optional per-page one-liner for each. */
export interface EmployeesSection { kind: 'employees'; heading: string; intro?: string; names: EmployeeName[]; notes?: Partial<Record<EmployeeName, string>>; }
/** FAQ; emitted as FAQPage JSON-LD when the page schema includes FAQPage. */
export interface FaqSection { kind: 'faq'; heading?: string; items: { q: string; a: string }[]; }
/** Closing call to action. */
export interface CtaSection { kind: 'cta'; title: string; text: string; primary: PageLink; secondary?: PageLink; }
/** Internal links (the §24 linking strategy). */
export interface RelatedSection { kind: 'related'; heading?: string; links: PageLink[]; }
/** External evidence for claims made on the page. */
export interface SourcesSection { kind: 'sources'; heading?: string; items: PageLink[]; }
/** Comparison table (compare pages). */
export interface TableSection { kind: 'table'; heading: string; intro?: string; columns: string[]; rows: string[][]; }
/** Live plans and packs from the platform (/api/public/plans). */
export interface PricingSection { kind: 'pricing'; heading: string; intro?: string; }
/** Index / directory of child pages. */
export interface DirectorySection { kind: 'directory'; heading?: string; intro?: string; items: { title: string; text: string; href: string; badge?: string }[]; }
/** Client-rendered list of blog posts from the API. */
export interface BlogFeedSection { kind: 'blogfeed'; }
/** A short worked example: the situation, what the employees do, what comes out. */
export interface ExampleSection { kind: 'example'; heading: string; scenario: string; steps: string[]; outcome: string; }

export type Section =
  | ProseSection | ListSection | StepsSection | WorkflowSection | FeaturesSection | EmployeesSection
  | FaqSection | CtaSection | RelatedSection | SourcesSection | TableSection | PricingSection
  | DirectorySection | BlogFeedSection | ExampleSection;

export interface PageContent {
  /** Canonical path, trailing slash on directories: '/', '/solutions/voice/', … */
  slug: string;
  /** The H1. */
  title: string;
  /** Small label above the H1 (defaults to the section name). */
  eyebrow?: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** 2–3 sentence direct answer rendered immediately under the H1. */
  answer: string;
  /** Hero CTAs (default: Start free trial / Talk to us). */
  hero?: { primary?: PageLink; secondary?: PageLink; image?: { src: string; alt: string; width: number; height: number } };
  sections: Section[];
  /** Parent trail, e.g. [{label:'Home',href:'/'},{label:'Solutions',href:'/solutions/'}]; the page itself is appended automatically. */
  breadcrumb: PageLink[];
  schema: SchemaType[];
  /** 3D character shown in the hero (webp below 768px / reduced motion). */
  character?: EmployeeName;
  /** ISO date of the last substantive edit. */
  updated: string;
  /** Glossary pages: the term being defined (DefinedTerm). */
  term?: string;
}
