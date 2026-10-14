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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/esop"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "routes", label: "Two ways to give equity to Indian employees" },
  { id: "flow", label: "How a parent-plan ESOP works for an Indian employee" },
  { id: "withholding", label: "Withholding Tax on exercise" },
  { id: "recharge", label: "Cost recharge and transfer pricing" },
  { id: "own", label: "The Indian company's own ESOP" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can Indian employees receive US parent shares?", a: "Yes, under the parent's plan, subject to FEMA overseas investment rules and reporting. The tax and withholding treatment needs to be set up in advance." },
  { q: "When are ESOPs taxed in India?", a: "Twice. The benefit is taxed as salary at exercise or vesting, and capital gains tax applies when the shares are sold." },
  { q: "Does the subsidiary pay for the parent's ESOP cost?", a: "Often, through a cost recharge under an agreement. Deductibility and Withholding Tax on the recharge are frequently disputed, so document it from the start." },
  { q: "Can the Indian company issue its own ESOPs?", a: "Yes, under the Companies Act with a special resolution and a scheme. A valuation is needed and FEMA conditions apply where non-residents are involved." },
]

const relatedCards = [
  { title: "Share Valuation for Foreign Investment: Pricing Rules and Certificates", desc: "Why shares issued to a US parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.", href: "/blog/usa-to-india/share-valuation" },
  { title: "Hiring and Payroll in India for US Companies: Contracts, PF, ESI and Gratuity", desc: "How US companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/usa-to-india/hiring-and-payroll" },
  { title: "Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/usa-to-india/transfer-pricing" },
  { title: "Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/usa-to-india/repatriating-profits" },
]

export default function EsopPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="ESOPs for Indian Employees of a US Parent: FEMA, Tax and Cost Recharge"
        description="How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a US parent."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "ESOPs for Indian Employees of a US Parent Company" },
        ]}
      />

      <GuideHero
        eyebrow="Scale: equity for employees"
        title="ESOPs for Indian Employees of a US Parent: FEMA, Tax and Cost Recharge"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US parent can grant options or restricted stock units to employees of its Indian subsidiary under its
          own plan. FEMA overseas investment rules and reporting apply, tax arises as salary on exercise or vesting
          with Withholding Tax, and again as capital gains on sale. Any recharge of the cost to the Indian company
          needs an agreement and transfer pricing support. The Indian company can also issue its own ESOPs under
          the Companies Act.
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
                ["Route 1", "Employees receive options or RSUs of the US parent under its plan"],
                ["Route 2", "The Indian company issues its own ESOPs under the Companies Act"],
                ["Employee tax, first event", "On exercise or vesting, the benefit is taxed as salary and the employer withholds tax"],
                ["Employee tax, second event", "On sale of the shares, capital gains tax applies"],
                ["Foreign assets", "Employees must disclose foreign assets, including foreign shares, in their Indian return"],
                ["Cost recharge", "The parent often recharges the cost to the subsidiary; it needs an agreement and transfer pricing support"],
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
        <div className="overflow-x-auto mb-10">
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
                ["Shares issued", "US parent shares", "Indian subsidiary shares"],
                ["Main law", "FEMA overseas investment rules and the parent's plan", "Companies Act and FEMA, where non-residents are involved"],
                ["Valuation", "Fair market value of the parent's shares on the relevant date", "Valuation of the Indian company's shares"],
                ["Typical use", "Venture-backed and listed US groups", "Indian-owned companies or where local equity is wanted"],
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
          Because tax arises before the employee has cash from a sale, the employer must collect the tax at exercise
          or vesting. Plans usually solve this with a sell-to-cover arrangement, a payment by the employee or a
          payroll deduction. Agree the mechanism in advance.
        </p>

        <h2 id="recharge" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost recharge and transfer pricing</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Where the Indian company bears the cost of the parent&apos;s equity awards, the recharge should be covered
          by a written agreement. Whether the cost is deductible, whether Withholding Tax applies and whether it is
          at arm&apos;s length are frequently disputed, so document the arrangement and benchmark it. See{" "}
          <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="own" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian company&apos;s own ESOP</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>The company adopts a scheme by special resolution that sets out eligibility, vesting and exercise.</li>
          <li>A valuation supports the exercise price and the tax computation.</li>
          <li>FEMA conditions apply if employees or shareholders are non-residents.</li>
          <li>Reporting to the registrar and the RBI follows the issue of shares.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Your US counsel should confirm the securities-law exemptions for offering equity to employees in India and any plan amendments.</li>
          <li>Add an India addendum to the plan that covers tax withholding, FEMA reporting and local law.</li>
          <li>Coordinate the share valuation with your US 409A or equivalent valuation. See{" "}
            <Link href="/blog/usa-to-india/share-valuation" className="text-blue-800 font-semibold hover:underline">share valuation</Link>.
          </li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Not withholding tax at exercise or vesting.</li>
          <li>Using the US plan unchanged, with no India addendum.</li>
          <li>Overlooking FEMA reporting and employees&apos; foreign asset disclosures.</li>
          <li>Recharging costs to the subsidiary without an agreement.</li>
          <li>Granting equity without a valuation.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We cover the valuation, FEMA, tax and legal work for ESOPs in India.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/transaction-advisory" className="text-blue-800 font-semibold hover:underline">Transaction advisory and valuation</Link>
          {" "}&middot;{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory</Link>
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
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
