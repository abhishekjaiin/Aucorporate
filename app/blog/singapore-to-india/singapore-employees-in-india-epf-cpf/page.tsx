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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/singapore-employees-in-india-epf-cpf"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "tax", label: "Income tax on pay: the 183-day test in practice" },
  { id: "residence", label: "Becoming an Indian tax resident" },
  { id: "epf", label: "India: Employees' Provident Fund" },
  { id: "cpf", label: "Singapore: CPF on the assignee" },
  { id: "setup", label: "Setting up an assignment: a short checklist" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Are Singapore citizens exempt from EPF in India?", a: "Yes, under the CECA, as explained by the Singapore Mission in Mumbai and an EPFO circular of 14 March 2017. No form is required, but the employer should keep a copy of the passport." },
  { q: "Do Singapore permanent residents have to pay into India's EPF?", a: "The published exemption speaks only of Singapore citizens. Assume a Singapore PR working in India must contribute as an international worker unless the EPFO confirms otherwise." },
  { q: "Is there a social security agreement between India and Singapore?", a: "No. The CECA exemption for Singapore citizens works by nationality instead of a certificate of coverage." },
  { q: "How many days can a Singapore employee stay in India without Indian tax?", a: "Up to 183 days in the fiscal year, but only if the employer is not Indian and the cost is not borne by an Indian PE. Staying shorter is not enough on its own if the Indian subsidiary pays or recharges the salary." },
  { q: "Does CPF continue for a Singapore citizen posted to India?", a: "It can, depending on who employs the person and the contract terms. Confirm with the CPF Board before the posting begins." },
  { q: "What is the minimum salary for an Indian employment visa?", a: "Generally USD 25,000 a year, with limited exceptions." },
  { q: "Does India tax the pay of a Singapore director of the Indian subsidiary?", a: "Directors' fees are taxable in the state where the paying company is resident, which is India for an Indian subsidiary, even if the director never visits." },
]

const relatedCards = [
  { title: "Relocating Singapore Staff to India: Visa Routes, OCI, Registration and Day-Count Controls", desc: "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin, FRRO registration, residence tests and housing.", href: "/blog/singapore-to-india/relocate-singapore-staff" },
  { title: "Hiring in India as a Singapore Employer: What Changes from Singapore Practice", desc: "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.", href: "/blog/singapore-to-india/hiring-in-india" },
  { title: "The India-Singapore CECA: What the 2005 Agreement Gives a Singapore Company Setting Up in India, and What It Leaves Alone", desc: "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services, people, the EPF exemption and the open review.", href: "/blog/singapore-to-india/india-singapore-ceca" },
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/blog/singapore-to-india/india-singapore-dtaa" },
]

export default function SingaporeEmployeesInIndiaEpfCpfPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Singapore Employees Working in India: What the Tax Treaty, the EPF Exemption and CPF Mean"
        description="How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen exemption, and PR and foreign-national gaps."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Singapore Employees in India: Treaty, EPF Exemption and CPF" },
        ]}
      />

      <GuideHero
        eyebrow="People: tax and social security for assignees"
        title="Singapore Employees Working in India: What the Tax Treaty, the EPF Exemption and CPF Mean"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore employee working in India owes Indian tax on pay for work done there unless the
          treaty&apos;s short-stay exemption applies: 183 days or fewer in the fiscal year, an employer outside
          India, and no cost borne by an Indian PE. For provident fund, Singapore citizens are exempt from
          India&apos;s EPF under the CECA, but Singapore permanent residents and foreign nationals posted from
          Singapore are not covered by that exemption, and India has no social security agreement with
          Singapore. Whether CPF continues depends on who employs the person and their status.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="foreign-employee-treaty-ssa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Treaty rule", "Pay for work done in India is taxable in India, unless the person is in India for 183 days or fewer in the fiscal year, the employer is not Indian, and the cost is not borne by an Indian permanent establishment"],
                ["Indian residence test", "182 days in the financial year, or 60 days plus 365 days in the preceding four years (with extensions for Indian citizens visiting)"],
                ["India EPF", "Singapore citizens exempt under CECA; no registration form needed, passport copy kept on file"],
                ["Singapore PRs and others", "No published exemption; assume EPF as an international worker applies"],
                ["Social security agreement", "None between India and Singapore; the CECA exemption works by nationality, not by a certificate of coverage"],
                ["CPF", "Applies to Singapore citizens and PRs employed by Singapore employers; confirm treatment for overseas postings with the CPF Board"],
                ["Indian visa", "Employment visa for staff on the Indian payroll (salary floor generally USD 25,000); e-Business visa for short visits"],
                ["Registration", "FRRO registration within 14 days of arrival for stays above 180 days"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax on pay: the 183-day test in practice</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India taxes an employee on salary for work done in India. The treaty exempts it only if three
          conditions are all met. The first is a count of physical days in India in the fiscal year (1 April to
          31 March). The second and third relate to who pays and who bears the cost.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Condition</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it means</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Where Singapore groups fail it</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Days", "Present in India for 183 days or fewer in the fiscal year (confirm the measuring period against the consolidated text)", "Long projects that straddle two fiscal years"],
                ["Employer", "Pay is made by, or on behalf of, an employer who is not an Indian resident", "The Indian subsidiary pays salary directly or reimburses it"],
                ["Cost", "Pay is not borne by a PE of the employer in India", "Recharge to the Indian entity for the person's time"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          An Indian subsidiary that bears the cost under a secondment arrangement makes the exemption hard to
          defend, because authorities look at who really directs the work and bears the cost. If the subsidiary
          pays, plan to tax the employee in India from day one and run payroll Withholding Tax on salary under
          Section 392 of the Income-tax Act, 2025.
        </p>

        <h2 id="residence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Becoming an Indian tax resident</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A person is resident in India if present for 182 days or more in the year, or 60 days plus 365 days in the four preceding years. Citizens of India or persons of Indian origin visiting India have different thresholds.</li>
          <li>A resident but not ordinarily resident person is taxed on Indian-source income and on foreign income from a business controlled from India, but not on other foreign income.</li>
          <li>The treaty&apos;s tie-breaker rules decide which country gets to treat the person as resident if both do. In practice the permanent home and centre of vital interests decide.</li>
          <li>Singapore taxes individuals on income arising in or received in Singapore, with foreign-sourced income received by individuals generally exempt. A Singapore tax adviser should confirm the position for each assignee.</li>
        </ul>

        <h2 id="epf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India: Employees&apos; Provident Fund</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Foreign nationals working in covered Indian establishments are international workers and must
          contribute to the EPF from the first day, with no wage ceiling, unless a social security agreement or
          an exemption applies. India has agreements with a number of countries but none with Singapore.
          Instead, the CECA provides an exemption for Singapore citizens, explained by the Singapore Mission in
          Mumbai and reinforced by a circular of the EPFO dated 14 March 2017.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Singapore citizens:</strong> no contribution from employee or employer. Keep a scanned passport copy in the file.</li>
          <li><strong>Singapore PRs:</strong> the published guidance names citizens, so assume EPF applies unless the EPFO confirms otherwise in writing.</li>
          <li><strong>Foreign nationals posted from Singapore (for example Malaysians or Indians with an Employment Pass):</strong> assume EPF applies.</li>
          <li><strong>Refunds:</strong> a Singapore citizen who contributed after 2005 can claim through the employer&apos;s EPF office.</li>
        </ul>

        <h2 id="cpf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Singapore: CPF on the assignee</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Central Provident Fund contributions are mandatory for Singapore citizens and permanent residents
          employed in Singapore. Foreign nationals on Employment Passes do not contribute. For someone posted to
          India, whether CPF continues depends on whether the Singapore entity stays the employer, how the
          contract is written and the length of the posting.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep the Singapore employment contract in place for short assignments so CPF continuity is easy to show.</li>
          <li>If the person is moved onto the Indian payroll, review what happens to CPF accounts, and ask the CPF Board in writing.</li>
          <li>Make sure the tax equalisation policy states which provident fund the employer covers, to avoid a duplicate cost that no one planned.</li>
        </ul>

        <h2 id="setup" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting up an assignment: a short checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Fix the legal employer and the payroll country before the person travels.</li>
          <li>Choose the visa category and apply: employment visa for those on the Indian payroll, e-Business visa for meetings.</li>
          <li>Register with the FRRO within 14 days of arrival if the visa is for longer than 180 days.</li>
          <li>Decide how EPF, CPF and tax equalisation are handled, and write it into the assignment letter.</li>
          <li>Track days in India per person. Do not rely on passport stamps alone; keep a calendar.</li>
          <li>Review the PE risk in <Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link> before sending more than one person for the same project.</li>
          <li>On return, close out the Indian payroll position and file the exit forms.</li>
        </ol>

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
            { label: "Singapore Mission in Mumbai: EPF exemption for Singapore citizens", href: "https://mumbai.mfa.gov.sg/mission-updates/exemption-for-singapore-citizens-contributing-to-indias-employees-provident-fund-organisation/" },
            { label: "CPF Board", href: "https://www.cpf.gov.sg/" },
            { label: "EPFO India", href: "https://www.epfindia.gov.in/" },
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
        title="Seconding Singapore Employees to India?"
        description="Tell us who is moving and who will employ them, and we'll map treaty relief, the EPF position and CPF."
      />
    </main>
  )
}
