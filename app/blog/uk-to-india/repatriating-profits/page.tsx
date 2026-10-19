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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "routes", label: "The routes compared" },
  { id: "dividends", label: "Paying a dividend step by step" },
  { id: "fees", label: "Service fees and royalties: where most disputes arise" },
  { id: "timing", label: "Timing, cash and the UK reporting year" },
  { id: "guardrails", label: "Guardrails before you pay" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How does a UK parent receive dividends from an Indian subsidiary?", a: "The subsidiary declares a dividend out of distributable profits, deducts Withholding Tax at 10% where the treaty documents are on file, files Form 145 and, where required, Form 146, and pays the net amount to the parent within 30 days of declaration." },
  { q: "Are service fees to a UK parent taxed in India?", a: "Not unless the parent has a permanent establishment in India, or the fee makes technical knowledge available, in which case up to 15% applies under the treaty. The fee must also be at arm's length and attract GST under reverse charge." },
  { q: "What are Forms 145 and 146?", a: "Form 145 (previously Form 15CA) is the remitter's declaration for foreign payments. Form 146 (previously Form 15CB) is a Chartered Accountant's certificate on the nature of the payment, the tax and the treaty position." },
  { q: "Can the Indian subsidiary repay a loan to the UK parent?", a: "Yes, within the repayment schedule and the RBI's ECB rules. The principal is not taxed, while interest bears Withholding Tax at up to 15% under the treaty." },
  { q: "How is a share buyback by the Indian subsidiary taxed?", a: "Since October 2024 buyback proceeds are taxed as a dividend in the shareholder's hands, with a capital loss on the shares that the shareholder may be able to use. The treaty rate and the UK treatment should be reviewed first." },
]

const relatedCards = [
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/blog/uk-to-india/india-uk-dtaa" },
  { title: "What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary", desc: "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.", href: "/blog/uk-to-india/uk-parent-reporting" },
  { title: "Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK", desc: "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime.", href: "/blog/uk-to-india/transfer-pricing" },
  { title: "Funding an Indian Subsidiary from the UK: Instruments, Pricing Floor, Valuation and RBI Reporting", desc: "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR.", href: "/blog/uk-to-india/funding-and-fema" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Getting Money Out of India: How a UK Parent Receives Dividends, Service Fees, Royalties and Loan Repayments"
        description="The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Getting Money Out of India: Dividends, Fees, Royalties and Loan Repayments to a UK Parent" },
        ]}
      />

      <GuideHero
        eyebrow="Repatriation: UK parent"
        title="Getting Money Out of India: How a UK Parent Receives Dividends, Service Fees, Royalties and Loan Repayments"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK parent can take money out of its Indian subsidiary by dividend, service fees, royalties, interest
          and loan repayment, buyback or capital reduction. Each route has a different Indian Withholding Tax, a
          different UK result and different paperwork. Dividends cost up to 10% in India and are normally exempt
          in the UK; service fees can bear no Indian tax without a permanent establishment but must be priced at
          arm&apos;s length and carry GST.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "Withholding Tax at the treaty rate of 10% where documents are on file; generally exempt in the UK"],
                ["Service fees", "Not taxable in India without a PE unless they make technical knowledge available (15%); arm's length pricing; GST under reverse charge"],
                ["Royalties", "15%, or 10% for equipment; arm's length; taxable in the UK with credit"],
                ["Interest", "15% (10% to a bank); taxable in the UK with credit"],
                ["Loan principal", "No tax, but ECB rules and RBI reporting apply"],
                ["Forms", "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB) from a Chartered Accountant"],
                ["Dividend payment deadline", "Within 30 days of declaration, under the Companies Act, 2013"],
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
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax on the payment</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">UK tax position</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Conditions and paperwork</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividend", "10% under the treaty (domestic rate 20% plus surcharge and cess without documents)", "Normally exempt (distribution exemption)", "Out of distributable profits; board recommends, shareholders approve; Forms 145 and 146; certificate of residence and Form 41"],
                ["Service fees", "Nil without a PE (or 15% if technical knowledge is made available)", "Taxable; Indian tax credited if any", "Written agreement, benefit test, arm's length mark-up; GST on reverse charge; Forms 145 and 146"],
                ["Royalties for IP or software licences", "15% (equipment 10%)", "Taxable; credit for Indian tax", "Licence agreement defining the IP and rate; transfer pricing support"],
                ["Interest on a parent loan", "15% (10% to banks)", "Taxable; credit for Indian tax", "ECB compliance; monthly RBI reporting; thin documentation is a transfer pricing risk"],
                ["Loan principal repayment", "No tax on principal", "Not income", "Within the agreed maturity under the ECB rules"],
                ["Share buyback or capital reduction", "Buyback proceeds are taxed as a dividend in the shareholder's hands from October 2024, with a capital loss on the shares", "Depends on the structure; plan with the UK adviser", "Companies Act process; High Court or tribunal approval for capital reduction"],
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

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Paying a dividend step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm distributable profits and that prior losses are made good.</li>
          <li>The board recommends the dividend and shareholders declare it. Interim dividends can be declared by the board.</li>
          <li>Obtain the HMRC certificate of residence and Form 41 from the UK parent.</li>
          <li>Apply Withholding Tax at 10% under Section 393 of the Income-tax Act, 2025 and deposit it by the 7th of the following month.</li>
          <li>Obtain the Chartered Accountant&apos;s certificate in Form 146 where required, and file Form 145.</li>
          <li>Pay the net amount to the UK parent&apos;s bank account within 30 days of the declaration, and issue the Withholding Tax certificate.</li>
        </ol>

        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Service fees and royalties: where most disputes arise</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A fee for a service that does not make technical knowledge available is business profit for the UK
          company, and India cannot tax it unless a permanent establishment exists. That is why many groups
          route management and support charges as fees rather than dividends. The Indian tax authorities will
          test the charge on three points: did the subsidiary receive a real benefit, was the price arm&apos;s
          length, and does the fee actually fall into royalties or fees for technical services at 15%? Keep time
          sheets, invoices and the agreement, and see{" "}
          <Link href="/blog/uk-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="timing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timing, cash and the UK reporting year</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Both countries commonly close the year on 31 March, so a dividend declared after the Indian audit is
          signed usually lands in the UK parent&apos;s next period. Plan the cash with the UK finance team: the
          net amount arrives after withholding, the Withholding Tax certificate follows after the quarterly
          return is filed, and the UK parent needs the certificate for any credit claim.
        </p>

        <h2 id="guardrails" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Guardrails before you pay</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Check the sector&apos;s FDI conditions: a few have limits on payouts or royalties.</li>
          <li>Keep the board minutes, valuation and agreements in the same place as the payment advice.</li>
          <li>Do not pay a related party before the agreement is signed. Back-dating is easy to spot.</li>
          <li>Confirm the dividend is out of profits and that the Companies Act&apos;s transfer to reserves, if any, has been made.</li>
          <li>Ask whether a deemed dividend can arise from loans to shareholders.</li>
        </ul>

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
            { label: "Income Tax Department (India)", href: "https://www.incometax.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "HMRC: India-UK tax convention, synthesised text", href: "https://www.gov.uk/government/publications/india-tax-treaties/2020-uk-india-synthesised-text-of-the-multilateral-instrument-and-the-1993-double-taxation-convention-in-force" },
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
        title="Ready to Repatriate Profits to the UK?"
        description="Tell us your planned dividend, fee or royalty payments — we'll map the treaty rates, HMRC certificate and Form 145 and 146 steps."
      />
    </main>
  )
}
