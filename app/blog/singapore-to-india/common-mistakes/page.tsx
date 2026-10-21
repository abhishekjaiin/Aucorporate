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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "tax", label: "Tax and treaty" },
  { id: "money", label: "Money and FEMA" },
  { id: "people", label: "People and data" },
  { id: "plan", label: "A short prevention plan" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the most common mistake Singapore companies make in India?", a: "Carrying Singapore assumptions into India: that gains are tax free, that a holding company without staff keeps its treaty benefit, and that Singapore's transfer pricing shortcuts apply." },
  { q: "What happens if I forget the FC-GPR filing?", a: "The filing is late and must be regularised with a late submission fee or compounding. Banks and auditors may also raise questions." },
  { q: "Is the EPF exemption available to Singapore permanent residents?", a: "The published guidance names Singapore citizens only. Assume PRs must contribute unless the EPFO confirms otherwise in writing." },
  { q: "How many days can Singapore staff spend in India before a permanent establishment arises?", a: "In the treaty summaries we checked, services through employees for more than 90 days in a fiscal year, or 30 days for services to an associated enterprise, can create one. Confirm against the treaty text." },
  { q: "Do I need a stamped agreement for the Indian subsidiary?", a: "Yes, to use it as evidence in an Indian court. An unstamped agreement is not void but cannot be used until stamped and any penalty is paid." },
  { q: "What is Press Note 3?", a: "A 2020 FDI policy rule that requires government approval where the beneficial owner of the investor is in, or a citizen of, a country that shares a land border with India. Check the current position as the policy has been under review." },
]

const relatedCards = [
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/blog/singapore-to-india/india-singapore-dtaa" },
  { title: "Using a Singapore Holding Company for Indian Investments: What the Treaty Gives, and What Substance Is Needed to Keep It", desc: "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.", href: "/blog/singapore-to-india/singapore-holdco-for-india" },
  { title: "Funding an Indian Subsidiary from Singapore: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.", href: "/blog/singapore-to-india/funding-and-fema" },
  { title: "Relocating Singapore Staff to India: Visa Routes, OCI, Registration and Day-Count Controls", desc: "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin, FRRO registration, residence tests and housing.", href: "/blog/singapore-to-india/relocate-singapore-staff" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="12 Common Mistakes Singapore Companies Make When Entering India, and How to Avoid Each"
        description="The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "12 Common Mistakes Singapore Companies Make in India (and the Fix for Each)" },
        ]}
      />

      <GuideHero
        eyebrow="Avoid: common mistakes"
        title="12 Common Mistakes Singapore Companies Make When Entering India, and How to Avoid Each"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The mistakes that cost Singapore groups most in India are rarely about incorporation. They are
          assumptions carried over from Singapore: that gains are tax free, that a holding company without staff
          keeps its treaty benefit, that permanent residents share the citizen EPF exemption, or that
          Singapore&apos;s routine mark-up is accepted in India. This page lists twelve and the fix for each.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Number of mistakes", "12"],
                ["Biggest money risks", "Capital gains on shares after 1 April 2017, losing treaty rates without Form 41, shell holding companies"],
                ["Biggest timing risks", "Missing the 60-day allotment and 30-day FC-GPR clocks"],
                ["Biggest people risks", "Services PE after 90 days, EPF for non-citizens, visa category errors"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and treaty</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Assuming Singapore&apos;s lack of capital gains tax follows the shares into India.</strong> India taxes gains on shares acquired on or after 1 April 2017. Model the Indian tax before pricing an exit. See <Link href="/blog/singapore-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.</li>
          <li><strong>Paying without treaty papers.</strong> Without the IRAS residency certificate, Form 41 and declarations, the payer withholds at the domestic rate of about 20% plus surcharge and cess. Apply early and renew yearly. See <Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link>.</li>
          <li><strong>Using a Singapore holding company with no substance.</strong> A company with annual operating spend below SGD 200,000 can be treated as a shell. Build real management and records. See <Link href="/blog/singapore-to-india/singapore-holdco-for-india" className="text-blue-800 font-semibold hover:underline">the holdco guide</Link>.</li>
          <li><strong>Letting Singapore staff stay too long on the same project.</strong> The services PE test is 90 days in a fiscal year, and 30 days for services to an associated enterprise, in the sources we checked. Track days per person.</li>
          <li><strong>Copying Singapore&apos;s routine-services mark-up into India.</strong> India wants its own benchmarking of the Indian entity. See <Link href="/blog/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ol>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Money and FEMA</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Missing the 60-day and 30-day clocks.</strong> Allot shares within 60 days of the money arriving and file Form FC-GPR within 30 days of allotment. See <Link href="/blog/singapore-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Sending capital from the wrong account.</strong> Remit from the investor&apos;s own account and state the purpose. Third party payments can be rejected.</li>
          <li><strong>Leaving agreements unstamped.</strong> An unstamped contract cannot be used as evidence in an Indian court until stamped and any penalty is paid. See <Link href="/blog/singapore-to-india/contracts-courts-siac" className="text-blue-800 font-semibold hover:underline">contracts and arbitration</Link>.</li>
        </ol>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">People and data</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Assuming permanent residents are exempt from EPF.</strong> The published exemption speaks of Singapore citizens. See <Link href="/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" className="text-blue-800 font-semibold hover:underline">the employees guide</Link>.</li>
          <li><strong>Using a business visa for people who work on the Indian payroll.</strong> Choose the visa by activity. See <Link href="/blog/singapore-to-india/relocate-singapore-staff" className="text-blue-800 font-semibold hover:underline">relocating staff</Link>.</li>
          <li><strong>Moving personal data without a transfer agreement.</strong> The PDPA expects comparable protection, and India&apos;s DPDP duties start on 13 May 2027. See <Link href="/blog/singapore-to-india/data-protection-pdpa-dpdp" className="text-blue-800 font-semibold hover:underline">PDPA and DPDP</Link>.</li>
          <li><strong>Ignoring the year-end gap and the land-border ownership check.</strong> A 31 December parent and a 31 March subsidiary need a timetable, and an owner in a land-border country can trigger Press Note 3 approval. See <Link href="/blog/singapore-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>.</li>
        </ol>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A short prevention plan</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Hold a one-hour kick-off with the Singapore finance, legal and HR leads and the Indian adviser.</li>
          <li>Agree owners and dates for the documents, the residency certificate, the funding and the filings.</li>
          <li>Review the treaty papers and the day counts every quarter.</li>
          <li>Run a pre-exit review at least a year before any planned sale.</li>
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "IRAS", href: "https://www.iras.gov.sg/" },
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
        title="Avoid the Usual Traps for Singapore Investors"
        description="Tell us your planned structure and launch date, and we'll flag the issues Singapore parents most often run into in India."
      />
    </main>
  )
}
