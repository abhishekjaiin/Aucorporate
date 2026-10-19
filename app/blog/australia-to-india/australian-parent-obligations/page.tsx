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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/australian-parent-obligations"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "why", label: "Why the Australian side matters" },
  { id: "forms", label: "The main Australian items to discuss with your tax adviser" },
  { id: "regimes", label: "Australian rules that can tax the subsidiary's income currently" },
  { id: "align", label: "Keeping the two sides aligned" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does an Australian company have to report its Indian subsidiary to the ATO?", a: "An Australian company that owns an Indian subsidiary has to consider the controlled foreign company (CFC) rules in Part X of the Income Tax Assessment Act 1936, report international related-party dealings in the International Dealings Schedule where thresholds are met, and include any attributable or assessable foreign income in its company tax return. This should be confirmed with an Australian tax adviser." },
  { q: "Will the Indian financial year cause problems?", a: "The Indian financial year needs planning, because the Indian year ends 31 March while most Australian companies report to 30 June. A reporting bridge solves this." },
  { q: "Who prepares the Australian CFC and International Dealings Schedule disclosures?", a: "They are prepared by the Australian parent's tax adviser as part of the company tax return, because Australian filings are outside the scope of the Indian adviser. The Indian financial information the adviser needs is supplied by the subsidiary's accountants." },
  { q: "Do we have to report the Indian bank account to the ATO?", a: "Australia has no foreign bank account report like the US FBAR. The Indian subsidiary's bank account belongs to the subsidiary, and its results reach the parent's return through the CFC and foreign income rules. If the parent itself holds an Indian account, the interest is assessable foreign income and should be disclosed in the company tax return." },
  { q: "What happens if the Australian parent does not lodge the required foreign income disclosures?", a: "The ATO can apply administrative penalties for late or incorrect lodgement of the company tax return and its schedules, and shortfall penalties if foreign income is understated. Large multinational groups face higher penalties for late lodgement. Your Australian tax adviser can confirm the exposure for your structure." },
  { q: "Are dividends from an Indian subsidiary taxable in Australia?", a: "Dividends from a foreign company in which an Australian company holds a direct voting interest of at least 10% are generally non-assessable non-exempt income (section 768-5, Income Tax Assessment Act 1997), so they are not taxed in Australia. The Indian Withholding Tax on them is therefore usually a final cost. Confirm with your Australian tax adviser." },
  { q: "Is an Indian subsidiary a controlled foreign company?", a: "An Indian subsidiary controlled by Australian entities is a controlled foreign company. Whether any of its income is attributed to the Australian parent depends on the active income test and the tainted income categories. India is not a listed country, so the full tests apply and a captive services company should be reviewed." },
  { q: "Does the ATO apply transfer pricing rules to payments to an Indian subsidiary?", a: "Yes. Division 815 of the Income Tax Assessment Act 1997 applies the arm's length principle to cross-border dealings between related parties, and documentation requirements apply. Large groups also file the local file, master file and country-by-country report. A fair, documented price protects you in both countries." },
]

const relatedCards = [
  { title: "The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies", desc: "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/australia-to-india/dtaa-pe-risk" },
  { title: "The India-Australia DTAA: Article-by-Article Guide for Australian Companies", desc: "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence state: tax rates table, permanent establishment, business profits, dividends, interest, royalties, capital gains, employees, relief, MAP and how to claim treaty benefits.", href: "/blog/australia-to-india/india-australia-dtaa" },
  { title: "Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/australia-to-india/transfer-pricing" },
  { title: "Repatriating Profits to Australia: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/australia-to-india/repatriating-profits" },
]

export default function AustralianParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Australian Parent Obligations When You Own an Indian Subsidiary"
        description="Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets, transfer pricing and thin capitalisation. A guide for Australian finance teams."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More" },
        ]}
      />

      <GuideHero
        eyebrow="Australia side: reporting"
        title="Australian Parent Obligations When You Own an Indian Subsidiary"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian company that owns an Indian subsidiary generally has to consider the controlled foreign
          company (CFC) rules, report international related-party dealings in the International Dealings
          Schedule (IDS) with its company tax return, claim any foreign income tax offset for Indian tax, and
          keep transfer pricing documentation. Dividends from a wholly owned Indian subsidiary are usually
          exempt in Australia. These are Australian requirements, so confirm them with your Australian tax
          adviser.
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
                ["Dividends from the subsidiary", "Generally non-assessable non-exempt income for an Australian company with a direct voting interest of at least 10% (section 768-5, Income Tax Assessment Act 1997)"],
                ["CFC rules", "An Indian subsidiary controlled by Australian entities is a controlled foreign company under Part X of the Income Tax Assessment Act 1936. India is not a listed country, so tainted income can be attributed to the parent unless the active income test is met"],
                ["International Dealings Schedule", "Lodged with the company tax return where the thresholds for international related-party dealings are met"],
                ["Foreign income tax offset", "Division 770: Indian tax paid on income that is assessable in Australia (interest, royalties, fees) can be offset, up to a cap"],
                ["Transfer pricing", "Division 815 requires arm's length pricing; documentation, and for large groups the local file, master file and country-by-country report, are required"],
                ["Thin capitalisation", "Division 820 can limit the parent's own debt deductions where it has foreign subsidiaries"],
                ["Financial years", "Australia: 1 July to 30 June. India: 1 April to 31 March. A reporting bridge is needed"],
                ["Who advises", "Your Australian tax adviser; AU Corporate provides the Indian financial data in the form requested"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the Australian side matters</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India and Australia each tax and report separately. A subsidiary that is fully compliant in India can
          still create Australian disclosure duties for its parent, and the Australian rules can bring part of
          the subsidiary&apos;s profit into the parent&apos;s taxable income in the year it is earned. It is
          worth setting the process up at the start.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          This page is a general orientation to the Indian-subsidiary side of Australian reporting. Australian
          tax law is outside our practice; confirm every point with an Australian tax adviser.
        </div>

        <h2 id="forms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The main Australian items to discuss with your tax adviser</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it covers</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Input from India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["CFC attribution (Part X)", "Whether the Indian subsidiary has attributable income, tested through the active income test and the tainted income categories", "Financial statements, income analysis by type and related-party dealings"],
                ["Company tax return, foreign income", "Dividends, interest, royalties and fees from India, and any attributable CFC income", "Remittance records, Withholding Tax certificates and treaty documents"],
                ["International Dealings Schedule", "International related-party dealings and certain loan balances", "Intercompany ledger and balances agreed with the Indian books"],
                ["Foreign income tax offset (Division 770)", "Credit for Indian tax on income assessable in Australia", "Withholding Tax certificates and Indian tax receipts"],
                ["Transfer pricing documentation (Division 815)", "Arm's length pricing of intercompany transactions on the Australian side", "Indian benchmarking study and Form 48 (previously Form 3CEB)"],
                ["Consolidation and translation (AASB 10, AASB 121)", "Including the Indian subsidiary in the group accounts and translating rupees into Australian dollars", "Trial balance at each reporting date and rupee exchange rates used"],
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

        <h2 id="regimes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Australian rules that can tax the subsidiary&apos;s income currently</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Under the CFC rules, an Australian company that controls a foreign company can be taxed on part of
          that company&apos;s profit as it is earned, even if no dividend is paid. Whether this applies to a
          service-based Indian subsidiary depends on how much of its income is tainted, for example income from
          services to related parties, and whether it passes the active income test. Because India is not a
          listed country, the full tests apply. Your Australian tax adviser should model this before the
          subsidiary starts earning, since a captive services company that works mainly for its Australian
          parent is a common case for review.
        </p>

        <h2 id="align" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping the two sides aligned</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Agree a bridge between the Indian year (April to March) and the Australian year (July to June).</li>
          <li>Share Indian books and trial balances with your Australian tax adviser on an agreed calendar.</li>
          <li>Make sure intercompany balances agree on both sides at each reporting date.</li>
          <li>Use one set of intercompany agreements and invoices as the source for both tax filings.</li>
        </ul>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Ask your Australian tax adviser to review the structure before you invest, not after the first return is due. The answer can change how you fund the subsidiary and how you price its services.</li>
          <li>Plan the reporting bridge early: the Indian year ends on 31 March, three months before most Australian groups report.</li>
          <li>Australia has no foreign bank account report like the US FBAR, but the Indian subsidiary&apos;s results and your dealings with it must still flow through the company tax return and schedules.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming Indian compliance covers the Australian disclosures.</li>
          <li>Learning about the CFC rules only after the first Australian return is due.</li>
          <li>Mismatched intercompany balances between the Indian and Australian books.</li>
          <li>Claiming a foreign income tax offset on dividends that are exempt in Australia.</li>
          <li>Not planning for the different financial years.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We supply the Indian books, tax computations, Withholding Tax certificates and intercompany
          reconciliations in the form your Australian tax adviser needs.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/accounting-assurance" className="text-blue-800 font-semibold hover:underline">Accounting and assurance</Link>{" "}
          ·{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources:{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          and the{" "}
          <a href="https://www.gst.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">GST portal</a>.
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
            { label: "Australian Taxation Office", href: "https://www.ato.gov.au/" },
            { label: "Australian Securities and Investments Commission", href: "https://asic.gov.au/" },
            { label: "Federal Register of Legislation (Australia)", href: "https://www.legislation.gov.au/" },
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
        title="Australian Parent Reporting for Your Indian Subsidiary?"
        description="Tell us your group structure — we'll map the India-side information your Australian tax adviser needs for CFC, IDS and foreign income tax offset reporting."
      />
    </main>
  )
}
