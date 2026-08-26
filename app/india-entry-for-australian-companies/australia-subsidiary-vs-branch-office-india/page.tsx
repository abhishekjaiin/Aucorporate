import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function AustraliaSubsidiaryVsBranchPage() {
  return (
    <RegionClusterTemplate
      title="Australia Subsidiary vs Branch Office in India"
      subtitle="Understanding entity structure options and their tax, liability, and compliance implications for Australian parent companies."
      region="Australia"
      breadcrumbItems={[
        { label: "India Entry for Australian Companies", href: "/india-entry-for-australian-companies" },
        { label: "Australia Subsidiary vs Branch Office in India" },
      ]}
    >
      {/* H1 + INTRO */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          When an Australian company decides to operate in India, one of the first structural decisions is choosing between a subsidiary and a branch office. Each carries different implications for liability, Australian tax reporting under the Controlled Foreign Company (CFC) rules, and how much regulatory complexity you take on day one. This guide walks through the key differences with the Australia-specific considerations most comparison guides skip.
        </p>
      </div>

      {/* COMPARISON TABLE */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Subsidiary vs Branch Office: Side-by-Side Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-4 text-left font-bold">Aspect</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Subsidiary (Pvt Ltd)</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Branch Office</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Legal Entity</td>
                <td className="border border-gray-300 p-4">Separate legal entity incorporated under Indian law</td>
                <td className="border border-gray-300 p-4">Not a separate entity; extension of the parent company</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">Liability</td>
                <td className="border border-gray-300 p-4">Limited to the subsidiary&apos;s assets</td>
                <td className="border border-gray-300 p-4">Parent company jointly liable for all debts</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">RBI Approval</td>
                <td className="border border-gray-300 p-4 text-sm">Automatic route available for most sectors; no prior RBI approval needed for incorporation itself.</td>
                <td className="border border-gray-300 p-4 text-sm">Requires specific RBI approval via an Authorised Dealer bank before commencing operations — generally reserved for companies with an established track record.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">Australian Tax Treatment</td>
                <td className="border border-gray-300 p-4 text-sm">An Indian subsidiary is a foreign company for Australian tax purposes and generally falls within Australia&apos;s Controlled Foreign Company (CFC) rules under Part X of the Income Tax Assessment Act 1936 — certain categories of the subsidiary&apos;s income can be attributed back to the Australian parent and taxed in Australia even before any dividend is actually paid out, subject to the active income test and India&apos;s status for CFC purposes.</td>
                <td className="border border-gray-300 p-4 text-sm">A branch is not a separate entity — its income and losses generally flow directly into the Australian parent&apos;s own tax return as foreign branch income, rather than through the separate CFC attribution regime that applies to a subsidiary.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Accounting Standards</td>
                <td className="border border-gray-300 p-4 text-sm">Separate Ind AS financial statements required in India; consolidation into the parent&apos;s AASB (Australian Accounting Standards) financials follows the usual subsidiary-consolidation rules.</td>
                <td className="border border-gray-300 p-4 text-sm">Branch results are included directly in the parent&apos;s own AASB financial statements — no separate consolidation step.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">India-Australia DTAA Treatment</td>
                <td className="border border-gray-300 p-4 text-sm">Dividends repatriated to the Australian parent are taxed as dividend income — capped at 15% withholding under the treaty. Royalties and fees for technical services carry a split rate (10% on equipment-related royalties, 15% on others), though the Finance Act 2023&apos;s cut to India&apos;s domestic royalty/FTS withholding rate (10%) now often applies instead of the treaty rate.</td>
                <td className="border border-gray-300 p-4 text-sm">A branch has no separate dividend to repatriate — profit remittances to the Australian head office are governed by India&apos;s branch profit remittance rules rather than the DTAA&apos;s dividend article.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Regulatory Complexity</td>
                <td className="border border-gray-300 p-4">Higher: RoC filings, independent statutory audit, ongoing compliance duties</td>
                <td className="border border-gray-300 p-4">Lower on the India side, but Australian CFC-adjacent reporting and branch-specific disclosures still apply</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* WHEN TO CHOOSE EACH */}
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="p-6 border-2 border-green-200 rounded-lg bg-green-50">
          <h3 className="text-xl font-bold text-green-700 mb-4">Choose Subsidiary If:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ You plan long-term India operations</li>
            <li>✓ You want to limit parent company liability</li>
            <li>✓ You may reinvest profits in India rather than repatriate immediately</li>
            <li>✓ You need full commercial and hiring flexibility</li>
          </ul>
        </div>
        <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Choose Branch Office If:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Short-term or narrowly scoped operations</li>
            <li>✓ You prefer centralized compliance and accounting</li>
            <li>✓ Minimal Indian capital commitment</li>
            <li>✓ Your activities fit within RBI&apos;s permitted branch-office categories</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              Can I convert a branch to a subsidiary later?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, though the process requires Board approval, RBI permission, and restructuring of assets. Timelines depend on RBI processing volume and how complete your documentation is at submission — we scope this precisely once we understand your specific structure.
            </p>
          </details>
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              Does an Indian subsidiary trigger Australia&apos;s CFC attribution rules?
            </summary>
            <p className="mt-2 text-gray-600">
              Generally yes — an Indian subsidiary that&apos;s majority-controlled by an Australian parent falls within the CFC regime under Part X of the Income Tax Assessment Act 1936, meaning certain categories of the subsidiary&apos;s income can be attributed back to Australia and taxed there before any dividend is actually paid, subject to the active income test. This is a genuine planning consideration distinct from the India-side tax treatment, and is worth structuring with an Australian tax adviser alongside the India-side setup.
            </p>
          </details>
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              How does the India-Australia DTAA affect which structure makes more sense?
            </summary>
            <p className="mt-2 text-gray-600">
              The DTAA caps dividend withholding at 15% for a subsidiary&apos;s profit repatriation — higher than several of India&apos;s other treaties, which changes the repatriation math compared to entering from a country with a lower flat treaty rate. A branch doesn&apos;t have a dividend to repatriate at all — its remittances follow India&apos;s branch profit remittance rules instead — so the DTAA&apos;s dividend article is only relevant to the subsidiary route.
            </p>
          </details>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can I convert a branch to a subsidiary later?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, though the process requires Board approval, RBI permission, and restructuring of assets. Timelines depend on RBI processing volume and how complete your documentation is at submission — we scope this precisely once we understand your specific structure.",
                },
              },
              {
                "@type": "Question",
                name: "Does an Indian subsidiary trigger Australia's CFC attribution rules?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generally yes — an Indian subsidiary that's majority-controlled by an Australian parent falls within the CFC regime under Part X of the Income Tax Assessment Act 1936, meaning certain categories of the subsidiary's income can be attributed back to Australia and taxed there before any dividend is actually paid, subject to the active income test. This is a genuine planning consideration distinct from the India-side tax treatment, and is worth structuring with an Australian tax adviser alongside the India-side setup.",
                },
              },
              {
                "@type": "Question",
                name: "How does the India-Australia DTAA affect which structure makes more sense?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The DTAA caps dividend withholding at 15% for a subsidiary's profit repatriation — higher than several of India's other treaties, which changes the repatriation math compared to entering from a country with a lower flat treaty rate. A branch doesn't have a dividend to repatriate at all — its remittances follow India's branch profit remittance rules instead — so the DTAA's dividend article is only relevant to the subsidiary route.",
                },
              },
            ],
          }),
        }}
      />

      {/* RELATED SUB-PAGES */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Continue Your India Entry Journey</h3>
        <div className="space-y-2">
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold block">
            → Full company registration process in India
          </Link>
          <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold block">
            → Setting up a Global Capability Center in India
          </Link>
          <Link href="/india-entry-for-australian-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold block">
            ← Back: Australia India-Entry Hub
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
