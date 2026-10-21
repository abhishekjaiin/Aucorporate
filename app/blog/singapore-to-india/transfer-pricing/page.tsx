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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "rules", label: "The Indian rules in short" },
  { id: "services", label: "Common Singapore-India intercompany flows" },
  { id: "singapore-diff", label: "Where Singapore differs from India" },
  { id: "safe", label: "Safe harbour, APAs and disputes" },
  { id: "practice", label: "A practical annual cycle" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India have a small-company exemption from transfer pricing?", a: "No. Form 48 is needed for any international transaction with an associated enterprise, whatever the value. Detailed documentation is required above prescribed value thresholds, which your Indian adviser should confirm each year." },
  { q: "Does Singapore's routine support services mark-up work in India?", a: "Not automatically. IRAS accepts a defined mark-up for routine support services, but India needs its own benchmarking of the Indian entity's margin." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB, filed with the tax return under the Income-tax Act, 2025." },
  { q: "Can a Singapore parent get an advance pricing agreement for India?", a: "Yes. India has a unilateral and bilateral APA program, and a bilateral agreement involves both competent authorities." },
  { q: "Is a management fee from Singapore deductible in India?", a: "Only to the extent it is at arm's length and supported by proof that the Indian entity received a service it needed." },
  { q: "What happens if India makes a transfer pricing adjustment?", a: "The Indian income rises, penalty may apply, and the Singapore side may claim relief through the mutual agreement procedure within three years of first notice." },
]

const relatedCards = [
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/blog/singapore-to-india/india-singapore-dtaa" },
  { title: "Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.", href: "/blog/singapore-to-india/repatriating-profits" },
  { title: "What a Singapore Parent Company Owes at Home When It Owns an Indian Subsidiary", desc: "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law.", href: "/blog/singapore-to-india/singapore-parent-obligations" },
  { title: "Setting Up a Global Capability Centre in India for a Singapore Group: Models, Pricing, Tax and Risk", desc: "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST on exports, PE risk, MAS outsourcing and talent.", href: "/blog/singapore-to-india/gcc-for-singapore-companies" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs"
        description="How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Transfer Pricing Between Singapore and India: Form 48, Benchmarking and IRAS Differences" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every transaction between a Singapore parent and its Indian subsidiary must be priced at arm&apos;s
          length for Indian tax. India has no small-company exemption: transactions above a modest threshold
          need an accountant&apos;s report in Form 48 (previously Form 3CEB) and detailed documentation, and
          penalties for failures are heavy. Singapore has its own documentation thresholds and accepts a fixed
          mark-up for routine support services, which India does not, so the two sets of papers must agree.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Arm's length rule", "Prices between related parties must match what independent parties would agree"],
                ["Form 48", "Accountant's report (previously Form 3CEB) required for any international transaction with an associated enterprise, whatever its value"],
                ["Local documentation", "Required above prescribed value thresholds; confirm the current figures with your Indian adviser"],
                ["Master file", "For groups with large consolidated revenue and large Indian transactions, in the prescribed form"],
                ["Country-by-country report", "Prepared by the ultimate parent; Singapore requires it from groups with consolidated revenue above SGD 1.125 billion"],
                ["Singapore", "Contemporaneous documentation above defined thresholds; accepted mark-up on routine support services"],
                ["Disputes", "Mutual agreement procedure under Article 27 of the treaty; bilateral APA programs in both countries"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian rules in short</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Methods:</strong> comparable uncontrolled price, resale price, cost plus, profit split and the transactional net margin method, which is the most used for service entities.</li>
          <li><strong>Benchmarking:</strong> a search of independent comparables, updated each year, supports the margin earned by the Indian entity.</li>
          <li><strong>Form 48:</strong> the accountant&apos;s report on international transactions, filed with the tax return. Under the Income-tax Act, 2025, the form names and sections are new.</li>
          <li><strong>Penalties:</strong> failure to keep documents or report transactions attracts a percentage of the transaction value, and adjustments attract penalty on the under-reported income.</li>
          <li><strong>Secondary adjustment:</strong> an upward adjustment may require the excess money to be repatriated or treated as a deemed loan.</li>
        </ul>

        <h2 id="services" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common Singapore-India intercompany flows</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical pricing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What India checks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Indian subsidiary provides software or support services to Singapore", "Cost plus a mark-up from the benchmarking", "Margin in line with comparables; export of services conditions"],
                ["Singapore provides management or IT services to India", "Cost allocation or cost plus", "Actual benefit; duplication; shareholder activity exclusion"],
                ["Intercompany loan", "Interest rate in line with credit rating and currency", "Arm's length rate; ECB ceiling; interest limitation"],
                ["Licence of brand or software", "Royalty as a percentage of sales or fixed fee", "Whether the brand adds value; benchmark; treaty rate"],
                ["Secondment of Singapore staff", "Reimbursement with or without mark-up", "PE risk and Withholding Tax on reimbursements"],
                ["Cost-sharing pool", "Allocation key based on use", "Proof of benefit"],
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

        <h2 id="singapore-diff" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where Singapore differs from India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Routine support services:</strong> IRAS accepts a fixed mark-up on a published list of routine support services without benchmarking, subject to conditions. India has no equivalent blanket rule, so the Indian entity needs its own benchmarking.</li>
          <li><strong>Documentation thresholds:</strong> Singapore requires documentation above set related-party transaction values and gross revenue; India&apos;s threshold is separate and applies to the Indian entity regardless of group size.</li>
          <li><strong>Transaction-level:</strong> India examines each type of international transaction separately; mark-ups that look acceptable in aggregate can fail on a line-by-line basis.</li>
          <li><strong>Timing:</strong> Indian transfer pricing runs on a 31 March year end. Align the year end or prepare a reconciliation.</li>
        </ul>

        <h2 id="safe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour, APAs and disputes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>India&apos;s safe harbour rules offer defined margins for certain transactions and sectors, but the conditions and the rates have been changed over time. Check the current rules before relying on them.</li>
          <li>An advance pricing agreement fixes the method for up to several years and rollback years. A bilateral APA with Singapore involves both competent authorities.</li>
          <li>If an adjustment leads to double tax, a mutual agreement procedure case can be filed within three years of first notification under Article 27 of the treaty. India has not accepted MLI mandatory arbitration.</li>
        </ul>

        <h2 id="practice" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A practical annual cycle</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Fix the intercompany agreements before the year starts.</li>
          <li>Review actual margins at half-year and adjust the billing to stay inside the range.</li>
          <li>Run the benchmarking study and update the file after year end.</li>
          <li>Prepare Form 48 and local documentation before the filing date.</li>
          <li>Check the Singapore documentation obligations and align the numbers.</li>
          <li>Keep invoices, time records and emails that show who did what.</li>
        </ol>

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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "IRAS: transfer pricing", href: "https://www.iras.gov.sg/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
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
        title="Transfer Pricing Between Singapore and India?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation, Form 48 and how it lines up with your IRAS file."
      />
    </main>
  )
}
