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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "docs", label: "The document set" },
  { id: "steps", label: "Step by step" },
  { id: "bo", label: "Beneficial ownership and anti-abuse" },
  { id: "translate", label: "Language and format" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a certificate of residence?", a: "A document from the Japanese tax authority confirming that a person or company is a Japanese tax resident, used to claim treaty benefits abroad." },
  { q: "How do we get one?", a: "By applying to the competent Japanese tax office. Your Japanese tax adviser can do this. Allow time for processing." },
  { q: "What is Form 41?", a: "A statement a non-resident gives to claim treaty benefits in India, previously Form 10F under the 1961 Act." },
  { q: "Do we need a no-PE declaration?", a: "Often yes. Payers or tax officers commonly ask the recipient to confirm it has no permanent establishment in India." },
  { q: "Is an English translation needed?", a: "Usually yes. Keep an English translation with the original Japanese certificate." },
  { q: "What is beneficial ownership?", a: "It means the recipient is the true owner of the income and not merely passing it to someone else." },
  { q: "What happens if we have no documents?", a: "The Indian payer may deduct Withholding Tax at the higher domestic rate, and you may have to claim a refund later." },
  { q: "How often must we renew?", a: "Check the validity on the certificate and renew before it lapses, ideally before the first payment of each year." },
]

const relatedCards = [
  { title: "India-Japan DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Technical Services", desc: "Treaty rates for payments from India to Japan: 10% on dividends, interest, royalties and fees for technical services, against 20% domestic rates.", href: "/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "The India-Japan Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax", desc: "How the India-Japan tax treaty works: who qualifies, taxes covered, treaty versus domestic law, residency, relief from double tax and disputes.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" },
  { title: "Repatriating Profits to Japan: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/japan-to-india/repatriating-profits" },
  { title: "The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies", desc: "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.", href: "/blog/japan-to-india/dtaa-pe-risk" },
]

export default function TreatyBenefitsDocumentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Claim India-Japan Treaty Benefits: Certificate of Residence, Form 41 and Beneficial Ownership"
        description="Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration."
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
          { label: "Claiming India-Japan Treaty Benefits: Forms and Documents" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: claiming relief"
        title="How to Claim India-Japan Treaty Benefits: Certificate of Residence, Form 41 and Beneficial Ownership"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          To claim India-Japan treaty rates, the Japanese recipient gives the Indian payer a certificate of
          residence issued by the Japanese tax office, a Form 41 (previously Form 10F) statement and, where
          asked, a declaration that it has no permanent establishment in India and is the beneficial owner of
          the income. Apply for the certificate early and give the set to the payer before the first remittance
          of each year.
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
                ["Japanese residency proof", "Certificate of residence issued by the competent tax office of the National Tax Agency"],
                ["Indian statement", "Form 41 (previously Form 10F), filed electronically or given to the payer"],
                ["Declarations", "No permanent establishment in India; beneficial ownership"],
                ["Who asks", "The Indian payer, its adviser or the tax officer"],
                ["Validity", "Check the validity stated on the certificate and renew before it lapses"],
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
        <div className="overflow-x-auto mb-6">
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
                ["Certificate of residence (Japan)", "Japanese tax office, on application", "Proves the recipient is a Japanese tax resident for treaty purposes"],
                ["Form 41 (previously Form 10F)", "The recipient, filed on the Indian portal or given to the payer", "Gives residency details the Indian rules ask for, including tax identification number and period of residence"],
                ["No-PE declaration", "The recipient", "States that the recipient has no permanent establishment in India for the payment"],
                ["Beneficial ownership statement", "The recipient", "Shows the recipient is the real owner of the income, not a conduit"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          Japanese tax offices have their own application form and timing for certificates of residence. Ask
          your Japanese tax adviser to apply, and confirm the language and format that India will accept.
          Documents in Japanese usually need an English translation.
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Check which Japanese entity actually receives the payment and whether it is a Japanese tax resident for treaty purposes.</li>
          <li>Apply to the Japanese tax office for the certificate of residence. Allow time for processing.</li>
          <li>Prepare Form 41 (previously Form 10F) with the recipient&apos;s tax identification number and residence period.</li>
          <li>Prepare the no-PE and beneficial ownership declarations.</li>
          <li>Give the set to the Indian payer before the first remittance of the year.</li>
          <li>Keep copies for tax audit and for any notice.</li>
        </ol>

        <h2 id="bo" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Beneficial ownership and anti-abuse</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Treaty benefits are for the real recipient of the income. If the Japanese entity passes the money on
          to another party under an obligation, or has no substance, the treaty claim can be challenged. Check
          this before relying on the treaty for a holding company or an intermediate entity.
        </p>

        <h2 id="translate" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Language and format</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Japanese certificates are issued in Japanese. For the Indian payer and tax officers, keep an English
          translation with the original. Where a notary or apostille is also needed, see{" "}
          <Link href="/blog/japan-to-india/documents-and-apostille" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link>.
        </p>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Put a renewal date for the certificate in your tax calendar. Missing it can cost a higher Withholding Tax rate on the first payment.</li>
          <li>Tax offices can take time to issue certificates. Do not wait until the day before a dividend.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Starting the certificate application after the payment date.</li>
          <li>Giving an old certificate for a new period.</li>
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
          for Form 41 and Japan&apos;s{" "}
          <a href="https://www.nta.go.jp/english/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">National Tax Agency</a>{" "}
          for certificates of residence.
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
            { label: "National Tax Agency of Japan", href: "https://www.nta.go.jp/english/" },
            { label: "Income Tax Department: tax treaties", href: "https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" },
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
        title="Need a Japanese Certificate of Residence or Form 10F?"
        description="Tell us the payments you plan to make to Japan, and we'll prepare the treaty documentation pack and remittance forms."
      />
    </main>
  )
}
