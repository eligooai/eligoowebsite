export interface Employee {
  id: string;
  name: string;
  role: string;
  dept: string;
  tagline: string;
  decides: string[];
  does: string[];
  delivers: string[];
  kpi: string;
  boundary: string;
  image: string;
  model: string;
}

export const EMPLOYEES: Employee[] = [
  {
    id: 'atlas', name: 'Atlas', role: 'AI Growth Operations Manager', dept: 'Leadership',
    tagline: 'Your AI COO. Turns business objectives into an operating plan and keeps the whole AI workforce working toward it.',
    decides: ['Which growth objective has priority', 'Which employee handles what, in which order', 'When to pause a workstream or escalate to you'],
    does: ['Creates operating plans and assigns tasks', 'Coordinates handoffs and resolves conflicts', 'Monitors performance and reprioritises work'],
    delivers: ['Weekly growth plan', 'Employee task queues', 'Executive summary, risk register and approval queue'],
    kpi: 'Achievement against the approved growth plan, qualified pipeline influenced and exception-resolution time.',
    boundary: 'Reprioritises within approved goals and budgets. Never changes targets, budgets, pricing, offers or customer promises without your approval.',
    image: '/employees/atlas.webp', model: '/models/atlas.glb',
  },
  {
    id: 'maven', name: 'Maven', role: 'Market, Brand & Campaign Strategist', dept: 'Strategy',
    tagline: 'Reads your market and turns business targets into positioning, messaging and campaign strategy.',
    decides: ['Priority segment and positioning angle', 'Campaign objective, offer structure and channel hypothesis', 'What gets tested, in which sequence'],
    does: ['Analyses the market and competitor activity', 'Builds positioning and messaging frameworks', 'Develops campaign strategies and experiment plans'],
    delivers: ['Market opportunity brief', 'Positioning framework and messaging hierarchy', 'Campaign brief, channel plan and hypothesis backlog'],
    kpi: 'Share of launched campaign hypotheses that hit the agreed success threshold, conversion improvement and strategy-to-launch time.',
    boundary: 'Researches and recommends autonomously. Never changes your positioning, product claims, offer, price or public messaging without approval.',
    image: '/employees/maven.webp', model: '/models/maven.glb',
  },
  {
    id: 'sage', name: 'Sage', role: 'Content & Organic Growth Manager', dept: 'Content',
    tagline: "Turns Maven's strategy into content that earns qualified attention — planned, written, published and measured.",
    decides: ['Content angle, format and CTA', 'Publishing channel and schedule', 'Copy variations and repurposing opportunities'],
    does: ['Builds the content calendar and writes copy', 'Creates scripts, newsletters and social posts', 'Publishes authorised content and monitors response'],
    delivers: ['Content calendar and website copy', 'Social posts, newsletters and scripts', 'Organic performance report'],
    kpi: 'Qualified organic conversions per published asset and content-assisted pipeline — not follower counts.',
    boundary: 'Publishes only within approved topics, claims, channels and calendars. New claims, customer stories, sensitive topics or crisis comms always come to you first.',
    image: '/employees/sage.webp', model: '/models/sage.glb',
  },
  {
    id: 'pixel', name: 'Pixel', role: 'Creative Production Agent', dept: 'Creative',
    tagline: 'Produces the visuals — images, video, ad creatives and variants — fast, on-brand and ready to ship.',
    decides: ['Visual treatment, composition and layout', 'Asset formats and motion treatment', 'Which variants to produce for testing'],
    does: ['Generates and edits images, videos and graphics', 'Builds ad creatives and channel-specific resizes', 'Runs visual quality checks'],
    delivers: ['Production-ready creative assets', 'Channel variations, thumbnails and ad variants', 'Editable source files with metadata'],
    kpi: 'First-pass creative approval rate, turnaround time and creative test win rate.',
    boundary: "Creates and revises autonomously — never publishes, never alters your core brand identity, never uses unlicensed material or a real person's likeness without approval.",
    image: '/employees/pixel.webp', model: '/models/pixel.glb',
  },
  {
    id: 'radar', name: 'Radar', role: 'Prospect Intelligence Agent', dept: 'Pipeline',
    tagline: 'Finds, researches and verifies the accounts and decision-makers that actually fit your ICP.',
    decides: ['Whether an account fits the ICP', 'Which contact is relevant and how confident the data is', 'Lead priority and disqualification reasons'],
    does: ['Finds accounts and researches decision-makers', 'Enriches, verifies and de-duplicates records', 'Scores and segments prospects for outreach'],
    delivers: ['Verified prospect records with source links', 'Fit score, rationale and contact confidence', 'Segmented, prioritised outreach lists'],
    kpi: 'Sales-accepted lead rate, verified-data accuracy, duplicate rate and cost per accepted prospect.',
    boundary: 'Never contacts prospects, never invents missing data, never bypasses suppression lists. New data sources or ICP changes require your approval.',
    image: '/employees/radar.webp', model: '/models/radar.glb',
  },
  {
    id: 'hook', name: 'Hook', role: 'Outbound & Meeting Agent', dept: 'Outbound',
    tagline: "Runs your outbound: personalises approved sequences, handles replies and turns them into qualified meetings.",
    decides: ['Which approved sequence to use and how to personalise', 'Follow-up timing and reply classification', 'When a conversation is ready for a meeting'],
    does: ['Sends approved outreach and follows up', 'Processes routine replies and records opt-outs', 'Qualifies conversationally, books meetings, prepares handoffs'],
    delivers: ['Outbound conversations and classified replies', 'Qualification records and meeting briefs', 'Meetings held, logged in your CRM'],
    kpi: 'Qualified meetings held — not merely booked — positive reply rate, show rate and opt-out rate.',
    boundary: 'Sends only approved sequences within channel, timing and volume limits. Never negotiates price, makes promises, or answers legal or security questions.',
    image: '/employees/hook.webp', model: '/models/hook.glb',
  },
  {
    id: 'ledger', name: 'Ledger', role: 'CRM & Revenue Intelligence Analyst', dept: 'Revenue',
    tagline: 'Keeps your CRM clean and tells you — with evidence — what is actually producing revenue.',
    decides: ['Record matching and duplicate detection', 'Attribution classification and forecast confidence', 'Which anomalies need human review'],
    does: ['Cleans, enriches and reconciles CRM data', 'Calculates funnel metrics and forecasts', 'Flags leakage and data-quality exceptions'],
    delivers: ['Clean CRM and attribution report', 'Funnel dashboard and revenue forecast', 'Pipeline health report and exception queue'],
    kpi: 'CRM completeness and accuracy, attribution coverage, forecast error and reporting timeliness.',
    boundary: 'Makes only reversible hygiene updates with a full audit trail. Never deletes records or touches revenue, invoices or contracts without approval.',
    image: '/employees/ledger.webp', model: '/models/ledger.glb',
  },
];

export const byId = (id: string) => EMPLOYEES.find((e) => e.id === id)!;
