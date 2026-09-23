import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/resources/guides/what-is-an-ai-employee/',
  title: 'What Is an AI Employee? A Practical Guide',
  eyebrow: 'Guides · AI employees',
  metaTitle: 'What Is an AI Employee? A Practical Guide to Roles, Boundaries and What They Automate | Eligoo',
  metaDescription: 'A plain guide to AI employees: how they differ from AI agents and assistants, how a role is defined, what they can automate, where they fail, and how to brief one well.',
  primaryKeyword: 'what is an AI employee',
  secondaryKeywords: ['AI employee', 'AI employees for business', 'AI employee vs AI agent', 'AI employee vs AI assistant', 'how AI employees work', 'what can AI employees automate', 'digital employees', 'AI workers'],
  answer: 'An AI employee is an AI agent that has been given a standing job: a named role, defined inputs and outputs, decisions it is trusted to make, actions it may take, a KPI it is measured on and a boundary of actions that need a person’s approval. It works from a task board rather than a chat window, keeps a log of what it did and why, and keeps working whether or not anyone is watching.',
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI employee, precisely?',
      paragraphs: [
        'The phrase “AI employee” is used loosely, so it is worth being exact. Underneath every AI employee is an AI agent: software built around a language model that can take an objective, plan steps, call tools and act. What turns that agent into an employee is a set of constraints that look a lot like a job description. It has a role — prospect intelligence, content and SEO, revenue intelligence. It has inputs it works from and outputs it must produce. It has a list of decisions it may make alone and a list of actions that must wait for a person. It has a KPI, so its work can be judged over weeks rather than per task. And it has a manager, so its work fits into someone else’s plan.',
        'The reason the framing matters is not branding. An agent with no fixed role has no fixed responsibility: it does whatever the last prompt said, and nobody is measuring it. An agent with a role can be trusted with some actions and gated on others, can be given a schedule, and can be asked at the end of the month how it did. Those properties are what make it safe to leave running.',
        'A useful test: if you can write the role down as Input → Decide → Act → Output → KPI → Approval boundary, you have an AI employee. If you cannot, you have an agent you are driving by hand.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How is an AI employee different from an AI agent?',
      paragraphs: [
        'An AI agent is the general thing; an AI employee is the specific, bounded use of it. Agents are usually built per task by a developer: wire up the tools, write the prompt, run it, read the result. That is the right approach for one-off jobs and experiments. It becomes fragile when the same job has to happen every week, feed other jobs, and touch customers. At that point you want persistence, coordination, a record and limits — which is what the employee framing supplies.',
        'The differences show up in four places. Scope: an agent does any task; an employee does one role. Accountability: an agent finishes a task; an employee is measured on a KPI. Memory: an agent typically remembers a session; an employee has an activity log across tasks. Coordination: agents are orchestrated by hand or by code; employees are managed by a coordinating role that assigns work and reports back.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How is an AI employee different from an AI assistant?',
      paragraphs: [
        'An AI assistant — a chat product such as ChatGPT or Claude — responds when you talk to it and stops when you stop. It is excellent for thinking and drafting with you present. An AI employee is driven by tasks, goals and schedules rather than by conversation. You can chat with it, and in a well-built platform you will, to give instructions or ask about its work. But the chat is not the unit of work; the task is. Close the window and the assistant is idle; close the window and the employee is still working the list.',
        'The other difference is reach. An assistant’s output is text you read. An employee’s output is an action in a system: a list built, a sequence sent, a post published, a record reconciled. That reach is why employees need approval boundaries and assistants do not.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How does an AI employee work?',
      intro: 'The mechanics are the same across roles; only the tools and the boundary change.',
      steps: [
        { title: 'It receives a task', text: 'Tasks arrive from a manager role, a goal review, a scheduled automation or a person. Each task has an objective and, usually, context from earlier work.' },
        { title: 'It gathers inputs', text: 'The employee reads what it needs: the ideal customer profile, the brand guidelines, the CRM records, the last week’s numbers. Inputs are defined in the role so it does not have to guess where to look.' },
        { title: 'It decides within its authority', text: 'Which accounts fit, which sequence suits a contact, which posts go in the calendar, which records need fixing. These are the decisions the role trusts it to make alone.' },
        { title: 'It acts with tools', text: 'Search, enrichment, a mailbox, a phone line, a calendar, a publishing connection, a media generator. Routine actions run unattended.' },
        { title: 'It stops at the boundary', text: 'Actions that reach the outside world — sending outreach, starting a calling campaign, launching or changing ad spend, publishing outside the approved calendar — wait in an approvals queue. Failed executions return to pending.' },
        { title: 'It produces an output and reports', text: 'The deliverable is written to the workspace, the activity is logged, and the manager role is told the task is done so it can plan the next one.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What can AI employees automate?',
      intro: 'The honest list is the repeatable, well-specified work in each function. Some examples, using the roles Eligoo ships:',
      items: [
        'Operations: turning objectives into a weekly plan, assigning tasks, maintaining a risk register and an approvals queue, reporting back on completed work.',
        'Marketing strategy: market research with web search, positioning drafts, a messaging hierarchy, campaign briefs, a channel plan and a backlog of hypotheses to test.',
        'Content and SEO: a content calendar, website copy, social posts, newsletters, scripts, keyword research and briefs, publishing approved posts to Instagram, Facebook Pages, Threads, LinkedIn and YouTube, and an organic performance report.',
        'Creative production: generating and editing images and video, trims, resizes, captions, ad variants and thumbnails — ready for review, never published directly.',
        'Prospect intelligence: finding accounts and contacts, researching, enriching, verifying, de-duplicating, scoring fit, intent and urgency, and segmenting — without contacting anyone.',
        'Sales and voice: personalising and sending approved email sequences from your own mailbox, reading replies, recording opt-outs, making and taking AI phone calls, asking qualification questions, booking meetings with a brief.',
        'Revenue intelligence: CRM hygiene with an audit trail, reconciliation, funnel metrics, attribution, forecast, pipeline health and an exception queue — without ever deleting a record.',
        'Paid acquisition: a paid plan, audience specs, a creative test matrix, a budget proposal and an approval package; reading ad performance and making approval-gated changes.',
      ],
    },
    {
      kind: 'list',
      heading: 'What AI employees are bad at',
      items: [
        'Judgement in situations the brief did not anticipate. They escalate, which is correct, but it means the brief matters more than the model.',
        'Relationships. An employee can hold a polite conversation; it cannot become someone a customer trusts.',
        'Negotiation and commitments. Price, terms and promises should be outside every boundary.',
        'Tacit knowledge. It knows what is written down and what it can look up. If the way you sell lives in a founder’s head, write it down first.',
        'Accountability. It logs every decision, but a business, not the software, is responsible for outcomes.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: one role, end to end',
      scenario: 'A small industrial supplier wants a steady flow of qualified prospects but has nobody whose job is list building.',
      steps: [
        'The ideal customer profile — industries, company size, roles, regions, exclusions — is written into the prospect-intelligence role as its input.',
        'The employee searches for matching accounts, researches each one, finds contacts, enriches and verifies them, de-duplicates against the CRM and the suppression list, and scores each for fit, intent and urgency.',
        'Its output is a segmented list with a reason for every score. Contacting anyone is outside its boundary, so the list goes to the sales employee, whose sequence enrolment waits for approval.',
        'Its KPI is the share of its prospects that later become qualified meetings, so a list that looks good but converts badly shows up as its problem.',
      ],
      outcome: 'The founder reviews a scored list once a week instead of building one, and the sales work downstream starts from verified contacts.',
    },
    {
      kind: 'list',
      heading: 'Common pitfalls when adopting AI employees',
      items: [
        'Briefing by vibe. “Find good leads” is not a role. Write the profile, the exclusions and what a good output looks like.',
        'No boundary. If every action runs unattended, the first bad send is on you. Decide what waits for approval before switching anything on.',
        'Measuring activity instead of outcome. Emails sent is not a KPI; qualified meetings held is.',
        'Giving one employee every job. Split by role so you can trust some actions and gate others.',
        'Ignoring the activity log. The log is where you learn what the brief is missing.',
        'Expecting it to learn on its own. It improves when the brief, the examples and the boundaries improve.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo does it',
      paragraphs: [
        'Eligoo is an AI workforce platform with eight AI employees: Atlas (operations manager and the only one that delegates), Maven (marketing strategist), Sage (content and SEO), Pixel (creative production), Radar (prospect intelligence), Hook (sales and voice), Ledger (revenue intelligence) and, optionally, Boost (paid acquisition). Each has a defined Input → Decide → Act → Output → KPI → Approval boundary and one of six statuses at any time: Working, Planning, Awaiting approval, Idle, Blocked or Error.',
        `Work runs on a kanban board with goals reviewed hourly, scheduled automations, an activity log and a per-employee chat. ${FACTS.approvals} ${FACTS.byok} ${FACTS.workspace} You can hire one employee, a team or the whole workforce; see the pricing page for current plans.`,
      ],
    },
    faq([
      { q: 'Is an AI employee the same as an AI agent?', a: 'An AI employee is built from an AI agent. The difference is the standing role, KPI and approval boundary around it. Every employee is an agent; an agent becomes an employee when it has a job.' },
      { q: 'Can an AI employee work autonomously?', a: 'Routine work runs unattended: research, drafting, classification, scheduling, reporting. Actions that reach customers or spend money wait for a person’s approval. That split is what makes autonomy safe.' },
      { q: 'What business tasks can AI employees automate?', a: 'Repeatable, well-specified work in each function: list building, outreach and follow-up, reply triage, content production and publishing, creative variants, CRM hygiene, reporting, planning. Judgement, relationships and negotiation stay with people.' },
      { q: 'How much does an AI employee cost?', a: 'Eligoo is priced per workspace with a credit allowance that usage consumes, plus your own model costs billed by your AI provider. Current plans and a free trial are on the pricing page.' },
      { q: 'Can an AI employee use my existing software?', a: 'It uses what it is connected to. In Eligoo that includes your own mailbox, telephony trunk, Google Workspace, social accounts, Meta Ads, Apollo and your AI provider accounts. Anything not connected, it cannot touch.' },
      { q: 'How long does it take to set up an AI employee?', a: 'Connecting accounts and writing a first brief takes minutes; tuning the brief from the activity log takes a few cycles of real work. The brief is where the time goes, and it is time well spent.' },
    ]),
    related([
      LINKS.glEmployee, LINKS.glAgent, LINKS.aiEmployees, LINKS.atlas, LINKS.radar, LINKS.cmpEmployeeAgent,
      { label: 'AI employee vs human employee', href: '/compare/ai-employee-vs-human/' },
      { label: 'Guide: how to build an AI workforce', href: '/resources/guides/how-to-build-an-ai-workforce/' },
      LINKS.templates,
    ]),
    cta('Hire your first AI employee', 'Write the brief, set the boundary, and see the first tasks move across the board. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.guides,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
