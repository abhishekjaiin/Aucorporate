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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/epf-international-workers"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "who", label: "Who counts as an international worker" },
  { id: "how", label: "How contributions work" },
  { id: "courts", label: "What the courts have said" },
  { id: "withdraw", label: "Withdrawing the balance" },
  { id: "steps", label: "Employer checklist" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a US citizen in India have to contribute to provident fund?", a: "Generally yes, as an international worker of a covered establishment, unless an exclusion applies. Because there is no US-India agreement, the agreement-based exclusion is not available." },
  { q: "Is there a wage ceiling for international workers?", a: "No. International workers contribute on their whole salary, although Indian employees are mandatorily covered only up to a prescribed ceiling." },
  { q: "Can an expat withdraw the balance when leaving India?", a: "Generally no. Withdrawal is tied to retirement at the prescribed age or permanent total incapacity, subject to the current rules." },
  { q: "Did a court strike down the rule?", a: "The Karnataka High Court did in 2024. The Delhi High Court upheld the provisions on 4 November 2025. We are not aware of a final Supreme Court ruling." },
  { q: "What is an excluded employee?", a: "A worker who stays covered by their home country's social security under an agreement with India and holds a certificate of coverage." },
  { q: "Does an Employer of Record avoid this?", a: "No. The EOR becomes the covered employer, and the same provident fund rules apply to the worker." },
  { q: "What is the EPF Scheme, 2026?", a: "The current provident fund scheme, which took effect on 1 July 2026 per law-firm commentary, and retains provisions for international workers." },
  { q: "What if we have not been contributing?", a: "Take advice quickly. Arrears, interest and damages can apply, and there are routes to regularize." },
]

const relatedCards = [
  { title: "Social Security for US Expats in India: Is There a US-India Totalization Agreement?", desc: "Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning.", href: "/blog/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india" },
  { title: "Hiring and Payroll in India for US Companies: Contracts, PF, ESI and Gratuity", desc: "How US companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/usa-to-india/hiring-and-payroll" },
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.", href: "/blog/usa-to-india/eor-vs-subsidiary" },
  { title: "Sending a US Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/usa-to-india/expat-visa" },
]

export default function EpfInternationalWorkersPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="EPF for International Workers in India: What US Expats and Their Employers Must Know"
        description="How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, withdrawal, court rulings and the 2026 EPF Scheme."
        datePublished="2026-10-14"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/usa-to-india/tax-and-social-security-treaties" },
          { label: "EPF for International Workers in India: Rules for US Expats" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: Indian provident fund"
        title="EPF for International Workers in India: What US Expats and Their Employers Must Know"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US citizen working in India for a covered establishment is generally an international worker under
          the Employees&apos; Provident Fund rules. The employer and employee contribute on the full salary,
          with no wage ceiling, unless the person is an excluded employee under a social security agreement.
          Courts have disagreed on the rule, so treat it as a live compliance risk and take advice.
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
                ["Who is an international worker", "A foreign national working for a covered establishment in India, and certain Indian workers with foreign links as defined"],
                ["Wage ceiling", "None for international workers; Indian employees above the prescribed wage ceiling are generally not mandatorily covered"],
                ["Exclusion", "A worker covered by an agreement with another country and holding a certificate of coverage"],
                ["Withdrawal", "Rules differ from domestic members; withdrawal is generally tied to retirement or permanent incapacity"],
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
          international workers contribute on their whole salary. An Indian subsidiary of a US company that is
          covered by the EPF law therefore has to register its US expats.
        </p>

        <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How contributions work</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>The employer and the employee each contribute a percentage of wages, as the Scheme sets, with no ceiling for international workers.</li>
          <li>The employer adds administration charges.</li>
          <li>The contributions are reported and paid monthly through the EPFO system, like those of Indian employees.</li>
          <li>Excluded employees are outside the requirement: those who remain covered by their home country&apos;s social security under an agreement and hold a valid certificate of coverage. Because there is no US-India agreement, a US expat cannot rely on this route.</li>
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
                ["Delhi High Court (4 November 2025), SpiceJet Limited and LG Electronics India v. Union of India", "Upheld the provisions; a wage ceiling is a legislative choice. Non-excluded international workers must contribute and can withdraw only on retirement or total permanent incapacity"],
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
          for international workers. Many employers keep complying on full salary to avoid arrears and interest
          if the provisions are later upheld in their region. This is a risk decision to make with advice.
        </p>

        <h2 id="withdraw" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Withdrawing the balance</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          International workers generally cannot withdraw the balance when they leave India. The usual triggers
          are retirement at the prescribed age or permanent total incapacity. A US expat should treat the
          contribution as a long-term cost unless a specific exclusion or relief applies. Ask us for the current
          withdrawal rules before the assignment is priced.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employer checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm that the establishment is covered by the EPF law and registered with the EPFO.</li>
          <li>Identify every foreign national on payroll and classify them as international workers or excluded employees.</li>
          <li>Decide, with advice, how to handle the court position for your location and keep the file note.</li>
          <li>Include the contribution in the assignment cost and in the payroll set-up.</li>
          <li>Report and pay each month and keep records for inspection.</li>
        </ol>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Budget for the employer contribution on the full salary, not a capped amount.</li>
          <li>Tell the expat in the assignment letter that contributions cannot normally be withdrawn on leaving India.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Leaving US expats off provident fund payroll without a written legal basis.</li>
          <li>Assuming the Karnataka ruling applies everywhere in India.</li>
          <li>Not budgeting the employer share.</li>
          <li>Telling the expat they can withdraw on return to the US.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run payroll and provident fund compliance for foreign nationals, classify international workers and
          advise on the current position.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
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
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "US Social Security Administration: international programs", href: "https://www.ssa.gov/international/" },
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
        title="Employing US Nationals in India?"
        description="Tell us who you are employing and on what terms — we'll map provident fund, payroll and withdrawal rules for international workers."
      />
    </main>
  )
}
