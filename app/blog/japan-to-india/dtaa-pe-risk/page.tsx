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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/dtaa-pe-risk"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "treaty", label: "How the treaty helps" },
  { id: "docs", label: "Documents to claim treaty benefits" },
  { id: "pe", label: "Permanent establishment: when a Japanese company becomes taxable in India" },
  { id: "reduce", label: "How to reduce PE risk" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a DTAA?", a: "A double taxation avoidance agreement. It allocates taxing rights between two countries and can reduce Withholding Tax on cross-border payments." },
  { q: "What does the parent need to claim treaty rates?", a: "A Japanese certificate of residence, Form 41 (previously Form 10F) and, where asked, a declaration of no permanent establishment in India." },
  { q: "Is an Indian subsidiary a permanent establishment of the Japanese parent?", a: "An Indian subsidiary is not a permanent establishment of the Japanese parent by itself. The risk arises if the subsidiary acts as the parent's dependent agent, or if the parent's own staff operate from India." },
  { q: "Which section governs Withholding Tax on payments to a non-resident?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
  { q: "How is Indian tax relieved in Japan?", a: "Through the foreign tax credit and, for qualifying subsidiaries, a 95% dividend exemption. This should be confirmed with a Japanese tax adviser." },
  { q: "What is the India-Japan treaty rate on dividends, interest and royalties?", a: "10% on dividends, interest, and royalties and fees for technical services, subject to documents and the domestic rate." },
  { q: "Does the treaty apply automatically?", a: "No. The parent must prove residence and meet the conditions of each article." },
  { q: "Can an Employer of Record create PE risk?", a: "An Employer of Record does not remove PE risk. If staff in India conclude contracts or act as the parent's agent, a permanent establishment can arise." },
  { q: "Can a short visit create PE risk?", a: "A visit alone rarely does, but repeated visits, contract negotiation or a fixed place of business can." },
]

const relatedCards = [
  { title: "Repatriating Profits to Japan: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/japan-to-india/repatriating-profits" },
  { title: "Transfer Pricing in India: A Guide for Japanese Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a Japanese company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/japan-to-india/transfer-pricing" },
  { title: "Japanese Parent Obligations When You Own an Indian Subsidiary", desc: "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.", href: "/blog/japan-to-india/japan-parent-obligations" },
  { title: "Tax Notices and Disputes in India: What Japanese Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.", href: "/blog/japan-to-india/tax-notices-and-litigation" },
]

export default function DtaaPeRiskPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies"
        description="How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "India-Japan Tax Treaty and Permanent Establishment Risk" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: treaty and PE"
        title="The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Japan tax treaty (DTAA) can reduce Withholding Tax on dividends, interest, royalties and
          fees for technical services paid to your Japanese parent to 10%, if the parent holds a Japanese
          certificate of residence and files the required declaration (Form 41, previously Form 10F).
          Separately, a Japanese company can be taxed in India if it has a permanent establishment there, for
          example through staff who conclude contracts for it.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="dtaa-pe-risk" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Treaty", "Convention between India and Japan for the avoidance of double taxation"],
                ["Benefit claimed with", "Japanese certificate of residence, Form 41 (previously Form 10F), and a no-PE declaration where asked"],
                ["Withholding Tax on non-resident payments", "Section 393 of the Income-tax Act, 2025 (previously Section 195)"],
                ["Rate applied", "The lower of the domestic rate (generally 20%) and the 10% treaty rate, where conditions are met"],
                ["PE risk arises from", "Fixed place, dependent agents, construction or installation projects beyond the treaty period, and certain other presence"],
                ["Who bears the risk", "The Japanese parent, not the Indian subsidiary"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the treaty helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Without a treaty, India taxes certain payments to non-residents at domestic rates, generally 20%
          before surcharge and cess. The India-Japan treaty caps the rate at 10% for dividends, interest,
          royalties and fees for technical services. The rate that applies depends on the type of payment and
          the conditions in the treaty and the current law, so we confirm it before each payment.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian payer deducts Withholding Tax under Section 393 (previously Section 195) at the applicable
          rate and deposits it with the government. The Japanese parent then relieves double tax under Japanese
          rules. See{" "}
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" className="text-blue-800 font-semibold hover:underline">treaty withholding rates</Link>.
        </p>

        <h2 id="docs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents to claim treaty benefits</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Certificate of residence</strong>: issued by the Japanese tax office to show the company is a Japanese tax resident.</li>
          <li><strong>Form 41</strong> (previously Form 10F): a statement the non-resident files with the Indian payer or electronically, giving residency details.</li>
          <li><strong>Declaration of no permanent establishment in India</strong>, where the payer or the tax officer asks for it.</li>
          <li><strong>Beneficial ownership evidence</strong>: the recipient should be the real owner of the income and not a conduit.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Keep these ready before the first payment. Missing documents are the usual reason the higher domestic
          rate is applied. See{" "}
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" className="text-blue-800 font-semibold hover:underline">claiming treaty benefits</Link>.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment: when a Japanese company becomes taxable in India</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Type</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What triggers it</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fixed place PE", "An office, branch, factory or other fixed place of business in India through which the parent carries on business"],
                ["Dependent agent PE", "A person in India who has and habitually exercises authority to conclude contracts for the parent, keeps stock for regular delivery or habitually secures orders"],
                ["Construction or installation PE", "A building site or installation project that lasts longer than the period set in the treaty; check the current treaty text for the period"],
                ["Services", "The treaty links service presence to specified activities rather than a general service PE; confirm against the treaty text for your facts"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          A subsidiary is not by itself a permanent establishment of its parent. The risk arises when the
          subsidiary or its staff act in a way that makes them the parent&apos;s agent, or when the
          parent&apos;s own employees work from India.
        </p>

        <h2 id="reduce" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to reduce PE risk</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep the subsidiary&apos;s role clear in the intercompany agreement. Decisions to conclude customer contracts should sit with the parent&apos;s authorized officers.</li>
          <li>Track the days that Japanese employees spend in India and what they do there.</li>
          <li>Avoid giving Indian staff authority to negotiate and sign contracts for the parent.</li>
          <li>Review any arrangement with an Employer of Record. See <Link href="/blog/japan-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">EOR vs subsidiary</Link>.</li>
          <li>Document the real economic substance of the subsidiary.</li>
        </ul>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The treaty and Japan&apos;s foreign tax credit and dividend exemption work together. Your Japanese adviser should review how Indian Withholding Tax is treated.</li>
          <li>Request the certificate of residence early. Processing can take time and certificates have a stated validity.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Paying the parent before the certificate of residence and Form 41 are on file.</li>
          <li>Assuming the treaty rate applies automatically.</li>
          <li>Letting Japanese executives work from India for long periods without a PE review.</li>
          <li>Giving Indian managers signing authority for the parent&apos;s customer contracts.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We confirm the right Withholding Tax rate before each payment, collect treaty documents and review
          permanent establishment exposure.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
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
          seeAllHref="/blog/japan-to-india/faq"
          seeAllLabel="See all 216 questions"
          seeAllDescription="Plain-English answers from pre-incorporation to closure, repatriation, ESOPs, capital increases, sale of business and mergers."
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
        title="Concerned About PE Risk from Japanese Staff?"
        description="Tell us how your team in Japan works with India, and we'll assess the permanent establishment exposure under the India-Japan tax treaty."
      />
    </main>
  )
}
