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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "what", label: "What the agreement does" },
  { id: "detach", label: "The detached worker rule" },
  { id: "coc", label: "Getting the Certificate of Coverage" },
  { id: "totalise", label: "Combining periods for benefits" },
  { id: "plan", label: "Planning around the agreement" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a social security agreement between Japan and India?", a: "Yes. The Agreement between Japan and India on Social Security has been in force since 1 October 2016." },
  { q: "What does the agreement cover?", a: "Pension systems: in Japan the National Pension and Employees' Pension Insurance, and in India the EPS and EPF. It covers employees, not the self-employed." },
  { q: "How long can a Japanese employee stay in the Japanese system while in India?", a: "The initial period is five years. Longer periods are possible if the institutions of both countries agree." },
  { q: "What is a Certificate of Coverage?", a: "A certificate that proves the employee is covered by the home system under the agreement, so the host country does not require contributions." },
  { q: "Does a local hire by the Indian subsidiary qualify?", a: "No. The detached worker rule is for employees sent by an employer with a place of business in the home country." },
  { q: "Does the agreement cover health insurance?", a: "No. It covers pensions only." },
  { q: "Can periods in both countries be added together?", a: "Yes, for pension benefits. The Indian EPS pension needs 10 years of coverage and Japanese periods can be added to reach it. EPF periods are not totalized." },
  { q: "Can an EPF balance be withdrawn?", a: "Japanese commentary notes the balance can generally be withdrawn on retirement or resignation in India whatever the age. Confirm the current rule." },
]

const relatedCards = [
  { title: "EPF for International Workers in India: What Japanese Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme.", href: "/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "Japanese Social Insurance for Employees Sent to India: Pension, Health and Employment Insurance", desc: "What happens to Japanese pension, health and employment insurance when an employee is sent to India: the Certificate of Coverage and who pays what.", href: "/blog/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india" },
  { title: "Tax Residency for Japanese Expats in India: Residency Tests, Treaty Rules and Double Tax Relief", desc: "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.", href: "/blog/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan" },
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Japanese companies.", href: "/blog/japan-to-india/eor-vs-subsidiary" },
]

export default function IndiaJapanSocialSecurityAgreementPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization"
        description="How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization."
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
          { label: "Japan-India Social Security Agreement: Rules for Expats" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: social security"
        title="The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The Agreement between Japan and India on Social Security, in force since 1 October 2016, stops a
          worker paying pension contributions to both countries. A Japanese employee sent to India by a Japanese
          employer generally stays in the Japanese pension system for an initial five years, extendable by
          agreement, and is exempt from Indian provident fund if a Certificate of Coverage is in place. Periods
          in both countries can also be added up to qualify for benefits.
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
              {[
                ["Agreement", "Agreement between Japan and the Republic of India on Social Security, signed 16 November 2012, in force since 1 October 2016"],
                ["Systems covered: Japan", "National Pension and Employees' Pension Insurance, and certain mutual aid pensions"],
                ["Systems covered: India", "Employees' Pension Scheme (EPS) and Employees' Provident Fund (EPF)"],
                ["Detached worker rule", "An employee sent by an employer with a place of business in the home country stays under home legislation; initial period five years"],
                ["Extension", "Possible by agreement of both countries' institutions; commentary notes up to three further years in specified cases"],
                ["Proof", "Certificate of Coverage, presented to the EPFO and the Indian employer when required"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the agreement does</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A social security agreement has two jobs. First, a detached worker stays under the sending
          country&apos;s system and pays only there. Second, periods of coverage in both countries can be
          combined, so short stays do not lose pension rights. The Japan-India agreement does both, but only for
          pension systems and only for employees.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          The agreement covers employees. Self-employed workers are outside it. Health insurance, Indian ESI and
          employment insurance are not covered, so confirm those separately.
        </div>

        <h2 id="detach" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The detached worker rule</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Condition</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sent by an employer", "The employee is sent by an employer that has a place of business in Japan to work in India for that employer or its group"],
                ["Employment continues", "The employment relationship with the sending employer continues during the assignment"],
                ["Period", "Initially five years"],
                ["Extension", "The institutions of both countries can agree to a longer period. Japanese commentary notes extensions in specified cases"],
                ["Proof", "Certificate of Coverage"],
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
          The structure of the assignment is what decides whether the rule applies. A secondment that keeps the
          employee on the Japanese parent&apos;s payroll and employment contract fits the rule. A local hire by
          the Indian subsidiary does not.
        </p>

        <h2 id="coc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting the Certificate of Coverage</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Confirm the assignment fits the detached worker rule before the employee leaves.</li>
          <li>The Japanese employer applies for the Certificate of Coverage through the Japan Pension Service or the competent social insurance office, stating the assignment period.</li>
          <li>Give a copy of the certificate to the Indian subsidiary&apos;s payroll and keep the original.</li>
          <li>Present the certificate to the EPFO when required, for example on an inspection or a provident fund query.</li>
          <li>Apply for an extension through the same route before the initial period ends.</li>
        </ol>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          The exact application form and office are set by the Japanese authorities. Ask your Japanese social
          insurance adviser (sharoshi) for the current steps. EPFO may issue a certificate covering only part of
          the period you ask for, for example if the work visa is shorter.
        </div>

        <h2 id="totalise" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Combining periods for benefits</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Indian pension.</strong> The EPS old-age pension needs 10 years of EPS coverage. Non-overlapping Japanese coverage periods can be added to reach it. If the total is still under 10 years, a withdrawal benefit is paid instead.</li>
          <li><strong>Japanese pension.</strong> Indian EPS periods can be added to meet Japanese minimum periods, except periods already paid out as a withdrawal benefit.</li>
          <li><strong>EPF.</strong> EPF periods are not totalized. Japanese commentary notes the EPF balance can generally be withdrawn when the person retires or resigns in India, whatever the age.</li>
        </ul>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Planning around the agreement</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep the employee on the Japanese employment contract and payroll, with the Indian cost recharged through an intercompany agreement.</li>
          <li>Apply for the certificate before departure, not after the first Indian payroll.</li>
          <li>Diary the end of the initial five years and apply for any extension in good time.</li>
          <li>Check that a recharge to India does not turn the arrangement into a permanent establishment issue. See <Link href="/blog/japan-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">treaty and PE risk</Link>.</li>
        </ul>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Ask HR to add the Certificate of Coverage to the standard assignment checklist for India. It saves a double provident fund cost.</li>
          <li>The agreement helps with pension contributions only. Budget separately for health cover and any Indian ESI or statutory benefits.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Starting Indian payroll for a Japanese expat before the certificate is issued.</li>
          <li>Moving the employee onto the Indian subsidiary&apos;s employment contract and losing the detached worker position.</li>
          <li>Assuming the agreement covers health insurance.</li>
          <li>Forgetting to apply for an extension when the five years end.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We structure expat employment in India, run payroll and provident fund compliance, and work with your
          Japanese advisers on the certificate.
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
          <a href="https://www.mhlw.go.jp/topics/bukyoku/nenkin/nenkin/pdf/shakaihosho-india-en.pdf" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Health, Labour and Welfare text of the agreement</a>{" "}
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
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
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
        title="Using the Japan-India Social Security Agreement?"
        description="Tell us who is being seconded and for how long, and we'll map the Certificate of Coverage and the Indian provident fund position."
      />
    </main>
  )
}
