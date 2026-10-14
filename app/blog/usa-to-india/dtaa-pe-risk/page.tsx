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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/dtaa-pe-risk"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "treaty", label: "How the treaty helps" },
  { id: "docs", label: "Documents to claim treaty benefits" },
  { id: "pe", label: "Permanent establishment: when a US company becomes taxable in India" },
  { id: "reduce", label: "How to reduce PE risk" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a DTAA?", a: "A double taxation avoidance agreement. It allocates taxing rights between two countries and can reduce Withholding Tax on cross-border payments." },
  { q: "What does the parent need to claim treaty rates?", a: "A US Tax Residency Certificate, Form 41 (previously Form 10F) and, where asked, a declaration of no permanent establishment in India." },
  { q: "Is an Indian subsidiary a permanent establishment of the US parent?", a: "Not by itself. The risk arises if the subsidiary acts as the parent's dependent agent, or if the parent's own staff operate from India." },
  { q: "Which section governs Withholding Tax on payments to a non-resident?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
  { q: "Can the Indian tax be credited in the US?", a: "Usually yes, as a foreign tax credit under US rules. Confirm with your US tax adviser." },
]

const relatedCards = [
  { title: "Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/usa-to-india/repatriating-profits" },
  { title: "Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/usa-to-india/transfer-pricing" },
  { title: "US Parent Obligations When You Own an Indian Subsidiary", desc: "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.", href: "/blog/usa-to-india/us-parent-obligations" },
  { title: "Tax Notices and Disputes in India: What US Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and advance pricing agreements.", href: "/blog/usa-to-india/tax-notices-and-litigation" },
]

export default function DtaaPeRiskPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-US Tax Treaty and Permanent Establishment Risk for US Companies"
        description="How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "India-US Tax Treaty and Permanent Establishment Risk" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: treaty and PE"
        title="The India-US Tax Treaty and Permanent Establishment Risk for US Companies"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-US tax treaty (DTAA) can reduce Withholding Tax on payments such as dividends, interest and
          royalties to your US parent, if the parent holds a US Tax Residency Certificate and files the required
          declaration (Form 41, previously Form 10F). Separately, a US company can be taxed in India if it has a
          permanent establishment there, for example through staff who conclude contracts for it.
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
                ["Treaty", "Convention between India and the United States for the avoidance of double taxation"],
                ["Benefit claimed with", "US Tax Residency Certificate (Form 6166 from the IRS), Form 41 (previously Form 10F), and a no-PE declaration where asked"],
                ["Withholding Tax on non-resident payments", "Section 393 of the Income-tax Act, 2025 (previously Section 195)"],
                ["Rate applied", "The lower of the domestic rate and the treaty rate, where the conditions are met"],
                ["PE risk arises from", "Fixed place, dependent agents, service presence and certain project work"],
                ["Who bears the risk", "The US parent, not the Indian subsidiary"],
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
          Without a treaty, India taxes certain payments to non-residents at domestic rates. The treaty may cap
          those rates for payments such as dividends, interest and royalties or fees for technical services. The
          rate that applies depends on the type of payment and the conditions in the treaty and the current law, so
          we confirm it before each payment.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian payer deducts Withholding Tax under Section 393 (previously Section 195) at the applicable
          rate and deposits it with the government. The US parent can then claim a foreign tax credit in the US,
          subject to US rules.
        </p>

        <h2 id="docs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents to claim treaty benefits</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Tax Residency Certificate</strong>: issued by the IRS (Form 6166) to show the US company is a US tax resident.</li>
          <li><strong>Form 41</strong> (previously Form 10F): a statement the non-resident files with the Indian payer or electronically, giving residency details.</li>
          <li><strong>Declaration of no permanent establishment in India</strong>, where the payer or the tax officer asks for it.</li>
          <li><strong>Beneficial ownership evidence</strong>: the recipient should be the real owner of the income and not a conduit.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-10">
          Keep these ready before the first payment. Missing documents are the usual reason the higher domestic
          rate is applied.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment: when a US company becomes taxable in India</h2>
        <div className="overflow-x-auto mb-4">
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
                ["Dependent agent PE", "A person in India who habitually concludes contracts or plays the main role in concluding them for the parent"],
                ["Service PE", "Services performed in India by the parent's own personnel beyond the periods stated in the treaty"],
                ["Project PE", "Installation or construction activity lasting longer than the treaty allows"],
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
          subsidiary or its staff act in a way that makes them the parent&apos;s agent, or when the parent&apos;s
          own employees work from India.
        </p>

        <h2 id="reduce" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to reduce PE risk</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep the subsidiary&apos;s role clear in the intercompany agreement. Decisions to conclude customer contracts should sit with the parent&apos;s authorized officers.</li>
          <li>Track the days that US employees spend in India and what they do there.</li>
          <li>Avoid giving Indian staff authority to negotiate and sign contracts for the parent.</li>
          <li>Review any arrangement with an Employer of Record. See{" "}
            <Link href="/blog/usa-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">EOR vs subsidiary</Link>.
          </li>
          <li>Document the real economic substance of the subsidiary.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The treaty and a foreign tax credit work together: Withholding Tax paid in India is usually creditable against US tax, subject to US rules. Your US adviser should review this.</li>
          <li>Request the IRS Form 6166 early. Processing can take weeks and it is usually issued for a calendar year.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Paying the parent before the Tax Residency Certificate and Form 41 are on file.</li>
          <li>Assuming the treaty rate applies automatically.</li>
          <li>Letting US executives work from India for long periods without a PE review.</li>
          <li>Giving Indian managers signing authority for the parent&apos;s customer contracts.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We confirm the right Withholding Tax rate before each payment, collect treaty documents and review
          permanent establishment exposure.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
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
            { label: "Internal Revenue Service", href: "https://www.irs.gov" },
            { label: "India-US tax treaty (Income Tax Department)", href: "https://incometaxindia.gov.in" },
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
