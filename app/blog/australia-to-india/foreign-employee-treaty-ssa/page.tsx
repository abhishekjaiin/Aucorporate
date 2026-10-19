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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/foreign-employee-treaty-ssa"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "two", label: "Two treaties, two different questions" },
  { id: "article15", label: "Income tax: Article 15 and the 183-day rule" },
  { id: "au-side", label: "The Australian side for the employee" },
  { id: "ssa", label: "Social security: the India-Australia Social Security Agreement" },
  { id: "coc", label: "How to get a certificate of coverage" },
  { id: "nococ", label: "What happens without a certificate" },
  { id: "reverse", label: "Indian employees sent to Australia" },
  { id: "pe-link", label: "Permanent establishment and the 183-day service test" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a social security agreement between India and Australia?", a: "Yes. The India-Australia Social Security Agreement came into force on 1 January 2016. It prevents double coverage for employees on temporary assignment, with a certificate of coverage valid for up to five years, and it protects pension rights across the two countries." },
  { q: "Do Australian employees in India have to contribute to provident fund?", a: "Not if their Australian employer holds a certificate of coverage for a temporary assignment under the Social Security Agreement. Without one, an international worker in India contributes to provident fund on full wages with no wage ceiling." },
  { q: "Who issues the certificate of coverage for an Australian employee going to India?", a: "The Australian Taxation Office issues it to the Australian employer, which applies for it before or as the assignment starts. The Indian subsidiary keeps a copy to show that the employee is excluded from provident fund." },
  { q: "How long does a certificate of coverage last?", a: "Up to five years from the assignment date. An extension is possible if both countries’ authorities agree, so diarise the end date and ask in good time." },
  { q: "Can an employee who takes a job with the Indian subsidiary get a certificate of coverage?", a: "No. The agreement covers an employee who is sent on a temporary assignment by the Australian employer and remains employed by it. An employee who takes a new job with the Indian company, or who is self-employed, is not eligible." },
  { q: "What does Article 15 of the India-Australia DTAA say?", a: "Article 15 says employment income is taxed in the country of residence unless the work is done in the other country. It exempts the other country’s tax if the employee is present for no more than 183 days in the year of income, the employer is not resident in that country and the cost is not borne by a permanent establishment there." },
  { q: "Does the 183-day rule apply per calendar year or per Indian tax year?", a: "Article 15 refers to the year of income of the country where the work is done, so for work in India the count is made over the Indian tax year, 1 April to 31 March, not the calendar year. Keep a day-count that follows the Indian year." },
  { q: "Does an Australian employee seconded to the Indian subsidiary pay Indian tax?", a: "Usually yes for the work done in India. The Article 15 exemption is available only for short visits where the employer is Australian and no Indian entity bears the cost. If the Indian subsidiary is the economic employer or bears the salary, the exemption is likely to be denied." },
  { q: "What is an excluded international worker in India?", a: "An international worker from a country that has a social security agreement with India and who holds a valid certificate of coverage from that country is excluded from the Indian provident fund for the covered period." },
  { q: "Do directors’ fees get the 183-day exemption?", a: "No. Article 16 allows India to tax fees paid to a member of the board of directors of a company resident in India, whatever the number of days spent in India." },
  { q: "Can an Australian employee claim Indian tax paid against Australian tax?", a: "Yes, generally. An Australian resident can claim a foreign income tax offset for Indian tax paid on Indian-source income that is assessable in Australia (Division 770 of the Income Tax Assessment Act 1997), up to a cap. Confirm the position with an Australian tax adviser." },
  { q: "What happens to the provident fund when an Australian employee leaves India?", a: "For members covered by the agreement, the Employees’ Provident Fund Organisation rules allow withdrawal of the balance on leaving employment in an EPF-covered establishment. Confirm the withdrawal procedure and tax treatment at the time." },
  { q: "Are Indian employees sent to Australia covered by the same agreement?", a: "Yes. An Indian employer can obtain a certificate of coverage through the EPFO’s international worker process so that the employee stays in the Indian provident fund scheme and the employer is exempt from Australian superannuation guarantee for up to five years." },
]

const relatedCards = [
  { title: "Sending an Australian Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/australia-to-india/expat-visa" },
  { title: "Hiring and Payroll in India for Australian Companies: Contracts, PF, ESI and Gratuity", desc: "How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/australia-to-india/hiring-and-payroll" },
  { title: "The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies", desc: "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/australia-to-india/dtaa-pe-risk" },
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies.", href: "/blog/australia-to-india/eor-vs-subsidiary" },
]

export default function ForeignEmployeeTreatySsaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Treaty and Social Security for Australian Employees in India: Article 15 and the Social Security Agreement"
        description="How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day rule, Indian tax residency, certificates of coverage, provident fund and superannuation."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA" },
        ]}
      />

      <GuideHero
        eyebrow="People: treaties for employees"
        title="Treaty and Social Security for Australian Employees in India: Article 15 and the Social Security Agreement"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Two treaties decide how an Australian employee in India is taxed and which pension scheme applies.
          Article 15 of the India-Australia DTAA can exempt Indian tax on a short visit of up to 183 days in the
          Indian tax year if an Australian employer pays and no Indian entity bears the cost. The
          India-Australia Social Security Agreement, in force since 1 January 2016, lets the ATO issue a
          certificate of coverage for assignments of up to five years, so the employee stays in Australian
          superannuation and out of Indian provident fund.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Income tax treaty", "India-Australia DTAA, Article 15 (dependent personal services) and Article 16 (directors’ fees)"],
                ["183-day rule", "Employment income for work in India is exempt from Indian tax if the employee is in India for no more than 183 days in the Indian tax year, the employer is not resident in India, and the pay is not borne by a permanent establishment in India"],
                ["Social security treaty", "India-Australia Social Security Agreement, in force since 1 January 2016, covering Indian provident fund and pension and Australian superannuation guarantee"],
                ["Detachment period", "Up to five years on a certificate of coverage, with extension possible if both authorities agree"],
                ["Certificate of coverage", "Issued by the home-country authority; for Australian employers, the ATO. The employee must be on a temporary assignment from the Australian employer"],
                ["Without a certificate", "Provident fund applies to an international worker in India on full wages, with no wage ceiling"],
                ["Indian tax residency", "182 days or more in the tax year, or 60 days in the year and 365 days in the preceding four years"],
                ["Registration", "Foreigners staying more than 180 days register with the FRRO within 14 days of arrival"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="two" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two treaties, two different questions</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax treaty (DTAA)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Social Security Agreement (SSA)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Question it answers", "Which country taxes the salary", "Which country’s pension scheme the employee and employer contribute to"],
                ["Main provision", "Article 15: 183-day rule for dependent personal services", "Detached worker rule: stay in the home scheme for a temporary assignment of up to five years"],
                ["Document needed", "Proof of residency (ATO certificate), employment terms, day count", "Certificate of coverage from the home-country authority (ATO for Australian employers)"],
                ["Effect", "No Indian income tax on a qualifying short visit; Indian tax applies from day one on a local employment", "No Indian provident fund for the covered period; Australian superannuation guarantee continues"],
                ["Applies to", "Individuals who are residents of Australia", "Employees on temporary assignment from an Australian employer"],
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
          They are independent. An employee can meet the 183-day rule and still need a certificate of coverage,
          or the reverse. Plan both before the assignment starts.
        </p>

        <h2 id="article15" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax: Article 15 and the 183-day rule</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India taxes income earned for work done in India. Article 15 of the India-Australia DTAA relieves that
          tax for a short visit if all three conditions are met: the employee is in India for no more than 183
          days in the Indian tax year (1 April to 31 March), the pay comes from an employer that is not a
          resident of India, and the cost is not borne by a permanent establishment the employer has in India.
          If any condition fails, India taxes the salary for the work done there.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Scenario</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Likely Indian tax result</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Australian employee hired locally by the Indian subsidiary", "Taxable in India from the first day; the Article 15 exemption is not available because the employer is resident in India"],
                ["Australian employee visits for meetings and stays under 183 days, paid and cost-borne by the Australian parent", "Generally not taxable in India under Article 15, if the Indian entity does not bear the cost"],
                ["Secondee stays under 183 days but the Indian subsidiary reimburses or recharges the salary", "Indian tax authorities may treat the Indian subsidiary as the economic employer and deny the exemption; a contested area, so structure and document it carefully"],
                ["Stay over 183 days in the Indian tax year", "Taxable in India for work done in India"],
                ["Director’s fees from the Indian subsidiary", "Article 16 allows India to tax fees paid to a director of a company resident in India, whatever the days"],
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
          Whether other income is also taxed in India depends on Indian tax residency. A foreigner who becomes
          resident but is not ordinarily resident in India is generally taxed in India only on Indian income and
          on foreign income from a business or profession controlled from India. Your Australian and Indian
          advisers should model each individual.
        </p>

        <h2 id="au-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Australian side for the employee</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Australia taxes its residents on worldwide income. An Australian resident employee working in India
          pays Indian tax on the Indian-source salary and claims a foreign income tax offset for it in Australia
          (Division 770 of the Income Tax Assessment Act 1997), up to a cap. An employee who ceases to be an
          Australian resident is taxed in Australia only on Australian-source income. Residency depends on the
          facts, not the visa, so confirm each person’s position with an Australian tax adviser before the
          assignment.
        </p>

        <h2 id="ssa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Social security: the India-Australia Social Security Agreement</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India has a social security agreement with Australia that came into force on 1 January 2016. Its
          purpose is to stop double coverage, where an employer pays Australian superannuation and Indian
          provident fund for the same person at the same time, and to protect pension rights for people who work
          in both countries.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Australian employee on temporary assignment to India:</strong> with a certificate of coverage, the employer keeps paying superannuation guarantee in Australia and is exempt from Indian provident fund for the covered period.</li>
          <li><strong>Indian employee on temporary assignment to Australia:</strong> with an Indian certificate of coverage from the EPFO, the employer keeps paying Indian provident fund and the employee is exempt from Australian superannuation guarantee.</li>
          <li><strong>Maximum period:</strong> five years, with extension possible if both authorities agree.</li>
          <li><strong>Pensions:</strong> the agreement allows periods of coverage in both countries to be counted and benefits to be paid across borders.</li>
          <li><strong>Who is eligible:</strong> the employee must be sent on a temporary assignment by the Australian employer. Someone who takes a new job with the Indian company, or who is self-employed, is not eligible.</li>
        </ul>

        <h2 id="coc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to get a certificate of coverage</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm that the assignment is temporary, the employee is accepted by the employer for it, and the employee remains employed by the Australian company.</li>
          <li>The Australian employer applies to the ATO for the certificate of coverage before the assignment starts (or as soon as possible after).</li>
          <li>Give a copy of the certificate to the Indian subsidiary and keep it on the payroll file.</li>
          <li>The Indian subsidiary records the employee as an excluded international worker and does not deduct provident fund for the covered period.</li>
          <li>Diarise the end date and apply for an extension in time if the assignment will run beyond the covered period.</li>
        </ol>

        <h2 id="nococ" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens without a certificate</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An international worker in India who is not covered by a certificate is covered by the provident fund
          scheme, and contributions are payable on full salary with no wage ceiling. The Australian employer may
          also have superannuation guarantee duties under Australian law, so the employee can be covered twice.
          For members covered by the agreement, the EPFO rules allow withdrawal of the provident fund balance on
          leaving employment in India. Confirm the withdrawal rules and the tax treatment at the time.
        </p>

        <h2 id="reverse" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian employees sent to Australia</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The same two treaties work in reverse for Indian employees seconded to the Australian parent. A short
          visit can be exempt from Australian tax if the Australian side of Article 15 is met (183 days in an
          income year, a non-resident employer, no Australian permanent establishment bearing the cost). For
          provident fund, the Indian employer applies through the EPFO&apos;s international worker process for a
          certificate of coverage, which keeps the employee in the Indian scheme and out of Australian
          superannuation guarantee for up to five years. Australian visa and tax-residency rules still apply,
          and your Australian adviser should confirm them.
        </p>

        <h2 id="pe-link" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment and the 183-day service test</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Employee days in India are also the main trigger for a services permanent establishment of the
          Australian parent under Article 5 (more than 183 days in any 12-month period for the same or a
          connected project). Keep one day-count per person that covers both tests: the Article 15 test is per
          Indian tax year, while the Article 5 test is per rolling 12-month period. See{" "}
          <Link href="/blog/australia-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">tax treaty and PE risk</Link>.
        </p>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Decide for each person whether they are a local hire in India or an assignee of the Australian parent. The tax and pension results are very different. See <Link href="/blog/australia-to-india/expat-visa" className="text-blue-800 font-semibold hover:underline">sending an executive to India</Link>.</li>
          <li>Apply for the certificate of coverage before the assignment starts, and keep the day-count for Article 15 and Article 5 from the first day.</li>
          <li>If the Indian subsidiary will bear the salary cost, document the recharge in a secondment agreement and include it in transfer pricing. See <Link href="/blog/australia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Relying on the 183-day rule when the Indian subsidiary bears the salary cost.</li>
          <li>Sending an employee without a certificate of coverage and paying provident fund on full wages as well as superannuation.</li>
          <li>Not tracking days in India per person, which decides tax residency and the permanent establishment position.</li>
          <li>Treating a local hire as an assignee, or the reverse.</li>
          <li>Missing the FRRO registration for a stay over 180 days.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We handle visas, FRRO registration, payroll, provident fund and Indian tax filings for foreign
          employees, and coordinate the certificate of coverage and day-count with your Australian adviser.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>{" "}
          ·{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ato.gov.au/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Australian Taxation Office</a>{" "}
          and{" "}
          <a href="https://www.dfat.gov.au/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Department of Foreign Affairs and Trade</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/blog/australia-to-india/faq" seeAllCount={266} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Employees’ Provident Fund Organisation: international workers", href: "https://www.epfindia.gov.in" },
            { label: "Australian Taxation Office: certificate of coverage", href: "https://www.ato.gov.au/" },
            { label: "Income Tax Department (India)", href: "https://www.incometax.gov.in" },
            { label: "Foreigners Regional Registration Office (FRRO)", href: "https://indianfrro.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 15 October 2026. General information only, not legal or tax advice. Indian and Australian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Posting Australian Employees to India?"
        description="Tell us who is going, for how long and who pays them — we'll map the Article 15 day-count, certificate of coverage and payroll position."
      />
    </main>
  )
}
