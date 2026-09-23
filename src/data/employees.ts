import type { EmployeeName } from '../content/types';

export interface Employee {
  id: EmployeeName;
  name: string;
  /** Public role title (the H1 suffix on the employee page). */
  role: string;
  /** Short role used in rosters and menus. */
  short: string;
  dept: string;
  tagline: string;
  /** Static render used before hydration, below 768px and with reduced motion. */
  image: string;
  imgW: number;
  imgH: number;
  /** Draco-compressed GLB; undefined = brand-mark treatment (Boost). */
  model?: string;
  href: string;
}

export const EMPLOYEES: Employee[] = [
  { id: 'atlas', name: 'Atlas', role: 'AI Business Operations Manager', short: 'Operations manager', dept: 'Leadership',
    tagline: 'Turns your objectives into an operating plan, assigns work to the other employees and reports back.',
    image: '/employees/atlas.webp', imgW: 374, imgH: 842, model: '/models/atlas.glb', href: '/ai-employees/atlas/' },
  { id: 'maven', name: 'Maven', role: 'AI Marketing Strategist', short: 'Marketing strategist', dept: 'Strategy',
    tagline: 'Researches your market and turns targets into positioning, messaging and campaign strategy.',
    image: '/employees/maven.webp', imgW: 298, imgH: 838, model: '/models/maven.glb', href: '/ai-employees/maven/' },
  { id: 'sage', name: 'Sage', role: 'AI Content & SEO Employee', short: 'Content & SEO', dept: 'Content & Creative',
    tagline: 'Plans, writes, optimises and publishes content across your channels within the calendar you approve.',
    image: '/employees/sage.webp', imgW: 326, imgH: 836, model: '/models/sage.glb', href: '/ai-employees/sage/' },
  { id: 'pixel', name: 'Pixel', role: 'AI Creative Production Agent', short: 'Creative production', dept: 'Content & Creative',
    tagline: 'Produces images, video and ad creative variants to spec, ready for review.',
    image: '/employees/pixel.webp', imgW: 320, imgH: 835, model: '/models/pixel.glb', href: '/ai-employees/pixel/' },
  { id: 'radar', name: 'Radar', role: 'AI Prospect Intelligence Agent', short: 'Prospect intelligence', dept: 'Lead Generation',
    tagline: 'Finds, researches, enriches and scores the accounts and contacts that fit your ideal customer profile.',
    image: '/employees/radar.webp', imgW: 332, imgH: 831, model: '/models/radar.glb', href: '/ai-employees/radar/' },
  { id: 'hook', name: 'Hook', role: 'AI Sales & Voice Agent', short: 'Sales & voice', dept: 'Outreach & Sales',
    tagline: 'Runs approved email sequences and AI phone calls, qualifies replies and books meetings.',
    image: '/employees/hook.webp', imgW: 324, imgH: 838, model: '/models/hook.glb', href: '/ai-employees/hook/' },
  { id: 'ledger', name: 'Ledger', role: 'AI Revenue Intelligence Agent', short: 'Revenue intelligence', dept: 'Revenue',
    tagline: 'Keeps CRM records clean and reports attribution, funnel metrics and forecasts with evidence.',
    image: '/employees/ledger.webp', imgW: 353, imgH: 839, model: '/models/ledger.glb', href: '/ai-employees/ledger/' },
  { id: 'boost', name: 'Boost', role: 'AI Paid Acquisition Specialist', short: 'Paid acquisition', dept: 'Advertising',
    tagline: 'Plans paid campaigns, prepares approval packages and manages approved Meta Ads spend within stop rules.',
    image: '/brand/mark-white-md.webp', imgW: 768, imgH: 413, href: '/ai-employees/boost/' },
];

export const byId = (id: EmployeeName) => EMPLOYEES.find((e) => e.id === id)!;
