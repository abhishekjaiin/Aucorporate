import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'

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
        <p className="text-lg text-gray-700">
          Beyond the basic legal distinction, the choice carries real consequences for how long RBI approval takes, what your India operation is actually allowed to do, what you&apos;ll pay in Indian corporate tax, how the structure is treated back home for US tax purposes, and even how easily you can wind it down later — all covered in the comparison below.
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
                <td className="border border-gray-300 p-4 font-semibold">RBI Approval &amp; Timeline</td>
                <td className="border border-gray-300 p-4 text-sm">Automatic route for most sectors — no prior RBI approval for the FDI itself; incorporation typically takes 3-5 weeks via the standard Companies Act/SPICe+ process.</td>
                <td className="border border-gray-300 p-4 text-sm">Requires specific RBI approval via an Authorised Dealer bank before commencing operations, generally 8-12 weeks or longer. Under the current (2016) framework this approval also depends on the US parent meeting a USD 100,000 minimum net worth and a 5-year profit track record — see the regulatory watch note below.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">Permitted Activities</td>
                <td className="border border-gray-300 p-4 text-sm">Full commercial operations, manufacturing, and revenue generation as permitted under the sector&apos;s FDI policy.</td>
                <td className="border border-gray-300 p-4 text-sm">Restricted to the 8 activities specified under Annex 1 to FEMA 22(R)/2016 — export/import trading, professional/consultancy services, R&amp;D, technical support, and similar — and cannot undertake manufacturing or processing in India.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">India Corporate Tax Rate</td>
                <td className="border border-gray-300 p-4 text-sm">Can elect into India&apos;s concessional domestic-company regime — 22% base rate, roughly 25.17% effective with surcharge and cess — on income earned in India.</td>
                <td className="border border-gray-300 p-4 text-sm">Taxed as a foreign company&apos;s permanent establishment: 35% base rate (cut from 40% by the Finance Act, 2024), roughly 36-38% effective. Under Article 7 of the India-US DTAA, profits are attributed to the PE using a &quot;functionally separate entity&quot; test — how much of the parent&apos;s global profit gets attributed to the Indian branch is a genuine, recurring point of dispute with Indian tax authorities, not just a paperwork difference.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">US Tax Treatment</td>
                <td className="border border-gray-300 p-4 text-sm">A subsidiary is a separate foreign corporation for US tax purposes, and a wholly-owned one is almost always a Controlled Foreign Corporation (CFC) under IRC Section 957. The US parent reports ownership and financials annually on Form 5471, and may have current-year income inclusions under Subpart F/NCTI (formerly GILTI) rules even without a cash distribution — though active business income from unrelated Indian customers is typically outside Subpart F, it&apos;s intercompany management fees, royalties, and interest between group entities that most often trigger an inclusion.</td>
                <td className="border border-gray-300 p-4 text-sm">A branch is not a separate entity — its income flows directly onto the US parent&apos;s own Form 1120 return. The branch&apos;s activity is disclosed via Form 8858 rather than a separate foreign-corporation filing, and CFC/Subpart F rules don&apos;t apply since there&apos;s no separate foreign corporation to be a CFC.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Capitalization &amp; Funding</td>
                <td className="border border-gray-300 p-4 text-sm">Equity funding is reported to the RBI via Form FC-GPR. On the US side, contributing more than $100,000 in cash or property to the subsidiary within a 12-month period is a reportable transfer of property to a foreign corporation under IRC Section 6038B, filed on Form 926 with the parent&apos;s US tax return.</td>
                <td className="border border-gray-300 p-4 text-sm">Funding a branch is simply remitting funds within the same legal entity, not a transfer to a separate foreign corporation — Form 926 doesn&apos;t apply in the same way, though the remittance itself still needs to be tracked through the branch&apos;s FEMA reporting.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">GAAP to Ind AS</td>
                <td className="border border-gray-300 p-4">Separate Ind AS financial statements required; consolidation impacts GAAP reporting</td>
                <td className="border border-gray-300 p-4">Branch results included in parent&apos;s Ind AS financials</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Ongoing Regulatory Complexity</td>
                <td className="border border-gray-300 p-4 text-sm">Higher: ROC filings, independent statutory audit, board governance, and standard Companies Act compliance duties.</td>
                <td className="border border-gray-300 p-4 text-sm">Lower on the corporate-filings side (no separate company to maintain, just an annual activity certificate to the RBI) — but PE profit attribution for tax purposes typically needs its own supporting study, which is its own recurring compliance cost.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">Exit / Closure Process</td>
                <td className="border border-gray-300 p-4 text-sm">ROC strike-off under Section 248 of the Companies Act (fast, low-cost, but only if dormant for the prior 2 years with all liabilities cleared) or a formal voluntary liquidation under IBBI regulations if the entity has ongoing obligations to wind down in an orderly way.</td>
                <td className="border border-gray-300 p-4 text-sm">Requires RBI approval through the AD Category-I bank — original RBI permission letter, auditor&apos;s certificate confirming all Indian liabilities are settled, ROC closure certificate, and Form 15CA/15CB for the final outward remittance. This RBI-approval step typically adds 2-6 months versus a straightforward company closure.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* WHICH ONE US COMPANIES TYPICALLY CHOOSE */}
      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Which one US companies typically choose</h3>
        <p className="text-gray-700">
          US companies planning to actually sell into, hire in, or hold assets in the Indian market — not just liaise or test the water — almost always choose the subsidiary route: it isn&apos;t gated by RBI pre-approval, isn&apos;t restricted to a fixed list of permitted activities, and gives full commercial flexibility under the sector&apos;s FDI policy. The tax gap reinforces this: a subsidiary can access India&apos;s ~25.17% effective concessional corporate rate, while branch profits are taxed as a permanent establishment at roughly 36-38% effective — a material difference for any US company expecting steady India profits, not just a compliance-effort difference. Branch offices tend to make more sense for a narrowly scoped presence — research, liaison-adjacent work, or a single time-limited project — where the RBI&apos;s fixed list of permitted activities isn&apos;t a real constraint on what you&apos;re trying to do.
        </p>
      </div>

      {/* REGULATORY WATCH */}
      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h3 className="font-bold text-lg mb-2">Regulatory watch: RBI&apos;s proposed reforms to branch/liaison office rules</h3>
        <p className="text-gray-700">
          In October 2025, the RBI released draft Foreign Exchange Management (Establishment in India of a Branch or Office) Regulations, 2025 for public consultation, proposing to replace the existing 2016 framework that currently governs branch offices — including removing the USD 100,000 net-worth and 5-year profit-track-record eligibility criteria described above, and moving from a fixed list of permitted activities toward a more flexible, principle-based approach. As of the most recently available information, this remains a draft that has completed stakeholder consultation but has not yet been notified in the Official Gazette; the eligibility criteria and permitted-activities list described in the table above are the ones currently in force. US companies planning a branch office on a multi-month timeline should confirm the current status of these rules with us before locking in a structure.
        </p>
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

      {/* INTERACTIVE ENTITY SELECTOR */}
      <div className="mb-12">
        <p className="text-gray-700 mb-4">
          Still weighing it? The tool below approaches the same decision from what your India operation actually needs to do, rather than starting from the legal labels.
        </p>
        <EntitySelectorTool />
      </div>

      {/* US TAX CONSIDERATIONS AT A GLANCE */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">US Tax Considerations at a Glance</h2>
        <div className="space-y-6">
          <ClickableInfoCard
            title="CFC status, Subpart F & NCTI"
            desc="A wholly-owned Indian subsidiary is almost always a Controlled Foreign Corporation (CFC) under IRC Section 957, since the US parent owns more than 50% of it. Active business income the subsidiary earns from unrelated Indian customers is generally outside Subpart F, but intercompany management fees, royalties, and interest paid to or from other group entities can trigger a current-year Subpart F or NCTI (formerly GILTI) inclusion — another reason to keep the intercompany pricing structure clean."
          />
          <ClickableInfoCard
            title="Form 5471 vs. Form 8858"
            desc="A subsidiary is reported annually on Form 5471 as a separate foreign corporation. A branch isn't a separate entity, so its activity is instead disclosed on Form 8858 (Information Return of U.S. Persons With Respect to Foreign Disregarded Entities and Foreign Branches), with its income and expenses flowing straight onto the parent's own Form 1120."
          />
          <ClickableInfoCard
            title="Form 926 on initial capitalization"
            desc="Contributing more than $100,000 in cash or property to a subsidiary within a 12-month period is a reportable transfer of property to a foreign corporation under IRC Section 6038B, filed on Form 926 with the US parent's return. Funding a branch is simply moving money within the same legal entity, not a transfer to a foreign corporation, so Form 926 doesn't apply the same way — one of the more overlooked structural differences at the funding stage."
          />
          <ClickableInfoCard
            title="Section 482 & Schedule M consistency"
            desc="Every intercompany transaction with a subsidiary is a related-party transaction under Section 482, and the same figures need to tie out on Schedule M of Form 5471 and on the transfer pricing documentation filed in India. A branch doesn't have its own Schedule M, but its DTAA profit attribution carries a similar consistency risk between the US and Indian filings."
          />
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
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              What net worth and track record does a US parent need to open a branch office?
            </summary>
            <p className="mt-2 text-gray-600">
              Under the current (2016) RBI framework, a branch office applicant needs a minimum net worth of USD 100,000 and a 5-year record of profitability immediately preceding the application. The RBI&apos;s October 2025 draft regulations propose removing both of these criteria, but that reform is not yet in force — see the regulatory watch note above for the current status.
            </p>
          </details>
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              Which structure has the lower effective tax rate in India?
            </summary>
            <p className="mt-2 text-gray-600">
              A subsidiary electing India&apos;s concessional domestic-company regime pays roughly 25.17% effective tax. A branch office is taxed as a foreign company&apos;s permanent establishment at a 35% base rate (cut from 40% by the Finance Act, 2024), roughly 36-38% effective with surcharge and cess — and separately, how much profit gets attributed to the Indian PE under the India-US DTAA is itself a common point of dispute with Indian tax authorities.
            </p>
          </details>
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              Is it harder to close a branch office or wind up a subsidiary?
            </summary>
            <p className="mt-2 text-gray-600">
              A dormant, debt-free subsidiary can often use the faster ROC strike-off route under Section 248 of the Companies Act; one with ongoing obligations needs a formal voluntary liquidation instead. A branch office closure always requires RBI approval through your Authorised Dealer bank — the original RBI permission letter, an auditor&apos;s certificate confirming all Indian liabilities are settled, ROC closure certificate, and Form 15CA/15CB for the final remittance — which typically adds 2-6 months versus a straightforward company closure.
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
              {
                "@type": "Question",
                name: "What net worth and track record does a US parent need to open a branch office?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Under the current (2016) RBI framework, a branch office applicant needs a minimum net worth of USD 100,000 and a 5-year record of profitability immediately preceding the application. The RBI's October 2025 draft regulations propose removing both of these criteria, but that reform is not yet in force.",
                },
              },
              {
                "@type": "Question",
                name: "Which structure has the lower effective tax rate in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A subsidiary electing India's concessional domestic-company regime pays roughly 25.17% effective tax. A branch office is taxed as a foreign company's permanent establishment at a 35% base rate (cut from 40% by the Finance Act, 2024), roughly 36-38% effective with surcharge and cess, and profit attribution to the Indian PE under the India-US DTAA is itself a common point of dispute with Indian tax authorities.",
                },
              },
              {
                "@type": "Question",
                name: "Is it harder to close a branch office or wind up a subsidiary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A dormant, debt-free subsidiary can often use the faster ROC strike-off route under Section 248 of the Companies Act; one with ongoing obligations needs a formal voluntary liquidation instead. A branch office closure always requires RBI approval through an Authorised Dealer bank, which typically adds 2-6 months versus a straightforward company closure.",
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
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold block">
            Transfer Pricing &amp; Section 482 for US Parent Companies →
          </Link>
          <Link href="/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold block">
            Cost &amp; Timeline to Incorporate from the US →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold block">
            ← Back: US India-Entry Hub
          </Link>
        </div>
      </div>

      {/* BREADCRUMB */}
    </RegionClusterTemplate>
  )
}
