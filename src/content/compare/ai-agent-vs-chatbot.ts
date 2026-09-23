import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/compare/ai-agent-vs-chatbot/',
  title: 'AI Agent vs Chatbot',
  eyebrow: 'Compare',
  metaTitle: 'AI Agent vs Chatbot: What’s the Difference and Which Do You Need? | Eligoo',
  metaDescription: 'A chatbot answers within a conversation; an AI agent takes a goal and acts on it with tools. A balanced comparison of scope, cost, risk and when each is the right choice.',
  primaryKeyword: 'AI agent vs chatbot',
  secondaryKeywords: ['chatbot vs AI agent', 'difference between chatbot and AI agent', 'what is an AI agent', 'conversational AI vs AI agent', 'AI agents for business'],
  answer: 'A chatbot is software that replies to messages inside a conversation, either from a scripted flow or a language model. An AI agent takes a goal, plans the steps, uses tools and acts on systems until the goal is met — the conversation, if there is one, is just one of its inputs. Chatbots answer; agents do.',
  sections: [
    {
      kind: 'prose',
      heading: 'What is a chatbot?',
      paragraphs: [
        'A chatbot is a program that holds a text or voice conversation. The earliest ones followed decision trees: if the user says this, show that. Modern chatbots use a language model, so they can handle free-form questions, pull from a knowledge base and sound natural. What they share is a boundary: they respond within the chat. They do not go and update your CRM, place a call, or run a task overnight.',
        'That boundary is a feature for many uses. A support chatbot on a website is meant to answer questions and hand off; you do not want it deciding to issue refunds on its own.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What is an AI agent?',
      paragraphs: [
        'An AI agent is a program built around a language model that can plan and act. Given an objective — “find twenty accounts that match this profile and verify a contact at each” — it decides which tools to call, calls them, reads the results and iterates. It may never talk to a human at all. Where a chatbot’s output is a reply, an agent’s output is a completed task and the side effects that come with it: records created, emails sent, meetings booked.',
        'That reach is why agents need limits. An agent that can send email needs a rule about who approves the sending; a chatbot that can only chat does not.',
      ],
    },
    {
      kind: 'table',
      heading: 'Side by side',
      columns: ['Dimension', 'Chatbot', 'AI agent'],
      rows: [
        ['Primary output', 'A reply in a conversation', 'A completed task and its side effects'],
        ['Triggered by', 'A person sending a message', 'A goal, a schedule, an event or a manager'],
        ['Tools', 'Usually a knowledge base and hand-off', 'Search, CRM, email, phone, calendar, files — whatever it is wired to'],
        ['Runs without a person present', 'No', 'Yes'],
        ['Risk if it goes wrong', 'A bad answer', 'A bad action — so approval boundaries matter'],
        ['Setup', 'Write the flow or upload the knowledge base', 'Define the goal, tools, limits and what needs approval'],
        ['Cost profile', 'Low per conversation', 'Higher per task; tokens plus tool usage'],
        ['Best for', 'Answering repeated questions at scale', 'Recurring work that involves several systems'],
      ],
    },
    {
      kind: 'list',
      heading: 'When a chatbot is the better choice',
      items: [
        'The job is to answer questions, not to take actions — FAQs, order status, opening hours, first-line support.',
        'You want the smallest possible blast radius: a wrong reply is recoverable, a wrong action may not be.',
        'Traffic is high and each interaction is short, so cost per conversation matters more than depth.',
        'You need a predictable, scripted experience, for example in a regulated flow where every wording is signed off.',
      ],
    },
    {
      kind: 'list',
      heading: 'When an AI agent is the better choice',
      items: [
        'The work spans several systems: research here, write there, book somewhere else.',
        'The task should run on a schedule or in response to an event, not only when someone types.',
        'The outcome is measured — meetings booked, records cleaned, posts published — rather than “question answered”.',
        'You are prepared to define an approval boundary and review what waits in it.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo fits',
      paragraphs: [
        'Eligoo’s eight AI employees are agents, not chatbots. Each has a role, tools, a KPI and an approval boundary. Some of their work looks like a conversation — Hook talks to prospects by email and on the phone — but the conversation is one step in a task that starts with a verified list and ends with a booked meeting and a CRM record.',
        'You can also chat with each employee directly in the workspace to give instructions or ask about its work, which is the one place where the chatbot analogy holds. The difference is what happens when you close the window: the employee keeps working on the tasks on its board.',
      ],
    },
    faq([
      { q: 'Is a chatbot with a language model an AI agent?', a: 'Not by itself. Using a language model makes a chatbot more fluent, but an agent is defined by acting on tools towards a goal. A chatbot that can only reply is still a chatbot, however good the model.' },
      { q: 'Can an AI agent also work as a chatbot?', a: 'Yes. Many agents expose a chat interface for instructions and questions. In Eligoo every employee has a chat, but its work is driven by tasks, goals and automations rather than by the chat alone.' },
      { q: 'Which is safer to deploy?', a: 'A chatbot, because it cannot take actions. An agent is safe when its actions are bounded and the risky ones need approval; without that structure it is riskier than a chatbot.' },
      { q: 'Do I need an AI agent for customer support?', a: 'Often a chatbot is enough for first-line answers. An agent earns its place when support involves doing things — checking an order in another system, scheduling a callback, updating a record — or when support conversations should feed sales and operations.' },
      { q: 'Can an AI agent make phone calls?', a: 'Yes, when it is connected to a voice stack and a phone number. In Eligoo, Hook places and answers calls on your own SIP trunk, with the calling campaign approved before the first dial.' },
    ]),
    related([
      LINKS.glAgent, LINKS.aiAgents, LINKS.support, { label: 'Customer support use case', href: '/use-cases/customer-support/' }, LINKS.voice,
      LINKS.cmpEmployeeAgent, { label: 'ChatGPT vs AI agents', href: '/compare/chatgpt-vs-ai-agents/' },
      { label: 'Glossary: agentic AI', href: '/resources/glossary/agentic-ai/' },
    ]),
    cta('Put an agent to work, not just a chat window', 'Give an Eligoo employee a brief and a goal. It plans, acts and reports — and asks before anything reaches a customer.'),
  ],
  breadcrumb: CRUMBS.compare,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
