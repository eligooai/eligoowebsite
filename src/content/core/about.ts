import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related, employees } from '../helpers';

const page: PageContent = {
  slug: '/about/',
  title: 'About Eligoo',
  eyebrow: 'Company',
  metaTitle: 'About Eligoo — The AI Workforce Platform',
  metaDescription: 'Eligoo builds AI employees that work from the cloud: role-based AI agents with a KPI and an approval boundary, coordinated by Atlas, running on your own AI accounts.',
  primaryKeyword: 'Eligoo',
  secondaryKeywords: ['AI workforce platform', 'AI employees', 'Work From Cloud'],
  answer: 'Eligoo is an AI workforce platform. We build AI employees — role-based agents with defined inputs, decisions, deliverables, a KPI and an approval boundary — and the workspace that coordinates them around your objectives. Every employee is transparently an AI system, and every action that reaches the outside world waits for a person.',
  hero: { primary: { label: 'Talk to us', href: 'https://calendly.com/eligooai/30min' }, secondary: { label: 'Meet the AI employees', href: '/ai-employees/' } },
  sections: [
    {
      kind: 'prose',
      heading: 'What we believe',
      paragraphs: [
        'Software seats are the wrong unit for AI. A business does not want a prompt box; it wants a marketing strategist, a prospect researcher, a sales agent that calls, a revenue analyst — each with a job, a measure and limits. So we package AI agents as employees and describe them the way a role is described.',
        'Autonomy should be earned per action, not granted per tool. Research, drafting and analysis can run freely. Anything that sends, calls, publishes or spends should wait for a person until you decide otherwise. That is why approvals are the centre of the platform rather than a setting.',
        'Your AI accounts should stay yours. Eligoo runs on the OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account you already have, so model choice and model spend are under your control.',
      ],
    },
    employees(['atlas', 'maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'The team we build', 'Eight roles, one workspace, coordinated by Atlas.'),
    {
      kind: 'prose',
      heading: 'How we work with customers',
      paragraphs: [
        'Customers hire one employee, a team or the whole workforce, connect the tools each role needs and give Atlas objectives. We publish what the employees can and cannot do rather than what we hope they will do one day, and we keep the comparison and glossary pages honest about where humans are the better choice.',
        'We do not publish customer case studies or statistics we cannot stand behind. If you want to hear how the workforce is used in a business like yours, talk to us and we will walk through it.',
      ],
    },
    faq([
      { q: 'What does Eligoo sell?', a: 'A workspace with AI employees — Atlas, Maven, Sage, Pixel, Radar, Hook, Ledger and Boost — sold as a per-workspace platform subscription and running on your own AI provider key, with model usage billed by the provider directly.' },
      { q: 'Are the employees really AI?', a: 'Yes, every one of them, and we say so. They are AI agents with role definitions, tools and approval boundaries; there are no people pretending to be the employees.' },
      { q: 'Where can I read about security?', a: 'The security page describes key handling, workspace isolation, approvals, encryption, backups and deletion.' },
      { q: 'How do I get in touch?', a: 'Book a 30-minute call from any page, or start a free trial and message the team from your workspace.' },
    ]),
    related([LINKS.aiWorkforce, LINKS.aiEmployees, LINKS.security, LINKS.pricing, LINKS.research, LINKS.blog]),
    cta('Talk to the Eligoo team', 'A 30-minute call to see whether an AI workforce fits your business — and which roles to start with.', { label: 'Start free trial', href: '/app/sign-up?plan=plan_trial' }),
  ],
  breadcrumb: [HOME],
  schema: ['Organization', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
