import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/groq/',
  title: 'Groq Integration — Fast Inference for AI Employees',
  eyebrow: 'Integrations · AI models',
  metaTitle: 'Groq Integration — Fast Inference for AI Employees and Voice Agents | Eligoo',
  metaDescription: 'Connect a Groq API key and give Eligoo’s AI employees fast inference on open-weight models — useful for live AI phone calls and high-volume classification. Billed by Groq to your account.',
  primaryKeyword: 'Groq integration for AI agents',
  secondaryKeywords: ['Groq AI voice agent', 'fast inference for AI employees', 'bring your own Groq API key', 'low-latency AI calling', 'Groq open-weight models business automation'],
  answer: 'The Groq integration lets Eligoo’s AI employees run on the open-weight models Groq serves, with the low latency Groq is known for. You add a Groq API key to your workspace, assign Groq models to the employees where speed matters — the AI voice agent and high-volume classification are the usual candidates — and Groq bills your account for usage.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Groq?',
      paragraphs: [
        'Groq is one of the five model providers a workspace can connect. It serves open-weight models through an API, and its distinguishing quality is response speed. In Eligoo that matters most in two places: a live phone call, where every turn adds to the silence the caller hears, and bulk work such as Radar scoring hundreds of prospects or Hook classifying a day of replies.',
        'Groq is rarely the only provider in a workspace. A common pattern is to keep a stronger model from OpenAI or Anthropic as the workspace default for planning and writing, and assign a Groq model to Hook for call turns. Per-employee model assignment makes that a settings change, not an engineering task.',
        'As with every provider, the key is yours, rate limits are your account’s, and Eligoo does not resell access.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a key in the Groq console', text: 'Generate an API key in your Groq account.' },
        { title: 'Add Groq as a provider', text: 'In workspace settings choose Groq and paste the key. Eligoo verifies it with a test request and stores it server-side, masked in the interface.' },
        { title: 'Assign Groq models', text: 'Pick a Groq model as the default, or assign it to specific employees — typically Hook for calls and Radar for scoring.' },
        { title: 'Test on a call', text: 'If Hook is on Groq, make a browser test call and listen to the turn-taking. Adjust the turn-detection and interruption settings alongside the model choice.' },
        { title: 'Work runs under your account', text: 'Prompts go to Groq with your key, and responses come back into the workspace. Groq bills the tokens to your account; Eligoo adds nothing.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Groq',
      items: [
        'Sent to Groq: the employee’s instructions and task context — on calls, the running transcript and the agent brief; on other tasks, briefs, records, reply text and documents.',
        'Received from Groq: the model’s text output.',
        'Not sent: other integrations’ keys, audio (speech is handled by the STT and TTS providers, not the model provider), or data from other workspaces.',
        'Your API key stays server-side in your workspace and is never returned to the browser.',
        'Traffic runs under your own Groq account, so Groq’s data terms apply to what is sent.',
      ],
    },
    employees(['hook', 'radar', 'ledger', 'sage'], 'Which AI employees use it', 'Any employee can be assigned a Groq model. These roles get the most from the speed.', {
      hook: 'Live call turns and reply classification, where latency is felt.',
      radar: 'Scoring, segmenting and de-duplicating at volume.',
      ledger: 'Batch reconciliation checks.',
      sage: 'Short-form social drafts; longer pieces may be better on another model.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Responsive AI phone calls', text: 'Hook answers quickly enough that the conversation feels natural, on your own SIP trunk.', icon: 'phone' },
        { title: 'Bulk prospect scoring', text: 'Radar scores fit, intent and urgency across a whole list in one pass.', icon: 'target' },
        { title: 'Reply triage', text: 'Every reply classified and routed the moment it is polled from the mailbox.', icon: 'mail' },
        { title: 'Model mix by role', text: 'Groq for speed, another provider for depth — assigned per employee.', icon: 'layers' },
      ],
    },
    pricingPointer('each employee'),
    faq([
      { q: 'Can I use Groq for an AI voice agent?', a: 'Yes. Assign a Groq model to Hook and it becomes the language model behind live calls. Speech-to-text and text-to-speech remain on Deepgram, ElevenLabs or OpenAI.' },
      { q: 'Which models does Groq offer?', a: 'Groq serves a set of open-weight models; Eligoo lists the ones your key can reach when you connect it. The list changes as Groq adds models.' },
      { q: 'Is Groq good enough for writing tasks?', a: 'Open-weight models on Groq handle short drafts and classification well; for long-form content and planning many teams prefer a frontier model. Assign per employee and compare.' },
      { q: 'Who bills me for Groq usage?', a: 'Groq, directly on your account. Eligoo charges a flat platform subscription with no markup on model usage.' },
      { q: 'What happens if Groq rate-limits my key?', a: 'The affected task fails and returns to pending with the reason in the activity log. On a calling campaign the current call ends gracefully and the campaign pauses until the model responds again.' },
    ]),
    related([
      LINKS.voice, LINKS.hook, LINKS.radar, LINKS.ucColdCalling,
      { label: 'OpenAI integration', href: '/integrations/openai/' }, { label: 'OpenRouter integration', href: '/integrations/openrouter/' }, { label: 'Deepgram integration', href: '/integrations/deepgram/' },
    ]),
    { kind: 'sources', items: [{ label: 'Groq developer documentation', href: 'https://console.groq.com/docs' }] },
    cta('Put a fast model behind your calls', `Connect Groq, assign it to Hook and make a browser test call. ${FACTS.byok}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
