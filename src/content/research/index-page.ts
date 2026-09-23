import type { PageContent } from '../types';
import { CRUMBS, LINKS, faq } from '../helpers';

const page: PageContent = {
  slug: '/resources/research/',
  title: 'Eligoo Research',
  eyebrow: 'Resources · Research',
  metaTitle: 'Eligoo Research: Original Reports on AI Workforces, Voice Agents, AI SDRs and Automation | Eligoo',
  metaDescription: 'Eligoo publishes original research from anonymised, aggregated platform data and controlled experiments. Reports in progress, the questions they will answer, and how to get early access.',
  primaryKeyword: 'AI workforce research',
  secondaryKeywords: ['AI voice agent benchmark', 'AI SDR benchmark', 'AI cold calling benchmark', 'AI sales automation report', 'AI employee adoption report', 'AI agent adoption report'],
  answer: 'Eligoo publishes original research built from anonymised, aggregated data from its own platform and from controlled experiments it runs. Nothing is published until the standards on the methodology page are met — a sample large enough to be meaningful, defined metrics, stated limitations. Until then, the reports below are listed as in progress, with the question each will answer and no findings.',
  sections: [
    {
      kind: 'directory',
      heading: 'Reports in progress',
      intro: 'Each report is listed with the question it is designed to answer. No findings, figures or publication dates are given until a report meets the methodology’s standards.',
      items: [
        { title: 'AI Workforce Report', text: 'How do businesses that run several AI employees divide work between roles, and which functions do they automate first?', href: '/resources/research/methodology/', badge: 'In progress' },
        { title: 'AI Voice Agent Benchmark', text: 'How do speech, model and voice provider choices, and turn-detection settings, affect connect rate, conversation length and outcome on real calls?', href: '/resources/research/methodology/', badge: 'In progress' },
        { title: 'AI Sales Automation Report', text: 'Which parts of the sales process do teams hand to AI agents, what do they keep behind approval, and how does that change over time?', href: '/resources/research/methodology/', badge: 'In progress' },
        { title: 'AI Employee Adoption Report', text: 'Which AI employee roles are hired first, how briefs and approval boundaries evolve, and what predicts a role staying in use?', href: '/resources/research/methodology/', badge: 'In progress' },
        { title: 'AI SDR Benchmark', text: 'How do positive reply rate, qualified-meeting rate and show rate vary with list quality, sequence length and personalisation depth?', href: '/resources/research/methodology/', badge: 'In progress' },
        { title: 'AI Cold Calling Benchmark', text: 'How do calling window, pace, first-message length and disclosure wording affect connect rate and booked-meeting rate on outbound AI calls?', href: '/resources/research/methodology/', badge: 'In progress' },
        { title: 'AI Agent Adoption Report', text: 'Which actions do businesses allow AI agents to take unattended, which do they gate, and how quickly do they loosen the boundary as evidence accumulates?', href: '/resources/research/methodology/', badge: 'In progress' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Why we publish our own data instead of rewriting statistics',
      paragraphs: [
        'Most pages about AI in sales and marketing repeat the same handful of third-party figures, often several steps removed from whoever measured them and with no way to check the definitions. That is not useful to a reader deciding whether to run an AI SDR, and it is not something we want our name on.',
        'Eligoo runs the platform the questions are about. That gives us two sources nobody else has: aggregated, anonymised telemetry from workspaces that opt in, and the ability to run controlled experiments — the same list, two calling windows; the same sequence, two levels of personalisation — and measure the difference. We would rather publish a small number of things we measured, with the definitions and limitations stated, than a long list of things we read.',
        'The rules we hold ourselves to are on the methodology page: what counts as data, how it is anonymised, the minimum sample before anything is published, how each metric is defined, what we will not claim, and how corrections are handled. The reports above will link to it, and every figure in them will be traceable to a definition there.',
      ],
    },
    faq([
      { q: 'When will the reports be published?', a: 'When each report’s sample meets the minimum stated in the methodology and the analysis has been reviewed against it. We do not set publication dates in advance because the sample, not the calendar, decides.' },
      { q: 'Can I get early access?', a: 'Talk to us. We share drafts with customers and researchers who can help check definitions and interpretations before publication, on the understanding that draft figures are not for citation.' },
      { q: 'Is customer data used in the research?', a: 'Only anonymised, aggregated data from workspaces that have opted in. No individual workspace, contact, transcript or record is identifiable in a report, and opting out removes a workspace from future aggregates.' },
      { q: 'Can I propose a question for a report?', a: 'Yes. Questions that can be answered from platform telemetry or a controlled experiment are the ones we can take on; send them through the contact link below.' },
    ]),
    {
      kind: 'related',
      heading: 'Related pages',
      links: [
        { label: 'Research methodology', href: '/resources/research/methodology/' }, LINKS.guides, LINKS.glossary, LINKS.compare, LINKS.about, LINKS.security,
      ],
    },
    {
      kind: 'cta',
      title: 'Ask about early access',
      text: 'If you run outbound, voice or content work on Eligoo and want to see a report before it is published, or want to propose a question, get in touch.',
      primary: { label: 'Talk to us', href: 'https://calendly.com/eligooai/30min' },
      secondary: { label: 'Read the methodology', href: '/resources/research/methodology/' },
    },
  ],
  breadcrumb: CRUMBS.resources,
  schema: ['CollectionPage', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
