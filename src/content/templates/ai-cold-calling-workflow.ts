import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/templates/ai-cold-calling-workflow/',
  title: 'AI Cold Calling Workflow Template',
  eyebrow: 'Templates',
  metaTitle: 'AI Cold Calling Workflow Template — Verified List, Brief, Test Call, Campaign, Outcomes | Eligoo',
  metaDescription: 'A copyable AI cold calling workflow: Radar verifies the list, Hook makes the calls inside an approved window, outcomes are logged and Ledger reports. Setup steps, approval points, inputs and KPI.',
  primaryKeyword: 'AI cold calling workflow',
  secondaryKeywords: ['AI cold calling template', 'cold calling workflow', 'AI calling campaign', 'automated cold calling process', 'AI voice agent cold calling', 'cold calling process template'],
  answer: 'This workflow runs a cold-calling campaign from a verified list to a logged outcome on every number, with a person hearing the agent before it calls anyone. Radar prepares and verifies the list, Hook makes the calls inside an approved window and records transcripts and outcomes, Ledger reconciles the results and reports, and interested prospects reach a salesperson with a brief.',
  sections: [
    {
      kind: 'prose',
      heading: 'When to use this template',
      paragraphs: [
        'Use it when you have — or can build — a list of businesses worth a first phone conversation and no one to make the calls: trade-show contacts, a regional target list, lapsed customers, or non-responders from an email sequence. It works best where a short first call can establish whether there is a need and who owns the decision.',
        'Do not use it for lists you are not sure you are allowed to call, for consumers in jurisdictions with strict rules, or for conversations that need negotiation. The agent opens, qualifies and books; it does not sell.',
      ],
    },
    {
      kind: 'workflow',
      heading: 'The workflow',
      stages: [
        { label: 'Prepare the list', owner: 'radar', detail: 'Verify numbers, enrich roles, remove duplicates and suppressed contacts, score' },
        { label: 'Write the call brief', owner: 'maven', detail: 'Opening, goal, two or three qualification questions, objections, escalation rules' },
        { label: 'Test in the browser', owner: 'hook', detail: 'A person talks to the agent and adjusts the brief' },
        { label: 'Run the campaign', owner: 'hook', detail: 'Approved window, pace, one line at a time, daily roll-over' },
        { label: 'Record outcomes', owner: 'hook', detail: 'Transcript, outcome, notes, optional recording on every call' },
        { label: 'Hand off interest', owner: 'hook', detail: 'Meeting booked with Meet link, or a task for the salesperson' },
        { label: 'Reconcile and report', owner: 'ledger', detail: 'Outcomes by segment, reasons for decline, list quality' },
      ],
    },
    {
      kind: 'steps',
      heading: 'Set it up in Eligoo',
      steps: [
        { title: 'Connect a SIP trunk and choose the voice stack', text: 'Connect Twilio (Account SID and Auth Token create the trunk automatically), Telnyx, Plivo or Vobiz. Pick speech-to-text (Deepgram by default), a voice from ElevenLabs, OpenAI or Deepgram, and a model from your connected AI accounts. Set the call language.' },
        { title: 'Load or build the list', text: 'Import your contacts or have Radar find them from your target profile. Radar verifies numbers, enriches roles, removes duplicates and anyone on the suppression list, and scores each contact.' },
        { title: 'Write the brief with Maven', text: 'The first message, what a good outcome is, the qualification questions, how to handle the common objections and what the agent must escalate rather than answer. Pick a behaviour preset and set turn detection and interruption handling.' },
        { title: 'Make browser test calls', text: 'Talk to the agent yourself. Try the objections you expect. Change the brief until the opening is short and the questions land naturally.' },
        { title: 'Create the campaign', text: 'Attach the list, set the calling window in the prospects’ time zone, the pace between calls and the daily roll-over. Decide whether to record, and check consent rules where the prospects are.' },
        { title: 'Approve the campaign', text: 'Starting the campaign is an approval. Nobody is dialled until a person confirms.' },
        { title: 'Review outcomes as they arrive', text: 'Interested prospects become booked meetings or tasks; declines are recorded with a reason; callbacks are scheduled inside the window. Anything flagged for a person appears in the approvals queue.' },
        { title: 'Read Ledger’s report and refine the list', text: 'Outcomes by segment and reasons for decline tell you which part of the list and which part of the brief to change before the next campaign.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Approval points',
      items: [
        'The call brief, after browser testing.',
        'Starting the calling campaign (list, window, pace, recording setting).',
        'Any call the agent flags: a pricing question, a complaint, a request to speak to a person, a hostile call.',
        'Re-running the campaign on a revised list.',
      ],
    },
    {
      kind: 'list',
      heading: 'Inputs you need',
      items: [
        'A list of businesses with phone numbers, or a target profile Radar can build from.',
        'A suppression list and confirmation that you may call these prospects where they are.',
        'A phone number and SIP trunk you control.',
        'The opening, the goal of the call and the two or three questions that decide whether a prospect is worth a meeting.',
        'The calling hours that are lawful and sensible for the prospects’ time zone.',
        'A calendar to book into, or a person to receive interested-prospect tasks.',
      ],
    },
    {
      kind: 'list',
      heading: 'Outputs and KPI',
      items: [
        'KPI: qualified conversations that lead to a booked next step.',
        'Watch alongside: answer rate, agent escalation rate, callback completion, complaint rate.',
        'A transcript, an outcome and notes on every call; recordings if enabled.',
        'Booked meetings on the calendar with a brief.',
        'A report of outcomes by segment and reasons for decline, feeding the next list.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: calling lapsed accounts at a packaging supplier',
      scenario: 'A packaging supplier has several hundred accounts that ordered two or three years ago and went quiet. Nobody knows which are still in business, still buying, or unhappy.',
      steps: [
        'Radar matches the accounts against the CRM, verifies numbers, finds the current purchasing contact where the old one has left, and removes current customers and opt-outs.',
        'Maven writes a brief that references the previous relationship, asks whether packaging is still bought and from whom, and offers a short call with the account manager.',
        'The owner makes browser test calls and shortens the opening twice before approving.',
        'Hook runs the campaign on weekday mornings; each call ends with an outcome: still buying elsewhere, no longer needs packaging, interested, wrong number.',
        'Ledger reports the split, and the account manager receives only the interested accounts, with transcripts.',
      ],
      outcome: 'The list is sorted into live prospects, dead accounts and a reason for each, and the account manager’s follow-up calls are to people who said yes.',
    },
    faq([
      { q: 'Does the agent say it is an AI?', a: 'The brief controls the opening, and the template recommends saying so plainly. Several jurisdictions require it, and an honest opening loses fewer prospects than a discovered pretence.' },
      { q: 'How many calls run at once?', a: 'One at a time per line, at the pace you set. The campaign rolls over to the next day until the list is worked, retrying unanswered numbers inside the window.' },
      { q: 'What does the agent do when someone asks for a price?', a: 'It says a colleague will follow up, records the request and flags the call. Pricing, promises and complaints are outside its boundary.' },
      { q: 'Can I record the calls?', a: 'Recording is optional and stored in your workspace with the transcript. Consent rules for recording differ by jurisdiction; check them before enabling it.' },
      { q: 'Can the same workflow handle inbound calls?', a: 'Yes. Inbound dispatch routes calls to your number into the same agent with an inbound brief. This template covers the outbound case; the setup for the voice stack is shared.' },
    ]),
    related([
      LINKS.ucColdCalling, LINKS.voice, LINKS.hook, LINKS.radar, LINKS.ledger, LINKS.cmpVoiceSdr,
      { label: 'Twilio integration', href: '/integrations/twilio/' }, { label: 'Deepgram integration', href: '/integrations/deepgram/' }, { label: 'ElevenLabs integration', href: '/integrations/elevenlabs/' },
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'Appointment setting workflow template', href: '/resources/templates/appointment-setting-workflow/' },
      { label: 'AI follow-up workflow template', href: '/resources/templates/ai-follow-up-workflow/' },
    ]),
    cta('Run a cold-calling campaign you can hear first', 'Connect a trunk, write the brief, test it in the browser and approve the campaign. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.templates,
  schema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
