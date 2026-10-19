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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/dtaa-pe-risk"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "treaty", label: "How the treaty helps" },
  { id: "docs", label: "Documents to claim treaty benefits" },
  { id: "pe", label: "Permanent establishment: when an Australian company becomes taxable in India" },
  { id: "reduce", label: "How to reduce PE risk" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a DTAA?", a: "A double taxation avoidance agreement. It allocates taxing rights between two countries and can reduce Withholding Tax on cross-border payments." },
  { q: "What does the parent need to claim treaty rates?", a: "An Australian certificate of residency from the ATO (the Tax Residency Certificate), Form 41 (previously Form 10F) and, where asked, a declaration of no permanent establishment in India." },
  { q: "Is an Indian subsidiary a permanent establishment of the Australian parent?", a: "An Indian subsidiary is not a permanent establishment of the Australian parent by itself. The risk arises if the subsidiary acts as the parent's dependent agent, or if the parent's own staff operate from India." },
  { q: "Which section governs Withholding Tax on payments to a non-resident?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
  { q: "Can the Indian tax be credited in Australia?", a: "It depends on the income. Dividends from a wholly owned Indian subsidiary are generally exempt in Australia, so there is no credit for the Indian tax on them. For interest, royalties and fees that are assessable in Australia, the Indian tax can usually be claimed as a foreign income tax offset under Division 770 of the Income Tax Assessment Act 1997. This should be confirmed with an Australian tax adviser." },
  { q: "What is the India-Australia tax treaty (DTAA)?", a: "The India-Australia tax treaty (DTAA) is an agreement that avoids double taxation between the two countries. It caps source-country withholding on dividends, interest and royalties (Articles 10 to 12) and defines when a permanent establishment exists (Article 5). Claiming its benefits needs a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
  { q: "What is a Tax Residency Certificate and Form 41?", a: "A Tax Residency Certificate shows that the Australian parent is an Australian tax resident, and the ATO issues it as a certificate of residency. Form 41 (previously Form 10F) is the electronic statement of details that the foreign payee gives to claim treaty benefits. Both should be ready before the first payment." },
  { q: "Does the treaty reduce Withholding Tax?", a: "The India-Australia tax treaty can reduce Withholding Tax if the parent is an Australian tax resident and satisfies the conditions, which requires a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
  { q: "What is permanent establishment risk?", a: "A permanent establishment (PE) is a taxable presence of a foreign company in India. It can arise from a fixed place of business, dependent agents who conclude contracts, or staff providing services in India for long enough. A PE exposes the Australian parent's profits to Indian tax." },
  { q: "What Withholding Tax rate applies to payments to the Australian parent?", a: "Withholding Tax on payments from an Indian subsidiary to its Australian parent is 15% on dividends under the India-Australia treaty, 15% on interest, and 15% on royalties and fees for services that make technical knowledge available (10% for equipment royalties). The domestic rate for non-residents is 20% plus surcharge and cess, and the lower rate applies where the treaty conditions are met (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961)." },
  { q: "What are Withholding Tax returns and when are they due?", a: "Withholding Tax deducted on salaries and payments is deposited by the 7th of the following month. Quarterly statements are filed in Form 138 for salaries, Form 140 for resident payments and Form 144 for non-resident payments (previously Forms 24Q, 26Q and 27Q)." },
  { q: "How many days of work in India create a permanent establishment under the India-Australia treaty?", a: "Under Article 5 of the India-Australia treaty, as amended in 2013, services furnished in India through employees or other personnel create a permanent establishment if the activities continue for the same or a connected project for more than 183 days in any 12-month period. A building site or a construction, installation or assembly project creates one after more than 6 months. Confirm the current text for your case." },
  { q: "What are the India-Australia treaty withholding rates?", a: "The India-Australia treaty caps Indian withholding at 15% on dividends and on interest, and at 15% on royalties and fees for services that make technical knowledge available (10% for equipment royalties). The treaty rate applies only with an Australian certificate of residency and Form 41 (previously Form 10F)." },
]

const relatedCards = [
  { title: "The India-Australia DTAA: Article-by-Article Guide for Australian Companies", desc: "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence state: tax rates table, permanent establishment, business profits, dividends, interest, royalties, capital gains, employees, relief, MAP and how to claim treaty benefits.", href: "/blog/australia-to-india/india-australia-dtaa" },
  { title: "Repatriating Profits to Australia: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/australia-to-india/repatriating-profits" },
  { title: "Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/australia-to-india/transfer-pricing" },
  { title: "Treaty and Social Security for Australian Employees in India: Article 15 and the Social Security Agreement", desc: "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day rule, Indian tax residency, certificates of coverage, provident fund and superannuation.", href: "/blog/australia-to-india/foreign-employee-treaty-ssa" },
]

export default function DtaaPeRiskPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies"
        description="How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: treaty and PE"
        title="The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Australia tax treaty (DTAA) can reduce Withholding Tax on dividends, interest and royalties
          paid to your Australian parent from the domestic 20% (plus surcharge and cess) to 15%, or 10% for
          equipment royalties, if the parent holds an Australian tax residency certificate from the ATO and
          files the required declaration (Form 41, previously Form 10F). Separately, an Australian company can
          be taxed in India if it has a permanent establishment there, for example through its own staff
          providing services for more than 183 days in a 12-month period.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Treaty", "Agreement between India and Australia for the avoidance of double taxation and the prevention of fiscal evasion (signed 1991, amended by the 2011 Protocol notified in India in September 2013)"],
                ["Benefit claimed with", "Certificate of residency from the ATO (the Tax Residency Certificate), Form 41 (previously Form 10F), and a no-PE declaration where asked"],
                ["Withholding Tax on non-resident payments", "Section 393 of the Income-tax Act, 2025 (previously Section 195)"],
                ["Rate applied", "The lower of the domestic rate and the treaty rate, where the conditions are met"],
                ["Treaty rates", "Dividends 15%; interest 15%; royalties and fees for services that make technical knowledge available 15% (10% for equipment royalties)"],
                ["PE risk arises from", "Fixed place, dependent agents, service presence (over 183 days in any 12 months), construction projects (over 6 months) and substantial equipment"],
                ["Who bears the risk", "The Australian parent, not the Indian subsidiary"],
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
          Without a treaty, India taxes dividends, interest, royalties and technical fees paid to non-residents
          at domestic rates, which are 20% plus surcharge and cess for most of them. The treaty caps those rates
          for dividends (Article 10), interest (Article 11) and royalties and technical fees (Article 12). The
          rate that applies depends on the type of payment and the conditions in the treaty and the current law,
          so we confirm it before each payment.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian payer deducts Withholding Tax under Section 393 (previously Section 195) at the applicable
          rate and deposits it with the government. For the Australian parent, the Indian tax is treated
          differently by type of income: see the Australian parent section below. For an article-by-article
          guide, read{" "}
          <Link href="/blog/australia-to-india/india-australia-dtaa" className="text-blue-800 font-semibold hover:underline">the India-Australia DTAA guide</Link>.
        </p>

        <h2 id="docs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents to claim treaty benefits</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Tax Residency Certificate</strong>: a certificate of residency issued by the ATO (the form for companies is NAT 75442) to show the Australian company is an Australian tax resident for the relevant period.</li>
          <li><strong>Form 41</strong> (previously Form 10F): a statement the non-resident files with the Indian payer or electronically, giving residency details.</li>
          <li><strong>Declaration of no permanent establishment in India</strong>, where the payer or the tax officer asks for it.</li>
          <li><strong>Beneficial ownership evidence</strong>: the recipient should be the real owner of the income and not a conduit. The principal purpose test from the Multilateral Instrument, which both countries have signed, can deny treaty benefits where obtaining them was one of the main purposes of an arrangement.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Keep these ready before the first payment. Missing documents are the usual reason the higher domestic
          rate is applied.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment: when an Australian company becomes taxable in India</h2>
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
                ["Dependent agent PE", "A person in India who habitually exercises authority to conclude contracts on behalf of the parent (Article 5)"],
                ["Service PE", "Services furnished in India through the parent's employees or other personnel for more than 183 days in any 12-month period for the same or a connected project (Article 5, as amended by the 2011 Protocol)"],
                ["Construction PE", "A building site or a construction, installation or assembly project continuing for more than 6 months (Article 5)"],
                ["Substantial equipment PE", "Operating substantial equipment in India for more than 183 days in any 12-month period (Article 5)"],
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
          parent&apos;s own employees work from India. Both countries have signed the Multilateral Instrument,
          which can tighten the agent and fragmentation rules, so we test the current text of Article 5 for each
          case.
        </p>

        <h2 id="reduce" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to reduce PE risk</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep the subsidiary&apos;s role clear in the intercompany agreement. Decisions to conclude customer contracts should sit with the parent&apos;s authorised officers.</li>
          <li>Track the days that Australian employees spend in India and what they do there, against the 183-day service test. See <Link href="/blog/australia-to-india/foreign-employee-treaty-ssa" className="text-blue-800 font-semibold hover:underline">treaty and social security for foreign employees</Link>.</li>
          <li>Avoid giving Indian staff authority to negotiate and sign contracts for the parent.</li>
          <li>Review any arrangement with an Employer of Record. See <Link href="/blog/australia-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">EOR vs subsidiary</Link>.</li>
          <li>Document the real economic substance of the subsidiary.</li>
        </ul>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Dividends:</strong> dividends from a wholly owned Indian subsidiary are generally non-assessable non-exempt income for an Australian company with a direct voting interest of at least 10% (section 768-5, Income Tax Assessment Act 1997), so the 15% Indian tax is usually a final cost and not creditable.</li>
          <li><strong>Interest, royalties and fees:</strong> these are assessable in Australia, and the Indian tax withheld can usually be claimed as a foreign income tax offset (Division 770), subject to the offset cap. Your Australian tax adviser should confirm each stream.</li>
          <li>Request the ATO certificate of residency early (form NAT 75442). It confirms residency for a specific period, so ask for the period you need and renew it as payments continue.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Paying the parent before the Tax Residency Certificate and Form 41 are on file.</li>
          <li>Assuming the treaty rate applies automatically.</li>
          <li>Letting Australian executives work from India for long periods without a PE review.</li>
          <li>Giving Indian managers signing authority for the parent&apos;s customer contracts.</li>
          <li>Claiming a foreign income tax offset on dividends that are not assessable in Australia.</li>
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
            { label: "Income Tax Department (India)", href: "https://www.incometax.gov.in" },
            { label: "Australian Taxation Office: certificate of residency", href: "https://www.ato.gov.au/certificateofresidency" },
            { label: "India-Australia tax treaty (Income Tax Department)", href: "https://www.incometax.gov.in/iec/foportal/" },
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
        title="Worried About Permanent Establishment Risk?"
        description="Tell us how your Australian team engages with India — we'll assess your PE exposure under the India-Australia DTAA."
      />
    </main>
  )
}
