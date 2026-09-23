import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/templates/appointment-setting-workflow/',
  title: 'Appointment Setting Workflow Template',
  eyebrow: 'Templates',
  metaTitle: 'Appointment Setting Workflow Template — Email, Call, Qualify, Book, Brief | Eligoo',
  metaDescription: 'A copyable AI appointment setting workflow: Hook works a verified list by email and phone, qualifies, books a calendar event with a meeting link and writes a brief for whoever attends. Setup, approvals and KPI.',
  primaryKeyword: 'appointment setting workflow',
  secondaryKeywords: ['appointment setting workflow template', 'AI appointment setting', 'AI appointment setter workflow', 'meeting booking workflow', 'B2B appointment setting process', 'automated appointment booking'],
  answer: 'This workflow turns a verified list into meetings on a salesperson’s calendar, each with a brief. Hook works the list with an approved email sequence and phone calls, asks the qualification questions, offers a slot and books a Google Calendar event with a Meet link; Radar supplies the list and Ledger keeps the records and show-rate reporting straight.',
  sections: [
    {
      kind: 'prose',
      heading: 'When to use this template',
      paragraphs: [
        'Use it when the people who should be in meetings — a founder, a sales engineer, a consultant — are spending their time trying to get the meetings booked. It suits businesses whose sale needs a conversation (a demo, a site visit, a discovery call) and who have or can build a list of the right people.',
        'It differs from the sales workflow in scope: it assumes the segment and message exist and concentrates on getting from contact to confirmed meeting, with the no-shows and reschedules handled as part of the process rather than as afterthoughts.',
      ],
    },
    {
      kind: 'workflow',
      heading: 'The workflow',
      stages: [
        { label: 'Verified list', owner: 'radar', detail: 'Contacts with roles, emails and phones, scored; optional if you bring a clean list' },
        { label: 'Email step', owner: 'hook', detail: 'Approved sequence from your mailbox; interest and questions classified' },
        { label: 'Call step', owner: 'hook', detail: 'Calls to interested or non-responding contacts inside the window' },
        { label: 'Qualify', owner: 'hook', detail: 'Your questions asked; answers stored on the lead' },
        { label: 'Book', owner: 'hook', detail: 'Slot offered and confirmed; calendar event with Meet link created' },
        { label: 'Brief', owner: 'hook', detail: 'Who they are, what they said, what they want to discuss' },
        { label: 'Confirm and reschedule', owner: 'hook', detail: 'Reminder before the meeting; reschedule requests handled; no-shows re-contacted' },
        { label: 'Record and report', owner: 'ledger', detail: 'Meetings booked vs held, show rate, sources' },
      ],
    },
    {
      kind: 'steps',
      heading: 'Set it up in Eligoo',
      steps: [
        { title: 'Connect Google Workspace, your mailbox and a phone line', text: 'Google Workspace provides the calendar and Meet links. The SMTP/IMAP mailbox is where sequences send from and replies are read. A SIP trunk (Twilio, Telnyx, Plivo or Vobiz) enables the call step.' },
        { title: 'Decide who takes the meetings and when', text: 'Which calendar to book into, which hours are open for meetings, how long a meeting is and how much notice is needed. Hook offers only slots that fit.' },
        { title: 'Write the qualification questions', text: 'Two to four questions whose answers decide whether the meeting is worth the attendee’s time. Hook asks them in the thread or on the call and stores the answers on the lead.' },
        { title: 'Approve the sequence and the enrolment', text: 'Review the email steps and the call brief. Approving enrolment is the first outside-world action; nothing sends before it.' },
        { title: 'Approve the calling campaign', text: 'For the call step, set the calling window and pace, make a browser test call, then approve. Calls to interested contacts and non-responders run inside the window.' },
        { title: 'Let booking run', text: 'When a contact qualifies, Hook offers a slot, confirms it and creates the calendar event with a Meet link. The attendee receives a brief before the meeting.' },
        { title: 'Handle reschedules and no-shows', text: 'Reschedule requests are routine and handled by Hook. No-shows are re-contacted with the approved follow-up. Anything outside the routine appears in the approvals queue.' },
        { title: 'Review Ledger’s meeting report', text: 'Booked versus held, show rate by source and sequence, and the qualification answers of the meetings that converted, so the questions and the list improve.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Approval points',
      items: [
        'The sequence, call brief and qualification questions.',
        'Sequence enrolment (which contacts, which sequence, what limits).',
        'Starting the calling campaign.',
        'Non-routine replies: pricing, a request for a proposal before the meeting, complaints.',
        'Changes to the meeting hours or the attendee’s calendar rules.',
      ],
    },
    {
      kind: 'list',
      heading: 'Inputs you need',
      items: [
        'A list of contacts, or a profile for Radar to build one from.',
        'A calendar to book into and the hours available for meetings.',
        'The qualification questions and what a good answer looks like.',
        'The email steps and the call opening, or the messaging for Sage to write them from.',
        'A mailbox to send from and, for calls, a phone line.',
        'A suppression list and lawful calling hours for the contacts’ time zone.',
      ],
    },
    {
      kind: 'list',
      heading: 'Outputs and KPI',
      items: [
        'KPI: qualified meetings held.',
        'Watch alongside: booked-to-held rate (show rate), reschedule rate, time from first contact to meeting, opt-out rate.',
        'Calendar events with Meet links for each booked meeting.',
        'A brief per meeting: who the person is, what they said, what they want to discuss.',
        'Qualification answers stored on each lead.',
        'Ledger’s report of meetings by source, sequence and outcome.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: booking site visits for an industrial automation integrator',
      scenario: 'An automation integrator’s sales engineer is the only person who can run a useful first meeting, and half of the meetings that do get booked are with people who cannot make a purchasing decision.',
      steps: [
        'Radar builds a list of plant managers and maintenance heads at factories in the integrator’s service radius and verifies phones and emails.',
        'The integrator writes three qualification questions: is there a line with a known bottleneck, is a project budgeted this year, and who signs off.',
        'Hook sends the approved sequence from the sales engineer’s mailbox, calls contacts who showed interest, asks the three questions and offers site-visit slots from the engineer’s open hours.',
        'Each booked visit creates a calendar event with a brief containing the answers; the engineer reads it the morning of the visit.',
        'A no-show is re-contacted the next day; Ledger’s report shows which plant types produced meetings that led to proposals.',
      ],
      outcome: 'The sales engineer visits plants where there is a known bottleneck, a budget and a decision-maker in the room, and the list for the next quarter is built from the plant types that converted.',
    },
    faq([
      { q: 'Where do the meetings get booked?', a: 'Into a Google Calendar you connect, as an event with a Meet link. If Google is not connected, a booked-meeting outcome creates a task for Ledger instead, so nothing is lost.' },
      { q: 'Can Hook book meetings on the phone?', a: 'Yes. On a call Hook asks the qualification questions, offers a slot from the open hours, confirms it and creates the event. The transcript is kept with the lead.' },
      { q: 'What does the attendee get before the meeting?', a: 'A brief: who the person is, the company, what they said in the thread or on the call, their qualification answers and what they want to discuss.' },
      { q: 'How are no-shows handled?', a: 'A no-show is re-contacted with the approved follow-up and offered a new slot. Ledger reports show rate by source so persistent no-show segments become visible.' },
      { q: 'Does this work without phone calls?', a: 'Yes. Leave out the call step and Hook books from the email thread. Adding calls usually improves the speed from interest to a confirmed slot.' },
    ]),
    related([
      LINKS.ucAppointments, LINKS.hook, LINKS.voice, LINKS.sales, LINKS.radar, LINKS.ledger,
      { label: 'Google Workspace integration', href: '/integrations/google-workspace/' }, { label: 'Email mailbox integration', href: '/integrations/email-mailbox/' },
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' },
      { label: 'AI follow-up workflow template', href: '/resources/templates/ai-follow-up-workflow/' },
    ]),
    cta('Fill a calendar with qualified meetings', 'Connect Google Workspace and a mailbox, write the questions, approve the sequence. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.templates,
  schema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
