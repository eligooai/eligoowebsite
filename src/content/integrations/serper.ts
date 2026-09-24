import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/serper/',
  title: 'Serper Integration — Web Research for AI Employees',
  eyebrow: 'Integrations · Data',
  metaTitle: 'Serper Integration — Google Search for AI Employee Research | Eligoo',
  metaDescription: 'Connect a Serper.dev API key and give Maven, Sage, Radar and Boost live Google search results for market research, SEO research, prospect research and competitor checks. Billed by Serper to you.',
  primaryKeyword: 'Serper integration AI research',
  secondaryKeywords: ['AI agent web search API', 'Google search API for AI employees', 'AI market research with web search', 'AI SEO keyword research tool', 'Serper.dev AI agents'],
  answer: 'The Serper integration gives Eligoo’s research-heavy employees access to Google search results through the Serper.dev API. With your key connected, Maven researches markets and competitors, Sage researches keywords and topics, Radar researches accounts before scoring them, and Boost checks competitor advertising — all from live search results rather than the model’s memory. Serper bills you per search on your own account.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Serper?',
      paragraphs: [
        'A language model on its own knows what it was trained on. For the work Eligoo’s employees do — positioning against competitors that exist today, keyword research, checking whether a prospect has just opened a new plant — that is not enough. Serper turns a Google search into an API call, and Eligoo uses it as the web-search tool behind several employees.',
        'Each employee uses it differently. Maven runs searches to build market research, competitor profiles and hypothesis backlogs, and cites the pages it used. Sage searches for keyword landscapes, existing content on a topic and sources for articles. Radar searches for company news, leadership changes and signals that raise or lower a prospect’s urgency score. Boost looks at competitor messaging and offers when preparing a campaign plan.',
        'Search results are inputs, not outputs. What you receive is the employee’s deliverable — a research document, a brief, a scored record — with links back to the sources it relied on.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a key at Serper.dev', text: 'Sign up at Serper.dev and generate an API key. Serper prices per search and includes a starting allowance.' },
        { title: 'Add Serper in workspace settings', text: 'Paste the key under data providers. Eligoo verifies it with a test search, stores it server-side and shows it masked.' },
        { title: 'Employees search as part of tasks', text: 'When a task calls for research, the employee formulates queries, runs them through Serper, reads the results and continues. Queries are visible in the task’s activity log.' },
        { title: 'Sources are cited', text: 'Research outputs include the URLs used, so you can check any claim the employee made.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Serper',
      items: [
        'Sent to Serper: the search queries an employee formulates — for example a competitor name, a keyword phrase, or a prospect company plus a topic — and optional parameters such as country and language.',
        'Received from Serper: the search results — titles, URLs, snippets and related fields. Eligoo may then fetch the pages the employee needs to read.',
        'Not sent: your CRM records, documents, conversation history or other integrations’ keys. Serper sees the query, not the context that produced it. Be aware that a query can itself name a prospect or a competitor.',
        'Your API key stays server-side in your workspace and is never returned to the browser. Searches run under your own Serper account, so Serper’s terms apply.',
      ],
    },
    employees(['maven', 'sage', 'radar', 'boost'], 'Which AI employees use it', undefined, {
      maven: 'Market research, competitor profiles, positioning inputs and the hypothesis backlog.',
      sage: 'Keyword research, topic research and sources for content.',
      radar: 'Account research and intent signals before scoring.',
      boost: 'Competitor advertising and offer research for campaign plans.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Market and competitor research', text: 'Maven produces research documents with cited sources instead of a summary from memory.', icon: 'search' },
        { title: 'SEO keyword research', text: 'Sage maps the keyword landscape and what already ranks before writing a brief.', icon: 'globe' },
        { title: 'Prospect intelligence', text: 'Radar attaches recent news and signals to accounts and scores urgency from them.', icon: 'target' },
        { title: 'Campaign preparation', text: 'Boost grounds its audience and offer proposals in what competitors are doing now.', icon: 'megaphone' },
      ],
    },
    pricingPointer('research'),
    faq([
      { q: 'Do AI employees need web search?', a: 'For research tasks, yes — otherwise they rely on training data that may be stale. Serper provides Google results as an API so research is current and cited.' },
      { q: 'Is Serper required?', a: 'Employees work without it, but Maven, Sage, Radar and Boost produce noticeably better research with it connected. It is inexpensive relative to the work it improves.' },
      { q: 'Who pays for searches?', a: 'Serper bills your account per search. Eligoo adds no usage charge; the platform subscription covers the employees’ work.' },
      { q: 'Can I see what the employees searched for?', a: 'Yes. Queries and the sources used appear in the task’s activity log and the research output.' },
      { q: 'Does Serper replace Apollo for prospecting?', a: 'No. Apollo supplies contact and company records; Serper supplies research about them. Radar uses both.' },
    ]),
    related([
      LINKS.marketing, LINKS.maven, LINKS.sage, LINKS.radar,
      { label: 'SEO use case', href: '/use-cases/seo/' }, { label: 'Lead generation use case', href: '/use-cases/lead-generation/' },
      { label: 'Apollo integration', href: '/integrations/apollo/' }, { label: 'OpenAI integration', href: '/integrations/openai/' },
    ]),
    { kind: 'sources', items: [{ label: 'Serper.dev', href: 'https://serper.dev' }] },
    cta('Give your employees the web', `Connect Serper and ask Maven for a competitor brief. ${FACTS.byok}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
