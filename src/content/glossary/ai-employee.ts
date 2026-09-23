import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-employee/',
  title: 'What Is an AI Employee?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is an AI Employee? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'An AI employee is an AI agent with a named role, a defined scope of work, its own tools, a KPI and an approval boundary. How AI employees work, what they are made of, examples, benefits and limits.',
  primaryKeyword: 'what is an AI employee',
  secondaryKeywords: ['AI employee definition', 'AI employee meaning', 'AI employee vs AI agent', 'digital employee', 'AI employees for business', 'hire an AI employee'],
  term: 'AI employee',
  answer: 'An AI employee is an AI agent that has been given a named role, a defined scope of work, its own tools, a measurable KPI and an approval boundary, so a business can assign it work the way it would assign work to a member of staff. The technology underneath is the same as any AI agent; what makes it an employee is the packaging into a job.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'An AI employee is defined by a job description rather than a prompt. The description states what the employee takes in (a goal, a list, a brief), what it is allowed to decide, what actions it may take, what it produces, how its work is measured and which actions must wait for a person. Everything the employee does is derived from that description.',
        'Work reaches the employee as tasks — from a person, from a schedule, or from a coordinating employee. The employee plans the task, uses its tools, produces the output and reports completion. Its status at any moment (working, planning, awaiting approval, idle, blocked) is visible to the team, and its activity is logged.',
        'The approval boundary is what separates an employee from a script with a model attached. Drafting an outreach email is inside the boundary; sending it to a thousand people is outside it and waits in a queue until someone approves.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'A role and a name, so the business knows what the employee is for and who to “ask”.',
        'An agent loop: model, instructions, tools and state, as in any AI agent.',
        'A defined input → decide → act → output → KPI → approval boundary.',
        'A task queue or board where its work is assigned and its status is visible.',
        'A KPI that measures the outcome, not the activity — meetings held rather than emails sent.',
        'A chat channel for direct instructions and questions.',
        'An activity log and an approvals queue shared with the rest of the team.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'A marketing strategist employee that researches a market and produces positioning, messaging and a channel plan.',
        'A content and SEO employee that keeps a content calendar and publishes approved posts to social channels.',
        'A prospect intelligence employee that finds, enriches, verifies and scores contacts.',
        'A sales and voice employee that runs approved email sequences and AI phone calls and books meetings.',
        'A revenue intelligence employee that keeps the CRM clean and reports funnel metrics and forecasts.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Clear ownership: a task has an employee responsible for it, not a vague “the AI”.',
        'Predictable scope: the employee does its job and escalates the rest, so a business knows what it is and is not getting.',
        'Measurable output: a KPI per role makes it obvious whether the employee is working.',
        'Composable: employees with different roles can be combined into a workforce.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'An AI employee is only as good as its role definition; a vague scope produces vague work.',
        'It cannot be held accountable — the person who approves its actions is.',
        'It does not build relationships, read a room or negotiate, and should not be given work that depends on those.',
        'It needs connected tools; a role with no access to the relevant systems can only produce documents.',
        'It works from written context. Anything the business knows but has never written down is invisible to it.',
        '“Employee” is a metaphor. The software does not have judgement about the business beyond what it is told.',
      ],
    },
    related([
      LINKS.glAgent, LINKS.glWorkforce, LINKS.glSdr,
      { label: 'What is agentic AI?', href: '/resources/glossary/agentic-ai/' },
      LINKS.aiEmployees, LINKS.cmpEmployeeAgent,
      { label: 'AI employee vs human employee', href: '/compare/ai-employee-vs-human/' },
      { label: 'Guide: what is an AI employee?', href: '/resources/guides/what-is-an-ai-employee/' },
    ], 'Related concepts'),
    faq([
      { q: 'What is the difference between an AI employee and an AI agent?', a: 'An AI agent is the technology: a model with tools in a loop. An AI employee is an agent packaged into a job — a role, a scope, a KPI and an approval boundary. Every AI employee is an agent; not every agent is an employee.' },
      { q: 'Can an AI employee replace a human employee?', a: 'For a defined, repeatable slice of a role — prospect research, first-touch outreach, CRM hygiene — it can do the work. For the parts that need relationships, negotiation or accountability, it cannot, and a sensible deployment keeps a person on those.' },
      { q: 'How do you “hire” an AI employee?', a: 'On a platform like Eligoo you pick the role, connect the tools it needs (a mailbox, a calendar, a contact database, an AI provider account), set its approval boundary and assign it tasks. There is no recruitment; there is configuration.' },
      { q: 'What does an AI employee cost?', a: 'It depends on the platform and the work volume. Eligoo prices per workspace with a credit allowance that employees consume as they work; model calls run on your own AI provider accounts. Current plans are on the pricing page.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'Eligoo is built on this definition. It provides eight AI employees — Atlas, Maven, Sage, Pixel, Radar, Hook, Ledger and Boost — each with a public role, a fixed Input → Decide → Act → Output → KPI → Approval boundary, a status on the team board, a chat channel and an entry in the activity log. A customer can hire one employee, a team or the whole workforce, and every employee works from the same workspace, credits and connections.',
      ],
    },
    cta('Hire your first AI employee', 'Pick a role, connect its tools and assign a task. Start with a free trial and see how the approval boundary works in practice.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
