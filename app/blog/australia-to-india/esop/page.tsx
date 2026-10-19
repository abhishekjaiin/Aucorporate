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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/esop"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "routes", label: "Two ways to give equity to Indian employees" },
  { id: "flow", label: "How a parent-plan ESOP works for an Indian employee" },
  { id: "withholding", label: "Withholding Tax on exercise" },
  { id: "recharge", label: "Cost recharge and transfer pricing" },
  { id: "own", label: "The Indian company's own ESOP" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can Indian employees receive Australian parent shares?", a: "Indian employees can receive Australian parent shares under the parent's plan, subject to FEMA overseas investment rules and reporting. The tax and withholding treatment needs to be set up in advance." },
  { q: "When are ESOPs taxed in India?", a: "Twice. The benefit is taxed as salary at exercise or vesting, and capital gains tax applies when the shares are sold." },
  { q: "Does the subsidiary pay for the parent's ESOP cost?", a: "An Indian subsidiary often pays for the parent's ESOP cost through a cost recharge under an agreement. Deductibility and Withholding Tax on the recharge are frequently disputed, so it should be documented from the start." },
  { q: "Can the Indian company issue its own ESOPs?", a: "Yes, under the Companies Act with a special resolution and a scheme. A valuation is needed and FEMA conditions apply where non-residents are involved." },
  { q: "How do ESOPs for Indian employees of an Australian parent work?", a: "The Australian parent grants options or restricted stock units to employees of the Indian subsidiary under its plan. FEMA overseas investment rules and reporting apply to the employees, and tax arises on exercise or vesting as salary, with Withholding Tax, and again as capital gains on sale." },
  { q: "Does the subsidiary reimburse the parent for ESOP costs?", a: "An Indian subsidiary often reimburses the parent for ESOP costs through a cost recharge under an agreement. Deductibility, transfer pricing and Withholding Tax on these recharges are frequently disputed, so the arrangement should be documented carefully from the start." },
  { q: "Is an LLP cheaper than a private limited company?", a: "Compliance for an LLP can be lighter, but eligibility for foreign investment, funding options and Australian tax treatment usually matter more for an Australian parent than compliance cost." },
  { q: "How is an ESOP taxed for employees in India?", a: "An Indian employee is taxed on ESOP shares twice: as salary on the fair market value at exercise less the exercise price (for RSUs, at vesting), with tax withheld by the employer, and as capital gains on sale, where the long-term rate is 12.5% for shares held more than 24 months. Employees must disclose foreign shares in Schedule FA and can claim foreign tax credit using Form 67." },
  { q: "What are the Companies Act conditions for ESOPs in India?", a: "An Indian company issues ESOPs under Section 62(1)(b) of the Companies Act, 2013 and Rule 12 of the Companies (Share Capital and Debentures) Rules, 2014, which require a special resolution of shareholders (filed in Form MGT-14 within 30 days) and a minimum of one year between grant and vesting." },
]

const relatedCards = [
  { title: "Share Valuation for Foreign Investment: Pricing Rules and Certificates", desc: "Why shares issued to an Australian parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.", href: "/blog/australia-to-india/share-valuation" },
  { title: "Hiring and Payroll in India for Australian Companies: Contracts, PF, ESI and Gratuity", desc: "How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/australia-to-india/hiring-and-payroll" },
  { title: "Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/australia-to-india/transfer-pricing" },
  { title: "Repatriating Profits to Australia: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/australia-to-india/repatriating-profits" },
]

export default function EsopPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="ESOPs for Indian Employees of an Australian Parent: FEMA, Tax and Cost Recharge"
        description="How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for an Australian parent."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "ESOPs for Indian Employees of an Australian Parent Company" },
        ]}
      />

      <GuideHero
        eyebrow="Scale: equity for employees"
        title="ESOPs for Indian Employees of an Australian Parent: FEMA, Tax and Cost Recharge"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian parent can grant options or restricted stock units to employees of its Indian subsidiary
          under its own plan. FEMA overseas investment rules and reporting apply, tax arises as salary on
          exercise or vesting with Withholding Tax, and again as capital gains on sale. Any recharge of the cost
          to the Indian company needs an agreement and transfer pricing support. The Indian company can also
          issue its own ESOPs under the Companies Act.
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
                ["Route 1", "Employees receive options or RSUs of the Australian parent under its plan"],
                ["Route 2", "The Indian company issues its own ESOPs under the Companies Act"],
                ["Employee tax, first event", "For an ESOP, fair market value on the exercise date less the exercise price is taxed as salary at exercise (for RSUs, at vesting), and the Indian employer withholds tax"],
                ["Employee tax, second event", "On sale of the shares, capital gains tax applies; the long-term rate is 12.5% for shares held more than 24 months"],
                ["Foreign assets", "Employees must disclose foreign shares in Schedule FA of their Indian return and can claim foreign tax credit through Form 67"],
                ["Cost recharge", "The parent often recharges the cost to the subsidiary; it needs an agreement and transfer pricing support"],
                ["Companies Act conditions", "A special resolution of shareholders (filed in Form MGT-14 within 30 days) and a minimum of one year between grant and vesting"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two ways to give equity to Indian employees</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Parent&apos;s plan</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian company&apos;s own ESOP</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Shares issued", "Australian parent shares", "Indian subsidiary shares"],
                ["Main law", "Overseas Investment Rules, 2022 (parent shares are treated as overseas portfolio investment) and the parent's plan", "Section 62(1)(b) of the Companies Act, 2013 with Rule 12, and FEMA where non-residents are involved"],
                ["Valuation", "Fair market value of the parent's shares on the relevant date", "Valuation of the Indian company's shares"],
                ["Typical use", "Venture-backed and listed Australian groups", "Indian-owned companies or where local equity is wanted"],
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

        <h2 id="flow" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How a parent-plan ESOP works for an Indian employee</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The parent grants options or RSUs and adds an India addendum to the plan.</li>
          <li>The award vests over the agreed period.</li>
          <li>On exercise or vesting, the benefit is valued and taxed as salary, and the employer withholds the tax.</li>
          <li>The employee holds or sells the shares, with capital gains tax on sale.</li>
          <li>The employee reports the foreign shares as foreign assets in the Indian tax return, and FEMA reporting applies.</li>
        </ol>

        <h2 id="withholding" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Withholding Tax on exercise</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Because tax arises before the employee has cash from a sale, the employer must collect the tax at
          exercise or vesting. Plans usually solve this with a sell-to-cover arrangement, a payment by the
          employee or a payroll deduction. Agree the mechanism in advance.
        </p>

        <h2 id="recharge" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost recharge and transfer pricing</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Where the Indian company bears the cost of the parent&apos;s equity awards, the recharge should be
          covered by a written agreement. Whether the cost is deductible, whether Withholding Tax applies and
          whether it is at arm&apos;s length are frequently disputed, so document the arrangement and benchmark
          it. See{" "}
          <Link href="/blog/australia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="own" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian company&apos;s own ESOP</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The company adopts a scheme by special resolution that sets out eligibility, vesting and exercise.</li>
          <li>A valuation supports the exercise price and the tax computation.</li>
          <li>FEMA conditions apply if employees or shareholders are non-residents.</li>
          <li>Reporting to the Registrar and the RBI follows the issue of shares.</li>
        </ul>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Your Australian counsel should confirm the securities-law position for offering equity to employees in India (the Corporations Act disclosure rules mainly cover offers made in Australia), any ASX requirements, and any plan amendments. Any Australian-resident participants have their own employee share scheme reporting.</li>
          <li>Add an India addendum to the plan that covers tax withholding, FEMA reporting and local law.</li>
          <li>Coordinate the share valuation with the market valuation you use for Australian employee share scheme purposes, so one defensible number supports both. See <Link href="/blog/australia-to-india/share-valuation" className="text-blue-800 font-semibold hover:underline">share valuation</Link>.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Not Withholding Tax at exercise or vesting.</li>
          <li>Using the Australian plan unchanged, with no India addendum.</li>
          <li>Overlooking FEMA reporting and employees&apos; foreign asset disclosures.</li>
          <li>Recharging costs to the subsidiary without an agreement.</li>
          <li>Granting equity without a valuation.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We cover the valuation, FEMA, tax and legal work for ESOPs in India.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/transaction-advisory" className="text-blue-800 font-semibold hover:underline">Transaction advisory and valuation</Link>{" "}
          ·{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory</Link>
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
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
        title="Rolling Out ESOPs in India?"
        description="Tell us your parent company's ESOP plan and headcount — we'll map the FEMA reporting and tax treatment for your Indian employees."
      />
    </main>
  )
}
