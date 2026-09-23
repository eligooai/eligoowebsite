import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/google-workspace/',
  title: 'Google Workspace Integration for AI Employees',
  eyebrow: 'Integrations · Productivity',
  metaTitle: 'Google Workspace Integration — Gmail, Drive, Docs, Sheets and Calendar for AI Employees | Eligoo',
  metaDescription: 'Connect Google Workspace over OAuth and Eligoo’s AI employees can read and write Docs and Sheets, file work in Drive, use Gmail and book meetings on Google Calendar with a Meet link.',
  primaryKeyword: 'Google Workspace integration AI employees',
  secondaryKeywords: ['AI agent Google Calendar booking', 'AI employee Google Docs Sheets', 'AI meeting booking with Google Meet', 'Google Workspace AI automation', 'AI agent Gmail Drive access'],
  answer: 'The Google Workspace integration connects your Google account to Eligoo over OAuth so AI employees can work in Gmail, Drive, Docs, Sheets and Calendar. The most used capability is booking: when Hook books a meeting on a call or in an email thread, the event is created on your Google Calendar with a Meet link. Atlas, Sage and Ledger use Docs, Sheets and Drive for plans, content drafts and reports.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Google Workspace?',
      paragraphs: [
        'Most of the businesses Eligoo serves run on Google Workspace, and the AI employees produce a lot of documents — operating plans, research, content drafts, attribution reports, meeting briefs. The Google connection lets that work live where your team already looks: Atlas can write the weekly plan to a Doc, Sage can draft an article in Docs for review, Ledger can publish a forecast to a Sheet, and any of them can file deliverables in a Drive folder you choose.',
        'Calendar is where the integration does its most visible work. A booked-meeting outcome from Hook — on a phone call or from a reply — becomes a Google Calendar event with a Google Meet link and the attendees on it, and the meeting brief is attached. Without Google connected, the same outcome creates a task for Ledger to book the meeting by hand.',
        'Gmail access is used for reading and drafting within the connected account where a task needs it; outreach sequences, however, run from the SMTP/IMAP mailbox connection, which is separate and can be a Google mailbox or any other.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Sign in with Google', text: 'In workspace settings choose Google Workspace and sign in with the account the employees should work in. Google lists the scopes requested — Gmail, Drive, Docs, Sheets, Calendar — and you consent.' },
        { title: 'Connection is verified', text: 'Eligoo confirms the account, stores the refresh token server-side and shows the connection as active.' },
        { title: 'Choose where work goes', text: 'Set the Drive folder for deliverables and the calendar for bookings. These are workspace settings that employees respect on every task.' },
        { title: 'Employees use it inside tasks', text: 'Hook creates calendar events on booked meetings. Atlas, Sage and Ledger write Docs and Sheets and file them in Drive. Each action is listed in the activity log with a link to the item.' },
        { title: 'Disconnect at any time', text: 'Removing the connection in Eligoo or revoking access in your Google account stops the employees using it; bookings fall back to Ledger tasks.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Google Workspace',
      items: [
        'Calendar — written: events for booked meetings, with title, time, attendees, a Meet link and the meeting brief. Read: availability where a task needs to offer slots.',
        'Docs and Sheets — written: documents and spreadsheets the employees create or update for deliverables. Read: documents you share with a task as input.',
        'Drive — written: deliverables filed in the folder you set. Read: files in that folder or files you attach to a task.',
        'Gmail — used within the connected account where a task needs to read or draft mail. Outreach sequences use the separate SMTP/IMAP mailbox connection.',
        'Not touched: other users’ mailboxes or drives in your organisation, admin settings, or anything outside the scopes you consented to.',
        'Your OAuth token is stored server-side in your workspace, never returned to the browser, and revoked on disconnect. Traffic runs under your Google account and Google’s API terms.',
      ],
    },
    employees(['hook', 'atlas', 'sage', 'ledger'], 'Which AI employees use it', undefined, {
      hook: 'Creates the calendar event and Meet link for every booked meeting.',
      atlas: 'Writes operating plans and weekly reports to Docs and files them in Drive.',
      sage: 'Drafts long-form content in Docs for review before it goes to the calendar.',
      ledger: 'Publishes funnel, attribution and forecast reports to Sheets.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Meeting booking with Meet links', text: 'Calls and reply threads that end in a meeting become calendar events without anyone typing them.', icon: 'calendar' },
        { title: 'Deliverables in Drive', text: 'Plans, research and reports filed where the team already works.', icon: 'database' },
        { title: 'Reports in Sheets', text: 'Ledger’s numbers in a spreadsheet you can pivot and share.', icon: 'chart' },
        { title: 'Drafts in Docs', text: 'Sage’s articles and website copy as Docs with comments and suggestions.', icon: 'pen' },
      ],
    },
    faq([
      { q: 'Can an AI agent book meetings on my Google Calendar?', a: 'Yes. When Hook books a meeting on a call or in a thread, it creates the event on your calendar with a Meet link and the attendees, and attaches a brief.' },
      { q: 'What happens if Google is not connected?', a: 'Booked-meeting outcomes create a task for Ledger to schedule the meeting, and deliverables stay in the Eligoo workspace.' },
      { q: 'Which Google account should I connect?', a: 'The one whose calendar should receive bookings and whose Drive should hold deliverables — often a shared sales or operations account rather than a personal one.' },
      { q: 'Is Gmail used for outreach sequences?', a: 'No. Sequences run from the SMTP/IMAP mailbox connection, which can be a Google mailbox using its SMTP and IMAP settings.' },
      { q: 'Is this the same as the Gemini or YouTube connection?', a: 'No. Google Gemini is an API key for models; YouTube is a separate OAuth connection for uploads. All three can use the same Google account but are connected separately.' },
      { q: 'Can I limit which Drive folders Eligoo touches?', a: 'Employees file work in the folder you set and read files you share with a task. Eligoo does not index your whole Drive.' },
    ]),
    related([
      LINKS.operations, LINKS.hook, LINKS.atlas, LINKS.ledger, LINKS.ucAppointments,
      { label: 'Appointment setting workflow template', href: '/resources/templates/appointment-setting-workflow/' },
      { label: 'SMTP/IMAP mailbox integration', href: '/integrations/email-mailbox/' }, { label: 'YouTube integration', href: '/integrations/youtube/' }, { label: 'Google Gemini integration', href: '/integrations/google-gemini/' },
    ]),
    { kind: 'sources', items: [{ label: 'Google Workspace developer documentation', href: 'https://developers.google.com/workspace' }] },
    cta('Let the workforce work in your Google Workspace', `Connect Google, set a Drive folder and a calendar, and the employees take it from there. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
