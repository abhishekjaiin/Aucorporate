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
    body: "Set up for the limited duration of a specific contract, typically where a foreign company has secured a project from an Indian company and needs a temporary India-based presence to execute it. It is registered through the same Form FNC-1/Regulation 5 route used for a Branch or Liaison Office, though unlike a Branch or Liaison Office, it does not appear to be allotted a Unique Identification Number (UIN).",
  },
  {
    title: "Wholly Owned Subsidiary",
    body: "A fully independent Indian company, able to undertake any lawful business activity within its objects, raise equity or debt locally, and operate with far more commercial flexibility than any of the three RBI-regulated structures above — at the cost of full incorporation, statutory audit, and Companies Act compliance.",
  },
]

const regulation5Conditions = [
  "Funded directly by inward remittance from outside India; or",
  "Funded by a bilateral or multilateral international financing agency; or",
  "Cleared by an appropriate authority; or",
  "Being executed for an Indian company or entity that has been granted a term loan by a public financial institution or a bank in India for the project.",
]

const documents = [
  "Certificate of incorporation/registration and Memorandum & Articles of Association of the parent company (attested)",
  "Latest audited financial statements of the parent company",
  "Bankers' report from the parent's principal banker, confirming the banking relationship and the parent's standing",
  "A letter or board resolution from the parent company authorising the Project Office and specifying the project it has been established to execute",
  "Documentation of the underlying contract or project itself, evidencing which of Regulation 5's four general-permission conditions it satisfies (or, for a specific-approval application, the documentation RBI's Central Office will review in its place)",
  "Details of the proposed local representative/authorised signatory in India",
]

const closureSteps = [
  "A chartered accountant's certificate, in the RBI-prescribed format, confirming that all liabilities in India have been settled, or that adequate provision has been made for any liabilities that remain outstanding.",
  "ROC deregistration, formally closing the foreign company registration made at the time of establishment.",
  "Submission to the AD Category-I bank of the CA certificate and the ROC closure certificate.",
  "The AD bank's compliance verification of the closure documentation.",
  "The AD bank's reporting of the closure to RBI, along with a closure declaration.",
  "Form 15CA/15CB for the final remittance of any remaining project funds back to the parent company — the tax forms confirming the remittance's tax position before funds leave India.",
]

const faqs = [
  {
    q: "What is a project office in India?",
    a: "A Project Office is a temporary India presence a foreign company can establish under RBI/FEMA approval, without incorporating a separate legal entity, to execute a specific contract or project it has already secured from an Indian company or entity. It has no separate shareholding, board, or corporate identity of its own — legally, the parent company itself is executing the project through the Project Office — and it exists for the duration of that project, not as an ongoing presence.",
  },
  {
    q: "What is the difference between a branch office, liaison office and project office in India?",
    a: "A Liaison Office cannot generate any revenue in India — it exists only to represent and communicate on the parent's behalf. A Branch Office can undertake specific RBI-permitted revenue-generating activities within a defined, approved scope. A Project Office is narrower still in purpose but is, by definition, executing revenue/contract-linked work: it's set up to carry out one specific, already-secured contract, and its eligibility depends on how that contract is funded or sanctioned rather than on the applicant's net worth or profit track record, which is the test that applies to a Branch or Liaison Office instead.",
  },
  {
    q: "What are the eligibility conditions for a project office under FEMA/Regulation 5?",
    a: "A Project Office qualifies for RBI's general-permission route where the underlying project meets at least one of four conditions: it's funded by inward remittance from abroad, funded by a bilateral or multilateral international financing agency, cleared by an appropriate authority, or the Indian company awarding the contract has been granted a term loan by a public financial institution or bank in India for the project. Unlike a Branch or Liaison Office, there's no separate net-worth or profit-track-record test — eligibility turns on the contract itself.",
  },
  {
    q: "Do I need RBI's specific approval, or can my project office go through the AD-bank general-permission route?",
    a: "It depends on whether the project meets one of Regulation 5's four conditions and whether any restricted-country or sensitive-sector trigger applies. If the project meets a condition and no trigger applies, the application proceeds through the AD Category-I bank under general permission. If it doesn't meet any of the four conditions, or a restricted-country/sensitive-sector factor is present, it needs RBI Central Office's specific approval instead. Either way, the AD bank is your actual filing point of contact.",
  },
  {
    q: "What is Form FNC-1, and how is it filed for a project office?",
    a: "Form FNC-1 is RBI's Project Office-specific application form — hosted on RBI's own site as \"FNC 1 (See Regulation 5)\" — filed through the designated AD Category-I bank along with the parent company's incorporation documents, audited financials, banker's report, board authorisation, and the underlying contract documentation. You'll also see it referred to simply as \"Form FNC,\" the generic name shared with Branch and Liaison Office applications; both labels appear across published guidance.",
  },
  {
    q: "Does RBI issue a Unique Identification Number (UIN) to a project office?",
    a: "Unlike a Branch or Liaison Office, a Project Office does not appear to be allotted a UIN. RBI's UIN-allotment provision is consistently described across independent sources as applying to BO/LO specifically, not BO/LO/PO — a distinction that recurs too consistently across unrelated sources to be a paraphrasing accident, though we haven't confirmed it against RBI's own primary regulation text directly. What's well established either way is that Form FNC-1, filed through the AD Category-I bank, is the operative application tied to Regulation 5's general-permission conditions — that part isn't in doubt.",
  },
  {
    q: "What activities can a project office undertake in India?",
    a: "A Project Office's activity is limited to the specific contract RBI approved it against. It can carry out the work directly connected to executing that project — engineering, construction, installation, project management, and related site activity, for example — but it can't take on unrelated work, additional contracts, or general commercial trading simply because it has a functioning India office and staff in place. A second, unrelated project needs its own fresh application.",
  },
  {
    q: "Does a project office create a Permanent Establishment (PE) for tax purposes?",
    a: "It's the entity type in this three-page comparison most likely to. A Project Office is, by definition, executing revenue/contract-linked work in India — exactly the fact pattern construction/installation PE clauses in India's DTAAs are written to capture — and those clauses typically run on a shorter activity-duration threshold than the general fixed-place-of-business PE test. The exact threshold varies by which DTAA applies to your parent company's home jurisdiction, so we won't state a single universal figure here; confirm it against your specific treaty. Where a PE is found, profit attribution to that PE — not a flat number — is the genuine, recurring technical question.",
  },
  {
    q: "Does a project office need GST registration?",
    a: "Often yes, and it should be treated as a live question rather than assumed away. Because a Project Office is revenue/contract-linked by definition, its GST position depends on the nature of the supplies involved and where it sits in the contract's supply chain — unlike a Liaison Office, which typically has no taxable outward supply to register against. Reverse-charge treatment can also apply to payments the Project Office makes back to its parent company, depending on how that arrangement is structured.",
  },
  {
    q: "What is the Annual Activity Certificate (AAC), and when is it due for a project office?",
    a: "The AAC is an annual, CA-certified filing confirming the Project Office's activities during the year stayed within the scope of its approved project. It's filed each year following the close of the financial year and routed to two authorities in parallel: the AD Category-I bank through which the Project Office was approved, and the Directorate General of Income Tax (International Taxation).",
  },
  {
    q: "How long does a project office have to open after approval?",
    a: "A Project Office generally has six months from the date of approval to actually open, with a further six-month extension available at RBI's discretion for reasons beyond the applicant's control. This is well-corroborated across multiple independent sources, though not confirmed against RBI's own Master Direction text directly — confirm it with your AD bank if your timeline is tight.",
  },
  {
    q: "Can a company from Pakistan, China or Bangladesh open a project office in India?",
    a: "It depends on nationality and sector, not a flat yes/no. Applications connected to Pakistan face additional scrutiny, and applications connected to Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau are routed through a government-consultation process, particularly where the project is located in the North-Eastern states, Jammu & Kashmir, or the Andaman & Nicobar Islands. Projects in sectors such as Defence, Private Security, Telecom, and Information & Broadcasting attract the same additional scrutiny. None of this rules out an application — it changes the approval route and timeline.",
  },
  {
    q: "How do you close or wind up a project office in India?",
    a: "Through a defined, project-completion-linked sequence: a CA certificate (in the RBI-prescribed format) confirming Indian liabilities are settled or provided for, ROC deregistration, submission of both certificates to the AD Category-I bank, the AD bank's compliance verification, the AD bank's reporting of the closure to RBI with a closure declaration, and Form 15CA/15CB for the final remittance of remaining funds to the parent company.",
  },
]

export default function ProjectOfficeInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Project Office in India" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">India Entry</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Project Office in India: A Complete Guide to RBI Approval, Registration and Compliance
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-gray-600">
            A Project Office in India is the narrowest-purpose, most time-bound way a foreign company can establish a presence here. It is not used for ongoing representation or general trading, but to execute one specific contract it has already won from an Indian company or entity. It is governed directly by the Reserve Bank of India under India&apos;s foreign exchange law, not by the Companies Act incorporation route most people associate with &quot;setting up a company in India.&quot;
          </p>
          <p className="text-gray-600 leading-relaxed">
            This guide walks through who qualifies for a Project Office, how RBI/AD-bank approval and registration actually work, what a Project Office is and isn&apos;t allowed to do, the tax exposure it genuinely creates, and how to close one out cleanly once the project is complete.
          </p>
        </div>
      </section>

      {/* WHAT IS A PROJECT OFFICE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is a Project Office in India?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Project Office is not a separate legal entity. It is an extension of the foreign parent company operating inside India for the duration of a specific, already-secured contract — there is no separate Indian shareholding, no separate board, and no separate corporate personality. Legally, the parent company itself is executing the project in India through the Project Office. If your intent is a fully independent Indian operating company rather than a contract-linked extension of the parent, the{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">company registration guide</Link> covers that route in full.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The statutory basis sits in foreign exchange law, not company law. Section 6(6) of the Foreign Exchange Management Act, 1999 (FEMA) empowers the RBI to regulate the establishment in India of a branch, office, or other place of business by a person resident outside India. The operative regulation made under that power — the Foreign Exchange Management (Establishment in India of a Branch Office or a Liaison Office or a Project Office or Any Other Place of Business) Regulations, 2016, commonly cited as FEMA 22(R)/2016-RB — is what this page is written against. A draft set of RBI Establishment Regulations has circulated since October 2025 proposing a more principle-based framework across all three structures; it has not been notified in the Official Gazette and is not yet law. Plan against FEMA 22(R)/2016-RB, not the draft, and re-check its notification status before you file anything. This establishment route is also separate from the FDI equity-investment framework under FEMA 20(R) — if you&apos;re evaluating putting equity into an Indian company rather than executing a specific contract through an unincorporated presence, see{" "}
            <Link href="/india-business-setup/fdi-channels" className="text-gold font-semibold hover:underline">The FDI Automatic vs Government Route</Link> instead.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            What sets a Project Office apart from a Branch or Liaison Office is not how much commercial activity it can undertake, but why it exists at all. A Project Office is set up for the fixed duration of a specific contract or project a foreign company has already secured from an Indian entity. It is not an ongoing representative presence the way a Liaison Office is, and it is not a general-purpose revenue-generating presence the way a Branch Office is — it exists to execute one project, and it is expected to wind down when that project ends.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Who this page is for:</strong> a foreign company that has already won a specific Indian contract — typically in engineering, construction, infrastructure, or another turnkey project — and needs a compliant, time-bound India presence to execute it, plus a clear picture of the tax exposure that creates and how to close the office out cleanly afterward. If you&apos;re confident you need a full operating company instead, the{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">company registration guide</Link> covers that process.
          </p>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Office vs Branch Office vs Liaison Office vs Wholly Owned Subsidiary: Which One Fits?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            These four structures answer different questions. Broadly: a Liaison Office answers &quot;can I have a representative presence with zero India revenue,&quot; a Branch Office answers &quot;can I trade or deliver services within an RBI-approved scope,&quot; a Wholly Owned Subsidiary answers &quot;do I need a fully independent Indian company,&quot; and a Project Office answers a narrower question again — &quot;I&apos;ve already won a specific contract in India; what do I need to execute it.&quot;
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {structureComparison.map((item) => (
              <div key={item.title} className="p-6 bg-white border rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            If a Project Office turns out to be too narrow for what you actually intend to do — an ongoing commercial presence beyond a single contract — see the full{" "}
            <Link href="/branch-office-in-india" className="text-gold font-semibold hover:underline">Branch Office in India guide</Link>. If what you actually need is a pure, non-revenue representative presence rather than contract execution, see the{" "}
            <Link href="/liaison-office-in-india" className="text-gold font-semibold hover:underline">Liaison Office in India guide</Link>.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Can Set Up a Project Office — Eligibility Under Regulation 5</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Eligibility for a Project Office works differently from a Branch or Liaison Office, and it&apos;s worth being explicit about that because the two frameworks get conflated in a lot of published guidance. A Branch Office needs to demonstrate a minimum net worth and a profitable track record; a Liaison Office needs a lower version of the same test. Neither test applies to a Project Office. What qualifies a Project Office for RBI&apos;s general-permission route is the underlying contract itself — specifically, how that contract is funded or sanctioned — not the applicant&apos;s balance sheet or trading history.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Regulation 5&apos;s Four General-Permission Conditions</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A foreign company qualifies for the general-permission route — meaning the application can proceed through the AD Category-I bank without a separate reference to RBI&apos;s Central Office — where the project it has secured in India meets at least one of four conditions. (We&apos;ve seen &quot;Regulation 5&quot; cited inconsistently against the superseded 2000/2003 notifications this regulation replaced, so treat the reference below as the best-evidenced current citation rather than a number to rely on without checking the notified FEMA 22(R)/2016-RB text yourself.) The four conditions are that the project is:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
            {regulation5Conditions.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8">
            Meeting any one of these four conditions is what opens the general-permission route. A project that doesn&apos;t meet any of them isn&apos;t automatically barred from having a Project Office set up to execute it — it simply means the application doesn&apos;t qualify for the lighter-touch route and needs to go to RBI&apos;s Central Office directly, which is the decision framework the next section covers.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Restricted Countries, Sensitive Sectors and Locations</h3>
          <p className="text-gray-600 leading-relaxed">
            Nationality and sector both affect whether an application goes through the standard AD-bank channel or needs to be routed to RBI for government-level consultation, in the same way they do for Branch and Liaison Office applications. Applications are subject to additional scrutiny where the applicant is incorporated in, or its ultimate beneficial owner is a resident of, Pakistan, and are routed through a government-consultation process for applicants connected to Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau — particularly where the proposed project location sits in the North-Eastern states, Jammu &amp; Kashmir, or the Andaman &amp; Nicobar Islands. Projects in sectors such as Defence, Private Security, Telecom, and Information &amp; Broadcasting attract the same additional scrutiny. None of this rules an application out — it changes the approval route and the review timeline, and it&apos;s worth knowing before you plan a Project Office application around a standard-route timeline.
          </p>
        </div>
      </section>

      {/* ROUTES */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">General Permission vs Specific RBI Approval: Which Route Applies?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Two routes, one point of contact. If the project meets one of Regulation 5&apos;s four conditions and none of the restricted-country or sensitive-sector triggers apply, the application proceeds through the AD Category-I bank under general permission — the bank reviews and processes it itself, without a separate reference to RBI&apos;s Central Office. Where the project doesn&apos;t meet any of the four conditions, or where a restricted-country or sensitive-sector factor applies, the application needs RBI Central Office&apos;s specific approval instead.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Either way, an <strong>AD Category-I bank</strong> — a bank specifically authorised by RBI to deal in foreign exchange at this level — is the applicant&apos;s actual point of contact, not RBI directly. The application is filed with the AD bank, which reviews it and either processes it directly under general permission or forwards it to RBI&apos;s Central Office with its recommendation under the specific-approval route.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Register a Project Office: Form FNC-1, the AD Bank and the Six-Month Opening Window</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The application is made on <strong>Form FNC-1</strong> — RBI&apos;s own hosted version of the form is titled &quot;FNC 1 (See Regulation 5),&quot; which is the most robustly evidenced current name for the Project Office-specific application. Some secondary sources refer to it simply as &quot;Form FNC,&quot; the generic name also used for Branch and Liaison Office applications, so don&apos;t be surprised if you see both labels used interchangeably across published guidance. Either way, it is filed with the designated AD Category-I bank. The typical supporting document set includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            {documents.map((item) => (<li key={item}>{item}</li>))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            One practical detail worth knowing that doesn&apos;t show up on most competitor pages: once approval is granted, a Project Office generally has <strong>six months</strong> from the date of approval to actually open, with a further six-month extension available at RBI&apos;s discretion for reasons beyond the applicant&apos;s control. This is well-corroborated across multiple independent sources, though we haven&apos;t confirmed the exact wording against RBI&apos;s own Master Direction text directly — if your project timeline is tight, it&apos;s worth building this window into your planning and confirming it directly with your AD bank.
          </p>
          <p className="text-gray-600 leading-relaxed">
            One point worth flagging precisely: unlike a Branch or Liaison Office, a Project Office does not appear to be allotted a <strong>Unique Identification Number (UIN)</strong>. RBI&apos;s UIN-allotment provision is consistently described, across independent sources, as applying to BO/LO specifically — not BO/LO/PO — which is a real and recurring distinction rather than an inconsistency in how different sites happen to paraphrase the same rule. This is the better-evidenced position, though it hasn&apos;t been confirmed against RBI&apos;s own primary regulation text directly. What is well established, and not in doubt, is that Form FNC-1, filed through the AD Category-I bank, is the operative application tied to Regulation 5&apos;s general-permission conditions — that mechanism is settled regardless of the UIN position.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ROC Registration — Form FC-1, PAN and TAN</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            RBI/AD-bank approval is only the first of two separate, sequential registrations, and it&apos;s worth not blurring the two the way a lot of published guidance does. Once approval is in hand, the Project Office must also be registered with the <strong>Ministry of Corporate Affairs (MCA)/Registrar of Companies (ROC)</strong> as a foreign company, by filing <strong>Form FC-1</strong> within 30 days of establishing the place of business in India, under <strong>Section 380 of the Companies Act, 2013</strong>, and <strong>Rule 3(3)/3(4) of the Companies (Registration of Foreign Companies) Rules, 2014</strong>. PAN and TAN allotment follow, since the Project Office needs both to operate, pay contractors and staff, and file its own tax returns.
          </p>
          <p className="text-gray-600 leading-relaxed">
            It&apos;s worth being precise about what this second step actually is: it&apos;s a <strong>registration, not an incorporation</strong> — a Project Office never receives a Certificate of Incorporation, has no MOA/AOA of its own, and doesn&apos;t come into existence as a distinct legal person the way a subsidiary does. RBI approval and ROC registration are two separate, sequential steps under two different authorities, and a Project Office isn&apos;t fully compliant until both are complete.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What a Project Office Can and Cannot Do in India</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Project Office&apos;s activity is bounded by the project it was set up to execute, and that boundary is worth stating as an operating rule rather than leaving it implicit the way most published guidance does. A Project Office may only carry out the work directly connected to the specific contract RBI approved it against — it isn&apos;t a general-purpose commercial presence, and it can&apos;t take on unrelated work, additional contracts, or ongoing trading activity beyond the sanctioned project simply because it already has a functioning India office and local staff in place. If a second, unrelated project comes up, that&apos;s a fresh application, not an extension of the existing approval.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A Project Office can hire local staff in India for the project it&apos;s permitted to execute, subject to the standard Indian labour-law, payroll, and statutory-benefits obligations that apply to any employer here.
          </p>
        </div>
      </section>

      {/* TAX */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Exposure: Permanent Establishment Risk for a Project Office</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is where a Project Office genuinely differs from its two siblings, and it deserves real depth rather than a passing mention. A Liaison Office is deliberately structured to avoid earning any India income at all, which keeps its PE exposure low by design. A Branch Office earns income, but only within a narrow, RBI-approved scope. A Project Office, by definition, exists to execute a specific revenue/contract-linked project — which makes it the entity type in this three-page set most likely to create a <strong>Permanent Establishment (PE)</strong> of the foreign parent in India.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The operative concept is <strong>construction/installation PE</strong>. Most of India&apos;s Double Taxation Avoidance Agreements (DTAAs) contain a specific PE clause for building sites, construction, assembly, or installation projects that runs on a shorter activity-duration threshold than the general fixed-place-of-business PE test — meaning a Project Office can trigger PE status well before it would otherwise cross the threshold that applies to, say, a services-focused Branch Office. We won&apos;t state a single universal day-threshold here, because it isn&apos;t universal: the construction/installation PE clause, and the exact threshold within it, varies by which DTAA applies to your parent company&apos;s home jurisdiction, and applying one treaty&apos;s number to a different treaty is the kind of error that causes real disputes with Indian tax authorities. Confirm the specific threshold in your parent company&apos;s applicable DTAA before you rely on a figure quoted elsewhere.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Once a Project Office does create a PE, the live technical question becomes <strong>profit attribution</strong> — how much of the project&apos;s overall profit is treated as earned by the Indian PE versus the foreign parent&apos;s broader operations. This is not a mechanical calculation; it&apos;s a genuine, recurring point of engagement (and at times negotiation) with Indian tax authorities, particularly on projects where procurement, design, or project management sits partly offshore while execution sits in India.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Why a Project Office Carries Higher PE Risk Than a Liaison Office</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            AU Corporate&apos;s taxation practice notes elsewhere on this site that a foreign company operating through a branch or project office is taxed differently, and generally less favourably, than one operating through an incorporated subsidiary — and within that comparison, a Project Office sits at the higher-risk end. A Liaison Office&apos;s activity is, by design, meant to stay preparatory or auxiliary, which is precisely the category DTAAs carve out of PE status. A Project Office&apos;s activity is the opposite — it&apos;s the actual execution of a contract, often involving physical construction, installation, or on-site project delivery, which is exactly the fact pattern construction/installation PE clauses are written to capture. Where a PE is found, the applicable tax treatment is the same foreign-company PE position described on the Branch Office guide: a <strong>35% base corporate tax rate</strong> (reduced from 40% under the Finance Act 2024), before surcharge and cess.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For the fuller international-tax and DTAA picture — including how this interacts with your parent company&apos;s specific treaty position — see{" "}
            <Link href="/services/taxation-regulatory" className="text-gold font-semibold hover:underline">International Taxation and DTAA Advisory</Link>{" "}
            rather than trying to resolve treaty-specific mechanics from a general guide like this one.
          </p>
        </div>
      </section>

      {/* GST */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">GST Registration for a Project Office</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike a Liaison Office, where GST is addressed mainly to explain why it typically doesn&apos;t apply, a Project Office&apos;s GST position is a live compliance question from day one, because a Project Office is revenue/contract-linked by definition. Whether GST registration is required, and how it applies, depends on the nature of the supplies the project involves and where the Project Office sits in the contract&apos;s supply chain — this isn&apos;t a structure that can assume it sits outside GST the way a compliant Liaison Office can.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Reverse-charge treatment is also worth flagging if the Project Office receives funding or services from its parent company — payments back to the parent can attract GST under the reverse-charge mechanism (RCM) depending on how the arrangement is structured. See{" "}
            <Link href="/services/taxation-regulatory" className="text-gold font-semibold hover:underline">International Taxation and DTAA Advisory</Link>{" "}
            for the fuller RCM treatment already covered there.
          </p>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Compliance: AAC, FLA Return and ITR Filing</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Annual Activity Certificate (AAC):</strong> as with a Branch or Liaison Office, a Project Office&apos;s central recurring compliance obligation is the AAC — an annual filing, certified by a chartered accountant, confirming that the Project Office&apos;s activities during the year stayed within the scope of the approved project. It is filed annually, following the close of the financial year, and routed to <strong>two authorities in parallel</strong>: the AD Category-I bank through which the Project Office was approved, and the <strong>Directorate General of Income Tax (International Taxation)</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>FLA return:</strong> where the Project Office&apos;s funding structure involves reportable foreign liabilities or assets, the annual Foreign Liabilities and Assets (FLA) return is a separate filing obligation worth tracking alongside the AAC — it serves a different regulatory purpose and shouldn&apos;t be assumed to be covered by the AAC filing alone.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>ITR filing:</strong> a Project Office files its Indian income tax return on <strong>Form ITR-6</strong>, in its capacity as a foreign company with — in most cases, given the PE discussion above — a Permanent Establishment in India.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For the broader compliance landscape a registered foreign establishment needs to stay on top of, see{" "}
            <Link href="/india-business-setup/regulatory-compliance" className="text-gold font-semibold hover:underline">ongoing regulatory compliance</Link>.
          </p>
        </div>
      </section>

      {/* CLOSURE */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Closing or Winding Up a Project Office</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Closing a Project Office follows a defined sequence, tied to project completion rather than a calendar date, and the steps need to happen in the right order:</p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-4">
            {closureSteps.map((item) => (<li key={item}>{item}</li>))}
          </ol>
          <p className="text-gray-600 leading-relaxed">
            One point of genuine uncertainty is worth flagging rather than glossing over: sources aren&apos;t fully consistent on whether a Project Office&apos;s ROC-closure mechanics follow the identical Form FC-2/Section 380 route used for Branch and Liaison Office closures, or a variant of it specific to project completion. Confirm the exact ROC closure form with your AD bank and company secretary at the time you&apos;re actually closing out, rather than assuming it mirrors the Branch/Liaison Office process without checking.
          </p>
        </div>
      </section>

      {/* AU CORPORATE SUPPORT + CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How AU Corporate Supports Project Office Registration and Compliance</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Running a Project Office end to end means coordinating four separate authorities that don&apos;t share a single filing system: the AD Category-I bank (the channel through which Form FNC-1 is filed and the AAC is later routed), the ROC/MCA (which separately registers the Project Office under Form FC-1 and later processes its closure), the Directorate General of Income Tax, International Taxation (the second AAC-routing destination, and the authority relevant to the PE tax position), and — because a Project Office is the one structure in this set that routinely creates real India tax exposure — a PE and profit-attribution assessment specific to the underlying contract. AU Corporate coordinates this sequence end to end: preparing and filing Form FNC-1 through the AD bank, managing the parallel Form FC-1/ROC registration and PAN/TAN allotment, handling the annual AAC filing and its dual routing, assessing the construction/installation PE and profit-attribution position against the applicable DTAA, and managing the closure sequence once the project completes — so the RBI, banking, company-law, and tax threads stay aligned rather than being managed as four disconnected filings.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If a Project Office looks like the right structure for the contract you&apos;ve secured in India, our team can walk through the Regulation 5 eligibility position, the RBI/AD-bank approval process, and the PE tax exposure for your specific situation —{" "}
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
            title="Deciding If a Project Office Fits Your India Presence?"
            description="Whether you're still confirming eligibility under Regulation 5 or ready to file Form FNC-1, our team can walk through the RBI/AD-bank approval, PE tax exposure, and closure sequence for your specific situation."
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
                description: "The more commercially active alternative, for readers whose activity goes beyond a single contract.",
              },
              {
                label: "Liaison Office in India",
                href: "/liaison-office-in-india",
                description: "The lighter-touch, non-revenue alternative.",
              },
              {
                label: "Company Registration in India",
                href: "/india-business-setup/company-formation",
                description: "The full incorporation guide for readers who need a Wholly Owned Subsidiary instead.",
              },
              {
                label: "The FDI Automatic vs Government Route",
                href: "/india-business-setup/fdi-channels",
                description: "The separate equity-investment framework under FEMA 20(R), distinct from a Project Office's FEMA 22(R) establishment route.",
              },
              {
                label: "International Taxation and DTAA Advisory",
                href: "/services/taxation-regulatory",
                description: "The fuller PE/DTAA and GST picture referenced throughout this page.",
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
