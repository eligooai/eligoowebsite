import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/instagram/',
  title: 'Instagram Integration — AI Social Publishing',
  eyebrow: 'Integrations · Publishing',
  metaTitle: 'Instagram Integration — AI Publishing of Approved Posts and Reels | Eligoo',
  metaDescription: 'Connect a professional Instagram account and let Sage publish approved image and video posts from your content calendar, with creative produced by Pixel. Direct OAuth connection, human approval first.',
  primaryKeyword: 'AI Instagram publishing',
  secondaryKeywords: ['AI agent post to Instagram', 'automate Instagram posts with AI', 'AI social media employee Instagram', 'AI generated Instagram content', 'Instagram content calendar AI'],
  answer: 'The Instagram integration connects a professional (business or creator) Instagram account to Eligoo so Sage can publish the image and video posts on your approved content calendar. Pixel generates and edits the creative, Sage writes the captions and publishes, and every item is either on an approved calendar or waiting for approval.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Instagram?',
      paragraphs: [
        'Instagram rewards regular, visual posting, which is exactly the kind of work a small team drops when it gets busy. Eligoo splits the job between two employees: Pixel makes the visuals — generated images and video through fal.ai, or edits of your own footage with ffmpeg — and Sage writes captions, arranges the calendar and publishes each approved item through the Instagram connection.',
        'The connection uses the Instagram API for professional accounts, with a token issued to your account when you sign in. Posts go straight from Eligoo to Instagram; there is no scheduling intermediary. Image posts and video posts are supported; Sage records the published item so it can be linked from the calendar and reported on.',
        'Only Sage publishes. Pixel’s output always goes to review first, and the calendar is approved before anything is scheduled, so a generated image never reaches your feed without a person having seen it.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Have a professional account', text: 'Instagram’s publishing API requires a business or creator account. Personal accounts must be converted first.' },
        { title: 'Sign in and grant publishing access', text: 'In workspace settings choose Instagram and sign in. The permissions requested cover publishing content to the account. The token is stored server-side and shown as connected.' },
        { title: 'Approve a calendar', text: 'Sage proposes posts with captions, hashtags, timings and creative briefs for Pixel. You approve or edit.' },
        { title: 'Pixel produces the creative', text: 'Images and video are generated or edited to the brief and appear in the assets library for review.' },
        { title: 'Sage publishes', text: 'Approved posts go out at their scheduled time. Results are logged, and Sage’s organic performance report feeds the next calendar.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Instagram',
      items: [
        'Read from Instagram: your professional account’s identity (to confirm the connection) and details of the posts Eligoo published, so they can be linked and reported.',
        'Written to Instagram: the image and video posts Sage publishes, with captions, at their approved times.',
        'Not read: your direct messages, comments, followers or story views. Eligoo does not manage engagement on Instagram.',
        'Your access token is stored server-side in your workspace, never returned to the browser, and revoked when you disconnect.',
        'Publishing runs under your Instagram account and is subject to Meta’s platform terms for the Instagram API.',
      ],
    },
    employees(['sage', 'pixel', 'maven'], 'Which AI employees use it', undefined, {
      sage: 'Writes captions, owns the calendar and publishes approved posts.',
      pixel: 'Generates and edits the images and video; never publishes.',
      maven: 'Sets the channel strategy the calendar follows.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Product visuals on a schedule', text: 'Generated or edited product shots and short videos published regularly.', icon: 'image' },
        { title: 'Reels from existing footage', text: 'Pixel trims, resizes and captions your own clips; Sage publishes them as video posts.', icon: 'sparkles' },
        { title: 'Campaign tie-ins', text: 'Organic posts aligned with what Boost runs in Meta Ads and what Sage publishes elsewhere.', icon: 'megaphone' },
        { title: 'Performance reporting', text: 'What was published and what to do differently, in a monthly report.', icon: 'chart' },
      ],
    },
    pricingPointer('publishing'),
    faq([
      { q: 'Can an AI agent post to Instagram for my business?', a: 'Yes. Connect a professional Instagram account and Sage publishes the posts on your approved calendar.' },
      { q: 'Does it work with a personal Instagram account?', a: 'No. Instagram’s publishing API is limited to business and creator accounts. Convert the account in Instagram settings first.' },
      { q: 'Will AI-generated images be posted without me seeing them?', a: 'No. Pixel’s creative goes to review and the calendar is approved before publishing. Sage only publishes what is on the approved calendar.' },
      { q: 'Can Eligoo reply to comments or DMs?', a: 'No. The connection is for publishing. Engagement stays with your team.' },
      { q: 'Does publishing cost extra?', a: 'No. Publishing is included on plans that list it; there are no credits or per-post charges. Model usage for the captions runs on your own AI key and is billed by the provider.' },
    ]),
    related([
      LINKS.marketing, LINKS.sage, LINKS.pixel,
      { label: 'Social media use case', href: '/use-cases/social-media/' }, { label: 'Content creation use case', href: '/use-cases/content-creation/' },
      { label: 'Facebook Pages integration', href: '/integrations/facebook-pages/' }, { label: 'Threads integration', href: '/integrations/threads/' }, { label: 'fal.ai integration', href: '/integrations/fal-ai/' },
    ]),
    { kind: 'sources', items: [{ label: 'Instagram Platform documentation', href: 'https://developers.facebook.com/docs/instagram-platform' }] },
    cta('Give Instagram a steady feed', `Connect the account, approve a calendar, and let Pixel and Sage do the rest. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
