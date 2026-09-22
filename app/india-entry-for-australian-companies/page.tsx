import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { InlineInquiryCTA } from '@/components/InlineInquiryCTA'

export default function IndiaEntryForAustralianCompanies() {
  return (
    <RegionClusterTemplate
      title="Doing Business in India: The Complete Guide for Australian Companies"
      subtitle="AU Corporate helps Australian companies establish and scale their Indian operations, with expertise in India-Australia ECTA benefits, FEMA compliance, and GCC setup."
      region="Australia"
      breadcrumbItems={[
              { label: "India Entry for Australian Companies" },
            ]}
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          India and Australia have deepened trade and investment ties through the India-Australia Economic Cooperation and Trade Agreement (ECTA), in force since December 2022, with both governments agreeing to accelerate negotiations on a broader Comprehensive Economic Cooperation Agreement (CECA) — eleven rounds in — at their July 2026 Annual Summit, alongside a proposed Bilateral Investment Treaty. That momentum is making India an increasingly common expansion destination for Australian companies. We help you choose the right entity structure and stay compliant from incorporation through ongoing operations.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance practice handles the FEMA and RBI filings foreign-owned subsidiaries need to stay compliant after incorporation.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Australia&apos;s India Engagement Infrastructure: AIBX, CAIR, and the Innovation Network
        </h2>
        <p className="text-gray-700 mb-4">
          Two-way trade in goods and services between Australia and India reached roughly A$50 billion in 2025, with Australian agricultural exports to India up 131% since 2022 — helped along by ECTA&apos;s tariff cuts — and industrial exports (excluding coal) up 70% over the same period, according to Australia&apos;s Department of Foreign Affairs and Trade. Education remains Australia&apos;s single largest services export to India, at roughly A$9.4 billion, a reminder that the relationship runs well beyond the manufacturing and mining sectors most market-entry guides focus on.
        </p>
        <p className="text-gray-700 mb-4">
          Australian companies evaluating India also have access to government-backed facilitation channels most other foreign investors don&apos;t. The <strong>Australia-India Business Exchange (AIBX)</strong> — an Austrade program now folded into the broader South Asia Business Exchange — connects Australian exporters and investors with Austrade trade commissioners across major Indian cities, backed by a further $14.4 million in federal funding over four years to expand its reach. A companion initiative, the <strong>Australia-India Innovation Network (AIIN)</strong>, focuses specifically on helping Australian technology companies access India&apos;s digital economy.
        </p>
        <p className="text-gray-700">
          Separately, the <strong>Centre for Australia-India Relations (CAIR)</strong>, established by the Australian Government in 2023, runs the Maitri Grants and Fellowships program aimed at businesses — including SMEs — that don&apos;t yet have established channels into the Indian market. We regularly pick up engagements from Australian companies who&apos;ve already used AIBX or CAIR-level market intelligence before turning to us for the entity structuring, tax, and compliance work below.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What Australian Companies Need to Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Entity Structure</h3>
            <p className="text-gray-600 text-sm">Most Australian companies enter via a wholly-owned Private Limited subsidiary under the automatic FDI route for most sectors. See our <Link href="/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">subsidiary vs. branch office comparison</Link> for the full tradeoffs, including Australia&apos;s CFC attribution rules.</p>
            <InlineInquiryCTA />
          </div>
          <ClickableInfoCard title="India-Australia DTAA" desc="Unlike several of India's other major treaties, this one isn't a flat rate: 15% withholding on dividends and interest, and a split royalty/FTS rate — 10% on equipment-related royalties, 15% on other royalties and fees for technical services (subject to the treaty's 'make available' test). Finance Act 2023 raised India's domestic royalty/FTS withholding rate from 10% to 20% (effective April 2023), so the treaty rate is now the clearly better option — but claiming it requires a valid Tax Residency Certificate and Form 10F filed before remittance, or the higher domestic rate applies by default." />
          <ClickableInfoCard title="FEMA & RBI Filings" desc="Form FC-GPR on share allotment, Form FC-TRS on any transfer, and the annual FLA return — the same core filings that apply to any foreign-owned Indian subsidiary." />
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">GCC Setup</h3>
            <p className="text-gray-600 text-sm">We support Australian companies setting up a Global Capability Center in India end to end — entity, tax, payroll, and operational setup. See our <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">complete GCC setup guide</Link>.</p>
            <InlineInquiryCTA />
          </div>
          <ClickableInfoCard title="Transfer Pricing & Thin Capitalisation" desc="Intercompany loans, management fees, and royalty/IP licensing between an Australian parent and its Indian subsidiary must be arm's-length documented under India's transfer pricing rules (historically Section 92 of the Income Tax Act, 1961, restructured as Section 161 under the Income-tax Act, 2025, effective April 2026), and India disallows interest deductions above 30% of EBITDA once net interest crosses ₹1 crore. Australia runs its own earnings-based test under Division 820 of the ITAA 1997 — also a 30% tax-EBITDA fixed ratio test, for income years starting on or after 1 July 2024 — so funding structures need to clear both countries' interest-deductibility rules, not just India's." />
          <ClickableInfoCard title="Permanent Establishment Risk" desc="Rotating Australian engineers, mining-services, or consulting staff into India for installation, commissioning, or ongoing technical support can create a Service Permanent Establishment even without a fixed office — though the India-Australia DTAA sets a more generous 183-day-in-any-12-months threshold for services furnished through personnel than several of India's other treaties (90 days under the India-US DTAA, for example). Structuring secondment agreements and invoicing correctly before deployment is what keeps a short assignment from becoming a taxable presence." />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Complete Incorporation Process</h2>
        <p className="text-gray-700 mb-4">
          Incorporation follows the standard Companies Act, 2013 process: Digital Signature Certificate and Director Identification Number for the proposed directors, name reservation, the integrated SPICe+ filing (PAN, TAN, GSTIN, and EPFO/ESIC in one pass), and the Certificate of Incorporation. Australia is a longstanding Hague Apostille Convention member, so the Australian parent&apos;s certificate of incorporation and board resolution need apostille certification rather than consular legalisation — this authentication step, run through Australian notary and state/territory authorities, is typically what paces the overall timeline more than the Indian filing itself.
        </p>
        <p className="text-gray-700">
          Automatic Route investments typically clear in 4-6 weeks; Government Route investments run 8-12 weeks. For the full step-by-step process, documents checklist, and reconciled cost/timeline breakdown, see our{' '}
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            complete company registration guide
          </Link>, or our{' '}
          <Link href="/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            subsidiary vs. branch office comparison
          </Link>{' '}
          for entity-choice tradeoffs specific to Australian parents.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Common Questions from Australian Companies</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2 text-[#081a42]">Does an Australian parent need a resident director to incorporate an Indian subsidiary?</h3>
            <p className="text-gray-700">
              Yes. Under Section 149(3) of the Companies Act, 2013, every Indian company — including a wholly foreign-owned subsidiary — must have at least one director who was resident in India for 182 days or more in the preceding calendar year. Australian parents typically meet this with a local hire or a professional resident-director arrangement rather than waiting for an Australian national to relocate.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-[#081a42]">Do Australia&apos;s CFC rules apply to an Indian subsidiary?</h3>
            <p className="text-gray-700">
              Almost always — a wholly or majority Australian-owned Indian subsidiary will typically meet the ownership threshold to be a &quot;controlled foreign company&quot; for Australian tax purposes, so whether any of its income gets attributed back to the Australian parent turns on Part X of the Income Tax Assessment Act 1936&apos;s active income test rather than on ownership alone. See our <Link href="/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">subsidiary vs. branch office comparison</Link> for the full attribution mechanics.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-[#081a42]">Does the India-Australia DTAA really beat India&apos;s domestic withholding rate on everything?</h3>
            <p className="text-gray-700">
              On dividends and interest, yes — the treaty&apos;s flat 15% comfortably undercuts India&apos;s 20%+ domestic rate on non-resident payments. Royalties and fees for technical services are more nuanced: the treaty splits the rate (10% on equipment-related royalties, 15% on others, subject to the &quot;make available&quot; test), and Finance Act 2023 raised India&apos;s own domestic rate on these categories from 10% to 20% — so the treaty is now clearly favourable across the board, but claiming it still requires a valid Tax Residency Certificate and Form 10F filed before remittance.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-[#081a42]">Can rotating Australian staff into India for short-term projects create a tax presence?</h3>
            <p className="text-gray-700">
              It can, though the India-Australia treaty is somewhat more forgiving on this point than others — services furnished through employees or personnel only create a Service Permanent Establishment once the relevant activity exceeds 183 days in any 12-month period, versus a 90-day threshold under some other Indian treaties. That said, poorly structured secondment agreements, invoicing, or on-the-ground supervision arrangements can still trigger PE exposure well before the day count, so it&apos;s worth reviewing deployment plans before travel begins, not after an assessment starts.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <EntitySelectorTool />
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">
          Comprehensive Services for Australian Companies
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          Not every Australian company needs a subsidiary on day one. If you&apos;re testing the Indian market or need finance-function support without building out an in-country team, our accounting outsourcing service covers bookkeeping, payroll, and statutory filings for Australian businesses operating in India, and can convert into full in-house support once you incorporate.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/india-business-setup/company-formation" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Full company registration process in India →
          </Link>
          <Link href="/services/taxation-regulatory" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Taxation & Regulatory Services →
          </Link>
          <Link href="/services/accounting-assurance" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Accounting Services →
          </Link>
          <Link href="/outsourcing" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Accounting outsourcing for Australian companies in India →
          </Link>
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/blog/india-safe-harbour-rules-2026" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India's 2026 Safe Harbour Rules: 15.5% IT Margin Explained →
          </Link>
          <Link href="/doing-business-in-india/why-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Why Invest in India →
          </Link>
          <Link href="/india-business-setup/fdi-channels" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FDI Channels & Investment Routes in India →
          </Link>
          <Link href="/services/transaction-advisory" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transaction & Business Advisory Services →
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
