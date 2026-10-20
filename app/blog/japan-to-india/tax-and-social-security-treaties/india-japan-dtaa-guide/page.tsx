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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "what", label: "What a tax treaty does" },
  { id: "scope", label: "Who and what the treaty covers" },
  { id: "japan", label: "How Japan relieves double tax" },
  { id: "residence", label: "Treaty residence for companies and individuals" },
  { id: "steps", label: "How to use the treaty in practice" },
  { id: "disputes", label: "When the two countries disagree" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a DTAA?", a: "A double taxation avoidance agreement. It decides which country can tax which income and reduces tax at source on certain cross-border payments." },
  { q: "Does the India-Japan treaty replace Indian tax law?", a: "No. It works alongside it. The Indian Act applies only to the extent it is more beneficial than the treaty (Section 159 of the Income-tax Act, 2025)." },
  { q: "Is the treaty automatic?", a: "No. You must prove residence, usually with a Japanese certificate of residence and Form 41 (previously Form 10F), and meet the conditions for each article." },
  { q: "Does the treaty cover social security contributions?", a: "No. Social security is handled by the separate Japan-India Social Security Agreement." },
  { q: "How does Japan relieve double taxation?", a: "Mainly through the foreign tax credit and, for qualifying foreign subsidiaries, a 95% exemption for dividends. Confirm the position with a Japanese tax adviser." },
  { q: "What if a tax authority does not follow the treaty?", a: "You can request the mutual agreement procedure so that the two tax authorities resolve the case." },
  { q: "Are capital gains on the Indian subsidiary's shares taxed in India?", a: "Gains on shares of an Indian company are generally taxable in India under the treaty, subject to its conditions and domestic law." },
  { q: "Do I need a Japanese tax adviser?", a: "Yes, for the Japanese side. AU Corporate handles the Indian side and works with your adviser." },
]

const relatedCards = [
  { title: "India-Japan DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Technical Services", desc: "Treaty rates for payments from India to Japan: 10% on dividends, interest, royalties and fees for technical services, against 20% domestic rates.", href: "/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "How to Claim India-Japan Treaty Benefits: Certificate of Residence, Form 41 and Beneficial Ownership", desc: "Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration.", href: "/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies", desc: "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.", href: "/blog/japan-to-india/dtaa-pe-risk" },
  { title: "Tax Notices and Disputes in India: What Japanese Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.", href: "/blog/japan-to-india/tax-notices-and-litigation" },
]

export default function IndiaJapanDtaaGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Japan Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax"
        description="How the India-Japan tax treaty works: who qualifies, taxes covered, treaty versus domestic law, residency, relief from double tax and disputes."
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
          { label: "India-Japan Tax Treaty (DTAA) Explained" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: DTAA"
        title="The India-Japan Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Japan tax treaty (DTAA) divides taxing rights between the two countries so income is not
          taxed twice. It applies to residents of either country, covers income taxes, and lets you use the
          treaty or domestic law, whichever is more beneficial. Relief comes through lower Withholding Tax at
          source (10% on dividends, interest, royalties and fees for technical services) and through a foreign
          tax credit or exemption in Japan.
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
                ["Instrument", "Convention between India and Japan for the avoidance of double taxation and the prevention of fiscal evasion; in force since 1989 and amended since"],
                ["Who qualifies", "A person who is a resident of India or Japan under the treaty, including companies"],
                ["Taxes covered", "Income taxes in both countries; not social security contributions"],
                ["Indian law", "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A): treaty applies to the extent more beneficial"],
                ["Proof of residence", "A Japanese certificate of residence, plus Form 41 (previously Form 10F) where required"],
                ["Dispute route", "Mutual agreement procedure between the two tax authorities"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What a tax treaty does</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Without a treaty, India taxes income arising in India, and Japan taxes Japanese companies on their
          worldwide income. The same profit can be taxed twice. The treaty allocates which country may tax which
          kind of income, caps the tax a source country can charge on certain payments, and leaves the country
          of residence to relieve what remains.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty works alongside domestic law. Under Section 159 of the Income-tax Act, 2025 (previously
          Sections 90 and 90A of the 1961 Act), the Indian Act applies only to the extent it is more beneficial
          to the taxpayer than the treaty. A non-resident must hold a residency certificate and provide the
          documents the rules prescribe to claim relief.
        </p>

        <h2 id="scope" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who and what the treaty covers</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Persons</th>
                  <td className="border border-gray-300 p-3">Residents of India or Japan, as defined in the residence article</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Taxes</th>
                  <td className="border border-gray-300 p-3">Income tax in India; national income taxes and local taxes as the treaty lists for Japan</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Business profits</th>
                  <td className="border border-gray-300 p-3">Taxable in the source country only if there is a permanent establishment there. See <Link href="/blog/japan-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">PE risk</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends, interest, royalties, fees for technical services</th>
                  <td className="border border-gray-300 p-3">Taxable in both countries, with the source country&apos;s rate capped at 10%. See <Link href="/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" className="text-blue-800 font-semibold hover:underline">withholding rates</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Capital gains</th>
                  <td className="border border-gray-300 p-3">Gains on shares of an Indian company are taxable in India (Article 13)</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employment income</th>
                  <td className="border border-gray-300 p-3">Rules for salaried individuals. See <Link href="/blog/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan" className="text-blue-800 font-semibold hover:underline">tax residency for expats</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Relief</th>
                  <td className="border border-gray-300 p-3">Foreign tax credit or exemption in Japan under Japanese law</td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="japan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Japan relieves double tax</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Dividend exemption.</strong> Japan generally exempts 95% of dividends from a qualifying foreign subsidiary, where the Japanese company holds at least 25% and has held it for at least six months. Indian Withholding Tax on the exempt portion generally cannot be credited.</li>
          <li><strong>Foreign tax credit.</strong> Foreign tax paid on other income, such as service fees and royalties, can generally be credited against Japanese tax, subject to limits.</li>
          <li><strong>No indirect credit.</strong> Japan generally does not give a deemed-paid credit for the subsidiary&apos;s own Indian income tax.</li>
        </ul>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          These are general points on Japanese tax. Your Japanese tax adviser should confirm how they apply to
          your group in the relevant year.
        </div>

        <h2 id="residence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Treaty residence for companies and individuals</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A <strong>company</strong> is usually a resident where it is incorporated or managed, as the treaty defines. A Japanese parent incorporated in Japan is a Japanese resident.</li>
          <li>An <strong>individual</strong> who is a resident of both countries under domestic law is resolved by the treaty&apos;s tie-breaker tests: permanent home, centre of vital interests, habitual abode, nationality, and then agreement between the tax authorities.</li>
          <li>Treaty residence is proved with a certificate from the home tax authority. For Japan this is a certificate of residence issued by the tax office.</li>
        </ul>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to use the treaty in practice</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm who the recipient is and that it is the beneficial owner of the income.</li>
          <li>Identify the type of payment: dividend, interest, royalty, fees for technical services or something else.</li>
          <li>Obtain the Japanese certificate of residence and Form 41 (previously Form 10F), plus any no-PE declaration the payer asks for.</li>
          <li>The Indian payer deducts Withholding Tax under Section 393 (previously Section 195) at the treaty rate where conditions are met.</li>
          <li>The Japanese recipient claims relief in its Japanese return under Japanese rules.</li>
        </ol>

        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When the two countries disagree</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If you are taxed in a way that does not follow the treaty, you can ask your country&apos;s tax
          authority to resolve it with the other through the mutual agreement procedure. Transfer pricing
          adjustments can also be dealt with this way. See{" "}
          <Link href="/blog/japan-to-india/tax-notices-and-litigation" className="text-blue-800 font-semibold hover:underline">tax notices and litigation</Link>.
        </p>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treaty relief reduces Indian tax at source; it does not remove your Japanese filing. Keep proof of Indian tax paid for your Japanese return.</li>
          <li>Treaty articles carry conditions, so confirm each claim against the treaty text and the current Indian law before relying on it.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming the treaty applies automatically without documents.</li>
          <li>Ignoring the beneficial ownership condition when payments pass through another entity.</li>
          <li>Assuming Indian tax on a dividend can be credited in Japan when the dividend is largely exempt.</li>
          <li>Using a rate from a table without checking the payment category.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We confirm the treaty position, collect documents and apply the correct Withholding Tax rate on every
          remittance to Japan.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department&apos;s treaty page</a>{" "}
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
            { label: "Income Tax Department: tax treaties", href: "https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" },
            { label: "National Tax Agency of Japan", href: "https://www.nta.go.jp/english/" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
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
        title="Applying the India-Japan Treaty?"
        description="Tell us the payments and people moving between India and Japan, and we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
