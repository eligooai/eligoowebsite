import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/anthropic/',
  title: 'Anthropic Integration — Claude Models for AI Employees',
  eyebrow: 'Integrations · AI models',
  metaTitle: 'Anthropic Integration — Claude Models for Your AI Employees | Eligoo',
  metaDescription: 'Connect your Anthropic API key and run Eligoo’s AI employees on Claude. Set a workspace default, assign Claude to the employees that plan and write, and pay Anthropic directly for usage.',
  primaryKeyword: 'Anthropic Claude integration for AI employees',
  secondaryKeywords: ['use Claude with AI agents', 'bring your own Anthropic API key', 'Claude-powered AI workforce', 'AI employees on Claude', 'Claude AI sales agent'],
  answer: 'The Anthropic integration lets Eligoo’s AI employees run on Claude models through your own Anthropic account. Add an API key once per workspace, set Claude as the default or assign it to particular employees, and Anthropic bills you for the tokens used. Prompts go straight from Eligoo’s servers to Anthropic under your account.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Anthropic?',
      paragraphs: [
        'Claude is one of the five model families an Eligoo workspace can connect. Once your key is in, any employee can be assigned a Claude model for its reasoning and writing: Atlas turning objectives into an operating plan, Maven building a positioning document from research, Sage drafting long articles and newsletters, Ledger explaining an exception in the pipeline.',
        'Teams often choose Claude for tasks with a lot of context — a full transcript, a long research dossier, a website’s worth of copy — and for writing where tone matters. Because model assignment is per employee, you can give Claude to the writers and planners and keep a cheaper or faster model on the high-volume classification work Radar and Hook do.',
        'Eligoo does not resell Anthropic access and does not sit between you and Anthropic’s terms. The key is yours, the usage appears in your Anthropic console, and rate limits are the ones your account has.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a key in the Anthropic console', text: 'Generate an API key in your Anthropic organisation. A separate key for Eligoo keeps its usage visible on its own line.' },
        { title: 'Add Anthropic in workspace settings', text: 'Choose Anthropic as a provider and paste the key. Eligoo sends a test request to verify it, then stores it server-side and shows it masked.' },
        { title: 'Set the default or assign per employee', text: 'Make a Claude model the workspace default, or leave another provider as default and assign Claude to Atlas, Maven and Sage only. Either way the change applies from the next task.' },
        { title: 'Work runs under your account', text: 'Each task the assigned employees pick up sends its prompt to Anthropic with your key. Output comes back into the workspace and the activity log records the task. Anthropic bills the tokens to your account; Eligoo adds nothing.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Anthropic',
      items: [
        'Sent to Anthropic: the employee’s role instructions and the task context — briefs, research notes, prospect records, reply text, transcripts, documents attached to the task, and the conversation so far in an employee chat.',
        'Received from Anthropic: the model’s text output, which becomes the draft, decision, classification or report the employee produces.',
        'Not sent: keys for other integrations, billing data, or anything from another workspace.',
        'Your API key stays on Eligoo’s servers in your workspace, is masked in the interface after saving, and never reaches the browser.',
        'The traffic runs under your Anthropic account, so Anthropic’s API data terms apply to what is sent. Review them if your tasks include regulated or confidential material.',
      ],
    },
    employees(['atlas', 'maven', 'sage', 'ledger', 'radar', 'hook'], 'Which AI employees use it', 'Any employee can be assigned Claude. These are the natural fits.', {
      atlas: 'Operating plans, risk registers and delegation reasoning over the whole workspace.',
      maven: 'Research synthesis, positioning and messaging hierarchies.',
      sage: 'Long-form content, scripts and SEO briefs.',
      ledger: 'Written explanations of forecasts, attribution and exceptions.',
      radar: 'Fit rationale per prospect, if you prefer Claude for scoring.',
      hook: 'Reply classification and meeting briefs; for live calls, weigh latency against quality.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Strategy documents', text: 'Maven produces positioning, messaging and channel plans from research, ready for review.', icon: 'brain' },
        { title: 'Long-form content', text: 'Sage writes articles, newsletters and website pages inside the approved calendar.', icon: 'pen' },
        { title: 'Weekly operating plan', text: 'Atlas reads every employee’s output and turns it into next week’s plan and a risk register.', icon: 'workflow' },
        { title: 'Revenue narratives', text: 'Ledger turns funnel metrics and attribution into an explanation a founder can act on.', icon: 'chart' },
      ],
    },
    pricingPointer('each employee'),
    faq([
      { q: 'Can I use Claude with AI employees?', a: 'Yes. Connect your Anthropic API key and assign a Claude model to the workspace or to individual employees.' },
      { q: 'Do I need a specific Anthropic plan?', a: 'You need API access in an Anthropic organisation and a key with sufficient rate limits for your workload. Eligoo works with whatever your account allows.' },
      { q: 'Can I mix Claude with other providers in one workspace?', a: 'Yes. A workspace can hold Anthropic, OpenAI, Google Gemini, Groq and OpenRouter at the same time, with one default and per-employee overrides.' },
      { q: 'Who pays Anthropic?', a: 'You do, directly, on your own account at Anthropic’s rates. Eligoo charges a flat platform subscription with no markup on model usage.' },
      { q: 'Is my data used to train Claude?', a: 'That is governed by Anthropic’s API terms for your account, not by Eligoo. Eligoo does not add training rights of its own; see the security page for what Eligoo stores.' },
    ]),
    related([
      LINKS.aiEmployees, LINKS.atlas, LINKS.maven, LINKS.sage, LINKS.security,
      { label: 'OpenAI integration', href: '/integrations/openai/' }, { label: 'OpenRouter integration', href: '/integrations/openrouter/' }, { label: 'Google Gemini integration', href: '/integrations/google-gemini/' },
      { label: 'Claude vs AI agents', href: '/compare/claude-vs-ai-agents/' },
    ]),
    { kind: 'sources', items: [{ label: 'Anthropic developer documentation', href: 'https://docs.anthropic.com' }] },
    cta('Give your AI employees Claude', `Connect an Anthropic key and assign it to the employees that plan and write. ${FACTS.byok}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
