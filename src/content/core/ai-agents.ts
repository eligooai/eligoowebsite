import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/ai-agents/',
  title: 'AI Agents for Business',
  eyebrow: 'Product',
  metaTitle: 'AI Agents for Business — Autonomous Agents That Use Tools and Finish Tasks | Eligoo',
  metaDescription: 'An AI agent is software that pursues a goal by reasoning, using tools and taking actions. Learn what AI agents do for businesses, how they differ from chatbots, and how Eligoo runs them as a coordinated workforce.',
  primaryKeyword: 'AI agents for business',
  secondaryKeywords: ['AI agent platform', 'AI agents', 'autonomous AI agents', 'AI business agents', 'AI workflow agents', 'AI agent automation', 'multi-agent AI', 'AI agent orchestration'],
  answer: 'An AI agent is software that is given a goal and works towards it by reasoning with an AI model, calling tools and taking actions, rather than producing a single reply. For businesses, agents do the multi-step work — research, outreach, calls, content, reporting — that a chatbot can only talk about. Eligoo runs a set of specialised agents as AI employees, coordinated by an operations agent and governed by approvals.',
  hero: { secondary: { label: 'AI employees', href: '/ai-employees/' } },
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI agent?',
      paragraphs: [
        'An AI agent combines a language model with tools and a loop. The model reads the task and the current state, decides on the next step, calls a tool — a search, an email send, a database query, a phone call — observes the result, and repeats until the task is done or it needs a person. The agent is defined by what it may use and how it is judged, not only by what it says.',
        'An autonomous AI agent is one that runs that loop without a human confirming every step. Autonomy is a dial, not a switch: an agent can research and draft freely while being required to stop before anything is sent, published or spent. Where the dial sits is a design decision, and in Eligoo it is set per role.',
      ],
    },
    {
      kind: 'features',
      heading: 'What can AI agents do for businesses?',
      items: [
        { title: 'Research and enrichment', text: 'Find accounts and contacts, read sources, verify facts, fill gaps and score fit — Radar’s daily work.', icon: 'search' },
        { title: 'Outreach and conversation', text: 'Send and follow up on sequences, classify replies, hold phone conversations, qualify and book — Hook.', icon: 'mail' },
        { title: 'Content and creative production', text: 'Plan and write content, publish to channels, generate and edit images and video — Sage and Pixel.', icon: 'pen' },
        { title: 'Analysis and reporting', text: 'Reconcile data across systems, calculate funnel metrics, attribute revenue, forecast — Ledger.', icon: 'chart' },
        { title: 'Planning and coordination', text: 'Turn objectives into tasks, sequence work, handle exceptions, report progress — Atlas.', icon: 'workflow' },
        { title: 'Paid campaign management', text: 'Plan audiences and tests, propose budgets, manage approved campaigns within stop rules — Boost.', icon: 'megaphone' },
      ],
    },
    {
      kind: 'steps',
      heading: 'How do AI agents automate workflows?',
      intro: 'A workflow is a chain of agent tasks with hand-offs and approval points. Here is how an outbound workflow runs in Eligoo.',
      steps: [
        { title: 'Objective', text: 'You tell Atlas the outcome you want — say, qualified meetings with a specific kind of company.' },
        { title: 'Decomposition', text: 'Atlas assigns a research task to Maven, a prospecting task to Radar, copy to Sage and, once the list exists, the sequence to Hook.' },
        { title: 'Tool use', text: 'Each agent uses its own tools: web search, Apollo, your mailbox, the voice stack, the CRM.' },
        { title: 'Hand-off', text: 'Outputs are attached to tasks and passed to the next role; delegated task completion triggers Atlas to report back to you.' },
        { title: 'Approval', text: 'Enrolling contacts or starting a calling campaign pauses for a person. Approved work then runs unattended.' },
        { title: 'Measurement', text: 'Ledger records what happened; Atlas reviews goals on a schedule and reprioritises.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'AI agent vs chatbot',
      paragraphs: [
        'A chatbot answers within a conversation and has no obligation beyond the reply. An agent is accountable for an outcome and can act in the world to reach it. The practical differences are tools, memory of the task, the ability to run without a person present, and a definition of done. A chatbot is the right tool for questions; an agent is the right tool for work.',
      ],
    },
    {
      kind: 'prose',
      heading: 'AI agent vs AI employee',
      paragraphs: [
        'Every AI employee is an agent; not every agent is an employee. An employee adds a standing role with a KPI, persistence across tasks, a place in a team and an approval boundary. Eligoo’s agents are packaged as employees precisely so that the autonomy question is answered up front, per role, instead of per prompt.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Multi-agent AI and orchestration',
      paragraphs: [
        'Complex business work rarely fits one agent. Prospecting, messaging, calling and reporting need different tools, different judgement and different limits. A multi-agent system splits the work between specialised agents and adds an orchestrator that assigns tasks, watches progress and handles exceptions. In Eligoo that orchestrator is Atlas, the only employee that may delegate; the others do their own part and hand off.',
        `${FACTS.byok} You can assign a different model to each agent — a faster, cheaper model for classification, a stronger one for strategy.`,
      ],
    },
    employees(['atlas', 'radar', 'hook', 'sage', 'ledger'], 'Agents in the Eligoo workforce', 'Five of the eight, showing the range from research to reporting.'),
    pricingPointer('an agent'),
    faq([
      { q: 'What is an autonomous AI agent?', a: 'An agent that runs its reason–act–observe loop without a person confirming each step. In Eligoo, autonomy is bounded per role: research and drafting are autonomous; sending, calling, publishing off-calendar and spending are approval-gated.' },
      { q: 'What can AI agents do for businesses?', a: 'Multi-step work with tools: prospect research and enrichment, email and phone outreach, content and creative production, CRM hygiene and reporting, campaign planning, and the coordination between them.' },
      { q: 'How do AI agents automate workflows?', a: 'By chaining tasks with hand-offs: an orchestrating agent breaks an objective into tasks, specialised agents complete them with their tools, outputs pass to the next role, and approval points pause the chain where a person must decide.' },
      { q: 'Do I need to write prompts for each agent?', a: 'No. Each Eligoo employee ships with a role definition. You give objectives and tasks in plain language, choose the model it uses, and adjust its approval settings.' },
      { q: 'Which AI models power the agents?', a: 'Any model from your connected OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account, with a workspace default and per-employee assignment.' },
    ]),
    related([LINKS.aiEmployees, LINKS.aiWorkforce, LINKS.aiAutomation, LINKS.cmpAgentChatbot, LINKS.cmpEmployeeAgent, LINKS.glAgent, { label: 'What is agentic AI?', href: '/resources/glossary/agentic-ai/' }, { label: 'What is a multi-agent system?', href: '/resources/glossary/multi-agent-system/' }, LINKS.operations]),
    cta('Put AI agents to work on real tasks', 'Give Atlas an objective and watch the agents take it apart — with every outside-world action waiting for your approval.'),
  ],
  breadcrumb: [HOME],
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
