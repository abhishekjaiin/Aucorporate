import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { LeadForm } from '@/components/LeadForm'
import { Calendar, Clock, Landmark, Users } from 'lucide-react'

const quickFacts = [
  { icon: Calendar, value: '9 Dated Obligations', label: 'AOC-4 to DIR-3 KYC, Mapped Chronologically' },
  { icon: Clock, value: 'Within 6 Months', label: 'AGM Deadline From Financial Year-End' },
  { icon: Landmark, value: 'Section 173(1)', label: 'Governs the Board-Meeting Cadence' },
  { icon: Users, value: 'Triennial Cadence', label: 'DIR-3 KYC for DIN-Holding Directors, Effective 31 Mar 2026' },
]

const sequenceSteps = [
  { step: 'Books close', detail: '31 March, the end of the standard financial year for an Indian company.' },
  { step: 'Statutory audit', detail: "The appointed independent chartered accountant audits the year's financial statements." },
  { step: 'Board approves the financials', detail: 'The board adopts the audited financial statements ahead of the AGM.' },
  { step: 'AGM', detail: 'Held within six months of financial year-end, where shareholders formally adopt the financial statements.' },
  { step: 'AOC-4 and MGT-7/MGT-7A filed', detail: 'Both run off the AGM date, not off 31 March — the single most common date a US finance team gets wrong when it tries to reverse-engineer the deadline from year-end alone.' },
  { step: 'Annual FLA Return', detail: "A parallel RBI track, not part of this sequence at all. It's due by 15 July based on the 31 March position, regardless of where the audit or AGM stand at that point." },
  { step: 'DIR-3 KYC', detail: "Also independent of this sequence. It's a personal filing obligation of each director holding a DIN, not something that follows from the company's own audit-to-filing chain." },
]

const faqs = [
  {
    q: 'Does a wholly-owned subsidiary of a foreign company need to hold an AGM in India, and can it be done virtually with an all-overseas shareholder base?',
    a: "Yes to both. An AGM is mandatory every year regardless of who holds the shares, and a subsidiary whose entire shareholding sits with an overseas US parent can hold that AGM virtually — no shareholder needs to travel to India, and there's no separate carve-out or additional approval required just because the shareholder base is entirely overseas. The notice, quorum, and minute-keeping requirements apply the same way as an in-person meeting; only the physical location changes.",
  },
  {
    q: 'Is DIR-3 KYC filed annually or every 3 years for a foreign director?',
    a: "Based on our review of MCA's notifications and independent compliance-law sources, the filing has moved to a triennial cadence — once every third consecutive financial year, on or before 30 June, effective from 31 March 2026 — superseding the older annual rule. This is stated with an explicit hedge: the underlying MCA rule or notification number behind this change hasn't yet been independently confirmed against the primary gazette text, so treat the triennial cadence as the current working understanding, not a citation-backed final fact, until it's checked against MCA's own notification. See the DIN-holder section above for the full detail.",
  },
  {
    q: 'What is the DIR-3 KYC requirement for a foreign director specifically — address proof, apostille?',
    a: "A non-resident director's DIR-3 KYC (in any year the full form, rather than the simpler OTP-only route, applies) generally needs notarized and apostilled identity and address proof from their home country — the same authentication chain used for incorporation-stage documents, applied here to an individual director's ongoing filing rather than the company's one-time setup. See the \"For Your Parent's Own DIN-Holding, Non-Resident Directors\" section above for the full mechanics, including how this interacts with DSC renewal and the MCA V3 portal.",
  },
  {
    q: 'What is the penalty for late ROC filing for a foreign-owned company in India?',
    a: 'Missing a filing deadline triggers compounding additional fees the longer the filing stays outstanding, plus statutory penalty exposure for the company and its officers in default. Both AOC-4 (Section 137(3)) and MGT-7 (Section 92(5)) follow the same structure: up to ₹2,00,000 for the company (₹10,000 plus ₹100 per day of default), with a separate ₹50,000 cap for the managing director, CFO, or other officer in default. Beyond the direct fee exposure, an unresolved filing gap can also complicate a later fundraise, share transfer, or due-diligence process.',
  },
  {
    q: 'When is Form ADT-1 due after appointing an auditor, and did the filing requirement change recently?',
    a: "ADT-1 is due within 15 days of the auditor's appointment (30 days of incorporation for the first auditor). A procedural change reported in secondary sources made ADT-1 filing itself mandatory for first-auditor appointments on or after 14 July 2025 — previously, some practitioners treated the first-auditor filing as optional in practice since Section 139(6) doesn't explicitly mandate it the way later appointments do. The specific MCA notification behind this change has not yet been independently confirmed against the primary gazette text — we're treating the \"mandatory since 14 July 2025\" framing as reported rather than confirmed, pending that citation.",
  },
  {
    q: 'Is the Companies Compliance Facilitation Scheme (CCFS) 2026 still open?',
    a: 'No. The scheme was introduced by MCA General Circular No. 01/2026 (dated 24 February 2026), with an original window of 15 April to 15 July 2026, and was then extended to 31 August 2026 by MCA General Circular No. 03/2026 (dated 8 July 2026) — two separate circulars for two separate events, not a discrepancy. That extended window is closed as of this page\'s last-updated date. See the CCFS 2026 section above for the full, dated treatment. If your subsidiary has outstanding ROC filings, check MCA\'s current notifications directly rather than assuming this window, or an automatic successor to it, is still available.',
  },
  {
    q: 'What compliance does a US parent company need for its Indian subsidiary every year?',
    a: 'At the core: board meetings (minimum four a year), an AGM (within six months of year-end, virtual is fine even with an all-overseas shareholder base), AOC-4 and MGT-7/MGT-7A following the AGM, ADT-1 when the auditor is appointed or reappointed, and DIR-3 KYC for every DIN-holding director on its own triennial cycle. Running alongside all of that on a separate RBI track: the Annual FLA Return, due 15 July regardless of whether any transaction happened that year. The calendar above lays out the full sequence and dates in one place; the sections following it go deeper on the two areas — your parent\'s own non-resident directors, and the board/AGM mechanics — that generate the most actual questions.',
  },
]

export default function AnnualComplianceCalendarPage() {
  return (
    <RegionClusterTemplate
      title="Annual Compliance Calendar for Foreign Subsidiary Companies in India"
      subtitle="The AOC-4, MGT-7, ADT-1, DIR-3 KYC, board meeting and AGM deadlines a US-owned Indian subsidiary has to track every year — with FEMA/RBI dates shown alongside, and a dedicated section for your parent's own DIN-holding, non-resident directors."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "Annual Compliance Calendar" },
            ]}
    >

      <div className="mb-12">
        <p className="mb-4 text-sm text-gray-500">
          Last updated: 30 September 2026 — prepared by AU Corporate&apos;s regulatory compliance practice. Every date and cadence below is cited to its governing Companies Act section or MCA circular where that citation has been verified; anywhere it hasn&apos;t, that&apos;s stated explicitly rather than presented as settled.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Who this page is for.</strong> This page is for a US parent&apos;s Indian subsidiary that has already incorporated — not a company still deciding whether to enter India. If you&apos;re at that earlier stage, start with our{' '}
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            complete guide to doing business in India for US companies
          </Link>{' '}
          instead; everything below assumes a Certificate of Incorporation already exists and the entity is now living inside its first (or fifth) full compliance year.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This page owns one specific thing: the dated Companies Act / MCA-ROC annual filing cycle for a foreign subsidiary company in India — AOC-4, MGT-7, ADT-1, DIR-3 KYC, board meetings, and the AGM. FEMA and RBI dates are shown in the same timeline for completeness, each linking to our dedicated{' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance for US companies
          </Link>{' '}
          guide rather than being re-explained here. Labour Codes, the DPDP Act, environmental compliance, and IP filings live on our broader{' '}
          <Link href="/india-business-setup/regulatory-compliance" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            regulatory compliance framework
          </Link>{' '}
          page — this isn&apos;t an entry-stage page, and it isn&apos;t a general six-regime overview.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our team includes CA and US CPA-qualified professionals, which matters here specifically because the recurring friction on this page&apos;s topic isn&apos;t usually the Indian rule itself — it&apos;s that none of these dates sit on a US corporate calendar, and a US finance team managing India alongside a dozen other jurisdictions needs the sequence explained, not just a form list.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickFacts.map((stat) => (
            <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
              <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </ClickableReveal>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How the Compliance Year Actually Unfolds</h2>
        <p className="text-gray-700 mb-6">
          Before the calendar, it&apos;s worth understanding the order these obligations actually run in — because several of the dates below are fixed only in relation to each other, not to a calendar date you can circle in January.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
          {sequenceSteps.map((item) => (
            <li key={item.step}>
              <strong>{item.step}</strong> — {item.detail}
            </li>
          ))}
        </ol>
        <p className="text-gray-700">
          The distinction matters: this section answers <em>in what order</em> the company-level obligations happen. The calendar below answers <em>on what date</em> each one falls — including the two (FLA, DIR-3 KYC) that run on their own separate clocks. Read them together, not as duplicates of each other.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Annual Filing Calendar</h2>
        <p className="text-gray-700 mb-6">
          This is the page&apos;s scannable reference — organized chronologically by when each obligation is triggered, not by which authority administers it, though the governing-authority column lets you filter for just the MCA-ROC rows, just the RBI-FEMA row, or just the Income Tax rows if that&apos;s what you&apos;re scanning for.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-4 text-left font-bold">Approx. timing</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Filing / obligation</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Governing authority</th>
                <th className="border border-gray-300 p-4 text-left font-bold">What triggers it</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Citation / note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 text-sm align-top">Ongoing — minimum 4 meetings/year</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Board meetings, no more than 120 days between two consecutive meetings</td>
                <td className="border border-gray-300 p-4 text-sm align-top">MCA-ROC</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Standing requirement from incorporation onward</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Section 173(1), Companies Act, 2013 — see the Board Meetings section below for detail</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 text-sm align-top">Within 15 days of appointment (30 days of incorporation for the first auditor)</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Form ADT-1 — auditor appointment</td>
                <td className="border border-gray-300 p-4 text-sm align-top">MCA-ROC</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Appointment/reappointment of the statutory auditor, or filling a casual vacancy</td>
                <td className="border border-gray-300 p-4 text-sm align-top">First-auditor appointment governed by Section 139(6). A separately reported procedural change made ADT-1 filing itself mandatory for first-auditor appointments on or after 14 July 2025 — the underlying MCA notification number has not been independently confirmed against the primary gazette text</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 text-sm align-top">By 15 July (RBI has extended this in recent years)</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Annual FLA Return</td>
                <td className="border border-gray-300 p-4 text-sm align-top">RBI-FEMA</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Any entity carrying foreign investment on its books as of 31 March, whether or not a transaction happened that year</td>
                <td className="border border-gray-300 p-4 text-sm align-top">
                  Mechanics covered in full on our{' '}
                  <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                    FEMA compliance guide
                  </Link>{' '}
                  — not repeated here
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 text-sm align-top">Triennially, on or before 30 June — cadence change effective 31 March 2026</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Form DIR-3 KYC (personal, director-level)</td>
                <td className="border border-gray-300 p-4 text-sm align-top">MCA-ROC, but a personal director obligation, not the company&apos;s</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Every director holding a DIN as of 31 March of the relevant financial year</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Per MCA&apos;s stated cadence change, superseding the earlier annual rule — pending primary-source rule/notification-number confirmation; see the DIN-holder section below</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 text-sm align-top">Within 6 months of financial year-end</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Annual General Meeting</td>
                <td className="border border-gray-300 p-4 text-sm align-top">MCA-ROC</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Standing annual requirement; first AGM carries a different timing rule</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Section 96; virtual AGM confirmed even where all shareholders are overseas — see below</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 text-sm align-top">Within 30 days of the AGM</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Form AOC-4 — financial statements</td>
                <td className="border border-gray-300 p-4 text-sm align-top">MCA-ROC</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Follows adoption of financial statements at the AGM</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Section 137; FY 2024-25 due date extended to 31 January 2026 per MCA General Circular 08/2025</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 text-sm align-top">Within 60 days of the AGM</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Form MGT-7 / MGT-7A — annual return (MGT-7A for small companies)</td>
                <td className="border border-gray-300 p-4 text-sm align-top">MCA-ROC</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Follows the AGM</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Section 92; same FY 2024-25 extension to 31 January 2026 per MCA General Circular 08/2025</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 text-sm align-top">By 31 October (30 November where Form 3CEB / transfer-pricing reporting applies — the common case for a US-parented subsidiary with management fees, cost allocations, or royalties from the parent)</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Income tax return</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Income Tax</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Annual filing obligation</td>
                <td className="border border-gray-300 p-4 text-sm align-top">
                  Background mention only — see our{' '}
                  <Link href="/services/taxation-regulatory" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                    taxation &amp; regulatory services
                  </Link>{' '}
                  for the full tax-filing picture; not expanded on this page
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 text-sm align-top">Where international related-party transactions exist</td>
                <td className="border border-gray-300 p-4 text-sm align-top font-semibold">Form 3CEB — transfer pricing certification</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Income Tax</td>
                <td className="border border-gray-300 p-4 text-sm align-top">Cross-border related-party dealings with the US parent (management fees, cost allocations, royalties)</td>
                <td className="border border-gray-300 p-4 text-sm align-top">
                  Not re-explained here — see our{' '}
                  <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                    transfer pricing &amp; Section 482 guide
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 text-sm">
          This calendar assumes a standard April-March financial year. If your subsidiary has NCLT approval to align its year with a foreign parent&apos;s year-end instead, the dates above shift accordingly — see the &quot;Can Your India Entity Follow Your Parent&apos;s Financial Year Instead of April-March?&quot; section on our{' '}
          <Link href="/services/accounting-assurance#statutory-audit" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            accounting &amp; assurance services
          </Link>{' '}
          page rather than re-litigating the NCLT approval mechanic here.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">For Your Parent&apos;s Own DIN-Holding, Non-Resident Directors</h2>
        <p className="text-gray-700 mb-8">
          Most compliance checklists treat &quot;foreign director requirements&quot; as a single footnote. It isn&apos;t — it&apos;s a distinct set of personal, recurring obligations that sit on top of everything the company itself has to file, and they&apos;re easy for a US finance team to miss because they don&apos;t route through the company&apos;s own filing calendar at all.
        </p>

        <h3 className="text-xl font-bold mb-3">DIR-3 KYC is a personal obligation, not the company&apos;s</h3>
        <p className="text-gray-700 mb-8">
          The company doesn&apos;t file DIR-3 KYC on a director&apos;s behalf. Each individual director holding a DIN files it themselves, authenticated with their own Digital Signature Certificate and, in years where nothing has changed, a mobile/email OTP. This distinction trips up US parents specifically: a US-based director who assumes their Indian subsidiary&apos;s company secretary will simply &quot;handle&quot; their KYC the way a company handles its own ROC filings is working from the wrong model. If the director doesn&apos;t personally complete it, the filing doesn&apos;t happen — and the resulting deactivation attaches to that individual&apos;s DIN, not to a company-level compliance record.
        </p>

        <h3 className="text-xl font-bold mb-3">The cadence, stated precisely and hedged</h3>
        <p className="text-gray-700 mb-8">
          Based on our review of the available MCA notifications and secondary compliance-law sources, the filing has moved from an annual to a <strong>triennial</strong> cadence — filed once every third consecutive financial year, on or before 30 June, effective from 31 March 2026. A director already compliant under the old annual regime would, on this basis, have their next filing fall due around 30 June 2028. <strong>This cadence change is stated here as researched, not as independently verified against a specific MCA rule or notification number</strong> — the underlying amendment to the Companies (Appointment and Qualification of Directors) Rules has not yet been confirmed directly against the primary gazette text. Confirm the current cadence against MCA&apos;s own notifications before relying on it for a specific director&apos;s filing year.
        </p>

        <h3 className="text-xl font-bold mb-3">Apostille and address-proof mechanics for a non-resident director&apos;s ongoing filings</h3>
        <p className="text-gray-700 mb-8">
          This is distinct from the one-time apostille work done at incorporation (your parent&apos;s certificate of incorporation, board resolution, and power of attorney — covered in our{' '}
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            incorporation guide
          </Link>
          , not repeated here). The recurring version applies every time a non-resident director&apos;s KYC or DSC documentation needs a fresh identity and address proof from outside India: those documents generally need to be notarized in the director&apos;s home country and then apostilled (for a US-based director, through the relevant Secretary of State), the same authentication chain used for the original incorporation documents, just applied on an ongoing basis rather than once. Where a director&apos;s personal details haven&apos;t changed since their last filing, a simpler OTP-based route is available; the full document-backed filing is required the first time, and again whenever anything — address, phone number, email — has changed.
        </p>

        <h3 className="text-xl font-bold mb-3">DSC issuance/renewal specific to a foreign director</h3>
        <p className="text-gray-700 mb-8">
          A Digital Signature Certificate has its own renewal cycle, separate from DIR-3 KYC itself, and a non-resident director&apos;s DSC renewal typically needs the same notarized/apostilled identity documentation as the original issuance — not a lighter-touch renewal process the way it might be for an India-resident director with locally verifiable documents. Building DSC renewal into the same tracking system as DIR-3 KYC (rather than treating them as unrelated) avoids the common failure mode where a director&apos;s KYC filing is ready to go but blocked because the DSC behind it has quietly lapsed.
        </p>

        <h3 className="text-xl font-bold mb-3">MCA V3 portal mechanics, briefly</h3>
        <p className="text-gray-700">
          MCA&apos;s filing infrastructure has moved from the V2 to the V3 portal, and a foreign national completing a filing from outside India should expect the V3 portal&apos;s identity-verification steps to take real, non-trivial time relative to a resident filer — plan the KYC/DSC cycle with that lead time in mind rather than assuming it moves as fast as a same-day domestic filing. This is a portal-mechanics observation from the wider compliance-advisory field, not a specific MCA-published timeline; treat it as a planning cushion, not a stated SLA.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Board Meetings and the AGM: What a US-Owned Foreign Subsidiary Actually Has to Do</h2>

        <h3 className="text-xl font-bold mb-3">Board meeting cadence</h3>
        <p className="text-gray-700 mb-8">
          Every Indian company must hold a minimum of four board meetings a year, with no more than 120 days between any two consecutive meetings, under Section 173(1) of the Companies Act, 2013 — a rule that applies from incorporation onward, regardless of how small the board is or how much of it sits outside India. For a subsidiary with an entirely US-based board, this is usually a scheduling and quorum-logistics question rather than a substantive one: meetings can be held by video conferencing under the Companies Act&apos;s provisions for participation through electronic means, so an all-overseas board doesn&apos;t need anyone to travel to India to satisfy the cadence requirement itself.
        </p>

        <h3 className="text-xl font-bold mb-3">AGM requirement and timing</h3>
        <p className="text-gray-700 mb-8">
          The Annual General Meeting is mandatory every year, held within six months of the financial year-end — by 30 September for a standard April-March year. The first AGM carries a different rule: it&apos;s generally allowed up to nine months from the close of the company&apos;s first financial year rather than six, giving a newly incorporated subsidiary some additional runway in year one. (Confirm the precise first-AGM provision against the Companies Act text before relying on it for a specific filing date — this specific proviso has not been independently re-verified against the statute.)
        </p>

        <h3 className="text-xl font-bold mb-3">Can the AGM be held virtually with an all-overseas shareholder base?</h3>
        <p className="text-gray-700">
          Yes. A wholly-owned subsidiary whose entire shareholding sits with a US parent — no shareholders physically present in India at all — can hold its AGM virtually. This is the single most common logistical worry a US finance team raises about this page&apos;s topic (&quot;do we need to fly someone to India every year to hold a shareholder meeting&quot;), and the direct answer is no: video-conferencing/other-audio-visual-means AGMs are permitted, and an all-overseas shareholder base doesn&apos;t change that. What does still matter is running the meeting properly — notice periods, quorum, and minute-keeping requirements apply the same way whether the meeting is in a boardroom in Bengaluru or a video call between two continents.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">FEMA and RBI Dates, in the Same Timeline</h2>
        <p className="text-gray-700 mb-4">
          The Companies Act/MCA-ROC cycle above isn&apos;t the whole picture — a subsidiary carrying foreign investment also runs a parallel RBI/FEMA track, which is why the calendar above includes the FLA return alongside the ROC dates rather than treating it as a separate subject. The full RBI filing set your subsidiary needs to track:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li><strong>Form FC-GPR</strong> — reports share allotment within 30 days of FDI coming in.</li>
          <li><strong>Form FC-TRS</strong> — reports any later transfer of shares between a resident and non-resident.</li>
          <li><strong>Annual FLA Return</strong> — the standing yearly obligation shown in the calendar above, due 15 July, filed regardless of whether any transaction happened that year.</li>
        </ul>
        <p className="text-gray-700">
          Each of these is explained in full — including RBI&apos;s compounding process for a missed filing, the External Commercial Borrowing framework if the parent ever funds the subsidiary through a loan rather than equity, and how this interacts with your US parent&apos;s own Form 5471/FBAR reporting — on our dedicated{' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance for US companies
          </Link>{' '}
          guide. We&apos;re not repeating that mechanics here; this section exists only to show the FEMA dates sitting inside the same annual timeline as the Companies Act dates above, since that&apos;s the complete-picture view most compliance-calendar content skips entirely.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Happens If a Deadline Is Missed</h2>
        <p className="text-gray-700 mb-4">
          Missing one of the dates above doesn&apos;t resolve itself the way a quiet oversight might in other contexts — MCA filings carry an additional-fee structure that compounds the longer a filing stays outstanding, on top of statutory penalty exposure for the company and its officers in default.
        </p>
        <p className="text-gray-700 mb-4">
          Both AOC-4 and MGT-7 follow the same penalty structure under the Companies Act, 2013. Late AOC-4 filing, under Section 137(3), carries a penalty of up to ₹2,00,000 for the company (₹10,000 plus ₹100 per day of default), with a separate cap of ₹50,000 for the managing director, CFO, or other officer in default. Late MGT-7 filing carries the identical structure under Section 92(5): up to ₹2,00,000 for the company and a separate ₹50,000 cap for the officer in default. These figures are corroborated across multiple independent secondary compliance-law sources rather than confirmed against the primary Companies Act gazette text directly; a named CA/CS should sign off on them before publish, consistent with this page&apos;s other dated compliance claims.
        </p>
        <p className="text-gray-700">
          Beyond the direct fee/penalty exposure, an outstanding filing has a way of surfacing at the worst possible time — it can complicate a later fundraise, a share transfer, or a due-diligence process, since an open compliance gap is exactly the kind of thing due diligence is designed to catch. None of this is a reason for alarm on a well-tracked calendar; it&apos;s the reason a calendar is worth tracking against in the first place, rather than reconstructed retroactively once something&apos;s already overdue.
        </p>
      </div>

      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h2 className="font-bold text-lg mb-2">The Companies Compliance Facilitation Scheme, 2026: A Closed Relief Window (Reference Only)</h2>
        <p className="text-gray-700 mb-4">
          <strong>This window is closed as of this page&apos;s last-updated date (30 September 2026).</strong> It&apos;s covered here for reference only — not as an active relief mechanism a reader can still use.
        </p>
        <p className="text-gray-700 mb-4">
          The Companies Compliance Facilitation Scheme (CCFS), 2026 was an MCA scheme offering a reduced additional-filing-fee waiver (reported at around 90%) for companies with pending ROC filings, including foreign-owned/foreign-subsidiary companies. It was introduced by MCA General Circular No. 01/2026 (dated 24 February 2026), with an original window of 15 April to 15 July 2026. MCA General Circular No. 03/2026 (dated 8 July 2026) then separately extended that window to 31 August 2026 — these are two distinct circulars for two distinct events (introduction and extension), not competing references for the same fact. Both circular numbers, dates, and roles are corroborated across multiple independent secondary compliance-law sources; they have not been independently confirmed against the primary MCA circular text itself, so a professional should still pull the circular PDFs directly from mca.gov.in before this page ships, to close that last step out completely.
        </p>
        <p className="text-gray-700">
          MCA periodically opens fee-waiver windows of this kind for companies with pending ROC filings; CCFS 2026 was simply the most recent one on record at the time of this page&apos;s research. If your subsidiary has outstanding ROC filings, the practical next step is to check MCA&apos;s current notifications directly for whether a similar window is open now, rather than assuming CCFS 2026 itself can still be used or that a successor scheme automatically exists.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Who Actually Prepares These Filings</h2>
        <p className="text-gray-700 mb-4">
          The forms in the calendar above don&apos;t file themselves, and each one draws on work that happens well before the deadline, not in the days immediately before it.
        </p>
        <p className="text-gray-700 mb-4">
          The books and audit schedule behind AOC-4 are prepared by whoever runs the subsidiary&apos;s accounting through the year — our{' '}
          <Link href="/services/accounting-assurance" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            accounting &amp; assurance services
          </Link>{' '}
          team is where that work actually happens: bookkeeping kept audit-ready throughout the year, coordination with the appointed statutory auditor, and the resulting numbers carried through to AOC-4 and MGT-7 once the AGM has adopted them.
        </p>
        <p className="text-gray-700 mb-4">
          The FEMA/RBI side of this calendar sits within our broader{' '}
          <Link href="/services/taxation-regulatory" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            taxation &amp; regulatory services
          </Link>{' '}
          practice, alongside the direct tax and GST work that runs on the same fiscal-year rhythm.
        </p>
        <p className="text-gray-700">
          The company-secretarial mechanics — DIR-3 KYC tracking, ADT-1 filing, board-minute and statutory-register maintenance — are handled in-house by our CA and CS team as part of the same engagement, rather than farmed out to a separate vendor working from a different set of records.
        </p>
      </div>

      <div className="mb-12">
        <LeadForm
          title="Need Your India Subsidiary's Annual Filings Actually Tracked?"
          description="Tell us about your subsidiary's incorporation date, AGM timing, and whether your directors hold DINs, and our accounting & company-secretarial team will map your actual filing calendar — not a generic one."
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for US Companies in India →
          </Link>
          <Link href="/services/accounting-assurance" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Accounting &amp; Assurance Services →
          </Link>
          <Link href="/services/taxation-regulatory" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Taxation &amp; Regulatory Services →
          </Link>
          <Link href="/india-business-setup/regulatory-compliance" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Regulatory Compliance Framework →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
