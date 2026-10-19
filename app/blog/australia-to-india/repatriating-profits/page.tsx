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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/repatriating-profits"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "routes", label: "The main routes" },
  { id: "steps", label: "How a remittance is processed" },
  { id: "contract", label: "Why a contract with the Australian parent matters" },
  { id: "treaty", label: "Treaty relief and the Australian position" },
  { id: "note", label: "A note on the new forms" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is Form 145 (previously Form 15CA)?", a: "Form 145 (previously Form 15CA) is the online declaration the remitting party files before paying a non-resident, giving details of the payment and its tax position. Banks need it to process most foreign remittances. It applies to payments from 1 April 2026 under the Income-tax Rules, 2026." },
  { q: "What is Form 146 (previously Form 15CB)?", a: "Form 146 (previously Form 15CB) is a Chartered Accountant's certificate on the nature of a foreign payment, its taxability and the Withholding Tax rate, including treaty relief. It is required for taxable payments above the prescribed limit, and each certificate carries a UDIN from the ICAI portal." },
  { q: "Can dividends be sent freely to Australia?", a: "Dividends can be remitted through the authorised dealer bank from distributable profits after tax, with the Withholding Tax and documentation in place." },
  { q: "Does the treaty reduce Withholding Tax?", a: "The India-Australia tax treaty can reduce Withholding Tax if the parent is an Australian tax resident and satisfies the conditions, which requires a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
  { q: "How can profits be repatriated from India to Australia?", a: "Profits can be repatriated from India to Australia through dividends, service fees, royalties and loan repayments. Each involves Indian Withholding Tax (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961), which the India-Australia tax treaty can reduce, and fees and royalties must meet transfer pricing rules. Remittances abroad usually need Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
  { q: "What documents are needed to remit dividends?", a: "Board and shareholder approvals, the audited accounts showing distributable profits, a Withholding Tax computation with treaty documents (Tax Residency Certificate and Form 41, previously Form 10F), and Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
  { q: "How are dividends paid and taxed?", a: "The board recommends and shareholders approve a dividend out of distributable profits. Withholding Tax applies on payment to the Australian parent under the Income-tax Act, 2025 (previously the Income-tax Act, 1961), at 15% under the India-Australia treaty where the conditions are met. Dividends from a wholly owned subsidiary are generally exempt in Australia (section 768-5, Income Tax Assessment Act 1997)." },
  { q: "How are royalties and software licence fees treated?", a: "Royalty payments to the parent attract Withholding Tax at the applicable domestic or treaty rate (15% under the India-Australia treaty, 10% for equipment royalties), transfer pricing review and GST on reverse charge. The agreement should define the licensed IP, the rate and the basis for it, and the payment needs the same documents as other foreign remittances." },
  { q: "What is the India-Australia tax treaty (DTAA)?", a: "The India-Australia tax treaty (DTAA) is an agreement that avoids double taxation between the two countries. It caps source-country withholding on dividends, interest and royalties (Articles 10 to 12) and defines when a permanent establishment exists (Article 5). Claiming its benefits needs a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
  { q: "What are Withholding Tax returns and when are they due?", a: "Withholding Tax deducted on salaries and payments is deposited by the 7th of the following month. Quarterly statements are filed in Form 138 for salaries, Form 140 for resident payments and Form 144 for non-resident payments (previously Forms 24Q, 26Q and 27Q)." },
]

const relatedCards = [
  { title: "The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies", desc: "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/australia-to-india/dtaa-pe-risk" },
  { title: "The India-Australia DTAA: Article-by-Article Guide for Australian Companies", desc: "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence state: tax rates table, permanent establishment, business profits, dividends, interest, royalties, capital gains, employees, relief, MAP and how to claim treaty benefits.", href: "/blog/australia-to-india/india-australia-dtaa" },
  { title: "Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/australia-to-india/transfer-pricing" },
  { title: "Australian Parent Obligations When You Own an Indian Subsidiary", desc: "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets, transfer pricing and thin capitalisation. A guide for Australian finance teams.", href: "/blog/australia-to-india/australian-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Repatriating Profits to Australia: Dividends, Fees, Royalties, Loans and the Paperwork"
        description="How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "Repatriating Profits from India to Australia: Forms and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Repatriate: moving money back"
        title="Repatriating Profits to Australia: Dividends, Fees, Royalties, Loans and the Paperwork"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian parent receives money from its Indian subsidiary as dividends, service fees, royalties,
          interest and loan repayments. Each route has its own Withholding Tax, transfer pricing and
          documentation. Remittances abroad typically need Form 145 and, where required, a Chartered
          Accountant&apos;s Form 146 (previously Forms 15CA and 15CB), and the India-Australia treaty can reduce
          Withholding Tax.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Routes", "Dividends, service fees, royalties, interest, loan repayment, buyback, capital reduction, sale proceeds"],
                ["Remittance declaration", "Form 145 (previously Form 15CA)"],
                ["CA certificate", "Form 146 (previously Form 15CB), where required, with a UDIN"],
                ["Withholding Tax", "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the Income-tax Act, 1961)"],
                ["Treaty support", "Tax Residency Certificate (ATO certificate of residency) and Form 41 (previously Form 10F)"],
                ["Treaty rates", "Dividends 15%; interest 15%; royalties and fees for services that make technical knowledge available 15% (10% for equipment royalties)"],
                ["Contract", "A written agreement with the Australian parent is the base for fees and royalties"],
                ["Applies to", "Payments on or after 1 April 2026 under the new forms"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The main routes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Basis</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax and compliance points</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividend", "Distributable profits; board and shareholder approval", "Withholding Tax at 15% under the India-Australia treaty (domestic rate: 20% plus surcharge and cess); generally exempt in Australia for a parent holding at least 10%; Forms 145 and 146 where required"],
                ["Service fees and management charges", "Written intercompany agreement; evidence of services", "Arm's length pricing; fees for services that make technical knowledge available are capped at 15% by the treaty, while other service fees are business profits taxable in India only through a permanent establishment; GST under reverse charge; Forms 145 and 146"],
                ["Royalties and licence fees", "Licence agreement defining the IP and rate", "Withholding Tax at 15% under the treaty (10% for equipment royalties) against the domestic 20% plus surcharge and cess; transfer pricing; GST under reverse charge"],
                ["Loan interest and repayment", "ECB terms registered with the RBI", "Withholding Tax on interest, capped by the treaty at 15%; repay only per the approved terms"],
                ["Buyback or capital reduction", "Companies Act procedure", "Conditions on size, timing and solvency; tax treatment to be checked"],
                ["Sale proceeds on exit", "Share sale or business sale", "Capital gains tax; FEMA pricing and reporting"],
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

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How a remittance is processed</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the basis: board approval for a dividend, or the agreement and invoice for a fee or royalty.</li>
          <li>Compute Withholding Tax at the domestic rate, or the treaty rate if the conditions are met.</li>
          <li>Collect the treaty documents: the parent&apos;s Tax Residency Certificate and Form 41 (previously Form 10F).</li>
          <li>Obtain a Chartered Accountant&apos;s certificate in Form 146 (previously Form 15CB) where required.</li>
          <li>File the remitter&apos;s declaration in Form 145 (previously Form 15CA) online.</li>
          <li>The bank processes the remittance. Deposit the Withholding Tax and file the related return, and account for GST under reverse charge where applicable.</li>
        </ol>

        <h2 id="contract" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why a contract with the Australian parent matters</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An intercompany agreement supports the deduction in India, the transfer pricing position and the
          remittance. It should state the scope of services, the price or method, payment terms, IP ownership,
          confidentiality and termination, be signed before the services start, and match what actually happens.
          Without it, tax officers can disallow the payment.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Treaty relief and the Australian position</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The India-Australia tax treaty (DTAA) can reduce Withholding Tax on dividends, interest, royalties and
          certain fees to 15% (10% for equipment royalties) if the parent is an Australian tax resident and
          meets the conditions. In Australia, dividends from a wholly owned Indian subsidiary are generally
          exempt, so the Indian tax on them is a final cost, while Indian tax on interest, royalties and fees
          can usually be claimed as a foreign income tax offset. See{" "}
          <Link href="/blog/australia-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">tax treaty and PE risk</Link>,{" "}
          <Link href="/blog/australia-to-india/india-australia-dtaa" className="text-blue-800 font-semibold hover:underline">the India-Australia DTAA guide</Link>{" "}
          and{" "}
          <Link href="/blog/australia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="note" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A note on the new forms</h2>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          The Income-tax Act, 2025 and Income-tax Rules, 2026 apply from 1 April 2026. Form 145 and Form 146
          replace Forms 15CA and 15CB for payments from that date. The thresholds for when Form 146 is required
          should be confirmed for each payment.
        </div>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treasury and tax teams should agree the repatriation route early, because each route affects Australia foreign tax credit, the transfer pricing position and the cash timing. Keep the agreement, Tax Residency Certificate and remittance forms with the intercompany file for your Auditors.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Paying fees to the parent without an agreement or evidence of services.</li>
          <li>Applying the wrong Withholding Tax rate or missing the treaty documents.</li>
          <li>Remitting a dividend without checking distributable profits.</li>
          <li>Treating transfer pricing and remittance as separate exercises.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the Forms 145 and 146, the Withholding Tax workings and the intercompany agreements.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources:{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          and the{" "}
          <a href="https://www.gst.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">GST portal</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/blog/australia-to-india/faq" seeAllCount={266} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
            { label: "Australian Taxation Office", href: "https://www.ato.gov.au/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 15 October 2026. General information only, not legal or tax advice. Indian and Australian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Repatriate Profits to Australia?"
        description="Tell us your planned dividend amount and timing — we'll map the withholding tax, DTAA relief and RBI reporting involved."
      />
    </main>
  )
}
