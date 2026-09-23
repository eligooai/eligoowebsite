import type { PageContent } from '../types';
import { HOME, cta, employees } from '../helpers';

const page: PageContent = {
  slug: '/solutions/',
  title: 'Solutions',
  eyebrow: 'Solutions',
  metaTitle: 'Eligoo Solutions — AI Marketing, Sales, Voice, Outbound, Lead Generation, Operations, Revenue',
  metaDescription: 'How Eligoo’s AI employees are organised around business outcomes: marketing, sales, voice, outbound, lead generation, customer support, operations and revenue intelligence.',
  primaryKeyword: 'AI solutions for business',
  secondaryKeywords: ['AI marketing automation', 'AI sales agent', 'AI voice agent', 'AI outbound sales', 'AI lead generation', 'AI operations automation', 'AI revenue intelligence'],
  answer: 'Eligoo’s AI employees are organised around the outcomes businesses buy: marketing, sales, voice, outbound, lead generation, customer support, operations and revenue. Each solution page explains what the employees do for that outcome, how the workflow runs and what you need to connect.',
  sections: [
    {
      kind: 'directory',
      heading: 'Solutions by outcome',
      items: [
        { title: 'AI marketing automation', text: 'Strategy, content, SEO, creative and publishing on an approved calendar.', href: '/solutions/marketing/' },
        { title: 'AI sales agent', text: 'Sequences from your mailbox, replies handled, qualification, meetings booked.', href: '/solutions/sales/' },
        { title: 'AI voice agent', text: 'Outbound calling campaigns and inbound answering on your own numbers.', href: '/solutions/voice/' },
        { title: 'AI outbound sales', text: 'Research → find → enrich → personalise → email → call → qualify → book → CRM.', href: '/solutions/outbound/' },
        { title: 'AI lead generation', text: 'Accounts and contacts that fit your ICP, enriched, verified and scored.', href: '/solutions/lead-generation/' },
        { title: 'AI customer support agent', text: 'Inbound calls answered, routine replies handled, everything else escalated.', href: '/solutions/customer-support/' },
        { title: 'AI operations automation', text: 'Objectives into tasks, hand-offs, exceptions and a weekly plan.', href: '/solutions/operations/' },
        { title: 'AI revenue intelligence', text: 'Clean CRM data, attribution, funnel metrics and forecasts with evidence.', href: '/solutions/revenue/' },
      ],
    },
    employees(['atlas', 'maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'The employees behind the solutions', 'Every solution is a combination of roles. Each employee page shows which solutions it serves.'),
    cta('Start with the outcome you need most', 'Pick a solution, hire the roles it uses and give Atlas the objective.'),
  ],
  breadcrumb: [HOME],
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
