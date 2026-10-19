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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/uk-employees-in-india-dcc"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "three-questions", label: "Three questions decide the position" },
  { id: "treaty-test", label: "The Article 16 exemption: when a UK employee is not taxed in India" },
  { id: "residence", label: "Indian residence and what it adds" },
  { id: "dcc", label: "Social security: the India-UK Double Contributions Convention" },
  { id: "structure", label: "Choosing how to send the person: four models" },
  { id: "checklist", label: "Pre-departure checklist for the UK payroll team" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How many days can a UK employee work in India without paying Indian tax?", a: "Under Article 16 of the India-UK treaty, up to 183 days in the Indian tax year (1 April to 31 March), if a UK employer pays, the employer is not resident in India and no Indian entity or Indian permanent establishment bears the cost. Local employment and recharged secondments fail the test." },
  { q: "Do UK employees in India have to pay provident fund?", a: "A foreign national working in an Indian establishment is an international worker and generally contributes to provident fund on full wages, unless an agreement with their home country exempts them. The India-UK Double Contributions Convention, in force from 15 July 2026, exempts a worker on a covered temporary assignment who holds a certificate of coverage." },
  { q: "What is the India-UK Double Contributions Convention?", a: "A social security agreement that stops a worker on a temporary assignment paying social security in both countries. The Indian government has said the detachment period is up to five years. It was signed on 10 February 2026 and took effect on 15 July 2026 with the trade agreement." },
  { q: "When does a UK national become tax resident in India?", a: "By spending 182 days or more in India in an Indian tax year, or 60 days or more in the year plus 365 days or more in the previous four years. Not-ordinarily-resident status can limit Indian tax on foreign income for some people." },
  { q: "Does the UK secondee pay Indian tax if the subsidiary reimburses the UK parent?", a: "Yes in most cases. When the Indian subsidiary bears the cost, the Article 16 exemption fails, so Indian tax applies from the first day of work in India, with a credit in the UK if the person remains UK resident." },
  { q: "Does a UK director of the Indian subsidiary pay tax in India on director fees?", a: "Directors' fees from an Indian company can be taxed in India under Article 17, even if the director is based in the UK. The UK gives a credit for the Indian tax if the fees are also taxable there." },
]

const relatedCards = [
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/blog/uk-to-india/india-uk-dtaa" },
  { title: "Sending a UK Employee to India: Visa Choice, FRRO Registration, Housing and the Practical Checklist", desc: "How to move a UK employee to India: employment visa or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking, family and the day-count controls.", href: "/blog/uk-to-india/relocate-uk-staff" },
  { title: "Hiring in India as a UK Employer: How Indian Employment Differs, and What to Put in the Contract", desc: "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees.", href: "/blog/uk-to-india/hiring-in-india" },
  { title: "The India-UK Trade Agreement (CETA): What It Changes, and What It Does Not, for a UK Company Setting Up in India", desc: "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double Contributions Convention and what stays unchanged.", href: "/blog/uk-to-india/india-uk-ceta" },
]

export default function UkEmployeesInIndiaDccPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="UK Employees Working in India: Treaty Relief, Indian Residence and the Double Contributions Convention"
        description="How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK employees working in India."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "UK Employees in India: Tax Treaty, Residence and the Double Contributions Convention" },
        ]}
      />

      <GuideHero
        eyebrow="People: tax and social security"
        title="UK Employees Working in India: Treaty Relief, Indian Residence and the Double Contributions Convention"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK employee working in India pays Indian income tax on pay for work done there, unless they stay no
          more than 183 days in the Indian tax year, are paid by a UK employer and the Indian subsidiary does
          not bear the cost (Article 16 of the treaty). Social security is separate: since 15 July 2026 the
          India-UK Double Contributions Convention lets a worker on a temporary assignment stay in their home
          scheme, with a certificate of coverage, instead of paying UK National Insurance and Indian provident
          fund together.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="foreign-employee-treaty-ssa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Treaty rule for employees", "Article 16: exempt in India if present no more than 183 days in the fiscal year, employer not resident in India and cost not borne by an Indian PE or fixed base"],
                ["Consultants", "Article 15: taxable in India if in India 90 days or more in the fiscal year or a fixed base is available"],
                ["Directors", "Article 17: directors' fees from an Indian company may be taxed in India"],
                ["Indian tax year", "1 April to 31 March"],
                ["Indian residence tests", "In India 182 days or more in the year; or 60 days or more in the year and 365 days or more in the previous four years (for a UK national who is not of Indian origin)"],
                ["Social security convention", "India-UK Double Contributions Convention, in force 15 July 2026; the Indian government has stated a detachment period of up to five years"],
                ["Proof needed", "A certificate of coverage from the home-country authority before the assignment starts"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="three-questions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three questions decide the position</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Where does the person work and for whom?</strong> If the Indian subsidiary employs or pays them, or recharges the cost, they are taxed like any Indian employee from day one.</li>
          <li><strong>How many days will they spend in India in the Indian tax year (1 April to 31 March)?</strong> Count each day of presence, including weekends and holidays, across the whole year, not per trip.</li>
          <li><strong>Who bears the cost?</strong> The Article 16 exemption fails if the Indian company, or an Indian PE of the UK employer, bears the cost of the pay, even if the UK entity pays it first.</li>
        </ol>

        <h2 id="treaty-test" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Article 16 exemption: when a UK employee is not taxed in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Article 16 of the India-UK treaty exempts pay for work in India when all three conditions hold. That
          fits a UK executive who visits for board meetings or a short project, is paid and costed in the UK,
          and is in India for 183 days or fewer in the year. It does not fit a secondment where the subsidiary
          reimburses the UK parent for the salary, because the cost is then borne by an Indian entity.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Where the exemption does not apply, India taxes the salary at the individual slab rates (up to 30%
          plus surcharge and cess), the Indian employer withholds tax, and the employee files an Indian return.
          The UK then gives a credit for the Indian tax if the person is still UK resident.{" "}
          <strong>Consultants</strong> are tested separately under Article 15: 90 days or more in the fiscal
          year, or a fixed base, brings Indian tax on the related income.
        </p>

        <h2 id="residence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian residence and what it adds</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A UK national becomes resident in India by being there for 182 days or more in the year, or for 60
          days or more in the year and 365 days or more across the previous four years. The second route catches
          repeat visitors. A resident who has been abroad much of the previous decade can be &quot;not
          ordinarily resident&quot;, which limits Indian tax on foreign income. An Indian resident reports
          specified foreign assets in the Indian return, and the treaty&apos;s tie-breaker rules apply if the
          person is also UK resident.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          On the UK side, a person working abroad full-time may fall out of UK residence under the statutory
          residence test if the day counts and work patterns are met, and a UK-based employer still has PAYE
          duties for UK-source work. Both tests should be modelled before the move, with the UK tax adviser
          confirming the UK position.
        </p>

        <h2 id="dcc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Social security: the India-UK Double Contributions Convention</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Without a social security agreement, a UK employee in India could owe National Insurance in the UK and
          provident fund in India on the same pay. Provident fund is the larger worry: a foreign national
          working in an Indian establishment is an &quot;international worker&quot; and contributes on full
          wages, with no cap, unless an agreement exempts them.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>What it does:</strong> a worker temporarily detached by an employer in one country stays in that country&apos;s scheme and is exempt from contributions in the other for the covered period. The convention is reciprocal, though most public commentary describes Indian staff in the UK.</li>
          <li><strong>How long:</strong> the Indian government has said the detachment period is up to five years. Early commentary also cites 36 months, so confirm against the convention text and the certificate before you plan.</li>
          <li><strong>What you need:</strong> a certificate of coverage from the home authority, obtained before the assignment, and kept with the payroll file.</li>
          <li><strong>What it does not do:</strong> it covers contributions only. It does not create new pension rights, it does not cover a person hired locally by the Indian subsidiary, and it does not remove Indian income tax.</li>
          <li><strong>UK side:</strong> UK National Insurance normally continues for a limited period for an employee sent abroad by a UK employer, and the convention extends the time. Ask HMRC or your payroll adviser for the current application route.</li>
        </ul>

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing how to send the person: four models</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who pays</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax result</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Social security</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Short business visit", "UK employer", "Usually exempt (Article 16) if under 183 days and no recharge", "Stays in the UK", "Meetings, audits, training"],
                ["Secondment recharged to the subsidiary", "Indian subsidiary reimburses the UK parent", "Taxable in India from day one", "Certificate of coverage under the convention", "Senior managers who run the subsidiary"],
                ["Local employment contract", "Indian subsidiary", "Taxable in India", "Provident fund unless a certificate applies", "Long-term relocation"],
                ["Split contract", "Both", "Indian tax on the India part", "Needs a clear split of duties and hours", "Roles that stay half in the UK"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                  <td className="border border-gray-300 p-3">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          Whichever model is used, record the duties, the days and the cost allocation in a written secondment
          or services agreement. Time spent by UK staff on services to the subsidiary also feeds the permanent
          establishment tests: see{" "}
          <Link href="/blog/uk-to-india/india-uk-dtaa" className="text-blue-800 font-semibold hover:underline">the India-UK tax treaty guide</Link>.
        </p>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pre-departure checklist for the UK payroll team</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Fix the Indian employment visa, registration and start date: see <Link href="/blog/uk-to-india/relocate-uk-staff" className="text-blue-800 font-semibold hover:underline">relocating UK staff</Link>.</li>
          <li>Apply for the certificate of coverage before the first working day in India.</li>
          <li>Decide on tax equalisation or a shadow payroll if the UK parent will protect the employee from extra Indian tax.</li>
          <li>Open a day-count log that runs from 1 April, per person and per project.</li>
          <li>Tell the Indian payroll team whether Article 16 or a certificate of coverage is being claimed, and give them the evidence.</li>
          <li>Review UK payroll, pension auto-enrolment and benefits treatment for the period abroad.</li>
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
            { label: "Press Information Bureau: CETA and the Double Contributions Convention", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2274280&reg=48&lang=2" },
            { label: "UK Government: exchange of letters on the Double Contributions Convention (TS 52.2025)", href: "https://assets.publishing.service.gov.uk/media/68b1c240b0a373a01819fc7e/TS_52.2025_Exchange_of_Letters_Double_Contributions_Convention_India_Trade_Agreement.pdf" },
            { label: "HMRC: India-UK tax convention, synthesised text", href: "https://www.gov.uk/government/publications/india-tax-treaties/2020-uk-india-synthesised-text-of-the-multilateral-instrument-and-the-1993-double-taxation-convention-in-force" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
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
        title="Posting UK Employees to India?"
        description="Tell us who is going, for how long and who pays them — we'll map the Article 16 day-count, certificate of coverage and payroll position."
      />
    </main>
  )
}
