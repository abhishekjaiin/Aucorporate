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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/india-singapore-ceca"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "what-it-is", label: "What CECA is, and how it differs from the tax treaty" },
  { id: "epf", label: "The one benefit most Singapore groups use: the EPF exemption" },
  { id: "investment", label: "Investment and services: how far it helps" },
  { id: "open", label: "What is open or unchanged" },
  { id: "use-it", label: "How a Singapore company can use CECA in practice" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does CECA exempt Singapore employees from India's Employees' Provident Fund?", a: "Singapore citizens working in India are exempt from the EPF under CECA, as explained by the Singapore Mission in Mumbai and reinforced by an EPFO circular of 14 March 2017. Singapore permanent residents and other nationalities are not mentioned in the guidance, so assume they must contribute." },
  { q: "Does the CECA reduce Indian tax on dividends paid to a Singapore parent?", a: "No. CECA is a trade and investment agreement. Withholding Tax on dividends, interest, royalties and fees follows the Income-tax Act, 2025 and the 1994 India-Singapore tax treaty." },
  { q: "Is the India-Singapore CECA being revised?", a: "A third review was launched on 1 September 2018. We have not found a published conclusion. Treat the 2005 text as the operative one unless a notified amendment says otherwise." },
  { q: "Does CECA let a Singapore company operate in India without an Indian entity?", a: "No. To hold property, employ people or contract locally, a Singapore company needs an Indian subsidiary or an approved branch or liaison office, and has to follow FEMA and the FDI Policy." },
  { q: "Do UPI and PayNow replace bank transfers for funding an Indian subsidiary?", a: "No. The UPI-PayNow link, live since February 2023, is for small person-to-person transfers. Share capital, loans and fees move through authorised dealer banks with the usual reporting." },
]

const relatedCards = [
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/blog/singapore-to-india/india-singapore-dtaa" },
  { title: "Singapore Employees Working in India: What the Tax Treaty, the EPF Exemption and CPF Mean", desc: "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen exemption, and PR and foreign-national gaps.", href: "/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" },
  { title: "Contracts, Courts and Arbitration: Using Singapore as the Seat and Enforcing in India", desc: "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India, stamping, interim relief and drafting points.", href: "/blog/singapore-to-india/contracts-courts-siac" },
  { title: "Relocating Singapore Staff to India: Visa Routes, OCI, Registration and Day-Count Controls", desc: "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin, FRRO registration, residence tests and housing.", href: "/blog/singapore-to-india/relocate-singapore-staff" },
]

export default function IndiaSingaporeCecaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Singapore CECA: What the 2005 Agreement Gives a Singapore Company Setting Up in India, and What It Leaves Alone"
        description="What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services, people, the EPF exemption and the open review."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "India-Singapore CECA: What the 2005 Trade Agreement Means for Singapore Companies in India" },
        ]}
      />

      <GuideHero
        eyebrow="Trade: the India-Singapore CECA"
        title="The India-Singapore CECA: What the 2005 Agreement Gives a Singapore Company Setting Up in India, and What It Leaves Alone"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Singapore Comprehensive Economic Cooperation Agreement (CECA) has applied since 2005 and was
          India&apos;s first comprehensive agreement of its kind. It covers goods, services, investment and the
          movement of people, and it is the reason Singapore citizens working in India are exempt from
          India&apos;s Employees&apos; Provident Fund. It does not decide how an Indian subsidiary is formed,
          funded or taxed. The Companies Act, FEMA and FDI Policy, and the India-Singapore tax treaty still
          decide those, and the agreement&apos;s third review has been open since 2018.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="trade-agreement" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Agreement", "India-Singapore Comprehensive Economic Cooperation Agreement, signed in 2005 (the first of India's comprehensive economic agreements)"],
                ["Covers", "Trade in goods, trade in services, investment, movement of natural persons, and cooperation chapters"],
                ["Best-known practical benefit", "Singapore citizens working in India do not contribute to the Employees' Provident Fund (EPFO circular of 14 March 2017 reminded field offices)"],
                ["Review status", "The third review was launched on 1 September 2018. We have not found a published conclusion, so treat the 2005 text as the operative one unless a notified amendment says otherwise"],
                ["Wider framework", "Comprehensive Strategic Partnership (2024); the fourth Ministerial Roundtable met in August 2026 and named green economy, fintech, semiconductors and industrial parks as growth areas"],
                ["Tax", "CECA does not alter income tax. The 1994 India-Singapore tax treaty applies"],
                ["Does it change FDI rules?", "No. Sector caps, the Automatic Route and RBI reporting under FEMA apply to a Singapore investor as to any other"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what-it-is" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What CECA is, and how it differs from the tax treaty</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A trade and investment agreement and a tax treaty do different jobs. CECA sets the rules for trade in
          goods and services, investment treatment and the temporary movement of professionals between the two
          countries. The tax treaty divides the right to tax income. A Singapore company that sets up in India
          touches both, but the treaty alone decides how much Indian tax is withheld on a dividend or a fee, and
          the Companies Act and FEMA decide how the subsidiary is formed and funded.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Singapore is one of the largest sources of foreign direct investment into India, and the agreement is
          part of the reason investors there treat India as a familiar market. That familiarity is a reason to
          check the specifics rather than assume them: most of the useful promises in CECA are sector-specific
          and come with conditions.
        </p>

        <h2 id="epf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The one benefit most Singapore groups use: the EPF exemption</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India&apos;s Employees&apos; Provident Fund is mandatory for covered employees, including foreign
          nationals, who are classed as international workers. The Singapore Mission in Mumbai has explained
          that under CECA Singapore citizens do not need to contribute to the EPF, and that employers need not
          contribute for them. The EPFO reminded its offices of this in a circular dated 14 March 2017.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Who is covered:</strong> Singapore <em>citizens</em>. The published guidance speaks of citizens, so Singapore permanent residents and third-country nationals posted from Singapore should assume they are not covered until the EPFO confirms otherwise.</li>
          <li><strong>How it works:</strong> no registration form is required. The employer keeps a copy of the employee&apos;s Singapore passport on file in case the EPFO asks.</li>
          <li><strong>Past contributions:</strong> a Singapore citizen who contributed after 2005 can ask for a refund through the composite claim form submitted to the EPF office where the employer is registered, with a cancelled cheque and an attested passport copy.</li>
          <li><strong>Caveat:</strong> the exemption is about EPF. Gratuity, ESI (where applicable) and income tax follow their own rules.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Detail on the Singapore side (CPF) and the tax treaty is in{" "}
          <Link href="/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" className="text-blue-800 font-semibold hover:underline">Singapore employees in India: treaty, EPF and CPF</Link>.
        </p>

        <h2 id="investment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Investment and services: how far it helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          CECA&apos;s investment chapter gives Singapore investors defined standards of treatment in India and a
          route to claim against a government for certain breaches. India has since moved away from classic
          investment treaties and has been revising its model. The practical position for a Singapore parent is
          therefore this: rely on well-drafted shareholder and service agreements, a Singapore-seated
          arbitration clause and clean FEMA reporting, and treat treaty protection as a back-up. See{" "}
          <Link href="/blog/singapore-to-india/contracts-courts-siac" className="text-blue-800 font-semibold hover:underline">contracts, courts and SIAC arbitration</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          On services, the agreement lists sectors in which each side makes market-access commitments. A
          Singapore accounting, engineering, software, education or financial services firm should read
          India&apos;s schedule for its own activity. The existence of a commitment does not remove licensing,
          such as regulator approvals in banking, insurance or securities.
        </p>

        <h2 id="open" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What is open or unchanged</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>The review:</strong> the third review of CECA began on 1 September 2018. Until an amended text is notified, assume the 2005 provisions govern.</li>
          <li><strong>Company law and FDI:</strong> a Singapore company still forms an Indian private limited company under the Companies Act, 2013 and follows the FDI Policy for its sector. See <Link href="/blog/singapore-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">the incorporation guide</Link>.</li>
          <li><strong>FEMA reporting:</strong> Form FC-GPR, the pricing floor and the 60-day allotment rule are unchanged. See <Link href="/blog/singapore-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Tax:</strong> Indian subsidiary profits, Withholding Tax and permanent establishment risk follow Indian law and the 1994 treaty. See <Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">the India-Singapore tax treaty, article by article</Link>.</li>
          <li><strong>Payments:</strong> since February 2023 India&apos;s UPI and Singapore&apos;s PayNow are linked for small person-to-person transfers; this does not replace the banking channel for capital or trade payments.</li>
        </ul>

        <h2 id="use-it" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How a Singapore company can use CECA in practice</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide whether the Indian operation will sell services to India or deliver services to Singapore or the region; the sector schedules matter more for the first.</li>
          <li>Record the Singapore citizenship of each assignee. It decides whether the EPF exemption applies and what you put in the payroll file.</li>
          <li>Keep a scanned copy of each Singapore citizen&apos;s passport in the employee file, as the Mission recommends.</li>
          <li>Plan secondments around visa categories and the tax treaty&apos;s day counts. CECA does not replace the Indian visa regime.</li>
          <li>Check the notified text before relying on any change reported in the press. Review rounds are announced long before they are signed.</li>
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
            { label: "Singapore Mission in Mumbai: exemption for Singapore citizens from the EPF", href: "https://mumbai.mfa.gov.sg/mission-updates/exemption-for-singapore-citizens-contributing-to-indias-employees-provident-fund-organisation/" },
            { label: "Singapore MTI: third review of the India-Singapore CECA launched", href: "https://www.meti.gov.sg/newsroom/third-review-of-the-india-singapore-comprehensive-economic-cooperation-agreement-launched/" },
            { label: "ANI: 4th India-Singapore Ministerial Roundtable, August 2026", href: "https://www.aninews.in/news/world/asia/india-singapore-identify-green-economy-and-shipping-semiconductors-to-deepen-partnership-at-4th-ministerial-roundtable20260821125603/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
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
        title="Using CECA for Your India Business?"
        description="Tell us what you trade or supply into India, and we'll show what CECA changes and what stays under ordinary Indian rules."
      />
    </main>
  )
}
