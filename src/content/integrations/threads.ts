import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/threads/',
  title: 'Threads Integration — AI Social Publishing',
  eyebrow: 'Integrations · Publishing',
  metaTitle: 'Threads Integration — AI Publishing of Approved Posts to Threads | Eligoo',
  metaDescription: 'Connect your Threads account and let Sage publish approved text and media posts from your content calendar. Direct OAuth connection to Threads, creative from Pixel, approval before anything goes out.',
  primaryKeyword: 'AI Threads publishing',
  secondaryKeywords: ['AI agent post to Threads', 'automate Threads posts', 'AI social media employee Threads', 'Threads content calendar AI', 'Threads API publishing'],
  answer: 'The Threads integration connects your Threads account to Eligoo so Sage can publish the text and media posts on your approved content calendar directly to Threads. It uses the official Threads API with a token issued to your account, and nothing is published that is not on an approved calendar or individually approved.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Threads?',
      paragraphs: [
        'Threads is a text-first channel, which suits Sage well: short takes, announcements, a founder’s point of view, and threads that expand on a longer article. Sage writes those posts as part of the same content calendar it runs for your other channels, adapting the copy to Threads rather than cross-posting the Instagram caption.',
        'The connection is direct to Threads through its API. Sage publishes text posts and posts with an image or video attached, records the published item, and includes Threads in the organic performance report. Pixel supplies any visuals; it never publishes.',
        'Because Threads is often the channel where a business is most candid, the approval gate matters: reactive posts that are not on the approved calendar wait for a person before they go out.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Sign in with Threads', text: 'In workspace settings choose Threads and sign in with the account to publish from. The permissions requested cover publishing to the account.' },
        { title: 'Connection is verified', text: 'Eligoo confirms the account identity, stores the token server-side and shows it as connected.' },
        { title: 'Approve a calendar', text: 'Sage proposes a set of Threads posts — timings, angles, any visuals — alongside your other channels. You approve or edit.' },
        { title: 'Sage publishes', text: 'Approved posts are published at their times. The post link is recorded in the activity log.' },
        { title: 'Report and iterate', text: 'Threads results appear in Sage’s organic performance report with recommendations for the next calendar.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Threads',
      items: [
        'Read from Threads: your account identity, and details of posts Eligoo published so they can be linked and reported.',
        'Written to Threads: the text and media posts Sage publishes at approved times.',
        'Not read: replies, mentions, followers or your feed. Eligoo does not manage engagement on Threads.',
        'Your access token is stored server-side in your workspace, never returned to the browser, and revoked on disconnect.',
        'Publishing runs under your Threads account and is subject to Meta’s Threads API terms.',
      ],
    },
    employees(['sage', 'pixel', 'maven'], 'Which AI employees use it', undefined, {
      sage: 'Writes Threads-native posts and publishes the approved ones.',
      pixel: 'Provides images or short video when a post calls for them.',
      maven: 'Defines the voice and the topics the calendar covers.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Founder point-of-view posts', text: 'Short, regular posts in your voice from an approved list of topics.', icon: 'pen' },
        { title: 'Article threads', text: 'A long piece Sage wrote for the website, broken into a Threads post series.', icon: 'layers' },
        { title: 'Launch and update posts', text: 'Announcements coordinated with the same item on Instagram, Facebook and LinkedIn.', icon: 'megaphone' },
        { title: 'Reporting', text: 'Threads included in the monthly organic report.', icon: 'chart' },
      ],
    },
    pricingPointer('publishing'),
    faq([
      { q: 'Can an AI agent post to Threads?', a: 'Yes. Connect your Threads account and Sage publishes approved posts through the official Threads API.' },
      { q: 'Does Eligoo cross-post the same text to every channel?', a: 'No. Sage writes each channel’s version. You can ask for the same message everywhere, but by default Threads copy is written for Threads.' },
      { q: 'Can Eligoo reply to people on Threads?', a: 'No. The connection is for publishing only.' },
      { q: 'What if a post needs to go out today and is not on the calendar?', a: 'Ask Sage in chat; the post is drafted and placed in the approvals queue, and publishes once you approve it.' },
      { q: 'What happens if the connection breaks?', a: 'Publishing fails, the post returns to pending and Sage shows a Blocked status. Reconnect from settings and the queue resumes.' },
    ]),
    related([
      LINKS.marketing, LINKS.sage,
      { label: 'Social media use case', href: '/use-cases/social-media/' }, { label: 'Content creation use case', href: '/use-cases/content-creation/' },
      { label: 'Instagram integration', href: '/integrations/instagram/' }, { label: 'Facebook Pages integration', href: '/integrations/facebook-pages/' }, { label: 'LinkedIn integration', href: '/integrations/linkedin/' },
    ]),
    { kind: 'sources', items: [{ label: 'Threads API documentation', href: 'https://developers.facebook.com/docs/threads' }] },
    cta('Show up on Threads every week', `Connect the account, approve a calendar, and Sage keeps it going. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
