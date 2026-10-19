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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "what", label: "What a totalization agreement is" },
  { id: "status", label: "Why this matters for US expats in India" },
  { id: "india", label: "The Indian side" },
  { id: "us", label: "The US side" },
  { id: "plan", label: "How companies plan around the gap" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a totalization agreement?", a: "A social security treaty that prevents a worker from paying into two countries' systems for the same work and allows periods of coverage to be combined." },
  { q: "Does the US have a totalization agreement with India?", a: "We are not aware of one in force as of October 2026. Check the Social Security Administration's list." },
  { q: "Can a US expat get a certificate of coverage for India?", a: "Not between the US and India, because there is no agreement. Certificates are issued under agreements." },
  { q: "Will an expat pay social security in both countries?", a: "Possibly. Indian provident fund rules and US FICA or self-employment tax can both apply, depending on the structure." },
  { q: "Does the tax treaty cover this?", a: "No. The India-US tax treaty excludes social security taxes." },
  { q: "Does India have social security agreements with other countries?", a: "Yes, with a number of countries. They do not help a US expat." },
  { q: "Can the structure reduce the double cost?", a: "Often. Who employs the expat and how the assignment is set up changes the result. Model it before the assignment." },
  { q: "Could a US-India agreement be signed?", a: "It has been discussed publicly but we are not aware of one in force. Check current sources." },
]

const relatedCards = [
  { title: "EPF for International Workers in India: What US Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, withdrawal, court rulings and the 2026 EPF Scheme.", href: "/blog/usa-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "US Social Security and FICA for Americans Working in India: Who Pays and When", desc: "When Social Security and Medicare tax apply to Americans working in India: US employer, Indian subsidiary, Section 3121(l) agreements and self-employment.", href: "/blog/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india" },
  { title: "Tax Residency for US Expats in India: Residency Tests, Treaty Tie-Breaker and Double Tax Relief", desc: "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.", href: "/blog/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us" },
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.", href: "/blog/usa-to-india/eor-vs-subsidiary" },
]

export default function SocialSecurityUsExpatsIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Social Security for US Expats in India: Is There a US-India Totalization Agreement?"
        description="Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning."
        datePublished="2026-10-14"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/usa-to-india/tax-and-social-security-treaties" },
          { label: "US-India Totalization Agreement: Social Security for Expats" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: social security"
        title="Social Security for US Expats in India: Is There a US-India Totalization Agreement?"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A totalization agreement is a social security treaty that stops a worker paying into two systems for
          the same job. The US has such agreements with many countries. As of October 2026 we are not aware of
          one in force with India, so a US expat in India may owe Indian provident fund contributions and,
          depending on who employs them, US Social Security tax as well.
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
                ["What a totalization agreement does", "Avoids double social security contributions and combines periods of coverage for benefits"],
                ["US-India status", "No agreement known to be in force. Check the list on the Social Security Administration website"],
                ["India's agreements", "India has signed social security agreements with a number of other countries"],
                ["Indian system", "Employees' Provident Fund and related schemes; special rules for international workers"],
                ["US system", "FICA for employees and self-employment tax for the self-employed"],
                ["Planning lever", "Who employs the expat and how the assignment is structured"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What a totalization agreement is</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A totalization agreement has two jobs. First, a detached worker, for example an employee sent abroad
          for a limited time, stays under the home country&apos;s system and pays only there, usually proved by
          a certificate of coverage. Second, work periods in both countries can be combined to qualify for
          benefits. Without one, each country applies its own rules and a worker can be covered by both.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          As of October 2026 we are not aware of a US-India totalization agreement in force. Check the list on
          the US Social Security Administration website before relying on this.
        </div>

        <h2 id="status" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why this matters for US expats in India</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Question</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">With an agreement</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Without one (the US-India position)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Contributions during a temporary assignment", "Usually one system, proved by a certificate of coverage", "Both systems can apply"],
                ["Certificate of coverage", "Available", "Not available between India and the US"],
                ["Benefits from short periods in each country", "Periods can be combined", "Each country counts only its own periods"],
                ["Cost to employer", "One set of contributions", "Possible double cost"],
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

        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          In India, social security for employees runs mainly through the Employees&apos; Provident Fund
          Organisation. Foreign nationals working for covered establishments are classed as international
          workers and have special rules. They contribute on full salary with no wage ceiling unless excluded,
          and withdrawal rules differ. The legal position has been contested in the courts. See{" "}
          <Link href="/blog/usa-to-india/tax-and-social-security-treaties/epf-international-workers" className="text-blue-800 font-semibold hover:underline">EPF for international workers</Link>.
        </p>

        <h2 id="us" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The US side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The US applies Social Security and Medicare tax (FICA) to a US citizen working abroad for an American
          employer. A US citizen working abroad for a foreign company, such as an Indian subsidiary, is
          generally outside FICA unless the US parent has entered a special agreement under Section 3121(l) of
          the Internal Revenue Code. Self-employed US citizens abroad generally keep paying self-employment tax.
          See{" "}
          <Link href="/blog/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india" className="text-blue-800 font-semibold hover:underline">US Social Security for Americans in India</Link>.
        </p>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How companies plan around the gap</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Choose the employer deliberately.</strong> Keeping the expat on US payroll and recharging the cost to India has different social security results from moving them onto Indian payroll.</li>
          <li><strong>Model both systems before the assignment.</strong> Compare Indian provident fund cost against FICA cost for each structure.</li>
          <li><strong>Check exclusions.</strong> Where a person is covered by an agreement with another country, India may treat them as an excluded employee. This does not apply to the US because there is no agreement.</li>
          <li><strong>Document the decision.</strong> Record the structure, advice taken and the legal basis relied on.</li>
          <li><strong>Watch the law.</strong> Court rulings and the Employees&apos; Provident Funds Scheme, 2026 have changed the position, and a US-India agreement could be signed in future.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Ask your global mobility team whether the assignment policy assumes a totalization certificate. For India it cannot.</li>
          <li>Include provident fund cost in the assignment budget, not just salary and tax.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming a certificate of coverage is available for India.</li>
          <li>Moving the expat to Indian payroll without testing the FICA and provident fund results.</li>
          <li>Ignoring social security in the assignment budget.</li>
          <li>Relying on a blog post about an agreement that does not exist or is out of date.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We structure expat employment in India, run payroll and provident fund compliance, and work with your
          US advisers on the US side.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>{" "}
          ·{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">Employer of Record</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://www.ssa.gov/international/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">US Social Security Administration</a>,
          the{" "}
          <a href="https://www.epfindia.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Employees&apos; Provident Fund Organisation</a>{" "}
          and the{" "}
          <a href="https://labour.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Labour and Employment</a>.
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
            { label: "US Social Security Administration: international programs", href: "https://www.ssa.gov/international/" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "IRS: Technical Explanation of the India-US treaty", href: "https://www.irs.gov/pub/irs-trty/inditech.pdf" },
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
        title="Planning Social Security for US Staff in India?"
        description="Tell us who is moving and who will employ them — we'll map provident fund and US FICA so you avoid paying twice where possible."
      />
    </main>
  )
}
