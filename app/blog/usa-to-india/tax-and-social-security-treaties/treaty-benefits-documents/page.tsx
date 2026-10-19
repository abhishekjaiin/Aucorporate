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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "docs", label: "The document set" },
  { id: "steps", label: "Step by step" },
  { id: "bo", label: "Beneficial ownership and anti-abuse" },
  { id: "llc", label: "US LLCs and pass-through entities" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is Form 6166?", a: "A letter from the IRS certifying that a person or company is a US tax resident, used to claim treaty benefits abroad." },
  { q: "How do we get Form 6166?", a: "By applying to the IRS with Form 8802. Allow time, because processing can take several weeks." },
  { q: "What is Form 41?", a: "A statement a non-resident provides to claim treaty benefits in India, previously Form 10F under the 1961 Act." },
  { q: "Do we need a no-PE declaration?", a: "Often yes. Payers or tax officers commonly ask for it to confirm the recipient has no permanent establishment in India." },
  { q: "How long is Form 6166 valid?", a: "It usually covers one calendar year. Renew it each year before the first payment." },
  { q: "What is beneficial ownership?", a: "It means the recipient is the true owner of the income and not merely passing it to someone else." },
  { q: "Can a US LLC claim treaty benefits?", a: "Sometimes. It depends on how the LLC is taxed in the US and on its owners. Take advice before claiming." },
  { q: "What happens if we have no documents?", a: "The Indian payer may deduct Withholding Tax at the higher domestic rate, and you may have to claim a refund later." },
]

const relatedCards = [
  { title: "India-US DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Included Services", desc: "Treaty rates for payments from India to the US: dividends 15% or 25%, interest 10% or 15%, royalties and fees 10% or 15%. Conditions and how to apply them.", href: "/blog/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "The India-US Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax", desc: "How the India-US tax treaty works: who qualifies, which taxes it covers, how treaty and domestic law interact, residency, relief from double tax and disputes.", href: "/blog/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide" },
  { title: "Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/usa-to-india/repatriating-profits" },
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
]

export default function TreatyBenefitsDocumentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Claim India-US Treaty Benefits: Form 6166, Form 41 and Beneficial Ownership"
        description="Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership."
        datePublished="2026-10-14"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/usa-to-india/tax-and-social-security-treaties" },
          { label: "Claiming India-US Treaty Benefits: Form 6166 and Form 41" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: claiming relief"
        title="How to Claim India-US Treaty Benefits: Form 6166, Form 41 and Beneficial Ownership"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          To claim India-US treaty rates, the US recipient gives the Indian payer a US Tax Residency Certificate
          (IRS Form 6166), a Form 41 (previously Form 10F) statement, and, where asked, a declaration that it
          has no permanent establishment in India and is the beneficial owner of the income. Request Form 6166
          early; it is issued by the IRS and usually covers one calendar year.
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
                ["US residency proof", "IRS Form 6166, requested with Form 8802"],
                ["Indian statement", "Form 41 (previously Form 10F), filed electronically or given to the payer"],
                ["Declarations", "No permanent establishment in India; beneficial ownership"],
                ["Who asks", "The Indian payer, its adviser or the tax officer"],
                ["Validity", "Form 6166 generally covers a calendar year; renew before the first payment of each year"],
                ["Result", "Withholding Tax at the treaty rate instead of the domestic rate"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="docs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The document set</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Issued by</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Form 6166 (Certification of US tax residency)", "IRS, on request using Form 8802", "Proves the recipient is a US tax resident"],
                ["Form 41 (previously Form 10F)", "The recipient, filed on the Indian portal or provided to the payer", "Gives residency details the Indian rules ask for, including tax identification number and period of residence"],
                ["No-PE declaration", "The recipient", "States that the recipient has no permanent establishment in India for the payment"],
                ["Beneficial ownership statement", "The recipient", "Shows that the recipient is the real owner of the income, not a conduit"],
                ["Contract or agreement", "Both parties", "Supports the classification of the payment"],
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

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Check which US entity actually receives the payment and whether it is a US tax resident for treaty purposes.</li>
          <li>Apply to the IRS for Form 6166 using Form 8802. Allow weeks for processing.</li>
          <li>Prepare Form 41 (previously Form 10F) with the recipient&apos;s identification number and residence period.</li>
          <li>Prepare the no-PE and beneficial ownership declarations.</li>
          <li>Give the set to the Indian payer before the first remittance of the year.</li>
          <li>Keep copies for tax audit and for any notice.</li>
        </ol>

        <h2 id="bo" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Beneficial ownership and anti-abuse</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Treaty benefits are for the real recipient of the income. If the US entity passes the money on to
          another party under an obligation, or has no substance, the treaty claim can be challenged. The treaty
          also has a limitation on benefits article that tests whether a company qualifies. Check both before
          relying on the treaty for a holding company or a pass-through entity.
        </p>

        <h2 id="llc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">US LLCs and pass-through entities</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A US LLC taxed as a partnership or disregarded entity is not always treated as a resident under the
          treaty. Treaty benefits can depend on the residence of its owners and on the treaty&apos;s rules for
          fiscally transparent entities. Get a specific opinion before the first payment.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Put a renewal date for Form 6166 in your tax calendar. Missing it can cost a higher Withholding Tax rate on the first payment of the year.</li>
          <li>The IRS processes Form 8802 slowly at times. Do not wait until the day before a dividend.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Starting Form 6166 after the payment date.</li>
          <li>Giving an old certificate for a new year.</li>
          <li>Filing Form 41 with a different entity name from the recipient on the invoice.</li>
          <li>Skipping the beneficial ownership check for holding entities.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We tell you exactly which documents the payer needs, prepare Form 41, and review beneficial ownership
          and PE position before payment.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Forms can be verified at the primary sources: the{" "}
          <a href="https://www.incometax.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          for Form 41 and the{" "}
          <a href="https://www.irs.gov" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service</a>{" "}
          for Form 6166 and Form 8802.
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Internal Revenue Service: tax treaties A to Z", href: "https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z" },
            { label: "Income Tax Department: tax treaties", href: "https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" },
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
        title="Need Form 6166, Form 41 or a No-PE Declaration?"
        description="Tell us the payments you plan to make to the US — we'll prepare the treaty documentation pack and remittance forms."
      />
    </main>
  )
}
