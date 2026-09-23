/** Navigation and footer structure. Every href here is a registered page (or the platform). */
import { EMPLOYEES } from '../data/employees';

export interface NavLink { label: string; href: string; text?: string; }
export interface NavGroup { label: string; href: string; links: NavLink[]; }

export const PRODUCT: NavGroup = {
  label: 'Product', href: '/ai-employees/',
  links: [
    { label: 'AI employees', href: '/ai-employees/', text: 'Role-based AI workers with a KPI and an approval boundary' },
    { label: 'AI agents for business', href: '/ai-agents/', text: 'Agents that use tools and act on tasks' },
    { label: 'AI workforce', href: '/ai-workforce/', text: 'Multiple employees coordinated around objectives' },
    { label: 'AI business automation', href: '/ai-automation/', text: 'Processes automated with judgement and approvals' },
    { label: 'Integrations', href: '/integrations/', text: 'Your AI accounts, telephony, channels and data' },
    { label: 'Security', href: '/security/', text: 'BYOK, per-workspace data, approvals, backups' },
  ],
};

export const SOLUTIONS: NavGroup = {
  label: 'Solutions', href: '/solutions/',
  links: [
    { label: 'Marketing', href: '/solutions/marketing/', text: 'AI marketing automation' },
    { label: 'Sales', href: '/solutions/sales/', text: 'AI sales agent' },
    { label: 'Voice', href: '/solutions/voice/', text: 'AI voice agent' },
    { label: 'Outbound', href: '/solutions/outbound/', text: 'AI outbound sales' },
    { label: 'Lead generation', href: '/solutions/lead-generation/', text: 'AI lead generation' },
    { label: 'Customer support', href: '/solutions/customer-support/', text: 'AI customer support agent' },
    { label: 'Operations', href: '/solutions/operations/', text: 'AI operations automation' },
    { label: 'Revenue', href: '/solutions/revenue/', text: 'AI revenue intelligence' },
  ],
};

export const EMPLOYEE_GROUP: NavGroup = {
  label: 'Employees', href: '/ai-employees/',
  links: EMPLOYEES.map((e) => ({ label: e.name, href: e.href, text: e.role })),
};

export const INDUSTRIES: NavGroup = {
  label: 'Industries', href: '/industries/',
  links: [
    { label: 'Manufacturing', href: '/industries/manufacturing/' },
    { label: 'Packaging', href: '/industries/packaging/' },
    { label: 'Solar', href: '/industries/solar/' },
    { label: 'Freight forwarding', href: '/industries/freight-forwarding/' },
    { label: 'Industrial automation', href: '/industries/industrial-automation/' },
  ],
};

export const RESOURCES: NavGroup = {
  label: 'Resources', href: '/resources/',
  links: [
    { label: 'Blog', href: '/resources/blog/', text: 'Articles and product updates' },
    { label: 'Guides', href: '/resources/guides/', text: 'Long-form explainers' },
    { label: 'Glossary', href: '/resources/glossary/', text: 'Definitions, answer-first' },
    { label: 'Research', href: '/resources/research/', text: 'Original reports and methodology' },
    { label: 'Templates', href: '/resources/templates/', text: 'Workflow templates' },
    { label: 'Use cases', href: '/use-cases/', text: 'Problem-first pages' },
    { label: 'Comparisons', href: '/compare/', text: 'Balanced comparisons' },
  ],
};

export const NAV_GROUPS: NavGroup[] = [PRODUCT, SOLUTIONS, EMPLOYEE_GROUP, INDUSTRIES, RESOURCES];
export const PRICING: NavLink = { label: 'Pricing', href: '/pricing/' };

export const FOOTER_COLUMNS: { label: string; links: NavLink[] }[] = [
  { label: 'Product', links: [...PRODUCT.links.map(({ label, href }) => ({ label, href })), PRICING, { label: 'About', href: '/about/' }] },
  { label: 'Solutions', links: SOLUTIONS.links.map(({ label, href }) => ({ label, href })) },
  { label: 'AI employees', links: EMPLOYEE_GROUP.links.map(({ label, href }) => ({ label, href })) },
  { label: 'Industries', links: INDUSTRIES.links },
  { label: 'Resources', links: RESOURCES.links.map(({ label, href }) => ({ label, href })) },
];
