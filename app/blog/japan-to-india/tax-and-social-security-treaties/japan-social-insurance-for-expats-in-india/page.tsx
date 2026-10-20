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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "why", label: "Why the Japanese side matters" },
  { id: "systems", label: "System by system" },
  { id: "structure", label: "Structuring the assignment" },
  { id: "extend", label: "Extensions and return" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does Japanese pension coverage continue in India?", a: "Generally yes for a detached worker for the initial five years, proved by a Certificate of Coverage." },
  { q: "Does the agreement cover Japanese health insurance?", a: "No. The agreement covers pensions. Health insurance depends on Japanese rules and the employment arrangement." },
  { q: "Does the Certificate of Coverage cover family members?", a: "It relates to the worker's pension coverage. Health cover for family members needs separate confirmation." },
  { q: "Who applies for the Certificate of Coverage?", a: "The Japanese employer, through the Japan Pension Service route. Your Japanese social insurance adviser can confirm the current steps." },
  { q: "What if the employee moves onto Indian payroll?", a: "The detached worker rule may no longer apply, and Indian provident fund can apply. Take advice before changing the employer." },
  { q: "Is Indian ESI relevant?", a: "ESI is outside the agreement and applies only below its wage ceiling, so most expats are not covered. Arrange private cover." },
  { q: "Who prepares the Japanese side?", a: "Your Japanese HR team or social insurance adviser. AU Corporate handles the Indian side." },
]

const relatedCards = [
  { title: "The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization", desc: "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
  { title: "EPF for International Workers in India: What Japanese Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme.", href: "/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "Japanese Parent Obligations When You Own an Indian Subsidiary", desc: "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.", href: "/blog/japan-to-india/japan-parent-obligations" },
  { title: "Sending a Japanese Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/japan-to-india/expat-visa" },
]

export default function JapanSocialInsuranceForExpatsInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Japanese Social Insurance for Employees Sent to India: Pension, Health and Employment Insurance"
        description="What happens to Japanese pension, health and employment insurance when an employee is sent to India: the Certificate of Coverage and who pays what."
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
          { label: "Japanese Social Insurance for Employees Sent to India" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: Japanese side"
        title="Japanese Social Insurance for Employees Sent to India: Pension, Health and Employment Insurance"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          When a Japanese company sends an employee to India, Japanese pension coverage generally continues for
          the initial five years under the Japan-India agreement, proved by a Certificate of Coverage. The
          agreement covers pensions only, so health insurance and employment insurance depend on Japanese rules
          and on whether the employee stays on the Japanese payroll. Confirm each system with a Japanese social
          insurance adviser before the assignment.
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
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Pension</th>
                  <td className="border border-gray-300 p-3">Employees&apos; Pension Insurance and National Pension continue under the agreement for the detached worker period</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Health insurance</th>
                  <td className="border border-gray-300 p-3">Not covered by the agreement; depends on Japanese rules and the employment arrangement</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employment insurance</th>
                  <td className="border border-gray-300 p-3">Not covered by the agreement; depends on Japanese rules</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Proof</th>
                  <td className="border border-gray-300 p-3">Certificate of Coverage from the Japan Pension Service route</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Who advises</th>
                  <td className="border border-gray-300 p-3">Your Japanese social insurance adviser (sharoshi) or HR team; AU Corporate handles the Indian side</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian side</th>
                  <td className="border border-gray-300 p-3">Provident fund exclusion for certified workers: see <Link href="/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers" className="text-blue-800 font-semibold hover:underline">EPF for international workers</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the Japanese side matters</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India&apos;s rules only tell you what is due in India. What a Japanese employee keeps in Japan depends
          on Japanese law and the terms of the assignment. A gap, such as a lapse in pension coverage or health
          cover, is harder to fix after the person has returned than before they leave.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          This page is a general orientation to the interaction between Japanese social insurance and India.
          Confirm every point with a Japanese social insurance adviser or the competent office.
        </div>

        <h2 id="systems" className="text-2xl font-bold text-gray-900 mt-12 mb-4">System by system</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">System</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">During an India assignment</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to confirm</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Employees' Pension Insurance and National Pension", "Coverage generally continues for a detached worker for the initial period under the agreement", "Certificate of Coverage issued before departure; extension plan"],
                ["Health insurance", "Depends on Japanese rules and on whether the employee stays on the Japanese payroll", "Continued coverage and the position for family members; cover for treatment in India"],
                ["Employment insurance and workers' accident insurance", "Depend on Japanese rules and on who employs the person", "Whether the assignment keeps coverage and who bears cost"],
                ["Indian provident fund and ESI", "Exempt for certified workers under the pension agreement for provident fund; ESI is outside the agreement", "Wage level and ESI applicability in India"],
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

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Structuring the assignment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep the employment relationship with the Japanese employer so the detached worker rule applies.</li>
          <li>Recharge the Indian share of the cost through a written intercompany agreement. See <Link href="/blog/japan-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Give the Indian payroll a copy of the Certificate of Coverage and diary the expiry date.</li>
          <li>Arrange health cover for treatment in India for the employee and family, because Indian ESI may not fit and the Japanese scheme may not cover local care in full.</li>
          <li>Document the arrangements in the assignment letter.</li>
        </ul>

        <h2 id="extend" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Extensions and return</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The initial five years can be extended where both countries&apos; institutions agree. Apply well
          before the end. On return to Japan, periods spent in India under the agreement continue to count
          towards Japanese pension coverage, and Indian periods may be added to meet minimum periods in
          specified cases. See{" "}
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">the agreement</Link>.
        </p>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Give HR a single checklist covering Japanese pension, health and employment insurance plus the Indian provident fund exclusion.</li>
          <li>Keep the assignment letter, certificate and payroll records together; both Japanese and Indian authorities may ask for them.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming the pension agreement covers health insurance.</li>
          <li>Changing the employer of record to the Indian subsidiary without checking social insurance.</li>
          <li>No plan for cover for the employee&apos;s family in India.</li>
          <li>Letting the initial period lapse without an extension.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We handle the Indian side, including payroll, provident fund and Withholding Tax on salary, and work
          with your Japanese advisers on the social insurance side.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://www.nenkin.go.jp/international/agreement/noteseach/notesindia.html" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Japan Pension Service</a>,
          the{" "}
          <a href="https://www.mhlw.go.jp/topics/bukyoku/nenkin/nenkin/pdf/shakaihosho-india-en.pdf" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Health, Labour and Welfare</a>{" "}
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
            { label: "Japan Pension Service: Japan-India Social Security Agreement", href: "https://www.nenkin.go.jp/international/agreement/noteseach/notesindia.html" },
            { label: "Ministry of Health, Labour and Welfare: Agreement between Japan and India on Social Security", href: "https://www.mhlw.go.jp/topics/bukyoku/nenkin/nenkin/pdf/shakaihosho-india-en.pdf" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
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
        title="Keeping Japanese Pension and Health Cover for Staff in India?"
        description="Tell us how your seconded staff are employed, and we'll map how Japanese social insurance interacts with Indian provident fund."
      />
    </main>
  )
}
