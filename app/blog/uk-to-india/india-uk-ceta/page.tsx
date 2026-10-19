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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/india-uk-ceta"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "what-it-is", label: "What CETA is, and how it differs from a tax treaty" },
  { id: "services", label: "Services: where a UK company gains certainty" },
  { id: "people", label: "Moving people: visitors, transferees and the Double Contributions Convention" },
  { id: "unchanged", label: "What CETA does not change" },
  { id: "use-it", label: "How a UK company can use CETA in practice" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does the CETA reduce Indian tax on dividends paid to a UK parent?", a: "No. CETA is a trade agreement. Withholding Tax on dividends, interest, royalties and fees is governed by the Income-tax Act, 2025 and the 1993 India-UK tax treaty, which caps dividends at 10%." },
  { q: "Does the India-UK CETA let a UK company skip Indian incorporation?", a: "No. A UK company that wants to hold property, employ people or contract locally in India still needs an Indian entity (or an approved branch or liaison office) and has to follow FEMA and the FDI Policy." },
  { q: "How long can a UK employee be posted to India under CETA?", a: "As reported, an intra-corporate transferee can be posted for up to three years with limited renewal, and business visitors can stay up to 90 days. Confirm the exact conditions in the official schedule for your sector and role." },
  { q: "Does the CETA protect UK investments in India?", a: "Not directly. The agreement has no investment-protection chapter. India and the UK are negotiating a separate bilateral investment treaty, so investors should rely on contract terms and arbitration for now." },
  { q: "When did the India-UK trade agreement come into force?", a: "On 15 July 2026, the same day as the Double Contributions Convention on social security." },
]

const relatedCards = [
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/blog/uk-to-india/india-uk-dtaa" },
  { title: "UK Employees Working in India: Treaty Relief, Indian Residence and the Double Contributions Convention", desc: "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK employees working in India.", href: "/blog/uk-to-india/uk-employees-in-india-dcc" },
  { title: "Contracts, Courts and Arbitration in India for UK Companies: Enforcing English Judgments and Awards", desc: "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments and arbitral awards in India.", href: "/blog/uk-to-india/contracts-courts-arbitration" },
  { title: "Sending a UK Employee to India: Visa Choice, FRRO Registration, Housing and the Practical Checklist", desc: "How to move a UK employee to India: employment visa or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking, family and the day-count controls.", href: "/blog/uk-to-india/relocate-uk-staff" },
]

export default function IndiaUkCetaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-UK Trade Agreement (CETA): What It Changes, and What It Does Not, for a UK Company Setting Up in India"
        description="What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double Contributions Convention and what stays unchanged."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "India-UK CETA: What the Trade Agreement Changes for UK Companies Entering India" },
        ]}
      />

      <GuideHero
        eyebrow="Trade: the India-UK CETA"
        title="The India-UK Trade Agreement (CETA): What It Changes, and What It Does Not, for a UK Company Setting Up in India"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-UK Comprehensive Economic and Trade Agreement (CETA) has been in force since 15 July 2026,
          together with a Double Contributions Convention on social security. It improves the position of UK
          services firms and of staff sent to India, and it makes trade rules more predictable. It does not
          change how an Indian subsidiary is formed, funded or taxed: the Companies Act, FEMA and FDI Policy,
          and the India-UK tax treaty still decide those.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Agreement", "Comprehensive Economic and Trade Agreement between India and the United Kingdom, signed 24 July 2025"],
                ["In force", "15 July 2026, the same day as the India-UK Double Contributions Convention (signed 10 February 2026)"],
                ["Main benefit for UK service firms", "Binding market-access and fair-treatment commitments across a wide range of services, and defined routes for business visitors, intra-corporate transferees, contractual service suppliers and independent professionals"],
                ["Staff mobility reported", "Business visitors up to 90 days; intra-corporate transferees up to three years with limited renewal"],
                ["Investment protection", "None in this agreement. India and the UK are negotiating a separate bilateral investment treaty"],
                ["Tax", "CETA does not alter income tax. The 1993 India-UK double taxation convention continues to apply"],
                ["Does it change FDI rules?", "No. Sector caps, the Automatic Route and RBI reporting under FEMA continue as before"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what-it-is" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What CETA is, and how it differs from a tax treaty</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A trade agreement and a tax treaty do different jobs. CETA is about market access: tariffs on goods,
          rules for trading services, temporary movement of people, digital trade and dispute settlement between
          the two governments. The tax treaty divides taxing rights over income. A UK company moving into India
          will touch both, but only the tax treaty decides how much Indian tax is withheld on a dividend or a
          service fee.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          CETA&apos;s headline gains run in India&apos;s favour on goods: duty-free entry to the UK for almost
          all Indian exports by value. For a UK company entering India the useful parts are on the services and
          mobility side, which is why this guide concentrates there.
        </p>

        <h2 id="services" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Services: where a UK company gains certainty</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The agreement locks in market access and fair treatment for services suppliers, with schedules of
          commitments that list what each side opens and the limits it keeps. A UK professional-services,
          software, financial or engineering firm should read India&apos;s schedule for its own sector before
          assuming anything: commitments are sector-specific and many carry conditions.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Professional services:</strong> the two governments agreed to identify priority professions within 12 months and to conclude mutual recognition arrangements within 36 months, so qualification recognition is a work in progress rather than a done deal.</li>
          <li><strong>Digital trade:</strong> electronic contracts, signatures and invoices are recognised, personal data is protected, and forced transfer of source code is prohibited, subject to limited exceptions.</li>
          <li><strong>Predictable rules:</strong> new technical regulations are to be shared in advance, normally with a gap of at least six months before they take effect, and administrative decisions can be reviewed or appealed.</li>
        </ul>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Moving people: visitors, transferees and the Double Contributions Convention</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          CETA&apos;s chapter on temporary movement gives UK firms defined categories for sending people to
          India. As reported, business visitors can stay up to 90 days, and an intra-corporate transferee (a
          manager, executive or specialist moved within the same group) can be posted for up to three years with
          limited renewal. Contractual service suppliers and independent professionals have their own
          conditions. The official schedule should be checked for the numbers that apply to your role.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Double Contributions Convention matters just as much. It stops a worker on a temporary assignment
          paying social security in both countries. The Indian government has said the detachment period is up
          to five years. See{" "}
          <Link href="/blog/uk-to-india/uk-employees-in-india-dcc" className="text-blue-800 font-semibold hover:underline">UK employees in India: the tax treaty and the social security convention</Link>{" "}
          for how the exemption is claimed.
        </p>

        <h2 id="unchanged" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What CETA does not change</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Company law and FDI:</strong> a UK company still forms an Indian private limited company under the Companies Act, 2013, and still follows the FDI Policy for its sector. See <Link href="/blog/uk-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">the incorporation guide</Link>.</li>
          <li><strong>FEMA reporting:</strong> Form FC-GPR, the pricing floor and the 60-day allotment rule are unaffected. See <Link href="/blog/uk-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Tax:</strong> Indian subsidiary profits, Withholding Tax, transfer pricing and permanent establishment risk follow Indian law and the 1993 treaty. See <Link href="/blog/uk-to-india/india-uk-dtaa" className="text-blue-800 font-semibold hover:underline">the India-UK tax treaty guide</Link>.</li>
          <li><strong>Investor protection:</strong> there is no investment chapter giving a UK investor treaty claims against India. Contract drafting and arbitration still do that work. See <Link href="/blog/uk-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts, courts and arbitration</Link>.</li>
        </ul>

        <h2 id="use-it" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How a UK company can use CETA in practice</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide whether the Indian operation will <em>deliver services to India</em> (the subsidiary sells locally) or <em>deliver to the UK</em> (a captive team); CETA&apos;s service schedules matter more for the first.</li>
          <li>Check India&apos;s schedule and the UK&apos;s mobility schedule for the exact categories your staff fit, and use them to plan secondments instead of defaulting to a short business visa.</li>
          <li>Put each posting under the right route: business visit for meetings, intra-corporate transfer for group staff, employment visa where the person joins the Indian payroll.</li>
          <li>Ask your payroll provider to obtain a certificate of coverage before the first day of the assignment, so the Double Contributions Convention applies from the start.</li>
          <li>Keep the tax file in step: day counts for the treaty&apos;s permanent establishment and 183-day tests are unaffected by CETA.</li>
        </ol>

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
            { label: "Press Information Bureau: CETA and the social security agreement to enter into force on 15 July 2026", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2274280&reg=48&lang=2" },
            { label: "UK Government: CETA Annex 10A(ii), UK schedule on temporary movement of natural persons", href: "https://assets.publishing.service.gov.uk/media/687f5e68ae8555bab409a0e5/uk-india-ceta-annex-10aii-schedules-of-specific-commitments-on-temporary-movement-of-natural-persons-schedule-of-the-united-kingdom.pdf" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
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
        title="Using CETA to Enter India?"
        description="Tell us what you sell and who you plan to send — we'll map what the India-UK trade agreement changes for your entry plan."
      />
    </main>
  )
}
