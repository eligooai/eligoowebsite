import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/solutions/marketing/',
  title: 'AI Marketing Automation',
  eyebrow: 'Solutions · Marketing',
  metaTitle: 'AI Marketing Automation — Strategy, Content, SEO and Creative by AI Employees | Eligoo',
  metaDescription: 'Eligoo automates marketing with an AI marketing team: Maven sets strategy, Sage plans, writes and publishes content, Pixel produces creative, Boost plans paid campaigns — within a calendar you approve.',
  primaryKeyword: 'AI marketing automation',
  secondaryKeywords: ['AI marketing platform', 'AI marketing agents', 'AI marketing team', 'AI marketing employee', 'AI content automation', 'AI social media automation', 'AI SEO automation'],
  answer: 'AI marketing automation in Eligoo means an AI marketing team rather than a scheduling tool: Maven researches the market and sets positioning and campaign strategy, Sage turns it into a content calendar, copy, SEO briefs and published posts, Pixel produces the creative, and Boost prepares paid campaigns for approval. You approve the calendar and the claims; the team does the volume.',
  character: 'maven',
  sections: [
    {
      kind: 'prose',
      heading: 'What is AI marketing automation?',
      paragraphs: [
        'Marketing automation tools schedule and send what a person has already written. AI marketing automation moves the judgement work — what to say to whom, which angle to test, which keyword to target, which creative variant to produce — into AI employees that decide within a strategy you approved.',
        'The distinction matters because most marketing bottlenecks are not in scheduling. They are in research that never gets done, calendars that slip, creative that waits on a designer, and reporting that measures followers instead of conversions. Eligoo assigns each of those to a role with a KPI that reflects business value.',
      ],
    },
    {
      kind: 'workflow',
      heading: 'How the AI marketing team works',
      stages: [
        { label: 'Market research', owner: 'maven', detail: 'Segments, competitors, signals, win/loss' },
        { label: 'Positioning and messaging', owner: 'maven', detail: 'Value proposition, messaging hierarchy' },
        { label: 'Campaign brief', owner: 'maven', detail: 'Objective, offer, channels, hypotheses' },
        { label: 'Content calendar', owner: 'sage', detail: 'Topics, formats, channels, schedule' },
        { label: 'Copy and SEO', owner: 'sage', detail: 'Posts, pages, newsletters, keyword briefs' },
        { label: 'Creative', owner: 'pixel', detail: 'Images, video, ad variants to spec' },
        { label: 'Publishing', owner: 'sage', detail: 'Approved posts to your channels' },
        { label: 'Paid plan', owner: 'boost', detail: 'Audiences, tests, budget for approval' },
        { label: 'Reporting', owner: 'ledger', detail: 'Organic and paid contribution to pipeline' },
      ],
    },
    {
      kind: 'features',
      heading: 'What the AI marketing team can do',
      items: [
        { title: 'Market and competitor research', text: 'Web research into segments, competitors and market signals, summarised into an opportunity brief.', icon: 'search' },
        { title: 'Positioning and campaign strategy', text: 'A positioning framework, messaging hierarchy, campaign brief, channel plan and hypothesis backlog.', icon: 'brain' },
        { title: 'Content calendar and copy', text: 'Social posts, website copy, newsletters and scripts written to the brief and brand voice.', icon: 'pen' },
        { title: 'SEO research and briefs', text: 'Keyword research, content briefs and on-page recommendations aligned to the calendar.', icon: 'globe' },
        { title: 'Creative production', text: 'Images and video generated and edited to platform specs, with variants for testing.', icon: 'image' },
        { title: 'Publishing to your channels', text: 'Instagram, Facebook Pages, Threads, LinkedIn and YouTube, within the approved calendar.', icon: 'megaphone' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: launching a new product line',
      scenario: 'An industrial equipment maker adds a product line and needs a campaign in market before a trade show.',
      steps: [
        'Maven researches the segment and competitors, proposes a positioning angle and writes the campaign brief with two hypotheses to test.',
        'You approve the brief and the claims. Sage builds a six-week calendar, writes the LinkedIn posts, a landing page and a newsletter, and produces SEO briefs for two pages.',
        'Pixel turns the product renders into social creatives, a short video and ad variants sized for each channel.',
        'Sage publishes the approved posts on schedule; a reactive post about a competitor announcement is drafted but waits for approval because it is off-calendar.',
        'Boost prepares a paid plan with audiences and a budget proposal; nothing launches until you approve it.',
        'Ledger reports organic engagement from the target audience and content-assisted pipeline, not follower counts.',
      ],
      outcome: 'The campaign is in market on time, every claim was approved before it went out, and the report tells you which hypothesis to double down on.',
    },
    employees(['maven', 'sage', 'pixel', 'boost', 'ledger', 'atlas'], 'The AI marketing team'),
    {
      kind: 'list',
      heading: 'Integrations the marketing team uses',
      items: [
        'Serper for web research; your connected AI provider for strategy and writing.',
        'Instagram, Facebook Pages, Threads, LinkedIn and YouTube for publishing.',
        'fal.ai for image and video generation, with editing in the workspace.',
        'Meta Ads for approved paid campaigns.',
        'Google Workspace for documents, sheets and calendars.',
      ],
    },
    pricingPointer('the marketing team'),
    {
      kind: 'prose',
      heading: 'AI marketing team vs an agency',
      paragraphs: [
        'An agency brings taste, relationships and accountability, and is the right choice for brand work, big creative ideas and anything that needs a person in the room. An AI marketing team is the right choice for volume and consistency — research that actually gets done, a calendar that does not slip, variants that get produced, reporting that arrives. Many businesses use both. The comparison page goes into the trade-offs.',
        FACTS.approvals,
      ],
    },
    faq([
      { q: 'Can AI employees publish to my social accounts?', a: 'Yes. Sage publishes approved posts to Instagram, Facebook Pages, Threads, LinkedIn and YouTube through connections you authorise. Posts outside the approved calendar wait for approval.' },
      { q: 'Who decides what gets said?', a: 'You approve positioning, claims and the calendar. Maven proposes; Sage writes within approved topics and claims. New product claims, customer stories, sensitive topics and reactive statements always come to you first.' },
      { q: 'Does it do SEO?', a: 'Sage does keyword research, writes content briefs and copy targeting them, and reports organic performance. It does not make technical changes to your website.' },
      { q: 'Can it run paid ads?', a: 'Boost plans campaigns and prepares approval packages. With Meta Ads connected it launches and manages approved campaigns within stop rules. Google and LinkedIn Ads are planning-only today.' },
      { q: 'What does it measure?', a: 'Qualified organic conversions per asset, content-assisted pipeline and engagement from the target audience. Follower count is deliberately not a KPI.' },
    ]),
    related([LINKS.maven, LINKS.sage, LINKS.pixel, LINKS.boost, { label: 'AI marketing agent vs agency', href: '/compare/ai-marketing-agent-vs-agency/' }, { label: 'AI marketing workflow template', href: '/resources/templates/ai-marketing-workflow/' }, { label: 'Social media use case', href: '/use-cases/social-media/' }, { label: 'AI SEO use case', href: '/use-cases/seo/' }, LINKS.sales, LINKS.industries]),
    cta('Hire an AI marketing team', 'Approve the strategy and the calendar; let Maven, Sage and Pixel do the volume.'),
  ],
  breadcrumb: CRUMBS.solutions,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
