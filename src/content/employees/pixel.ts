import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/pixel/',
  title: 'Pixel — AI Creative Production Agent',
  eyebrow: 'AI employee · Content & Creative',
  metaTitle: 'Pixel — AI Creative Production Agent for Images, Video and Ad Creative | Eligoo',
  metaDescription: 'Pixel is Eligoo’s AI creative production employee: it generates and edits images and video with fal.ai and ffmpeg, produces ad variants, thumbnails and channel-specific sizes, and never publishes on its own.',
  primaryKeyword: 'AI creative agent',
  secondaryKeywords: ['AI ad creative agent', 'AI creative automation', 'AI advertising creative', 'AI marketing creative'],
  answer: 'Pixel is Eligoo’s AI creative production employee. From an approved brief, Sage’s copy and your brand guidelines it generates and edits images, video and graphics, produces ad creatives and channel-specific resizes, runs visual quality checks and delivers production-ready assets with metadata. It creates and revises autonomously but never publishes and never alters your core brand identity.',
  character: 'pixel',
  sections: [
    {
      kind: 'prose',
      heading: 'What Pixel does',
      paragraphs: [
        'Pixel is the production side of creative. Its input is the approved creative brief, Sage’s copy, brand guidelines, product assets, format specifications, reference material and campaign requirements. It decides the visual treatment, composition, asset format, layout, motion treatment and which variants to produce for testing.',
        'Its actions are generating and editing images, videos, graphics and ad creatives; resizing to platform specifications; and running visual quality checks. Generation runs through fal.ai on your own account; editing — trims, resizes, concatenation, captions, audio, conversion, thumbnails — runs in the workspace.',
        'Pixel’s boundary is firm: it may not publish, alter core brand identity, use unlicensed material, imitate protected characters, deceptively modify product appearance or create a real person’s likeness without approval. Brand strategy belongs to Maven; Pixel produces.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Pixel works',
      steps: [
        { title: 'Receives the brief', text: 'From Sage’s calendar or Boost’s test matrix, with copy, format specs and references attached.' },
        { title: 'Plans the treatment', text: 'Composition, style within the brand guidelines, formats and the variants to produce.' },
        { title: 'Generates', text: 'Images and video through fal.ai; video returns as it finishes and is polled until ready.' },
        { title: 'Edits and resizes', text: 'Trims, captions, audio, thumbnails and channel-specific sizes in the workspace.' },
        { title: 'Checks and delivers', text: 'Visual quality checks, then assets land in the media library with metadata and editable sources, attached to the task.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Tools and integrations Pixel uses',
      items: [
        'fal.ai for image and video generation on your own account.',
        'The workspace media library with ffmpeg-based editing: trim, resize, concatenate, caption, add audio, convert, thumbnail.',
        'Brand guidelines and product assets you upload.',
        'The AI model you assign it for briefs and quality checks.',
      ],
    },
    {
      kind: 'features',
      heading: 'Sample deliverables',
      items: [
        { title: 'Production-ready assets', text: 'Images and video to spec, checked and named.', icon: 'image' },
        { title: 'Channel variations', text: 'The same creative sized for each platform.', icon: 'layers' },
        { title: 'Ad variants', text: 'A test matrix of creatives for Boost’s campaigns.', icon: 'megaphone' },
        { title: 'Thumbnails', text: 'For YouTube uploads and video posts.', icon: 'sparkles' },
        { title: 'Editable sources and metadata', text: 'So a person can pick up where Pixel stopped.', icon: 'database' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'How Pixel hands off to teammates',
      stages: [
        { label: 'Maven', owner: 'maven', detail: 'Brand direction and campaign brief' },
        { label: 'Sage', owner: 'sage', detail: 'Copy and calendar' },
        { label: 'Pixel', owner: 'pixel', detail: 'Assets and variants' },
        { label: 'Sage', owner: 'sage', detail: 'Publishes with the assets' },
        { label: 'Boost', owner: 'boost', detail: 'Ad variants into approved campaigns' },
      ],
    },
    employees(['sage', 'maven', 'boost', 'atlas'], 'Works with'),
    pricingPointer('Pixel'),
    faq([
      { q: 'Does Pixel publish what it makes?', a: 'No. Pixel produces; Sage publishes approved posts and Boost runs approved ads. Pixel never has publishing access.' },
      { q: 'Which generation models does it use?', a: 'Models available through fal.ai on your own account. Generated media draws credits at the platform rate, and fal.ai bills you directly.' },
      { q: 'Can it edit our existing footage and photos?', a: 'Yes. Upload assets to the workspace and Pixel can trim, resize, caption, add audio, convert and produce thumbnails.' },
      { q: 'Can it use a real person’s likeness or a licensed character?', a: 'Not without approval. Creating a real person’s likeness, imitating protected characters and using unlicensed material are outside its boundary.' },
      { q: 'How is Pixel measured?', a: 'First-pass creative approval rate, turnaround time, technical error rate and creative test win rate.' },
    ]),
    related([LINKS.marketing, LINKS.sage, LINKS.boost, LINKS.maven, { label: 'fal.ai integration', href: '/integrations/fal-ai/' }, { label: 'Content creation use case', href: '/use-cases/content-creation/' }, { label: 'Social media use case', href: '/use-cases/social-media/' }]),
    cta('Hire Pixel', 'Send a brief and brand guidelines; get production-ready assets and variants back in the media library.'),
  ],
  breadcrumb: CRUMBS.employees,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
