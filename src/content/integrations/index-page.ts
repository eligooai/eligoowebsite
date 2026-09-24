import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/',
  title: 'Eligoo Integrations',
  eyebrow: 'Integrations',
  metaTitle: 'Eligoo Integrations — AI Models, Telephony, Social Publishing, Data and Email | Eligoo',
  metaDescription: 'Every tool Eligoo’s AI employees connect to: your own OpenAI, Anthropic, Gemini, Groq or OpenRouter keys, Twilio and SIP trunks, Meta Ads, LinkedIn, YouTube, Apollo, Google Workspace and your mailbox.',
  primaryKeyword: 'Eligoo integrations',
  secondaryKeywords: ['AI employee integrations', 'AI agent integrations', 'bring your own API key AI agents', 'AI voice agent telephony integrations', 'AI social media publishing integrations', 'AI sales automation integrations'],
  answer: 'Eligoo connects to the tools you already use — AI model providers, telephony, social channels, advertising, data sources, Google Workspace and your own mailbox — using your own accounts and keys. Nothing runs through a shared Eligoo account: each connection is made once per workspace, verified when you add it, and used only by the AI employees whose role needs it.',
  sections: [
    {
      kind: 'directory',
      heading: 'AI models (bring your own keys)',
      intro: 'Connect one or more providers, set a workspace default model and assign a different model to any employee. Model usage is billed to you by the provider.',
      items: [
        { title: 'OpenAI', text: 'GPT models for any employee, plus OpenAI voices for the AI voice agent.', href: '/integrations/openai/' },
        { title: 'Anthropic', text: 'Claude models for employees that write, plan and reason over long context.', href: '/integrations/anthropic/' },
        { title: 'Google Gemini', text: 'Gemini models through a Google AI key.', href: '/integrations/google-gemini/' },
        { title: 'Groq', text: 'Fast inference on open-weight models — useful where latency matters, such as live calls.', href: '/integrations/groq/' },
        { title: 'OpenRouter', text: 'One key that routes to many models, so you can mix providers without managing several accounts.', href: '/integrations/openrouter/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'Voice and telephony',
      intro: 'The AI voice agent runs on Eligoo’s self-hosted LiveKit stack. You bring the phone numbers and the speech providers.',
      items: [
        { title: 'LiveKit', text: 'The media server, SIP gateway and recording pipeline behind every call. Nothing for you to sign up for.', href: '/integrations/livekit/', badge: 'Built in' },
        { title: 'Deepgram', text: 'Default speech-to-text (nova-3) and an option for text-to-speech voices.', href: '/integrations/deepgram/' },
        { title: 'ElevenLabs', text: 'Natural voices for outbound and inbound AI calls.', href: '/integrations/elevenlabs/' },
        { title: 'Twilio', text: 'Elastic SIP trunk created automatically from your Account SID and Auth Token.', href: '/integrations/twilio/' },
        { title: 'Telnyx', text: 'SIP trunking with credentials you enter manually.', href: '/integrations/telnyx/' },
        { title: 'Plivo', text: 'Zentrunk SIP trunking for AI calling.', href: '/integrations/plivo/' },
        { title: 'Vobiz', text: 'SIP trunking that is popular for Indian numbers.', href: '/integrations/vobiz/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'Publishing and social',
      intro: 'Direct OAuth connections. Sage publishes posts that are on the approved calendar; anything outside it waits for approval.',
      items: [
        { title: 'Facebook Pages', text: 'Publish posts to the Pages you manage.', href: '/integrations/facebook-pages/' },
        { title: 'Instagram', text: 'Publish to a professional Instagram account.', href: '/integrations/instagram/' },
        { title: 'Threads', text: 'Publish text and media posts to Threads.', href: '/integrations/threads/' },
        { title: 'LinkedIn', text: 'Publish posts from your profile or company page.', href: '/integrations/linkedin/' },
        { title: 'YouTube', text: 'Upload videos with title, description, privacy setting and an optional thumbnail.', href: '/integrations/youtube/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'Advertising',
      items: [
        { title: 'Meta Ads', text: 'Boost reads campaigns and insights; pausing, activating, budget changes and launches are approval-gated.', href: '/integrations/meta-ads/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'Data and research',
      items: [
        { title: 'Apollo', text: 'People search for Radar’s prospect lists, and enrichment when you want deeper contact data.', href: '/integrations/apollo/' },
        { title: 'Serper', text: 'Google search results as an API, used by the employees that research.', href: '/integrations/serper/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'Productivity and email',
      items: [
        { title: 'Google Workspace', text: 'Gmail, Drive, Docs, Sheets and Calendar over OAuth — including meeting booking with a Meet link.', href: '/integrations/google-workspace/' },
        { title: 'SMTP/IMAP mailbox', text: 'Hook sends outreach from your own address and reads the replies in your inbox.', href: '/integrations/email-mailbox/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'Creative',
      items: [
        { title: 'fal.ai', text: 'Image and video generation for Pixel, with ffmpeg editing done inside the workspace.', href: '/integrations/fal-ai/' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How integrations work in Eligoo',
      paragraphs: [
        'Every integration is added per workspace, either by signing in with OAuth (Google Workspace, Meta, LinkedIn, YouTube and the other social channels) or by pasting an API key or credentials (model providers, speech providers, Apollo, Serper, fal.ai, telephony trunks and your mailbox). Eligoo verifies the connection when you add it — a test request, a login to the mailbox, a check of the trunk credentials — so a broken key is caught on the settings page rather than in the middle of a task.',
        'Keys and tokens are stored server-side and masked in the interface after they are saved. They are never returned to the browser, and they are never shared between workspaces. Model prompts, generated media and call audio go straight to the provider you connected under your own account, so each provider’s data terms apply to that traffic.',
        'Each AI employee only has access to the integrations its role needs. Sage can publish to your social channels; Pixel cannot. Hook can send from your mailbox and dial your trunk; Radar cannot. Boost can read Meta Ads; nobody else can. That separation is part of how each employee’s approval boundary is enforced.',
        'Disconnecting an integration stops the employees that rely on it. A removed model key takes an employee to the Blocked status until another model is assigned; a removed mailbox pauses running sequences; a removed trunk stops calling campaigns. Nothing silently falls back to a shared credential.',
      ],
    },
    faq([
      { q: 'Do I need to connect every integration to use Eligoo?', a: 'No. At minimum you connect one AI model provider so the employees can think. Everything else is added when an employee needs it — a mailbox before Hook sends email, a SIP trunk before it calls, a social channel before Sage publishes.' },
      { q: 'Can I use my own API keys instead of paying Eligoo for model usage?', a: 'Yes — that is the only way Eligoo works. You connect your own OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account and the provider bills you directly for tokens, with no markup. Eligoo charges a flat platform subscription for the employees, seats and features.' },
      { q: 'Where are my keys stored?', a: 'Server-side in your workspace, encrypted at rest on the hosting provider’s disks, and shown only as a masked value in the interface once saved. Details are on the security page.' },
      { q: 'Which CRMs does Eligoo integrate with?', a: 'Eligoo has a built-in CRM that Radar, Hook and Ledger work in. There is no third-party CRM connector today; records can be exported from the workspace.' },
      { q: 'What happens to a running task if an integration fails?', a: 'The execution fails, the task returns to a pending state and the employee’s status shows Blocked or Error with the reason in the activity log. Once the connection is fixed the work can be resumed or re-approved.' },
    ]),
    related([
      LINKS.aiEmployees, LINKS.voice, LINKS.marketing, LINKS.sales, LINKS.leadGen, LINKS.security, LINKS.pricing,
    ]),
    cta('Connect your tools and put the workforce to work', `Add a model key, connect a channel, and hire the employees you need. ${FACTS.byok}`),
  ],
  breadcrumb: [HOME],
  schema: ['CollectionPage', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
