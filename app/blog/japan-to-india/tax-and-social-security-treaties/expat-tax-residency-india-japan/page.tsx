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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "india", label: "Indian residency in brief" },
  { id: "japan", label: "Japanese tax residency in brief" },
  { id: "treaty", label: "Where the treaty helps individuals" },
  { id: "secondment", label: "Secondments and who bears the cost" },
  { id: "steps", label: "What an expat should do each year" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is a Japanese employee working in India taxed?", a: "India taxes income from work done in India. Japan may also tax the person if they remain a Japanese resident. Relief comes through the treaty and the foreign tax credit." },
  { q: "When does a foreign national become tax resident in India?", a: "Generally with 182 days or more in India in the tax year, or 60 days or more in the year plus 365 days or more in the preceding four years, with exceptions." },
  { q: "What is the Indian tax year?", a: "1 April to 31 March. The Income-tax Act, 2025 uses the term tax year." },
  { q: "Does the 183-day rule exempt a visiting employee?", a: "It can, if the employee is in India for 183 days or fewer, the employer is not an Indian resident and the cost is not borne by an Indian permanent establishment." },
  { q: "Why does a secondment to the Indian subsidiary matter?", a: "If the Indian subsidiary bears the cost of the employee, the short-stay exemption can be lost." },
  { q: "What is the treaty tie-breaker?", a: "A set of tests that decide which country is the treaty residence when a person is resident in both." },
  { q: "Do expats need to file an Indian return?", a: "Generally yes if resident or with Indian-source income above the filing limits, even if tax was withheld." },
  { q: "Who handles the Japanese return?", a: "A Japanese tax adviser. AU Corporate handles Indian filings and coordinates with them." },
]

const relatedCards = [
  { title: "The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization", desc: "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
  { title: "Sending a Japanese Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/japan-to-india/expat-visa" },
  { title: "The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies", desc: "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.", href: "/blog/japan-to-india/dtaa-pe-risk" },
  { title: "Hiring and Payroll in India for Japanese Companies: Contracts, PF, ESI and Gratuity", desc: "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/japan-to-india/hiring-and-payroll" },
]

export default function ExpatTaxResidencyIndiaJapanPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Tax Residency for Japanese Expats in India: Residency Tests, Treaty Rules and Double Tax Relief"
        description="Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit."
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
          { label: "Tax Residency for Japanese Expats in India: Treaty Rules" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: expat tax"
        title="Tax Residency for Japanese Expats in India: Residency Tests, Treaty Rules and Double Tax Relief"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Japanese employee working in India is taxed in India on income from work done there, and may also
          remain taxable in Japan depending on Japanese residency. Relief comes from the treaty&apos;s rules on
          employment income and tie-breaker, and from the foreign tax credit in Japan. Residency in India
          depends mainly on days of stay: 182 days in a tax year, or 60 days plus 365 days in the four preceding
          years.
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
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India: resident</th>
                  <td className="border border-gray-300 p-3">In India 182 days or more in the tax year, or 60 days or more plus 365 days or more in the four preceding years (with exceptions)</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India: tax year</th>
                  <td className="border border-gray-300 p-3">1 April to 31 March; the Income-tax Act, 2025 uses the term tax year</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Japan: who is taxed on worldwide income</th>
                  <td className="border border-gray-300 p-3">Residents of Japan, with special rules for non-permanent residents; confirm status with a Japanese adviser</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Treaty tie-breaker</th>
                  <td className="border border-gray-300 p-3">Permanent home, centre of vital interests, habitual abode, nationality, then agreement between authorities</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Short-stay rule</th>
                  <td className="border border-gray-300 p-3">Employment income can stay taxable only in Japan if the employee is in India for 183 days or fewer, the employer is not an Indian resident and the cost is not borne by an Indian permanent establishment</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Not covered</th>
                  <td className="border border-gray-300 p-3">Pension contributions: see <Link href="/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">the social security agreement</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian residency in brief</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An individual is resident in India if present for 182 days or more in the tax year, or for 60 days or
          more in the tax year and 365 days or more in the four preceding years. A resident who has been
          non-resident in most past years may be a resident but not ordinarily resident, which narrows the
          income taxed in India. Residents are taxed in India on worldwide income; non-residents only on income
          received, accrued or arising in India.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          Days are counted by presence, so board meetings, project visits and long business trips all count.
          Keep a travel log for every expat and visitor.
        </div>

        <h2 id="japan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Japanese tax residency in brief</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Japan taxes residents on worldwide income, with different rules for permanent and non-permanent
          residents. An employee sent to India on assignment can remain a Japanese resident if Japan stays the
          centre of life, for example if the family remains there, or can become a non-resident if the
          assignment is long and the person&apos;s home moves. Japanese tax law has its own tests, so your
          Japanese adviser should confirm each person&apos;s status each year.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the treaty helps individuals</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Tie-breaker.</strong> If someone is a resident of both countries under domestic law, the treaty decides which country is the treaty residence.</li>
          <li><strong>Short stays (employment).</strong> For a Japanese employee of a Japanese employer visiting India, the treaty can leave employment income taxable only in Japan if the employee is in India for 183 days or fewer in the relevant period, the employer is not an Indian resident, and an Indian permanent establishment does not bear the cost.</li>
          <li><strong>Independent services.</strong> Professionals are taxed in India only if they have a regular fixed base or stay 183 days or more.</li>
          <li><strong>Relief.</strong> Japan relieves double tax mainly through the foreign tax credit.</li>
        </ul>

        <h2 id="secondment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Secondments and who bears the cost</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If the Japanese parent seconds an employee to the Indian subsidiary and the subsidiary bears the cost,
          the short-stay exemption can fail, because the cost is borne by an Indian resident employer. Most
          longer assignments are therefore taxable in India from the first day. Plan payroll and Withholding Tax
          on salary in India from the start of the assignment.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What an expat should do each year</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Keep a day-by-day travel log for India and Japan.</li>
          <li>Confirm Indian tax residency status at the end of the tax year.</li>
          <li>File the Indian return and pay or claim Indian tax, with employer Withholding Tax records.</li>
          <li>Report the Indian income in the Japanese return and claim the foreign tax credit, with a Japanese adviser.</li>
          <li>Check Japanese reporting for overseas assets where thresholds are met. See <Link href="/blog/japan-to-india/japan-parent-obligations" className="text-blue-800 font-semibold hover:underline">Japanese parent obligations</Link>.</li>
        </ol>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Tax equalization or hypothetical tax policies need both an Indian and a Japanese computation. Agree who runs them before the assignment starts.</li>
          <li>Employer Withholding Tax on salary in India is monthly, so the first month of an assignment already needs a plan.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Counting only the days on the work permit, not the days in India.</li>
          <li>Assuming the short-stay exemption applies when the Indian subsidiary bears the cost.</li>
          <li>Not filing an Indian return because tax was deducted at source.</li>
          <li>Not checking Japanese residency status after the assignment starts.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We handle expat payroll, Indian tax returns and residency analysis in India, and coordinate with your
          Japanese adviser on the credit.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>{" "}
          ·{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://www.incometax.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
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
        title="Working Out a Japanese Expat's Tax Residency?"
        description="Tell us the expected days in India and how the employee is paid, and we'll map residency and double tax relief in both countries."
      />
    </main>
  )
}
