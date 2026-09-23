import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/google-gemini/',
  title: 'Google Gemini Integration — Gemini Models for AI Employees',
  eyebrow: 'Integrations · AI models',
  metaTitle: 'Google Gemini Integration — Gemini Models for Your AI Employees | Eligoo',
  metaDescription: 'Connect a Google AI API key and run Eligoo’s AI employees on Gemini models. Workspace default, per-employee assignment, keys stored server-side, usage billed by Google to your own account.',
  primaryKeyword: 'Google Gemini integration for AI employees',
  secondaryKeywords: ['use Gemini with AI agents', 'bring your own Gemini API key', 'Gemini-powered AI workforce', 'AI employees on Gemini', 'Gemini API business automation'],
  answer: 'The Google Gemini integration lets Eligoo’s AI employees run on Gemini models through a Google AI API key that you own. Add the key to your workspace, choose Gemini as the default model or assign it to specific employees, and Google bills your account for usage. It sits alongside OpenAI, Anthropic, Groq and OpenRouter as one of the providers you can mix in a single workspace.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Google Gemini?',
      paragraphs: [
        'Gemini models are used the same way as any other connected provider: as the reasoning and writing engine behind an AI employee’s tasks. Assign Gemini to Sage and its content drafts run on Gemini; assign it to Radar and prospect scoring runs on Gemini; make it the workspace default and every employee without an override uses it.',
        'Gemini is a practical choice for teams already inside Google’s ecosystem — the Gemini connection is independent of the Google Workspace connection, but many customers set both up in the same session. Gemini’s long context windows suit tasks that carry a lot of material, such as summarising a research dossier or a full call transcript.',
        'As with every provider in Eligoo, the key is yours, usage and quotas are your account’s, and Eligoo does not resell access.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Get an API key from Google AI Studio', text: 'Create a key in Google AI Studio, or use a key from a Google Cloud project with the Gemini API enabled.' },
        { title: 'Add Google Gemini as a provider', text: 'In workspace settings, choose Google Gemini and paste the key. Eligoo verifies it with a test request and stores it server-side, masked in the interface.' },
        { title: 'Select the models', text: 'Set a Gemini model as the workspace default, or assign Gemini to particular employees while another provider stays the default.' },
        { title: 'Tasks run on your account', text: 'Assigned employees send their prompts to Google under your key; output returns to the workspace and is logged against the task. Credits are consumed at the platform rate.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Google Gemini',
      items: [
        'Sent to Google: the employee’s instructions and the task context — briefs, documents, prospect records, reply text, transcripts and chat history.',
        'Received from Google: the model’s text output.',
        'Not sent: other integrations’ credentials, your Google Workspace OAuth token (that is a separate connection), or data from other workspaces.',
        'Your API key stays server-side in your workspace and is never returned to the browser.',
        'Traffic runs under your own Google account, so Google’s Gemini API data terms — which differ between free and paid tiers — apply to what is sent. Check the tier your key is on.',
      ],
    },
    employees(['atlas', 'maven', 'sage', 'radar', 'hook', 'ledger'], 'Which AI employees use it', 'Any employee can be assigned a Gemini model.', {
      sage: 'Content drafts and SEO research summaries.',
      maven: 'Market research synthesis with long context.',
      radar: 'Scoring and segmentation at volume.',
      hook: 'Reply classification and call reasoning.',
      ledger: 'Funnel and attribution explanations.',
      atlas: 'Planning across the whole workspace.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Research summaries', text: 'Maven and Radar turn search results and documents into positioning notes and prospect rationale.', icon: 'search' },
        { title: 'Content production', text: 'Sage writes calendar items on Gemini and publishes the approved ones.', icon: 'pen' },
        { title: 'Reply and call handling', text: 'Hook reasons over threads and live calls with a Gemini model.', icon: 'phone' },
        { title: 'One-ecosystem setup', text: 'Pair Gemini with the Google Workspace connection for calendar booking, Drive and Sheets.', icon: 'globe' },
      ],
    },
    pricingPointer('each employee'),
    faq([
      { q: 'Can I use Gemini with AI employees?', a: 'Yes. Add a Google AI API key to the workspace and assign a Gemini model as the default or per employee.' },
      { q: 'Is the Gemini connection the same as the Google Workspace connection?', a: 'No. Gemini is an API key for model usage; Google Workspace is an OAuth sign-in for Gmail, Drive, Docs, Sheets and Calendar. You can use either without the other.' },
      { q: 'Who is billed for Gemini usage?', a: 'Google bills the account the key belongs to. Eligoo credits are consumed separately for the platform work.' },
      { q: 'Can I run some employees on Gemini and others on Claude or GPT?', a: 'Yes. Model assignment is per employee, with a workspace default for anyone without an override.' },
      { q: 'What if my key’s quota is exhausted?', a: 'The task fails and returns to pending, and the employee shows an Error status with the reason. Raise the quota or switch the assignment to another provider.' },
    ]),
    related([
      LINKS.aiEmployees, LINKS.sage, LINKS.maven, LINKS.security,
      { label: 'Google Workspace integration', href: '/integrations/google-workspace/' }, { label: 'OpenAI integration', href: '/integrations/openai/' }, { label: 'OpenRouter integration', href: '/integrations/openrouter/' },
    ]),
    { kind: 'sources', items: [{ label: 'Google AI for Developers — Gemini API', href: 'https://ai.google.dev' }] },
    cta('Run your AI employees on Gemini', `Paste a Google AI key and choose the employees that should use it. ${FACTS.byok}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
