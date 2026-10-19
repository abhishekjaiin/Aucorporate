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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "what", label: "What counts as an international transaction" },
  { id: "models", label: "The common UK-to-India models and how they are priced" },
  { id: "process", label: "The annual process, in order" },
  { id: "uk-india", label: "Where the UK and Indian regimes differ" },
  { id: "audits", label: "Audits, safe harbours and advance agreements" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is transfer pricing in India?", a: "Rules requiring transactions between the Indian company and its foreign group companies to be priced as if between independent parties. They apply to services, royalties, loans, guarantees and cost sharing." },
  { q: "What is Form 48?", a: "Form 48 (previously Form 3CEB) is a Chartered Accountant's report on international transactions with associated enterprises, filed before the income tax return due date." },
  { q: "Does a small UK company need transfer pricing for its Indian subsidiary?", a: "In the UK, small and medium-sized enterprises are generally exempt, but India has no such exemption. The Indian subsidiary still needs documentation and a Form 48 report if it has international transactions with the UK group." },
  { q: "What mark-up should a captive Indian services company earn?", a: "The mark-up must be supported by benchmarking against comparable independent companies, so there is no fixed number. The range depends on the functions, risks and the comparables chosen each year." },
  { q: "Can a UK-Indian advance pricing agreement be obtained?", a: "Yes, including a bilateral agreement with HMRC. It fixes the method for several years but takes time and cost, so it suits stable, larger operations." },
  { q: "What if India adjusts the subsidiary profit?", a: "The adjustment is taxed in India. You can ask the UK for a corresponding adjustment under Article 10 of the treaty, and use the mutual agreement procedure under Article 27 if that fails." },
]

const relatedCards = [
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/blog/uk-to-india/india-uk-dtaa" },
  { title: "What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary", desc: "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.", href: "/blog/uk-to-india/uk-parent-reporting" },
  { title: "Building a Global Capability Centre in India as a UK Company: Models, Staging, Regulation and Pricing", desc: "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm outsourcing rules, transfer pricing, PE risk, talent and governance.", href: "/blog/uk-to-india/gcc-for-uk-companies" },
  { title: "Getting Money Out of India: How a UK Parent Receives Dividends, Service Fees, Royalties and Loan Repayments", desc: "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.", href: "/blog/uk-to-india/repatriating-profits" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK"
        description="How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Transfer Pricing for UK-Owned Indian Subsidiaries: Documentation, Methods and Audits" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every transaction between the Indian subsidiary and its UK group must be priced at arm&apos;s length,
          and India requires a transfer pricing report (Form 48) for the year even where the UK side is exempt.
          The usual model is a captive services company paid a cost-plus margin, tested against comparable
          companies. Document the services, the benefit and the margin each year, before the Indian return is
          due.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Principle", "Arm's length pricing for international transactions with associated enterprises"],
                ["Report", "Form 48 (previously Form 3CEB), a Chartered Accountant's report on international transactions, filed before the income tax return due date"],
                ["Documentation", "Required where the aggregate value of international transactions exceeds the prescribed limit (₹1 crore at the last check); master file and country-by-country reporting apply to larger groups"],
                ["Common method", "Transactional net margin method for service and captive models"],
                ["Difference from UK", "UK small and medium-sized enterprises are normally exempt from UK transfer pricing; India has no such exemption"],
                ["Penalties", "Adjustments are taxed; failure to maintain documents or file the report attracts separate penalties"],
                ["Dispute tools", "Advance pricing agreements and the mutual agreement procedure under Article 27 of the India-UK treaty"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What counts as an international transaction</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Any transaction between the Indian company and an associated enterprise outside India: services,
          intellectual property, loans, guarantees, cost allocations, secondments and share issues at below fair
          value. The definition of associated enterprise is wide, and common control by the UK group is enough.
          Even a free service or an interest-free loan is a transaction.
        </p>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The common UK-to-India models and how they are priced</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical pricing method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What the tax officer asks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Captive services company (software, finance, engineering or back office for the UK group)", "Cost plus a mark-up, tested by the transactional net margin method", "Is the cost base complete? Is the margin in the range of comparables? Who bears the risk?"],
                ["Marketing and sales support", "Cost plus or a commission", "Does the Indian team only support, or does it negotiate and conclude contracts (PE risk)?"],
                ["Distribution of UK products", "Resale price or transactional net margin", "Marketing intangibles and advertising spend borne by the Indian company"],
                ["Management and shared service charges from the UK", "Cost allocation, with the benefit test", "Did the Indian company need and receive the service? Is the allocation key reasonable?"],
                ["IP licence from the UK", "Comparable uncontrolled price or profit split", "Who developed and controls the IP? Is the royalty above what unrelated parties pay?"],
                ["Parent loan or guarantee", "Interest benchmarked to comparable loans", "Credit rating, currency and terms; guarantee fees"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The annual process, in order</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>List all transactions with the UK group during the Indian financial year (April to March).</li>
          <li>Check the aggregate value against the documentation limit, and the group&apos;s size against the master file and country-by-country reporting thresholds.</li>
          <li>Choose the method and run a benchmarking study of comparable independent companies.</li>
          <li>Write the local file: functional analysis, assumptions, comparables and conclusion.</li>
          <li>Have a Chartered Accountant certify Form 48 and file it before the income tax return due date.</li>
          <li>Keep the documents ready to be produced on request, usually within a short deadline, and align them with the UK intragroup agreements.</li>
        </ol>

        <h2 id="uk-india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the UK and Indian regimes differ</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>SME exemption:</strong> UK small and medium-sized enterprises are normally exempt from UK transfer pricing, but India applies its rules without any size exemption. Prepare for India even if the UK side needs nothing.</li>
          <li><strong>Form and timing:</strong> India requires the report to be filed with the return, with fixed documentation windows, while UK documentation is prepared to support the corporation tax return if asked.</li>
          <li><strong>Consistency:</strong> the intercompany agreement, the UK&apos;s understanding and India&apos;s benchmarking must tell the same story. A mismatch invites an adjustment and double tax.</li>
          <li><strong>Relief:</strong> if India adjusts the profit, the UK can give a corresponding adjustment under Article 10 of the treaty. Use the mutual agreement procedure under Article 27 if it does not.</li>
        </ul>

        <h2 id="audits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Audits, safe harbours and advance agreements</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Transfer pricing cases are referred to a Transfer Pricing Officer. Appeals go to the Dispute
          Resolution Panel or the Commissioner (Appeals) and the Income Tax Appellate Tribunal. Safe harbour
          rules allow certain transactions, such as some IT services, to be accepted at prescribed margins, but
          the margins and the scope change, so check the current rules. An advance pricing agreement, including
          a bilateral one with HMRC, fixes the method for several years and removes most of the audit risk for a
          captive centre with stable operations, at the cost of time and fees.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          We prepare Form 48 and the local file in India. Country-by-country reports are prepared by the UK
          ultimate parent; we help with the Indian notification and filing when the group report exists.
        </div>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">HMRC</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/companies-house" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies House</a>{" "}
          and the{" "}
          <a href="https://www.gov.uk/get-document-legalised" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">UK legalisation service for apostilles</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/uk-to-india/faq"
          seeAllLabel="See all 122 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department (India): transfer pricing", href: "https://www.incometax.gov.in" },
            { label: "HMRC: India-UK tax convention, synthesised text", href: "https://www.gov.uk/government/publications/india-tax-treaties/2020-uk-india-synthesised-text-of-the-multilateral-instrument-and-the-1993-double-taxation-convention-in-force" },
            { label: "HMRC International Manual: transfer pricing", href: "https://www.gov.uk/hmrc-internal-manuals/international-manual" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 19 October 2026. General information only, not legal or tax advice. Indian and UK rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Need a Transfer Pricing Study for India?"
        description="Tell us your intercompany transactions with the UK parent — we'll map your transfer pricing documentation and filing obligations."
      />
    </main>
  )
}
