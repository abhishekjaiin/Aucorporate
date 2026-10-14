import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/repatriating-profits"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "routes", label: "The main routes" },
  { id: "steps", label: "How a remittance is processed" },
  { id: "contract", label: "Why a contract with the US parent matters" },
  { id: "treaty", label: "Treaty relief and the US credit" },
  { id: "note", label: "A note on the new forms" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is Form 145 (previously Form 15CA)?", a: "The online declaration the remitting party files before paying a non-resident, giving the details of the payment and its tax position." },
  { q: "What is Form 146 (previously Form 15CB)?", a: "A chartered accountant's certificate on the nature of the payment, its taxability and the Withholding Tax rate, required for taxable payments above the prescribed limit." },
  { q: "Can dividends be sent freely to the US?", a: "Dividends can be remitted through the authorized dealer bank from distributable profits after tax, with the Withholding Tax and documentation in place." },
  { q: "Does the treaty reduce Withholding Tax?", a: "It can, if the parent is a US tax resident and satisfies the conditions, which requires a tax residency certificate and treaty details in Form 41." },
]

const relatedCards = [
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
  { title: "Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/usa-to-india/transfer-pricing" },
  { title: "Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR", desc: "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.", href: "/blog/usa-to-india/funding-fema-fc-gpr" },
  { title: "US Parent Obligations When You Own an Indian Subsidiary", desc: "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.", href: "/blog/usa-to-india/us-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork"
        description="How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Repatriating Profits from India to the US: Forms and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Repatriate: moving money back"
        title="Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US parent receives money from its Indian subsidiary as dividends, service fees, royalties, interest
          and loan repayments. Each route has its own Withholding Tax, transfer pricing and documentation.
          Remittances abroad typically need Form 145 and, where required, a chartered accountant&apos;s Form 146
          (previously Forms 15CA and 15CB), and the India-US treaty can reduce Withholding Tax.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
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
                ["Treaty support", "Tax residency certificate and Form 41 (previously Form 10F)"],
                ["Contract", "A written agreement with the US parent is the base for fees and royalties"],
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
        <div className="overflow-x-auto mb-10">
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
                ["Dividend", "Distributable profits; board and shareholder approval", "Withholding Tax on payment, treaty relief possible; Forms 145 and 146 where required"],
                ["Service fees and management charges", "Written intercompany agreement; evidence of services", "Arm's length pricing; Withholding Tax; GST under reverse charge; Forms 145 and 146"],
                ["Royalties and license fees", "License agreement defining the IP and rate", "Withholding Tax at domestic or treaty rate; transfer pricing; GST under reverse charge"],
                ["Loan interest and repayment", "ECB terms registered with the RBI", "Withholding Tax on interest; repay only per the approved terms"],
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
          <li>Collect the treaty documents: the parent&apos;s tax residency certificate and Form 41 (previously
            Form 10F).
          </li>
          <li>Obtain a chartered accountant&apos;s certificate in Form 146 (previously Form 15CB) where required.</li>
          <li>File the remitter&apos;s declaration in Form 145 (previously Form 15CA) online.</li>
          <li>The bank processes the remittance. Deposit the Withholding Tax and file the related return, and
            account for GST under reverse charge where applicable.
          </li>
        </ol>

        <h2 id="contract" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why a contract with the US parent matters</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An intercompany agreement supports the deduction in India, the transfer pricing position and the
          remittance. It should state the scope of services, the price or method, payment terms, IP ownership,
          confidentiality and termination, be signed before the services start, and match what actually happens.
          Without it, tax officers can disallow the payment.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Treaty relief and the US credit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The India-US tax treaty (DTAA) can reduce Withholding Tax on dividends, interest, royalties and fees if
          the parent is a US tax resident and meets the conditions. The US parent may be able to claim a foreign
          tax credit for Indian tax withheld. See{" "}
          <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">tax treaty and PE risk</Link>{" "}
          and{" "}
          <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="note" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A note on the new forms</h2>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          The Income-tax Act, 2025 and Income-tax Rules, 2026 apply from 1 April 2026. Form 145 and Form 146
          replace Forms 15CA and 15CB for payments from that date. The thresholds for when Form 146 is required
          should be confirmed for each payment.
        </div>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Treasury and tax teams should agree the repatriation route early, because each route affects the US
            foreign tax credit, the transfer pricing position and the cash timing. Keep the agreement, tax
            residency certificate and remittance forms with the intercompany file for your auditors.
          </li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Paying fees to the parent without an agreement or evidence of services.</li>
          <li>Applying the wrong Withholding Tax rate or missing the treaty documents.</li>
          <li>Remitting a dividend without checking distributable profits.</li>
          <li>Treating transfer pricing and remittance as separate exercises.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We prepare the Forms 145 and 146, the Withholding Tax workings and the intercompany agreements.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory</Link>
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/blog/usa-to-india/faq" />

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
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />
        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 October 2026. General information only, not legal or tax advice. Indian rules change often;
          confirm current requirements before acting.
        </p>
      </article>
    </main>
  )
}
