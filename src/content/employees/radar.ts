import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/radar/',
  title: 'Radar — AI Prospect Intelligence Agent',
  eyebrow: 'AI employee · Lead Generation',
  metaTitle: 'Radar — AI Prospect Intelligence Agent for Lead Research and Enrichment | Eligoo',
  metaDescription: 'Radar is Eligoo’s AI prospecting employee: it finds accounts and decision-makers that fit your ICP, enriches and verifies their details, removes duplicates, scores fit and hands verified lists to Hook — and never contacts anyone.',
  primaryKeyword: 'AI prospecting agent',
  secondaryKeywords: ['AI lead research', 'AI prospect intelligence', 'AI lead generation agent', 'AI sales intelligence'],
  answer: 'Radar is Eligoo’s AI prospect intelligence employee. Given your ideal customer profile, it finds accounts and the right contacts at each through Apollo and web research, enriches and verifies their details, de-duplicates against your CRM and suppression lists, scores fit, intent, urgency and contact quality, and segments the list for outreach. Radar never contacts prospects and never invents missing data.',
  character: 'radar',
  sections: [
    {
      kind: 'prose',
      heading: 'What Radar does',
      paragraphs: [
        'Radar owns the top of the funnel. Its input is the ICP definition, target industries, geographies, company-size criteria, CRM history, closed-won and closed-lost data, suppression lists and the data sources you authorise. It decides whether an account fits, which contact is relevant, lead priority, data confidence, the disqualification reason and when a record needs human review.',
        'Finding, researching, enriching and verifying are stages of one job. Radar finds accounts, researches decision-makers, enriches records, verifies contact data, removes duplicates, scores prospects on fit, intent, urgency and contact quality, and segments them for Hook. Each record keeps its source links.',
        'The boundary: Radar may not contact prospects, invent missing personal information, use prohibited data sources, bypass suppression lists or treat low-confidence records as verified. New data providers and material ICP changes require approval. It is measured on sales-accepted lead rate, verified-data accuracy, duplicate rate, cost per accepted prospect and the later qualified-opportunity rate.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Radar works',
      steps: [
        { title: 'Reads the ICP', text: 'Industries, geographies, size, roles, signals and who must be excluded.' },
        { title: 'Finds accounts', text: 'Apollo people search and web research through Serper for companies that match, with the reasoning kept.' },
        { title: 'Finds contacts', text: 'Decision-makers and influencers at each account, by role.' },
        { title: 'Enriches and verifies', text: 'Emails, phones, roles and context filled from Apollo enrichment and research; confidence recorded per field.' },
        { title: 'De-duplicates', text: 'Matches against the CRM and the suppression list; existing customers and suppressed contacts are excluded with the reason.' },
        { title: 'Scores and segments', text: 'Fit, intent, urgency and contact quality combined into a priority; segments prepared for Hook.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Tools and integrations Radar uses',
      items: [
        'Apollo for people search (no Apollo credits for search) and enrichment (uses Apollo credits).',
        'Serper for web research on accounts, people and signals.',
        'Eligoo’s built-in CRM for de-duplication, statuses and suppression.',
        'The AI model you assign it for fit reasoning and scoring.',
      ],
    },
    {
      kind: 'features',
      heading: 'Sample deliverables',
      items: [
        { title: 'Verified prospect records', text: 'With source links and per-field confidence.', icon: 'database' },
        { title: 'Fit score and rationale', text: 'Why the account matches, in plain language.', icon: 'target' },
        { title: 'Segmented, prioritised lists', text: 'Ready for an approved sequence or calling campaign.', icon: 'layers' },
        { title: 'Disqualification log', text: 'Who was excluded and why.', icon: 'shield' },
        { title: 'Enrichment of imported lists', text: 'Trade-show badges and old lists cleaned, verified and scored.', icon: 'search' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'How Radar hands off to teammates',
      stages: [
        { label: 'Maven', owner: 'maven', detail: 'Segments and criteria in' },
        { label: 'Radar', owner: 'radar', detail: 'Verified, scored list' },
        { label: 'You', detail: 'Approve enrolment' },
        { label: 'Hook', owner: 'hook', detail: 'Outreach and calls' },
        { label: 'Ledger', owner: 'ledger', detail: 'Accepted-lead and conversion reporting' },
      ],
    },
    employees(['hook', 'maven', 'ledger', 'atlas'], 'Works with'),
    pricingPointer('Radar'),
    faq([
      { q: 'Does Radar email or call prospects?', a: 'Never. Contacting is Hook’s job, and only for enrolments you approve.' },
      { q: 'What if a contact’s details cannot be verified?', a: 'The record is marked low-confidence and is not treated as verified. Radar does not fill gaps with guesses.' },
      { q: 'Where does the data come from?', a: 'Apollo search and enrichment, web research through Serper and your own CRM history. Sources stay attached to the record.' },
      { q: 'Can Radar add a new data source on its own?', a: 'No. New data providers and material ICP changes require your approval.' },
      { q: 'Can it enrich a list I already have?', a: 'Yes. Import it and Radar enriches, verifies, de-duplicates and scores it against the ICP.' },
    ]),
    related([LINKS.leadGen, LINKS.outbound, LINKS.hook, LINKS.sales, LINKS.ucLeadGen, { label: 'Apollo integration', href: '/integrations/apollo/' }, { label: 'Serper integration', href: '/integrations/serper/' }, { label: 'Lead generation workflow template', href: '/resources/templates/lead-generation-workflow/' }, LINKS.industries]),
    cta('Hire Radar', 'Define your ICP and get a verified, scored list — with nobody contacted until you say so.'),
  ],
  breadcrumb: CRUMBS.employees,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
