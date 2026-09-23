import type { PageContent } from '../types';
import { HOME, LINKS, cta, related } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/',
  title: 'AI Employee Use Cases',
  eyebrow: 'Use cases',
  metaTitle: 'AI Employee Use Cases — Lead Generation, Cold Calling, Appointments, Content, SEO, Support and More | Eligoo',
  metaDescription: 'Eleven things businesses hire Eligoo’s AI employees to do, from lead generation and cold calling to social media, SEO, customer support and business automation, each with the employees and workflow involved.',
  primaryKeyword: 'AI employee use cases',
  secondaryKeywords: ['AI agent use cases for business', 'AI automation use cases', 'AI sales use cases', 'AI marketing use cases', 'what can AI employees do'],
  answer: 'These pages start from a problem — the phone is not being answered, the list is stale, the website does not rank, quotes go quiet — and show which of Eligoo’s AI employees handle it, how the work flows between them and where a person approves. Each one is honest about what is covered and what is not.',
  sections: [
    {
      kind: 'prose',
      heading: 'Problems, not products',
      paragraphs: [
        'Most people do not search for an AI workforce; they search for a way to get cold calls made, appointments set or posts published. The use-case pages are organised around that intent. Each names the employees involved, the integrations actually used, a qualitative example and the questions people ask before they try it.',
        'Where a use case touches the outside world — sending, calling, publishing, spending — the page also says where approval sits. Where Eligoo’s coverage is limited, as with customer support, the page says so.',
      ],
    },
    {
      kind: 'directory',
      heading: 'Use cases',
      items: [
        { title: 'AI lead generation', text: 'Find, verify, score and qualify B2B leads that fit your profile.', href: '/use-cases/lead-generation/' },
        { title: 'AI cold calling', text: 'An AI voice agent dials an approved list, qualifies and books, on your own number.', href: '/use-cases/cold-calling/' },
        { title: 'AI appointment setting', text: 'Qualify by email or phone, offer a slot, create the calendar event and brief.', href: '/use-cases/appointment-setting/' },
        { title: 'AI social media automation', text: 'Plan, write, produce and publish to LinkedIn, Instagram, Facebook Pages, Threads and YouTube.', href: '/use-cases/social-media/' },
        { title: 'AI content creation', text: 'Website copy, posts, newsletters, scripts, images and video from your material.', href: '/use-cases/content-creation/' },
        { title: 'AI SEO automation', text: 'Keyword research, briefs, optimised pages and organic performance reporting.', href: '/use-cases/seo/' },
        { title: 'AI outbound sales', text: 'List, sequence, calls, qualification and booking run as one chain.', href: '/use-cases/outbound-sales/' },
        { title: 'AI customer support', text: 'Inbound calls answered and logged, routine emails handled, everything else escalated.', href: '/use-cases/customer-support/' },
        { title: 'AI marketing automation', text: 'Strategy, calendar, creative, publishing, paid planning and attribution from one plan.', href: '/use-cases/marketing-automation/' },
        { title: 'AI sales automation', text: 'Prospecting, follow-up, booking and CRM hygiene around your salespeople.', href: '/use-cases/sales-automation/' },
        { title: 'AI business automation', text: 'Objectives turned into an operating plan, delegated, reviewed and reported by Atlas.', href: '/use-cases/business-automation/' },
      ],
    },
    related([{ label: 'Solutions', href: '/solutions/' }, LINKS.industries, LINKS.aiEmployees, LINKS.templates, LINKS.glossary]),
    cta('Start with the problem you have', 'Pick a use case, hire the employees it needs, and add the rest of the team when you are ready.'),
  ],
  breadcrumb: [HOME],
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
