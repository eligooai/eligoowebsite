import type { PageContent } from '../types';
import { LINKS, cta, faq, related, employees, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/',
  title: 'Build Your AI Workforce',
  eyebrow: 'AI workforce platform',
  metaTitle: 'Eligoo — Build Your AI Workforce | AI Employees for Business',
  metaDescription: 'Eligoo is an AI workforce platform. Deploy AI employees that market, sell, call, prospect, create and automate business operations — using your own AI accounts, with human approval built in.',
  primaryKeyword: 'AI workforce',
  secondaryKeywords: ['AI employees', 'AI employee platform', 'AI agents for business', 'AI workforce platform', 'AI business automation', 'AI automation platform', 'AI employees for business', 'digital employees', 'autonomous AI agents'],
  answer: 'Deploy AI employees that market, sell, call, prospect, create and automate business operations — using your own AI accounts. Eligoo gives each employee a role, a KPI and an approval boundary, and Atlas coordinates them around the objectives you set.',
  character: 'atlas',
  hero: { primary: { label: 'Start free trial', href: '/app/sign-up?plan=plan_trial' }, secondary: { label: 'Meet the AI employees', href: '/ai-employees/' } },
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI workforce?',
      paragraphs: [
        'An AI workforce is a set of persistent AI employees, each responsible for a defined function, coordinated around business objectives rather than individual prompts. Instead of one assistant that answers questions, you have a marketing strategist, a content and SEO employee, a creative producer, a prospect researcher, a sales and voice agent, a revenue analyst and a paid-acquisition specialist — with an operations manager who turns your goals into their task queues.',
        'Eligoo is the platform that runs that workforce. Every employee works from the cloud, uses the tools you connect, keeps its work on a shared board, and stops for your approval whenever an action would reach a customer, a prospect, a channel or a budget.',
        `${FACTS.byok} That keeps model spend on your own bills and lets you choose the model each employee thinks with.`,
      ],
    },
    employees(['atlas', 'maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'The eight AI employees', 'Hire one, a team, or the whole workforce. Each has its own page describing what it does, the tools it uses and how it hands work to the others.'),
    {
      kind: 'features',
      heading: 'Solutions',
      intro: 'The workforce is organised around the outcomes businesses actually buy.',
      items: [
        { title: 'Marketing', text: 'Strategy, content, SEO and creative produced on an approved calendar.', icon: 'megaphone' },
        { title: 'Sales and outbound', text: 'Verified prospects, personalised sequences, replies handled, meetings booked.', icon: 'target' },
        { title: 'Voice', text: 'AI phone calls on your own number: outbound campaigns, inbound answering, qualification, booking.', icon: 'phone' },
        { title: 'Lead generation', text: 'Accounts and contacts that fit your ICP, enriched, verified and scored.', icon: 'search' },
        { title: 'Operations', text: 'Goals, tasks, hand-offs and exceptions managed by Atlas with a weekly plan.', icon: 'workflow' },
        { title: 'Revenue intelligence', text: 'Clean CRM data, attribution, funnel metrics and forecasts you can check.', icon: 'chart' },
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo works',
      steps: [
        { title: 'Connect your accounts', text: 'Add the AI provider keys you already pay for, then the tools each role needs: a mailbox, a phone number, social channels, Google Workspace, data sources.' },
        { title: 'Hire the roles you need', text: 'Start with one employee or the whole workforce. Each comes with a defined scope, deliverables, KPI and approval boundary.' },
        { title: 'Give Atlas an objective', text: 'Atlas turns it into an operating plan and assigns tasks to the right employees. You see every task on the board.' },
        { title: 'Approve what reaches the outside world', text: 'Sequences, calling campaigns, publishing outside the calendar and ad spend wait in the approvals queue until you say yes.' },
        { title: 'Read the results', text: 'Ledger reports what happened and what it produced; Atlas adjusts priorities in the next plan.' },
      ],
    },
    { kind: 'pricing', heading: 'Plans', intro: 'Priced per workspace with credits included. Live plans and packs are pulled from the platform, so what you see here is what you get.' },
    faq([
      { q: 'What is Eligoo?', a: 'Eligoo is an AI workforce platform: eight AI employees with defined roles that work from the cloud inside one workspace, coordinated by Atlas and governed by approvals you control.' },
      { q: 'Do I need my own AI account?', a: 'Yes. You connect your OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account. Eligoo uses your keys, so model costs are billed to you by the provider and you can pick the model each employee uses.' },
      { q: 'Can AI employees act without me?', a: 'They research, plan, draft, analyse and prepare work autonomously. Actions that reach the outside world — sending outreach, starting a calling campaign, publishing off-calendar, changing ad spend — wait for your approval.' },
      { q: 'Can I hire just one employee?', a: 'Yes. Plans differ in how many employees are included; you can start with one role and add others later.' },
      { q: 'Which tools does Eligoo connect to?', a: 'Your AI providers, an SMTP/IMAP mailbox, telephony trunks from Twilio, Telnyx, Plivo or Vobiz, Google Workspace, Facebook Pages, Instagram, Threads, LinkedIn, YouTube, Meta Ads, Apollo, Serper and fal.ai. See the integrations directory for what each one does.' },
      { q: 'Is my data separated from other customers?', a: 'Each customer has its own workspace with its own data, connections, credits and settings. The security page explains how keys and data are handled.' },
    ]),
    related([LINKS.aiEmployees, LINKS.aiAgents, LINKS.aiWorkforce, LINKS.aiAutomation, LINKS.voice, LINKS.sales, LINKS.leadGen, LINKS.industries, LINKS.integrations, LINKS.security]),
    cta('Start building your AI workforce', 'Connect your AI account, hire the first role and give Atlas an objective. Every outside-world action waits for your approval.'),
  ],
  breadcrumb: [],
  schema: ['Organization', 'WebSite', 'SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
