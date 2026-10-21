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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/relocate-singapore-staff"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "routes", label: "Choosing the visa route" },
  { id: "oci", label: "OCI for people of Indian origin" },
  { id: "frro", label: "Registration and paperwork on arrival" },
  { id: "tax", label: "Tax and day-count controls" },
  { id: "life", label: "Housing, banking and family" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What visa does a Singapore employee need to work in India?", a: "An employment visa, sponsored by the Indian entity, with a general salary floor of USD 25,000 a year. Short meetings can use an e-Business visa. People of Indian origin with a foreign passport can use an OCI card." },
  { q: "Can a Singaporean of Indian origin work in India without a visa?", a: "Yes, if they hold an Overseas Citizen of India card, which gives lifelong multiple-entry and work rights without an employment visa." },
  { q: "When must a foreign employee register with the FRRO?", a: "Within 14 days of arrival if the visa is for a stay of more than 180 days." },
  { q: "Can a spouse work in India on a dependant visa?", a: "An entry (X) visa gives limited work rights. A spouse who wants to work normally needs their own employment visa." },
  { q: "How do I stop a Singapore manager creating a permanent establishment in India?", a: "Track days per person, keep contract-making authority in the right entity, and check the treaty thresholds for services staff: more than 90 days, or 30 days for services to an associated enterprise." },
  { q: "Does an OCI card holder pay Indian tax as a resident?", a: "That depends on days in India. Different thresholds apply to persons of Indian origin, including a 120-day test where Indian income exceeds ₹15 lakh." },
]

const relatedCards = [
  { title: "Singapore Employees Working in India: What the Tax Treaty, the EPF Exemption and CPF Mean", desc: "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen exemption, and PR and foreign-national gaps.", href: "/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" },
  { title: "Hiring in India as a Singapore Employer: What Changes from Singapore Practice", desc: "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.", href: "/blog/singapore-to-india/hiring-in-india" },
  { title: "The India-Singapore CECA: What the 2005 Agreement Gives a Singapore Company Setting Up in India, and What It Leaves Alone", desc: "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services, people, the EPF exemption and the open review.", href: "/blog/singapore-to-india/india-singapore-ceca" },
  { title: "12 Common Mistakes Singapore Companies Make When Entering India, and How to Avoid Each", desc: "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps.", href: "/blog/singapore-to-india/common-mistakes" },
]

export default function RelocateSingaporeStaffPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Relocating Singapore Staff to India: Visa Routes, OCI, Registration and Day-Count Controls"
        description="How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin, FRRO registration, residence tests and housing."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Relocating Singapore Staff to India: Visas, OCI, FRRO and Day-Count Controls" },
        ]}
      />

      <GuideHero
        eyebrow="People: relocation"
        title="Relocating Singapore Staff to India: Visa Routes, OCI, Registration and Day-Count Controls"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Singapore staff can enter India on an e-Business visa for short meetings, but anyone who joins the
          Indian payroll or works there for a long period needs an employment visa, with a general salary floor
          of USD 25,000 a year. People of Indian origin who hold a foreign passport can apply for an Overseas
          Citizen of India card, which lets them live and work in India without a visa. Everyone staying more
          than 180 days registers with the FRRO within 14 days of arrival, and every assignment needs a day
          count to protect the tax position.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Short visits", "e-Business visa for meetings, contract talks and similar; not for employment"],
                ["Employment visa", "For work in India; salary generally at least USD 25,000 a year, with limited exceptions; sponsor is the Indian entity"],
                ["OCI card", "For foreign citizens of Indian origin and their spouses; lifelong stay and work rights without a visa"],
                ["Dependants", "Entry (X) visa for the spouse and children of an employment visa holder"],
                ["Registration", "FRRO registration within 14 days of arrival for stays of more than 180 days"],
                ["Tax residence", "182 days in the financial year, or 60 days plus 365 days in the preceding four years; different thresholds apply to Indian citizens and persons of Indian origin visiting India"],
                ["Social security", "Singapore citizens are exempt from EPF under CECA; see the employees guide"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the visa route</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who sponsors</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Meetings, negotiations, site visits", "e-Business visa", "Self or inviting company", "No work on the Indian payroll; check permitted activities"],
                ["Transfer of a manager or specialist to the Indian entity", "Employment visa", "Indian subsidiary", "Salary floor, qualifications and experience tests"],
                ["Short technical assignment", "Employment visa or business visa depending on the task", "Indian entity", "Installation and maintenance have their own rules"],
                ["Singapore national of Indian origin", "OCI card", "None", "Allows long stays and work; treated as a non-resident for FEMA"],
                ["Spouse and children", "Entry (X) visa", "The employee", "Linked to the main visa; work rights are limited"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Check the activity, not the label.</strong> Immigration officers look at what the person
          actually does. A business visa holder who works on the Indian payroll risks refusal at the next entry
          and penalties for the employer.
        </div>

        <h2 id="oci" className="text-2xl font-bold text-gray-900 mt-12 mb-4">OCI for people of Indian origin</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Many Singapore professionals are of Indian origin and hold Singapore citizenship or permanent
          residence. A foreign citizen who was eligible to be an Indian citizen, or whose parents or
          grandparents were, can apply for an Overseas Citizen of India card, with exclusions for citizens of
          certain countries. The card gives lifelong multiple-entry rights, no need for an employment visa, and
          no FRRO registration for each stay. The holder is still subject to Indian tax based on days present
          and to the rules for foreign exchange, where an OCI card holder is treated broadly like a non-resident
          Indian.
        </p>

        <h2 id="frro" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Registration and paperwork on arrival</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Obtain the visa and enter India; keep the appointment letter and the Indian entity&apos;s sponsorship papers.</li>
          <li>Register with the Foreigners Regional Registration Office within 14 days of arrival if the visa is for more than 180 days.</li>
          <li>Open a bank account through the employer; the bank checks the passport, visa and address.</li>
          <li>Obtain a PAN and register for payroll with the employer.</li>
          <li>Update the address at the FRRO if the person moves.</li>
          <li>Before departure, close out the payroll position and the bank account, and collect the tax statement.</li>
        </ol>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and day-count controls</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep a daily log of days in India for every assignee, including weekends and short trips back to Singapore.</li>
          <li>Watch the treaty exemption for employees: 183 days or fewer, a non-Indian employer and no cost borne by an Indian PE. See <Link href="/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" className="text-blue-800 font-semibold hover:underline">the employees guide</Link>.</li>
          <li>Indian citizens and persons of Indian origin visiting India face a 120-day test where their Indian income exceeds ₹15 lakh, so a long stay by an OCI card holder can make them tax resident sooner.</li>
          <li>Agree a tax equalisation policy: who bears Indian tax, and whether the person is taxed as if in Singapore.</li>
          <li>Review the PE risk when more than one person is in India on the same project. See <Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link>.</li>
        </ul>

        <h2 id="life" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Housing, banking and family</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Allow time for a rental agreement, police verification and utilities, which vary by city.</li>
          <li>Check schooling and medical cover before accepting the posting.</li>
          <li>Plan the banking: Indian salary in an Indian account, with remittances home through the banking channel.</li>
          <li>Agree a travel policy for home leave and for the first six months, when the person will make many trips.</li>
        </ul>

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
            { label: "Indian Visa Online", href: "https://indianvisaonline.gov.in/" },
            { label: "Bureau of Immigration, India (FRRO)", href: "https://boi.gov.in/" },
            { label: "OCI services, Government of India", href: "https://ociservices.gov.in/" },
            { label: "Singapore Mission in Mumbai: EPF exemption for Singapore citizens", href: "https://mumbai.mfa.gov.sg/mission-updates/exemption-for-singapore-citizens-contributing-to-indias-employees-provident-fund-organisation/" },
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
        title="Moving Singapore Staff to India?"
        description="Tell us who is relocating and for how long, and we'll map the visa or OCI route, FRRO registration and day-count controls."
      />
    </main>
  )
}
