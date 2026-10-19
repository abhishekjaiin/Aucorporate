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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/global-vat"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "what", label: "What Australian sellers need to know" },
  { id: "b2b", label: "Selling to businesses and to consumers" },
  { id: "steps", label: "How registration works" },
  { id: "india", label: "GST in India and your Indian subsidiary" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does an Australian company without an overseas office need to register for VAT?", a: "An Australian company without an overseas office may still need to register for VAT or GST in the countries where its customers are, especially for sales to consumers. Registration thresholds and rules differ by country and by whether the seller is established there, so the position should be checked for each market before the first sale." },
  { q: "What is the reverse charge?", a: "The reverse charge shifts the duty to account for VAT or GST from the supplier to the business customer. The supplier invoices without local tax and the customer reports and, where eligible, recovers the tax in its own return. It commonly applies to cross-border business-to-business services." },
  { q: "Is there a single registration for EU digital sales?", a: "Yes. The EU one-stop shop lets a non-EU seller of digital services to EU consumers register in one member state and report VAT for all EU sales in one return. Registration is still needed in other cases, for example for goods held in stock in another country." },
  { q: "Is GST in India the same as VAT?", a: "Indian GST is a destination-based tax similar in principle to VAT, but it has its own rates, registration and filing rules. It is separate from overseas VAT and from Australian GST, and each is filed in its own country." },
  { q: "Are exports GST-free in Australia?", a: "Exports of goods and most services to overseas customers are generally GST-free in Australia, which means no GST is charged but you can still claim input tax credits for the GST on your costs. You need evidence of the export. GST-free treatment in Australia does not remove any VAT or GST obligation in the customer's country." },
  { q: "Does an Australian company need to register for GST in India?", a: "An Australian company needs to register for GST in India if it supplies online information and database access or retrieval (OIDAR) services, such as software, apps or cloud services, to consumers in India. The simplified OIDAR registration applies, 18% GST is charged and a monthly return is filed. Supplies to business customers in India are usually under reverse charge." },
  { q: "What are the VAT registration thresholds for selling services abroad from Australia?", a: "Thresholds differ by country and by whether the seller is established there: the UK has none for non-UK businesses, the EU micro-threshold of €10,000 applies only to EU-established sellers, New Zealand is NZ$60,000 for remote services, Singapore overseas vendors register at SGD 100,000 of B2C sales (and SGD 1 million overall), and the UAE has none for foreign businesses. Thresholds change, so confirm before relying on them." },
]

const relatedCards = [
  { title: "Incorporation Process for an Australian-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/australia-to-india/incorporation-process" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/australia-to-india/compliance-calendar" },
  { title: "Thirteen Mistakes Australian Companies Make When Setting Up in India, and How to Avoid Them", desc: "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.", href: "/blog/australia-to-india/common-mistakes" },
]

export default function GlobalVatPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Global VAT and GST for Australian Companies: Registration, Filing and Compliance"
        description="How VAT and GST work for Australian companies selling digital services and goods into Europe, the UK, New Zealand, India and beyond: registration, B2B and B2C rules and compliance."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "Global VAT and GST for Australian Companies Selling Abroad" },
        ]}
      />

      <GuideHero
        eyebrow="Beyond India: VAT and GST"
        title="Global VAT and GST for Australian Companies: Registration, Filing and Compliance"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          VAT and GST are charged in the country where the customer is, not where you are. Australian companies
          that sell to customers in the EU, the UK, New Zealand, India or other VAT or GST countries may have to
          register, charge local tax, file returns and keep records, even without an office there. Exports are
          generally GST-free in Australia, but that does not remove the foreign obligation. The rules differ for
          business and consumer customers, and for digital services and physical goods.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="global-vat" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Where VAT or GST is due", "Generally where the customer is located or the goods are delivered"],
                ["Business customers (B2B)", "Often handled through the reverse charge, with the customer accounting for the tax"],
                ["Consumer customers (B2C)", "Seller commonly charges local VAT or GST; digital services may use one-stop schemes in the EU"],
                ["Australian GST on exports", "Exports of goods and most services to overseas customers are generally GST-free, and you can still claim input tax credits"],
                ["Compliance", "Registration, invoicing rules, periodic returns and record keeping"],
                ["India link", "Online services sold directly to Indian consumers need an Indian GST registration (OIDAR); our teams support this alongside accounting and tax"],
                ["Thresholds", "UK £90,000 for UK-established businesses and none for non-UK businesses; EU €10,000 micro-threshold for EU-established sellers only; New Zealand NZ$60,000 for remote services; Canada CAD 30,000; Singapore SGD 1 million (overseas vendors also SGD 100,000 of B2C sales in Singapore); UAE AED 375,000 for resident businesses and none for foreign businesses; India none for overseas suppliers of online services to consumers; Australia's own GST threshold is A$75,000. Thresholds change, so confirm before relying on them"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Australian sellers need to know</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          VAT and GST are consumption taxes. Sellers collect them from customers and pass them to the tax
          authority, after deducting tax they paid on business costs. Australia&apos;s GST works the same way,
          but registering for GST in Australia does not cover a foreign obligation. If you sell to customers in
          a VAT or GST country, you may need to register there even without an office.
        </p>

        <h2 id="b2b" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling to businesses and to consumers</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Customer</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical treatment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Business customer", "The place of supply is often the customer's country; the customer accounts for the tax through the reverse charge. Collect the customer's VAT or GST number and keep proof."],
                ["Consumer", "VAT or GST is generally charged at the rate of the customer's country. Digital services sold to EU consumers can be reported through a one-stop scheme."],
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
          <li>Register and obtain the VAT or GST number; appoint a fiscal representative where the country requires it.</li>
          <li>Set up invoicing and tax codes in your billing system.</li>
          <li>File periodic returns and keep records for the required period.</li>
        </ol>

        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GST in India and your Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian GST is a separate tax. An Indian subsidiary that exports services to its Australian parent may
          use the zero-rated export route under GST, and imports of services can attract reverse charge.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          If the Australian parent itself sells online services (software, apps, streaming, cloud or information
          services) directly to consumers in India, it is treated as an online information and database access
          or retrieval (OIDAR) supplier. It must register in India under the simplified OIDAR scheme, charge 18%
          GST and file a monthly return, even though it has no Indian entity. Business customers in India
          usually account for the tax themselves under reverse charge. Your overseas position is managed
          separately and we align both in one compliance plan.
        </p>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Check VAT and GST before launching in a new country. Late registration can lead to back taxes and penalties.</li>
          <li>Make sure your billing system can capture the customer&apos;s country, tax number and the tax charged, as well as the evidence you need for GST-free exports in Australia.</li>
          <li>Do not assume that an Australian GST registration or a GST-free export treatment settles your obligations overseas.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Waiting to register until a notice arrives.</li>
          <li>Treating all customers the same regardless of country and status.</li>
          <li>Not capturing the customer&apos;s tax number for B2B sales.</li>
          <li>Missing the Indian OIDAR registration when selling online services to Indian consumers.</li>
          <li>Mixing Indian GST and overseas VAT in one return.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We support VAT registration, filing and advice for businesses selling abroad, alongside your India
          accounting and tax.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/global-vat-compliance-ai-saas-companies" className="text-blue-800 font-semibold hover:underline">Global VAT services</Link>
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
            { label: "European Commission: VAT", href: "https://taxation-customs.ec.europa.eu/taxation/vat_en" },
            { label: "UK Government: VAT", href: "https://www.gov.uk/topic/business-tax/vat" },
            { label: "Australian Taxation Office: GST", href: "https://www.ato.gov.au/" },
            { label: "GST portal (India)", href: "https://www.gst.gov.in" },
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
        title="Selling Digital Services Globally?"
        description="Tell us which countries you sell into — we'll map your VAT/GST registration obligations across jurisdictions."
      />
    </main>
  )
}
