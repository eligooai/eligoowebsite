import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/seo/',
  title: 'AI SEO Automation',
  eyebrow: 'Use cases · SEO',
  metaTitle: 'AI SEO Automation — Keyword Research, Content Briefs and Optimised Pages with AI Employees | Eligoo',
  metaDescription: 'AI SEO automation with Eligoo: Sage researches keywords, writes content briefs and optimised pages, and reports organic performance; Maven keeps the topics tied to what you sell.',
  primaryKeyword: 'AI SEO automation',
  secondaryKeywords: ['AI SEO agent', 'AI SEO content', 'AI keyword research', 'AI SEO for B2B', 'automated SEO content', 'AI SEO employee'],
  answer: 'AI SEO automation is the use of an AI employee to research what your buyers search for, plan the pages and articles that answer those searches, write them to a brief and report how they perform. In Eligoo that employee is Sage, working within the positioning Maven set, with drafts reviewed by you before they go on your site.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'B2B websites tend to describe the company rather than answer the buyer. The searches that matter — a process, a material, a problem, a comparison — go unanswered, so the site does not appear for them and the enquiries that arrive are poorly matched. An SEO agency will produce a keyword sheet and some articles; the articles usually do not understand the product and the sheet is never turned into pages.',
        'Doing it well needs someone who understands the business and can keep producing specific pages month after month, which is exactly what a busy company does not have.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles SEO',
      steps: [
        { title: 'Maven defines the topics', text: 'From the positioning and the segments: which problems, processes and comparisons your buyers search for, and which of those you can credibly answer.' },
        { title: 'Sage researches keywords', text: 'Keyword research with web search to find the actual terms and questions in each topic, grouped into pages, with a priority order.' },
        { title: 'Sage writes briefs', text: 'A brief per page: the question it answers, the headings, the facts it needs from you, the internal links, the meta title and description.' },
        { title: 'Sage drafts the pages', text: 'Written from the brief and your material — answer first, entities defined, questions answered explicitly — with structured FAQ sections where they help.' },
        { title: 'You publish and Sage reports', text: 'Pages are delivered as drafts for your CMS. The organic performance report shows what is ranking and bringing traffic and what to write next.' },
      ],
    },
    {
      kind: 'features',
      heading: 'Deliverables',
      items: [
        { title: 'Keyword research', text: 'Terms and questions per topic, grouped into pages and prioritised.', icon: 'search' },
        { title: 'Content briefs', text: 'Question, structure, facts needed, links and metadata for each page.', icon: 'pen' },
        { title: 'Optimised pages and articles', text: 'Product, service, industry and comparison pages and articles written to the brief.', icon: 'globe' },
        { title: 'Meta titles and descriptions', text: 'Written for every page in the plan.', icon: 'layers' },
        { title: 'Internal linking plan', text: 'Which pages should link to which, so topics reinforce each other.', icon: 'workflow' },
        { title: 'Organic performance report', text: 'What is working and what to write next, on a regular schedule.', icon: 'chart' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: an industrial coatings supplier',
      scenario: 'A coatings supplier’s site has one page per product and no pages about the problems the products solve.',
      steps: [
        'Maven lists the problem areas the products address — corrosion in specific environments, adhesion on specific substrates, compliance requirements — as topics.',
        'Sage researches the terms and questions for each, groups them into pages and prioritises by relevance to the highest-margin products.',
        'Sage writes a brief per page and asks the technical team for the facts each page needs.',
        'Pages are drafted with an answer-first structure and an FAQ, reviewed by the technical team and published on the company’s site.',
        'The organic report three months later shows which problem pages draw traffic and enquiries, and the next set of briefs follows the same pattern.',
      ],
      outcome: 'The site answers the questions buyers search for, enquiries arrive already matched to the right product, and there is a plan for the next quarter’s pages.',
    },
    employees(['sage', 'maven', 'pixel'], 'AI employees involved', undefined, {
      sage: 'Keyword research, briefs, pages, performance report.',
      maven: 'Topic selection tied to positioning.',
      pixel: 'Images and diagrams for pages when needed.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Serper.dev (Google search API) and web search for keyword and competitor research.',
        'Google Docs and Drive for briefs and drafts.',
        'Any language model from your connected AI provider accounts.',
      ],
    },
    pricingPointer('SEO work'),
    faq([
      { q: 'Can AI do SEO for a B2B company?', a: 'It can do the research, planning and writing, provided it works from real product knowledge. Sage handles keyword research, briefs, drafts and reporting; your team supplies the facts and reviews the drafts.' },
      { q: 'Does Eligoo publish pages to our website?', a: 'No. Pages are delivered as drafts and you publish them in your own CMS. Sage publishes only to the connected social platforms.' },
      { q: 'Does it do technical SEO?', a: 'No. Site speed, crawlability, redirects and structured data are website engineering. Sage covers the content side: research, briefs, pages, metadata and internal linking recommendations.' },
      { q: 'Will AI-written pages rank?', a: 'Pages rank when they answer a real question specifically and accurately. Sage writes answer-first pages from your material; thin or generic pages are avoided by design. No ranking outcome is guaranteed.' },
      { q: 'How does it measure results?', a: 'The organic performance report covers what was published and how it performed, and feeds the next set of briefs. Connect your analytics and search data sources as they become available in your workspace.' },
      { q: 'Can it write in more than one language?', a: 'Sage writes in the languages the assigned model supports well. Review by a native reader is advisable for anything published.' },
    ]),
    related([
      LINKS.marketing, LINKS.sage, LINKS.maven,
      { label: 'Content creation use case', href: '/use-cases/content-creation/' },
      { label: 'Social media use case', href: '/use-cases/social-media/' },
      { label: 'Serper integration', href: '/integrations/serper/' },
      { label: 'AI marketing workflow template', href: '/resources/templates/ai-marketing-workflow/' },
    ]),
    cta('Get the pages your buyers are searching for', 'Approve the topics, answer Sage’s questions and review the first set of drafts.'),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
