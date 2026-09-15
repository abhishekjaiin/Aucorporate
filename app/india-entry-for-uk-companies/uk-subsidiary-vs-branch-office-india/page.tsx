import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'

export default function UKSubsidiaryVsBranchPage() {
  return (
    <RegionClusterTemplate
      title="UK Subsidiary vs Branch Office in India"
      subtitle="Structural differences and UK tax implications when choosing how your UK company enters the Indian market."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
              { label: "UK Subsidiary vs Branch Office in India" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          UK companies entering India typically choose between a wholly-owned subsidiary (Private Limited company) and a branch office. The right choice depends on your regulatory appetite, tax position, and how independently the Indian operation needs to run.
        </p>
        <p className="text-lg text-gray-700">
          Beyond the basic legal distinction, the choice carries real consequences for how long RBI approval takes, what your India operation is actually allowed to do, what you&apos;ll pay in Indian corporate tax, how the structure is treated back home under UK CFC and branch-exemption rules, and even how easily you can wind it down later — all covered in the comparison below.
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Subsidiary vs Branch Office: Full Comparison</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-4 text-left">Factor</th>
              <th className="border border-gray-300 p-4 text-left">Subsidiary (Private Limited)</th>
              <th className="border border-gray-300 p-4 text-left">Branch Office</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Legal status</td>
              <td className="border border-gray-300 p-4 text-sm">Separate Indian legal entity; UK parent&apos;s liability is limited to its shareholding.</td>
              <td className="border border-gray-300 p-4 text-sm">Not a separate entity — the UK parent is directly liable for the branch&apos;s obligations in India.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">RBI approval</td>
              <td className="border border-gray-300 p-4 text-sm">Automatic route available for most sectors; no prior RBI approval needed for incorporation itself — typically 3-5 weeks via the Companies Act process.</td>
              <td className="border border-gray-300 p-4 text-sm">Requires specific RBI approval via an Authorised Dealer bank before commencing operations — generally reserved for companies with an established profit/net-worth track record, and can take 8-12 weeks or more once the AD bank and RBI review stages are factored in.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Permitted activities</td>
              <td className="border border-gray-300 p-4 text-sm">Full commercial operations, manufacturing, and revenue generation as permitted under the sector&apos;s FDI policy.</td>
              <td className="border border-gray-300 p-4 text-sm">Restricted to activities specified in RBI approval — typically export/import trading, professional/consultancy services, or research on behalf of the parent.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Corporate tax rate</td>
              <td className="border border-gray-300 p-4 text-sm">Can elect into India&apos;s concessional domestic-company regime — 22% base rate, ~25.17% effective once surcharge and cess are added — on income earned in India.</td>
              <td className="border border-gray-300 p-4 text-sm">Taxed as a foreign company&apos;s permanent establishment: 35% base rate (cut from 40% by the Finance Act, 2024) plus applicable surcharge and cess, roughly 36-38% effective — and how much profit is attributable to the PE is a common point of dispute with Indian tax authorities.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">India-UK DTAA treatment</td>
              <td className="border border-gray-300 p-4 text-sm">Dividends repatriated to the UK parent are taxed as dividend income — capped at 10% withholding under the treaty (15% for certain property-income vehicles), well below the 20% domestic rate.</td>
              <td className="border border-gray-300 p-4 text-sm">Branch profits are taxed as business income attributable to the Indian permanent establishment, then the after-tax profit repatriated to the UK is not subject to a separate India dividend withholding, since it isn&apos;t a dividend distribution.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Royalties &amp; fees for technical services</td>
              <td className="border border-gray-300 p-4 text-sm">Management fees, IP licensing, and other royalty/FTS payments to the UK parent are capped at 15% withholding under Article 13 of the DTAA (10% for equipment royalties). Unlike the India-US treaty, the India-UK treaty has no &quot;make available&quot; clause, so this cap applies to essentially all managerial, technical, and consultancy fees — still well below India&apos;s domestic Section 115A rate, which the Finance Act, 2023 doubled from 10% to 20% (plus surcharge/cess) for non-residents who haven&apos;t filed an Indian return and claimed the treaty rate.</td>
              <td className="border border-gray-300 p-4 text-sm">A branch doesn&apos;t pay itself a royalty or management fee — transfers between a branch and its own head office are internal, not third-party payments, so this withholding analysis doesn&apos;t apply the same way. Intra-entity cost allocations are instead scrutinised through PE profit-attribution rules rather than a withholding tax.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">UK tax treatment</td>
              <td className="border border-gray-300 p-4 text-sm">A wholly UK-owned Indian subsidiary is a separate foreign company and will generally be a Controlled Foreign Company (CFC) under Part 9A of the Taxation (International and Other Provisions) Act 2010. Whether an actual UK CFC charge arises depends on Part 9A&apos;s gateway and exemption tests — since India&apos;s ~25.17% effective subsidiary rate sits close to the UK&apos;s 25% main corporation tax rate, many Indian trading subsidiaries are likely to qualify for the Part 9A tax exemption test, but this depends on the specific mix of trading vs. non-trading (IP, finance) income and should be checked with a UK tax adviser rather than assumed.</td>
              <td className="border border-gray-300 p-4 text-sm">Branch profits are automatically included in the UK parent&apos;s own worldwide corporation tax computation unless the company makes an irrevocable election under Chapter 3A, Part 2 of the Corporation Tax Act 2009 to exempt foreign branch profits (and forgo foreign branch loss relief). Without that election, UK tax is charged on the branch&apos;s profits with double tax relief (a credit) for the Indian tax already paid, under Article 24 of the DTAA.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Compliance burden</td>
              <td className="border border-gray-300 p-4 text-sm">Standard Companies Act filings (annual return, financial statements, board meetings) plus tax and FEMA compliance.</td>
              <td className="border border-gray-300 p-4 text-sm">Annual activity certificate to the RBI in addition to tax filings; generally lighter corporate compliance since there&apos;s no separate company to maintain, though profit attribution to the PE typically needs its own supporting study for tax purposes.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Exit / closure process</td>
              <td className="border border-gray-300 p-4 text-sm">ROC strike-off under Section 248 of the Companies Act, 2013 (fast, low-cost, but only if dormant for the prior 2 years with all liabilities cleared) or a formal voluntary liquidation under IBBI regulations if the entity has ongoing obligations to wind down in an orderly way.</td>
              <td className="border border-gray-300 p-4 text-sm">Requires RBI approval through the AD Category-I bank — the original RBI permission letter, an auditor&apos;s certificate confirming all Indian liabilities are settled and specifying the remittable amount, income-tax clearance, ROC confirmation of return filings, and Form 15CA/15CB for the final outward remittance. This RBI-approval step typically adds 2-6 months versus a straightforward company closure, and any open transfer-pricing assessments or FEMA contraventions need to be resolved first.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Which one UK companies typically choose</h3>
        <p className="text-gray-700">
          Companies planning to actually sell into the Indian market — not just liaise or research — almost always go the subsidiary route, since branch offices are restricted to a narrower band of permitted activities and require upfront RBI approval that a subsidiary doesn&apos;t. Branches make more sense for a UK company testing India as a services/consulting base before committing to full market entry. The tax gap reinforces this: subsidiaries can access India&apos;s ~25.17% concessional corporate rate, while branch profits are taxed at roughly 36-38% as a permanent establishment — a material difference for any UK company expecting steady India profits, not just a compliance-effort difference.
        </p>
      </div>

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
            <li>✓ Short-term operations (under 2-3 years)</li>
            <li>✓ You prefer centralized UK compliance and accounting</li>
            <li>✓ Minimal Indian capital commitment</li>
            <li>✓ Your activities fit within RBI&apos;s permitted branch-office categories</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-gray-700 mb-4">
          Still weighing it? The tool below approaches the same decision from what your India operation actually needs to do, rather than starting from the legal labels.
        </p>
        <EntitySelectorTool />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">UK Tax Considerations at a Glance</h2>
        <div className="space-y-6">
          <ClickableInfoCard
            title="CFC status under Part 9A TIOPA 2010"
            desc="A wholly UK-owned Indian subsidiary is generally a Controlled Foreign Company (CFC) under Part 9A of the Taxation (International and Other Provisions) Act 2010. Whether a CFC charge actually arises depends on Part 9A's gateway and exemption tests — with India's ~25.17% effective subsidiary rate sitting close to the UK's 25% main corporation tax rate, many trading subsidiaries are likely to qualify for the tax exemption test, but non-trading income (IP, intercompany finance) needs a closer look with a UK tax adviser."
          />
          <ClickableInfoCard
            title="Foreign branch profits exemption (CTA 2009, Chapter 3A Part 2)"
            desc="A UK company can make an irrevocable election to exempt its foreign branches' profits (and losses) from UK corporation tax entirely, covering the Indian branch alongside any others. HMRC's 2026 technical consultation, which closed 7 September 2026, proposes making this exemption mandatory for accounting periods from 2027 rather than elective — not yet enacted, but worth watching if you're planning a branch structure on a multi-year horizon."
          />
          <ClickableInfoCard
            title="Double tax relief if you don't elect branch exemption"
            desc="Without the Chapter 3A election, branch profits are taxed in the UK on the worldwide basis, with a credit for Indian tax already paid available under Article 24 of the India-UK DTAA (or unilateral relief under Part 2 of TIOPA 2010 where the treaty credit doesn't fully cover it) — so double taxation is mitigated either way, but the compliance mechanics and cash-flow timing differ from making the exemption election."
          />
          <ClickableInfoCard
            title="Royalties, FTS, and the 'no make-available' clause"
            desc="The India-UK DTAA caps royalty and fees-for-technical-services withholding at 15% (10% for equipment royalties) under Article 13, and — unlike the India-US treaty — has no 'make available' carve-out, so it covers all managerial, technical, and consultancy fees regardless of whether know-how transfers. That's still meaningfully below India's domestic Section 115A rate, doubled to 20% by the Finance Act, 2023 for non-residents without a filed Indian return and treaty claim."
          />
        </div>
      </div>

      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h3 className="font-bold text-lg mb-2">Regulatory watch: RBI&apos;s proposed reforms to branch/liaison office rules</h3>
        <p className="text-gray-700">
          In October 2025, the RBI released draft Foreign Exchange Management (Establishment in India of a Branch or Office) Regulations, 2025 for public consultation, proposing to replace the existing 2016 framework — including removing the current net-worth and profit-track-record eligibility criteria and moving away from a fixed list of permitted activities toward a principle-based approach. As of the most recently available information, this remains a draft that has completed stakeholder consultation but has not yet been notified in the Official Gazette; the rules described in the table above are the ones currently in force. UK companies planning a branch office on a multi-quarter timeline should keep an eye on the final regulations before locking in their structure.
        </p>
      </div>

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
              Does an Indian subsidiary trigger UK CFC rules?
            </summary>
            <p className="mt-2 text-gray-600">
              Generally yes — a wholly UK-owned Indian subsidiary falls within the CFC regime under Part 9A of TIOPA 2010, though whether an actual charge arises depends on the gateway and exemption tests. Given India&apos;s ~25.17% effective subsidiary rate sits close to the UK&apos;s 25% main corporation tax rate, many trading subsidiaries are likely to qualify for the Part 9A tax exemption test, but this depends on the specific income mix and is worth confirming with a UK tax adviser rather than assuming.
            </p>
          </details>
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              Can a UK company get relief for tax already paid on Indian branch profits?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, in one of two ways: by making the irrevocable election under Chapter 3A, Part 2 of the Corporation Tax Act 2009 to exempt foreign branch profits from UK tax entirely, or — if that election isn&apos;t made — by claiming a credit for the Indian tax paid against the UK tax due on those same profits, under Article 24 of the India-UK DTAA. A 2026 HMRC consultation proposes making the exemption mandatory from 2027, but that change had not been enacted as of this page&apos;s last update.
            </p>
          </details>
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              Which structure has the lower effective tax rate in India?
            </summary>
            <p className="mt-2 text-gray-600">
              A subsidiary electing India&apos;s concessional domestic-company regime pays roughly 25.17% effective tax. A branch office is taxed as a foreign company&apos;s permanent establishment at a 35% base rate (cut from 40% by the Finance Act, 2024), roughly 36-38% effective with surcharge and cess — and separately, how much profit gets attributed to the Indian PE is itself a common point of dispute with Indian tax authorities.
            </p>
          </details>
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              What withholding rate applies to royalties and technical service fees under the India-UK DTAA?
            </summary>
            <p className="mt-2 text-gray-600">
              15% generally, or 10% for equipment royalties, under Article 13 of the treaty — with no &quot;make available&quot; carve-out, so it covers essentially all managerial, technical, and consultancy fees. That&apos;s still well below India&apos;s domestic Section 115A rate, which the Finance Act, 2023 doubled from 10% to 20% for non-residents who haven&apos;t filed an Indian return and claimed the treaty rate.
            </p>
          </details>
          <details className="p-4 border border-gray-300 rounded-lg cursor-pointer group">
            <summary className="font-bold text-gray-800 group-open:text-yellow-600">
              Is it harder to close a branch office or wind up a subsidiary?
            </summary>
            <p className="mt-2 text-gray-600">
              A dormant, debt-free subsidiary can often use the faster ROC strike-off route under Section 248 of the Companies Act, 2013; one with ongoing obligations needs a formal voluntary liquidation instead. A branch office closure always requires RBI approval through your Authorised Dealer bank — the original RBI permission letter, an auditor&apos;s certificate confirming all Indian liabilities are settled, ROC confirmation, and Form 15CA/15CB for the final remittance — which typically adds 2-6 months versus a straightforward company closure.
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
                name: "Does an Indian subsidiary trigger UK CFC rules?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generally yes — a wholly UK-owned Indian subsidiary falls within the CFC regime under Part 9A of TIOPA 2010, though whether an actual charge arises depends on the gateway and exemption tests. Given India's ~25.17% effective subsidiary rate sits close to the UK's 25% main corporation tax rate, many trading subsidiaries are likely to qualify for the Part 9A tax exemption test, but this depends on the specific income mix and is worth confirming with a UK tax adviser rather than assuming.",
                },
              },
              {
                "@type": "Question",
                name: "Can a UK company get relief for tax already paid on Indian branch profits?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, in one of two ways: by making the irrevocable election under Chapter 3A, Part 2 of the Corporation Tax Act 2009 to exempt foreign branch profits from UK tax entirely, or by claiming a credit for the Indian tax paid against the UK tax due on those same profits under Article 24 of the India-UK DTAA. A 2026 HMRC consultation proposes making the exemption mandatory from 2027, but that change had not been enacted as of this page's last update.",
                },
              },
              {
                "@type": "Question",
                name: "Which structure has the lower effective tax rate in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A subsidiary electing India's concessional domestic-company regime pays roughly 25.17% effective tax. A branch office is taxed as a foreign company's permanent establishment at a 35% base rate (cut from 40% by the Finance Act, 2024), roughly 36-38% effective with surcharge and cess, and profit attribution to the Indian PE is itself a common point of dispute with Indian tax authorities.",
                },
              },
              {
                "@type": "Question",
                name: "What withholding rate applies to royalties and technical service fees under the India-UK DTAA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "15% generally, or 10% for equipment royalties, under Article 13 of the treaty, with no \"make available\" carve-out, covering essentially all managerial, technical, and consultancy fees. That's still well below India's domestic Section 115A rate, doubled from 10% to 20% by the Finance Act, 2023 for non-residents who haven't filed an Indian return and claimed the treaty rate.",
                },
              },
              {
                "@type": "Question",
                name: "Is it harder to close a branch office or wind up a subsidiary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A dormant, debt-free subsidiary can often use the faster ROC strike-off route under Section 248 of the Companies Act, 2013; one with ongoing obligations needs a formal voluntary liquidation instead. A branch office closure always requires RBI approval through an Authorised Dealer bank, which typically adds 2-6 months versus a straightforward company closure.",
                },
              },
            ],
          }),
        }}
      />

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India-UK DTAA & Withholding Rates →
          </Link>
          <Link href="/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            How to Incorporate a Subsidiary from the UK →
          </Link>
          <Link href="/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for UK Companies →
          </Link>
          <Link href="/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Cost & Timeline to Incorporate from the UK →
          </Link>
          <Link href="/india-entry-for-uk-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for UK Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
