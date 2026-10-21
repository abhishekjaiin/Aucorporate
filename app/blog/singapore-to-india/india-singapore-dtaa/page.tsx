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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/india-singapore-dtaa"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "how-it-works", label: "How the treaty works, and who can use it" },
  { id: "rates", label: "Tax rates table: what India can charge a Singapore resident" },
  { id: "articles", label: "Article by article" },
  { id: "gains", label: "Gains on shares: grandfathering, the 2017 change and the shell test" },
  { id: "claim", label: "How to claim treaty rates: the paperwork" },
  { id: "pe-risk", label: "Permanent establishment: where Singapore groups get caught" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the withholding rate on dividends from India to Singapore?", a: "Under the treaty, 10% if the Singapore company holds at least 25% of the Indian company's capital and 15% otherwise. Singapore adds no tax withholding on its side. The Indian payer applies it under Section 393 on receipt of the residency certificate and Form 41." },
  { q: "What documents does a Singapore company need to claim India-Singapore treaty benefits?", a: "An IRAS tax residency certificate, Form 41 (previously Form 10F), a no-PE declaration and a beneficial-ownership declaration, given to the Indian payer before payment." },
  { q: "Can India tax the sale of Indian shares by a Singapore company?", a: "Yes for shares acquired on or after 1 April 2017, at full Indian domestic rates since 1 April 2019. Shares acquired before 1 April 2017 remain taxable only in Singapore, unless the seller is a shell or conduit company." },
  { q: "What counts as a shell company under the India-Singapore treaty?", a: "A company whose annual operating expenditure in its home state is below SGD 200,000 (Singapore) or INR 5,000,000 (India) over the preceding 24 months. Listed companies are deemed not to be shells." },
  { q: "When does a Singapore parent have a permanent establishment in India?", a: "A fixed place of business, a construction project over 183 days, a dependent agent who habitually concludes contracts, or services through employees above 90 days in a fiscal year (30 days for services to an associated enterprise), as summarised in the sources we checked." },
  { q: "Does India tax a Singapore parent on royalties and technical fees?", a: "Yes, but at no more than 10% under the treaty as we read it, and fees are taxable only where the service makes technical knowledge available. Without it, domestic Withholding Tax at around 20% plus surcharge and cess could apply." },
  { q: "Is there a mutual agreement procedure between India and Singapore?", a: "Yes. A taxpayer can present a case to the competent authority within three years of first notification of the action. India has not accepted MLI mandatory arbitration, so the process has no binding backstop." },
  { q: "Has the India-Singapore treaty been changed by the MLI?", a: "Yes. Both countries ratified the MLI. India's withholding-tax changes took effect from 1 January 2020 and other taxes from 1 April 2020. The principal purpose test now applies alongside Article 24A." },
  { q: "Does Singapore tax dividends received from an Indian subsidiary?", a: "Foreign-sourced dividends received in Singapore can qualify for exemption if conditions on the headline tax rate and subjection to tax in the source country are met. Check with your Singapore tax adviser." },
]

const relatedCards = [
  { title: "Using a Singapore Holding Company for Indian Investments: What the Treaty Gives, and What Substance Is Needed to Keep It", desc: "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.", href: "/blog/singapore-to-india/singapore-holdco-for-india" },
  { title: "Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.", href: "/blog/singapore-to-india/repatriating-profits" },
  { title: "Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs", desc: "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.", href: "/blog/singapore-to-india/transfer-pricing" },
  { title: "Singapore Employees Working in India: What the Tax Treaty, the EPF Exemption and CPF Mean", desc: "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen exemption, and PR and foreign-national gaps.", href: "/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" },
]

export default function IndiaSingaporeDtaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State"
        description="The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "India-Singapore DTAA: Article-by-Article Guide to the Tax Treaty for Singapore Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: the India-Singapore DTAA"
        title="The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Under the India-Singapore double taxation agreement (signed 24 January 1994), India, as the source
          state, may tax a dividend paid to a Singapore parent at up to 10% where the parent holds at least 25%
          of the shares (15% otherwise), interest at up to 10% for banks and 15% for others, and royalties and
          technical fees at up to 10%. It taxes the parent&apos;s business profits only through a permanent
          establishment, and since 2017 it may tax gains on Indian shares acquired on or after 1 April 2017.
          Singapore, as the residence state, taxes the parent on a territorial basis and has no capital gains
          tax, so treaty relief matters most for withholding and for gains.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="india-dtaa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Treaty", "Agreement between India and Singapore for the avoidance of double taxation and the prevention of fiscal evasion with respect to taxes on income (signed 24 January 1994; in force 27 May 1994; replaced the 1981 agreement)"],
                ["Protocols", "2005 (in force 1 August 2005); Second Protocol 24 June 2011 (in force 1 September 2011, information exchange); Third Protocol 30 December 2016 (in force 27 February 2017; share gains from 1 April 2017, Article 24A limitation of benefits, Article 28A)"],
                ["MLI", "Both countries ratified the Multilateral Instrument. India's withholding-tax changes took effect from 1 January 2020 and other taxes from 1 April 2020. Singapore opted into MLI arbitration; India did not, so it does not apply here"],
                ["Dividends", "10% if the Singapore company holds at least 25% of the Indian company's capital; 15% otherwise"],
                ["Interest", "10% for banks and similar financial institutions; 15% in other cases"],
                ["Royalties and technical fees", "10% under the treaty as summarised in the secondary sources we checked; confirm against the consolidated text before filing"],
                ["Permanent establishment", "Building site or installation project above 183 days; services through employees above 90 days in a fiscal year, and above 30 days for services to an associated enterprise (as summarised in secondary sources)"],
                ["Shares", "Acquired before 1 April 2017: taxable only in Singapore (not for shell companies). Acquired on or after 1 April 2017: India may tax. Gains up to 31 March 2019 were capped at 50% of the Indian rate; since then, full domestic rates"],
                ["Claim paperwork", "Singapore tax residency certificate from IRAS, Form 41 (previously Form 10F) and no-PE declaration, given to the Indian payer before payment"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the treaty works, and who can use it</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A treaty does not impose tax. It limits the tax a country can charge, and it allocates taxing rights
          between the <em>source state</em>, where the income arises (India, for Indian dividends, fees and
          gains), and the <em>residence state</em>, where the recipient is resident (Singapore). The Indian
          payer applies the reduced rate under Section 393 of the Income-tax Act, 2025, as long as the Singapore
          recipient proves residence and beneficial ownership.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Resident:</strong> the Singapore company must be a Singapore tax resident (control and management in Singapore) and hold a tax residency certificate from IRAS.</li>
          <li><strong>Beneficial owner:</strong> the recipient must be the true owner of the income, not a conduit passing it on.</li>
          <li><strong>Domestic law comparison:</strong> Indian domestic Withholding Tax on dividends, interest, royalties and fees to a non-resident is typically 20% plus surcharge and cess, so the treaty rate is usually a saving.</li>
          <li><strong>Anti-avoidance:</strong> the principal purpose test from the MLI and the Article 24A limitation of benefits apply on top of the rates table.</li>
        </ul>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax rates table: what India can charge a Singapore resident</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Article</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Income</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India as source state may tax at</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["10", "Dividends", "10% (holding 25% or more); 15% otherwise", "Singapore imposes no withholding on dividends it pays"],
                ["11", "Interest", "10% (banks and similar institutions); 15% otherwise", "Does not apply if the loan is connected with a PE or the rate is above arm's length"],
                ["12", "Royalties", "10%", "Applies to patents, trademarks, know-how and equipment; confirm whether the rate differs for equipment"],
                ["12", "Fees for technical services", "10%", "Only if the service makes technical knowledge available or transfers a technical plan"],
                ["5 and 7", "Business profits", "Nil, unless there is a PE", "If a PE exists, only profits attributable to it are taxed, at the foreign-company rate under domestic law (35% plus surcharge and cess)"],
                ["13", "Gains on shares acquired before 1 April 2017", "Nil in India (taxed only in Singapore)", "Not available to shell or conduit companies"],
                ["13", "Gains on shares acquired on or after 1 April 2017", "Domestic rates (12.5% for unlisted shares held over 24 months, plus surcharge and cess)", "Transitional cap of 50% of the Indian rate applied to gains up to 31 March 2019"],
                ["13", "Gains on immovable property", "Domestic rates", "Taxed where the property is"],
                ["15", "Employment income", "Domestic rates, unless the 183-day exemption applies", "See the section on employees"],
                ["16", "Directors' fees", "Domestic rates", "Taxable in the state where the company is resident"],
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
          <strong>Reading the table.</strong> These are ceilings. Where the Indian domestic rate is lower than
          the treaty rate, the lower rate applies. Surcharge and cess are added to domestic rates; whether they
          are also added on top of a treaty rate is a point payers handle differently, so confirm the
          computation with your Indian adviser.
        </div>

        <h2 id="articles" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Article by article</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Article numbers below follow the consolidated text as we read it. Confirm each number against the
          official text before citing it in a filing or a notice reply.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Article 2, taxes covered:</strong> in India, income tax with any surcharge; in Singapore, income tax. Wealth tax is not covered.</li>
          <li><strong>Residence:</strong> a company is resident in the state where it is liable to tax because of domicile, residence or place of management. A dual-resident company is placed by mutual agreement.</li>
          <li><strong>Article 5, permanent establishment:</strong> a fixed place of business, a building site or project over 183 days, supervisory work connected to it, a dependent agent who habitually concludes contracts, and furnishing of services through employees for more than 90 days in a fiscal year (30 days where the recipient is an associated enterprise). The sources we checked agree on those thresholds.</li>
          <li><strong>Safe harbour:</strong> storage, display or delivery of goods, stock held only for processing by another enterprise, buying goods or collecting information, and other preparatory or auxiliary activity do not create a PE.</li>
          <li><strong>Article 7, business profits:</strong> taxable only in Singapore unless the parent carries on business in India through a PE. The profit attributed to the PE is what a Singapore-owned business would earn dealing independently.</li>
          <li><strong>Shipping and air transport:</strong> profits from international traffic are taxable only in the state of residence.</li>
          <li><strong>Associated enterprises:</strong> where the Singapore parent and Indian subsidiary deal on non-arm&apos;s-length terms, either state may adjust profits. Corresponding adjustment is possible through the mutual agreement procedure. See <Link href="/blog/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li><strong>Article 10, dividends:</strong> see the rates table. Singapore&apos;s one-tier system means dividends it pays are not taxed again in shareholders&apos; hands.</li>
          <li><strong>Article 11, interest:</strong> see the table. Excess interest above arm&apos;s length is taxed under domestic law.</li>
          <li><strong>Article 12, royalties and technical fees:</strong> see the table. The fee article uses a &apos;make available&apos; test, so a routine service that does not transfer know-how is not taxable as a technical fee, and without a PE is not taxable in India.</li>
          <li><strong>Article 13, capital gains:</strong> see the next section.</li>
          <li><strong>Articles 14 and 15, personal services:</strong> independent professionals are taxable in India if they have a fixed base or stay long enough; employees are taxable on work done in India, subject to the 183-day exemption. Detail in <Link href="/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" className="text-blue-800 font-semibold hover:underline">the employees guide</Link>.</li>
          <li><strong>Article 16, directors&apos; fees:</strong> taxable in the state where the paying company is resident.</li>
          <li><strong>Entertainers, pensions, government service, students:</strong> the usual rules, which rarely affect a corporate group.</li>
          <li><strong>Other income:</strong> income not covered elsewhere is taxable in the recipient&apos;s state of residence.</li>
          <li><strong>Relief from double tax:</strong> Singapore gives a credit for Indian tax against Singapore tax on the same income, capped at the Singapore tax on that income; India gives relief under its domestic law.</li>
          <li><strong>Article 24A, limitation of benefits:</strong> see the next section.</li>
          <li><strong>Article 27, mutual agreement procedure:</strong> a taxpayer may present a case within three years of the first notification of the action.</li>
          <li><strong>Article 28, exchange of information:</strong> replaced by the Second Protocol (2011) with the international standard.</li>
          <li><strong>Article 28A, domestic anti-avoidance:</strong> added by the Third Protocol; domestic anti-avoidance rules are not blocked by the treaty.</li>
        </ul>

        <h2 id="gains" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Gains on shares: grandfathering, the 2017 change and the shell test</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This is the article that changed most. Before 1 April 2017 the treaty gave Singapore sole right to tax
          gains on Indian shares. The Third Protocol moved to source taxation for shares acquired on or after
          that date, with a transition: gains arising between 1 April 2017 and 31 March 2019 were taxed at no
          more than 50% of the Indian rate, and gains after that at full Indian rates.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Shares acquired before 1 April 2017:</strong> taxable only in Singapore, but Article 24A can deny this to a shell or conduit company.</li>
          <li><strong>Shell test:</strong> a company is treated as a shell if its annual operating expenditure in its home state is below SGD 200,000 (Singapore) or INR 5,000,000 (India) over the preceding 24 months. Companies listed on a recognised stock exchange are deemed not to be shells.</li>
          <li><strong>Primary purpose test:</strong> benefits are denied where the affairs were arranged with obtaining them as a primary purpose.</li>
          <li><strong>Case law:</strong> a June 2025 Mumbai Tribunal decision (Prashant Kothari) held that the limitation provision does not itself remove treaty protection for gains where the allocation article gives taxing rights. Treat a single Tribunal decision as persuasive, not settled.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Holding structures are covered in depth in{" "}
          <Link href="/blog/singapore-to-india/singapore-holdco-for-india" className="text-blue-800 font-semibold hover:underline">Using a Singapore holding company for India</Link>{" "}
          and exits in{" "}
          <Link href="/blog/singapore-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">selling, restructuring or closing</Link>.
        </p>

        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to claim treaty rates: the paperwork</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Obtain a tax residency certificate from IRAS for the Singapore company for each relevant year.</li>
          <li>Prepare Form 41 (previously Form 10F) with identity, residence, period and tax identification details.</li>
          <li>Prepare a no-PE declaration and a beneficial-ownership declaration signed by a Singapore director.</li>
          <li>Send the set to the Indian payer before the first payment. The payer then withholds at the treaty rate under Section 393.</li>
          <li>The payer files Form 145 (previously Form 15CA) and, where required, a Chartered Accountant&apos;s Form 146 (previously Form 15CB) for the remittance.</li>
          <li>The Singapore parent claims a foreign tax credit in its Singapore return and keeps the Indian TDS certificate as evidence.</li>
        </ol>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Timing.</strong> A residency certificate for the current year can take weeks. Ask early, and
          renew each year so the Indian payer is never paying at the higher domestic rate for want of a
          document.
        </div>

        <h2 id="pe-risk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment: where Singapore groups get caught</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The services PE is the practical risk. Under the treaty as summarised, a Singapore parent that
          furnishes services through employees in India for more than 90 days in a fiscal year can have a PE,
          and the test falls to 30 days where the services are for an associated enterprise, which includes an
          Indian subsidiary of the same group.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Count days per person and per project</strong>, including weekends spent in India and time on site for other group companies.</li>
          <li><strong>Watch contract authority:</strong> a Singapore manager who negotiates and signs Indian contracts can create an agency PE.</li>
          <li><strong>Document who directs the work:</strong> where Indian staff take instructions from Singapore, authorities may argue a disguised PE or a dependent agent.</li>
          <li><strong>Consider a services agreement</strong> with a cost-plus charge for time spent by Singapore staff so that profit lands in the Indian entity where it should.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          If a PE does arise, India taxes its profits as those of a foreign company (35% plus surcharge and
          cess) and the Singapore parent files an Indian return.
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
            { label: "IRAS: protocols amending the Singapore-India DTA", href: "https://www.iras.gov.sg/media/docs/default-source/dtas/protocol-amending-singapore-india-dta-(ratified)(mli)(1-oct-2019).pdf?sfvrsn=dd28a790_0" },
            { label: "IRAS: Avoidance of double taxation agreements", href: "https://www.iras.gov.sg/" },
            { label: "VJM Global: Singapore-India tax treaty guide (secondary source)", href: "https://www.vjmglobal.com/feeds/blog/singapore-india-tax-treaty" },
            { label: "Beacon Filing: India-Singapore DTAA (secondary source)", href: "https://beaconfiling.com/dtaa/india-singapore-dtaa" },
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
        title="Applying the India-Singapore Treaty?"
        description="Tell us the payments and people moving between Singapore and India, and we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
