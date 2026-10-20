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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "rates", label: "Treaty rate cap by type of payment" },
  { id: "dividends", label: "Dividends to a Japanese parent" },
  { id: "interest", label: "Interest on loans from the Japanese parent" },
  { id: "royalty", label: "Royalties and fees for technical services" },
  { id: "steps", label: "Before each remittance" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the Withholding Tax rate on dividends from India to a Japanese parent?", a: "Under the India-Japan treaty, 10%, subject to documents and the domestic rate. The domestic rate is generally 20%." },
  { q: "What is the treaty rate on interest?", a: "10%. Interest owed to certain Japanese government and public financial bodies can be exempt in India." },
  { q: "What is the treaty rate on royalties and fees for technical services?", a: "10% for both, as defined in Article 12 of the treaty." },
  { q: "Is the treaty rate a cap or a fixed rate?", a: "A cap. The rate applied is the lower of the treaty and domestic rate." },
  { q: "Does the Japanese parent need to hold a minimum percentage for the dividend rate?", a: "No minimum holding is needed for the 10% dividend rate under the treaty. Japan's own 95% exemption has a 25% holding and six-month test." },
  { q: "Do surcharge and cess apply on top of the treaty rate?", a: "This has been litigated. Confirm the position for the tax year before remitting." },
  { q: "Which Indian section governs the deduction?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
  { q: "Which forms accompany the remittance?", a: "Form 145 (previously Form 15CA) and, where required, a Chartered Accountant's Form 146 (previously Form 15CB)." },
  { q: "Are capital gains covered by the rate caps?", a: "No. The treaty has no rate cap for capital gains, and gains on shares of an Indian company are taxable in India." },
]

const relatedCards = [
  { title: "How to Claim India-Japan Treaty Benefits: Certificate of Residence, Form 41 and Beneficial Ownership", desc: "Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration.", href: "/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Repatriating Profits to Japan: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/japan-to-india/repatriating-profits" },
  { title: "Transfer Pricing in India: A Guide for Japanese Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a Japanese company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/japan-to-india/transfer-pricing" },
  { title: "The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies", desc: "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.", href: "/blog/japan-to-india/dtaa-pe-risk" },
]

export default function DtaaWithholdingRatesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India-Japan DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Technical Services"
        description="Treaty rates for payments from India to Japan: 10% on dividends, interest, royalties and fees for technical services, against 20% domestic rates."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/japan-to-india/tax-and-social-security-treaties" },
          { label: "India-Japan DTAA Withholding Tax Rates: Payments to Japan" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: withholding rates"
        title="India-Japan DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Technical Services"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Under the India-Japan treaty, Indian Withholding Tax on payments to a Japanese resident is capped at
          10% on dividends, interest, royalties and fees for technical services. The domestic Indian rate on
          these payments is generally 20% before surcharge and cess, so the treaty rate is usually lower. The
          cap applies only if you hold the right documents and meet the conditions of each article.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <p className="mb-8">
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to India-Japan tax treaty and social security: the complete guide
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "10% (Article 10)"],
                ["Interest", "10% (Article 11); some interest owed to the Japanese government and certain public financial bodies is exempt in India"],
                ["Royalties and fees for technical services", "10% (Article 12)"],
                ["Capital gains", "No treaty cap; gains on shares of an Indian company are taxable in India (Article 13)"],
                ["Indian section for deduction", "Section 393 of the Income-tax Act, 2025 (previously Section 195)"],
                ["Condition", "Japanese certificate of residence, Form 41 (previously Form 10F) and beneficial ownership"],
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
                <th scope="col" className="border border-gray-300 p-3 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividend from the Indian subsidiary to the Japanese parent", "10%", "20%", "Article 10; no minimum holding is needed for the 10% rate"],
                ["Interest on a loan from the Japanese parent or a bank", "10%", "20%; 5% on qualifying external commercial borrowings", "Article 11; exemptions for certain Japanese government and public financial bodies"],
                ["Royalty", "10%", "20%", "Article 12"],
                ["Fees for technical services", "10%", "20%", "Article 12; the treaty defines the services covered"],
                ["Capital gains", "No treaty cap", "Domestic rules", "Article 13"],
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
          Act; royalty and fees rose from 10% to 20% from 1 April 2023) before surcharge and 4% health and
          education cess. Whether surcharge and cess apply on top of a treaty rate has been litigated. Section
          numbers and rates under the Income-tax Act, 2025 and each Finance Act can change, so confirm the rate
          for the tax year before each remittance.
        </div>

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends to a Japanese parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India taxes dividends in the shareholder&apos;s hands, so a dividend to a non-resident carries
          Withholding Tax at the payment. The treaty rate for Japan is 10%, against a domestic rate of generally
          20%. On the Japanese side, a qualifying holding generally gets a 95% dividend exemption, which can
          mean the Indian tax on the exempt portion is not creditable. Your Japanese tax adviser should model
          this before you choose between dividends, fees and loan repayments.
        </p>

        <h2 id="interest" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Interest on loans from the Japanese parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Interest on a loan from the Japanese parent to the Indian subsidiary is subject to Withholding Tax and
          to the Reserve Bank of India&apos;s external commercial borrowing rules. Some categories of
          foreign-currency borrowing carry a lower domestic rate, so compare the two. Interest must also be at
          arm&apos;s length. See{" "}
          <Link href="/blog/japan-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="royalty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Royalties and fees for technical services</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A single 10% cap covers royalties and fees for technical services. Which payments count as royalties
          or technical fees depends on the treaty&apos;s definitions and on the contract, so classify each
          payment before the remittance. A payment outside the definitions may be business profits, which India
          can tax only if the Japanese company has a permanent establishment there.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Before each remittance</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Classify the payment under the contract and the treaty.</li>
          <li>Check that the Japanese certificate of residence and Form 41 are current.</li>
          <li>Confirm the treaty rate against the domestic rate for the tax year.</li>
          <li>Deduct Withholding Tax at the right rate and deposit it with the government.</li>
          <li>File Form 145 (previously Form 15CA) and, where required, a Chartered Accountant&apos;s Form 146 (previously Form 15CB). See <Link href="/blog/japan-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.</li>
          <li>Give the Japanese parent the Withholding Tax certificate for its tax return.</li>
        </ol>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The dividend exemption in Japan changes the value of the Indian tax credit. Plan the mix of dividends, service fees and royalties with both countries in view.</li>
          <li>Rates in older articles may be out of date. Always confirm with the current treaty text and Indian law.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Using the treaty rate without the certificate of residence.</li>
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
          <a href="https://www.incometax.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          and its{" "}
          <a href="https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">treaty page</a>,
          and Japan&apos;s{" "}
          <a href="https://www.nta.go.jp/english/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">National Tax Agency</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/japan-to-india/tax-and-social-security-treaties/faq"
          seeAllLabel="Treaty and social security FAQs"
          seeAllDescription="50 plain answers on the India-Japan tax treaty, withholding rates, expat tax and the social security agreement."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Income Tax Department: tax treaties", href: "https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" },
            { label: "National Tax Agency of Japan", href: "https://www.nta.go.jp/english/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 20 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Paying Dividends, Royalties or Fees to Japan?"
        description="Tell us the payment type and amount, and we'll confirm the treaty rate, the documents and the remittance forms."
      />
    </main>
  )
}
