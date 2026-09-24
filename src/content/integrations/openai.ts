import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/openai/',
  title: 'OpenAI Integration — Bring Your Own OpenAI Account',
  eyebrow: 'Integrations · AI models',
  metaTitle: 'OpenAI Integration — Run AI Employees on Your Own OpenAI Account | Eligoo',
  metaDescription: 'Connect your OpenAI API key to Eligoo and run any AI employee on GPT models, billed by OpenAI to you. Workspace default model, per-employee assignment, and OpenAI voices for AI phone calls.',
  primaryKeyword: 'OpenAI integration for AI employees',
  secondaryKeywords: ['use my own OpenAI key with AI agents', 'bring your own OpenAI API key', 'GPT-powered AI employees', 'OpenAI AI voice agent', 'AI workforce on OpenAI'],
  answer: 'The OpenAI integration lets Eligoo’s AI employees think with GPT models on your own OpenAI account. You paste an API key once per workspace, choose a default model, optionally assign a different model to individual employees, and OpenAI bills you directly for the tokens used. The same key also unlocks OpenAI voices for the AI voice agent.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with OpenAI?',
      paragraphs: [
        'Every AI employee needs a language model to read its inputs, decide what to do and write its outputs. Eligoo does not resell model access; it uses the provider accounts you connect. With OpenAI connected, Atlas can plan with a GPT model, Sage can draft with it, Radar can score prospects with it, and Hook can hold a phone conversation with it — each under your account and your usage limits.',
        'OpenAI is also one of three text-to-speech options for the AI voice agent. If you prefer OpenAI’s voices to ElevenLabs or Deepgram, the same key serves both purposes and no second connection is needed.',
        'You are not locked to one provider. A workspace can hold OpenAI alongside Anthropic, Google Gemini, Groq or OpenRouter, with a default model for the workspace and a specific model per employee. A common arrangement is a fast, inexpensive model for high-volume classification work and a stronger model for planning and long-form writing.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a key in your OpenAI account', text: 'Generate an API key on the OpenAI platform, ideally in a project dedicated to Eligoo so you can see its usage separately and set a spending limit.' },
        { title: 'Paste it into Eligoo', text: 'In your workspace settings, add OpenAI as a model provider and paste the key. Eligoo makes a test request to verify the key before it is saved.' },
        { title: 'Choose models', text: 'Pick a workspace default model. Then, for any employee, override the default with the model you prefer for that role. Changing an assignment takes effect on the employee’s next task.' },
        { title: 'Optionally pick an OpenAI voice', text: 'In the voice agent configuration, select OpenAI as the text-to-speech provider and choose a voice. Make a browser test call to hear it before any campaign starts.' },
        { title: 'The employees get to work', text: 'From then on every task, chat message, call turn and report the employees produce runs through your OpenAI account. OpenAI bills the tokens to you directly; Eligoo adds no markup.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and OpenAI',
      items: [
        'Sent to OpenAI: the prompts each employee builds for a task — its role instructions, the relevant workspace context (a brief, a prospect record, a reply to classify, a call transcript so far) and any documents the task attached. On calls, the text to be spoken when OpenAI is the voice provider.',
        'Received from OpenAI: the model’s text output, and audio when OpenAI voices are used.',
        'Not sent: your other integrations’ keys, your billing details, or data from other workspaces.',
        'Your API key stays server-side in your workspace, is masked in the interface after saving, and is never returned to the browser.',
        'Because the traffic runs under your own OpenAI account, OpenAI’s data-usage and retention terms for API customers apply to it. Check those terms if you handle regulated data.',
      ],
    },
    employees(['atlas', 'maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'Which AI employees use it', 'Any employee can be assigned an OpenAI model. These are the roles where the choice matters most.', {
      atlas: 'Planning, delegation and weekly reports benefit from a stronger reasoning model.',
      sage: 'Long-form writing and SEO briefs.',
      radar: 'High-volume scoring and de-duplication suits a fast, cheaper model.',
      hook: 'Live call turns need low latency; OpenAI voices are an option for speech.',
      ledger: 'Reconciliation and exception explanations.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Content at your quality bar', text: 'Sage drafts posts, newsletters and website copy on the GPT model you trust, inside your approved calendar.', icon: 'pen' },
        { title: 'Reply handling', text: 'Hook classifies every inbound reply and drafts routine answers; anything commercial waits for a person.', icon: 'mail' },
        { title: 'AI phone calls', text: 'Hook speaks with an OpenAI voice and reasons with a GPT model on your own SIP trunk.', icon: 'phone' },
        { title: 'Cost control', text: 'Assign cheaper models to volume work and stronger ones to judgement work, and watch spend in your own OpenAI dashboard.', icon: 'chart' },
      ],
    },
    pricingPointer('each employee'),
    faq([
      { q: 'Can I use my own OpenAI key with AI employees?', a: 'Yes. That is how Eligoo works: you connect your own OpenAI account and OpenAI bills you for tokens. Eligoo does not provide a shared key.' },
      { q: 'Which OpenAI models can I choose?', a: 'The chat models available to your OpenAI account. Eligoo lists the models your key can reach when you connect it; you set one as the workspace default and can assign others per employee.' },
      { q: 'Does Eligoo mark up my OpenAI usage?', a: 'No. OpenAI charges your account directly at its own rates, and that is the only bill for model usage. Eligoo is a flat platform subscription; see the pricing page.' },
      { q: 'Can different employees use different models?', a: 'Yes. A workspace default applies to everyone unless an employee has its own assignment — for example a fast model for Radar and a stronger one for Atlas.' },
      { q: 'Can the AI voice agent use OpenAI voices?', a: 'Yes. Select OpenAI as the text-to-speech provider in the voice configuration. Transcription still runs on Deepgram by default.' },
      { q: 'What happens if my OpenAI key hits its spending limit?', a: 'Requests fail, the running task returns to pending and the employee shows an Error status with the reason. Raise the limit or assign another provider and the work resumes.' },
    ]),
    related([
      LINKS.aiEmployees, LINKS.voice, LINKS.security, LINKS.pricing,
      { label: 'Anthropic integration', href: '/integrations/anthropic/' }, { label: 'OpenRouter integration', href: '/integrations/openrouter/' }, { label: 'ElevenLabs integration', href: '/integrations/elevenlabs/' },
      { label: 'ChatGPT vs AI agents', href: '/compare/chatgpt-vs-ai-agents/' },
    ]),
    { kind: 'sources', items: [{ label: 'OpenAI platform documentation', href: 'https://platform.openai.com/docs' }] },
    cta('Run your AI employees on OpenAI', `Paste a key, set a default model and start a trial. ${FACTS.byok}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
