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
import { GuideCountryContext } from "@/components/guide/GuideCountryContext"

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/hiring-in-india"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "compare", label: "Singapore and India side by side" },
  { id: "pay", label: "Pay structure and cost" },
  { id: "compliance", label: "The payroll compliance cycle" },
  { id: "labour-codes", label: "The labour codes" },
  { id: "share-plans", label: "Share plans for Indian employees" },
  { id: "eor", label: "Employer of Record as a first step" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the difference between CPF and India's provident fund?", a: "CPF is a Singapore scheme for citizens and PRs. India's EPF is a separate scheme for covered employees in India. Singapore citizens working in India are exempt from EPF under CECA." },
  { q: "Do I need a written employment contract in India?", a: "Yes. Issue a written appointment letter covering role, pay structure, notice, confidentiality and termination, and check state shops and establishment rules." },
  { q: "What is gratuity?", a: "A lump sum paid on exit after a minimum period of continuous service, calculated from the last drawn basic pay and years of service." },
  { q: "Do Indian employees need ESI?", a: "Employees below the wage ceiling in covered areas are covered by the ESI scheme, with contributions from employer and employee." },
  { q: "When did the labour codes come into force?", a: "The four labour codes were reported to have come into force on 21 November 2025. Rules and state implementation are still developing, so confirm the current position." },
  { q: "Can I give Indian employees shares in the Singapore parent?", a: "Yes, subject to the foreign investment rules for residents. They are taxed as a perquisite on exercise, and the employee reports foreign assets in the Indian return." },
  { q: "Is an Employer of Record a long-term solution?", a: "Not usually. It suits a pilot. For a stable team, a subsidiary gives control, brand and a clean legal position." },
]

const relatedCards = [
  { title: "Singapore Employees Working in India: What the Tax Treaty, the EPF Exemption and CPF Mean", desc: "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen exemption, and PR and foreign-national gaps.", href: "/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" },
  { title: "Relocating Singapore Staff to India: Visa Routes, OCI, Registration and Day-Count Controls", desc: "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin, FRRO registration, residence tests and housing.", href: "/blog/singapore-to-india/relocate-singapore-staff" },
  { title: "Moving Personal Data Between Singapore and India: PDPA Transfer Rules and the DPDP Act", desc: "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation, contracts, breach notice, consent, penalties and a build plan.", href: "/blog/singapore-to-india/data-protection-pdpa-dpdp" },
  { title: "Compliance Calendar: Indian Dates for the Subsidiary, Beside the Singapore Parent's Dates", desc: "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates alongside and a note on year-end alignment.", href: "/blog/singapore-to-india/compliance-calendar" },
]

export default function HiringInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring in India as a Singapore Employer: What Changes from Singapore Practice"
        description="A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Hiring in India for a Singapore Company: Contracts, Provident Fund, Labour Codes and Share Plans" },
        ]}
      />

      <GuideHero
        eyebrow="People: hiring in India"
        title="Hiring in India as a Singapore Employer: What Changes from Singapore Practice"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Hiring in India works differently from Singapore: the contract is regulated by statute and state
          rules, provident fund and ESI are mandatory for most employees, gratuity builds after service, and
          notice and termination follow the labour codes, shops and establishment laws and the contract. An
          Indian subsidiary is the usual employer, running payroll with monthly Withholding Tax on salary,
          provident fund and ESI. Singapore teams used to CPF and the Employment Act should plan for more
          statutory components, not fewer.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Employer", "The Indian subsidiary (or an Employer of Record) is the legal employer"],
                ["Contract", "Written appointment letter with role, pay structure, notice and confidentiality; state shops and establishments law applies"],
                ["Provident fund", "Employer and employee contributions through the EPFO for covered establishments and employees"],
                ["ESI", "Health insurance scheme for employees below the wage ceiling, in covered areas"],
                ["Gratuity", "Lump sum after continuous service, payable on exit, with a minimum service period"],
                ["Labour codes", "The four labour codes were reported to be brought into force on 21 November 2025; state rules and transition steps continue"],
                ["Payroll tax", "Withholding Tax on salary under Section 392 of the Income-tax Act, 2025, deposited by the 7th of the following month"],
                ["Equity", "Parent shares or options can be offered; taxed as a perquisite on exercise and capital gains on sale"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Singapore and India side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Singapore practice</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian practice</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Retirement savings", "CPF for citizens and PRs; none for most foreign workers", "EPF for covered employees, with contributions from both sides; Singapore citizens are exempt under CECA"],
                ["Health cover", "MediShield, employer plans", "ESI below a wage ceiling; employer group insurance for others"],
                ["Termination", "Notice per contract; retrenchment benefit by norm and tripartite guidelines", "Notice per contract and state law; retrenchment compensation for covered workers; limits in establishments with larger headcount"],
                ["Probation", "Common", "Common; confirm in writing"],
                ["Bonus", "Contractual", "A statutory bonus applies to eligible employees below a wage ceiling, plus any contractual bonus"],
                ["Leave", "Annual and sick leave per Employment Act", "Statutory leave varies by state; maternity benefit up to 26 weeks for eligible women"],
                ["Workplace harassment", "Workplace Fairness and related laws", "Internal Committee under the POSH Act in establishments with ten or more employees"],
                ["Data on employees", "PDPA", "DPDP Act when the main duties come into force; see the data protection guide"],
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

        <h2 id="pay" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pay structure and cost</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Indian pay is split into basic pay, allowances, employer provident fund, gratuity accrual and benefits. The basic component drives provident fund and gratuity, so the split matters.</li>
          <li>Annual cost to the employer is higher than the headline salary because of contributions, gratuity, insurance and bonus.</li>
          <li>Variable pay is usually paid in cash and taxed in the hands of the employee as salary.</li>
          <li>Equalise offers across cities; the cost of living, the state taxes and the market rates vary a great deal.</li>
        </ul>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The payroll compliance cycle</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Monthly:</strong> deposit Withholding Tax on salary by the 7th, provident fund and ESI by the 15th, and state professional tax where applicable.</li>
          <li><strong>Quarterly:</strong> TDS returns for salary.</li>
          <li><strong>Annual:</strong> employee tax statements, provident fund and ESI returns, bonus and gratuity checks, shops and establishment renewals.</li>
          <li><strong>Registration:</strong> EPFO, ESIC, professional tax and shops and establishment registrations when you cross employee numbers.</li>
        </ul>

        <h2 id="labour-codes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The labour codes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India has consolidated twenty-nine central labour laws into four codes: wages, industrial relations,
          social security and occupational safety. They were reported to have come into force on 21 November
          2025, with rules and state implementation still developing. Singapore HR teams should assume rules for
          wages, overtime, fixed-term employment and gratuity are being updated, and ask the payroll provider
          for a short list of changes each quarter.
        </p>

        <h2 id="share-plans" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Share plans for Indian employees</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Indian-resident employees can receive shares or options of a Singapore parent under the foreign investment rules for residents; reporting and permissions apply.</li>
          <li>On exercise, the difference between fair value and the price paid is taxed as a perquisite in the employee&apos;s salary, and the employer must withhold tax.</li>
          <li>A later sale of the shares is taxed as capital gains. Resident employees must report foreign assets in their Indian return.</li>
          <li>A recharge from the Indian subsidiary to the Singapore parent for share costs should be agreed in writing and priced under transfer pricing rules. See <Link href="/blog/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ul>

        <h2 id="eor" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employer of Record as a first step</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An Employer of Record employs your people on its Indian entity and charges you a fee. It removes the
          registration burden for a pilot. Because the EOR, not you, is the employer, you have less control, and
          if your staff start concluding contracts for the Singapore company, a permanent establishment may
          arise. Move to a subsidiary once you reach a stable headcount.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.iras.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">IRAS</a>,{" "}
          <a href="https://www.acra.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">ACRA</a>{" "}
          and the{" "}
          <a href="https://www.sal.org.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Singapore Academy of Law (apostilles)</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/singapore-to-india/faq"
          seeAllLabel="See all 143 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "EPFO India", href: "https://www.epfindia.gov.in/" },
            { label: "Ministry of Labour and Employment (India)", href: "https://labour.gov.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 21 October 2026. General information only, not legal or tax advice. Indian and Singapore
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Building Your India Team?"
        description="Tell us the roles and headcount, and we'll set up payroll, PF and ESI registration and employment contracts for the subsidiary."
      />
    </main>
  )
}
