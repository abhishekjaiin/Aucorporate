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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/relocate-uk-staff"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "route", label: "Which visa for which role" },
  { id: "landing", label: "Landing: the first month" },
  { id: "tax", label: "Tax, social security and the UK side" },
  { id: "family", label: "Family, housing and cost of living" },
  { id: "controls", label: "Controls for the UK team" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a UK citizen need a visa to work in India?", a: "Yes. A UK citizen working in India needs an appropriate visa, generally an employment visa, and short business visits use a business or e-business visa. Productive work for an Indian company needs a work route." },
  { q: "What is the minimum salary for an Indian employment visa?", a: "Generally USD 25,000 a year, with limited exceptions. The rules and thresholds change, so confirm the current requirement before applying." },
  { q: "When must a UK national register with the FRRO?", a: "Foreigners on long stays are generally required to register within 14 days of arrival if the stay is over 180 days. Check the current rule for the visa category." },
  { q: "Can a UK employee's spouse work in India?", a: "Not on a dependant entry visa. The spouse needs their own work visa or employment route." },
  { q: "Does CETA make it easier to send UK staff to India?", a: "It provides defined routes for intra-corporate transferees, business visitors and others, as reported up to three years for transferees with limited renewal. The practical application depends on the official schedule and Indian visa processing, so plan with your adviser." },
]

const relatedCards = [
  { title: "UK Employees Working in India: Treaty Relief, Indian Residence and the Double Contributions Convention", desc: "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK employees working in India.", href: "/blog/uk-to-india/uk-employees-in-india-dcc" },
  { title: "The India-UK Trade Agreement (CETA): What It Changes, and What It Does Not, for a UK Company Setting Up in India", desc: "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double Contributions Convention and what stays unchanged.", href: "/blog/uk-to-india/india-uk-ceta" },
  { title: "Hiring in India as a UK Employer: How Indian Employment Differs, and What to Put in the Contract", desc: "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees.", href: "/blog/uk-to-india/hiring-in-india" },
  { title: "13 Costly Mistakes UK Companies Make When Setting Up in India", desc: "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.", href: "/blog/uk-to-india/common-mistakes" },
]

export default function RelocateUkStaffPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Sending a UK Employee to India: Visa Choice, FRRO Registration, Housing and the Practical Checklist"
        description="How to move a UK employee to India: employment visa or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking, family and the day-count controls."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Relocating UK Staff to India: Visas, FRRO Registration, Housing and Day-Count Control" },
        ]}
      />

      <GuideHero
        eyebrow="People: relocation"
        title="Sending a UK Employee to India: Visa Choice, FRRO Registration, Housing and the Practical Checklist"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK employee who will work for the Indian subsidiary generally needs an employment visa, and a person
          on a long stay registers with the Foreigners Regional Registration Office (FRRO). Short business trips
          use a business visa. CETA now provides defined routes for intra-corporate transferees, but you should
          still plan the tax and social security position before the move, because visa choice does not decide
          either.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Employment visa", "Generally for foreign nationals earning at least USD 25,000 a year, with limited exceptions"],
                ["Registration", "FRRO registration is required for long stays; the usual rule is within 14 days of arrival for stays over 180 days"],
                ["Short visits", "E-business or business visa for meetings; productive work needs a work route"],
                ["CETA route", "Intra-corporate transferees up to three years with limited renewal, as reported; check the official schedule"],
                ["Dependants", "Entry visas for spouse and children; the spouse cannot work without the right visa"],
                ["Tax", "Day counts drive Indian residence and the treaty; see the employee guide"],
                ["Social security", "Certificate of coverage under the Double Contributions Convention"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="route" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which visa for which role</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Situation</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Likely route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Short visit: meetings, audits, training", "E-business or business visa", "No productive work for an Indian company; track days"],
                ["UK manager running the Indian company on assignment", "Employment visa, or a CETA intra-corporate transfer route where available", "Letter from the Indian company, contract, qualifications"],
                ["Specialist for a defined project", "Employment or project visa", "Check the local-hire alternative; salary and skill conditions apply"],
                ["Director who visits for board meetings", "E-business or business visa", "Not for executive work"],
                ["Founder moving permanently", "Employment visa tied to the Indian company", "Consider residence, tax and long-term status"],
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
          Visa rules, thresholds and processing times change. Confirm the current rules and the CETA schedule
          before applying.
        </p>

        <h2 id="landing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Landing: the first month</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Register with the FRRO on arrival if the stay is long, and update the record when the address changes.</li>
          <li>Sign the lease, registering it where the state requires, and make sure the address is the one on the visa and the FRRO record.</li>
          <li>Open an Indian bank account with the visa, passport and address proof, and obtain a PAN for tax filings.</li>
          <li>Enrol the employee in payroll, provident fund (or record the certificate of coverage) and health cover.</li>
          <li>Set up local mobile, utilities and a UK-India calendar for the first quarter.</li>
        </ol>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax, social security and the UK side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Visa category does not decide tax. The employee&apos;s pay for work in India is taxable there unless
          the treaty exemption applies, Indian residence follows the day tests, and social security depends on
          the certificate of coverage. See{" "}
          <Link href="/blog/uk-to-india/uk-employees-in-india-dcc" className="text-blue-800 font-semibold hover:underline">UK employees in India</Link>.
          The UK side needs its own review: residence under the statutory residence test, payroll treatment and
          pension auto-enrolment.
        </p>

        <h2 id="family" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Family, housing and cost of living</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Spouses and children need entry visas linked to the employee&apos;s visa; check whether schooling needs additional documents.</li>
          <li>Healthcare is paid for privately, so provide international cover; NHS cover does not follow the person.</li>
          <li>Housing in major cities is often leased by the company or reimbursed; the tax treatment of housing benefits needs to be agreed upfront.</li>
          <li>A relocation allowance is usually taxed as salary in India.</li>
        </ul>

        <h2 id="controls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Controls for the UK team</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A written secondment letter stating duties, duration, cost allocation and the home and host employers.</li>
          <li>A day-count log from 1 April with approvals for extra trips.</li>
          <li>A PE check when UK managers visit often, including the 30-day associated-enterprise services test in the treaty.</li>
          <li>Exit planning: what happens to the lease, visa and tax filings at the end of the assignment.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">HMRC</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/companies-house" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies House</a>{" "}
          and the{" "}
          <a href="https://www.gov.uk/get-document-legalised" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">UK legalisation service for apostilles</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/uk-to-india/faq"
          seeAllLabel="See all 122 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Indian Visa Online", href: "https://indianvisaonline.gov.in" },
            { label: "Bureau of Immigration (India): FRRO", href: "https://boi.gov.in" },
            { label: "UK Government: CETA schedule on temporary movement of natural persons", href: "https://assets.publishing.service.gov.uk/media/687f5e68ae8555bab409a0e5/uk-india-ceta-annex-10aii-schedules-of-specific-commitments-on-temporary-movement-of-natural-persons-schedule-of-the-united-kingdom.pdf" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 19 October 2026. General information only, not legal or tax advice. Indian and UK rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending UK Staff to India?"
        description="Tell us who's relocating and for how long — we'll map the visa, FRRO registration, payroll and day-count steps."
      />
    </main>
  )
}
