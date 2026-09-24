import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/pricing/',
  title: 'Pricing',
  eyebrow: 'Plans and your own AI keys',
  metaTitle: 'Eligoo Pricing — AI Workforce Subscription Plans, Bring Your Own AI Keys',
  metaDescription: 'Eligoo plans are a per-workspace platform subscription: AI employees, seats and features. Model usage runs on your own OpenAI, Anthropic, Gemini or OpenRouter key, billed by the provider with no markup. See live plans and the free trial.',
  primaryKeyword: 'AI employee pricing',
  secondaryKeywords: ['AI workforce pricing', 'AI employee cost', 'AI agent platform pricing', 'AI voice agent pricing'],
  answer: 'Eligoo is a platform subscription priced per workspace, not per user. Each plan includes a set of AI employees, team seats and features; there are no credits. Employees run on your own OpenAI, Anthropic, Gemini or OpenRouter API key, and the provider bills you for model usage directly with no markup. Plans below are live from the platform.',
  hero: { primary: { label: 'Start free trial', href: '/app/sign-up?plan=plan_trial' }, secondary: { label: 'Talk to us', href: 'https://calendly.com/eligooai/30min' } },
  sections: [
    { kind: 'pricing', heading: 'Plans', intro: 'Every plan includes Atlas. Choose by how many employees you need, how many people will work with them and which features you want switched on.' },
    {
      kind: 'features',
      heading: 'What a plan includes',
      intro: 'The subscription is the platform. Everything an employee does with it is covered by the plan; the only usage bill is the one your AI provider sends you.',
      items: [
        { title: 'AI employees', text: 'The number of employees on the plan, from one role up to all eight. Atlas is on every plan.', icon: 'brain' },
        { title: 'Team seats', text: 'How many people in your company can log in, chat with the employees and approve their work.', icon: 'phone' },
        { title: 'Features', text: 'AI calling, social publishing, paid ads (Boost) and meetings are switched on per plan and listed on each card.', icon: 'megaphone' },
        { title: 'Your own AI keys', text: 'Model usage runs on your OpenAI, Anthropic, Gemini or OpenRouter key, stored per workspace. The provider bills you directly, with no markup from Eligoo.', icon: 'image' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How billing works',
      paragraphs: [
        'You pay Eligoo a flat subscription per billing period for the plan you choose. There is no metering on the platform side: no credits, no balance to watch, nothing to top up. Employees keep working as long as the subscription is active and your AI key is valid.',
        'Model usage is billed by your AI provider on your own account, at the provider’s own rates and with no markup from Eligoo. You connect an OpenAI, Anthropic, Gemini or OpenRouter API key during onboarding; it is stored server-side in your workspace, never sent to the browser, and you can rotate or replace it at any time. Telephony minutes, speech providers, media generation and ad spend are likewise billed by those providers directly.',
        'The free trial gives you the platform with no card. Trial length is shown on the trial plan above; you bring your own AI key from day one.',
      ],
    },
    {
      kind: 'list',
      heading: 'What you need to bring',
      items: [
        'An AI provider API key (OpenAI, Anthropic, Google Gemini or OpenRouter) — required for any employee to work; model usage is billed to that account.',
        'A mailbox (SMTP/IMAP) if Hook will send outreach.',
        'A telephony provider (Twilio, Telnyx, Plivo or Vobiz) and, for calls, speech and voice providers such as Deepgram and ElevenLabs.',
        'Social accounts, Google Workspace, Meta Ads, Apollo, Serper and fal.ai as the roles you hire require.',
      ],
    },
    faq([
      { q: 'Is pricing per user or per workspace?', a: 'Per workspace. Plans differ in the number of AI employees, the team seats and features such as calling, publishing, paid ads and meetings; the seats included are shown on each plan.' },
      { q: 'Are there credits or usage charges from Eligoo?', a: 'No. The plan is a flat subscription. Model usage is billed by your AI provider on your own key, and Eligoo adds no markup on top of it.' },
      { q: 'Which AI providers can I use?', a: 'OpenAI, Anthropic, Google Gemini or OpenRouter. You add the key during onboarding; it is stored per workspace and can be changed at any time from the workspace settings.' },
      { q: 'What happens if my AI key stops working?', a: 'Employees pause and the workspace shows the provider error until you fix or replace the key. Nothing is deleted and your subscription is unaffected.' },
      { q: 'Can I change plans?', a: 'Yes. Upgrade or downgrade from the workspace billing page; the change applies from the next billing period.' },
      { q: 'Is there a free trial?', a: 'Yes — no card required. The trial plan above shows its length; you connect your own AI key to start.' },
      { q: 'What does a paid-ads employee cost?', a: 'Boost is included on plans that list the paid-ads feature. Ad spend itself is billed by Meta to your ad account, never through Eligoo.' },
    ]),
    related([LINKS.aiEmployees, LINKS.security, LINKS.integrations, LINKS.voice, LINKS.sales, { label: 'Refund policy', href: '/p/refunds' }, { label: 'Terms of service', href: '/p/terms' }]),
    cta('Start with the free trial', 'No card needed. Connect your AI account, hire a role and give it a task.'),
  ],
  breadcrumb: [HOME],
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
