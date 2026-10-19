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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/india-uk-dtaa"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "frame", label: "The frame: India is the source state, the UK is the residence state" },
  { id: "rates", label: "Tax rates under the treaty, article by article" },
  { id: "scope", label: "Articles 1 to 4: scope, taxes covered, definitions and residence" },
  { id: "pe", label: "Article 5: permanent establishment (PE) in India" },
  { id: "profits", label: "Articles 6 to 10: property, business profits, shipping and associated enterprises" },
  { id: "passive", label: "Articles 11 to 13: dividends, interest, royalties and fees" },
  { id: "gains", label: "Article 14: capital gains when the parent sells the subsidiary" },
  { id: "people", label: "Articles 15 to 22: people, directors and employees" },
  { id: "relief", label: "Articles 23 to 24 and 26: other income, relief and non-discrimination" },
  { id: "disputes", label: "Articles 27 to 28C: disputes, information and collection" },
  { id: "final", label: "Articles 29 to 31: diplomats, entry into force and termination" },
  { id: "claim", label: "How to claim treaty benefits, step by step" },
  { id: "uk-parent", label: "What this means for a UK parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the withholding tax on dividends under the India-UK DTAA?", a: "Article 11 caps Indian tax on a dividend paid to a UK company at 10% of the gross amount, or 15% for certain property investment vehicles. The domestic rate for non-residents is 20% plus surcharge and cess, so the treaty rate is lower where the documents are in place." },
  { q: "How many days in India create a permanent establishment under the India-UK DTAA?", a: "Services furnished through employees create a PE after more than 90 days in any 12 months, and services to an associated enterprise after more than 30 days in any 12 months. Building and construction projects create one after more than 6 months." },
  { q: "What is the royalty and fees for technical services rate under the India-UK treaty?", a: "Article 13 allows India to tax them at up to 15%, or 10% for equipment royalties and ancillary services. A fee only counts as a technical-services fee if it makes technical knowledge, skill or know-how available to the payer." },
  { q: "Does the UK tax dividends from an Indian subsidiary?", a: "Generally not. A UK company parent is normally exempt on dividends from a subsidiary under the distribution exemption in Part 9A of the Corporation Tax Act 2009, subject to the conditions, so the 10% Indian withholding is usually the final tax." },
  { q: "Does the India-UK treaty cap capital gains tax on selling the Indian subsidiary?", a: "No. Article 14 leaves each country to tax capital gains under its own law, so India taxes the gain under the Income-tax Act, 2025. The UK substantial shareholding exemption can make the gain exempt in the UK." },
  { q: "Is there a limitation on benefits article in the India-UK treaty?", a: "There is no separate article. The Multilateral Instrument's principal purpose test now applies, and it can deny a treaty benefit if obtaining it was one of the principal purposes of an arrangement." },
  { q: "How does a UK company get a certificate of residence?", a: "It asks HMRC, which issues a certificate confirming UK residence for a stated period. The certificate, with Form 41, goes to the Indian payer before the first payment at the treaty rate." },
]

const relatedCards = [
  { title: "UK Employees Working in India: Treaty Relief, Indian Residence and the Double Contributions Convention", desc: "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK employees working in India.", href: "/blog/uk-to-india/uk-employees-in-india-dcc" },
  { title: "Getting Money Out of India: How a UK Parent Receives Dividends, Service Fees, Royalties and Loan Repayments", desc: "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.", href: "/blog/uk-to-india/repatriating-profits" },
  { title: "Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK", desc: "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime.", href: "/blog/uk-to-india/transfer-pricing" },
  { title: "What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary", desc: "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.", href: "/blog/uk-to-india/uk-parent-reporting" },
]

export default function IndiaUkDtaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State"
        description="The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "India-UK DTAA: Article-by-Article Guide to the Tax Treaty for UK Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: the India-UK DTAA"
        title="The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Under the India-UK double taxation convention (signed 25 January 1993), India, as the source state,
          may tax a dividend paid to a UK parent at up to 10%, interest at up to 15% (10% for banks), and
          royalties and technical fees at up to 15% (10% for equipment). It taxes the parent&apos;s business
          profits only if the parent has a permanent establishment in India, and the 90-day services test is far
          shorter than in many treaties. The UK, as the residence state, taxes the parent and gives relief, and
          most dividends are exempt under its distribution exemption.
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
                ["Treaty", "Convention between the UK and India for the avoidance of double taxation and the prevention of fiscal evasion with respect to taxes on income and capital gains (1993)"],
                ["Signed", "25 January 1993; given effect in the UK by the Double Taxation Relief (Taxes on Income) (India) Order 1993 (SI 1993/1801)"],
                ["Modified by", "The Multilateral Instrument (MLI): the principal purpose test, anti-fragmentation PE rules and MAP changes. In effect for withholding taxes from 1 January 2020 (UK) and 1 April 2020 (India)"],
                ["Dividends", "Capped at 10% of the gross dividend (15% only for certain property investment vehicles)"],
                ["Interest", "15% (10% for bona fide banks); exempt in specified government and export-credit cases"],
                ["Royalties and fees for technical services", "15% (10% for equipment royalties and related services)"],
                ["Services PE", "More than 90 days in any 12 months, or more than 30 days for services to an associated enterprise"],
                ["Claimed with", "HMRC certificate of residence, Form 41 and, where asked, a no-PE declaration and evidence of beneficial ownership"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="frame" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The frame: India is the source state, the UK is the residence state</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Each article gives one country the right to tax first (the source state, where the income arises) and
          the other a duty to relieve double tax (the residence state, where the recipient lives). For a UK
          parent with an Indian subsidiary, <strong>India is the source state</strong> and{" "}
          <strong>the UK is the residence state</strong>. The treaty only ever limits India&apos;s domestic
          rate; the lower of the Income-tax Act rate and the treaty rate applies.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian subsidiary is a separate Indian resident company, so the treaty does not reduce its own
          tax. It matters when money flows to the parent, when the parent&apos;s staff work in India, and when
          the two companies price transactions.
        </p>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax rates under the treaty, article by article</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Article numbers follow the consolidated text published by HMRC, which includes the effect of the MLI.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Article</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Income or activity</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India as source state</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate or limit</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">UK as residence state</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["7", "Business profits", "Only profits attributable to an Indian PE", "Domestic foreign-company rate on PE profits; nothing without a PE", "Taxes the profits; credit or exemption for Indian tax"],
                ["8", "Air transport (international traffic)", "Cannot tax", "Nil", "Taxed in the UK only"],
                ["9", "Shipping (international traffic)", "Cannot tax", "Nil", "Taxed in the UK only"],
                ["10", "Associated enterprises", "May adjust profit to arm's length", "Arm's length", "Makes a corresponding adjustment"],
                ["11", "Dividends from the Indian subsidiary", "May tax", "10% of the gross dividend (15% for certain property investment vehicles)", "Generally exempt (distribution exemption, Part 9A CTA 2009)"],
                ["12", "Interest on a loan to the subsidiary", "May tax", "15%; 10% for banks; exempt for governments, the RBI and ECGC or ECGD-guaranteed credits", "Assessable; credit for Indian tax"],
                ["13", "Royalties for IP or know-how, and fees for services that make technical knowledge available", "May tax", "15% of the gross amount", "Assessable; credit for Indian tax"],
                ["13", "Royalties for equipment, and ancillary services", "May tax", "10%", "Assessable; credit for Indian tax"],
                ["7 (not 13)", "Other service fees where no knowledge is made available", "Cannot tax without a PE", "Nil without a PE", "Assessable in the UK"],
                ["14", "Capital gains", "Each country applies its domestic law", "No treaty cap", "Gain on shares often exempt (substantial shareholding exemption)"],
                ["15", "Independent personal services", "May tax if in India 90 days or more in the fiscal year, or a fixed base", "Domestic law on attributable income", "Credit for Indian tax"],
                ["16", "Employment income", "May tax unless the 183-day exemption applies", "Exempt if in India no more than 183 days, a UK employer pays, and no Indian PE bears the cost", "Taxes the employee; credit for Indian tax"],
                ["17", "Directors' fees from an Indian company", "May tax", "Domestic law", "Credit for Indian tax"],
                ["18", "Artistes and athletes", "May tax where performed", "Domestic law", "Credit for Indian tax"],
                ["19", "Government service", "Taxes pay from the Indian government", "Domestic law, with exceptions", "Taxes otherwise"],
                ["20", "Pensions and annuities", "Cannot tax", "Nil", "Taxed in the UK only"],
                ["21 and 22", "Students and trainees; teachers and researchers", "Exempts specified payments (teachers for up to two years)", "Nil within limits", "Taxes otherwise"],
                ["23", "Income not covered elsewhere", "May tax income arising in India", "Domestic law", "Credit for Indian tax"],
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

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Treaty rate against domestic rate for payments to the UK parent</strong> (domestic rate: 20%
          plus surcharge and cess on payments to a non-resident, before treaty relief)
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Payment</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">On ₹1 crore (about £78,800)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Comment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividend", "10%", "₹10 lakh (about £7,900)", "Half of the 20% domestic rate before surcharge and cess"],
                ["Interest", "15%", "₹15 lakh (about £11,800)", "10% if the lender is a bank"],
                ["Royalty or fee for technical services", "15%", "₹15 lakh", "Fees must make technical knowledge available to fall here"],
                ["Equipment royalty", "10%", "₹10 lakh", "Includes ancillary services"],
                ["Service fee, no knowledge made available", "Nil", "₹0", "No Indian tax without a PE; GST and transfer pricing still apply"],
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
          Indicative interbank rate of about ₹126.9 per pound in mid-October 2026; it moves daily, so rates
          quoted here are approximate. Withholding Tax is deducted under Section 393 of the Income-tax Act, 2025
          (replacing Section 195) from 1 April 2026.
        </div>

        <h2 id="scope" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 1 to 4: scope, taxes covered, definitions and residence</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Article 1:</strong> the treaty applies to residents of the UK or India, or both. An MLI clause also means it does not limit a country&apos;s right to tax its own residents, apart from listed benefits.</li>
          <li><strong>Article 2, taxes covered:</strong> in the UK, income tax, corporation tax, capital gains tax and petroleum revenue tax; in India, income tax with any surcharge. GST, VAT and stamp duty are not covered.</li>
          <li><strong>Article 3:</strong> definitions, including the competent authorities, the fiscal year and international traffic. Undefined terms take their meaning from domestic law.</li>
          <li><strong>Article 4, residence:</strong> a person is resident if liable to tax by reason of domicile, residence, management or incorporation. A company resident in both countries is no longer sorted by place of effective management alone: under the MLI the two tax authorities try to agree its residence, and relief may be denied if they cannot. Individuals are sorted by permanent home, centre of vital interests, habitual abode and nationality.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          A UK company claims the treaty with an HMRC certificate of residence, which confirms residence for a
          stated period. It must cover the payment dates, and the parent must also be the{" "}
          <strong>beneficial owner</strong> of the income, not a pass-through.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Article 5: permanent establishment (PE) in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A PE is a taxable presence. With one, India taxes the profits attributed to it (Article 7). Without
          one, India cannot tax the UK company&apos;s business profits, however much it sells into India. The UK
          treaty is stricter than many on services.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Type of PE</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Test</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Threshold</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fixed place of business", "A place through which the business is wholly or partly carried on: management, branch, office, factory, workshop, warehouse for others' goods, mine or well", "No day count; it must be a real fixed place at your disposal", "A branch, project office or serviced desk used by your staff can qualify"],
                ["Building site, construction or installation", "Article 5 project test", "More than 6 months", "Supervisory work linked to a machinery sale counts if it lasts over 6 months, or up to 6 months where the charges exceed 10% of the sale price"],
                ["Services PE", "Services through employees or other personnel", "More than 90 days in any 12-month period", "The count starts early; track project days from the first visit"],
                ["Services to an associated enterprise", "Services provided to a group company in India", "More than 30 days in any 12-month period", "The tightest test and the one an intra-group support model most often meets"],
                ["Resource activities", "Prospecting, extraction or production support", "Deemed PE", "Mainly energy and mining"],
                ["Dependent agent", "A person in India who habitually concludes contracts (other than purchasing), habitually holds stock for delivery or habitually secures orders for the group", "Habitual; no day count", "A salesperson with authority, or a subsidiary acting for you, can create a PE"],
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
          <strong>What does not create a PE:</strong> storing, displaying or delivering goods; keeping stock
          only for processing; buying goods or collecting information; and other preparatory or auxiliary
          activities. Under the MLI these exclusions are lost where the activities are part of a cohesive
          business operation split across related entities. An independent agent working for several principals
          is not a PE, but one that works wholly or almost wholly for your group is not independent. Owning or
          controlling a subsidiary does not make it your PE.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Why the 30-day associated-enterprise test matters:</strong> if UK staff spend more than 30
          days in a 12-month period providing services to the Indian subsidiary (support, training, management),
          the UK company may have a PE even though the subsidiary is a separate entity. Track days by person and
          by project, and keep the services under a written agreement priced at arm&apos;s length.
        </p>

        <h2 id="profits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 6 to 10: property, business profits, shipping and associated enterprises</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 6:</strong> income from Indian land and buildings, including rights to mineral payments, may be taxed in India without a treaty cap.</li>
          <li><strong>Article 7:</strong> business profits are taxed in India only if attributable to a PE, and then only the attributable part, worked out as if the PE were an independent enterprise dealing at arm&apos;s length. Executive and general administrative expenses are deductible, but head-office charges are restricted. Merely purchasing goods attributes no profit. Profits of an Indian PE of a foreign company are taxed under domestic law at the foreign-company rate (35% plus surcharge and cess).</li>
          <li><strong>Articles 8 and 9:</strong> profits from international air transport and shipping are taxed only in the residence state.</li>
          <li><strong>Article 10:</strong> where the conditions between related companies are not arm&apos;s length, India may adjust the Indian company&apos;s profit, and the UK should make a corresponding adjustment. See <Link href="/blog/uk-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ul>

        <h2 id="passive" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 11 to 13: dividends, interest, royalties and fees</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Article 11, dividends:</strong> India may tax a dividend paid to a UK company at up to <strong>10%</strong>. The cap is 15% only where the dividend comes from a property investment vehicle that distributes most of its income and is itself tax-exempt. India cannot tax undistributed profits of a company because of the shareholder&apos;s residence.</li>
          <li><strong>Article 12, interest:</strong> up to <strong>15%</strong>, or 10% where the interest is paid to a bona fide bank. Interest paid to the governments, the Reserve Bank of India, and on loans guaranteed by the UK or Indian export-credit agencies, is exempt. Interest above an arm&apos;s length amount between connected parties is taxed under domestic law.</li>
          <li><strong>Article 13, royalties and fees for technical services:</strong> up to <strong>15%</strong>, or <strong>10%</strong> for equipment royalties and ancillary services. Royalties cover copyright, patents, designs, know-how, formulae and equipment. Fees for technical services cover technical or consultancy services and services that <em>make available</em> technical knowledge, experience, skill, know-how or processes. Services ancillary to a sale, teaching, private-use services and services to individuals are excluded. A transitional 20% rate for private payers applied only in the first five years and has ended.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          The caps apply to the gross amount with no deduction for expenses. If the recipient is not the
          beneficial owner, or the arrangement fails the principal purpose test, the domestic rate applies.
        </p>

        <h2 id="gains" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Article 14: capital gains when the parent sells the subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Article 14 does not allocate gains on shares to one country. Each country may tax capital gains under
          its own law, apart from ships and aircraft. India therefore taxes a UK parent&apos;s gain on shares of
          an Indian company under the Income-tax Act, 2025: long-term gains on unlisted shares held more than 24
          months at 12.5% (plus surcharge and cess), and short-term gains at higher rates. In the UK, a gain on
          shares in a trading subsidiary is often exempt under the substantial shareholding exemption, provided
          the parent held at least 10% for 12 months and the conditions are met, so the Indian tax can be a
          final cost. Plan a sale with both advisers. See{" "}
          <Link href="/blog/uk-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 15 to 22: people, directors and employees</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Article 15, independent personal services:</strong> a UK consultant is taxed only in the UK unless present in India for 90 days or more in the fiscal year, or having a regular fixed base there.</li>
          <li><strong>Article 16, employment:</strong> pay for work done in India is taxable in India unless all three conditions are met: the employee is in India for no more than 183 days in the fiscal year, the employer is not resident in India, and the cost is not borne by an Indian PE or fixed base. A UK employee seconded to the Indian subsidiary and recharged to it usually fails the third test.</li>
          <li><strong>Article 17, directors:</strong> fees from an Indian company can be taxed in India.</li>
          <li><strong>Article 18, artistes and athletes:</strong> taxed where they perform.</li>
          <li><strong>Articles 19 and 20:</strong> government pay; pensions and annuities are taxed only in the residence state.</li>
          <li><strong>Articles 21 and 22:</strong> students, trainees, teachers and researchers have specified exemptions (teaching or research for up to two years).</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          The 183-day test, Indian residence and social security are covered in{" "}
          <Link href="/blog/uk-to-india/uk-employees-in-india-dcc" className="text-blue-800 font-semibold hover:underline">UK employees in India</Link>.
        </p>

        <h2 id="relief" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 23 to 24 and 26: other income, relief and non-discrimination</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 23, other income:</strong> income not covered elsewhere is taxed in the residence state, and the source state may also tax income that arises there.</li>
          <li><strong>Article 24, relief:</strong> the UK gives a credit for Indian tax, and for a UK company holding at least 10% of the voting power the credit extends to the underlying Indian corporate tax on dividends. In practice most dividends are exempt in the UK under the distribution exemption, so the Indian withholding is a cost, while interest, royalties and fees are taxed in the UK with credit for Indian tax. India gives a credit for UK tax, limited to the Indian tax on that income. The treaty&apos;s tax-sparing rules for old Indian incentives are time-limited and no longer matter for new investments.</li>
          <li><strong>Article 26, non-discrimination:</strong> a PE or a company owned by UK residents may not be taxed more heavily than a comparable Indian business, and payments to UK residents must be deductible on the same terms as payments to residents.</li>
        </ul>

        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 27 to 28C: disputes, information and collection</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 27, mutual agreement procedure (MAP):</strong> present the case to the competent authority within three years of the first notification of the action that is not in line with the treaty. Agreements are carried out despite domestic time limits.</li>
          <li><strong>Article 28, exchange of information:</strong> information that is foreseeably relevant is exchanged, and bank secrecy is not a ground to refuse. <strong>Article 28A</strong> allows tax examinations abroad with consent.</li>
          <li><strong>Article 28B, assistance in collection:</strong> each country can help collect the other&apos;s enforceable claims and take protective steps.</li>
          <li><strong>Article 28C and the MLI:</strong> the treaty has no separate limitation-on-benefits article; the MLI&apos;s <strong>principal purpose test</strong> denies a benefit if obtaining it was one of the principal purposes of an arrangement, unless granting it fits the treaty&apos;s object and purpose.</li>
        </ul>

        <h2 id="final" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Articles 29 to 31: diplomats, entry into force and termination</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Article 29 preserves diplomatic and consular privileges. Article 30 brought the treaty into force,
          replacing the 1981 convention. Article 31 lets either country end it by diplomatic notice of at least
          six months, given before the end of a calendar year, with effect from the following fiscal year. The
          MLI modified the treaty for withholding taxes from 1 January 2020 in the UK and 1 April 2020 in India,
          and for other taxes from tax periods beginning on or after 1 April 2020 (corporation tax) and 6 April
          2020 (income tax and capital gains tax) in the UK.
        </p>

        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to claim treaty benefits, step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Request an HMRC certificate of residence for the period of the payments. Allow time, because HMRC issues it on request and it covers a stated period.</li>
          <li>Prepare Form 41 (previously Form 10F) with residence details, and give it with the certificate to the Indian payer.</li>
          <li>Give a no-PE declaration and evidence of beneficial ownership if the payer or the tax officer asks.</li>
          <li>The Indian subsidiary applies the treaty rate under Section 393 and keeps the documents on file.</li>
          <li>Where required, a Chartered Accountant certifies the payment (Form 146, previously Form 15CB) and the company files Form 145 (previously Form 15CA).</li>
          <li>The parent obtains the Indian Withholding Tax certificate for its UK return and credit claim.</li>
        </ol>

        <h2 id="uk-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a UK parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Budget 10% on dividends: it is a cost of repatriation because the UK normally exempts them. Compare with interest, royalties and fees, which are taxed in the UK but must be priced at arm&apos;s length.</li>
          <li>Keep a project-by-project day log for UK staff in India against the 90-day and 30-day PE tests, and review it before each quarter ends.</li>
          <li>Renew the HMRC certificate for each payment period and file Form 41 with it.</li>
          <li>Check the principal purpose test if a holding company sits between the UK and India.</li>
          <li>Plan an exit using Article 14 and the UK substantial shareholding exemption.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Applying the 10% dividend rate before the certificate and Form 41 are on file.</li>
          <li>Missing the 30-day associated-enterprise services test because the day count is kept by person rather than by project.</li>
          <li>Treating every service fee as a royalty at 15% when many are not taxable in India at all without a PE.</li>
          <li>Using an HMRC certificate that does not cover the payment date.</li>
          <li>Ignoring the principal purpose test when inserting a holding company.</li>
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
            { label: "HMRC: synthesised text of the MLI and the 1993 India-UK convention", href: "https://www.gov.uk/government/publications/india-tax-treaties/2020-uk-india-synthesised-text-of-the-multilateral-instrument-and-the-1993-double-taxation-convention-in-force" },
            { label: "Double Taxation Relief (Taxes on Income) (India) Order 1993", href: "https://www.legislation.gov.uk/uksi/1993/1801/made" },
            { label: "Income Tax Department (India)", href: "https://www.incometax.gov.in" },
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
        title="Claiming India-UK Treaty Benefits?"
        description="Tell us the payments and people moving between India and the UK — we'll confirm the treaty rates and the documents you need."
      />
    </main>
  )
}
