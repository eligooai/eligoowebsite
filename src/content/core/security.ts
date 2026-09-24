import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/security/',
  title: 'Security and Data Handling',
  eyebrow: 'Trust',
  metaTitle: 'Security at Eligoo — Your Keys, Your Workspace, Your Approvals',
  metaDescription: 'How Eligoo handles your data: bring-your-own AI keys stored server-side, per-workspace isolation, approval gates on outside-world actions, encrypted disks, nightly backups and deletion on request.',
  primaryKeyword: 'AI workforce security',
  secondaryKeywords: ['BYOK AI platform', 'AI agent security', 'AI employee data privacy', 'AI platform approvals'],
  answer: 'Eligoo runs each customer in its own workspace, stores the AI provider keys you bring server-side where the browser never sees them, and puts every action that reaches the outside world behind an approval. Data sits on encrypted disks at our hosting provider, is backed up nightly, and is deleted on request.',
  hero: { primary: { label: 'Talk to us', href: 'https://calendly.com/eligooai/30min' }, secondary: { label: 'See pricing', href: '/pricing/' } },
  sections: [
    {
      kind: 'features',
      heading: 'How your data is handled',
      items: [
        { title: 'Bring your own keys', text: 'You connect your OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account. Keys are stored server-side in your workspace, masked in the interface and never returned to the browser.', icon: 'key' },
        { title: 'Per-workspace data', text: 'Each customer has its own workspace with its own data, connections, AI keys and settings. Employees only see the workspace they belong to.', icon: 'lock' },
        { title: 'Approvals on outside-world actions', text: 'Sending a sequence, starting a calling campaign, publishing outside the approved calendar and any ad launch or spend change wait for a person. Decisions are logged.', icon: 'shield' },
        { title: 'Least-privilege roles', text: 'Each employee has access only to the integrations its role needs. Disconnecting an integration stops the employees that rely on it.', icon: 'users' },
        { title: 'Encryption at rest', text: 'Workspace data is stored on encrypted disks at our hosting provider. Connections to your providers use TLS.', icon: 'database' },
        { title: 'Backups and deletion', text: 'Workspace data is backed up nightly and retained for seven days. Ask us to delete your workspace and we remove it and its backups as they expire.', icon: 'clock' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How BYOK works',
      paragraphs: [
        'You paste a provider key once, in your workspace settings. From then on the interface shows only that a key is set. Employees call the provider through the platform using that key, so prompts and the context they carry go to the provider under your own account, and the provider’s data terms apply to that traffic. You can rotate or remove a key at any time; employees that depend on it pause until a new one is set.',
        'The same pattern applies to every other integration: telephony credentials, speech and voice providers, social OAuth tokens, Apollo, Serper, fal.ai and your mailbox password are stored server-side and masked in the interface.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What employees can and cannot do',
      paragraphs: [
        'Autonomy is scoped per role. Employees research, plan, draft, analyse and produce without approval. They do not enrol contacts in sequences, dial a campaign, publish outside the calendar, launch or change ad spend, negotiate price, make promises, delete records or answer legal and security questions on their own. Those actions either wait in the approvals queue or are escalated to a person with the context attached.',
        'Failed executions return to pending rather than retrying silently. Every approval decision and every notable action is written to the workspace activity log.',
      ],
    },
    {
      kind: 'list',
      heading: 'Your responsibilities',
      intro: 'Some things stay with you because only you can decide them.',
      items: [
        'Use prospect lists, calling hours and recording settings that are lawful where you and your prospects are.',
        'Honour suppression lists and opt-outs in the data you import — the employees honour the ones in the workspace.',
        'Review provider data terms for the AI, speech and telephony accounts you connect.',
        'Keep the approvals queue staffed: the safety of the workforce depends on a person actually deciding.',
      ],
    },
    faq([
      { q: 'Does Eligoo see my AI provider keys?', a: 'Keys are stored server-side in your workspace so the platform can call the provider on your behalf. They are masked in the interface and never sent to the browser. You can rotate or remove them at any time.' },
      { q: 'Is my data used to train models?', a: 'Eligoo does not train models on your workspace data. Traffic to your AI provider goes under your own account, so the provider’s own terms govern that traffic.' },
      { q: 'Where is my data stored?', a: 'On encrypted disks at our hosting provider, in a workspace that is separate from other customers’. Nightly backups are kept for seven days.' },
      { q: 'Can I get my data deleted?', a: 'Yes. Ask us to delete the workspace and we remove it; backups expire on their seven-day cycle.' },
      { q: 'Do you hold any security certifications?', a: 'Not at this time. We describe what we do rather than claim a certification we do not hold. If your procurement needs a questionnaire answered, talk to us.' },
      { q: 'Are calls recorded?', a: 'Only if you enable recording. Recordings and transcripts are stored in your workspace. Consent requirements vary by jurisdiction and are your responsibility.' },
    ]),
    related([LINKS.pricing, LINKS.integrations, { label: 'OpenAI integration', href: '/integrations/openai/' }, { label: 'Anthropic integration', href: '/integrations/anthropic/' }, LINKS.aiEmployees, { label: 'Privacy policy', href: '/p/privacy' }, { label: 'Terms of service', href: '/p/terms' }]),
    cta('Questions about security?', 'Talk to the team about how a workspace is set up, what is stored, and what an employee can and cannot do.', { label: 'See pricing', href: '/pricing/' }),
  ],
  breadcrumb: [HOME],
  schema: ['FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
