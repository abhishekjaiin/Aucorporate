import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'

export default function IndiaEntryForJapanCompanies() {
  return (
    <RegionClusterTemplate
      title="Doing Business in India: The Complete Guide for Japanese Companies"
      subtitle="AU Corporate helps Japanese companies establish and scale their Indian operations, with expertise in India-Japan DTAA planning, FEMA compliance, and manufacturing-sector entry structuring."
      region="Japan"
      breadcrumbItems={[
              { label: "India Entry for Japanese Companies" },
            ]}
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Japan is India's fifth-largest source of FDI, with cumulative investment since 2000 exceeding $43 billion and Japanese FDI outflows to India now surpassing those to China for several consecutive years — concentrated in automotive, electronics, and industrial manufacturing, sectors where Japanese companies often combine a wholly-owned subsidiary with joint-venture partnerships depending on the specific line of business. Our team helps you evaluate the JV-vs-wholly-owned-subsidiary decision, navigate the India-Japan DTAA, and manage the FEMA compliance obligations that follow incorporation.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance practice handles the FEMA and RBI filings foreign-owned subsidiaries need — including the documentation Japanese entities require to access DTAA benefits on dividend and royalty repatriation.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Japan Plus: A Dedicated Government Desk for Japanese Investors
        </h2>
        <p className="text-gray-700 mb-4">
          Japanese companies entering India have access to a facilitation channel most other foreign investors don't: <strong>Japan Plus</strong>, a joint team operated by India's Department for Promotion of Industry and Internal Trade (DPIIT) and Japan's Ministry of Economy, Trade and Industry (METI). Operationalized in 2014 and based out of Vigyan Bhawan, New Delhi, Japan Plus exists specifically to fast-track Japanese FDI proposals, resolve regulatory bottlenecks, and liaise with state governments on Japanese investors' behalf.
        </p>
        <p className="text-gray-700">
          This momentum builds on a track record: the prior JPY 5 trillion investment target the two countries set in 2022 was reached ahead of schedule, and during the two governments' August 2025 talks, India and Japan agreed a new target of JPY 10 trillion in private Japanese investment into India over the next decade, spanning AI, semiconductors, critical minerals, mobility, clean energy, and healthcare — alongside the more traditional automotive and electronics manufacturing base that over 1,400 Japanese companies already operate in India today. We help clients understand how to engage Japan Plus alongside their own incorporation and compliance work, rather than navigating India's regulatory process without that channel.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Japan Industrial Townships: Dedicated Manufacturing Zones
        </h2>
        <p className="text-gray-700">
          For manufacturing entrants specifically, India and Japan have gone a step further than a facilitation desk: since an April 2015 DPIIT-METI action agenda, the two governments have built a network of Japan Industrial Townships (JITs) — country-dedicated industrial parks reserved for Japanese investors, concentrated along the Delhi-Mumbai and Chennai-Bengaluru Industrial Corridors. Twelve townships now operate across nine states, with Neemrana and Ghiloth in Rajasthan and Sri City in Andhra Pradesh hosting the largest concentrations of tenants, and Japan remains the only country for which India has negotiated this kind of dedicated, country-specific industrial zone program. It's worth evaluating a JIT site early — often in parallel with the JV-vs-wholly-owned-subsidiary decision below — since these zones typically carry pre-cleared environmental and land approvals that can meaningfully shorten a manufacturing entrant's site-selection timeline.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What Japanese Companies Need to Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ClickableInfoCard title="JV vs Wholly-Owned Subsidiary" desc="Manufacturing-heavy Japanese entrants often weigh a joint venture (local partner access, faster market entry) against a wholly-owned subsidiary (full control, cleaner IP protection) — the right call depends on sector, distribution needs, and risk appetite." />
          <ClickableInfoCard title="India-Japan DTAA" desc="A flat 10% withholding rate applies across dividends, interest, and royalties/fees for technical services — well below India's 20% domestic withholding rate on non-resident dividends, subject to a valid Tax Residency Certificate." />
          <ClickableInfoCard title="Transfer Pricing on Intercompany Flows" desc="Intercompany loans, management fees, and royalty/IP licensing arrangements between a Japanese parent and Indian subsidiary must be arm's-length documented under India's transfer pricing rules (historically Section 92 of the Income Tax Act, 1961, restructured as Section 161 under the Income-tax Act, 2025, effective April 2026) — particularly relevant given how common hybrid equity-plus-debt funding structures are for Japanese manufacturing entrants." />
          <ClickableInfoCard title="FEMA & RBI Filings" desc="Form FC-GPR on share allotment, Form FC-TRS on any transfer, and the annual FLA return — the same core filings that apply to any foreign-owned Indian subsidiary, JV or wholly-owned." />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">JV vs Wholly-Owned Subsidiary: What Actually Drives the Decision</h2>
        <p className="text-gray-700 mb-4">
          There&apos;s no statutory minimum paid-up capital for a private limited company in India, so capital requirements rarely tip this decision on their own. What does tip it, in practice, is a combination of four factors:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>IP and process protection.</strong> Manufacturing entrants transferring proprietary production technology or tooling to India generally lean toward a wholly-owned subsidiary — a joint venture structurally requires disclosing more of that know-how to a local partner and its board nominees.</li>
          <li><strong>Distribution and land access.</strong> A JV partner with existing dealer networks, local supplier relationships, or state-level land and incentive relationships can compress a multi-year market-entry timeline, particularly for component makers entering an established supply chain.</li>
          <li><strong>Governance speed.</strong> A wholly-owned subsidiary&apos;s board answers to one shareholder; a JV requires a shareholders&apos; agreement covering reserved matters, deadlock resolution, and exit mechanics (drag-along, tag-along, right of first refusal) before incorporation can even begin — the reason JV structuring routinely extends the pre-incorporation timeline referenced below.</li>
          <li><strong>Exit optionality.</strong> Divesting from a wholly-owned subsidiary is a straightforward share sale or liquidation; unwinding a JV means executing whatever buy-out mechanics the shareholders&apos; agreement set years earlier, on terms negotiated before either side knew how the venture would perform.</li>
        </ul>
        <p className="text-gray-700">
          Most Japanese manufacturing entrants we work with run this evaluation before selecting an entity type at all — including, for site-dependent manufacturers, alongside the Japan Industrial Townships option above.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Structuring Intercompany Flows: Transfer Pricing and Thin Capitalisation</h2>
        <p className="text-gray-700 mb-4">
          Two rules bind intercompany flows between a Japanese parent and its Indian subsidiary beyond the arm&apos;s-length documentation referenced above. First, thin capitalisation: under what is currently Section 94B of the Income Tax Act, 1961 (renumbered Section 177 under the Income-tax Act, 2025, effective April 2026), interest paid to a foreign group company is disallowed to the extent it exceeds 30% of EBITDA once net interest expense crosses &#8377;1 crore — directly relevant to the hybrid debt-plus-equity funding structures common among Japanese manufacturing entrants. Second, dispute resolution: India and Japan have an active bilateral Advance Pricing Agreement (APA) track record — India&apos;s first-ever bilateral APA was signed with a Japanese company — and the two countries&apos; tax authorities have been recognised for efficient joint handling of Mutual Agreement Procedure (MAP) cases, giving Japanese groups a genuine route to certainty on intercompany pricing that isn&apos;t available with every treaty partner.
        </p>
        <p className="text-gray-700">
          IT- and services-oriented Japanese subsidiaries should also review India&apos;s 2026 safe harbour margins, which can remove routine intercompany transactions from transfer pricing scrutiny entirely — see our{' '}
          <Link href="/blog/india-safe-harbour-rules-2026" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            breakdown of the 15.5% IT margin
          </Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Complete Incorporation Process</h2>
        <p className="text-gray-700 mb-4">
          Whether structured as a wholly-owned subsidiary or a JV, incorporation follows the standard Companies Act, 2013 process: Digital Signature Certificate and Director Identification Number for the proposed directors, name reservation, the integrated SPICe+ filing, and the Certificate of Incorporation. At least one director must have stayed in India for 182 days or more in the preceding financial year, per Section 149(3) of the Companies Act, 2013 — a requirement that surprises boards used to an all-Japan-based directorate, and one we typically resolve with a resident nominee director rather than relocating staff. Japan acceded to the Hague Apostille Convention in 2023, so Japanese parent-company documents now need apostille certification rather than the consular legalisation the process previously required — a meaningfully faster authentication step than before, though still typically the pacing factor over the Indian filing itself. A JV structure adds shareholders&apos; agreement negotiation with the local partner as a parallel workstream that can extend the pre-incorporation timeline beyond a straightforward wholly-owned entry.
        </p>
        <p className="text-gray-700">
          Automatic Route investments typically clear in 4-6 weeks; Government Route investments run 8-12 weeks. For the full step-by-step process, documents checklist, and reconciled cost/timeline breakdown, see our{' '}
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            complete company registration guide
          </Link>.
        </p>
      </div>

      <div className="mb-12">
        <EntitySelectorTool />
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/blog/india-japan-bis-exemption-high-tech-investment" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India Opens Another Door for Japanese High-Tech Investment: The Proposed BIS Exemption →
          </Link>
          <Link href="/blog/india-safe-harbour-rules-2026" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India's 2026 Safe Harbour Rules: 15.5% IT Margin Explained →
          </Link>
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Full company registration process in India →
          </Link>
          <Link href="/india-business-setup/fdi-channels" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FDI Channels & Investment Routes in India →
          </Link>
          <Link href="/doing-business-in-india/why-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Why Invest in India →
          </Link>
          <Link href="/services/transaction-advisory" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transaction & Business Advisory Services →
          </Link>
          <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            GCC Setup in India →
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
