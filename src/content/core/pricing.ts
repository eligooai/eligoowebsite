import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/pricing/',
  title: 'Pricing',
  eyebrow: 'Plans and credits',
  metaTitle: 'Eligoo Pricing — AI Workforce Plans, Credits and Top-Up Packs',
  metaDescription: 'Eligoo plans are priced per workspace and include a monthly credit allowance. Model usage runs on your own AI accounts. See live plans, what credits cover, top-up packs and the free trial.',
  primaryKeyword: 'AI employee pricing',
  secondaryKeywords: ['AI workforce pricing', 'AI employee cost', 'AI agent platform pricing', 'AI voice agent pricing'],
  answer: 'Eligoo is priced per workspace, not per user. Each plan includes a set of AI employees and a monthly allowance of credits that pays for what they do; model calls run on your own AI provider account so those costs stay with your provider. Plans below are live from the platform.',
  hero: { primary: { label: 'Start free trial', href: '/app/sign-up?plan=plan_trial' }, secondary: { label: 'Talk to us', href: 'https://calendly.com/eligooai/30min' } },
  sections: [
    { kind: 'pricing', heading: 'Plans', intro: 'Every plan includes Atlas. Choose by how many employees you need and how much work they will do each month.' },
    {
      kind: 'features',
      heading: 'What credits pay for',
      intro: 'Credits are one balance that every kind of work draws from. The rate for each is set on the platform and shown in your workspace.',
      items: [
        { title: 'Model usage', text: 'Tokens the employees use with your connected AI provider, converted to credits at a platform rate. The provider bills you for the tokens themselves.', icon: 'brain' },
        { title: 'AI phone calls', text: 'Charged per minute of call time. Your telephony provider bills the carrier minutes separately.', icon: 'phone' },
        { title: 'Generated media', text: 'Images, video and audio Pixel produces through fal.ai, each at its own rate.', icon: 'image' },
        { title: 'Publishing', text: 'A small charge per channel each time Sage publishes a post.', icon: 'megaphone' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How billing works',
      paragraphs: [
        'A plan grants its credits at the start of every billing period. As employees work, usage draws the balance down; you can see the ledger in the workspace. When the balance falls under a tenth of the allowance you get a warning, and at zero the employees pause until credits arrive — from the next period, a top-up pack or a manual grant.',
        'Top-up packs are one-off purchases that add credits to the same balance and stack with any plan. Because model calls use your own provider keys, the provider’s invoice for tokens is separate from your Eligoo subscription; the same is true of telephony minutes and speech providers.',
        'The free trial gives you the platform with a starting credit balance and no card. Trial length and included credits are shown on the trial plan above.',
      ],
    },
    {
      kind: 'list',
      heading: 'What you need to bring',
      items: [
        'An AI provider account (OpenAI, Anthropic, Google Gemini, Groq or OpenRouter) — required for any employee to work.',
        'A mailbox (SMTP/IMAP) if Hook will send outreach.',
        'A telephony provider (Twilio, Telnyx, Plivo or Vobiz) and, for calls, speech and voice providers such as Deepgram and ElevenLabs.',
        'Social accounts, Google Workspace, Meta Ads, Apollo, Serper and fal.ai as the roles you hire require.',
      ],
    },
    faq([
      { q: 'Is pricing per user or per workspace?', a: 'Per workspace. Plans differ in the number of AI employees, the monthly credits and features such as calling, publishing, paid ads and team seats; the seats included are shown on each plan.' },
      { q: 'Do I pay for AI model usage twice?', a: 'No. Your provider bills you for tokens on your own account. Eligoo credits cover the platform side of the work at the rate shown in your workspace.' },
      { q: 'What happens when credits run out?', a: 'You get a warning below a tenth of the allowance. At zero, employees pause until the next period’s grant, a top-up pack or a manual grant. Nothing is deleted.' },
      { q: 'Do top-up credits expire?', a: 'Packs add to the same balance and stack with any plan. Terms for packs are shown on the pack itself when you buy it.' },
      { q: 'Can I change plans?', a: 'Yes. Upgrade or downgrade from the workspace billing page; the platform adjusts the credit grant from the next period.' },
      { q: 'Is there a free trial?', a: 'Yes — no card required. The trial plan above shows its length and starting credits.' },
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
