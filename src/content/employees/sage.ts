import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/sage/',
  title: 'Sage — AI Content & SEO Employee',
  eyebrow: 'AI employee · Content & Creative',
  metaTitle: 'Sage — AI Content & SEO Employee That Plans, Writes and Publishes | Eligoo',
  metaDescription: 'Sage is Eligoo’s AI content and SEO employee: it builds the content calendar, writes copy, does keyword research and briefs, publishes approved posts to your channels and reports organic performance.',
  primaryKeyword: 'AI content agent',
  secondaryKeywords: ['AI SEO agent', 'AI content automation', 'AI SEO automation', 'AI organic growth agent'],
  answer: 'Sage is Eligoo’s AI content and SEO employee. Working from Maven’s approved strategy and your brand voice, it builds the content calendar, writes social posts, website copy, newsletters and scripts, does SEO keyword research and briefs, publishes approved content to Instagram, Facebook Pages, Threads, LinkedIn and YouTube, and reports organic performance — with conversions, not followers, as its measure.',
  character: 'sage',
  sections: [
    {
      kind: 'prose',
      heading: 'What Sage does',
      paragraphs: [
        'Sage turns strategy into published content. Its input is Maven’s approved campaign strategy, your brand voice, audience needs, funnel stage, keywords, channel requirements, product facts, content history and performance data. It decides the content angle, format, call to action, publishing channel, posting schedule, copy variations and repurposing opportunities.',
        'Its actions cover the whole content operation: building the calendar, writing copy for social, website, newsletters, scripts and thought-leadership, doing keyword research and writing SEO briefs, repurposing across formats, scheduling approved posts, publishing authorised content and monitoring the organic response.',
        'Sage publishes only within approved topics, claims, channels and calendars. New product claims, customer stories, sensitive topics, reactive statements, crisis communication and brand-voice changes always require approval. Its KPI is qualified organic conversions per published asset, content-assisted pipeline, engagement from the target audience and first-pass approval rate — follower count is explicitly not a KPI.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Sage works',
      steps: [
        { title: 'Receives the brief', text: 'Maven’s strategy, messaging hierarchy and the campaign objective, plus your brand voice and approved claims.' },
        { title: 'Plans the calendar', text: 'Topics, formats, channels and schedule for the period, submitted for approval as one calendar.' },
        { title: 'Researches keywords', text: 'Keyword research and content briefs for pages and articles aligned to the calendar.' },
        { title: 'Writes', text: 'Posts, pages, newsletters and scripts to the brief and the voice; variations for testing.' },
        { title: 'Publishes', text: 'Approved posts go to the connected channels on schedule. Off-calendar posts wait for approval.' },
        { title: 'Reports', text: 'Organic performance by asset, with engagement from the target audience and content-assisted pipeline.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Tools and integrations Sage uses',
      items: [
        'Instagram, Facebook Pages, Threads, LinkedIn and YouTube connections for publishing.',
        'Serper for keyword and topic research.',
        'Google Workspace for documents, calendars and sheets.',
        'Pixel’s assets from the workspace media library.',
        'The AI model you assign it from your connected provider account.',
      ],
    },
    {
      kind: 'features',
      heading: 'Sample deliverables',
      items: [
        { title: 'Content calendar', text: 'The period’s topics, formats, channels and dates, ready to approve.', icon: 'calendar' },
        { title: 'Website copy and SEO briefs', text: 'Pages written to a keyword brief with on-page recommendations.', icon: 'globe' },
        { title: 'Social posts', text: 'Channel-specific posts with variations, scheduled and published once approved.', icon: 'megaphone' },
        { title: 'Newsletters and scripts', text: 'Email newsletters, video and call scripts in your voice.', icon: 'pen' },
        { title: 'Repurposed content', text: 'One long piece turned into posts, a newsletter and a script.', icon: 'layers' },
        { title: 'Organic performance report', text: 'Conversions and target-audience engagement per asset.', icon: 'chart' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'How Sage hands off to teammates',
      stages: [
        { label: 'Maven', owner: 'maven', detail: 'Strategy and messaging in' },
        { label: 'Sage', owner: 'sage', detail: 'Calendar, copy, SEO briefs' },
        { label: 'Pixel', owner: 'pixel', detail: 'Creative for each post' },
        { label: 'Sage', owner: 'sage', detail: 'Publishes approved posts' },
        { label: 'Hook', owner: 'hook', detail: 'Uses Sage’s outreach copy and scripts' },
        { label: 'Ledger', owner: 'ledger', detail: 'Content-assisted pipeline' },
      ],
    },
    employees(['maven', 'pixel', 'hook', 'ledger', 'atlas'], 'Works with'),
    pricingPointer('Sage'),
    faq([
      { q: 'Can Sage post to my social accounts?', a: 'Yes, to Instagram, Facebook Pages, Threads, LinkedIn and YouTube through connections you authorise. Posts within the approved calendar publish on schedule; anything off-calendar waits for approval.' },
      { q: 'Does Sage make changes to my website?', a: 'It writes copy and SEO briefs and delivers them as documents. It does not edit your website directly.' },
      { q: 'How does it keep to our brand voice?', a: 'Brand voice and approved claims are part of its input. Brand-voice changes, new claims, customer stories and sensitive topics always come to you first.' },
      { q: 'Why is follower count not a KPI?', a: 'Followers can be bought, irrelevant or commercially useless. Sage is measured on qualified organic conversions per asset, content-assisted pipeline and engagement from the target audience.' },
      { q: 'Who makes the images and video?', a: 'Pixel. Sage briefs Pixel from the calendar and attaches the assets to the post.' },
    ]),
    related([LINKS.marketing, LINKS.maven, LINKS.pixel, { label: 'Content creation use case', href: '/use-cases/content-creation/' }, { label: 'AI SEO use case', href: '/use-cases/seo/' }, { label: 'Social media use case', href: '/use-cases/social-media/' }, { label: 'LinkedIn integration', href: '/integrations/linkedin/' }, { label: 'YouTube integration', href: '/integrations/youtube/' }]),
    cta('Hire Sage', 'Approve a calendar and let Sage plan, write and publish within it.'),
  ],
  breadcrumb: CRUMBS.employees,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
