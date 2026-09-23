import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/maven/',
  title: 'Maven — AI Marketing Strategist',
  eyebrow: 'AI employee · Strategy',
  metaTitle: 'Maven — AI Marketing Strategist for Positioning, Messaging and Campaign Strategy | Eligoo',
  metaDescription: 'Maven is Eligoo’s AI marketing strategist: it researches your market and competitors, builds positioning and messaging frameworks, writes campaign briefs and channel plans, and hands them to Sage, Pixel and Hook.',
  primaryKeyword: 'AI marketing strategist',
  secondaryKeywords: ['AI marketing agent', 'AI marketing automation', 'AI campaign strategist'],
  answer: 'Maven is Eligoo’s AI marketing strategist. It reads your product, customer research, win/loss data, competitor activity and market signals, and turns them into a positioning framework, a messaging hierarchy, campaign briefs, a channel plan and a backlog of hypotheses to test. It researches and recommends autonomously; changes to positioning, claims, offer, price or public messaging wait for your approval.',
  character: 'maven',
  sections: [
    {
      kind: 'prose',
      heading: 'What Maven does',
      paragraphs: [
        'Maven does the thinking that usually happens in a strategy deck nobody has time to write. It analyses the market, identifies opportunities, decides which segment to prioritise and with what angle, defines the value proposition and the offer structure, and lays out the campaign objective, channel hypothesis and test sequence.',
        'Its outputs are the inputs for the rest of the marketing and sales team: Sage writes to Maven’s messaging hierarchy, Pixel produces to Maven’s brief, Hook’s sequences use Maven’s framework and qualification criteria, and Boost plans paid campaigns from Maven’s brand discovery and growth intelligence work.',
        'Maven is measured on the share of launched campaign hypotheses that meet the success threshold agreed in advance, conversion improvement and the time from strategy to launch.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Maven works',
      steps: [
        { title: 'Gathers inputs', text: 'Product information, customer research, win/loss data, competitor activity, market signals, existing positioning, campaign history and targets.' },
        { title: 'Researches', text: 'Web research through Serper into segments, competitors and signals, summarised with sources.' },
        { title: 'Decides', text: 'Priority segment, positioning angle, value proposition, campaign objective, channel hypothesis, offer structure and test sequence.' },
        { title: 'Delivers', text: 'A market opportunity brief, positioning framework, messaging hierarchy, campaign brief, channel plan and hypothesis backlog.' },
        { title: 'Hands off', text: 'Approved briefs go to Sage, Pixel, Hook and Boost as tasks with the framework attached.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Tools and integrations Maven uses',
      items: [
        'Serper for web research.',
        'Google Workspace for briefs, frameworks and sheets.',
        'The AI model you assign it — strategy work often benefits from a stronger model than classification tasks.',
      ],
    },
    {
      kind: 'features',
      heading: 'Sample deliverables',
      items: [
        { title: 'Market opportunity brief', text: 'Segments, signals, competitors and where the opening is.', icon: 'search' },
        { title: 'Positioning framework', text: 'Who it is for, what it replaces, why it is different, proof.', icon: 'target' },
        { title: 'Messaging hierarchy', text: 'Core message, supporting messages, proof points, by audience.', icon: 'layers' },
        { title: 'Campaign brief', text: 'Objective, audience, offer, channels, hypotheses, success threshold.', icon: 'megaphone' },
        { title: 'Channel plan', text: 'Which channels, in what sequence, with what budget proposal.', icon: 'globe' },
        { title: 'Hypothesis backlog', text: 'What to test next and what result would mean.', icon: 'brain' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'How Maven hands off to teammates',
      stages: [
        { label: 'Atlas', owner: 'atlas', detail: 'Objective and constraints' },
        { label: 'Maven', owner: 'maven', detail: 'Research, positioning, brief' },
        { label: 'Sage', owner: 'sage', detail: 'Content calendar and copy' },
        { label: 'Pixel', owner: 'pixel', detail: 'Creative to the brief' },
        { label: 'Hook', owner: 'hook', detail: 'Sequences using the framework' },
        { label: 'Boost', owner: 'boost', detail: 'Paid plan from the brief' },
      ],
    },
    employees(['sage', 'pixel', 'hook', 'boost', 'atlas'], 'Works with'),
    pricingPointer('Maven'),
    faq([
      { q: 'Does Maven write the content?', a: 'No. Maven sets the strategy and the messaging; Sage writes the content and Pixel produces the creative to Maven’s brief.' },
      { q: 'Can Maven change our positioning?', a: 'It can propose. Company positioning, target market, product claims, offer, price, total campaign budget and public messaging require your approval.' },
      { q: 'Where does Maven’s research come from?', a: 'Web research through Serper plus the product, customer and campaign information in your workspace. Sources are kept with the brief.' },
      { q: 'How is Maven measured?', a: 'By the share of launched hypotheses that meet the pre-agreed success threshold, conversion improvement and strategy-to-launch time — not by the volume of documents produced.' },
    ]),
    related([LINKS.marketing, LINKS.sage, LINKS.pixel, LINKS.boost, { label: 'AI marketing agent vs agency', href: '/compare/ai-marketing-agent-vs-agency/' }, { label: 'AI marketing workflow template', href: '/resources/templates/ai-marketing-workflow/' }, LINKS.industries]),
    cta('Hire Maven', 'Give it your product, your market and a target; get a positioning framework and a campaign brief to approve.'),
  ],
  breadcrumb: CRUMBS.employees,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
