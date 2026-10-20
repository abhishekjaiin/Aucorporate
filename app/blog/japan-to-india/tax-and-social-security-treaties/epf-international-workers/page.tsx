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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "who", label: "Who counts as an international worker" },
  { id: "japan", label: "The Japanese exception" },
  { id: "how", label: "How contributions work when the exception does not apply" },
  { id: "courts", label: "What the courts have said" },
  { id: "steps", label: "Employer checklist" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Japanese citizen in India have to contribute to provident fund?", a: "Generally yes as an international worker of a covered establishment, unless the person is covered by the Japan-India Social Security Agreement and holds a Certificate of Coverage." },
  { q: "Is there a wage ceiling for international workers?", a: "No. International workers contribute on their whole salary, although Indian employees are mandatorily covered only up to a prescribed ceiling." },
  { q: "What is an excluded employee?", a: "A worker who stays covered by the home country's social security under an agreement with India and holds a valid Certificate of Coverage." },
  { q: "Does a local hire by the Indian subsidiary qualify for the exclusion?", a: "Generally not, because the detached worker rule is for employees sent by an employer in the home country." },
  { q: "Did a court strike down the rule?", a: "The Karnataka High Court did in 2024. The Delhi High Court upheld the provisions on 4 November 2025. We are not aware of a final Supreme Court ruling." },
  { q: "Does an Employer of Record avoid Indian provident fund?", a: "No. The EOR is the employer and the provident fund rules apply to the worker, subject to any exclusion." },
  { q: "What is the EPF Scheme, 2026?", a: "The current provident fund scheme, which took effect on 1 July 2026 per law-firm commentary, and retains provisions for international workers." },
  { q: "What if we have not been contributing?", a: "Take advice quickly. Arrears, interest and damages can apply, and there are routes to regularize." },
]

const relatedCards = [
  { title: "The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization", desc: "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
  { title: "Hiring and Payroll in India for Japanese Companies: Contracts, PF, ESI and Gratuity", desc: "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/japan-to-india/hiring-and-payroll" },
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Japanese companies.", href: "/blog/japan-to-india/eor-vs-subsidiary" },
  { title: "Sending a Japanese Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/japan-to-india/expat-visa" },
]

export default function EpfInternationalWorkersPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="EPF for International Workers in India: What Japanese Expats and Their Employers Must Know"
        description="How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme."
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
          { label: "EPF for International Workers: Rules for Japanese Expats" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: Indian provident fund"
        title="EPF for International Workers in India: What Japanese Expats and Their Employers Must Know"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A foreign national working in India for a covered establishment is generally an international worker
          under the Employees&apos; Provident Fund rules, contributing on the full salary with no wage ceiling.
          For Japanese employees there is a major exception: a worker who stays covered by the Japanese pension
          system under the Japan-India Social Security Agreement and holds a Certificate of Coverage is treated
          as an excluded employee.
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
                ["Who is an international worker", "A foreign national working for a covered establishment in India, and certain Indian workers with foreign links as defined"],
                ["Wage ceiling", "None for international workers; Indian employees above the prescribed wage ceiling are generally not mandatorily covered"],
                ["Exclusion for Japanese workers", "Covered by the Japan-India Social Security Agreement with a valid Certificate of Coverage"],
                ["Withdrawal", "Rules differ from domestic members; the Japan agreement allows withdrawal on retirement or resignation in India whatever the age, per Japanese commentary"],
                ["Courts", "Karnataka High Court struck down the provisions in 2024; Delhi High Court upheld them on 4 November 2025"],
                ["Rulebook", "Employees' Provident Funds Scheme, 2026, which took effect on 1 July 2026, per law-firm commentary"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who counts as an international worker</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The EPF rules treat foreign nationals employed in India by a covered establishment as international
          workers. Unlike Indian employees, who are mandatorily covered only up to a prescribed wage ceiling,
          international workers contribute on their whole salary. An Indian subsidiary of a Japanese company
          that is covered by the EPF law therefore has to register its Japanese expats, unless they are excluded
          employees.
        </p>

        <h2 id="japan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Japanese exception</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under the Japan-India Social Security Agreement, a Japanese employee sent to India by a Japanese
          employer can remain in the Japanese pension system for an initial five years. With a valid Certificate
          of Coverage, the person is an excluded employee and does not contribute to Indian EPF or EPS for that
          period. See{" "}
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">the agreement</Link>.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>No certificate, or a certificate that has expired: the international worker rules apply.</li>
          <li>Employed by the Indian subsidiary rather than sent by the Japanese employer: the detached worker rule may not apply.</li>
          <li>Assignment longer than the period on the certificate: apply for an extension before it ends.</li>
        </ul>

        <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How contributions work when the exception does not apply</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>The employer and the employee each contribute a percentage of wages, as the Scheme sets, with no ceiling for international workers.</li>
          <li>The employer adds administration charges.</li>
          <li>The contributions are reported and paid monthly through the EPFO system, like those of Indian employees.</li>
        </ul>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          The exact rates, wage definitions and administration charges are set by the EPF Scheme and
          notifications. We confirm the current figures for each payroll.
        </div>

        <h2 id="courts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the courts have said</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Court</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Karnataka High Court (2024), Stone Hill Education Foundation v. Union of India", "Held the international worker provisions unconstitutional for requiring contributions on full salary without a ceiling"],
                ["Delhi High Court (4 November 2025), SpiceJet Limited and LG Electronics India v. Union of India", "Upheld the provisions; a wage ceiling is a legislative choice. Non-excluded international workers must contribute"],
                ["Supreme Court", "We are not aware of a final ruling. Check the current position"],
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
          The two High Courts disagree, and the Employees&apos; Provident Funds Scheme, 2026 retains a framework
          for international workers. For Japanese expats with a Certificate of Coverage the dispute does not
          arise, which is another reason to obtain it.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employer checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm that the establishment is covered by the EPF law and registered with the EPFO.</li>
          <li>Identify every foreign national on payroll and classify them as international workers or excluded employees.</li>
          <li>Obtain and file a copy of each Japanese expat&apos;s Certificate of Coverage before the first payroll.</li>
          <li>For anyone without a certificate, decide with advice how to handle the court position and keep the file note.</li>
          <li>Report and pay each month, keep records for inspection and diary certificate expiry dates.</li>
        </ol>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Budget for the employer contribution on the full salary for any expat who does not qualify for the exclusion.</li>
          <li>Keep the Certificate of Coverage with the payroll file. An EPFO inspector will ask for it.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Putting Japanese expats on provident fund payroll when a Certificate of Coverage was available.</li>
          <li>Leaving them off provident fund payroll without a certificate or a written legal basis.</li>
          <li>Letting a certificate expire without an extension.</li>
          <li>Telling an expat they can withdraw on return to Japan without checking the current rule.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run payroll and provident fund compliance for foreign nationals, classify international workers and
          excluded employees and advise on the current position.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://www.epfindia.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Employees&apos; Provident Fund Organisation</a>,
          the{" "}
          <a href="https://labour.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Labour and Employment</a>{" "}
          and the{" "}
          <a href="https://www.nenkin.go.jp/international/agreement/noteseach/notesindia.html" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Japan Pension Service</a>.
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
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "Japan Pension Service: Japan-India Social Security Agreement", href: "https://www.nenkin.go.jp/international/agreement/noteseach/notesindia.html" },
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
        title="Employing Japanese Nationals in India?"
        description="Tell us who you employ and on what terms, and we'll map provident fund, the Certificate of Coverage and withdrawal rules."
      />
    </main>
  )
}
