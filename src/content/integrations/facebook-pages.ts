import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/facebook-pages/',
  title: 'Facebook Pages Integration — AI Social Publishing',
  eyebrow: 'Integrations · Publishing',
  metaTitle: 'Facebook Pages Integration — AI Social Publishing to Your Page | Eligoo',
  metaDescription: 'Connect your Facebook Page over OAuth and let Sage publish approved posts on schedule, with creative from Pixel. Posts outside the approved calendar wait for a person; Eligoo never posts on its own.',
  primaryKeyword: 'AI Facebook Page publishing',
  secondaryKeywords: ['AI agent post to Facebook Page', 'automate Facebook posts with AI', 'AI social media employee Facebook', 'Facebook Page scheduling AI', 'AI content calendar Facebook'],
  answer: 'The Facebook Pages integration connects a Page you manage to Eligoo over Facebook Login, so Sage — the AI content and SEO employee — can publish posts from the approved content calendar directly to it. Pixel makes the images and video, Sage writes and publishes, and anything not already on the approved calendar waits in the approvals queue.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Facebook Pages?',
      paragraphs: [
        'A Facebook Page is usually the first social channel a small business has and the one most often neglected. Eligoo treats it as a publishing destination: Sage plans a content calendar, writes the posts, pairs them with creative from Pixel, and — once you approve the calendar — publishes each post at its scheduled time through the Page connection.',
        'The connection is direct, from Eligoo to Facebook, with a token issued to your Page when you sign in. There is no third-party scheduling tool between them. Sage can publish text, image and video posts and reads back the post ID so the published item is linked from the calendar and the activity log.',
        'Sage is the only employee that publishes. Pixel produces the creative but never posts; Maven sets the strategy; Boost works in Meta Ads, which is a separate connection for paid campaigns.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Sign in with Facebook', text: 'In workspace settings choose Facebook Pages and sign in with an account that has admin access to the Page. Facebook shows the permissions Eligoo asks for — managing and publishing to the Page.' },
        { title: 'Choose the Page', text: 'Select which Page (or Pages) this workspace may publish to. The Page token is stored server-side and shown as connected.' },
        { title: 'Approve a content calendar', text: 'Sage proposes a calendar with posts, timings and creative briefs. You approve it, edit it, or send items back.' },
        { title: 'Sage publishes on schedule', text: 'Each approved post is published at its time with the image or video Pixel produced. The result and the post link are recorded in the activity log.' },
        { title: 'Performance is reported', text: 'Sage’s organic performance report covers what was published and what to change in the next calendar.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Facebook Pages',
      items: [
        'Read from Facebook: the list of Pages your account manages (to let you choose), and basic details of published posts so they can be linked from the calendar.',
        'Written to Facebook: the posts Sage publishes — text, images, video — at their scheduled time. Nothing is written until the calendar or the individual post is approved.',
        'Not read: your Page’s messages, comments, followers, or ad accounts. Ad data belongs to the separate Meta Ads connection.',
        'Your Page access token is stored server-side in your workspace, never returned to the browser, and revoked when you disconnect the Page or remove the app in Facebook settings.',
        'Publishing runs under your Facebook account and is subject to Meta’s platform terms and your Page’s policies.',
      ],
    },
    employees(['sage', 'pixel', 'maven'], 'Which AI employees use it', undefined, {
      sage: 'Plans the calendar, writes the posts and publishes the approved ones to the Page.',
      pixel: 'Produces the images, video and captions each post uses; never publishes.',
      maven: 'Sets the positioning and channel plan the calendar follows; does not touch the connection.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'A consistent posting rhythm', text: 'A calendar of posts published on schedule instead of whenever someone remembers.', icon: 'calendar' },
        { title: 'Product and project updates', text: 'New products, completed installations, factory milestones — written and illustrated from a short brief.', icon: 'megaphone' },
        { title: 'Video posts', text: 'Pixel edits clips with ffmpeg — trims, captions, resizes — and Sage publishes them.', icon: 'image' },
        { title: 'Reporting', text: 'A monthly organic performance report that feeds the next calendar.', icon: 'chart' },
      ],
    },
    pricingPointer('publishing'),
    faq([
      { q: 'Can an AI agent post to my Facebook Page?', a: 'Yes. Connect the Page with Facebook Login and Sage publishes the posts on the approved calendar directly to it.' },
      { q: 'Will it post without my approval?', a: 'Only posts on an approved calendar are published automatically. Anything outside it — a reactive post, a change of timing — waits in the approvals queue.' },
      { q: 'Does Eligoo reply to comments or messages on the Page?', a: 'No. The connection is for publishing only; Eligoo does not read or answer comments or Messenger conversations.' },
      { q: 'Can I connect more than one Page?', a: 'Yes, as long as the signed-in account administers them. Each calendar item specifies its destination.' },
      { q: 'What happens if the Facebook token expires?', a: 'Publishing fails, the post returns to pending and Sage shows a Blocked status with the reason. Reconnect the Page from settings and the queued posts go out.' },
    ]),
    related([
      LINKS.marketing, LINKS.sage, LINKS.pixel,
      { label: 'Social media use case', href: '/use-cases/social-media/' }, { label: 'Content creation use case', href: '/use-cases/content-creation/' },
      { label: 'Instagram integration', href: '/integrations/instagram/' }, { label: 'Threads integration', href: '/integrations/threads/' }, { label: 'Meta Ads integration', href: '/integrations/meta-ads/' },
    ]),
    { kind: 'sources', items: [{ label: 'Meta for Developers documentation', href: 'https://developers.facebook.com/docs' }] },
    cta('Keep your Facebook Page alive without the chore', `Connect the Page, approve a calendar, and Sage publishes on schedule. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
