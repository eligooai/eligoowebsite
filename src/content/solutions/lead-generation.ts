import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/solutions/lead-generation/',
  title: 'AI Lead Generation',
  eyebrow: 'Solutions · Lead generation',
  metaTitle: 'AI Lead Generation — Find, Enrich, Verify and Qualify Prospects With AI | Eligoo',
  metaDescription: 'Eligoo’s AI lead generation agent, Radar, finds accounts and contacts that fit your ICP, enriches and verifies them, scores fit and hands verified prospects to Hook for outreach and qualification.',
  primaryKeyword: 'AI lead generation',
  secondaryKeywords: ['AI lead generation software', 'AI lead generation platform', 'AI lead generation agent', 'AI prospecting', 'AI prospecting agent', 'AI lead qualification', 'AI lead enrichment', 'automated lead generation'],
  answer: 'AI lead generation uses AI agents to find companies and people that match your ideal customer profile, enrich and verify their details, and qualify them — instead of buying a static list. In Eligoo, Radar does the finding, enrichment, verification and scoring; Hook does the qualifying conversation; nobody is contacted until you approve it.',
  character: 'radar',
  sections: [
    {
      kind: 'prose',
      heading: 'What is AI lead generation?',
      paragraphs: [
        'Lead generation has two halves: finding people who might buy, and finding out whether they will. AI lead generation applies agents to both. On the finding side, an agent searches data sources and the web against your criteria, fills gaps, checks that a contact is real and current, removes duplicates and scores fit. On the qualifying side, an agent asks the questions and records the answers.',
        'Eligoo separates the two on purpose. Radar builds and verifies but never contacts; Hook contacts but only the people you approved. That separation is what lets the research run continuously without the risk of an over-eager agent emailing your whole market.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How AI lead generation works in Eligoo',
      steps: [
        { title: 'Define the ICP', text: 'Industries, geographies, company size, roles, signals that matter, and the suppression list. Material changes to the ICP require approval.' },
        { title: 'Find accounts and contacts', text: 'Radar searches Apollo and the web for companies that fit, then the decision-makers at each.' },
        { title: 'Enrich', text: 'Missing emails, phones, roles and context are filled from Apollo enrichment and web research, with source links kept.' },
        { title: 'Verify and de-duplicate', text: 'Contacts are checked against the CRM and the suppression list; low-confidence records are marked as such.' },
        { title: 'Score and segment', text: 'Each prospect gets a fit score, a rationale and a recommended outreach priority; segments are prepared for Hook.' },
        { title: 'Qualify', text: 'Once you approve outreach, Hook asks the qualification questions by email or on a call and records the answers on the lead.' },
      ],
    },
    {
      kind: 'features',
      heading: 'What the lead generation agent delivers',
      items: [
        { title: 'Verified prospect records', text: 'Name, role, company, email, phone, context and the sources they came from.', icon: 'database' },
        { title: 'Fit score and rationale', text: 'Why this account matches the ICP, in plain language, with the evidence.', icon: 'target' },
        { title: 'Contact confidence', text: 'How sure Radar is that the details are current, so you know what to trust.', icon: 'check' },
        { title: 'Segmented lists', text: 'Prospects grouped for outreach with a recommended priority.', icon: 'layers' },
        { title: 'Disqualification reasons', text: 'Who was excluded and why — already a customer, wrong size, suppressed.', icon: 'shield' },
        { title: 'Qualification records', text: 'Answers to your questions once Hook has the conversation.', icon: 'search' },
      ],
    },
    employees(['radar', 'hook', 'maven', 'ledger'], 'Employees involved', undefined, {
      radar: 'Finds, enriches, verifies, scores.',
      hook: 'Qualifies by email and phone.',
      maven: 'Defines segments and criteria.',
      ledger: 'Keeps the CRM clean and reports conversion.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Apollo for people search (no Apollo credits for search) and enrichment (uses Apollo credits).',
        'Serper for web research on accounts and contacts.',
        'Eligoo’s built-in CRM for leads, statuses and suppression.',
        'Your connected AI provider for fit reasoning and scoring.',
      ],
    },
    pricingPointer('lead generation'),
    faq([
      { q: 'Where does the lead data come from?', a: 'Apollo people search and enrichment, web research through Serper, and your own CRM history. Every record keeps its source links.' },
      { q: 'Does the AI invent contact details?', a: 'No. Radar is not allowed to invent missing information or treat low-confidence records as verified. Gaps stay gaps and are marked.' },
      { q: 'Will it contact the leads it finds?', a: 'Not on its own. Contacting is Hook’s job and only for the enrolments you approve.' },
      { q: 'How is lead qualification done?', a: 'You define the questions and criteria. Hook asks them in the thread or on a call, and the answers are stored on the lead as a qualification record.' },
      { q: 'Can it work from an existing list?', a: 'Yes. Import a list and Radar enriches, verifies, de-duplicates and scores it against the ICP before anything else happens.' },
    ]),
    related([LINKS.radar, LINKS.hook, LINKS.outbound, LINKS.sales, LINKS.voice, LINKS.ucLeadGen, { label: 'Lead generation workflow template', href: '/resources/templates/lead-generation-workflow/' }, { label: 'Apollo integration', href: '/integrations/apollo/' }, LINKS.industries]),
    cta('Turn your ICP into a verified list', 'Define the profile, let Radar build and verify the list, approve who Hook contacts.'),
  ],
  breadcrumb: CRUMBS.solutions,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
