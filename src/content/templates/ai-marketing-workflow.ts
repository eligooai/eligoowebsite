import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/templates/ai-marketing-workflow/',
  title: 'AI Marketing Workflow Template',
  eyebrow: 'Templates',
  metaTitle: 'AI Marketing Workflow Template — Research, Positioning, Calendar, Content, Creative, Publishing | Eligoo',
  metaDescription: 'A copyable AI marketing workflow: Maven researches and positions, Sage plans and writes the calendar, Pixel produces the creative, Sage publishes approved posts and reports. Setup steps, approvals and KPI.',
  primaryKeyword: 'AI marketing workflow',
  secondaryKeywords: ['AI marketing workflow template', 'AI content marketing workflow', 'AI social media workflow', 'marketing automation workflow', 'AI content calendar', 'AI marketing process'],
  answer: 'This workflow takes a marketing objective from market research to published content and a performance report. Maven researches the market and sets positioning and messaging, Sage turns it into a content calendar and writes the posts, Pixel produces the images and video, Sage publishes the approved calendar to your connected channels, and Boost — optionally — prepares a paid plan for approval.',
  sections: [
    {
      kind: 'prose',
      heading: 'When to use this template',
      paragraphs: [
        'Use it when marketing is inconsistent because it depends on whoever has a spare hour: posts go out in bursts, the message drifts, and nobody knows what worked. It suits a business with one marketing person who should be deciding rather than producing, or a founder who has been doing the marketing alone.',
        'The template is organic-first. The paid stage is optional and only covers Meta Ads today; Google and LinkedIn Ads can be planned by Boost but not executed.',
      ],
    },
    {
      kind: 'workflow',
      heading: 'The workflow',
      stages: [
        { label: 'Set the objective', owner: 'atlas', detail: 'Goal and timeframe; tasks for Maven, Sage and Pixel' },
        { label: 'Research and position', owner: 'maven', detail: 'Market research, positioning, messaging hierarchy, channel plan, hypothesis backlog' },
        { label: 'Plan the calendar', owner: 'sage', detail: 'Content calendar by channel, SEO keyword research and briefs' },
        { label: 'Write', owner: 'sage', detail: 'Posts, website copy, newsletters, scripts' },
        { label: 'Produce creative', owner: 'pixel', detail: 'Images, video, ad variants, thumbnails, captions' },
        { label: 'Publish the approved calendar', owner: 'sage', detail: 'Instagram, Facebook Pages, Threads, LinkedIn, YouTube' },
        { label: 'Paid plan (optional)', owner: 'boost', detail: 'Audiences, creative test matrix, budget proposal, approval package' },
        { label: 'Report', owner: 'sage', detail: 'Organic performance report; Ledger adds attribution' },
      ],
    },
    {
      kind: 'steps',
      heading: 'Set it up in Eligoo',
      steps: [
        { title: 'Connect your channels', text: 'Instagram, Facebook Pages, Threads, LinkedIn and YouTube connect directly over OAuth. Connect fal.ai for image and video generation, an AI provider account for the models and, for the paid stage, your Meta Ads account.' },
        { title: 'Give Atlas the objective', text: 'What you want marketing to achieve this quarter, for whom, on which channels. Atlas plans and creates the tasks.' },
        { title: 'Approve Maven’s positioning and channel plan', text: 'Maven researches your market with web search and proposes positioning, a messaging hierarchy and which channels deserve effort. Approve it — everything Sage writes inherits it.' },
        { title: 'Approve the content calendar', text: 'Sage proposes a calendar by channel, with SEO briefs for the website pieces. Approving the calendar is what lets Sage publish without asking for every post.' },
        { title: 'Review drafts and creative', text: 'Sage’s posts and Pixel’s images and video arrive on the board for review. Pixel never publishes; Sage publishes only what is on the approved calendar.' },
        { title: 'Let publishing run', text: 'Approved posts publish on schedule to the connected channels. Anything outside the calendar — a reactive post, a change of message — waits in the approvals queue.' },
        { title: 'Optionally approve a paid package from Boost', text: 'Boost prepares audiences, a creative test matrix and a budget proposal. Launching, pausing, and every budget or bid change is an approval.' },
        { title: 'Read the performance report', text: 'Sage reports organic performance by channel and piece; Maven updates the hypothesis backlog; Atlas adjusts the next month’s plan.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Approval points',
      items: [
        'Positioning, messaging hierarchy and channel plan.',
        'The content calendar (once approved, posts on it publish without further approval).',
        'Any post outside the approved calendar.',
        'Every paid action: launch, pause or activate, budget and bid changes.',
        'Website copy before it goes live, if you publish it yourself.',
      ],
    },
    {
      kind: 'list',
      heading: 'Inputs you need',
      items: [
        'The objective and the audience you want to reach.',
        'What you sell, what makes it different, and any proof you can genuinely offer.',
        'Brand basics: tone, colours, logo, any rules on what not to say.',
        'Access to the social accounts and, for paid, the ad account.',
        'Existing content that has worked, if any, so Sage and Maven can learn from it.',
      ],
    },
    {
      kind: 'list',
      heading: 'Outputs and KPI',
      items: [
        'KPI: qualified enquiries attributed to marketing.',
        'Watch alongside: publishing consistency against the calendar, engagement by channel, organic traffic to the pages Sage wrote, cost per result on paid.',
        'A positioning document, messaging hierarchy and channel plan.',
        'A content calendar with SEO briefs, written posts and produced creative in the assets library.',
        'Published posts across the connected channels.',
        'A monthly organic performance report and, with Ledger, attribution to enquiries.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a freight forwarder that has never posted consistently',
      scenario: 'A freight forwarder with strong lanes to two regions has a LinkedIn page that is updated when someone remembers, and no idea whether it brings enquiries.',
      steps: [
        'Maven researches how exporters in the two regions choose forwarders and proposes positioning around lane expertise and documentation reliability, with LinkedIn and YouTube as the channels.',
        'Sage builds a monthly calendar: short lane updates, a documentation explainer series and two website pages targeting the search terms exporters use.',
        'Pixel produces route visuals and thumbnail variants; Sage writes the posts and the pages; the owner approves the calendar and the first month’s drafts.',
        'Publishing runs on schedule. A reactive post about a port disruption is proposed mid-month and waits for approval because it is outside the calendar.',
        'Sage’s report shows which explainers drew enquiries; Maven moves the weaker topics to the backlog and proposes the next month’s calendar.',
      ],
      outcome: 'A consistent presence on two channels, website pages ranking for the terms exporters search, and a report that ties enquiries back to specific pieces.',
    },
    faq([
      { q: 'Which channels can Sage publish to?', a: 'Instagram, Facebook Pages, Threads, LinkedIn and YouTube, through direct OAuth connections. YouTube uploads include title, description, privacy and thumbnail.' },
      { q: 'Does anything publish without my approval?', a: 'Only posts on the calendar you approved. Anything outside it waits in the approvals queue. Pixel never publishes; Boost never launches or changes spend without approval.' },
      { q: 'Can I run this without paid advertising?', a: 'Yes. The paid stage is optional and Boost is an optional employee. The organic workflow is complete without it.' },
      { q: 'How is creative produced?', a: 'Pixel generates and edits images and video with fal.ai and uses ffmpeg for trims, resizes, captions and thumbnails. Everything lands in the assets library for review.' },
      { q: 'How do I know whether marketing is working?', a: 'Sage reports organic performance by channel and piece; Ledger attributes enquiries to sources. The KPI is qualified enquiries, not followers.' },
    ]),
    related([
      LINKS.marketing, LINKS.maven, LINKS.sage, LINKS.pixel, LINKS.boost,
      { label: 'Social media use case', href: '/use-cases/social-media/' }, { label: 'Content creation use case', href: '/use-cases/content-creation/' }, { label: 'SEO use case', href: '/use-cases/seo/' },
      { label: 'Meta Ads integration', href: '/integrations/meta-ads/' }, { label: 'fal.ai integration', href: '/integrations/fal-ai/' },
      { label: 'AI marketing agent vs agency', href: '/compare/ai-marketing-agent-vs-agency/' },
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'AI follow-up workflow template', href: '/resources/templates/ai-follow-up-workflow/' },
    ]),
    cta('Run marketing on a calendar you approved once', 'Connect your channels, approve the positioning and the calendar, and let Sage and Pixel do the producing. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.templates,
  schema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
