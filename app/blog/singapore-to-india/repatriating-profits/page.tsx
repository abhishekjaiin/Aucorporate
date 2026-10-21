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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "routes", label: "The routes compared" },
  { id: "dividends", label: "Dividends: the standard route" },
  { id: "fees", label: "Fees, royalties and recharges" },
  { id: "limits", label: "Limits and traps" },
  { id: "singapore-side", label: "On the Singapore side" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is a dividend from India taxed on its way to a Singapore parent?", a: "India withholds tax at the treaty rate, 10% if the parent holds 25% or more and 15% otherwise, provided the residency certificate and Form 41 are given. Singapore can exempt the dividend under the foreign-sourced income exemption." },
  { q: "What forms are needed to send money from India to Singapore?", a: "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB) for the remittance, plus the treaty documents." },
  { q: "Are management fees to a Singapore parent taxable in India?", a: "Only if the fees make technical knowledge available or if the parent has a PE in India. The payment must also be at arm's length and supported by evidence of service." },
  { q: "When is Withholding Tax deposited?", a: "By the 7th of the month following the payment or credit." },
  { q: "Can an Indian subsidiary repay a loan from its Singapore parent at any time?", a: "Principal repayment follows the ECB agreement and the RBI's minimum maturity. Early repayment before the minimum maturity needs care." },
  { q: "Does India limit interest to a foreign parent?", a: "Yes. Interest paid to an associated enterprise abroad is capped under the interest limitation rule and must also meet the RBI cost ceiling and arm's length tests." },
]

const relatedCards = [
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/blog/singapore-to-india/india-singapore-dtaa" },
  { title: "Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs", desc: "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.", href: "/blog/singapore-to-india/transfer-pricing" },
  { title: "Funding an Indian Subsidiary from Singapore: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.", href: "/blog/singapore-to-india/funding-and-fema" },
  { title: "What a Singapore Parent Company Owes at Home When It Owns an Indian Subsidiary", desc: "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law.", href: "/blog/singapore-to-india/singapore-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments"
        description="How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Repatriating Profits from India to Singapore: Dividends, Fees, Royalties and Loans" },
        ]}
      />

      <GuideHero
        eyebrow="Money out: repatriation"
        title="Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore parent can take money out of its Indian subsidiary as dividends, service fees, royalties,
          interest, loan repayments, buybacks or sale proceeds. Each route has its own Indian Withholding Tax
          under Section 393, its own treaty ceiling and its own paperwork, and Singapore sometimes adds its own
          tax on arrival. Dividends are usually the cleanest: 10% where the parent holds at least 25%, then
          exempt in Singapore under the foreign-sourced income exemption if its conditions are met.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "Treaty cap 10% (25% holding or more) or 15%; Singapore exemption available if conditions are met"],
                ["Service fees", "Taxed in India only if they make technical knowledge available or there is a PE; GST on imported services via reverse charge"],
                ["Royalties", "Treaty cap 10% (confirm); transfer pricing applies"],
                ["Interest", "Treaty cap 10% for banks, 15% otherwise; ECB rules"],
                ["Loan repayment", "Principal repayments follow the ECB schedule; Form 145 and 146 as applicable"],
                ["Paperwork", "Singapore residency certificate, Form 41, no-PE declaration, Form 145 (previously 15CA), Form 146 (previously 15CB) where needed"],
                ["Payer's duty", "Deduct Withholding Tax under Section 393 and deposit by the 7th of the following month"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The routes compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax on the outflow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Singapore result</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividends", "10% or 15% under the treaty, against about 20% plus surcharge and cess domestically", "Exempt under foreign-sourced income exemption if conditions are met", "Distributable profits; Form 41 before payment"],
                ["Service fees", "Often nil if no make-available and no PE; otherwise up to 10%", "Taxable business income with credit for Indian tax", "Documented services, arm's length price, GST reverse charge"],
                ["Royalties", "Up to 10% under the treaty as we read it", "Taxable with credit", "Licence agreement, valuation, transfer pricing"],
                ["Interest", "10% bank / 15% other", "Taxable with credit", "ECB ceiling, thin capitalisation limits"],
                ["Loan principal", "No tax on principal", "Not income", "Maturity and registration"],
                ["Buyback or capital reduction", "Taxed as deemed dividend or capital gain depending on the route", "Depends on the structure and the parent's tax position", "Procedure under the Companies Act"],
                ["Sale proceeds", "Capital gains per the treaty and date of acquisition", "No capital gains tax", "Valuation, indirect transfer"],
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

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends: the standard route</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The board recommends a dividend from distributable profits after the audit; the shareholders approve it at the AGM.</li>
          <li>The subsidiary asks the Singapore parent for the residency certificate, Form 41 and declarations.</li>
          <li>It deducts Withholding Tax under Section 393 at the treaty rate and pays the net amount through the dealer bank, with Form 145 and, where required, Form 146.</li>
          <li>It issues a Withholding Tax certificate. The parent keeps it for its Singapore tax return and any foreign tax credit.</li>
          <li>The parent confirms the foreign-sourced income exemption conditions in Singapore.</li>
        </ol>

        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fees, royalties and recharges</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Put each charge in a written agreement before the services begin, with a price method and evidence of benefit.</li>
          <li>Apply transfer pricing and keep a benchmarking file. See <Link href="/blog/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Charge GST under reverse charge on imported services if the subsidiary is registered and the supply is taxable.</li>
          <li>Avoid vague &apos;management fees&apos; with no recipient work. Indian authorities often disallow such costs.</li>
        </ul>

        <h2 id="limits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limits and traps</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Excess interest:</strong> interest above the ECB ceiling or arm&apos;s length is not deductible and may not be remitted.</li>
          <li><strong>Thin capitalisation:</strong> interest paid to foreign associated enterprises is limited to a percentage of EBITDA under the Indian interest limitation rule.</li>
          <li><strong>Dividend timing:</strong> declaring a dividend before the accounts are approved invites disputes.</li>
          <li><strong>Missed forms:</strong> a bank may refuse to remit without Form 145 or the right declaration.</li>
          <li><strong>PE risk:</strong> if the Singapore parent&apos;s staff do the work, the fees may be profits of an Indian PE rather than service income.</li>
        </ul>

        <h2 id="singapore-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">On the Singapore side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Keep the Indian Withholding Tax certificates. Singapore gives a foreign tax credit on income that is
          taxed in Singapore, up to the Singapore tax on that income. Dividends that qualify for the
          foreign-sourced income exemption do not need a credit. For details, see{" "}
          <Link href="/blog/singapore-to-india/singapore-parent-obligations" className="text-blue-800 font-semibold hover:underline">Singapore parent obligations</Link>.
        </p>

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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "IRAS: tax exemption of foreign-sourced income", href: "https://www.iras.gov.sg/irashome/Businesses/Companies/Working-out-Corporate-Income-Taxes/Companies-Receiving-Foreign-Income/Tax-Exemption-of-Foreign-Sourced-Income/" },
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
        title="Sending Profits Back to Singapore?"
        description="Tell us the dividend, fee, royalty or interest you plan to pay, and we'll map the treaty rate, the IRAS certificate and the remittance forms."
      />
    </main>
  )
}
