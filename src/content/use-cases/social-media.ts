import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/social-media/',
  title: 'AI Social Media Automation',
  eyebrow: 'Use cases · Social media',
  metaTitle: 'AI Social Media Automation — Plan, Write, Design and Publish with AI Employees | Eligoo',
  metaDescription: 'AI social media automation with Eligoo: Sage plans and writes the calendar, Pixel produces the visuals, and approved posts publish to LinkedIn, Instagram, Facebook Pages, Threads and YouTube from one workspace.',
  primaryKeyword: 'AI social media automation',
  secondaryKeywords: ['AI social media management', 'AI social media posting', 'AI social media content', 'automated social media for B2B', 'AI social media agent', 'AI LinkedIn automation'],
  answer: 'AI social media automation means AI employees plan a content calendar, write the posts, produce the images and video, and publish on schedule to your connected accounts — with a person approving the calendar and anything outside it. In Eligoo, Sage plans, writes and publishes, Pixel produces the visuals, and Maven sets the strategy the calendar follows.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'B2B companies know they should post regularly and mostly do not. The founder writes something when there is time, an agency produces generic posts that sound like every other company, or a scheduling tool sits full of drafts nobody finished. Consistency is the hard part, and consistency is exactly what a team of people who also have other jobs cannot deliver.',
        'The second problem is substance. Industrial and B2B audiences respond to specific posts — a process, a project, a problem solved — and those need someone who understands the business to draft them from real material. Generic AI-generated posts make it worse, not better.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles social media',
      steps: [
        { title: 'Maven sets the direction', text: 'Positioning, messaging hierarchy and a channel plan: which platforms, which themes, what cadence, and what each channel is for.' },
        { title: 'Sage builds the calendar', text: 'A content calendar for the period with each post’s theme, channel, format and draft copy, written from your material — projects, products, people, opinions — not filler. You approve the calendar.' },
        { title: 'Pixel produces the visuals', text: 'Images, short videos, captions, thumbnails and resized variants per platform from your photos, renders and footage. Pixel never publishes; assets go to Sage.' },
        { title: 'Sage publishes on schedule', text: 'Approved posts publish to LinkedIn, Instagram, Facebook Pages, Threads and YouTube through direct connections. Publishing outside the approved calendar is an approval.' },
        { title: 'Sage reports organic performance', text: 'An organic performance report shows what was published and how it performed, and feeds the next calendar.' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'The social media chain',
      stages: [
        { label: 'Strategy', owner: 'maven', detail: 'Themes, channels, cadence' },
        { label: 'Calendar', owner: 'sage', detail: 'Posts drafted for approval' },
        { label: 'Visuals', owner: 'pixel', detail: 'Images, video, captions, sizes' },
        { label: 'Approval', detail: 'Calendar confirmed by a person' },
        { label: 'Publish', owner: 'sage', detail: 'Direct to connected accounts' },
        { label: 'Report', owner: 'sage', detail: 'Organic performance' },
      ],
    },
    {
      kind: 'features',
      heading: 'What you get',
      items: [
        { title: 'An approved calendar', text: 'Every post planned with channel, format and copy, reviewed before the month starts.', icon: 'calendar' },
        { title: 'Posts from real material', text: 'Drafts built from your projects, products and opinions; you supply the substance, Sage the consistency.', icon: 'pen' },
        { title: 'Platform-ready visuals', text: 'Images and video produced and resized per platform, with captions and thumbnails.', icon: 'image' },
        { title: 'Direct publishing', text: 'LinkedIn, Instagram, Facebook Pages, Threads and YouTube connected by OAuth; YouTube uploads carry title, description, privacy and thumbnail.', icon: 'globe' },
        { title: 'Approval on anything unplanned', text: 'A post that is not on the approved calendar waits in the approvals queue.', icon: 'shield' },
        { title: 'Organic performance report', text: 'What went out, how it performed and what to do next month.', icon: 'chart' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a machine builder’s LinkedIn and YouTube presence',
      scenario: 'A special-purpose machine builder has years of commissioning footage and photos on a shared drive and has posted twice in the last year.',
      steps: [
        'Maven proposes three themes — machines in operation, engineering decisions, the team — with LinkedIn as the main channel and YouTube for longer clips.',
        'Sage drafts a monthly calendar of posts from the footage and from short notes the engineers record; the managing director approves it in one sitting.',
        'Pixel trims and captions the footage into short clips, produces stills and thumbnails, and resizes everything per platform.',
        'Sage publishes on schedule to LinkedIn and uploads the longer clips to YouTube with titles and descriptions.',
        'The organic report at month end shows which theme drew the most engagement, and the next calendar leans into it.',
      ],
      outcome: 'The company posts every week with material that is specifically its own, the engineers spend minutes rather than hours on it, and the archive on the shared drive finally gets used.',
    },
    employees(['sage', 'pixel', 'maven'], 'AI employees involved', undefined, {
      sage: 'Calendar, copy, publishing, performance report.',
      pixel: 'Images, video, captions, thumbnails.',
      maven: 'Themes, channel plan, positioning.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'LinkedIn, Instagram, Facebook Pages, Threads and YouTube via direct OAuth connections.',
        'fal.ai for image and video generation; ffmpeg for trims, resizes, captions and thumbnails.',
        'Google Drive for source photos, footage and documents.',
        'Any language model from your connected AI provider accounts.',
      ],
    },
    pricingPointer('social publishing'),
    faq([
      { q: 'Can AI manage our social media accounts?', a: 'Sage plans, writes and publishes to your connected LinkedIn, Instagram, Facebook Pages, Threads and YouTube accounts within a calendar you approve. Strategy, review and anything unplanned stay with you.' },
      { q: 'Will the posts sound generic?', a: 'They are written from your material — projects, products, footage, opinions — and follow the positioning Maven wrote for you. The quality of what you supply sets the ceiling; Sage provides the consistency and structure.' },
      { q: 'Which platforms does Eligoo publish to?', a: 'LinkedIn, Instagram, Facebook Pages, Threads and YouTube, each through a direct connection you authorise. Other platforms are not supported at present.' },
      { q: 'Does it reply to comments and messages?', a: 'No. Eligoo publishes and reports; engagement on the platforms themselves stays with your team.' },
      { q: 'Can it produce the images and videos too?', a: 'Yes. Pixel generates and edits images and video, trims and captions footage, and produces thumbnails and per-platform sizes. Assets are stored in the workspace library for review.' },
      { q: 'What happens if we want to post something urgent?', a: 'Ask Sage in its chat; a post outside the approved calendar goes to the approvals queue and publishes as soon as a person confirms.' },
    ]),
    related([
      LINKS.marketing, LINKS.sage, LINKS.pixel, LINKS.maven,
      { label: 'Content creation use case', href: '/use-cases/content-creation/' },
      { label: 'LinkedIn integration', href: '/integrations/linkedin/' },
      { label: 'Instagram integration', href: '/integrations/instagram/' },
      { label: 'YouTube integration', href: '/integrations/youtube/' },
      { label: 'AI marketing workflow template', href: '/resources/templates/ai-marketing-workflow/' },
    ]),
    cta('Post every week without the scramble', 'Connect your channels, share your material, approve one calendar and let Sage and Pixel run it.'),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
