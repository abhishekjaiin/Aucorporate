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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/india-australia-dtaa"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "what", label: "What the DTAA does and does not do" },
  { id: "how-to-read", label: "How to read this guide: India as the source state, Australia as the residence state" },
  { id: "rates", label: "Tax rates under the DTAA, article by article (India as source state)" },
  { id: "art-1-3", label: "Articles 1 to 3: who and what the treaty covers" },
  { id: "residence", label: "Article 4: residence, beneficial ownership and the principal purpose test" },
  { id: "pe", label: "Article 5: permanent establishment (PE) in India" },
  { id: "art-6-9", label: "Articles 6 to 9: property, business profits, shipping and associated enterprises" },
  { id: "art-10-12", label: "Articles 10 to 12: dividends, interest and royalties (passive income)" },
  { id: "gains", label: "Article 13: capital gains when the parent sells the subsidiary or other assets" },
  { id: "art-14-21", label: "Articles 14 to 21: people, directors and employees" },
  { id: "art-22-23", label: "Articles 22 and 23: other income and source of income" },
  { id: "relief", label: "Articles 24 and 24A: relief from double tax and non-discrimination" },
  { id: "disputes", label: "Articles 25 to 26A: disputes, information and tax collection" },
  { id: "art-27-29", label: "Articles 27 to 29 and the Multilateral Instrument: diplomats, entry into force and termination" },
  { id: "claim", label: "How to claim treaty benefits, step by step" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India have a tax treaty with Australia?", a: "Yes. India and Australia have a double taxation avoidance agreement (DTAA), signed on 25 July 1991 and in force from 30 December 1991. It was amended by the 2011 Protocol, which India notified on 20 September 2013." },
  { q: "What are the India-Australia DTAA withholding rates?", a: "The India-Australia DTAA caps Indian withholding at 15% on dividends, 15% on interest, and 15% on royalties and fees for services that make technical knowledge available, with 10% for equipment royalties. The domestic rate for non-residents is 20% plus surcharge and cess. The treaty rate applies only with an ATO certificate of residency and Form 41 (previously Form 10F)." },
  { q: "Is dividend income from an Indian subsidiary taxed again in Australia?", a: "Dividends from a wholly owned Indian subsidiary are generally exempt in Australia for a company with a direct voting interest of at least 10% (section 768-5, Income Tax Assessment Act 1997). The 15% Indian Withholding Tax is therefore usually a final cost, and no foreign income tax offset is available for it." },
  { q: "How does an Australian company get a certificate of residency?", a: "The Australian Taxation Office issues it. Companies use the certificate of residency request form for non-individuals (NAT 75442), and the certificate confirms residency for a specific period. Ask for the period that covers the payments, and renew it as needed." },
  { q: "What is Form 41 and why is it needed?", a: "Form 41 (previously Form 10F) is the electronic statement of the non-resident payee’s details that supports a claim for treaty benefits, filed with the Indian payer or on the Indian tax portal. It is given together with the certificate of residency before the first payment." },
  { q: "What is the principal purpose test in the India-Australia treaty?", a: "The principal purpose test comes from the Multilateral Instrument, which both countries have signed. It can deny a treaty benefit where obtaining it was one of the principal purposes of an arrangement, unless granting it is in line with the treaty’s object. A commercially genuine parent-subsidiary relationship is normally outside its concern." },
  { q: "Are fees for technical services taxed in India under the treaty?", a: "Under Article 12, fees for services that make technical knowledge, experience, skill, know-how or processes available to the payer are taxed at up to 15% in India. Other service fees are business profits, taxable in India only if the Australian parent has a permanent establishment there. The facts of each service decide which applies." },
  { q: "How many days of service in India create a permanent establishment under the DTAA?", a: "Under Article 5 as amended in 2013, services furnished through employees or other personnel create a permanent establishment if the activities continue for the same or a connected project for more than 183 days in any 12-month period. A construction or installation project creates one after more than 6 months, and substantial equipment after more than 183 days." },
  { q: "How is tax on the sale of shares in an Indian subsidiary treated under the DTAA?", a: "India taxes the gain on shares of an Indian company under domestic law, with a long-term rate of 12.5% for unlisted shares held more than 24 months, and the treaty preserves this right. Australia can reduce the parent’s capital gain under the participation exemption where the parent held at least 10% and the company has an active business. Plan the exit with both advisers." },
  { q: "How does Australia give relief for Indian tax?", a: "Australia gives a foreign income tax offset (Division 770 of the Income Tax Assessment Act 1997) for Indian tax on income that is assessable in Australia, up to a cap. Dividends that are exempt in Australia do not qualify. India gives a credit for Australian tax limited to the Indian tax attributable to the income." },
  { q: "What is the Mutual Agreement Procedure under the India-Australia treaty?", a: "Under Article 25, a taxpayer taxed in a way that does not follow the treaty can ask the competent authorities of India and Australia to resolve it. The case must be presented within three years of the first notification of the action." },
  { q: "Did the 2011 Protocol change the India-Australia treaty?", a: "Yes. The protocol, notified in India on 20 September 2013, changed the services and equipment permanent establishment tests in Article 5, the business profits article, the exchange of information article, and added non-discrimination (Article 24A) and assistance in tax collection (Article 26A)." },
  { q: "Which country taxes what under the India-Australia DTAA?", a: "India, as the source state, can tax income that arises in India, within the treaty caps: dividends and interest at up to 15%, royalties and technical fees at up to 15% (10% for equipment), and business profits only if there is a permanent establishment. Australia, as the residence state, taxes the Australian company on its worldwide income and gives relief for the Indian tax by exemption (most dividends) or a foreign income tax offset." },
  { q: "How many days create a permanent establishment under the India-Australia treaty?", a: "Services furnished in India through employees for the same or a connected project create a PE after more than 183 days in any 12-month period. A building site or construction, installation or assembly project creates one after more than 6 months, substantial equipment after more than 183 days, and natural resources activities after more than 90 days." },
  { q: "Does a subsidiary create a permanent establishment for its Australian parent?", a: "Not by itself. Article 5(7) says that control of a subsidiary, or being controlled by one, does not make either company a permanent establishment of the other. A PE can still arise if the subsidiary acts as a dependent agent that habitually concludes contracts for the parent, or if the parent has its own fixed place or staff in India above the thresholds." },
  { q: "What is the royalty rate under the India-Australia DTAA?", a: "Up to 10% for royalties for the use of industrial, commercial or scientific equipment and ancillary services, and up to 15% for other royalties, including fees for services that make technical knowledge available. Service fees where no knowledge is made available are business profits and are not taxable in India without a permanent establishment." },
  { q: "Is interest paid to an Australian parent taxed in India?", a: "Yes. India may tax interest on a loan from the Australian parent at up to 15% of the gross amount under Article 11, against the higher domestic rate. The parent needs its ATO certificate of residency and Form 41, and the interest must be at arm's length. Australia taxes the interest and gives a foreign income tax offset for the Indian tax." },
  { q: "Which article of the India-Australia DTAA covers capital gains?", a: "Article 13. India may tax gains on Indian immovable property, business property of an Indian PE and shares of an Indian company, including the subsidiary, as the state where the company is resident. Each country otherwise applies its own law, and Australia can reduce the gain on a sale of a foreign subsidiary through the CGT participation exemption." },
  { q: "Does the India-Australia DTAA cover employees and directors?", a: "Yes. Article 15 covers employees (salary for work in India is exempt in India for a short visit of up to 183 days if the employer is Australian and no Indian entity bears the cost), Article 14 covers independent consultants, and Article 16 lets India tax directors fees paid by an Indian company. See the guide on treaty and social security for foreign employees." },
  { q: "Is there a limitation on benefits clause in the India-Australia treaty?", a: "No separate clause. Instead the principal purpose test from the Multilateral Instrument, which both countries have signed, denies a treaty benefit where obtaining it was one of the principal purposes of an arrangement, unless granting it is in line with the purpose of the treaty." },
  { q: "Can either country end the India-Australia DTAA?", a: "Yes. The treaty has no end date, but either country can end it by written notice given on or before 30 June in any calendar year, effective from 1 July (Australia) or 1 April (India) of the following year." },
  { q: "Is Australian GST or Indian GST covered by the India-Australia DTAA?", a: "No. Article 2 covers income taxes only. Indian GST, Australian GST and stamp duty follow domestic law." },
]

const relatedCards = [
  { title: "The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies", desc: "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/australia-to-india/dtaa-pe-risk" },
  { title: "Repatriating Profits to Australia: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/australia-to-india/repatriating-profits" },
  { title: "Treaty and Social Security for Australian Employees in India: Article 15 and the Social Security Agreement", desc: "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day rule, Indian tax residency, certificates of coverage, provident fund and superannuation.", href: "/blog/australia-to-india/foreign-employee-treaty-ssa" },
  { title: "Australian Parent Obligations When You Own an Indian Subsidiary", desc: "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets, transfer pricing and thin capitalisation. A guide for Australian finance teams.", href: "/blog/australia-to-india/australian-parent-obligations" },
]

export default function IndiaAustraliaDtaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Australia DTAA: Article-by-Article Guide for Australian Companies"
        description="The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence state: tax rates table, permanent establishment, business profits, dividends, interest, royalties, capital gains, employees, relief, MAP and how to claim treaty benefits."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: the India-Australia DTAA"
        title="The India-Australia DTAA: Article-by-Article Guide for Australian Companies"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Australia DTAA (signed 25 July 1991, amended by the 2011 Protocol) gives India, as the
          source state, the right to tax dividends and interest at up to 15%, royalties and technical fees at up
          to 15% (10% for equipment), and business profits only if the Australian company has a permanent
          establishment in India. Australia, as the residence state, taxes the same income and gives relief by
          credit or exemption. To claim the treaty, the Australian company needs an ATO certificate of residency
          and Form 41, and it must pass the principal purpose test.
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
                ["Treaty", "Agreement between India and Australia for the avoidance of double taxation and the prevention of fiscal evasion"],
                ["Signed and in force", "Signed 25 July 1991; in force from 30 December 1991 on exchange of notes. Amended by the 2011 Protocol, notified in India on 20 September 2013 (Notification 74/2013)"],
                ["What changed in 2013", "Services and substantial equipment permanent establishment tests (Article 5), business profits (Article 7), non-discrimination (Article 24A), exchange of information (Article 26) and assistance in tax collection (Article 26A)"],
                ["Withholding rates", "Dividends 15%; interest 15%; royalties and technical fees 15% (10% for equipment)"],
                ["Domestic rate for comparison", "20% plus surcharge and cess on dividends, interest, royalties and fees paid to a non-resident"],
                ["Claimed with", "ATO certificate of residency (form NAT 75442 for companies), Form 41 (previously Form 10F) and a no-PE declaration where asked"],
                ["Anti-avoidance", "The principal purpose test of the Multilateral Instrument applies to treaty benefits where both countries have listed the agreement"],
                ["Disputes", "Mutual Agreement Procedure (Article 25): present the case within three years of the first notification of the action"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the DTAA does and does not do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A double taxation avoidance agreement (DTAA) divides taxing rights between India and Australia so the
          same income is not fully taxed twice. It does not reduce Indian tax on the Indian subsidiary&apos;s
          own profit, which is taxed as a domestic company. It affects what happens when money, services or
          people cross the border: payments from the subsidiary to the parent, the parent&apos;s own presence in
          India, and the pay of individuals who work in both countries.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty does not apply by itself. The payer in India applies the lower treaty rate only if the
          Australian recipient is a resident of Australia, is the beneficial owner of the income and gives the
          required documents. If the documents are missing, the higher domestic rate is deducted.
        </p>

        <h2 id="how-to-read" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to read this guide: India as the source state, Australia as the residence state</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every treaty article is written from two points of view: the <strong>source state</strong>, where the
          income arises or the activity takes place, and the <strong>residence state</strong>, where the person
          receiving it lives or is incorporated. This guide takes the point of view of an Australian company
          with a subsidiary, branch or personnel in India. So:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>India is the source (contracting) state.</strong> It taxes what arises in India: the subsidiary&apos;s dividends, interest, royalties and fees paid to the parent, profits of any Indian permanent establishment, gains on Indian shares and the pay of employees who work in India.</li>
          <li><strong>Australia is the residence state.</strong> The parent is taxed on its worldwide income in Australia and receives relief for the Indian tax, either by exemption (most dividends) or by a foreign income tax offset.</li>
          <li>The treaty never gives India more than its domestic law; it only limits it. India&apos;s tax is the lower of the Income-tax Act rate and the treaty rate.</li>
          <li>The Indian subsidiary is a separate Indian resident company. The treaty does not reduce tax on its own profit; Articles 5, 7 and 9 matter when the parent itself, or its people, create a taxable presence, or when the two companies deal with each other.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Where an article also affects individuals, we link to the guide on{" "}
          <Link href="/blog/australia-to-india/foreign-employee-treaty-ssa" className="text-blue-800 font-semibold hover:underline">treaty and social security for foreign employees</Link>.
        </p>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax rates under the DTAA, article by article (India as source state)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This table lists each income article, what India may do as the source state, the treaty cap, and what
          Australia, as the residence state, does with the income. “Domestic law” means the rate in India&apos;s
          Income-tax Act, 2025, which applies when the treaty gives India the right to tax without a cap.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Article</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Income or activity</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India as source state</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate or limit</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Australia as residence state</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["6", "Income from immovable property in India (rent, resource payments)", "May tax", "No cap; domestic law applies", "Taxed in Australia with a credit for Indian tax"],
                ["7", "Business profits of the Australian company", "May tax only the profits attributable to a permanent establishment in India", "Foreign company rate under domestic law (35% plus surcharge and cess); no tax without a PE", "Taxed in Australia with a credit for the Indian tax"],
                ["8", "Profits from ships and aircraft in international traffic", "Cannot tax, unless operations are confined to places in India", "Nil", "Taxed only in Australia"],
                ["9", "Associated enterprises (parent and subsidiary pricing)", "May adjust profits to arm's length", "Arm's length; corresponding adjustment in Australia", "Gives a corresponding adjustment or uses MAP"],
                ["10", "Dividends from the Indian subsidiary", "May tax", "15% of the gross dividend", "Generally exempt for a company with 10% or more of voting power (s 768-5)"],
                ["11", "Interest on loans to the Indian subsidiary", "May tax", "15% of the gross interest", "Assessable; foreign income tax offset for the Indian tax"],
                ["12", "Royalties for equipment, and ancillary services", "May tax", "10% of the gross amount", "Assessable; foreign income tax offset"],
                ["12", "Other royalties, and fees for services that make technical knowledge available", "May tax", "15% of the gross amount (the transitional 20% rate for private payers ended after the first five years)", "Assessable; foreign income tax offset"],
                ["7 (not 12)", "Other service fees where no knowledge is made available", "Cannot tax without a PE", "Nil without a PE", "Assessable in Australia"],
                ["13", "Gains on Indian immovable property", "May tax", "Domestic law", "Credit for Indian tax"],
                ["13", "Gains on shares of an Indian company (including the subsidiary)", "May tax as the state where the company is resident", "Domestic law (long-term unlisted shares 12.5%; short-term at normal rates)", "Taxed under Australian CGT; participation exemption may reduce the gain (Subdivision 768-G)"],
                ["14", "Independent personal services (consultants)", "May tax only if a fixed base is regularly available in India, or the person is in India for 183 days or more in the year", "Domestic law on the attributable income", "Taxed in Australia with a credit"],
                ["15", "Salary of employees working in India", "May tax, unless the 183-day exemption applies", "Exempt if present 183 days or fewer, the employer is Australian and no Indian entity bears the cost; otherwise slab rates", "Taxed in Australia; credit for Indian tax"],
                ["16", "Directors' fees from an Indian company", "May tax (the paying company is resident in India)", "Domestic law", "Credit for Indian tax"],
                ["17", "Entertainers and sportspersons", "May tax where the performance is in India", "Domestic law", "Credit for Indian tax"],
                ["18", "Pensions and annuities", "Cannot tax", "Nil", "Taxed only in Australia"],
                ["19", "Government service", "Taxes pay from the Indian government, with exceptions", "Domestic law", "Taxed in Australia where India does not tax"],
                ["20", "Visiting professors and teachers", "Exempts remuneration for up to two years", "Nil for up to two years", "Taxed in Australia"],
                ["21", "Students and trainees", "Exempts maintenance and education payments from outside India", "Nil", "Taxed in Australia"],
                ["22", "Income not covered elsewhere", "May tax income arising in India", "Domestic law", "Credit for Indian tax"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-4 text-sm text-gray-700">
          Rates are the treaty caps in the text as amended by the 2011 Protocol. Surcharge and cess are added
          only to the domestic rate; confirm the position for each payment with your Indian and Australian
          advisers. The Income-tax Act, 2025 applies from 1 April 2026 (Section 393 replaces Section 195 for
          Withholding Tax).
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Treaty rate against domestic rate for payments to the Australian parent</strong>
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Payment</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Domestic rate (non-resident)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Example: payment of ₹1 crore (about A$151,000)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividend", "20% plus surcharge and cess", "15%", "Treaty withholding ₹15 lakh (about A$22,700)"],
                ["Interest", "20% plus surcharge and cess (lower rates can apply to eligible external commercial borrowings)", "15%", "Treaty withholding ₹15 lakh"],
                ["Royalty, other than equipment", "20% plus surcharge and cess", "15%", "Treaty withholding ₹15 lakh"],
                ["Royalty for equipment", "20% plus surcharge and cess", "10%", "Treaty withholding ₹10 lakh (about A$15,100)"],
                ["Fees for technical services (knowledge made available)", "20% plus surcharge and cess", "15%", "Treaty withholding ₹15 lakh"],
                ["Service fees (no knowledge made available, no PE)", "Depends on the nature of the fee", "Nil; not taxable in India", "No Indian tax, but transfer pricing and GST still apply"],
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
          Exchange rate used: ₹66.19 per Australian dollar on 14 October 2026.
        </div>

        <h2 id="art-1-3" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 1 to 3: who and what the treaty covers</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 1, personal scope:</strong> the treaty applies to persons who are residents of India, Australia or both. An Australian company must be an Australian resident to use it.</li>
          <li><strong>Article 2, taxes covered:</strong> for Australia, income tax and the resource rent tax on offshore petroleum projects; for India, income tax including any surcharge, and similar later taxes. It does not cover Indian or Australian GST or stamp duty, which follow domestic law.</li>
          <li><strong>Article 3, general definitions:</strong> defines India and Australia (including the territorial sea and maritime zones where they have sovereign rights), “person”, “company”, “enterprise” and the competent authorities: the Commissioner of Taxation for Australia and the Central Government (Ministry of Finance, Department of Revenue) for India. Penalties and interest are not “tax” for treaty purposes.</li>
        </ul>

        <h2 id="residence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Article 4: residence, beneficial ownership and the principal purpose test</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Only a resident of Australia can claim the treaty against India. The ATO certificate of residency is
          the evidence. It confirms residency for a specific period, so it must cover the payment dates. The
          company must also be the beneficial owner of the income. A conduit that passes the income on does not
          qualify.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          If a company is a resident of both countries, the original tie-breaker was the place of effective
          management. Under the Multilateral Instrument (MLI) the two tax authorities now try to agree the
          residence of a dual-resident company by mutual agreement, looking at factors such as the place of
          effective management and incorporation. If they cannot agree, treaty relief may be unavailable. For
          individuals the order is permanent home, centre of vital interests, habitual abode and then
          nationality.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty has no separate limitation-on-benefits article. Instead the MLI&apos;s{" "}
          <strong>principal purpose test</strong> denies a treaty benefit where obtaining it was one of the
          principal purposes of an arrangement, unless granting it is in line with the object and purpose of the
          treaty. A parent that lends to its own subsidiary or licenses IP for real commercial reasons is
          normally fine; a holding company inserted mainly to access the treaty is the case to avoid.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Article 5: permanent establishment (PE) in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A permanent establishment is a taxable presence. If the Australian company has a PE in India, India
          may tax the profits attributable to it (Article 7). If it does not, India cannot tax the
          company&apos;s business profits, however much it sells into India. The 2011 Protocol widened the
          services test, so this article matters more than before.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Type of PE</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Test in Article 5</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Threshold</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it means for an Australian company</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fixed place of business", "A fixed place through which the business is wholly or partly carried on (place of management, branch, office, factory, workshop, mine, well or quarry)", "No time limit; it must be a real, fixed place at the company's disposal", "A branch office, a project office or a home office used by your staff can qualify"],
                ["Building site, construction, installation or assembly project", "Article 5(2)", "More than 6 months", "Splitting a contract to stay under the limit is caught by the MLI"],
                ["Services PE", "Services furnished in India through employees or other personnel, for the same or a connected project", "More than 183 days in any 12-month period (2011 Protocol)", "Count the days of all staff on the same or connected project, not each person separately"],
                ["Natural resources", "Exploration or exploitation of natural resources", "More than 90 days in any 12-month period", "Mainly relevant to mining and energy"],
                ["Substantial equipment", "Operating substantial equipment in India", "More than 183 days in any 12-month period", "Applies to leased or operated machinery and plant"],
                ["Dependent agent", "A person in India, other than an independent agent, who habitually concludes contracts or secures orders for the company", "Habitual; no day count", "A salesperson, distributor or even the subsidiary that negotiates and signs for you can create a PE"],
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

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>What does not create a PE</strong>
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Using facilities only to store, display or deliver goods, keeping a stock only for processing by another, or purchasing goods or collecting information, where the activity is preparatory or auxiliary. The MLI stops a company splitting one business across several small activities to use this exclusion.</li>
          <li>Using an <strong>independent agent</strong>, such as a broker acting in the ordinary course of its own business.</li>
          <li><strong>Owning or controlling a subsidiary.</strong> Article 5(7) says that a subsidiary is not a PE of its parent just because of control or share ownership. This is why a separate Indian company is the usual structure.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Practical checks for an Australian parent</strong>
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Keep a day-count of staff time in India by project, and review it before the 150-day mark.</li>
          <li>Do not let the parent&apos;s employees negotiate or sign contracts in India that bind the parent.</li>
          <li>Keep the subsidiary&apos;s services to the group at arm&apos;s length, documented by a written agreement and a transfer pricing study.</li>
          <li>If a PE arises, India taxes the profits attributable to it at the foreign-company rate and the parent files an Indian return.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See{" "}
          <Link href="/blog/australia-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">tax treaty and PE risk</Link>{" "}
          for how to manage this in practice.
        </p>

        <h2 id="art-6-9" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 6 to 9: property, business profits, shipping and associated enterprises</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 6, immovable property:</strong> income from land and buildings in India, including rent and payments for extracting natural resources, may be taxed in India. There is no treaty cap.</li>
          <li><strong>Article 7, business profits:</strong> the Australian company&apos;s business profits are taxable in India only to the extent they are attributable to an Indian PE. The profits of the PE are worked out as if it were a separate enterprise dealing at arm&apos;s length, with a deduction for expenses incurred for the PE, including a fair share of head office and general administrative costs. No profit is attributed to a PE for merely purchasing goods. The method must be applied consistently from year to year. Profits of a PE are taxed in India at the foreign-company rate under domestic law.</li>
          <li><strong>Article 8, ships and aircraft:</strong> profits from international shipping and air transport are taxable only in the country of residence, unless the operations are confined to places in the other country.</li>
          <li><strong>Article 9, associated enterprises:</strong> where the conditions between a parent and its subsidiary differ from arm&apos;s length, India may adjust the subsidiary&apos;s profit. Where India makes the adjustment, Australia should make a corresponding adjustment to avoid double tax, and the competent authorities can consult if they disagree. See <Link href="/blog/australia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ul>

        <h2 id="art-10-12" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 10 to 12: dividends, interest and royalties (passive income)</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Article 10, dividends:</strong> India may tax a dividend paid by the Indian subsidiary to its Australian parent at up to 15% of the gross amount. The cap does not apply where the shares are effectively connected with an Indian PE; the dividend is then business income. Where the company paying the dividend is not resident in India, India cannot tax the dividend merely because the recipient has a presence in India, unless the shares are effectively connected with that presence.</li>
          <li><strong>Article 11, interest:</strong> India may tax interest paid by the subsidiary on a loan from the parent at up to 15% of the gross amount. Interest connected with an Indian PE is business income. Where a special relationship between the parties makes the interest higher than arm&apos;s length, the treaty rate applies only to the arm&apos;s length part and the rest is taxed under domestic law.</li>
          <li><strong>Article 12, royalties:</strong> India may tax royalties at up to 10% where they are for the use of industrial, commercial or scientific equipment (or ancillary services), and at up to 15% for other royalties (a transitional 20% rate for payments by private companies applied only in the first five years of the treaty and has long ended). “Royalties” are widely defined: they cover IP, know-how, film and broadcast rights, equipment rental and also <strong>fees for technical services that make technical knowledge, experience, skill, know-how or processes available</strong> to the payer. Services ancillary to a sale, teaching, and services for personal use are excluded. Payments that are not within the definition are business profits under Article 7 and are not taxable in India without a PE.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          These caps apply to the gross amount paid; there is no deduction for expenses. The Indian payer
          deducts Withholding Tax under Section 393 of the Income-tax Act, 2025 at the treaty rate if the
          Australian recipient provides its residency certificate and Form 41. See{" "}
          <Link href="/blog/australia-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.
        </p>

        <h2 id="gains" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Article 13: capital gains when the parent sells the subsidiary or other assets</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Asset sold</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Which state may tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">In practice</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Immovable property in India", "India, as the state where it is situated", "Taxed under Indian domestic law; Australia gives a credit"],
                ["Business property of an Indian PE", "India, as the PE state", "Part of the PE profits"],
                ["Ships and aircraft in international traffic", "Only the residence state (Australia)", "No Indian tax"],
                ["Shares that derive their value mainly from Indian immovable property", "India", "Taxable in India; the MLI looks back over the 365 days before the sale"],
                ["Shares in the Indian subsidiary (other shares)", "India, as the state where the company is resident, and Australia under its own law", "India taxes the gain: long-term gains on unlisted shares held more than 24 months at 12.5% (plus surcharge and cess), and short-term at normal rates"],
                ["Other gains", "Domestic law of each country", "Check each case"],
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
          The Australian parent then deals with the sale in its own return. The capital gain on shares in a
          foreign company can be reduced where the parent held at least 10% and the company carries on an active
          business (the CGT participation exemption in Subdivision 768-G of the Income Tax Assessment Act 1997),
          and the Indian tax can be offset. Plan an exit with both advisers before signing. See{" "}
          <Link href="/blog/australia-to-india/restructuring-and-exit" className="text-blue-800 font-semibold hover:underline">restructuring and exit</Link>.
        </p>

        <h2 id="art-14-21" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 14 to 21: people, directors and employees</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Article 14, independent personal services:</strong> a consultant or professional resident in Australia is taxed only in Australia unless they have a fixed base regularly available in India, or are in India for 183 days or more in the year. Then India may tax the income attributable to the fixed base or the work done there.</li>
          <li><strong>Article 15, dependent personal services (employees):</strong> salary for work done in India is taxable in India. It is exempt in India if all three conditions are met: the employee is in India for 183 days or fewer in the year, the employer is not a resident of India, and the cost is not borne by an Indian PE or fixed base. An Australian employee on a short visit paid and charged by an Australian employer can qualify; an employee seconded to the Indian subsidiary and recharged to it usually cannot. Crew of ships and aircraft are taxed in the country of residence.</li>
          <li><strong>Article 16, directors&apos; fees:</strong> fees paid by an Indian company to an Australian resident director may be taxed in India, because the paying company is resident there.</li>
          <li><strong>Article 17, entertainers and sportspersons:</strong> income from performances in India may be taxed in India, even where it is paid to another person. There is an exception where the activity is substantially funded by the other government.</li>
          <li><strong>Article 18, pensions and annuities:</strong> taxable only in the country of residence, which is Australia.</li>
          <li><strong>Article 19, government service:</strong> pay for government work is taxable in the paying country, with exceptions for residents who are local nationals or did not move solely for the work.</li>
          <li><strong>Article 20, professors and teachers:</strong> remuneration for teaching or research in India is exempt in India for visits of up to two years.</li>
          <li><strong>Article 21, students and trainees:</strong> maintenance, education and training payments sent from outside India are not taxed in India.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          The 183-day rule, Indian tax residency and the social security agreement are explained in{" "}
          <Link href="/blog/australia-to-india/foreign-employee-treaty-ssa" className="text-blue-800 font-semibold hover:underline">treaty and social security for foreign employees</Link>.
        </p>

        <h2 id="art-22-23" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 22 and 23: other income and source of income</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 22, income not expressly mentioned:</strong> income that no other article deals with, such as a gift or a prize, is taxed in the country of residence. Where the income arises in the other country, that country may also tax it, and the country of residence then gives relief. Income connected with a PE or fixed base falls under Article 7 or 14.</li>
          <li><strong>Article 23, source of income:</strong> income that the treaty allows India to tax is treated as having its source in India for the purposes of Australia&apos;s credit rules, so the Indian tax can be claimed as an offset.</li>
        </ul>

        <h2 id="relief" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 24 and 24A: relief from double tax and non-discrimination</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Article 24, relief.</strong> Australia, as the residence state, allows a credit for Indian tax
          on income that India may tax under the treaty. This is applied through the foreign income tax offset
          rules (Division 770 of the Income Tax Assessment Act 1997), up to a cap. For an Australian company
          with at least 10% of the voting power in an Indian company, the credit extends to the underlying
          Indian tax on dividends. In practice, dividends from a wholly owned Indian subsidiary are exempt in
          Australia (section 768-5), so there is no credit and the Indian withholding tax is a cost. Interest,
          royalties and fees are assessable in Australia, and the Indian tax is offset up to the cap. The treaty
          also contained a tax-sparing rule for specified Indian incentives and low-taxed interest for the first
          ten years, which is now spent. India, when it is the residence state, gives a credit for Australian
          tax limited to the Indian tax on the same income.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Article 24A, non-discrimination (added in 2011).</strong> Neither country may tax nationals of
          the other, or a permanent establishment of the other&apos;s enterprise, or enterprises owned by the
          other&apos;s residents, more heavily than its own. Payments to residents of the other country must be
          deductible on the same terms as payments to residents. It does not override anti-avoidance rules, and
          it covers all taxes.
        </p>

        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 25 to 26A: disputes, information and tax collection</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 25, mutual agreement procedure (MAP):</strong> if you are taxed in a way that does not follow the treaty, present the case to the competent authority of your country of residence within three years of the first notification of the action. The two authorities try to resolve the case, and an agreed solution applies despite domestic time limits.</li>
          <li><strong>Article 26, exchange of information:</strong> the tax authorities exchange information that is foreseeably relevant to the treaty and to domestic tax law. A request cannot be refused only because the information is held by a bank or relates to ownership, so inconsistent positions in India and Australia will be visible.</li>
          <li><strong>Article 26A, assistance in tax collection (2011):</strong> each country can help collect the other&apos;s tax debts and can take protective steps. Proceedings to challenge the debt are available only in the country that raised it.</li>
        </ul>

        <h2 id="art-27-29" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 27 to 29 and the Multilateral Instrument: diplomats, entry into force and termination</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 27:</strong> diplomatic and consular officials keep their fiscal privileges under international law.</li>
          <li><strong>Article 28, entry into force:</strong> the treaty was signed on 25 July 1991 and entered into force on 30 December 1991. In Australia it applies to withholding taxes from 1 July, and to other taxes for income years starting on or after 1 July, of the following year; in India it applies to years starting on or after 1 April of the following year. The 2011 Protocol was notified in India on 20 September 2013 (Notification 74/2013).</li>
          <li><strong>Article 29, termination:</strong> the treaty has no end date. Either country may end it by notice given on or before 30 June in any calendar year after the fifth year from entry into force, taking effect from 1 July (Australia) or 1 April (India) of the next year.</li>
          <li><strong>The MLI:</strong> both countries are parties to the Multilateral Instrument, which has modified the treaty for withholding taxes from 1 January 2020 and for other taxes for tax years beginning on or after 1 April 2020. It added the principal purpose test, the anti-fragmentation PE rules, the 365-day look-back for shares deriving value from property, and MAP changes.</li>
        </ul>

        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to claim treaty benefits, step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Request the certificate of residency from the ATO (form NAT 75442) for the period of the payments.</li>
          <li>Prepare Form 41 (previously Form 10F) with the residency details and give it to the Indian payer.</li>
          <li>Give a no-PE declaration and evidence of beneficial ownership if the payer or the tax officer asks.</li>
          <li>The Indian subsidiary computes Withholding Tax at the treaty rate and records the documents on file.</li>
          <li>Where required, a Chartered Accountant certifies the payment in Form 146 (previously Form 15CB) and the company files Form 145 (previously Form 15CA).</li>
          <li>The parent keeps the Withholding Tax certificate for its Australian return.</li>
        </ol>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Dividends from the Indian subsidiary are generally exempt in Australia, so budget for 15% Indian tax as a cost of repatriation and compare it with other routes, such as service fees and royalties, which must be priced at arm&apos;s length and are assessable in Australia.</li>
          <li>Renew the ATO certificate of residency for each period in which payments are made.</li>
          <li>Make sure the parent that receives the payment is the Australian entity named on the certificate and in the agreement.</li>
          <li>Track staff days in India, and avoid contract authority in India, to keep the parent out of a PE.</li>
          <li>Plan an exit with both advisers, using Article 13 and the participation exemption.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming the treaty rate applies without the certificate of residency and Form 41.</li>
          <li>Using a certificate that does not cover the payment date.</li>
          <li>Routing payments through an intermediate company without substance.</li>
          <li>Treating all service fees as taxable at the treaty royalty rate when many are not taxable in India without a PE.</li>
          <li>Ignoring the Australian result of the Indian tax.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We confirm the rate for each payment, collect the treaty documents, prepare Form 145 and 146 and
          coordinate with your Australian tax adviser.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
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
            { label: "Income Tax Department (India): India-Australia agreement", href: "https://www.incometax.gov.in" },
            { label: "Australian Taxation Office: certificate of residency", href: "https://www.ato.gov.au/certificateofresidency" },
            { label: "Australian Treasury", href: "https://treasury.gov.au/" },
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
        title="Claiming India-Australia Treaty Benefits?"
        description="Tell us the payments flowing between India and Australia — we'll confirm the treaty rates, Form 41 and certificate of residency you need."
      />
    </main>
  )
}
