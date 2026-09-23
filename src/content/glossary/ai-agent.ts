import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-agent/',
  title: 'What Is an AI Agent?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is an AI Agent? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'An AI agent is software that uses an AI model to pursue a goal on its own — reading inputs, choosing actions, calling tools and checking results. Definition, components, examples, benefits and limitations.',
  primaryKeyword: 'what is an AI agent',
  secondaryKeywords: ['AI agent definition', 'AI agent meaning', 'how do AI agents work', 'AI agent vs chatbot', 'AI agent examples', 'AI agents for business'],
  term: 'AI agent',
  answer: 'An AI agent is software that uses an AI model to pursue a goal on its own: it reads its inputs, decides what to do next, calls tools such as web search, email or a CRM, checks the result and keeps going until the task is done or a person is needed. Unlike a chatbot, an agent acts as well as answers.',
  sections: [
    {
      kind: 'steps',
      heading: 'How it works',
      intro: 'Most AI agents run the same loop, whether they are writing code, researching a market or making a phone call.',
      steps: [
        { title: 'Goal and context', text: 'The agent receives an objective (“find twenty packaging manufacturers in Gujarat with an export licence”) plus the instructions, data and constraints it should work within.' },
        { title: 'Plan', text: 'The model breaks the objective into steps and chooses the first one. Good agents write this plan down so it can be inspected.' },
        { title: 'Act through tools', text: 'The agent calls a tool — a search API, a database query, a mailbox, a calendar — and receives a result. Tools are how an agent touches anything outside the model.' },
        { title: 'Observe and adjust', text: 'The result goes back into the model, which decides whether the step worked, what to try next, or whether the plan needs to change.' },
        { title: 'Stop or escalate', text: 'The loop ends when the objective is met, a budget is used up, or the agent hits something outside its remit and hands over to a person.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'A language model that reads, reasons and writes — the agent’s judgement.',
        'Instructions: the role, rules and boundaries the agent works within (often called a system prompt).',
        'Tools: functions the agent can call, from a web search to sending an email or updating a CRM record.',
        'State or memory: the running record of what has been tried and learned during the task.',
        'A runtime that executes the loop, enforces limits on steps and spend, and handles errors.',
        'Guardrails and approvals: the points where a person must confirm before an action reaches the outside world.',
        'Logs: a record of every decision and tool call, so the work can be audited afterwards.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'A research agent that searches the web, reads the results and compiles a positioning brief.',
        'A prospecting agent that queries a contact database, de-duplicates against a CRM and scores each record.',
        'A voice agent that holds a phone conversation, asks qualification questions and books a meeting.',
        'An outreach agent that personalises an approved email sequence and classifies the replies.',
        'A data agent that reconciles CRM records, flags duplicates and produces a funnel report.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Handles multi-step work end to end instead of answering one question at a time.',
        'Uses the software a business already has, through tools, rather than requiring a new system of record.',
        'Runs on a schedule or continuously, so routine work does not wait for someone to be free.',
        'Leaves a trail: every step and tool call can be logged and reviewed.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'Errors compound across steps: a wrong assumption early on can produce confident, wrong output at the end.',
        'Agents can misjudge when to stop — doing too much, or giving up too early — unless limits are explicit.',
        'Output quality is bounded by tool quality; a stale database or a poor search API produces poor results however good the model.',
        'Cost per task varies with how many model calls the loop makes, which is harder to predict than a fixed script.',
        'An agent is not accountable. A person still owns the outcome, which is why actions with external consequences should wait for approval.',
        'Agents are poor at tasks that need negotiation, judgement about people, or context that is not written down anywhere.',
      ],
    },
    related([
      LINKS.glEmployee, LINKS.glWorkforce,
      { label: 'What is agentic AI?', href: '/resources/glossary/agentic-ai/' },
      { label: 'What is a multi-agent system?', href: '/resources/glossary/multi-agent-system/' },
      { label: 'What is AI automation?', href: '/resources/glossary/ai-automation/' },
      LINKS.aiAgents, LINKS.cmpAgentChatbot, LINKS.cmpEmployeeAgent,
      { label: 'ChatGPT vs AI agents', href: '/compare/chatgpt-vs-ai-agents/' },
    ], 'Related concepts'),
    faq([
      { q: 'Is ChatGPT an AI agent?', a: 'On its own, no. A chat assistant returns an answer to a prompt. It becomes an agent when it is given a goal, tools and a loop that lets it act on the world and check the results — some assistant products now include such modes, but the distinction is the loop and the tools, not the model.' },
      { q: 'What is the difference between an AI agent and automation?', a: 'Rule-based automation follows a fixed path: if this, then that. An agent chooses the path. That makes agents suitable for work with variation and judgement — reading a reply, deciding who to call — and rule-based automation better for work that must be identical every time.' },
      { q: 'Can an AI agent use my existing software?', a: 'If the software has an API or a connector, yes. The agent calls it as a tool. Without a connector, the agent can usually still read and produce files or emails, but cannot act inside the system directly.' },
      { q: 'What happens when an AI agent makes a mistake?', a: 'A well-designed agent logs every step, so the mistake can be found and the task re-run. The safer pattern is to make consequential actions — sending, spending, publishing — wait for a person, so a mistake is caught before it leaves the building.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'Each of Eligoo’s eight AI employees is an AI agent with a fixed role, its own tools and a defined Input → Decide → Act → Output → KPI → Approval boundary. Radar, for example, is an agent whose tools are a contact database and web search and whose output is a verified, scored prospect list; Hook is an agent whose tools are a mailbox, a phone line and a calendar. Every decision and tool call is written to the workspace activity log, and any action that reaches the outside world waits in the approvals queue.',
      ],
    },
    cta('See AI agents working as a team', 'Start a free trial and assign a goal to Atlas; watch it delegate to the other employees and report back.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
