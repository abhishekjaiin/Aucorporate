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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "india", label: "Indian residency in brief" },
  { id: "us", label: "US taxation of citizens abroad" },
  { id: "treaty", label: "Where the treaty helps individuals" },
  { id: "short", label: "Short business trips" },
  { id: "steps", label: "What an expat should do each year" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is a US citizen working in India taxed?", a: "India taxes income earned or received in India, and residents on worldwide income. The US taxes its citizens on worldwide income. Relief comes through the foreign tax credit or exclusion." },
  { q: "When does a foreigner become tax resident in India?", a: "Generally with 182 days or more in India in the tax year, or 60 days or more in the year plus 365 days or more in the preceding four years, with exceptions." },
  { q: "What is the treaty tie-breaker?", a: "A set of tests in Article 4 that decide which country is the treaty residence when a person is resident in both." },
  { q: "Can an expat use the foreign earned income exclusion?", a: "Possibly, if the person passes the bona fide residence or physical presence test. A US adviser should confirm." },
  { q: "Is the foreign tax credit better than the exclusion?", a: "It depends on the person's income, Indian tax and family situation. It needs a computation." },
  { q: "Does the treaty exempt short business trips?", a: "It can exempt short stays for employees of a non-resident employer if the conditions are met, but the visit can still create permanent establishment risk." },
  { q: "Do green card holders count as US citizens for these purposes?", a: "For US worldwide taxation, yes: US residents are taxed on worldwide income. Treaty residence rules may differ, so take advice." },
  { q: "Does an expat need to file in both countries?", a: "Usually yes, if resident in India or earning Indian-source income and a US citizen or resident." },
]

const relatedCards = [
  { title: "Social Security for US Expats in India: Is There a US-India Totalization Agreement?", desc: "Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning.", href: "/blog/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india" },
  { title: "Sending a US Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/usa-to-india/expat-visa" },
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
  { title: "Hiring and Payroll in India for US Companies: Contracts, PF, ESI and Gratuity", desc: "How US companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/usa-to-india/hiring-and-payroll" },
]

export default function ExpatTaxResidencyIndiaUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Tax Residency for US Expats in India: Residency Tests, Treaty Tie-Breaker and Double Tax Relief"
        description="Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion."
        datePublished="2026-10-14"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/usa-to-india/tax-and-social-security-treaties" },
          { label: "Tax Residency for US Expats in India: Treaty and Credits" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: expat tax"
        title="Tax Residency for US Expats in India: Residency Tests, Treaty Tie-Breaker and Double Tax Relief"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US citizen working in India is usually taxed twice in principle: India taxes income earned or
          received in India, and the US taxes its citizens on worldwide income. Relief comes from the foreign
          tax credit or the foreign earned income exclusion in the US, and, if the person is a resident of both
          countries, from the treaty tie-breaker. Residency in India depends mainly on days of stay.
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
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India: resident</th>
                  <td className="border border-gray-300 p-3">In India 182 days or more in the tax year, or 60 days or more plus 365 days or more in the four preceding years (with exceptions)</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India: tax year</th>
                  <td className="border border-gray-300 p-3">1 April to 31 March; the Income-tax Act, 2025 uses the term tax year</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">US: who is taxed on worldwide income</th>
                  <td className="border border-gray-300 p-3">US citizens and residents, including green card holders</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Treaty tie-breaker</th>
                  <td className="border border-gray-300 p-3">Permanent home, centre of vital interests, habitual abode, nationality, then agreement between authorities (Article 4)</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">US relief</th>
                  <td className="border border-gray-300 p-3">Foreign tax credit (Form 1116) or foreign earned income exclusion (Form 2555)</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Not covered</th>
                  <td className="border border-gray-300 p-3">Social security: see <Link href="/blog/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india" className="text-blue-800 font-semibold hover:underline">social security for US expats</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian residency in brief</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An individual is resident in India if present for 182 days or more in the tax year, or for 60 days or
          more in the tax year and 365 days or more in the four preceding years. Some individuals get a longer
          threshold, for example Indian citizens and persons of Indian origin who visit India. A resident who
          has been non-resident in most past years may be a resident but not ordinarily resident, which narrows
          the income taxed in India. Residents are taxed in India on worldwide income; non-residents only on
          income received, accrued or arising in India.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          Days are counted by presence, so board meetings, project visits and long business trips all count.
          Keep a travel log for every expat and visitor.
        </div>

        <h2 id="us" className="text-2xl font-bold text-gray-900 mt-12 mb-4">US taxation of citizens abroad</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The US taxes citizens and green card holders on worldwide income wherever they live. An American
          working in India files a US return and reports the Indian salary. The US then relieves double tax
          mainly through two tools.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tool</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Foreign tax credit (Form 1116)", "Credit for Indian income tax paid against US tax on the same foreign income", "Limited to the US tax on that income; unused credit may carry over under US rules"],
                ["Foreign earned income exclusion (Form 2555)", "Excludes foreign earned income up to an annual limit from US tax", "Needs bona fide residence abroad or the physical presence test; the limit is set each year by the IRS"],
                ["Foreign housing exclusion or deduction", "Relief for qualifying housing costs", "Subject to limits"],
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

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the treaty helps individuals</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Tie-breaker.</strong> If someone is a resident of both countries under domestic law, Article 4 decides which country is the treaty residence.</li>
          <li><strong>Employment income.</strong> The treaty has a rule for dependent personal services that can exempt short stays by an employee of a non-resident employer. Check the conditions in the treaty text, including the days test and who bears the cost.</li>
          <li><strong>Relief.</strong> Article 25 provides the foreign tax credit that underlies relief in the country of residence.</li>
          <li><strong>Saving clause.</strong> The US keeps the right to tax its own citizens, so for American citizens the treaty mostly operates through credits and a few exceptions.</li>
        </ul>

        <h2 id="short" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Short business trips</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A US employee who visits India for meetings is often outside the Indian tax net if the treaty&apos;s
          conditions are met, but the visit can still create permanent establishment risk for the parent and
          reporting duties. Track days, activities and who pays. See{" "}
          <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">treaty and PE risk</Link>{" "}
          and{" "}
          <Link href="/blog/usa-to-india/expat-visa" className="text-blue-800 font-semibold hover:underline">sending a US executive to India</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What an expat should do each year</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Keep a day-by-day travel log for India and the US.</li>
          <li>Confirm Indian tax residency status at the end of the tax year.</li>
          <li>File the Indian return and pay or claim Indian tax, with employer Withholding Tax records.</li>
          <li>File the US return and choose between credit and exclusion with a US adviser.</li>
          <li>Report foreign accounts to the US where thresholds are met. See <Link href="/blog/usa-to-india/us-parent-obligations" className="text-blue-800 font-semibold hover:underline">US parent obligations</Link>.</li>
        </ol>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Tax equalization or hypothetical tax policies need both an Indian and a US computation. Agree who runs them before the assignment starts.</li>
          <li>Employer Withholding Tax on salary in India is monthly, so the first month of an assignment already needs a plan.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Counting only the days on the work permit, not the days in India.</li>
          <li>Assuming the foreign earned income exclusion removes all US filing.</li>
          <li>Forgetting that the treaty&apos;s saving clause limits relief for US citizens.</li>
          <li>Not filing an Indian return because tax was deducted at source.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We handle expat payroll, Indian tax returns and residency analysis in India, and coordinate with your
          US adviser on the credit.
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
          and the{" "}
          <a href="https://www.irs.gov" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service</a>.
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Internal Revenue Service: tax treaties A to Z", href: "https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z" },
            { label: "Income Tax Department: tax treaties", href: "https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" },
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
        title="Sending a US Expat to India?"
        description="Tell us the expected days in India and how they are paid — we'll map residency, double tax relief and filings in both countries."
      />
    </main>
  )
}
