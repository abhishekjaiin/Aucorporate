import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function USSubsidiaryVsBranchPage() {
  return (
    <RegionClusterTemplate
      title="US Subsidiary vs Branch Office in India"
      subtitle="Understanding entity structure options and their tax, liability, and compliance implications for US parent companies."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "US Subsidiary vs Branch Office in India" },
            ]}
    >
      {/* H1 + INTRO */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          When a US company decides to operate in India, one of the first critical decisions is choosing between a subsidiary and a branch office structure. Each has distinct implications for taxation, liability, compliance, and operational flexibility. This guide walks through the key differences tailored to US GAAP accounting and US tax reporting requirements like Form 5471.
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
                <td className="border border-gray-300 p-4">Not a separate entity; extension of parent company</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">Liability</td>
                <td className="border border-gray-300 p-4">Limited to subsidiary&apos;s assets</td>
                <td className="border border-gray-300 p-4">Parent company jointly liable for all debts</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">US Tax Treatment</td>
                <td className="border border-gray-300 p-4 text-sm">A subsidiary is a separate foreign corporation for US tax purposes. The US parent reports ownership and financials annually on Form 5471, and may have current-year income inclusions under Subpart F/NCTI (formerly GILTI) rules even without a cash distribution.</td>
                <td className="border border-gray-300 p-4 text-sm">A branch is not a separate entity — its income flows directly onto the US parent&apos;s own Form 1120 return. The branch&apos;s activity is disclosed via Form 8858 rather than a separate foreign-corporation filing.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">GAAP to Ind AS</td>
                <td className="border border-gray-300 p-4">Separate Ind AS financial statements required; consolidation impacts GAAP reporting</td>
                <td className="border border-gray-300 p-4">Branch results included in parent&apos;s Ind AS financials</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Regulatory Complexity</td>
                <td className="border border-gray-300 p-4">Higher: ROC filings, independent audits, compliance duties</td>
                <td className="border border-gray-300 p-4">Lower: centralized compliance through parent</td>
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
            <li>✓ You may reinvest profits in India</li>
            <li>✓ You require separate Indian board governance</li>
          </ul>
        </div>
        <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Choose Branch Office If:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Short-term operations (under 2-3 years)</li>
            <li>✓ You prefer centralized compliance and accounting</li>
            <li>✓ Minimal Indian capital commitment</li>
            <li>✓ You plan to repatriate all profits immediately</li>
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
              What are the transfer pricing implications for each structure?
            </summary>
            <p className="mt-2 text-gray-600">
              Subsidiaries are separate entities and must follow Section 482 transfer pricing rules. Branches are not separate, so different pricing applies. For subsidiaries, related-party transaction amounts feed directly into Schedule M of Form 5471, so your transfer pricing documentation and your US information return need to tie out to the same numbers.
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
                name: "What are the transfer pricing implications for each structure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Subsidiaries are separate entities and must follow Section 482 transfer pricing rules. Branches are not separate, so different pricing applies. For subsidiaries, related-party transaction amounts feed directly into Schedule M of Form 5471, so your transfer pricing documentation and your US information return need to tie out to the same numbers.",
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
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            → Next: How to Incorporate a Subsidiary from the US
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            ← Back: US India-Entry Hub
          </Link>
        </div>
      </div>

      {/* BREADCRUMB */}
    </RegionClusterTemplate>
  )
}
