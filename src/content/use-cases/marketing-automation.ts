import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/marketing-automation/',
  title: 'AI Marketing Automation',
  eyebrow: 'Use cases · Marketing automation',
  metaTitle: 'AI Marketing Automation — Strategy, Content, Creative, Publishing and Paid with AI Employees | Eligoo',
  metaDescription: 'AI marketing automation with Eligoo: Maven sets the strategy, Sage writes and publishes, Pixel produces creative, Boost plans paid campaigns, and Ledger reports attribution. Every launch is approved by a person.',
  primaryKeyword: 'AI marketing automation',
  secondaryKeywords: ['AI marketing automation platform', 'AI marketing agent', 'AI marketing team', 'automated B2B marketing', 'AI marketing employee', 'AI marketing automation for small business'],
  answer: 'AI marketing automation is marketing run by AI employees rather than by a stack of tools waiting for a person: strategy and messaging, a content calendar, creative production, publishing, paid campaign planning and attribution reporting, each owned by an employee and handed on to the next. In Eligoo that is Maven, Sage, Pixel, Boost and Ledger, coordinated by Atlas, with a person approving calendars and launches.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'Marketing automation tools automate steps — a scheduled post, a triggered email — but somebody still has to decide what to say, write it, design it and look at the numbers. In a small B2B company that somebody is the founder, so the tools sit half-configured and the marketing happens in bursts before a trade show.',
        'What is missing is not another tool but the people who would operate it: a strategist, a writer, a designer, a paid-media specialist and an analyst, working from one plan.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles marketing automation',
      steps: [
        { title: 'Maven sets the strategy', text: 'Market research with web search, positioning, a messaging hierarchy, segment briefs, a channel plan and a backlog of hypotheses to test.' },
        { title: 'Sage plans and writes', text: 'A content calendar with posts, articles, newsletters and website copy drafted from your material; SEO briefs for the pages that should exist.' },
        { title: 'Pixel produces the creative', text: 'Images, video, edits, captions and per-platform sizes for organic content, and a creative test matrix of variants for paid.' },
        { title: 'Sage publishes; Boost proposes paid', text: 'Approved posts publish to connected platforms. Boost prepares a paid plan, audience specs, budget proposal and an approval package for Meta Ads; launches, budget changes and pauses are approved by you.' },
        { title: 'Ledger reports; Atlas adjusts', text: 'Attribution, funnel metrics and organic and paid performance in one report. Atlas turns the findings into the next week’s plan and assigns it.' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'The marketing chain',
      stages: [
        { label: 'Research and positioning', owner: 'maven' },
        { label: 'Calendar and briefs', owner: 'sage' },
        { label: 'Creative', owner: 'pixel' },
        { label: 'Approval', detail: 'Calendar and launches confirmed' },
        { label: 'Publish', owner: 'sage', detail: 'Connected platforms' },
        { label: 'Paid', owner: 'boost', detail: 'Meta Ads, approval-gated' },
        { label: 'Attribution', owner: 'ledger' },
        { label: 'Next plan', owner: 'atlas' },
      ],
    },
    {
      kind: 'features',
      heading: 'What is automated',
      items: [
        { title: 'Strategy and messaging', text: 'Research-backed positioning and a messaging hierarchy every piece follows.', icon: 'brain' },
        { title: 'Content calendar', text: 'Planned, drafted and approved before the period starts.', icon: 'calendar' },
        { title: 'Creative production', text: 'Images and video to spec, ad variants for testing.', icon: 'image' },
        { title: 'Publishing', text: 'Direct to LinkedIn, Instagram, Facebook Pages, Threads and YouTube.', icon: 'globe' },
        { title: 'Paid campaign planning', text: 'Audience specs, test matrix, budget proposal and approval package for Meta Ads; Google and LinkedIn Ads at planning level only.', icon: 'megaphone' },
        { title: 'Attribution and reporting', text: 'Which channel and message produced leads and meetings, with evidence.', icon: 'chart' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a product launch for an industrial supplier',
      scenario: 'An industrial supplier is launching a new product range and has a brochure, a data sheet and no marketing team.',
      steps: [
        'Maven researches the competing ranges, writes the positioning for the launch and picks two segments to lead with.',
        'Sage builds a six-week calendar: a launch page, three articles, a newsletter, and posts per channel, all drafted from the data sheet and brochure.',
        'Pixel produces product imagery and a short launch video, plus a set of ad variants.',
        'The calendar is approved and published on schedule. Boost proposes a modest Meta Ads test with the variants; the owner approves the budget.',
        'Ledger reports enquiries by source; Atlas moves the following weeks’ effort toward the segment and channel that produced them.',
      ],
      outcome: 'The launch runs on schedule across every channel from one plan, and the company knows which segment and message brought the enquiries.',
    },
    employees(['maven', 'sage', 'pixel', 'boost', 'ledger', 'atlas'], 'AI employees involved', undefined, {
      maven: 'Research, positioning, channel plan, hypotheses.',
      sage: 'Calendar, copy, SEO briefs, publishing, organic report.',
      pixel: 'Images, video, ad variants.',
      boost: 'Paid plan and approval-gated Meta Ads management (optional).',
      ledger: 'Attribution and funnel reporting.',
      atlas: 'Weekly plan and assignments.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'LinkedIn, Instagram, Facebook Pages, Threads and YouTube for publishing.',
        'Meta Ads for paid campaigns (read insights; approval-gated changes and launches).',
        'fal.ai and ffmpeg for creative production.',
        'Google Workspace: Drive, Docs and Sheets for material, drafts and reports.',
        'Serper.dev and web search for market research.',
      ],
    },
    pricingPointer('the marketing team'),
    faq([
      { q: 'What does AI marketing automation include?', a: 'In Eligoo: research and positioning, a content calendar, writing, creative production, publishing to connected platforms, paid campaign planning and approval-gated Meta Ads management, and attribution reporting — each owned by an AI employee.' },
      { q: 'Is it a marketing automation tool or a team?', a: 'A team that uses tools. The employees decide what to make within the strategy you approve, produce it, publish it and report on it. You approve the calendar and every launch.' },
      { q: 'Which ad platforms are supported?', a: 'Meta Ads has a live connector: Boost reads campaigns and insights and makes approved changes. Google Ads and LinkedIn Ads are supported at the planning level only; there is no connector for them today.' },
      { q: 'Can it run email marketing?', a: 'Sage writes newsletters and Hook sends approved sequences from your connected mailbox to enrolled contacts. Eligoo is not a bulk-newsletter platform; large-list newsletter sending is better done in a dedicated tool with Sage supplying the copy.' },
      { q: 'How does it measure results?', a: 'Sage produces an organic performance report; Boost reads paid insights; Ledger combines them with CRM data into attribution and funnel reports, each with the evidence behind the numbers.' },
      { q: 'Do I still need an agency?', a: 'For strategy, content, creative and paid planning at a small-company scale, the AI employees cover the work. For brand identity, large productions and specialist media buying, an agency still adds value. The comparison page discusses this in detail.' },
    ]),
    related([
      LINKS.marketing, LINKS.maven, LINKS.sage, LINKS.pixel, LINKS.boost,
      { label: 'Social media use case', href: '/use-cases/social-media/' },
      { label: 'Content creation use case', href: '/use-cases/content-creation/' },
      { label: 'Meta Ads integration', href: '/integrations/meta-ads/' },
      { label: 'AI marketing workflow template', href: '/resources/templates/ai-marketing-workflow/' },
      { label: 'AI marketing agent vs agency', href: '/compare/ai-marketing-agent-vs-agency/' },
    ]),
    cta('Run marketing from one plan', `Approve Maven’s strategy, then the first calendar, and let the team produce and publish. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
