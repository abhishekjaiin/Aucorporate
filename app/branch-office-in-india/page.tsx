import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"

const structureComparison = [
  {
    title: "Liaison Office",
    body: "A representative/communication channel only. It cannot undertake any commercial or revenue-generating activity, invoice Indian customers, or earn income in India. It exists purely to liaise between the parent company and Indian contacts.",
  },
  {
    title: "Branch Office",
    body: "Can undertake the specific revenue-generating activities RBI permits, invoice in India, and repatriate profits — but only within that permitted scope. It cannot manufacture (outside an SEZ) or engage in retail trading.",
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
  "A net worth of at least USD 100,000 (or its equivalent), evidenced by the applicant's latest audited balance sheet or a certificate from its bankers/auditors.",
  "A profitable track record over the preceding five financial years, evidenced through audited financial statements.",
]

const documents = [
  "Certificate of incorporation / registration and Memorandum & Articles of Association of the parent company (attested)",
  "Latest audited financial statements of the parent company",
  "Bankers' report from the parent's principal banker, confirming the banking relationship and the parent's standing",
  "A letter or board resolution from the parent company authorising the Branch Office and specifying the activities proposed to be undertaken in India",
  "Details of the proposed local representative/authorised signatory in India",
]

const permitted = [
  "Export and import of goods",
  "Rendering professional or consultancy services",
  "Carrying out research work in areas in which the parent company is engaged",
  "Promoting technical or financial collaborations between Indian companies and the parent or overseas group company",
  "Representing the parent company in India and acting as a buying/selling agent",
  "Rendering IT and software development services in India",
  "Providing technical support for the products supplied by the parent/group company",
  "Representing a foreign airline or shipping line",
]

const prohibited = [
  "Engage in retail trading of any kind",
  "Carry out manufacturing or processing activities in India, directly or indirectly — except within a Special Economic Zone (SEZ), where a Branch Office may manufacture under the applicable SEZ regime",
  "Practice Indian law",
]

const closureSteps = [
  "RBI approval for closure, applied for through the same AD Category-I bank that handled the original establishment.",
  "An auditor's certificate confirming that all liabilities in India have been settled, or making adequate provision for any liabilities that remain outstanding.",
  "ROC closure certificate from the Registrar of Companies, formally closing the foreign company registration made at the time of establishment.",
  "Form 15CA/15CB for the final remittance of any remaining funds back to the parent company — the tax forms confirming the remittance's tax position before funds leave India.",
]

const faqs = [
  {
    q: "Who approves a branch office in India — RBI or MCA?",
    a: "Both, at different stages and for different purposes. RBI, acting through the applicant's AD Category-I bank, approves the establishment of the Branch Office under FEMA 22(R)/2016-RB — this is the foreign-exchange-law approval that must come first. Separately, the MCA/ROC registers the Branch Office as a foreign company under Section 380 of the Companies Act, 2013, once RBI approval is in hand. Neither one substitutes for the other; a Branch Office needs both.",
  },
  {
    q: "What is the difference between a branch office and a liaison office (and a project office) in India?",
    a: "A Liaison Office cannot generate any revenue in India — it exists only to represent and communicate on the parent's behalf. A Branch Office can undertake specific RBI-permitted revenue-generating activities and invoice Indian customers, but within a defined, approved scope. A Project Office is set up for the duration of a specific contract a foreign company has secured in India, and unlike a Branch or Liaison Office, it does not require RBI to issue a UIN in the same way.",
  },
  {
    q: "What is the difference between a branch office and a subsidiary company in India?",
    a: "A Branch Office is an extension of the foreign parent with no separate legal identity and a narrowly RBI-approved scope of activity; a subsidiary is an independently incorporated Indian company that can undertake any lawful business within its objects, with its own board and its own tax and compliance obligations as a domestic company. Which one fits depends heavily on your parent company's home jurisdiction and how it treats each structure for CFC/DTAA purposes.",
  },
  {
    q: "What activities can a branch office undertake in India, and what is it not allowed to do?",
    a: "Permitted activities include export/import of goods, professional and consultancy services, parent-directed research, promoting technical/financial collaborations, acting as a buying/selling agent, IT and software services, technical support for the parent's products, and representing a foreign airline or shipping line — but only within the specific scope RBI has approved. A Branch Office cannot engage in retail trading or carry out manufacturing/processing in India (except within an SEZ), and cannot practice Indian law.",
  },
  {
    q: "Can a branch office in India hire local employees?",
    a: "Yes. A Branch Office can hire staff in India for the activities it is permitted to carry out, subject to standard Indian labour-law, payroll, and statutory-benefits obligations that apply to any employer.",
  },
  {
    q: "What is Form FNC, and how is it filed?",
    a: "Form FNC (Form for Foreign Companies) is the application through which a foreign company applies to establish a Branch Office (or Liaison/Project Office) in India. It is filed with the applicant's designated AD Category-I bank, along with supporting documents including the parent company's incorporation documents, audited financials, a banker's report, and board authorisation for the India establishment.",
  },
  {
    q: "How long does RBI approval for a branch office take?",
    a: "There isn't a fixed statutory number of days. The timeline depends on whether the application is processed under the Automatic route (through the AD bank alone) or the Approval route (forwarded to RBI), how complete the initial filing is, and whether any clarification queries come back from the AD bank or RBI during review. Build in time for document preparation and at least one review cycle rather than planning against a fixed figure.",
  },
  {
    q: "How long can a branch office operate in India — does the approval need to be renewed?",
    a: "Unlike a Liaison Office, which is clearly subject to a fixed renewal cycle, we were unable to confirm a specific numeric validity/renewal period for Branch Offices against a primary RBI source. The accurate answer is that a Branch Office continues to operate for as long as its RBI/AD-bank approval and AAC compliance remain in good standing, rather than against a fixed calendar expiry.",
  },
  {
    q: "What is the Annual Activity Certificate (AAC), and when is it due?",
    a: "The AAC is an annual, CA-certified filing confirming that the Branch Office's activities during the year stayed within its RBI-approved scope. It is filed each year following the close of the financial year and routed to both the AD Category-I bank and the Directorate General of Income Tax (International Taxation).",
  },
  {
    q: "How is a branch office taxed in India?",
    a: "As a foreign company with a Permanent Establishment in India — currently a 35% base corporate tax rate (reduced from 40% under the Finance Act 2024), with surcharge and cess bringing the effective rate to roughly 36-38%. There's no separate dividend-withholding event on profit remittance since a branch has no shares to pay dividends on, but transfer pricing rules apply to transactions with the parent, and profit attribution to the Indian PE is a genuine, recurring area of engagement with tax authorities rather than a mechanical calculation.",
  },
  {
    q: "Can a company from Pakistan, China or Bangladesh open a branch office in India?",
    a: "It depends on nationality and sector, not a flat yes/no. Applications connected to Pakistan face additional scrutiny, and applications connected to Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau are routed through a government-consultation process rather than the standard AD-bank channel. This changes the approval route and timeline; it doesn't automatically rule out an application.",
  },
  {
    q: "How do you close or wind up a branch office in India?",
    a: "Through a defined sequence: RBI approval for closure via the AD Category-I bank, an auditor's certificate confirming Indian liabilities are settled, a ROC closure certificate formally ending the foreign company registration, and Form 15CA/15CB for the final remittance of remaining funds to the parent company.",
  },
]

export default function BranchOfficeInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Branch Office in India" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">India Entry</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Branch Office in India: A Complete Guide to RBI Approval, Setup and Compliance
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-gray-600">
            A Branch Office in India is one of the narrower, more specific ways a foreign company can establish a presence here — used by companies that want to trade, provide services, or represent the parent&apos;s interests without setting up a separate Indian subsidiary. It is governed directly by the Reserve Bank of India under India&apos;s foreign exchange law, not by the Companies Act incorporation route most people associate with &quot;setting up a company in India.&quot;
          </p>
          <p className="text-gray-600 leading-relaxed">
            This guide walks through what a Branch Office is, who can open one, how RBI approval and registration actually work, what a Branch Office is and isn&apos;t allowed to do, how it is taxed, and what closing one down involves.
          </p>
        </div>
      </section>

      {/* WHAT IS A BRANCH OFFICE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is a Branch Office in India?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Branch Office is not a separate legal entity. It is an extension of the foreign parent company operating inside India — there is no separate Indian shareholding, no separate board, and no separate corporate personality. Legally, the parent company itself is doing business in India through the branch. This is the single biggest difference between a Branch Office and a wholly owned subsidiary, which is a distinct Indian company incorporated under the Companies Act with its own legal identity. If your intent is to build a fully independent Indian operating company rather than a narrowly scoped extension of the parent, the{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">company registration guide</Link> covers that route in full.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The statutory basis for a Branch Office sits in foreign exchange law, not company law. Section 6(6) of the Foreign Exchange Management Act, 1999 (FEMA) empowers the RBI to regulate the establishment in India of a branch, office, or other place of business by a person resident outside India. The operative regulations made under that power are the Foreign Exchange Management (Establishment in India of a Branch Office or a Liaison Office or a Project Office or Any Other Place of Business) Regulations, 2016 — commonly cited as FEMA 22(R)/2016-RB. This is the framework currently in force, and everything on this page is written against it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Who this page is for:</strong> foreign companies evaluating a specific, narrowly scoped India presence — export/import trading, professional or consultancy services, IT/software delivery, R&amp;D on behalf of the parent, or representing a foreign airline or shipping line — rather than a full commercial Indian operating company. If a Branch Office turns out to be too restrictive for what you actually intend to do in India, most companies in that position end up incorporating an Indian subsidiary instead; see the{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">company registration guide</Link> for that process.
          </p>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Branch Office vs Liaison Office vs Project Office vs Subsidiary: Which One Fits?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            These four structures answer different questions, and the right one depends almost entirely on whether — and how — you intend to earn revenue in India.
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
            A detail worth flagging because it catches people out: <strong>an Indian subsidiary of a foreign company cannot itself open a Branch Office in India under the Automatic route.</strong> If your group already has an Indian subsidiary and is considering layering a Branch Office on top of it, that structure needs specific advice before you file anything.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If a Branch Office looks too commercially active for what you actually need — pure market research or coordination, with no revenue in India at all — see the full{" "}
            <Link href="/liaison-office-in-india" className="text-gold font-semibold hover:underline">Liaison Office in India guide</Link>{" "}
            for the lighter-touch alternative. If instead you&apos;ve already secured a specific, time-bound contract rather than needing an ongoing commercial presence, see the{" "}
            <Link href="/project-office-in-india" className="text-gold font-semibold hover:underline">Project Office in India guide</Link>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If your parent company is based in Australia, the UK, or the US, the decision between a subsidiary and a Branch Office also carries home-country tax consequences — CFC rules, DTAA treatment, and (for US groups) specific US filing obligations — that this page deliberately does not cover, because they differ by jurisdiction. For an Australian parent, see the{" "}
            <Link href="/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india" className="text-gold font-semibold hover:underline">Australia-specific subsidiary vs branch office comparison</Link>; for a UK parent, the{" "}
            <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-gold font-semibold hover:underline">UK-specific comparison</Link>; for a US parent, the{" "}
            <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-gold font-semibold hover:underline">US-specific comparison</Link>.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Can Set Up a Branch Office — Eligibility Requirements</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Under FEMA 22(R)/2016-RB, a foreign company applying to open a Branch Office is generally expected to demonstrate:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
            {eligibility.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8">
            Where an applicant doesn&apos;t independently meet these thresholds but is backed by a parent or group company that does, RBI allows the application to be supported by a Letter of Comfort from that parent/group entity, subject to conditions.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Restricted Countries and Sensitive Sectors</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nationality and sector both affect whether an application goes through the standard AD-bank channel or needs to be routed to RBI for specific government-level consultation. Applications are subject to additional scrutiny where the applicant is incorporated in, or its ultimate beneficial owner is a resident of, Pakistan, and are routed through a government-consultation process for applicants connected to Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau. Applications proposing a physical location in Jammu &amp; Kashmir, the North-Eastern states, or the Andaman &amp; Nicobar Islands also attract additional scrutiny, as do applications in sectors such as Defence, Telecom, Private Security, and Information &amp; Broadcasting. None of this makes an application impossible — it changes the approval route and the review timeline, and it&apos;s worth knowing before you plan around a standard-route timeline.
          </p>

          <div className="p-6 border-l-4 border-gold bg-secondary/30 rounded-r-lg">
            <p className="font-bold text-gray-900 mb-2">Regulatory watch — RBI&apos;s October 2025 draft Establishment Regulations</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              RBI has published a draft set of regulations (the draft FEMA Establishment in India of a Branch or Office Regulations, 2025) proposing a more principle-based framework for Branch, Liaison, and Project Offices, including expanded delegated authority for AD Category-I banks. <strong>This draft has not been notified in the Official Gazette and is not yet law.</strong> FEMA 22(R)/2016-RB remains the framework currently in force, and this page is written against that operative regulation. If you&apos;re planning a Branch Office application now, plan against the 2016 rules — not the draft — and re-check the notification status before you file.
            </p>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">RBI Approval: Automatic Route vs Approval Route</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether an application is processed under the Automatic route or requires the RBI&apos;s specific Approval route depends on the applicant&apos;s principal business activity. Broadly, applicants whose principal business falls within a sector where 100% foreign direct investment is permitted under the automatic route can generally have their Branch Office application processed by the AD Category-I bank itself, without a separate RBI reference. Applicants in sectors outside that automatic-FDI scope, along with the restricted-country and sensitive-sector cases described above, are routed to RBI for specific approval.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>This is a different mechanism from the FDI equity Automatic-vs-Government route</strong> that applies when a foreign investor is subscribing to equity shares in an Indian company under FEMA 20(R) — that route governs capital investment into an Indian entity&apos;s share capital, not the establishment of a Branch Office. The two frameworks share similar vocabulary (&quot;Automatic&quot; and &quot;Approval/Government&quot;) but sit under different regulations and answer different questions. If what you&apos;re actually evaluating is an equity investment into an Indian subsidiary rather than a Branch Office,{" "}
            <Link href="/india-business-setup/fdi-channels" className="text-gold font-semibold hover:underline">the FDI Automatic vs Government route</Link> is the relevant page.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Either way, an <strong>AD Category-I bank</strong> — a bank specifically authorised by RBI to deal in foreign exchange at this level — is the applicant&apos;s actual point of contact. The application is filed with the AD bank, which reviews it and either processes it directly (Automatic route) or forwards it to RBI with its recommendation (Approval route).
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Register a Branch Office: Process, Documents and Timeline</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The application is made on <strong>Form FNC</strong> (Form for Foreign Companies), filed with the designated AD Category-I bank. The typical supporting document set includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            {documents.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>On timeline:</strong> the review runs through two stages — the AD bank&apos;s own review of the application and documentation, followed (for Approval-route or restricted cases) by RBI&apos;s review once the AD bank forwards the file. The total time this takes depends on how complete the initial filing is and which route the application falls into; it is not a fixed number of days set out in the regulation itself. Rather than plan against a specific figure, build in buffer for document collection, translation/attestation of foreign documents, and at least one round of clarification queries from the AD bank or RBI.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Once RBI/AD-bank approval is granted, RBI allots the Branch Office a <strong>Unique Identification Number (UIN)</strong>. Separately — and this is a distinction competitor pages regularly blur — the Branch Office must also be registered with the <strong>Ministry of Corporate Affairs (MCA)/Registrar of Companies (ROC)</strong> as a foreign company under <strong>Section 380 of the Companies Act, 2013</strong>, by filing <strong>Form FC-1</strong> within 30 days of establishing the place of business in India, along with the RBI approval letter and supporting documents. RBI approval and ROC registration are two separate, sequential steps under two different authorities — the Branch Office is not fully compliant until both are complete.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What a Branch Office Can and Cannot Do in India</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Branch Office may only undertake the activities RBI has specifically permitted, and only those stated in its approval. The permitted list generally covers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            {permitted.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">A Branch Office is <strong>not</strong> permitted to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            {prohibited.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Anything outside the scope RBI has approved for that specific Branch Office is not permitted simply because it fits within the general list above — the approval is activity-specific, not a blanket licence to do anything on the list.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A Branch Office can hire local employees in India for the activities it is permitted to carry out, subject to the usual Indian labour-law and payroll obligations that apply to any employer operating here.
          </p>
        </div>
      </section>

      {/* TAX */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How a Branch Office Is Taxed in India</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For Indian tax purposes, a Branch Office is treated as a <strong>foreign company with a Permanent Establishment (PE) in India</strong>, not as a domestic Indian company. That distinction drives the tax outcome: a foreign company&apos;s India-sourced profits are taxed at the foreign-company rate, which is materially higher than the domestic company rate.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Following the Finance Act 2024 rate change, the base corporate tax rate applicable to a foreign company (including a Branch Office) is <strong>35%</strong> (reduced from the earlier 40%), with the applicable surcharge and health-and-education cess pushing the <strong>effective rate to roughly 36-38%</strong>, depending on the income slab and surcharge bracket.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because a Branch Office is legally the same entity as its foreign parent rather than a locally incorporated subsidiary, there is no separate dividend-distribution or withholding event when profits are remitted to head office — a branch has no shares and pays no dividend; it simply repatriates its own after-tax profits. What does apply, and what genuinely deserves attention, is <strong>profit attribution to the PE</strong> — how much of the group&apos;s overall profit is treated as earned by the Indian branch versus the foreign parent for tax purposes. This is not a mechanical calculation; it is a recurring point of engagement and, at times, negotiation with Indian tax authorities, particularly where the branch&apos;s activities are intertwined with the parent&apos;s global operations. <strong>Transfer pricing provisions</strong> also apply to transactions between the Branch Office and its parent/group companies, since these are related-party dealings even though they sit within a single legal entity.
          </p>
        </div>
      </section>

      {/* AAC + VALIDITY */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Compliance: The Annual Activity Certificate (AAC)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Branch Office&apos;s central recurring compliance obligation is the <strong>Annual Activity Certificate (AAC)</strong> — an annual filing, certified by a chartered accountant, confirming that the Branch Office&apos;s activities during the year stayed within the scope RBI originally approved. This is separate from — and should not be confused with — the FC-GPR/FC-TRS/FLA reporting stack that applies to an Indian company carrying foreign equity investment on its books; a Branch Office doesn&apos;t have equity shareholding in the same sense, so it doesn&apos;t file those returns. See{" "}
            <Link href="/india-business-setup/regulatory-compliance" className="text-gold font-semibold hover:underline">ongoing regulatory compliance</Link> for how that separate reporting stack works for entities that do carry foreign investment.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            The AAC is filed annually, following the close of the financial year, and is routed to <strong>two</strong> authorities in parallel: the AD Category-I bank through which the Branch Office was approved, and the <strong>Directorate General of Income Tax (International Taxation)</strong>. This dual-authority routing — one channel confirming the activity stayed within the FEMA-approved scope, the other feeding the tax administration&apos;s own record of the branch&apos;s operations — is a detail worth understanding precisely rather than treating as a single generic &quot;annual filing.&quot;
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">How Long Can a Branch Office Operate — Validity and Renewal</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is a genuinely confusing point across published sources, and it&apos;s worth being precise about it rather than repeating a figure that may not actually apply. <strong>Liaison Offices</strong> are clearly subject to a fixed validity period (commonly cited as three years, with a shorter cycle for NBFC and construction-development sector applicants) that must be renewed through the AD Category-I bank. That renewal cycle is well established for Liaison Offices specifically.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>For Branch Offices, we were not able to confirm an equivalent fixed numeric validity/renewal period against a primary RBI source in this pipeline research</strong> — a number of secondary sources appear to apply the Liaison Office renewal cycle to Branch Offices as well, which does not hold up on closer reading of how the two structures are actually treated under FEMA 22(R)/2016-RB (a Branch Office, unlike a Liaison Office, is revenue-generating and is not described in the regulation the same way). Rather than assert a specific renewal period we cannot verify, the accurate and honest answer is this: <strong>a Branch Office continues to operate for as long as the underlying RBI/AD-bank approval and AAC compliance remain in good standing.</strong> There is no evidence of a fixed expiry date requiring periodic re-approval in the way a Liaison Office clearly has. If your Branch Office falls out of AAC compliance, or its actual activities drift outside the approved scope, that is the trigger that puts continued operation at risk — not a calendar renewal date.
          </p>
        </div>
      </section>

      {/* CLOSURE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Closing or Winding Up a Branch Office</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Winding up a Branch Office follows a defined sequence, and the steps need to happen in the right order:</p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-4">
            {closureSteps.map((item) => (<li key={item}>{item}</li>))}
          </ol>
          <p className="text-gray-600 leading-relaxed">Each of these steps sits with a different authority, and skipping or misordering one is a common cause of delay at closure.</p>
        </div>
      </section>

      {/* AU CORPORATE SUPPORT + CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How AU Corporate Supports Branch Office Registration and Compliance</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Setting up and running a Branch Office involves coordinating four separate authorities that don&apos;t share a single application or filing system: RBI (which grants establishment approval), the AD Category-I bank (the channel through which the application is filed and the AAC is later routed), the ROC/MCA (which separately registers the branch as a foreign company under Section 380 and later issues the closure certificate), and the Directorate General of Income Tax, International Taxation (the second AAC-routing destination, and the authority relevant to the PE tax position). AU Corporate coordinates this sequence end to end — preparing and filing Form FNC through the AD bank, managing the parallel Form FC-1/ROC registration, handling the annual AAC filing and its dual routing, and advising on the PE tax and profit-attribution position — so the RBI, banking, company-law, and tax threads stay aligned rather than being managed as four disconnected filings.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If a Branch Office looks like the right structure for your India presence, our team can walk through the RBI approval and AD-bank process for your specific situation —{" "}
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
            title="Deciding If a Branch Office Fits Your India Entry?"
            description="Whether you're still weighing a Branch Office against a subsidiary or already have parent-company sign-off, our team can walk through RBI/AD-bank approval, eligibility, and the compliance calendar that follows for your specific situation."
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "Company Registration in India",
                href: "/india-business-setup/company-formation",
                description: "The full incorporation guide for readers who need a wholly owned subsidiary instead of a Branch Office.",
              },
              {
                label: "The FDI Automatic vs Government Route",
                href: "/india-business-setup/fdi-channels",
                description: "The separate equity-investment framework under FEMA 20(R) — different from a Branch Office's FEMA 22(R) route.",
              },
              {
                label: "Ongoing Regulatory Compliance",
                href: "/india-business-setup/regulatory-compliance",
                description: "The broader compliance landscape for entities carrying foreign investment on their books.",
              },
              {
                label: "Wholly Owned Subsidiary in India",
                href: "/blog/wholly-owned-subsidiary",
                description: "A direct comparison of the subsidiary route against a Branch Office.",
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
              {
                label: "Global Capability Center Setup in India",
                href: "/gcc-setup-india",
                description: "For readers whose actual intent is a captive delivery center rather than a narrow Branch Office presence.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
