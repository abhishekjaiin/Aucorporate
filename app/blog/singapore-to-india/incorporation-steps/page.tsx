import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"
import { GuideCountryContext } from "@/components/guide/GuideCountryContext"

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/incorporation-steps"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "split", label: "The split: Singapore side and Indian side" },
  { id: "steps", label: "The steps in order" },
  { id: "first180", label: "The first 180 days, beyond the incorporation" },
  { id: "cost", label: "Costs" },
  { id: "slips", label: "Where the plan slips" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does it take to set up an Indian subsidiary from Singapore?", a: "Usually four to six weeks from complete documents to incorporation, and about twelve weeks to a working bank account, payroll and first filings." },
  { q: "Do Singapore directors need to visit India to incorporate the subsidiary?", a: "No. The filing is online. Directors need digital signatures and notarised identity documents, and the time difference is only two and a half hours." },
  { q: "What are the two RBI deadlines after the capital arrives?", a: "Allot the shares within 60 days of receiving the funds, then file Form FC-GPR within 30 days of allotment." },
  { q: "When must the Indian subsidiary file INC-20A?", a: "Within 180 days of incorporation, confirming that the subscribers have paid for their shares." },
  { q: "Can the Singapore parent be the only shareholder of the Indian company?", a: "A private limited company needs at least two shareholders, so a wholly owned subsidiary uses a nominee or a group company as the second, holding one share." },
  { q: "What is the fee for setting up an Indian subsidiary?", a: "AU Corporate's fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about S$13,500 at an indicative ₹74.0 per Singapore dollar). The costing depends on your plan." },
  { q: "Does the capital have to come from the parent's own bank account?", a: "Yes. Remit from the account of the foreign investor through the banking channel. A payment from a third party can cause the bank to reject the receipt for FEMA purposes." },
]

const relatedCards = [
  { title: "Documents a Singapore Company Must Prepare to Set Up an Indian Subsidiary: ACRA, Notary and Apostille", desc: "The document checklist for a Singapore parent forming an Indian subsidiary: ACRA business profile, constitution, board resolution, director identity papers, notarisation and the Singapore Academy of Law apostille.", href: "/blog/singapore-to-india/documents-acra-apostille" },
  { title: "Funding an Indian Subsidiary from Singapore: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.", href: "/blog/singapore-to-india/funding-and-fema" },
  { title: "Compliance Calendar: Indian Dates for the Subsidiary, Beside the Singapore Parent's Dates", desc: "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates alongside and a note on year-end alignment.", href: "/blog/singapore-to-india/compliance-calendar" },
  { title: "Which Structure Should a Singapore Company Use in India? Subsidiary, Branch, Liaison Office, LLP, GIFT City or Employer of Record", desc: "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax results and a choice by business model.", href: "/blog/singapore-to-india/structure-options" },
]

export default function IncorporationStepsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Incorporating a Subsidiary in India from Singapore: Who Does What, in What Order"
        description="A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Incorporating an Indian Subsidiary from Singapore: Who Does What, and When" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: the step-by-step plan"
        title="Incorporating a Subsidiary in India from Singapore: Who Does What, in What Order"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore parent forms an Indian private limited company in about four to six weeks from complete
          documents, and the first payroll and bank account follow within about twelve. The work splits cleanly:
          the Singapore team supplies the board decision, certified documents and the funds, while the Indian
          team handles the name, SPICe+, registrations, bank account and RBI reporting. Two clocks run after the
          money arrives: share allotment within 60 days and Form FC-GPR within 30 days of allotment.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Typical time", "4 to 6 weeks to incorporate; about 12 weeks to a working bank account, payroll and first filings"],
                ["Directors", "At least two, with at least one who has stayed in India 182 days or more in the year"],
                ["Shareholders", "At least two; a wholly owned subsidiary uses a nominee shareholder or a group company as the second"],
                ["Registered office", "A physical address in India with proof of use"],
                ["Main filing", "SPICe+ with the memorandum and articles of association"],
                ["After incorporation", "INC-20A within 180 days; auditor appointment within 30 days; GST, provident fund and ESI registrations as needed"],
                ["RBI", "Shares allotted within 60 days of receiving funds; Form FC-GPR within 30 days of allotment"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="split" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The split: Singapore side and Indian side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Stage</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Singapore team</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian team</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Lead time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1. Decide", "Board approves the investment, structure, funding amount and nominee", "Sector check against the FDI Policy; name search", "1 week"],
                ["2. Papers", "Sign, notarise and apostille the document set", "Prepare MoA, AoA and SPICe+ drafts; arrange DSCs and DINs", "1 to 2 weeks"],
                ["3. File", "Send originals or scans; confirm directors", "File SPICe+; receive the certificate of incorporation, CIN, PAN and TAN", "1 to 2 weeks"],
                ["4. Bank", "Provide parent KYC and owner details", "Open the current account; arrange the funds-receipt process", "2 to 4 weeks"],
                ["5. Fund", "Remit capital from the parent's own account in Singapore", "Obtain the inward remittance advice; allot shares within 60 days", "1 to 3 weeks"],
                ["6. Report", "Provide the parent's KYC to the dealer bank", "File Form FC-GPR within 30 days of allotment; valuation certificate", "2 to 4 weeks"],
                ["7. Commence", "Approve the first budget; set the reporting calendar", "File INC-20A within 180 days; register for GST, PF and ESI; appoint the auditor", "4 to 8 weeks"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The steps in order</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Check the sector.</strong> Match the activity to the FDI Policy to confirm the Automatic Route and check Press Note 3 if any owner is in a land-border country.</li>
          <li><strong>Choose the directors.</strong> One must satisfy the 182-day residence test. Singapore-based directors can be appointed but must sign digitally.</li>
          <li><strong>Prepare and legalise the Singapore documents.</strong> See <Link href="/blog/singapore-to-india/documents-acra-apostille" className="text-blue-800 font-semibold hover:underline">the documents guide</Link>.</li>
          <li><strong>Reserve the name and file SPICe+.</strong> The Registrar issues the Certificate of Incorporation with the CIN. PAN and TAN follow with it.</li>
          <li><strong>Open the bank account.</strong> The bank verifies the Singapore parent&apos;s ownership chain. Expect questions on ultimate owners.</li>
          <li><strong>Send the capital.</strong> Remit from the parent&apos;s own account. A third party remittance is a red flag for the Indian bank.</li>
          <li><strong>Allot shares and report to the RBI.</strong> Allot within 60 days of the funds arriving. File Form FC-GPR within 30 days of allotment.</li>
          <li><strong>Commence business.</strong> File INC-20A within 180 days, appoint the first auditor within 30 days and register for GST, provident fund and ESI where applicable.</li>
        </ol>

        <h2 id="first180" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The first 180 days, beyond the incorporation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Month 1:</strong> bank mandate, accounting set-up, GST registration decision, payroll provider.</li>
          <li><strong>Month 2:</strong> signing of intercompany agreements (services, licences, loans) with transfer pricing support, and the TRC and Form 41 set for the parent.</li>
          <li><strong>Month 3 and 4:</strong> hiring, ESI and provident fund registration, shops and establishment licence, professional tax in the state.</li>
          <li><strong>Before day 180:</strong> INC-20A declaration of commencement, which allows the company to start business and operate fully.</li>
        </ul>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Costs</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Government fees and stamp duty</strong> depend on the state and the authorised capital.</li>
          <li><strong>Professional fees</strong> for incorporation, registrations and the first reports.</li>
          <li><strong>Valuation certificate</strong> needed for share issue pricing under FEMA.</li>
          <li><strong>Bank and remittance charges</strong> on the capital transfer, which can include foreign exchange margins.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          AU Corporate&apos;s fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to
          ₹10 lakh (₹10 lakh is about S$13,500 at an indicative ₹74.0 per Singapore dollar on 21 October 2026).
          The costing depends on your plan.
        </p>

        <h2 id="slips" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the plan slips</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Address proof or passport details that differ from ACRA records.</li>
          <li>A bank that asks for owner documents the Singapore team has not prepared.</li>
          <li>Funds sent before the valuation is ready, which then misses the 60-day allotment clock.</li>
          <li>Allotment done but FC-GPR left to the end of the month.</li>
          <li>No Resident Director in place when the Registrar asks.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.iras.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">IRAS</a>,{" "}
          <a href="https://www.acra.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">ACRA</a>{" "}
          and the{" "}
          <a href="https://www.sal.org.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Singapore Academy of Law (apostilles)</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/singapore-to-india/faq"
          seeAllLabel="See all 143 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs: incorporation", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India: FEMA and foreign investment reporting", href: "https://www.rbi.org.in/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 21 October 2026. General information only, not legal or tax advice. Indian and Singapore
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Incorporate from Singapore?"
        description="Tell us your sector, share capital and target date, and we'll send the SPICe+ checklist for a Singapore parent and a fixed quote."
      />
    </main>
  )
}
