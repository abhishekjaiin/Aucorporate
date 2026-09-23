import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"

const structureComparison = [
  {
    title: "Liaison Office",
    body: "A representative/communication channel only. It cannot undertake any commercial or revenue-generating activity, invoice Indian customers, or earn income in India. It exists purely to liaise between the parent company and Indian contacts — the lightest-touch of the four, and the most restricted.",
  },
  {
    title: "Branch Office",
    body: "Can undertake the specific revenue-generating activities RBI permits, invoice in India, and repatriate profits — but only within that approved scope. It cannot manufacture (outside an SEZ) or engage in retail trading.",
  },
  {
    title: "Project Office",
    body: "Set up for the limited duration of a specific contract, typically where a foreign company has secured a project from an Indian company and needs a temporary India-based presence to execute it. Unlike a Branch or Liaison Office, a Project Office does not require RBI to issue a Unique Identification Number (UIN) in the same way.",
  },
  {
    title: "Wholly Owned Subsidiary",
    body: "A fully independent Indian company, able to undertake any lawful business activity within its objects, raise equity or debt locally, and operate with far more commercial flexibility than any of the three RBI-regulated structures above — at the cost of full incorporation, statutory audit, and Companies Act compliance.",
  },
]

const eligibility = [
  "A net worth of at least USD 50,000 (or its equivalent), evidenced by the applicant's latest audited balance sheet or a certificate from its bankers/auditors.",
  "A profitable track record over the preceding three financial years, evidenced through audited financial statements.",
]

const documents = [
  "Certificate of incorporation/registration and Memorandum & Articles of Association of the parent company (attested)",
  "Latest audited financial statements of the parent company",
  "Bankers' report from the parent's principal banker, confirming the banking relationship and the parent's standing",
  "A letter or board resolution from the parent company authorising the Liaison Office and specifying the activities proposed to be undertaken in India",
  "Details of the proposed local representative/authorised signatory in India",
]

const permitted = [
  "Represent the parent company in India and act as a communication channel between the parent and Indian parties",
  "Promote export/import trade between India and the country in which the parent is incorporated",
  "Carry out market research on behalf of the parent",
  "Promote technical or financial collaborations between the parent (or an overseas group company) and Indian companies",
]

const prohibited = [
  "Undertake any commercial, trading, or industrial activity, directly or indirectly",
  "Invoice Indian customers or generate income of any kind in India",
  "Enter into contracts or negotiate binding commercial terms on the parent's behalf in a way that goes beyond communicating positions between the two sides",
]

const closureSteps = [
  "RBI approval for closure, applied for through the same AD Category-I bank that handled the original establishment.",
  "An auditor's certificate confirming that all liabilities in India have been settled, or making adequate provision for any liabilities that remain outstanding.",
  "Form FC-2, filed with the ROC to intimate cessation of the foreign establishment, under Section 380(3) of the Companies Act, 2013.",
  "Form 15CA/15CB for the final remittance of any remaining funds back to the parent company — the tax forms confirming the remittance's tax position before funds leave India.",
]

const faqs = [
  {
    q: "What is a liaison office in India?",
    a: "A Liaison Office is a representative presence a foreign company can establish in India under RBI/FEMA approval, without incorporating a separate legal entity. It has no shareholding, board, or corporate identity of its own — legally, the parent company itself is maintaining the presence — and it exists to communicate, coordinate, and research on the parent's behalf, not to trade or generate revenue.",
  },
  {
    q: "Can a liaison office earn income or generate revenue in India?",
    a: "No. This is the defining restriction on the structure: a Liaison Office cannot invoice Indian customers, cannot undertake commercial or trading activity, and cannot earn income of any kind in India. Its entire cost base is funded by remittances from the parent company, not by local revenue. If your plan involves generating India-side income, a Liaison Office isn't the right vehicle — a Branch Office or a subsidiary is.",
  },
  {
    q: "What is the difference between a liaison office and a branch office in India?",
    a: "A Liaison Office cannot generate any revenue in India — it exists only to represent and communicate on the parent's behalf. A Branch Office can undertake specific RBI-permitted revenue-generating activities and invoice Indian customers, but within a defined, approved scope. Eligibility thresholds also differ: a Liaison Office needs USD 50,000 net worth and a three-year profit track record, against USD 100,000 and five years for a Branch Office.",
  },
  {
    q: "What is Form FNC, and how is it filed for a liaison office?",
    a: "Form FNC (Form for Foreign Companies) is the application through which a foreign company applies to establish a Liaison Office — the same form used for Branch and Project Office applications — filed under the applicable annex of FED Master Direction No. 10/2015-16 (worth confirming against the current Master Direction text at the time of filing, since annex numbering is periodically revised) with the applicant's designated AD Category-I bank, along with supporting documents including the parent's incorporation documents, audited financials, a banker's report, and board authorisation for the India establishment.",
  },
  {
    q: "What are the eligibility requirements for a liaison office in India?",
    a: "A net worth of at least USD 50,000 (or its equivalent), evidenced by the latest audited balance sheet or a banker's/auditor's certificate, and a profitable track record over the preceding three financial years. Where an applicant doesn't independently meet these thresholds, a parent or group company that does can back the application with a Letter of Comfort.",
  },
  {
    q: "How long is RBI approval valid for a liaison office — does it need to be renewed?",
    a: "Currently, three years, reduced to two years for applicants in the NBFC and construction-development sectors, renewable through the AD Category-I bank that handled the original approval. This is firm, current law under FEMA 22(R)/2016-RB. RBI's pending October 2025 draft regulations propose removing this fixed cycle entirely, but that draft has not been notified and is not yet in effect — plan your renewal calendar against the current three-year/two-year rule.",
  },
  {
    q: "Is a liaison office a permanent establishment (PE) for tax purposes?",
    a: "Not automatically, but the protection isn't unconditional. Under Section 9 of the Income-tax Act, 2025, and the PE article of the applicable DTAA, an office whose activity goes beyond genuinely preparatory or auxiliary work — for example, negotiating deal terms rather than simply relaying inquiries to the parent — risks being treated as a PE, which brings India tax exposure on profits attributable to that activity. Staying inside the approved liaison/coordination scope is what keeps the PE risk low.",
  },
  {
    q: "Does a liaison office need GST registration?",
    a: "Not by default — a compliant Liaison Office isn't supplying goods or services in India, so there's no taxable outward supply to register against. Registration can be triggered if actual activity drifts into taxable-supply territory, including cost-reimbursement arrangements with the parent that get mischaracterised as a service rather than genuine expense funding.",
  },
  {
    q: "How many employees can a liaison office hire?",
    a: "There's no fixed headcount cap in the regulation itself, but a Liaison Office is inherently a small, coordination-focused presence rather than an operating team — staff are hired for the liaison and research activity the office is permitted to carry out, subject to standard Indian labour-law and payroll obligations, not to run a commercial operation.",
  },
  {
    q: "Should we set up a liaison office first and convert it to a subsidiary later?",
    a: "It can work as a sequencing strategy, but there's no formal legal mechanism to \"convert\" a Liaison Office directly into a subsidiary — the two are fundamentally different things (a representative presence with no legal identity versus an independently incorporated company), so one doesn't transform into the other. If a Liaison Office has served its purpose and you're ready to move to a subsidiary, the office has to be formally wound down — RBI approval for closure through the AD bank, an auditor's certificate, and Form FC-2 under Section 380(3) of the Companies Act — and the subsidiary has to be separately, newly incorporated. A Liaison Office is the right fit where the need really is time-bound research or coordination; if you're already fairly confident you'll need a full operating entity within a year or so, going straight to a Wholly Owned Subsidiary is usually simpler than standing up a Liaison Office and separately winding it down later.",
  },
  {
    q: "Can a company from Nepal, Pakistan, China or Bangladesh open a liaison office in India?",
    a: "It depends on nationality, and for Nepal specifically, it runs in an unusual direction: an entity incorporated in Nepal may establish a Liaison Office in India but is not permitted to establish a Branch Office. Applications connected to Pakistan are routed through RBI's government-consultation process regardless of where in India the office is proposed. For Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau, the government-consultation route applies specifically where the application also proposes an office location in Jammu & Kashmir, the North-Eastern states, or the Andaman & Nicobar Islands — nationality alone doesn't trigger it, so an applicant from one of these countries proposing an office in a city like Mumbai or Bangalore isn't automatically subject to the same restriction. This changes the approval route and timeline where it applies, but doesn't automatically rule out an application.",
  },
  {
    q: "How do you close a liaison office in India?",
    a: "Through a defined sequence: RBI approval for closure via the AD Category-I bank, an auditor's certificate confirming Indian liabilities are settled, Form FC-2 filed with the ROC under Section 380(3) of the Companies Act, 2013, and Form 15CA/15CB for the final remittance of remaining funds to the parent company.",
  },
]

export default function LiaisonOfficeInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Liaison Office in India" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">India Entry</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold md:text-5xl">
            Liaison Office in India: A Complete Guide to RBI Approval, Eligibility and Compliance
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-white/85">
            A Liaison Office in India is the lightest-touch, most restricted way a foreign company can maintain a presence there. It has no separate legal identity, cannot earn a rupee of revenue here, and exists purely to represent the parent company and act as a communication channel between it and Indian contacts. Companies use it to run market research, coordinate with Indian suppliers or customers, or explore the market before committing to something heavier — not to trade, invoice, or operate commercially.
          </p>
          <p className="text-white/70 leading-relaxed">
            It is governed directly by the Reserve Bank of India under India&apos;s foreign exchange law, not by the Companies Act incorporation route most people associate with &quot;setting up a company in India.&quot; That distinction matters throughout this guide: a Liaison Office is approved and registered, not incorporated.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-12 bg-gray-100 border-y">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "3 Years", label: "Standard validity period*" },
              { value: "Zero", label: "Permitted revenue generation" },
              { value: "FEMA 22(R)", label: "Governing RBI regulation" },
              { value: "New Delhi", label: "Based, serving global clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-600 mb-1">{stat.value}</div>
                <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">*2 years for NBFC and construction-development sector applicants — see the Validity section below.</p>
        </div>
      </section>

      {/* WHAT IS A LIAISON OFFICE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is a Liaison Office in India?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Liaison Office is not a separate legal entity. It is an extension of the foreign parent — there is no Indian shareholding, no separate board, no distinct corporate personality, and no Memorandum or Articles of Association of its own. Legally, the parent company itself maintains a representative presence in India through the Liaison Office; nothing is incorporated. This is the single fact that shapes everything else on this page: because there is no separate entity, there is also no separate revenue stream. A Liaison Office cannot invoice Indian customers, cannot undertake any commercial or revenue-generating activity, and cannot earn income of any kind in India.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The statutory basis sits in foreign exchange law, not company law. Section 6(6) of the Foreign Exchange Management Act, 1999 (FEMA) empowers the RBI to regulate the establishment in India of a branch, office, or other place of business by a person resident outside India. The operative regulation made under that power — the Foreign Exchange Management (Establishment in India of a Branch Office or a Liaison Office or a Project Office or Any Other Place of Business) Regulations, 2016, commonly cited as FEMA 22(R)/2016-RB — is what this page is written against.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Because a Liaison Office involves no equity capital and no shares to subscribe to, it also sits outside FEMA 20(R)&apos;s Automatic-vs-Government route framework, which governs foreign direct investment into an Indian company&apos;s share capital. A Liaison Office isn&apos;t an &quot;FDI route&quot; question at all — it&apos;s an establishment question under a different regulation entirely. If what you&apos;re actually evaluating is an equity investment into an Indian entity rather than a representative presence, the{" "}
            <Link href="/india-business-setup/fdi-channels" className="text-gold font-semibold hover:underline">FDI Automatic vs Government route</Link> is the relevant page, not this one.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Who this page is for:</strong> foreign companies that need an India-based presence for market research, liaison and coordination work, or exploring the market ahead of a bigger commitment — not companies that already know they need to trade, invoice, or hire at scale in India. If that&apos;s your situation, most companies end up incorporating an Indian subsidiary instead; the{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">company registration guide</Link> covers that route in full.
          </p>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Liaison Office vs Branch Office vs Project Office vs Wholly Owned Subsidiary: Which One Fits?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            These four structures answer different questions, and which one fits depends almost entirely on whether you intend to earn revenue in India at all, and if so, how soon.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {structureComparison.map((item) => (
              <div key={item.title} className="p-6 bg-white border rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            See the full{" "}
            <Link href="/branch-office-in-india" className="text-gold font-semibold hover:underline">Branch Office guide</Link>{" "}
            if a Liaison Office turns out to be too restrictive for what you actually intend to do, or the{" "}
            <Link href="/project-office-in-india" className="text-gold font-semibold hover:underline">Project Office in India guide</Link>{" "}
            if you&apos;ve already secured a specific, time-bound contract rather than needing ongoing representation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If your parent company is based in Australia, the UK, or the US, the decision between a subsidiary and a lighter-touch structure also carries home-country tax consequences — CFC rules, DTAA treatment, and (for US groups) specific US filing obligations — that this page deliberately doesn&apos;t cover, because they differ by jurisdiction. For an Australian parent, see the{" "}
            <Link href="/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india" className="text-gold font-semibold hover:underline">Australia-specific subsidiary vs branch office comparison</Link>; for a UK parent, the{" "}
            <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-gold font-semibold hover:underline">UK-specific comparison</Link>; for a US parent, the{" "}
            <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-gold font-semibold hover:underline">US-specific comparison</Link>.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Can Set Up a Liaison Office — Eligibility Requirements</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Under FEMA 22(R)/2016-RB, a foreign company applying to open a Liaison Office is generally expected to demonstrate:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
            {eligibility.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8">
            Both thresholds are lower than what applies to a Branch Office (USD 100,000 net worth and a five-year profitable track record) — a pairing of figures that&apos;s easy to mix up if you&apos;re reading across both entity types, so it&apos;s worth being precise about which number applies to which structure. Where an applicant doesn&apos;t independently meet the Liaison Office thresholds but is backed by a parent or group company that does, RBI allows the application to be supported by a Letter of Comfort from that parent/group entity, subject to conditions.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Restricted Countries, Sensitive Sectors, and the Nepal Exception</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nationality and sector both affect whether an application goes through the standard AD-bank channel or needs to be routed to RBI for government-level consultation. Applications are subject to additional scrutiny where the applicant is incorporated in, or its ultimate beneficial owner is a resident of, Pakistan — this triggers RBI&apos;s government-consultation process regardless of where in India the office is proposed. A related but narrower rule applies to applicants connected to Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau: for this group, it&apos;s specifically the combination of that connection with a proposed office location in Jammu &amp; Kashmir, the North-Eastern states, or the Andaman &amp; Nicobar Islands that routes the application through government consultation — nationality alone doesn&apos;t trigger it the way it does for Pakistan, and an applicant from one of these countries proposing an office in Mumbai, Bangalore, or Delhi isn&apos;t automatically subject to the same restriction. Applications proposing a physical location in Jammu &amp; Kashmir, the North-Eastern states, or the Andaman &amp; Nicobar Islands attract additional scrutiny more broadly, as do applications in sectors commonly reported as sensitive — Defence, Telecom, Private Security, and Information &amp; Broadcasting among them, based on current secondary regulatory reporting rather than a directly-cited primary text; it&apos;s worth confirming this list against the current Master Direction/FEMA 22(R) text for your specific sector before filing, since sector classifications are occasionally revised. None of this rules out an application — it changes the approval route and the review timeline.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nepal is a genuine exception worth knowing if it applies to you: an entity incorporated in Nepal may establish a Liaison Office in India, but is not permitted to establish a Branch Office — a restriction that runs the opposite way from most of the sensitive-country handling above, and one that rarely surfaces in general coverage of this topic.
          </p>

          <div className="p-6 border-l-4 border-gold bg-secondary/30 rounded-r-lg">
            <p className="font-bold text-gray-900 mb-2">Regulatory watch — RBI&apos;s October 2025 draft Establishment Regulations</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              RBI has published a draft set of regulations (the draft Foreign Exchange Management (Establishment in India of a Branch or Office) Regulations, 2025) proposing a more principle-based framework for Branch, Liaison, and Project Offices, including a proposal to remove the current net-worth and profit-track-record eligibility thresholds and to eliminate the Liaison Office&apos;s fixed validity/renewal cycle described later on this page. <strong>This draft has not been notified in the Official Gazette and is not yet law.</strong> FEMA 22(R)/2016-RB remains the framework currently in force, and this page is written against that operative regulation. If you&apos;re planning a Liaison Office application now, plan against the 2016 rules — not the draft — and re-check the notification status before you file.
            </p>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">RBI Approval: How the Process Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An <strong>AD Category-I bank</strong> — a bank specifically authorised by RBI to deal in foreign exchange at this level — is the applicant&apos;s actual point of contact, not RBI directly. The application is filed with the AD bank, which reviews it and either processes it itself under the Automatic route or forwards it to RBI&apos;s Foreign Exchange Department for specific approval, depending on the applicant&apos;s sector and the restricted-country/sensitive-sector factors described above.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is a different mechanism from the FDI equity Automatic-vs-Government route that applies when a foreign investor is subscribing to shares in an Indian company under FEMA 20(R) — that route governs capital investment into an Indian entity&apos;s share capital, not the establishment of a Liaison Office. The two frameworks share similar vocabulary (&quot;Automatic&quot; and &quot;Government/Approval&quot;) but sit under different regulations and answer different questions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>On timeline:</strong> there isn&apos;t a single number that honestly describes how long RBI/AD-bank approval takes, and a page that states one flat figure is oversimplifying. Processing time depends heavily on route — an application that qualifies for AD-bank-level processing under the Automatic route moves materially faster than one that has to be forwarded to RBI for government consultation because of a restricted-country or sensitive-sector factor — and on how complete the initial filing is. Publicly available estimates for the two ends of this range vary considerably depending on the source, which is itself a sign that no single figure should be treated as authoritative without checking it against RBI&apos;s own published guidance for your specific route. Rather than plan around a fixed number of weeks, build in time for document preparation, attestation of foreign documents, and at least one round of clarification queries — and expect a government-route or restricted-country application to take meaningfully longer than a standard AD-bank-processed one.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Register a Liaison Office: Form FNC, Documents and Post-Approval Registration</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The application is made on <strong>Form FNC</strong> (Form for Foreign Companies) — the same application form used across Liaison, Branch, and Project Office applications — filed with the designated AD Category-I bank under the applicable annex of FED Master Direction No. 10/2015-16. That exact annex reference is worth confirming against the current, in-force Master Direction text at the time of filing — Master Directions are periodically consolidated and their annexes renumbered, so a letter or number cited today isn&apos;t guaranteed to still match by the time you apply. The typical supporting document set includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            {documents.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Once RBI/AD-bank approval is granted, RBI allots the Liaison Office a <strong>Unique Identification Number (UIN)</strong>. Separately, the Liaison Office must also be registered with the <strong>Ministry of Corporate Affairs (MCA)/Registrar of Companies (ROC)</strong> as a foreign establishment, by filing <strong>Form FC-1</strong> within 30 days of setting up the place of business in India, along with the RBI approval letter and supporting documents. It&apos;s worth being precise about what this step actually is: it&apos;s a <strong>registration</strong>, not an incorporation — a Liaison Office never receives a Certificate of Incorporation, has no MOA/AOA of its own, and doesn&apos;t come into existence as a distinct legal person the way a subsidiary does. RBI approval and ROC registration are two separate, sequential steps under two different authorities, and a Liaison Office isn&apos;t fully compliant until both are complete.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What a Liaison Office Can and Cannot Do — Leading With the Boundary, Not the Benefits</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before the list of what a Liaison Office is permitted to do, it&apos;s worth being direct about where that permission actually ends — because that boundary, not the list of permitted activities, is what a careful reader should be planning around. A Liaison Office exists to represent, research, and communicate on the parent&apos;s behalf. The moment its on-ground activity starts to look like it&apos;s actually doing business in India — negotiating and closing deals, fulfilling orders, taking on commercial risk — it has stepped outside what RBI has approved, and separately, it has likely created a tax exposure that a purely representative office wouldn&apos;t have.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">Within that boundary, a Liaison Office may:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            {permitted.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">It may <strong>not</strong>, under any circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            {prohibited.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8">
            A Liaison Office can hire local staff in India for the liaison and coordination activity it&apos;s permitted to carry out, subject to the standard Indian labour-law and payroll obligations that apply to any employer — a factual point, not an invitation to build out finance or HR operations the way a revenue-generating entity would.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">When Liaison Activity Crosses Into a Permanent Establishment</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Because a Liaison Office isn&apos;t supposed to generate income in India, it isn&apos;t supposed to create an Indian tax filing position for the parent either — but that protection depends entirely on staying inside the activity boundary above, and it isn&apos;t automatic. Under Section 9 of the Income-tax Act, 2025 (India&apos;s current income tax law, successor to the equivalent business-connection provision in the 1961 Act), and under the Permanent Establishment (PE) article (typically Article 5) of the relevant Double Taxation Avoidance Agreement, an office that engages in activity beyond genuinely &quot;preparatory or auxiliary&quot; work risks being treated as a PE of the parent in India — at which point profits attributable to that activity become taxable here, regardless of what the office was originally approved to do.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            The practical test is closer to substance than form. Relaying a customer&apos;s inquiry back to the parent for a decision is squarely inside the permitted, preparatory-and-auxiliary activity a Liaison Office is meant to carry out. Negotiating contract terms, agreeing pricing, or otherwise committing the parent to a deal on the ground in India is a different thing entirely — even if nothing is formally invoiced from the Liaison Office itself, that pattern of activity is what tax authorities and courts have looked at in finding a PE. Where an office&apos;s day-to-day activity is genuinely limited to research, coordination, and communication, PE exposure stays low; where local staff start acting as the parent&apos;s de facto sales or contracting function, the exposure becomes real. For a fuller picture of how India&apos;s international tax and DTAA framework applies to a foreign parent more broadly, see{" "}
            <Link href="/services/taxation-regulatory" className="text-gold font-semibold hover:underline">International Taxation and DTAA Advisory</Link>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Does a Liaison Office Need GST Registration?</h3>
          <p className="text-gray-600 leading-relaxed">
            Not by default. A compliant Liaison Office isn&apos;t supplying goods or services in India — it has no revenue and no taxable outward supply — so GST registration isn&apos;t automatically triggered simply by operating one. That changes if the office&apos;s actual activity drifts into something that looks like a taxable supply, including arrangements around cost reimbursement to the parent that get mischaracterised as a service being rendered rather than genuine expense funding. The underlying test tracks the same form-versus-substance question as the PE discussion above: it&apos;s what the office actually does, not what it was approved to do, that determines the GST position. For the fuller GST framework that would apply if this becomes a live question for your structure, see{" "}
            <Link href="/services/taxation-regulatory" className="text-gold font-semibold hover:underline">International Taxation and DTAA Advisory</Link>.
          </p>
        </div>
      </section>

      {/* AAC + VALIDITY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Compliance: The Annual Activity Certificate (AAC) and Validity/Renewal</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            A Liaison Office&apos;s central recurring compliance obligation is the <strong>Annual Activity Certificate (AAC)</strong> — an annual filing, certified by a chartered accountant, confirming that the office&apos;s activities during the year stayed within the scope RBI approved. The AAC is routed to <strong>two</strong> authorities in parallel: the AD Category-I bank through which the Liaison Office was approved, and the <strong>Directorate General of Income Tax (International Taxation)</strong>, New Delhi. This dual-authority routing is a detail worth understanding precisely — one channel confirms the activity stayed within the FEMA-approved scope, the other feeds the tax administration&apos;s own record of the office&apos;s operations. The AAC is only one part of a Liaison Office&apos;s broader compliance calendar; for the fuller picture of what registered foreign establishments in India need to stay on top of, see{" "}
            <Link href="/india-business-setup/regulatory-compliance" className="text-gold font-semibold hover:underline">ongoing regulatory compliance</Link>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Validity and Renewal</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike a Branch Office — where we were not able to confirm a fixed numeric validity period against a primary RBI source — a Liaison Office&apos;s approval <strong>is</strong> subject to a clearly defined, fixed validity period under FEMA 22(R)/2016-RB: generally <strong>three years</strong>, reduced to <strong>two years</strong> for applicants in the NBFC and construction-development sectors. Renewal is processed through the same AD Category-I bank that handled the original approval, rather than requiring a fresh application from scratch. This is a firm, current rule, and it&apos;s the one point where the Liaison Office and Branch Office pages genuinely diverge — Branch Offices don&apos;t have an equivalent confirmed fixed cycle, while Liaison Offices clearly do.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That said, it&apos;s worth reading this alongside the regulatory-watch note above: RBI&apos;s pending, unnotified October 2025 draft specifically proposes eliminating this fixed validity/renewal cycle altogether as part of its broader principle-based framework. As of this page&apos;s publish date, that proposal is not in effect. Plan your renewal calendar against the current three-year/two-year cycle, and revisit this section if the draft is ever notified.
          </p>
        </div>
      </section>

      {/* CLOSURE */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Closing or Winding Up a Liaison Office</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Winding up a Liaison Office follows a defined sequence, and the steps need to happen in the right order:</p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-4">
            {closureSteps.map((item) => (<li key={item}>{item}</li>))}
          </ol>
          <p className="text-gray-600 leading-relaxed">Each of these steps sits with a different authority, and skipping or misordering one is a common cause of delay at closure.</p>
        </div>
      </section>

      {/* AU CORPORATE SUPPORT + CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How AU Corporate Supports Liaison Office Registration and Compliance</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Setting up and running a Liaison Office involves coordinating several authorities that don&apos;t share a single filing system: RBI (which grants establishment approval, acting through the AD bank), the AD Category-I bank itself (the channel through which Form FNC is filed and the AAC is later routed, and through which renewal of the validity cycle is processed), the ROC/MCA (which separately registers the office under Form FC-1 and later processes the Form FC-2 closure filing), and the Directorate General of Income Tax, International Taxation (the second AAC-routing destination, and the authority relevant to the PE question if the office&apos;s activity is ever reviewed). AU Corporate coordinates this sequence end to end — preparing and filing Form FNC through the AD bank, managing the parallel Form FC-1/ROC registration, handling the annual AAC filing and its dual routing, tracking the three-year/two-year renewal cycle, advising on where the PE and GST boundary sits for your specific activity, and managing eventual closure — so the RBI, banking, company-law, and tax threads stay aligned rather than being tracked as separate, disconnected filings.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If a Liaison Office looks like the right structure for your India presence, our team can walk through the eligibility position and the RBI/AD-bank process for your specific situation —{" "}
            <Link href="/contact" className="text-gold font-semibold hover:underline">get in touch</Link> to start that conversation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* END-OF-PAGE CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Deciding If a Liaison Office Fits Your India Entry?"
            description="Whether you're still weighing a Liaison Office against a subsidiary or ready to file Form FNC, our team can walk through RBI/AD-bank approval, eligibility, and the compliance calendar that follows for your specific situation."
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "Branch Office in India",
                href: "/branch-office-in-india",
                description: "The revenue-generating alternative, for readers who conclude a Liaison Office is too restrictive.",
              },
              {
                label: "Company Registration in India",
                href: "/india-business-setup/company-formation",
                description: "The full incorporation guide for readers who need a Wholly Owned Subsidiary instead.",
              },
              {
                label: "The FDI Automatic vs Government Route",
                href: "/india-business-setup/fdi-channels",
                description: "The separate equity-investment framework under FEMA 20(R), distinct from a Liaison Office's FEMA 22(R) establishment route.",
              },
              {
                label: "International Taxation and DTAA Advisory",
                href: "/services/taxation-regulatory",
                description: "The fuller tax-service picture for the PE and GST questions raised on this page.",
              },
              {
                label: "Ongoing Regulatory Compliance",
                href: "/india-business-setup/regulatory-compliance",
                description: "The broader compliance landscape for entities carrying foreign investment.",
              },
              {
                label: "US Subsidiary vs Branch Office in India",
                href: "/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india",
                description: "Country-specific comparison for readers whose parent company is based in the US.",
              },
              {
                label: "UK Subsidiary vs Branch Office in India",
                href: "/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india",
                description: "Country-specific comparison for readers whose parent company is based in the UK.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
