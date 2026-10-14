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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/global-vat"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "what", label: "What US sellers need to know" },
  { id: "b2b", label: "Selling to businesses and to consumers" },
  { id: "steps", label: "How registration works" },
  { id: "india", label: "VAT and your Indian subsidiary" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a US company without an overseas office need to register for VAT?", a: "Often yes, if it supplies taxable goods or services to customers there. The rules and thresholds vary by country." },
  { q: "What is the reverse charge?", a: "A mechanism where the business customer, not the seller, accounts for VAT on a cross-border supply." },
  { q: "Is there a single registration for EU digital sales?", a: "The EU offers one-stop schemes that let eligible sellers report VAT on B2C digital sales through one return." },
  { q: "Is GST in India the same as VAT?", a: "They are similar consumption taxes, but they are separate regimes with separate registration and returns." },
]

const relatedCards = [
  { title: "Incorporation Process for a US-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/usa-to-india/incorporation-process" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
  { title: "Ten Mistakes US Companies Make When Setting Up in India, and How to Avoid Them", desc: "The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.", href: "/blog/usa-to-india/common-mistakes" },
]

export default function GlobalVatPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Global VAT for US Companies: Registration, Filing and Compliance"
        description="How VAT works for US companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Global VAT for US Companies Selling Abroad" },
        ]}
      />

      <GuideHero
        eyebrow="Beyond India: VAT"
        title="Global VAT for US Companies: Registration, Filing and Compliance"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          VAT is charged in the country where the customer is, not where you are. US companies that sell to
          customers in the EU, the UK or other VAT countries may have to register, charge local VAT, file returns
          and keep records. The rules differ for business and consumer customers, and for digital services and
          physical goods. Registration thresholds vary by country and change, so confirm them for each market.
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
                ["Where VAT is due", "Generally where the customer is located or the goods are delivered"],
                ["Business customers (B2B)", "Often handled through the reverse charge, with the customer accounting for VAT"],
                ["Consumer customers (B2C)", "Seller commonly charges local VAT; digital services may use one-stop schemes in the EU"],
                ["Compliance", "Registration, invoicing rules, periodic returns and record keeping"],
                ["India link", "Our teams support VAT from India alongside accounting and tax"],
                ["Thresholds", "Set by each country and updated often; always confirm before relying on them"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What US sellers need to know</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          VAT is a consumption tax. Sellers collect it from customers and pass it to the tax authority, after
          deducting VAT they paid on business costs. If you sell to customers in a VAT country, you may need to
          register there even without an office.
        </p>

        <h2 id="b2b" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling to businesses and to consumers</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Customer</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical treatment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Business customer", "The place of supply is often the customer's country; the customer accounts for VAT through the reverse charge. Collect the customer's VAT number and keep proof."],
                ["Consumer", "VAT is generally charged at the rate of the customer's country. Digital services sold to EU consumers can be reported through a one-stop scheme."],
                ["Physical goods", "Import VAT, customs and local registration rules also apply"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          Rates and thresholds differ by country and change over time. We confirm the current position for each
          market you sell into.
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How registration works</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map where your customers are and what you sell.</li>
          <li>Decide in which countries registration is needed and whether a one-stop scheme can be used.</li>
          <li>Register and obtain the VAT number; appoint a fiscal representative where the country requires it.</li>
          <li>Set up invoicing and tax codes in your billing system.</li>
          <li>File periodic returns and keep records for the required period.</li>
        </ol>

        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">VAT and your Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian GST is a separate tax. An Indian subsidiary that exports services may use the zero-rated export
          route under GST, and imports of services can attract reverse charge. Your overseas VAT position is
          managed separately and we align both in one compliance plan.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Check VAT before launching in a new country. Late registration can lead to back taxes and penalties.</li>
          <li>Make sure your billing system can capture the customer&apos;s country, VAT number and the tax charged.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Waiting to register until a notice arrives.</li>
          <li>Treating all customers the same regardless of country and status.</li>
          <li>Not capturing the customer&apos;s VAT number for B2B sales.</li>
          <li>Mixing Indian GST and overseas VAT in one return.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We support VAT registration, filing and advice for businesses selling abroad, alongside your India
          accounting and tax.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/blog/usa-to-india/global-vat" className="text-blue-800 font-semibold hover:underline">Global VAT services</Link>
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
            { label: "European Commission: VAT", href: "https://taxation-customs.ec.europa.eu/taxation/vat_en" },
            { label: "UK Government: VAT", href: "https://www.gov.uk/topic/business-tax/vat" },
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
