import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/agentic-ai/',
  title: 'What Is Agentic AI?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is Agentic AI? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'Agentic AI is the class of AI systems that plan and take actions to achieve goals with limited supervision, rather than returning one answer to one prompt. How it works, components, examples, benefits and limits.',
  primaryKeyword: 'what is agentic AI',
  secondaryKeywords: ['agentic AI definition', 'agentic AI meaning', 'agentic AI vs generative AI', 'agentic AI examples', 'agentic AI for business', 'agentic workflows'],
  term: 'Agentic AI',
  answer: 'Agentic AI is the class of AI systems that plan and take actions to achieve a goal with limited supervision, rather than producing a single response to a single prompt. The term describes the behaviour — autonomy, tool use, multi-step reasoning and self-correction; an AI agent is the software that exhibits it.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'Generative AI answers. Agentic AI pursues. The difference is a control loop wrapped around the model: instead of returning the first output, the system treats the model’s output as a proposed next step, executes it through a tool, feeds the result back and asks the model what to do now. The loop continues until a stopping condition — goal met, budget spent, or a decision that needs a person.',
        'What makes a system “agentic” is a matter of degree. A system that follows a fixed sequence of prompts is barely agentic; one that chooses its own steps, recovers from failed tool calls and decides when to stop is fully so. Most useful business systems sit in the middle: the agent chooses steps within a defined role, and a person approves the consequential ones.',
        'Agentic behaviour depends on tools. A model with no tools can only reason and write; one that can search, query, send and schedule can act. The design question is not how autonomous the model is but which tools it is given and where the approval points are.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'A language model capable of planning and of choosing tools from a description.',
        'A control loop that executes steps, feeds results back and enforces limits.',
        'Tools with clear descriptions, so the model can pick the right one.',
        'State: what has been done, what was learned, what remains.',
        'Stopping conditions and budgets — steps, tokens, time, money.',
        'Approval gates for actions with external effects.',
        'Observability: logs of every plan, call and result.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'A research system that decides which searches to run, reads results, notices a gap and searches again.',
        'A sales system that reads a reply, decides it is a question it can answer, drafts the answer and schedules the follow-up.',
        'An operations system that turns a quarterly objective into tasks, assigns them and re-plans when one is blocked.',
        'A coding system that runs the tests, reads the failure and edits the code again.',
        'A voice system that adapts a conversation to what the caller says rather than following a script.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Completes tasks that need several dependent steps, not just the first.',
        'Recovers from routine failures — a timed-out search, an empty result — without a person restarting it.',
        'Adapts to variation in inputs, which fixed automation cannot.',
        'Reduces the amount of prompting a person has to do to get useful work out of a model.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'Autonomy amplifies mistakes. An agent that misreads the goal can do a great deal of wrong work quickly.',
        'Behaviour is less predictable than a script; testing has to cover paths, not just outputs.',
        'Cost is open-ended unless budgets are enforced, because the loop decides how many model calls to make.',
        'Agentic systems can appear confident while being wrong; verification steps and logs are essential.',
        'The term is used loosely in marketing. Many “agentic” products are prompt chains with no real choice of action.',
        'Accountability remains with people; the more autonomous the system, the more important the approval points.',
      ],
    },
    related([
      LINKS.glAgent, LINKS.glEmployee,
      { label: 'What is a multi-agent system?', href: '/resources/glossary/multi-agent-system/' },
      { label: 'What is AI orchestration?', href: '/resources/glossary/ai-orchestration/' },
      { label: 'What is AI automation?', href: '/resources/glossary/ai-automation/' },
      LINKS.aiAgents, LINKS.aiWorkforce, LINKS.cmpAgentChatbot,
      { label: 'Claude vs AI agents', href: '/compare/claude-vs-ai-agents/' },
    ], 'Related concepts'),
    faq([
      { q: 'What is the difference between agentic AI and generative AI?', a: 'Generative AI produces content — text, images, audio — in response to a prompt. Agentic AI uses a generative model inside a loop to plan and act towards a goal. Agentic systems are built on generative models; the distinction is the loop and the tools.' },
      { q: 'Is agentic AI the same as an AI agent?', a: 'Agentic AI is the category of behaviour; an AI agent is a piece of software that behaves that way. “Agentic” is the adjective, “agent” is the noun.' },
      { q: 'How autonomous should a business agent be?', a: 'Autonomous inside its role, gated at the edges. Let it choose how to research, draft and classify; require a person to approve sending, spending, publishing and anything commercial. That gives most of the benefit with a bounded downside.' },
      { q: 'Does agentic AI need a special model?', a: 'It needs a model that can follow instructions, call tools reliably and reason over several steps. Most current frontier models from the major providers qualify; the surrounding loop, tools and guardrails matter as much as the model.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'Eligoo’s employees are agentic within their roles and gated at the edges. Each one plans its task, chooses which of its tools to use, checks results and reports completion; Atlas goes further and turns objectives into an operating plan and assigns tasks to the others. The gates are fixed: sequence enrolment, calling campaigns, ad spend changes and publishing outside the approved calendar all wait in the approvals queue, failed executions return to pending, and every decision is logged. Customers choose which models power that behaviour by connecting their own OpenAI, Anthropic, Google Gemini, Groq or OpenRouter accounts.',
      ],
    },
    cta('Agentic inside the role, approved at the edge', 'See how eight agentic employees work under one approvals queue. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
