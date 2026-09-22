import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'

export default function IndiaEntryForChinaCompanies() {
  return (
    <RegionClusterTemplate
      title="Doing Business in India: The Complete Guide for Chinese Companies"
      subtitle="AU Corporate helps Chinese and China-linked companies navigate India's Press Note 3 approval framework, structure compliant FDI, and manage the beneficial ownership documentation that determines which route applies."
      region="China"
      breadcrumbItems={[
              { label: "India Entry for Chinese Companies" },
            ]}
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          FDI from China into India is governed by a materially different framework than most other countries — Press Note 3 (2020) requires prior government approval for investment from any entity where the beneficial owner is situated in, or a citizen of, a country sharing a land border with India, China included. This is not a formality: understanding exactly which route your specific investment falls under is the single most important early decision for a China-linked India entry.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our team has direct experience managing outsourcing and Virtual CFO engagements for Indian subsidiaries of Chinese corporate groups, and handles the FEMA and RBI approval filings this specific route requires.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What Changed in 2026 — And What Didn't
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ClickableInfoCard title="The March 2026 Amendment" desc="India's Union Cabinet approved amendments to Press Note 3 on March 10, 2026 (notified as Press Note 2, 2026 series, effective May 1, 2026). Global entities with up to 10% non-controlling Chinese beneficial ownership can now use the automatic route, subject to sectoral caps — a narrow but real opening after six years of blanket approval requirements." />
          <ClickableInfoCard title="What Still Needs Approval" desc="Direct investment from entities incorporated in China or Hong Kong, and any investment involving control or majority ownership, still requires prior government approval regardless of stake size — the 2026 amendment did not remove this." />
          <ClickableInfoCard title="60-Day Fast Track" desc="A defined list of priority manufacturing sectors — including capital goods, electronic components, and polysilicon/ingot-wafer manufacturing — qualifies for a 60-day approval timeline, provided majority ownership and control remain with Indian residents." />
          <ClickableInfoCard title="Beneficial Ownership Mapping" desc="Press Note 3 looks through the full ownership chain, not just the direct investor — a global fund or holding company with Chinese beneficial ownership above the threshold can trigger approval requirements even if the investing entity itself isn't Chinese. This mapping exercise needs to happen before you file, not after." />
          <ClickableInfoCard title="The June 2026 Amendment Closed a Structuring Gap" desc="A further FEMA (Non-Debt Instruments) Third Amendment, dated 12 June 2026, inserted a second proviso to Rule 13: any share transfer that results in a land-border-country entity acquiring control now triggers mandatory prior approval regardless of what percentage of shares changes hands. It also aligned the 'beneficial owner' definition used across this framework to the 10% threshold set under the Prevention of Money-Laundering Act, 2002 — the same 10% figure the March amendment uses for the non-controlling safe harbour." />
          <ClickableInfoCard title="Hong Kong and Taiwan Are Not Treated the Same" desc="Hong Kong-incorporated investors are treated as falling within the China-linked framework and still need approval for direct investment. Taiwan is not itself one of the countries sharing a land border with India, so a Taiwan-incorporated investor isn't automatically caught — but if the ultimate beneficial owner is a mainland Chinese citizen or entity above the 10% threshold, the look-through rule still triggers approval. Structure and ownership need to be mapped, not assumed, in either case." />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Priority Manufacturing Sectors on the 60-Day Track
        </h2>
        <p className="text-gray-700 mb-6">
          The 60-day fast track isn&apos;t a general concession — it applies to a defined set of manufacturing sub-sectors, reported to span roughly 40 designated categories, where India has an explicit strategic interest in unlocking Chinese capital and technology without ceding control. In every case, the approval clock only applies if majority shareholding and control of the Indian investee remain with resident Indian citizens and Indian-controlled entities throughout — it is not a route to a China-controlled entity, only to China-linked minority participation in Indian-controlled manufacturing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ClickableInfoCard title="Capital Goods Manufacturing" desc="Industrial and production machinery categories identified as priority sub-sectors under the 2026 fast-track SOP." />
          <ClickableInfoCard title="Electronic Capital Goods & Components" desc="Electronic manufacturing equipment and component-level production — relevant to the broader electronics assembly base China-linked suppliers are already embedded in." />
          <ClickableInfoCard title="Polysilicon & Ingot-Wafer Manufacturing" desc="Upstream solar and semiconductor material production, where China currently holds significant global processing capacity that India is trying to onshore." />
          <ClickableInfoCard title="Advanced Battery Components" desc="Cell and component manufacturing for EV and grid-storage batteries, an area where Chinese technology transfer is often the fastest route to scale." />
          <ClickableInfoCard title="Rare Earth Permanent Magnets" desc="Magnet manufacturing for motors, wind turbines, and electronics — flagged as a fast-track priority given China's dominant position in global rare-earth processing." />
          <ClickableInfoCard title="Rare Earth Processing" desc="Refining and processing of rare-earth elements, upstream of the magnet and battery supply chain — a direct response to China's own 2026 export-control tightening on these materials." />
        </div>
        <p className="text-gray-700 mt-6">
          If your proposed investment doesn&apos;t clearly fall within one of these categories, don&apos;t assume the 60-day clock applies — the standard, uncapped Press Note 3 government-approval timeline is still the default everywhere else.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Beneficial Ownership Mapping: Working Through the Chain
        </h2>
        <p className="text-gray-700 mb-4">
          Press Note 3&apos;s beneficial-ownership test doesn&apos;t stop at your direct investor. It looks through every layer of a holding structure to the ultimate beneficial owner, and it does this regardless of how many intermediate entities sit in between — a Singapore-incorporated holding company with a mainland Chinese parent still triggers Press Note 3 when it invests into an Indian entity, even though the Singapore entity itself is not Chinese. The same is true of a global private equity fund with Chinese limited partners above the ownership threshold: the fund&apos;s own domicile doesn&apos;t shield the investment if the underlying beneficial ownership crosses the line.
        </p>
        <p className="text-gray-700 mb-4">
          That threshold is now defined more precisely than it was under the original 2020 notification. Following the June 2026 amendment, &quot;beneficial owner&quot; for this purpose is aligned to the same 10% ownership/control threshold used under the Prevention of Money-Laundering Act, 2002 — the same figure that defines the automatic-route safe harbour introduced in March 2026. In practice this means two separate tests now run off one shared number: (1) is Chinese beneficial ownership in the chain at or below 10% and genuinely non-controlling, in which case the automatic route may be available subject to sectoral caps; and (2) regardless of percentage, does any part of the transaction hand a land-border-country entity control — board rights, veto rights, management control — in which case approval is mandatory under the June 2026 Rule 13 proviso even if the ownership percentage itself looks clean.
        </p>
        <p className="text-gray-700">
          This is why we treat beneficial-ownership mapping as a pre-filing exercise, not a post-filing formality: getting the ownership chain, the control terms, and the applicable threshold test right before you approach FIFP determines which route you&apos;re even eligible to use.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Complete Incorporation Process</h2>
        <p className="text-gray-700 mb-4">
          For a China-linked entry, Press Note 3 approval is a gate that sits ahead of the standard incorporation process, not something that runs alongside it — the beneficial-ownership mapping and government approval need to clear before the entity-level filing sequence starts, since incorporation documents typically need to reference an approved investment. Once past that gate, incorporation follows the same Companies Act, 2013 process as any entity: Digital Signature Certificate and Director Identification Number for the proposed directors, name reservation, the integrated SPICe+ filing, and the Certificate of Incorporation.
        </p>
        <p className="text-gray-700">
          Because the approval step is the real pacing factor here, the standard 4-6/8-12 week Automatic vs. Government Route timelines don&apos;t directly apply — plan around the Press Note 3 approval timeline first, with entity incorporation itself typically adding a further few weeks once approval is in hand. For the general step-by-step incorporation process, documents checklist, and cost breakdown once approval clears, see our{' '}
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            complete company registration guide
          </Link>.
        </p>
      </div>

      <div className="mb-12">
        <EntitySelectorTool />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ClickableInfoCard title="Does Press Note 3 treat Hong Kong the same as mainland China?" desc="Yes for practical purposes. Hong Kong itself doesn't share a land border with India, but Hong Kong-incorporated investors are treated as falling within the China-linked approval framework, and direct investment from a Hong Kong entity still requires prior government approval." />
          <ClickableInfoCard title="Is Taiwan covered by Press Note 3?" desc="Not automatically — Taiwan isn't one of the countries sharing a land border with India, so a Taiwan-incorporated investor isn't caught by name. But the look-through rule still applies: if the ultimate beneficial owner is a mainland Chinese citizen or entity above the 10% threshold, approval is still triggered. Ownership needs to be mapped, not assumed." />
          <ClickableInfoCard title="Can a 9% stake avoid approval if it comes with board or veto rights?" desc="No. The June 2026 amendment closed exactly this gap — any transaction that hands a land-border-country entity control, through board seats, veto rights, or management control, triggers mandatory approval regardless of the percentage of shares changing hands. The 10% figure is a safe harbour for genuinely non-controlling stakes only." />
          <ClickableInfoCard title="Do investments approved before the 2026 amendments need to be reassessed?" desc="This depends on the specific approval terms and structure involved, and we're not aware of a blanket public clarification on retrospective treatment — it needs to be checked against your original approval conditions rather than assumed either way. Talk to our team about your specific filing history before treating it as settled." />
          <ClickableInfoCard title="How is beneficial ownership calculated for a fund with Chinese LPs?" desc="Press Note 3 looks through every intermediate holding layer to the ultimate beneficial owner, regardless of how many entities sit in between or where the investing vehicle itself is domiciled. A fund's own jurisdiction doesn't shield an investment if underlying Chinese beneficial ownership crosses the 10% threshold." />
          <ClickableInfoCard title="Which route applies to a China-linked electronics manufacturer entering India?" desc="It depends on ownership and control, not sector alone. Genuinely non-controlling Chinese beneficial ownership at or under 10%, in one of the designated priority manufacturing sub-sectors, may qualify for the 60-day fast track. Anything involving control, majority ownership, or a sector outside that list defaults to the standard, uncapped government-approval timeline." />
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Full company registration process in India →
          </Link>
          <Link href="/india-business-setup/fdi-channels" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FDI Channels & Investment Routes in India →
          </Link>
          <Link href="/india-business-setup/regulatory-compliance" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Regulatory Compliance for India Business Setup →
          </Link>
          <Link href="/services/risk-management" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Risk Management & Advisory Services →
          </Link>
          <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            GCC Setup in India →
          </Link>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-500">
        Regulatory information current as of the June 2026 FEMA (Non-Debt Instruments) Third Amendment, which followed the March 2026 Press Note 3 (Press Note 2, 2026 series) amendment. FDI policy in this area continues to evolve — confirm the current framework with our team before relying on this for a specific transaction.
      </div>
    </RegionClusterTemplate>
  )
}
