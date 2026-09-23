import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-automation/',
  title: 'What Is AI Automation?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is AI Automation? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'AI automation is the use of AI models to carry out business tasks that previously needed a person to read, judge or write, combined with rule-based automation for the predictable parts. Definition, components and limits.',
  primaryKeyword: 'what is AI automation',
  secondaryKeywords: ['AI automation definition', 'AI automation meaning', 'AI automation vs RPA', 'AI workflow automation', 'AI business automation', 'intelligent automation'],
  term: 'AI automation',
  answer: 'AI automation is the use of AI models to carry out business tasks that previously needed a person to read, judge or write — classifying an email, drafting a reply, deciding which lead to call next — usually combined with conventional rule-based automation for the predictable parts. It extends automation from fixed rules to work with variation.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'Conventional automation handles work that is the same every time: when a form is submitted, create a record; every Monday, send the report. It fails as soon as a step needs reading, judgement or writing, because rules cannot express “work out what this reply means”. AI automation inserts a model at exactly those steps.',
        'In practice a process is mapped as a sequence of steps, and each step is classified: fixed (a rule), judged (a model) or approved (a person). Rules move data and trigger actions; models read, classify, draft and decide within limits; people approve anything with external consequences. A scheduler runs the sequence, and a log records what each step did.',
        'The more of a process that is judged rather than fixed, the closer AI automation gets to an AI agent — a model choosing its own steps. The two are ends of one spectrum: automation with a model in the loop at one end, an agent with rules as guardrails at the other.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'A process map with each step classified as rule, model or approval.',
        'Triggers: an event (a form, a reply, a status change) or a schedule.',
        'Rule-based steps for moving data between systems.',
        'Model-based steps for reading, classifying, drafting and deciding.',
        'Approval steps where a person confirms before an external action.',
        'Connectors to the systems involved — mailbox, calendar, CRM, social accounts, ad accounts.',
        'A log of every run, including what the model decided and why.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'Reading each inbound reply to an outreach sequence, classifying it and either answering a routine question or flagging it for a person.',
        'Producing a weekly performance report from social and CRM data on a schedule, with a written summary.',
        'Reconciling CRM records against email and calendar activity and queueing exceptions for review.',
        'Turning an approved content calendar into drafted posts, ready for review and scheduled publishing.',
        'Scoring new leads for fit and urgency as they arrive and routing the strong ones to a caller.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Automates the steps that used to block full automation — the ones that needed reading or writing.',
        'Handles variation in inputs without a new rule for every case.',
        'Runs on a schedule or on events, so routine work happens without being remembered.',
        'Keeps a record of decisions, which manual work rarely does.',
        'Frees people for the approval and exception steps, where their judgement is actually needed.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'Model steps are probabilistic; a step that is right most of the time still needs a check when the consequence is serious.',
        'Automating a bad process produces bad outcomes faster.',
        'Model steps cost tokens on every run, unlike rules, so high-volume steps need budgeting.',
        'Connectors determine reach. A system without an API can only be automated around, not inside.',
        'Over-automation removes the human contact that some steps — a complaint, a negotiation — need.',
        'Compliance rules about sending, calling, recording and data handling still apply to automated actions.',
      ],
    },
    related([
      LINKS.glAgent, LINKS.glEmployee,
      { label: 'What is AI orchestration?', href: '/resources/glossary/ai-orchestration/' },
      { label: 'What is agentic AI?', href: '/resources/glossary/agentic-ai/' },
      LINKS.aiAutomation, LINKS.operations,
      { label: 'Business automation use case', href: '/use-cases/business-automation/' },
      { label: 'Guide: how to automate business processes with AI', href: '/resources/guides/how-to-automate-business-processes-with-ai/' },
    ], 'Related concepts'),
    faq([
      { q: 'What is the difference between AI automation and RPA?', a: 'Robotic process automation replays fixed clicks and rules in software interfaces; it breaks when the input varies. AI automation puts a model at the steps that need reading or judgement, so variation is handled rather than avoided. Many deployments use both: rules for the fixed steps, models for the rest.' },
      { q: 'What is the difference between AI automation and an AI agent?', a: 'In AI automation the sequence of steps is fixed and a model handles individual steps. An AI agent chooses its own steps. They are points on one spectrum, and business systems often combine them — an agent working inside an automated schedule.' },
      { q: 'Which business processes are good candidates for AI automation?', a: 'Processes that are frequent, mostly repetitive, and blocked by one or two steps that need reading or writing: reply handling, reporting, record reconciliation, content drafting, lead triage. Processes that are rare or that depend on relationships are poor candidates.' },
      { q: 'Does AI automation need a person at all?', a: 'For anything that reaches the outside world — sending, spending, publishing — it should. Automation inside the business (classifying, drafting, reconciling) can run unattended with a log to review.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'Eligoo combines the three kinds of step. Automations run at a set time — a weekly growth plan from Atlas, an organic performance report from Sage, a funnel report from Ledger. Model-based steps handle the judgement: Hook classifies replies, Radar scores leads, Ledger reconciles CRM records and raises exceptions. Approval steps are fixed by policy: sequence enrolment, calling campaigns, ad spend changes and off-calendar publishing wait in the approvals queue, failed executions return to pending, and every decision is written to the activity log.',
      ],
    },
    cta('Automate the judgement steps, not just the rules', 'Map a process, assign the employees and set the approval points. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
