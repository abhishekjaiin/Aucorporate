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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "rates", label: "Treaty rate cap by type of payment" },
  { id: "dividends", label: "Dividends to a US parent" },
  { id: "interest", label: "Interest on loans from the US parent" },
  { id: "royalty", label: "Royalties and fees for included services" },
  { id: "steps", label: "Before each remittance" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the Withholding Tax rate on dividends from India to a US parent?", a: "Under the treaty, 15% if the US company holds at least 10% of the voting stock of the Indian company, and 25% otherwise, subject to documents and the domestic rate." },
  { q: "What is the treaty rate on interest?", a: "10% on interest from banks and similar institutions, 15% in other cases." },
  { q: "What is the treaty rate on royalties?", a: "10% for equipment royalties and related services, 15% for other covered royalties." },
  { q: "What are fees for included services?", a: "Fees for services that make available technical knowledge, experience, skill, know-how or processes, or transfer a technical plan or design, as the treaty defines." },
  { q: "Is the treaty rate always applied?", a: "Only if the recipient proves residence and the conditions are met. The lower of the treaty and domestic rate applies." },
  { q: "Do surcharge and cess apply on top?", a: "Domestic rates carry surcharge and cess. Whether they apply on the treaty rate depends on the Act and the payment, so confirm before remitting." },
  { q: "Which Indian section governs the deduction?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
  { q: "Which forms accompany the remittance?", a: "Form 145 (previously Form 15CA) and, where required, a Chartered Accountant's Form 146 (previously Form 15CB)." },
  { q: "Are capital gains covered by the rate caps?", a: "No. The treaty has no rate cap for capital gains, and domestic rules generally apply." },
]

const relatedCards = [
  { title: "How to Claim India-US Treaty Benefits: Form 6166, Form 41 and Beneficial Ownership", desc: "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.", href: "/blog/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/usa-to-india/repatriating-profits" },
  { title: "Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/usa-to-india/transfer-pricing" },
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
]

export default function DtaaWithholdingRatesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India-US DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Included Services"
        description="Treaty rates for payments from India to the US: dividends 15% or 25%, interest 10% or 15%, royalties and fees 10% or 15%. Conditions and how to apply them."
        datePublished="2026-10-14"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/usa-to-india/tax-and-social-security-treaties" },
          { label: "India-US DTAA Withholding Tax Rates for Payments to the US" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: withholding rates"
        title="India-US DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Included Services"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Under the India-US treaty, Indian Withholding Tax on payments to a US resident is generally capped at
          15% on dividends (25% if the recipient holds less than 10% of the voting stock), 10% or 15% on
          interest, and 10% or 15% on royalties and fees for included services. The cap applies only if you hold
          the right documents, and surcharge and cess rules should be checked with your adviser.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <p className="mb-8">
          <Link href="/blog/usa-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to India-US tax treaty and social security: the complete guide
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "15% if the recipient company holds at least 10% of the payer's voting stock; 25% otherwise (Article 10)"],
                ["Interest", "10% on loans from banks and similar institutions, including insurers; 15% otherwise (Article 11)"],
                ["Royalties and fees for included services", "10% for equipment royalties and related services; 15% for other covered payments (Article 12)"],
                ["Capital gains", "No treaty cap; domestic rules apply (Article 13)"],
                ["Indian section for deduction", "Section 393 of the Income-tax Act, 2025 (previously Section 195)"],
                ["Condition", "Tax Residency Certificate, Form 41 (previously Form 10F) and beneficial ownership"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Treaty rate cap by type of payment</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Payment</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty cap</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian domestic rate</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Condition for the treaty rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividend from the Indian subsidiary to the US parent", "15%", "20%", "Recipient is a company holding at least 10% of the voting stock of the payer"],
                ["Dividend, other recipients", "25%", "20%", "Other cases. The domestic rate is lower, so it applies"],
                ["Interest on a loan from a bank or similar institution", "10%", "20%; 5% on qualifying external commercial borrowings", "Includes an insurance company"],
                ["Interest, other", "15%", "20%; 5% on qualifying external commercial borrowings", "Includes interest on loans from a US parent in most cases"],
                ["Royalty for equipment", "10%", "20%", "Use of industrial, commercial or scientific equipment, and related ancillary services"],
                ["Royalty, other", "15%", "20%", "Patents, know-how, software rights as defined in the treaty"],
                ["Fees for included services (technical services)", "10% or 15%", "20%", "Depends on category; services that make available technical knowledge, skill or know-how fall within the article"],
                ["Capital gains", "No treaty cap", "Domestic rules", "Taxed under domestic law (Article 13)"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          The treaty rate is a cap. The rate actually applied is the lower of the treaty cap and the Indian
          domestic rate. Domestic rates shown are the headline rates for non-residents (Section 115A of the 1961
          Act; royalty and fees rose from 10% to 20% from 1 April 2023) and are before surcharge and 4% health
          and education cess. Section numbers and rates under the Income-tax Act, 2025 and each Finance Act can
          change, so confirm the rate for the tax year before each remittance.
        </div>

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends to a US parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India no longer taxes dividends in the paying company&apos;s hands. Dividends are taxed in the
          shareholder&apos;s hands, and for a non-resident this means Withholding Tax at the payment. The
          domestic rate for a foreign company is generally 20% plus surcharge and cess, so the treaty&apos;s 15%
          cap is usually the lower rate for a US parent holding at least 10% of the voting stock.
        </p>

        <h2 id="interest" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Interest on loans from the US parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Interest on a loan from the US parent to the Indian subsidiary is subject to Withholding Tax and to
          the Reserve Bank of India&apos;s external commercial borrowing rules. Some categories of
          foreign-currency borrowing have their own lower domestic rates, so compare the domestic and treaty
          positions. Interest must also be at arm&apos;s length. See{" "}
          <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="royalty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Royalties and fees for included services</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty has its own definitions. Fees for included services are limited to services that make
          available technical knowledge, experience, skill, know-how or processes, or that transfer a technical
          plan or design. Whether a management fee or a software support fee falls within it needs a
          case-by-case review of the contract and the facts. Payments outside the definition may be business
          profits, taxed in India only if the US company has a permanent establishment.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Before each remittance</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Classify the payment under the contract and the treaty.</li>
          <li>Check the Tax Residency Certificate and Form 41 are current.</li>
          <li>Confirm the treaty rate against the domestic rate for the tax year.</li>
          <li>Deduct Withholding Tax at the right rate and deposit it with the government.</li>
          <li>File Form 145 (previously Form 15CA) and, where required, a Chartered Accountant&apos;s Form 146 (previously Form 15CB). See <Link href="/blog/usa-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.</li>
          <li>Give the US parent the Withholding Tax certificate for its foreign tax credit claim.</li>
        </ol>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A lower Indian rate is not free money: the US foreign tax credit is based on tax actually paid, so a lower Indian rate may mean less credit but also less tax paid in total.</li>
          <li>Rates in older articles may be out of date. Always confirm with the current treaty text and Indian law.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Using the treaty rate without the Tax Residency Certificate.</li>
          <li>Classifying a service fee as business profits (or the reverse) without reading the contract.</li>
          <li>Ignoring surcharge and cess when estimating the net cost.</li>
          <li>Paying interest above arm&apos;s length or outside external commercial borrowing rules.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We classify each payment, confirm the treaty rate, deduct and deposit Withholding Tax and prepare the
          remittance forms.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rates can be verified at the primary sources: the{" "}
          <a href="https://www.indianembassyusa.gov.in/taxdata?id=9" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Embassy of India, Washington table of Indo-US DTAA rates</a>,
          the{" "}
          <a href="https://www.incometax.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          and the{" "}
          <a href="https://www.irs.gov/pub/irs-trty/inditech.pdf" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">IRS technical explanation of the treaty</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/usa-to-india/tax-and-social-security-treaties/faq"
          seeAllLabel="Treaty and social security FAQs"
          seeAllDescription="50 plain answers on the India-US tax treaty, withholding rates, expat tax and social security."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Embassy of India, Washington: Indo-US DTAA withholding rates", href: "https://www.indianembassyusa.gov.in/taxdata?id=9" },
            { label: "IRS: Technical Explanation of the India-US treaty", href: "https://www.irs.gov/pub/irs-trty/inditech.pdf" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 14 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Paying Dividends, Fees or Royalties to the US?"
        description="Tell us the payment type and amount — we'll confirm the treaty rate, the documents and the Form 145 and 146 steps."
      />
    </main>
  )
}
