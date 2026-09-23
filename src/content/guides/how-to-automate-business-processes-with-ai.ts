import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/resources/guides/how-to-automate-business-processes-with-ai/',
  title: 'How to Automate Business Processes With AI',
  eyebrow: 'Guides · AI automation',
  metaTitle: 'How to Automate Business Processes With AI: Agents vs Workflow Automation and a Step-by-Step Method | Eligoo',
  metaDescription: 'A method for automating business processes with AI: map the process, separate rules from judgement, choose workflow automation or AI agents, set approval boundaries, measure outcomes.',
  primaryKeyword: 'how to automate business processes with AI',
  secondaryKeywords: ['AI business automation', 'AI workflow automation', 'AI agents vs workflow automation', 'AI process automation', 'AI automation platform', 'AI task automation', 'autonomous business automation'],
  answer: 'Automating a business process with AI means giving the repeatable, decision-bearing parts of it to software that can read, decide and act within limits, while keeping judgement and outside-world actions under a person’s approval. The method is the same for any process: map it, separate the steps that follow rules from the steps that need judgement, use plain workflow automation for the rules and AI agents for the judgement calls, set an approval boundary, and measure outcomes rather than activity.',
  sections: [
    {
      kind: 'prose',
      heading: 'What is AI business automation?',
      paragraphs: [
        'Traditional workflow automation moves data between systems according to rules: when a form is submitted, create a record; when a record changes, send an email. It is reliable, cheap and predictable, and it cannot handle anything the rule did not anticipate — an ambiguous reply, a document in an unexpected format, a lead whose fit is a matter of degree. AI business automation adds a component that can read unstructured input and make a bounded decision: classify this reply, score this account, draft this response, decide whether this exception needs a person.',
        'The important word is bounded. The value of AI in a process comes from decisions; the risk comes from actions. The design job is to let the AI decide within its authority and act on routine things, while routing consequential actions through a person.',
      ],
    },
    {
      kind: 'prose',
      heading: 'AI agents vs workflow automation: which do you need?',
      paragraphs: [
        'Use workflow automation when the step is deterministic: the inputs are structured, the rule is clear and the same input should always produce the same output. Syncing a field, sending a templated notification, scheduling a report. It is faster, cheaper and easier to audit than an agent, and it never has an opinion.',
        'Use an AI agent when the step needs reading, judgement or multi-step work with tools: qualifying a lead from a free-text reply, researching an account, writing a first draft, reconciling records that do not quite match, deciding which of several next actions fits. An agent can plan, call tools, read results and iterate, and it can explain what it did. It costs more per step and needs limits.',
        'Most real processes need both. The rules carry the data; the agents make the calls; and an approval boundary sits between the agents and anything that reaches a customer, a supplier or a bank account. Treating the question as either/or usually means either a brittle automation that breaks on the first exception, or an agent doing work a rule could have done for a fraction of the cost.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How to automate a business process with AI, step by step',
      steps: [
        { title: 'Map the process as it actually runs', text: 'Write down each step, who does it, what they read, what they decide, what they produce and where it goes. Interview the person who does it, not the person who designed it. The gap between the two is where automation projects fail.' },
        { title: 'Mark each step: rule, judgement or relationship', text: 'A rule step always does the same thing with the same input. A judgement step needs someone to read, weigh and decide. A relationship step needs a person because the other party expects one. Only the first two are candidates.' },
        { title: 'Give rule steps to workflow automation', text: 'Field syncs, notifications, scheduled jobs, record creation. Keep these deterministic; do not put a language model where an if-statement will do.' },
        { title: 'Give judgement steps to an AI agent with a defined role', text: 'For each one, write the role: inputs it reads, decisions it may make alone, tools it may use, outputs it must produce, and the KPI its work is judged on. If you cannot write it down, the step is not ready to automate.' },
        { title: 'Set the approval boundary', text: 'List every action in the process that reaches the outside world — sending, spending, publishing, dialling, replying to a non-routine message, changing a customer record in a consequential way. These wait in a queue for a person. Everything else runs.' },
        { title: 'Decide what happens on failure', text: 'A failed execution should return to pending, not disappear. Exceptions should go to a named person. The process should be able to stop without losing work.' },
        { title: 'Run it on real work with a person watching', text: 'Approve everything for the first cycle. Read the log. Most of what you learn is that the brief missed a case; fix the brief, not the model.' },
        { title: 'Measure outcomes and loosen the boundary from evidence', text: 'Track the outcome the process exists for — meetings held, invoices reconciled, posts published on plan — and the exception rate. When a category of action has run cleanly for long enough, move it from approval to automatic. Never the other way round on a hunch.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Which business processes are good candidates?',
      paragraphs: [
        'The best first candidates share three traits: they happen often, the inputs are messy enough that a rule cannot handle them, and the cost of a mistake is recoverable. Lead qualification and follow-up is the usual first choice — replies are free text, volume is high, and a wrong classification is caught at the next step. Content production against a calendar, CRM hygiene and reconciliation, research and enrichment, first-line support triage and weekly reporting all fit the pattern.',
        'Poor first candidates are processes where mistakes are expensive and hard to reverse — pricing, contracts, payments, anything regulated — and processes nobody can describe. Automate those last, if at all, and only with a person approving every action.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: automating inbound enquiry handling',
      scenario: 'A packaging manufacturer receives enquiries by web form and email. A coordinator reads each one, decides whether it is a real prospect, a supplier pitch or spam, looks the company up, replies with a standard question set, and creates a CRM record — when she has time.',
      steps: [
        'Map: read, classify, research, reply, create record, follow up. Classify and research are judgement; reply is a relationship step for real prospects; record creation and follow-up scheduling are rules.',
        'Rules: every enquiry creates a record automatically; a follow-up task is scheduled when a reply is sent.',
        'Agent: a prospect-intelligence role classifies each enquiry, researches the company, scores fit and drafts the reply with the standard questions filled in where the answers are already known.',
        'Boundary: replies to real prospects wait in the approvals queue; the coordinator approves in a batch each morning. Supplier pitches and spam are filed automatically.',
        'Measure: enquiries answered within a day, share of enquiries that become qualified opportunities, and how many drafts the coordinator edits before approving.',
      ],
      outcome: 'Every enquiry is classified, researched and drafted before the coordinator sees it; she spends her time approving and on the prospects that matter.',
    },
    {
      kind: 'list',
      heading: 'Pitfalls when automating processes with AI',
      items: [
        'Automating the process as designed rather than as run. Map the real one.',
        'Using an agent for a rule. Deterministic steps belong in workflow automation.',
        'Using a rule for a judgement. The first exception breaks it silently.',
        'No approval boundary, or one that gates everything. Both mean the boundary was not designed.',
        'Fixing failures by prompting harder. Most failures are missing cases in the brief; write the case down.',
        'Measuring activity. Tasks completed is not the outcome the process exists for.',
        'Automating the expensive, irreversible process first because it is the most painful.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo does it',
      paragraphs: [
        'Eligoo is an AI workforce platform built around exactly this split. The judgement steps are done by AI employees with defined roles — Atlas for planning and delegation, Maven for research and strategy, Sage for content and SEO, Pixel for creative, Radar for prospect intelligence, Hook for outreach and calls, Ledger for CRM hygiene and reporting, Boost for paid media. The rule steps run as automations at a set time, and the whole thing is coordinated on a kanban board with hourly goal review, an activity log and per-employee chat.',
        `The approval boundary is built in. ${FACTS.approvals} Failed executions return to pending and every decision is logged. Each employee has a KPI, so you measure outcomes rather than tasks. ${FACTS.byok}`,
      ],
    },
    faq([
      { q: 'What is the difference between AI agents and workflow automation?', a: 'Workflow automation follows fixed rules on structured data; an AI agent reads unstructured input, decides within its authority and can take multi-step actions with tools. Use rules for deterministic steps and agents for judgement steps, with an approval boundary in front of consequential actions.' },
      { q: 'Which business processes should I automate with AI first?', a: 'Frequent processes with messy inputs and recoverable mistakes: lead qualification and follow-up, content production, CRM hygiene, research and enrichment, support triage, reporting.' },
      { q: 'How do I keep AI automation safe?', a: 'Define each role in writing, list the actions that reach the outside world and put them behind approval, make failures return to pending, and read the log. Loosen the boundary from evidence, not on a hunch.' },
      { q: 'Does AI automation replace my existing automation tools?', a: 'No. Rule-based automation still does the deterministic work best. AI agents add the steps that need reading and judgement. Most processes use both.' },
      { q: 'How do I measure whether the automation is working?', a: 'By the outcome the process exists for — meetings held, invoices reconciled, enquiries answered within a day — plus the exception rate and how often a person edits the agent’s output before approving it.' },
      { q: 'Can Eligoo automate processes outside sales and marketing?', a: 'Eligoo’s employees cover operations planning, marketing, content, creative, prospecting, outreach and calls, revenue intelligence and paid media. Processes outside those functions are not what the platform is built for today.' },
    ]),
    related([
      { label: 'Glossary: AI automation', href: '/resources/glossary/ai-automation/' }, { label: 'Glossary: agentic AI', href: '/resources/glossary/agentic-ai/' }, { label: 'Glossary: AI orchestration', href: '/resources/glossary/ai-orchestration/' },
      LINKS.aiAutomation, LINKS.operations, { label: 'Business automation use case', href: '/use-cases/business-automation/' }, LINKS.atlas, LINKS.ledger,
      LINKS.cmpAgentChatbot, LINKS.cmpEmployeeAgent, { label: 'AI CRM workflow template', href: '/resources/templates/ai-crm-workflow/' },
    ]),
    cta('Automate one process this month', 'Map it, split rules from judgement, hire the employee for the judgement steps, and approve the first cycle by hand.'),
  ],
  breadcrumb: CRUMBS.guides,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
