import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/apollo/',
  title: 'Apollo Integration — AI Prospecting and Enrichment',
  eyebrow: 'Integrations · Data',
  metaTitle: 'Apollo Integration — AI Prospecting and Contact Enrichment for Lead Generation | Eligoo',
  metaDescription: 'Connect your Apollo API key and Radar searches for accounts and contacts that match your ICP, de-duplicates them into the CRM and enriches the ones worth pursuing. Search is free of Apollo credits; enrichment uses them.',
  primaryKeyword: 'Apollo integration AI lead generation',
  secondaryKeywords: ['AI prospecting with Apollo', 'Apollo people search AI agent', 'Apollo enrichment automation', 'AI SDR Apollo', 'bring your own Apollo key'],
  answer: 'The Apollo integration gives Radar — the AI prospect intelligence agent — a source of accounts and contacts. With your Apollo API key connected, Radar runs people searches against your ideal customer profile, de-duplicates the results into the Eligoo CRM, and, where you allow it, enriches contacts with verified emails, phone numbers and firmographics. Search does not consume Apollo credits; enrichment does.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Apollo?',
      paragraphs: [
        'Every outbound programme starts with a list, and building a good one is slow, repetitive work. Radar does it with Apollo as the primary data source: it turns the ideal customer profile Maven defined — industries, company sizes, geographies, titles — into Apollo people searches, pulls the matching accounts and contacts, and checks each against the CRM and your suppression lists before adding anything.',
        'Search and enrichment are deliberately separate steps. Apollo’s people search returns names, titles, companies and public details without spending Apollo credits, which lets Radar cast a wide net and score fit, intent and urgency before you spend anything. Enrichment — revealing a verified email or a direct phone number — uses your Apollo credits, so Radar only enriches contacts that pass the score threshold you set, and reports how many credits a batch will use before it runs.',
        'Radar never contacts anyone. Its output is a scored, segmented, de-duplicated list with a rationale per contact, which Hook uses once you approve the sequence enrolment.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create an API key in Apollo', text: 'Generate a key in your Apollo account. The plan you are on determines the search limits and credit balance available.' },
        { title: 'Add Apollo in workspace settings', text: 'Paste the key under data providers. Eligoo verifies it with a test request, stores it server-side and shows it masked.' },
        { title: 'Define the ICP', text: 'Maven and Radar turn your target description into search criteria. You can review and edit them before any search runs.' },
        { title: 'Radar searches and de-duplicates', text: 'People searches run without Apollo credits. Results are matched against the CRM by company and contact, suppression lists are applied, and new records are created with a fit score and source.' },
        { title: 'Enrich the shortlist', text: 'Contacts above the threshold are enriched through Apollo — email, phone, firmographics — using your Apollo credits. Radar verifies and segments the result, ready for Hook.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Apollo',
      items: [
        'Sent to Apollo: search criteria derived from your ICP (industries, titles, locations, company sizes, keywords) and, for enrichment, the identifiers of the specific contacts or companies to enrich.',
        'Received from Apollo: matching people and organisation records from search, and enriched fields — verified email, phone numbers, firmographics — for the contacts you chose to enrich.',
        'Stored in your workspace: the resulting CRM records, with Apollo recorded as the source and the enrichment date, so Ledger’s audit trail shows where each field came from.',
        'Not sent: your existing CRM records, call transcripts, email content or other integrations’ keys. Apollo does not receive a copy of your database.',
        'Your API key stays server-side in your workspace and is never returned to the browser. Searches and enrichment run under your Apollo account, so Apollo’s data licence and terms apply to the records you receive.',
      ],
    },
    employees(['radar', 'hook', 'ledger', 'maven'], 'Which AI employees use it', undefined, {
      radar: 'Runs searches, de-duplicates, scores, enriches and segments. The only employee that calls Apollo.',
      hook: 'Uses the verified list for approved sequences and calls; does not access Apollo directly.',
      ledger: 'Keeps the CRM records clean and records enrichment as part of the audit trail.',
      maven: 'Defines the ICP that becomes the search criteria.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'ICP list building', text: 'A scored, de-duplicated list of accounts and contacts that match your profile, refreshed as the ICP changes.', icon: 'target' },
        { title: 'Selective enrichment', text: 'Credits spent only on the contacts worth pursuing, with the cost estimated first.', icon: 'key' },
        { title: 'Territory and segment lists', text: 'Separate lists per region, industry or product line, each with its own rationale.', icon: 'layers' },
        { title: 'Feeding outbound', text: 'Lists that go straight into Hook’s approved email sequences and calling campaigns.', icon: 'workflow' },
      ],
    },
    pricingPointer('Radar'),
    faq([
      { q: 'Does AI prospecting with Apollo use my Apollo credits?', a: 'People search does not. Enrichment — revealing emails, phone numbers and firmographics — does, and Radar tells you the estimated credit use before a batch runs.' },
      { q: 'Do I need my own Apollo account?', a: 'Yes. Eligoo uses your Apollo API key and your plan’s limits. It does not resell Apollo data.' },
      { q: 'Will Radar email or call the contacts it finds?', a: 'No. Radar only researches, scores and lists. Hook contacts people, and only after you approve the sequence enrolment or calling campaign.' },
      { q: 'How does Radar avoid duplicates?', a: 'Every search result is matched against existing CRM companies and contacts before a record is created, and suppression lists are applied on the same pass.' },
      { q: 'Can I use Eligoo for lead generation without Apollo?', a: 'Radar can research with web search and work from lists you import, but Apollo is the main source for net-new contacts. Connect it for the full lead engine.' },
    ]),
    related([
      LINKS.leadGen, LINKS.radar, LINKS.hook, LINKS.ucLeadGen, LINKS.outbound,
      { label: 'Lead generation workflow template', href: '/resources/templates/lead-generation-workflow/' },
      { label: 'Serper integration', href: '/integrations/serper/' }, { label: 'SMTP/IMAP mailbox integration', href: '/integrations/email-mailbox/' },
    ]),
    { kind: 'sources', items: [{ label: 'Apollo API documentation', href: 'https://docs.apollo.io' }] },
    cta('Let Radar build your next list', `Connect Apollo, describe your ideal customer, and review the first scored list. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
