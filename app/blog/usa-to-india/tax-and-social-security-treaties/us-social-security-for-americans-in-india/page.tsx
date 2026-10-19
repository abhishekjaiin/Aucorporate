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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "matrix", label: "Who pays FICA in each structure" },
  { id: "agreement", label: "Section 3121(l) agreements" },
  { id: "benefits", label: "Benefits and credits" },
  { id: "steps", label: "Planning steps" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Do Americans working in India pay US Social Security tax?", a: "Generally yes if employed by a US employer. If employed by a foreign company such as an Indian subsidiary, generally no unless a Section 3121(l) agreement covers it. Confirm with a US CPA." },
  { q: "What is a Section 3121(l) agreement?", a: "An agreement between a US employer and the Treasury that extends Social Security coverage to US citizens and residents working for its foreign affiliates." },
  { q: "Which foreign companies are affiliates for this purpose?", a: "Foreign entities in which the American employer holds at least a 10% interest, by voting stock for corporations." },
  { q: "Do self-employed Americans in India pay self-employment tax?", a: "Generally yes, because there is no totalization agreement to relieve it." },
  { q: "Does Medicare cover care in India?", a: "Generally no. Medicare does not normally cover care outside the US." },
  { q: "Can Social Security be paid to someone living in India?", a: "Generally yes, subject to SSA rules. Check with the SSA." },
  { q: "Does the move to Indian payroll end US coverage?", a: "It can, because FICA generally applies only to American employers unless an agreement exists. It also triggers Indian provident fund rules, so test both." },
  { q: "Who prepares the US side?", a: "Your US CPA. AU Corporate handles the Indian side and coordinates." },
]

const relatedCards = [
  { title: "Social Security for US Expats in India: Is There a US-India Totalization Agreement?", desc: "Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning.", href: "/blog/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india" },
  { title: "EPF for International Workers in India: What US Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, withdrawal, court rulings and the 2026 EPF Scheme.", href: "/blog/usa-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "US Parent Obligations When You Own an Indian Subsidiary", desc: "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.", href: "/blog/usa-to-india/us-parent-obligations" },
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.", href: "/blog/usa-to-india/eor-vs-subsidiary" },
]

export default function UsSocialSecurityForAmericansInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="US Social Security and FICA for Americans Working in India: Who Pays and When"
        description="When Social Security and Medicare tax apply to Americans working in India: US employer, Indian subsidiary, Section 3121(l) agreements and self-employment."
        datePublished="2026-10-14"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/usa-to-india/tax-and-social-security-treaties" },
          { label: "US Social Security (FICA) for Americans Working in India" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: US Social Security"
        title="US Social Security and FICA for Americans Working in India: Who Pays and When"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US citizen working in India for a US employer generally keeps paying US Social Security and Medicare
          tax (FICA). If the person works for an Indian subsidiary, FICA generally does not apply unless the US
          parent has a Section 3121(l) agreement with the Treasury. Self-employed US citizens abroad generally
          keep paying self-employment tax. Confirm every case with a US CPA.
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
                ["US employer, work in India", "FICA generally continues for a US citizen or resident working abroad for an American employer"],
                ["Indian subsidiary employer", "FICA generally does not apply unless a Section 3121(l) agreement covers the subsidiary"],
                ["3121(l) agreement", "An American employer can elect coverage for US citizens and residents employed by foreign affiliates in which it holds at least a 10% interest"],
                ["Self-employed", "Self-employment tax generally continues"],
                ["Totalization", "No US-India agreement known to be in force, so no certificate of coverage"],
                ["Who advises", "Your US CPA or tax counsel; AU Corporate handles the Indian side"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="matrix" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who pays FICA in each structure</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">US FICA</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian provident fund</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Seconded; stays on the US parent's payroll; cost recharged to India", "Generally applies", "May still apply if the worker is an international worker of an Indian covered establishment; analyse the facts"],
                ["Local hire or transfer to the Indian subsidiary's payroll", "Generally does not apply", "Generally applies as an international worker"],
                ["Indian subsidiary payroll with a Section 3121(l) agreement by the US parent", "Applies through the agreement", "Generally applies as well, because there is no totalization agreement"],
                ["Employer of Record in India", "Generally does not apply to the EOR's employee", "Applies through the EOR as employer"],
                ["Self-employed US citizen in India", "Self-employment tax generally applies", "Not as an employee; check Indian status"],
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
          This table is a general orientation, not US tax advice. Whether the parent is an American employer,
          who actually pays the wages and the details of the assignment all matter.
        </div>

        <h2 id="agreement" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section 3121(l) agreements</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A US parent can enter an agreement with the Treasury to extend Social Security coverage to US citizens
          and residents employed by its foreign affiliates, meaning foreign entities in which it holds at least
          10% of the voting stock or profits interest. The parent pays the equivalent employer and employee
          Social Security and Medicare taxes. Companies use these agreements when they want the worker to keep
          earning US coverage while on a local payroll. The cost of this has to be weighed against the Indian
          provident fund cost, which can apply in addition.
        </p>

        <h2 id="benefits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Benefits and credits</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>US Social Security credits build only from covered work, so long periods abroad outside FICA can leave gaps in the earnings record.</li>
          <li>Medicare does not generally pay for care received in India, so expats need private or employer health cover.</li>
          <li>Social Security retirement benefits can generally be paid to a beneficiary living in India, subject to the SSA&apos;s rules. Confirm with the SSA.</li>
        </ul>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Planning steps</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the legal employer for each US expat.</li>
          <li>Ask your US CPA to confirm the FICA result for that structure and whether a Section 3121(l) agreement is worth having.</li>
          <li>Ask us to confirm the Indian provident fund result for the same structure. See <Link href="/blog/usa-to-india/tax-and-social-security-treaties/epf-international-workers" className="text-blue-800 font-semibold hover:underline">EPF for international workers</Link>.</li>
          <li>Compare the total cost across structures and decide.</li>
          <li>Document the choice in the assignment letter and the payroll set-up.</li>
        </ol>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Do not assume that moving someone onto Indian payroll ends US contributions or begins Indian ones in isolation. Test both together.</li>
          <li>Put the structure in the intercompany agreement so the recharge and the transfer pricing treatment match the facts. See <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming FICA stops when an American leaves the US.</li>
          <li>Assuming FICA stops when the person is moved to the Indian subsidiary, without checking any agreement.</li>
          <li>Forgetting that Medicare does not cover care in India.</li>
          <li>Using a US assignment policy that relies on a certificate of coverage that does not exist for India.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We handle the Indian side, including payroll, provident fund and Withholding Tax on salary, and work
          with your US CPA on the FICA analysis.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://www.ssa.gov/international/coc-docs/3121-l.html" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">US Social Security Administration&apos;s page on Section 3121(l) agreements</a>,
          the{" "}
          <a href="https://www.irs.gov" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service</a>{" "}
          and the{" "}
          <a href="https://www.epfindia.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Employees&apos; Provident Fund Organisation</a>.
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
            { label: "SSA: Section 3121(l) agreements", href: "https://www.ssa.gov/international/coc-docs/3121-l.html" },
            { label: "US Social Security Administration: international programs", href: "https://www.ssa.gov/international/" },
            { label: "Internal Revenue Service: tax treaties A to Z", href: "https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z" },
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
        title="US Social Security for Your Staff in India?"
        description="Tell us how your American staff in India are employed — we'll map when FICA applies and how it interacts with Indian provident fund."
      />
    </main>
  )
}
