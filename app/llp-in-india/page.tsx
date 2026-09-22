import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"

const registrationSteps = [
  {
    title: "DSC and DPIN/DIN for designated partners",
    body: "Obtained before anything else, since every subsequent filing needs to be signed electronically by a designated partner who already holds one.",
  },
  {
    title: "Name reservation — Form RUN-LLP",
    body: "The proposed LLP name is checked against existing company/LLP names and trademarks and reserved with the Registrar.",
  },
  {
    title: "Incorporation filing — Form FiLLiP",
    body: "The integrated incorporation form (Form for Incorporation of LLP) filed with the Registrar, along with the designated partners' and LLP's details, subscriber sheet, and address proof for the registered office.",
  },
  {
    title: "Certificate of Incorporation",
    body: "Once the Registrar is satisfied, the LLP receives its Certificate of Incorporation and LLP Identification Number (LLPIN), at which point the LLP legally exists.",
  },
  {
    title: "LLP Agreement — filed via Form 3",
    body: "The foundational document governing how the partners will run the LLP (profit-sharing ratio, roles, capital contribution, admission/exit of partners) must be executed and filed within the prescribed window after incorporation. Until it's filed, the default provisions of the First Schedule to the LLP Act govern the LLP's internal affairs — which rarely reflects what the partners actually intend.",
  },
]

const fdiDecisionSequence = [
  {
    title: "Does your sector permit 100% FDI under the automatic route for a company?",
    body: "If not, LLP automatic-route investment isn't available either — you're already looking at the government approval route or a different sector classification.",
  },
  {
    title: "Does that sector carry FDI-linked performance conditions?",
    body: "Even where the answer above is yes, a \"yes\" here closes the LLP automatic route — this is the condition that trips up investors who've already confirmed their sector is open to 100% company FDI and assume the same clearance carries over to an LLP structure.",
  },
  {
    title: "If either answer is unfavourable, what's the fallback?",
    body: "Depending on the sector, that may mean routing the investment through government approval instead, or — more commonly in practice — structuring the India entity as a Private Limited Company/wholly owned subsidiary rather than an LLP, since the company route's automatic-FDI eligibility is broader for many sectors that carry performance conditions specifically at the LLP level.",
  },
]

const comparisonRows = [
  { label: "Legal liability", llp: "Limited to agreed contribution (except fraud)", company: "Limited to unpaid share value" },
  { label: "Governing law", llp: "LLP Act, 2008", company: "Companies Act, 2013" },
  { label: "Ownership instrument", llp: "Partnership contribution — no share capital, no ESOPs", company: "Equity shares — can issue ESOPs, preference shares, convertible instruments" },
  { label: "Investor preference", llp: "Rarely used by institutional/VC investors, who generally expect equity", company: "Standard vehicle for equity fundraising" },
  { label: "FDI automatic-route eligibility", llp: "Narrower — two-part gate (sector + no performance conditions)", company: "Broader — standard sector-cap test" },
  { label: "Tax rate", llp: "Flat 30%, single-level taxation on distributed profit", company: "22% concessional (most new subsidiaries) / 25% / 30%, plus dividend withholding on distribution" },
  { label: "Compliance load", llp: "Form 8, Form 11, audit above threshold", company: "Statutory audit, AOC-4, MGT-7/7A, board/AGM formalities" },
  { label: "Conversion flexibility", llp: "Can convert to a company (see below)", company: "N/A" },
]

const faqs = [
  {
    q: "What is the minimum number of partners required for LLP in India?",
    a: "An LLP needs at least two partners, and among them, at least two designated partners (individuals) who take on the LLP's compliance responsibilities. There's no upper limit on the number of partners.",
  },
  {
    q: "Is the resident designated partner test 120 days or 182 days?",
    a: "It's 120 days in the immediately preceding financial year, following the LLP (Amendment) Act, 2021. The 182-day figure was the earlier test and is still widely (incorrectly) repeated across published guidance — if a source cites 182 days, check whether it predates the 2021 amendment.",
  },
  {
    q: "Can a foreigner be a partner in an LLP in India?",
    a: "Yes — a foreign national or foreign body corporate can be a partner or even a designated partner in an Indian LLP, subject to the FDI conditions covered above. The one practical constraint is that at least one designated partner must still satisfy the 120-day resident test, so a founding team made up entirely of non-residents can't register an LLP without bringing in someone who meets that requirement.",
  },
  {
    q: "What documents are required for LLP registration in India?",
    a: "Registered office proof and identity/address documents for Indian partners; for a foreign partner or foreign body corporate, notarised and apostilled (or consularised, depending on the home country) identity and incorporation documents. See the Documents Required section above for the full breakdown.",
  },
  {
    q: "How many days does it take to register an LLP in India?",
    a: "There's no fixed statutory number of days. A straightforward incorporation among resident partners generally moves faster than a full company incorporation; where a foreign partner's documents need apostille or consularisation, plan around that lead time rather than the fastest-possible filing figure.",
  },
  {
    q: "How is an LLP taxed in India? What is the LLP tax rate?",
    a: "A domestic LLP pays a flat 30% tax rate (plus surcharge and cess) on its total income, with a partner's share of distributed profit exempt from further tax under Section 10(2A) of the Income-tax Act — there's no second layer of tax on profit distribution the way a company dividend can trigger withholding tax. Whether this beats a company's lower headline rate depends on your specific fund-flow and repatriation plans; see the tax comparison section above.",
  },
  {
    q: "What is the difference between an LLP and a Private Limited Company?",
    a: "The core differences are the ownership instrument (partnership contribution vs. equity shares, meaning no ESOPs or venture-style fundraising through an LLP), FDI-route eligibility (narrower for an LLP), tax treatment (flat 30% single-level vs. concessional company rates plus dividend withholding), and compliance load (Form 8/Form 11 vs. statutory audit and Companies Act filings). See the comparison table above for the full picture.",
  },
  {
    q: "Can an LLP be converted into a Private Limited Company?",
    a: "Yes, through registration of the LLP as a company under Part I of the Companies Act, 2013, involving Form URC-1 alongside a SPICe+ filing for the new company and the Registrar's approval. It's a recognised, fairly common path for LLPs that outgrow their original structure once they need to raise equity capital.",
  },
  {
    q: "What is a DPIN, and do I still need one separately from a DIN?",
    a: "A DPIN (Designated Partner Identification Number) is the identifier every designated partner needs before appointment. DPIN and the company-side DIN now run on the same underlying numbering system, so an individual who already holds a DIN generally doesn't need to apply for a separate DPIN.",
  },
  {
    q: "Is an LLP good for startups in India — what are the real advantages and disadvantages?",
    a: "It depends on what the business needs. An LLP's advantages are a lighter compliance load and lower ongoing cost than a company, and limited liability without giving up direct partner control. The real disadvantage for a startup planning to raise equity capital is structural, not just a compliance preference: an LLP can't issue shares or ESOPs, and most institutional and venture investors expect a company structure. Many startups that plan to raise outside capital choose a company from the outset for that reason; founders bootstrapping a professional-services or closely-held business, with no near-term plan to raise equity, are the more natural LLP fit.",
  },
  {
    q: "Does an LLP need a statutory audit in India?",
    a: "Only above a turnover or partner-contribution threshold — commonly cited, under Section 34(4) of the LLP Act, 2008 and Rule 24(8) of the LLP Rules, 2009, as ₹40 lakh turnover or ₹25 lakh partner contribution, whichever is crossed first. We're citing this rule reference because it's consistently reported across professional sources, but it hasn't been independently verified against the primary Rules text — confirm it with your advisor before relying on it for a compliance decision.",
  },
]

export default function LlpInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "LLP in India" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">India Entry</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            LLP Registration in India: A Complete Guide to Eligibility, Process, FDI and Compliance
          </h1>
          <p className="mb-2 text-sm text-gray-500">
            Last updated: 22 September 2026 — prepared by AU Corporate&apos;s taxation and regulatory compliance practice.
          </p>
          <p className="mb-4 text-xl leading-relaxed text-gray-600">
            A Limited Liability Partnership is a separate legal entity registered with the Ministry of Corporate Affairs under the Limited Liability Partnership Act, 2008 — not an informal partnership, and not an extension of a foreign parent the way a Branch or Liaison Office is. It can hold property, enter contracts, sue and be sued in its own name, and its partners&apos; liability is generally limited to what they&apos;ve agreed to contribute.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This guide walks through LLP registration in India from end to end: who can form one, how the registration process actually works, what foreign investment into an LLP does and doesn&apos;t allow, how an LLP is taxed, and what the ongoing compliance and conversion picture looks like — in one page, in the order a founder or CFO actually needs to work through it.
          </p>
        </div>
      </section>

      {/* WHAT IS AN LLP */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is an LLP in India?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An LLP (Limited Liability Partnership) combines the operating flexibility of a partnership with the limited liability of a company: partners run the business directly under the LLP Agreement, rather than through a board and shareholding structure, and a partner&apos;s liability is generally capped at their agreed contribution — not their personal assets — except in cases involving fraud or wrongful trading. It sits alongside the Private Limited Company as one of the entity choices available to a founder or foreign investor setting up in India — see our{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">company registration guide</Link>{" "}
            for the Private Limited/wholly owned subsidiary route if that turns out to be the better fit for your situation.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">LLP vs. Partnership Firm — What Actually Changes</h3>
          <p className="text-gray-600 leading-relaxed">
            A general partnership firm, registered (or not) under the Indian Partnership Act, 1932, has no separate legal identity from its partners — the partners themselves are the business, and each partner is personally, jointly and severally liable for the firm&apos;s debts without a cap. An LLP is a different legal creature entirely: it is registered with the MCA, governed by the LLP Act, 2008 (not the 1932 Act), and exists as its own legal person, distinct from its partners. That separation is what limits partner liability to the agreed contribution, and it&apos;s also why an LLP — unlike a partnership firm — can own assets, borrow, and contract in its own name rather than in the names of its partners.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Can Form an LLP in India — Partners, Designated Partners, and the Resident Test</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Eligibility to form an LLP in India comes down to two baseline requirements: enough partners of the right kind, and at least one who satisfies the residency test below.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Minimum Two Partners, at Least Two Designated Partners</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Any two persons — individuals or body corporates (including a foreign company) — can form an LLP as partners. Among them, at least two must be individuals appointed as &quot;designated partners,&quot; who carry the LLP&apos;s regulatory responsibilities: signing and filing statutory returns, maintaining the LLP&apos;s books, and being personally accountable for compliance failures in a way ordinary partners are not. A body corporate partner needs to nominate an individual to act as its designated partner on its behalf.
          </p>

          <div className="p-6 border-l-4 border-gold bg-white rounded-r-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-2">The Resident Designated Partner Rule: 120 Days, Not 182</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              If you&apos;ve come across guidance stating that an LLP needs at least one designated partner who spent 182 days in India in the preceding financial year, that figure is out of date. The <strong>LLP (Amendment) Act, 2021</strong> revised the residency test down to <strong>120 days in the immediately preceding financial year</strong> — a change that brought the LLP residency test closer to (though not identical with) how residency is tested for a resident director under the Companies Act. This isn&apos;t a marginal correction: it&apos;s the kind of detail that changes whether a founding team made up entirely of overseas-based individuals can actually register an LLP without bringing in a resident designated partner, or how much time an already-designated partner genuinely needs to spend in India to qualify.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We&apos;re flagging this prominently because the 182-day figure is still widely repeated across otherwise credible-looking guidance — tax platforms, registration services and even some advisory content included. If a source you&apos;re reading states 182 days, check whether it was written or last verified before the 2021 amendment took effect; if it wasn&apos;t, it&apos;s describing a rule that no longer applies.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Can a Foreign National Be a Designated Partner or Partner in an Indian LLP?</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Yes. There&apos;s no nationality restriction on who can be a partner or a designated partner in an Indian LLP — a foreign national or a foreign body corporate can hold a partnership stake and even serve as a designated partner, subject to the foreign-investment conditions covered in the FDI section below. The practical constraint is the residency test above: since at least one designated partner must meet the 120-day residency requirement, a founding team composed entirely of non-resident individuals cannot register an LLP on its own — someone in the structure has to satisfy that test, whether that&apos;s a partner who genuinely splits time in India or a locally appointed resident designated partner brought in specifically to meet the requirement.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">DPIN/DIN and Digital Signature Certificate (DSC) Prerequisites</h3>
          <p className="text-gray-600 leading-relaxed">
            Every designated partner needs a Designated Partner Identification Number (DPIN) before they can be appointed, and a Digital Signature Certificate (DSC) to sign the LLP&apos;s electronic filings with the MCA. DPIN and the company-side Director Identification Number (DIN) were merged into a single numbering system under <strong>MCA General Circular No. 44/2011 (dated 8 July 2011)</strong> — since then, no fresh DPIN has been issued separately, and an individual who already holds a DIN (for example, from serving as a company director) doesn&apos;t need a second, separate DPIN. A foreign national applying for a DPIN for the first time typically faces a longer document-verification cycle than a resident applicant, for the same reason a foreign director&apos;s DSC application usually takes longer on the company-incorporation side.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Register an LLP in India: Step-by-Step</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Registering an LLP is an entirely online process run through the MCA21 portal, and follows a defined sequence:
          </p>
          <div className="space-y-6">
            {registrationSteps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required for LLP Registration</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The document set splits the same way it does for company incorporation — Indian-side documents and foreign-partner-side documents, with the foreign side needing more care than &quot;just get it notarised.&quot;
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>From the Indian side:</strong> proof of the registered office (a lease/ownership document and a recent utility bill), and identity/address proof for any resident partner or designated partner (PAN, Aadhaar, and a recent address document).
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>From a foreign partner or foreign body corporate&apos;s side:</strong> identity documents (typically a passport) and address proof need to be notarised and, depending on the partner&apos;s home country, either apostilled (for countries that are signatories to the Hague Apostille Convention) or consularised through the Indian embassy/consulate in that country (for countries that aren&apos;t). A foreign body corporate partner also needs its certificate of incorporation and board resolution authorising participation in the LLP, similarly attested. As with company incorporation, this apostille/consularisation lead time runs through the foreign partner&apos;s home-country authorities rather than anything India-side can expedite, and it&apos;s the step most likely to determine your actual registration timeline rather than the MCA filing itself.
          </p>
        </div>
      </section>

      {/* COST & TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">LLP Registration Cost and Timeline in India</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            As with company registration, the honest answer here sits across two separate figures rather than one headline number. Government filing fees for LLP incorporation — name reservation, the FiLLiP filing, and the LLP Agreement filing — are relatively modest and vary with the LLP&apos;s total contribution amount; see our{" "}
            <Link href="/india-business-setup/timeline-resources" className="text-gold font-semibold hover:underline">detailed setup timeline and budget breakdown</Link>{" "}
            for the fuller cost picture across entity types. Professional and advisory fees for drafting the LLP Agreement, coordinating apostille/attestation for a foreign partner, and managing the filing sit on top of that and vary with structural complexity.
          </p>
          <p className="text-gray-600 leading-relaxed">
            On timeline, a straightforward LLP incorporation among resident partners, with documentation already in order, can generally move faster than a full company incorporation, since there&apos;s no SPICe+-style integrated PAN/TAN/GST bundling to sequence at the same time. Where a foreign partner is part of the structure, the realistic timeline converges much closer to a company incorporation&apos;s timeline, because the same apostille and cross-border document lead times apply regardless of which entity type you&apos;re registering. Build in buffer for name resubmission (if the first proposed name is rejected) and for DPIN/DSC processing for a foreign designated partner, rather than planning against the fastest-possible filing figure alone.
          </p>
        </div>
      </section>

      {/* FDI IN LLP */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">FDI in LLP: The Automatic-Route Gate and How to Use It</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            This is where an LLP genuinely differs from a Private Limited Company for a foreign investor, and it&apos;s worth understanding precisely rather than assuming the same FDI rules apply across both structures.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">The Two-Part Automatic-Route Gate</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Foreign direct investment into an Indian LLP is allowed up to 100% under the automatic route — meaning no prior government approval — but only where <strong>both</strong> of the following are true: <strong>(1)</strong> the sector or activity the LLP operates in permits 100% FDI under the automatic route for a company, <strong>and (2)</strong> that sector carries <strong>no FDI-linked performance conditions</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This is a narrower gate than the one that applies to company share allotment. A sector can be open to 100% automatic-route FDI for a Private Limited Company and still be closed to automatic-route FDI into an LLP operating in that same sector, if the sector&apos;s FDI policy attaches performance conditions (for example, minimum capitalisation requirements or sourcing norms of the kind attached to certain retail or manufacturing sub-sectors). This distinction traces to India&apos;s FDI-in-LLP liberalisation under the FEMA/DPIIT foreign investment policy, and it&apos;s a genuinely different — and more restrictive — test than the one a foreign investor evaluating a Private Limited Company subsidiary would apply.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">The Practical Decision Sequence</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Rather than treating this as an abstract rule, it helps to work through it as three questions, in order:
          </p>
          <div className="space-y-6 mb-8">
            {fdiDecisionSequence.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our{" "}
            <Link href="/india-business-setup/fdi-channels" className="text-gold font-semibold hover:underline">FDI automatic and government approval routes</Link>{" "}
            guide covers the sector-by-sector position in detail for question 1 above.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Reporting Foreign Capital Contribution — Form FDI-LLP(I), Not FC-GPR</h3>
          <p className="text-gray-600 leading-relaxed">
            Once foreign capital is actually contributed to an LLP, the LLP has to report that contribution to RBI. The form used for this is <strong>Form FDI-LLP(I)</strong>, filed through the LLP&apos;s authorised dealer bank — and it is a genuinely different filing from <strong>Form FC-GPR</strong>, which is what a Private Limited Company files to report share allotment to a foreign shareholder. These aren&apos;t two names for the same mechanic: an LLP doesn&apos;t allot shares (it has no share capital in the company-law sense), so the FC-GPR filing that applies to company registration and FDI channels simply doesn&apos;t apply here — an LLP receiving foreign capital contribution needs its own distinct reporting step, and treating it as interchangeable with FC-GPR is a real, checkable error we&apos;d flag if we saw it on a client&apos;s existing structure. That report is commonly cited as due within <strong>30 days of receipt of the capital contribution amount</strong>, under the FEM (Mode of Payment and Reporting of Non-Debt Instruments) Regulations, 2019 — we&apos;d recommend confirming this window with your bank&apos;s authorised dealer branch before treating it as a fixed deadline rather than relying on the figure alone.
          </p>
        </div>
      </section>

      {/* TAX */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Is an LLP Taxed in India?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            There&apos;s no single &quot;LLP tax rate&quot; answer that&apos;s useful in isolation — the honest version of this section is conditional, not a flat rate table.
          </p>

          <div className="p-6 border-l-4 border-gold bg-secondary/30 rounded-r-lg mb-8">
            <p className="text-sm text-gray-600 leading-relaxed">
              A currency note that applies to every rate and section reference in this section, rather than repeating it separately under each one: the LLP flat-rate figure, the Section 10(2A) exemption, the AMT provisions, and the company-side concessional rates referenced in the comparison below are all current under the Income-tax Act, 1961. The Income-tax Act, 2025 replaces the 1961 Act for periods beginning on or after 1 April 2026, and this is not expected to be a simple renumbering exercise — the Section 10(2A) exemption, for instance, is expected to move out of Section 10 entirely and into Schedule II of the 2025 Act, referenced by a table entry rather than a section number, and the AMT provisions currently in Chapter XII-BA will likely be relocated too. None of this has been independently confirmed against primary source text. Treat the section numbers below as accurate under current law only, and confirm the 2025 Act&apos;s equivalent references with a tax professional before relying on them for any assessment year 2026-27 return or later.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Flat 30% Rate and Single-Level Taxation Under Section 10(2A)</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            A domestic LLP is taxed as a partnership firm for Indian income-tax purposes, not as a company — which means a flat 30% rate (plus applicable surcharge and health-and-education cess) applies to the LLP&apos;s total income, regardless of the income slab. There&apos;s no equivalent of the company route&apos;s concessional rate options (see our{" "}
            <Link href="/services/taxation-regulatory" className="text-gold font-semibold hover:underline">taxation and regulatory advisory</Link>{" "}
            coverage of the 22% concessional company rate available to most newly incorporated subsidiaries) — an LLP doesn&apos;t get a lower headline rate for being newly formed or smaller. What an LLP does get is single-level taxation on distributed profit: once the LLP has paid tax on its income, a partner&apos;s share of that profit, when paid out, is exempt from further tax in the partner&apos;s hands under Section 10(2A) of the Income-tax Act — there&apos;s no second layer of tax on the profit distribution itself, the way a company&apos;s dividend distribution can carry its own withholding-tax exposure when profits move to shareholders.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Alternate Minimum Tax (AMT) — When It Applies</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Where an LLP claims certain profit-linked deductions, an Alternate Minimum Tax can apply under <strong>Section 115JC</strong>, once the LLP&apos;s adjusted total income exceeds <strong>₹20 lakh</strong> — computed at a rate commonly cited around <strong>18.5%</strong> (plus surcharge and cess), broadly analogous to the Minimum Alternate Tax regime that applies to companies. This rate and threshold are consistently reported across professional tax sources but haven&apos;t been independently confirmed against primary-source text — confirm with a qualified tax advisor before relying on this figure.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">LLP Tax vs. Company Tax — When Each Actually Wins</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the section where a bare rate comparison misleads more than it helps. A flat 30% LLP rate sits above the 22% concessional rate most newly incorporated subsidiaries opt into as companies — on the headline number alone, the company route looks cheaper. But the comparison that actually matters is what happens once profit needs to move out of the entity. A company&apos;s after-tax profit, when paid out as a dividend to a foreign shareholder, generally triggers withholding tax on that dividend (subject to whatever relief the applicable Double Taxation Avoidance Agreement provides) — a genuine second layer of tax friction on the way out.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            An LLP&apos;s profit share to its partners doesn&apos;t carry that same distribution-tax-style event, because of the Section 10(2A) exemption described above. Whether that difference actually makes an LLP the better outcome depends on the specific numbers — the LLP&apos;s effective 30%-plus rate against the company&apos;s 22%-plus rate plus dividend withholding, net of treaty relief — and on factors the tax math alone doesn&apos;t capture: an LLP cannot issue equity shares or ESOPs, which matters if you expect to raise institutional or venture capital down the line, and its compliance and governance profile is different from a company&apos;s.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A foreign-owned LLP&apos;s specific tax position, including its withholding-tax treatment on profit remittance and the treaty relief actually available, can differ meaningfully from a Private Limited subsidiary&apos;s — this is genuinely fact-specific to your fund-flow structure and home jurisdiction, and worth modelling properly before choosing the entity, not a rule of thumb we&apos;d state as a blanket &quot;LLP is more tax-efficient&quot; claim.
          </p>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Weighing an LLP Against a Private Limited Company?"
            description="Our team can walk through the tax and FDI-route trade-offs for your specific sector and fund flow before you commit to a structure."
          />
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Annual Compliance for an LLP: Form 8, Form 11 and the Audit Threshold</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Incorporation is the start of an LLP&apos;s compliance calendar, not the end of it.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Form 11 — Annual Return</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every LLP, regardless of whether it did any business during the year, must file <strong>Form 11</strong> (the Annual Return), commonly cited as due by <strong>30 May</strong> each year, covering details of partners, designated partners, and their contributions as of the financial year end.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Form 8 — Statement of Account and Solvency</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            <strong>Form 8</strong> (the Statement of Account and Solvency) is the LLP&apos;s annual financial filing, commonly cited as due by <strong>30 October</strong> each year, confirming the LLP&apos;s financial position and its solvency (i.e., that it can meet its liabilities) as of the preceding financial year end.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Does Your LLP Need a Statutory Audit?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not every LLP needs a statutory audit — it&apos;s triggered once the LLP crosses a turnover or partner-contribution threshold. The figures most commonly cited across professional guidance, under <strong>Section 34(4) of the LLP Act, 2008</strong> and <strong>Rule 24(8) of the LLP Rules, 2009</strong>, are <strong>₹40 lakh in annual turnover or ₹25 lakh in partner contribution</strong>, whichever is crossed first. We&apos;re citing this rule reference because it&apos;s consistently reported across professional sources, but it hasn&apos;t been independently verified against the primary Rules text — confirm it with your advisor before relying on it for a compliance decision, and we&apos;d recommend treating any Form 8 late-filing penalty figure you&apos;ve read elsewhere with the same caution until confirmed. (GST registration, separately, isn&apos;t triggered by LLP status at all — it follows the same turnover thresholds that apply to any Indian business entity; see our{" "}
            <Link href="/india-business-setup/banking-taxation" className="text-gold font-semibold hover:underline">banking and tax setup guide</Link>{" "}
            if that&apos;s the next compliance question on your list.)
          </p>
          <p className="text-gray-600 leading-relaxed">
            Between Form 8, Form 11, and monitoring whether the audit threshold has been crossed, this is the kind of recurring compliance calendar that&apos;s genuinely worth having a retained advisory relationship for, rather than tracking manually each year — not because any one filing is complicated on its own, but because missing a due date compounds into penalty exposure that&apos;s avoidable with basic calendar discipline. These LLP-specific filings are only part of the picture — see our{" "}
            <Link href="/india-business-setup/regulatory-compliance" className="text-gold font-semibold hover:underline">full six-regime compliance framework</Link>{" "}
            for the labour, environmental, data-protection and IP obligations that apply to any India entity, LLP or company, once it&apos;s operating.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">LLP vs. Private Limited Company: Which Should You Choose?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our own{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">company registration guide</Link>{" "}
            already notes, in passing, that an LLP is &quot;less commonly used for FDI-funded operating businesses than a Private Limited Company&quot; — the section below explains why, rather than just repeating the claim.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 text-sm font-bold text-gray-900 border-b">&nbsp;</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-900 border-b">LLP</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-900 border-b">Private Limited Company</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b last:border-b-0">
                    <td className="p-4 text-sm font-bold text-gray-900 align-top">{row.label}</td>
                    <td className="p-4 text-sm text-gray-600 align-top">{row.llp}</td>
                    <td className="p-4 text-sm text-gray-600 align-top">{row.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed">
            In practice, an LLP tends to make more sense for a professional-services partnership, a joint venture between a small number of known partners, or a structure where the partners specifically don&apos;t want or need to raise equity capital from outside investors. A foreign parent planning a standard FDI-funded operating business — one that expects to hire at scale, raise further capital, or eventually bring in institutional investors — is usually better served by a Private Limited Company/wholly owned subsidiary, both because of the broader FDI-route eligibility and because equity instruments simply aren&apos;t available inside an LLP structure. Neither is a wrong choice in the abstract; the right one depends on what the entity is actually there to do.
          </p>
        </div>
      </section>

      {/* CONVERSION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Can an LLP Be Converted to a Private Limited Company?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes — an LLP can be converted into a Private Limited Company, through a route generally referred to as registration of an existing entity as a company under Part I of the Companies Act, 2013 (commonly cited around Section 366 onward, together with the Company (Authorised to Register) Rules, 2014). In broad outline, the process involves obtaining partner consent, filing Form URC-1 (prescribed under Rule 3(2) of those Rules, for registering an existing entity as a company) alongside the SPICe+ incorporation filing for the new company avatar, and securing the Registrar&apos;s approval before the new Private Limited Company comes into existence and the LLP&apos;s assets, liabilities, and obligations vest in it. (Forms INC-23 and INC-24 — used respectively for shifting a registered office between states and for a company name change — are unrelated processes and don&apos;t apply to this Section 366 conversion route; the specific section numbers and forms above should still be confirmed with your advisor against primary MCA sources.) The reverse conversion — a company converting into an LLP — is also permitted under the LLP Act&apos;s own conversion provisions: a private company converts under Section 56 and the Third Schedule, and an unlisted public company under Section 57 and the Fourth Schedule; a listed public company cannot convert into an LLP. It&apos;s a less commonly requested route than LLP-to-company conversion, and carries its own eligibility conditions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is genuinely useful to know upfront, even if you&apos;re not planning to convert immediately: founders sometimes register as an LLP for its lighter early-stage compliance load and lower cost, with a clear-eyed plan to convert into a company once they need to raise equity capital or bring in institutional investors — rather than treating the entity choice as permanent from day one.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Evaluating an LLP for Your India Entry?"
            description="Whether you're comparing an LLP against a Private Limited Company for a foreign investment, or already have partners lined up and need to work through the FDI-route gate and residency requirements for your specific sector, our taxation and regulatory compliance practice can walk through the registration, tax and compliance picture for your situation."
          />
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "Company Registration in India",
                href: "/india-business-setup/company-formation",
                description: "The full Private Limited/wholly owned subsidiary incorporation guide, for readers weighing that route against an LLP.",
              },
              {
                label: "FDI Automatic vs. Government Route",
                href: "/india-business-setup/fdi-channels",
                description: "The underlying sector-cap and DPIIT mechanics behind the LLP FDI gate described above.",
              },
              {
                label: "Taxation & Regulatory Advisory",
                href: "/services/taxation-regulatory",
                description: "The company-side concessional tax rate and broader tax practice referenced in the LLP-vs-company comparison.",
              },
              {
                label: "Ongoing Regulatory Compliance",
                href: "/india-business-setup/regulatory-compliance",
                description: "The broader six-regime compliance framework beyond Form 8/Form 11.",
              },
              {
                label: "Branch Office in India",
                href: "/branch-office-in-india",
                description: "For a foreign company weighing a narrower RBI-approved presence instead of a separate legal entity.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
