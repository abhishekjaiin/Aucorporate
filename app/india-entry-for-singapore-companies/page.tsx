import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { InlineInquiryCTA } from '@/components/InlineInquiryCTA'

const faqs = [
  { q: 'Can a Singapore Pte Ltd own 100% of an Indian subsidiary?', a: 'Yes. Most sectors qualify for the FDI automatic route, meaning a Singapore company can hold up to 100% of an Indian Private Limited subsidiary without prior government approval — subject to standard post-facto RBI reporting once shares are allotted. A smaller set of sectors require government-route approval or carry sector-specific conditions, so it\'s worth confirming your activity\'s FDI status before assuming automatic-route access.' },
  { q: 'Does a Singapore holding company reduce capital gains tax on an eventual India exit?', a: 'It can, but only for shares acquired before 1 April 2017, which remain grandfathered under the treaty\'s older capital-gains exemption, and only where the Singapore entity clears Article 24A\'s Limitation of Benefits test. Shares acquired after that date are taxable in India regardless of the Singapore layer, and even grandfathered gains can be denied treaty benefit if the entity is found to be a shell/conduit or if the structure fails the Principal Purpose Test.' },
  { q: 'Is a Tax Residency Certificate (TRC) enough to claim DTAA benefits?', a: 'A TRC from IRAS, plus a self-declaration (Form 10F in India), is the procedural starting point, and remains necessary for treaty access. But following the Supreme Court\'s Tiger Global ruling in January 2026, a valid TRC is no longer treated as conclusive proof of entitlement to treaty benefits — Indian tax authorities and courts will look through to whether the Singapore entity has genuine economic substance.' },
  { q: 'What\'s the difference between a liaison office, branch office, and subsidiary for a Singapore company entering India?', a: 'A liaison office can represent the Singapore parent and gather market information but cannot invoice Indian customers or earn revenue. A branch office can undertake a defined set of commercial activities but isn\'t a separate legal entity from the Singapore parent, which affects liability and tax treatment. A wholly-owned Private Limited subsidiary is a separate Indian legal entity with full commercial flexibility, and is the structure most Singapore companies use for anything beyond market scouting.' },
  { q: 'Why do private equity and venture capital funds route India investments through Singapore?', a: 'Singapore doesn\'t tax capital gains, and under its one-tier tax system, dividends a Singapore holding company receives from a foreign subsidiary are generally exempt from further Singapore tax — so value created in an Indian portfolio company can flow up to the Singapore entity without a second layer of Singapore tax. Singapore\'s Variable Capital Company (VCC) structure also lets a fund manager ring-fence multiple strategies, including India-focused ones, as segregated sub-funds under a single legal entity.' },
  { q: 'How does GAAR affect a Singapore-India holding structure after the Tiger Global ruling?', a: 'The Tiger Global case was decided under the India-Mauritius treaty\'s substance requirements, not the India-Singapore DTAA, but the Supreme Court\'s reasoning — that GAAR can override treaty provisions, including grandfathering clauses, where an arrangement lacks genuine commercial substance — applies to any treaty structure India assesses, Singapore included. A Singapore entity with real decision-making, adequate operating expenditure, and a commercial rationale beyond tax efficiency is in a materially different position than a passive pass-through entity.' },
]

export default function IndiaEntryForSingaporeCompanies() {
  return (
    <RegionClusterTemplate
      title="Doing Business in India: The Complete Guide for Singapore Companies"
      subtitle="AU Corporate helps Singapore-based companies establish and scale their Indian operations, with expertise in India-Singapore DTAA planning, FEMA compliance, and GCC setup."
      region="Singapore"
      breadcrumbItems={[
              { label: "India Entry for Singapore Companies" },
            ]}
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Singapore has been India's single largest source of FDI for eight consecutive years running — contributing $19.8 billion of India's $58.85 billion in total FDI equity inflows in FY2025-26 alone, with cumulative investment since April 2000 now at roughly $194.7 billion (DPIIT data, released June 2026), ahead of every other country including Mauritius and the US. Many Singapore-headquartered companies, including regional holding structures for global groups and private equity/venture capital funds, use it as the base for their India entry, in large part because of the country's role as a global financial hub and gateway for capital into India. Our team helps you navigate entity selection, the India-Singapore DTAA, and the FEMA compliance obligations that follow incorporation.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance practice handles the FEMA and RBI filings foreign-owned subsidiaries need — including the documentation Singapore entities require to access DTAA benefits.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What Singapore Companies Need to Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ClickableInfoCard title="Entity Structure" desc="Most Singapore companies enter via a wholly-owned Private Limited subsidiary, giving full commercial flexibility under the automatic FDI route for most sectors. A liaison office is occasionally used by fund managers and financial-services entities that want a market-scouting presence before committing to a subsidiary, though it can't invoice Indian customers or generate revenue." />
          <ClickableInfoCard title="India-Singapore DTAA Rates" desc="10% withholding on dividends where the recipient holds at least 25% of the paying company's shares (15% otherwise), 10% on interest from banks/financial institutions (15% otherwise), and a flat 10% on royalties and fees for technical services." />
          <ClickableInfoCard title="Capital Gains & Grandfathering" desc="Gains on Indian shares acquired after 1 April 2017 are taxable in India under the treaty; shares acquired before that date remain grandfathered under the older capital-gains exemption. Acquisition timing matters for any Singapore holding structure." />
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Limitation of Benefits (LOB)</h3>
            <p className="text-gray-600 text-sm">Article 24A denies the treaty's capital-gains benefits to &quot;shell or conduit&quot; entities. Your Singapore entity clears that bar if it&apos;s listed on a recognised stock exchange, or if it has incurred genuine operating expenditure in Singapore of at least SGD 200,000 in each of the two 12-month periods immediately preceding the date the gain arises. Clearing the shell/conduit test isn&apos;t the final word either — a separate Principal Purpose Test can still deny benefits where tax was a main purpose of the structure, the same substance question at the center of{" "}
              <Link href="/blog/mail-box-dtaa-benefits" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                the Tiger Global mailbox-company ruling
              </Link>. More detail below.</p>
            <InlineInquiryCTA />
          </div>
          <ClickableInfoCard title="FEMA & RBI Filings" desc="Form FC-GPR on share allotment, Form FC-TRS on any transfer, and the annual FLA return — the same core filings that apply to any foreign-owned Indian subsidiary." />
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">GCC Staging Base</h3>
            <p className="text-gray-600 text-sm">Singapore is a common regional staging base for companies setting up a Global Capability Center in India — we support the entity, tax, and operational setup end to end. See our <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">complete GCC setup guide</Link> and the Singapore-specific detail below.</p>
            <InlineInquiryCTA />
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Limitation of Benefits: A Closer Look
        </h2>
        <p className="text-gray-700 mb-4">
          The LOB clause at Article 24A of the DTAA (inserted by the 2005 Protocol, amended in 2016) doesn&apos;t apply to the treaty as a whole — it&apos;s specifically aimed at the capital-gains grandfathering and exemption benefits under Article 13. A Singapore entity that fails to clear it can still claim the treaty&apos;s dividend, interest, and royalty rates; what it loses is favourable capital-gains treatment on an India exit. That distinction matters for how a holding structure gets planned, and it&apos;s one a lot of generic DTAA explainers skip past.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 bg-white text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Test</th>
                <th className="border border-gray-300 p-3 text-left">What it requires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">Stock exchange test</td>
                <td className="border border-gray-300 p-3 text-gray-600">The Singapore entity (or its beneficial owners, for certain structures) is listed on a recognised stock exchange — SGX in Singapore, or a SEBI-recognised exchange in India.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">Bona fide business / expenditure test</td>
                <td className="border border-gray-300 p-3 text-gray-600">The entity has incurred operating expenditure in Singapore of at least SGD 200,000 (or the INR 50 lakh equivalent) in <em>each</em> of the two 12-month periods immediately preceding the date the gain arises — not a one-time or cumulative figure across the full 24 months.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          Meeting either test rebuts the presumption that an entity is a &quot;shell or conduit company&quot; under Article 24A. It doesn&apos;t end the analysis, though: post-BEPS, India&apos;s treaties (including this one, via the Multilateral Instrument) also carry a Principal Purpose Test, which can deny treaty benefits independently of the shell/conduit finding if obtaining that benefit was one of the principal purposes of the arrangement. The Supreme Court&apos;s January 2026 ruling in the Tiger Global case — decided under the India-Mauritius treaty&apos;s parallel substance requirements, not this one, but built on the same &quot;substance over form&quot; and GAAR-supremacy reasoning — is the clearest signal yet that a valid Tax Residency Certificate is necessary but not sufficient on its own. For a Singapore holding entity, that generally means: real directors and decision-making in Singapore, a registered office and operating expenditure that comfortably clears the Article 24A threshold, and a commercial rationale for the structure beyond tax efficiency.
        </p>
        <InlineInquiryCTA label="Get an LOB/substance review for your structure" />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Singapore as India&apos;s Regional Holding, PE & VC Gateway
        </h2>
        <p className="text-gray-700 mb-4">
          A large share of what arrives in India from Singapore doesn&apos;t originate there — Singapore is a holding and treasury jurisdiction, and capital from across Asia, Europe, and the Gulf is routed through it before reaching Indian subsidiaries or portfolio companies. That role isn&apos;t incidental. Singapore has become Asia&apos;s leading hub for private equity and venture capital, drawing fund managers with political stability, a deep service-provider ecosystem, and an extensive tax treaty network. According to MAS&apos;s 2025 Asset Management Survey, Singapore-based managers now run over S$6.7 trillion (roughly US$5.2 trillion) in total assets, with private equity and venture capital strategies accounting for about US$622 billion of that — and more than 1,400 Variable Capital Companies (VCCs), Singapore&apos;s purpose-built umbrella fund vehicle, are now registered with ACRA across PE, VC, hedge fund, and family-office strategies.
        </p>
        <p className="text-gray-700 mb-4">
          The structural appeal for an India-bound investor is straightforward: Singapore doesn&apos;t tax capital gains, and under its one-tier system, dividends a Singapore holding company receives from a foreign subsidiary are generally exempt from further Singapore tax, so value created in an Indian operating company can flow up to the Singapore holdco without a second layer of Singapore tax on the way. A VCC structure adds the ability to ring-fence multiple India-linked strategies — say, one sub-fund targeting Indian growth-stage tech and another targeting Indian real estate — under a single legal entity with segregated assets and liabilities, while still accessing the India-Singapore DTAA at the VCC level.
        </p>
        <p className="text-gray-700">
          None of that changes the substance requirement covered above. A Singapore holdco that exists purely as a wire-transfer stop between an ultimate parent and its Indian subsidiary — no local decision-making, no real operating expenditure, no commercial purpose beyond treaty access — is exactly the fact pattern Article 24A&apos;s expenditure test and the broader Principal Purpose Test are built to catch, and it&apos;s the same fact pattern Indian tax authorities have gotten considerably more aggressive about testing since the Tiger Global ruling. We help clients structure the Singapore layer with enough genuine substance to hold up, rather than assuming a TRC and a registered address will be enough.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Why Singapore Is a Default GCC Staging Base
        </h2>
        <p className="text-gray-700 mb-4">
          Beyond holding structures, Singapore is also where many multinationals already run their APAC regional headquarters — a single entity covering treasury, procurement, and regional management across the Asia-Pacific footprint. When those same companies decide to set up a Global Capability Center in India, the Singapore entity is frequently the natural parent for the India GCC: it&apos;s already the intercompany-billing and treasury hub for the region, it&apos;s in a compatible time zone, and MAS&apos;s regulatory maturity gives finance teams a comfort level that some alternative regional bases don&apos;t.
        </p>
        <p className="text-gray-700">
          The mechanics of the India GCC entity itself — incorporation, FEMA/RBI reporting, transfer pricing on the intercompany service charge, safe harbour eligibility — don&apos;t differ because the parent sits in Singapore rather than elsewhere; what does differ is how the Singapore-to-India intercompany flows get priced and documented, and how DTAA relief applies to cross-charges between the two entities. Our <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">complete GCC setup guide</Link> covers entity structure, the FEMA/RBI compliance calendar, and transfer pricing in full; we support the entity, tax, and operational setup end to end for Singapore-parented GCCs specifically.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Complete Incorporation Process</h2>
        <p className="text-gray-700 mb-4">
          Incorporation follows the standard Companies Act, 2013 process: Digital Signature Certificate and Director Identification Number for the proposed directors, name reservation, the integrated SPICe+ filing (which covers PAN, TAN, GSTIN, and EPFO/ESIC in one pass), and the Certificate of Incorporation. Since Singapore is a Hague Apostille Convention member, the Singapore parent&apos;s certificate of incorporation and board resolution need apostille certification rather than consular legalisation — generally faster than the legalisation route non-Hague-Convention jurisdictions face, though it&apos;s still the step most likely to pace the overall timeline rather than the Indian filing itself.
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

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2 text-[#081a42]">{item.q}</h3>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">
          Comprehensive Services for Singapore Companies
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/india-business-setup/company-formation" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Full company registration process in India →
          </Link>
          <Link href="/services/taxation-regulatory" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Taxation & Regulatory Services →
          </Link>
          <Link href="/services/transaction-advisory" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Transaction & Business Advisory →
          </Link>
          <Link href="/services/accounting-assurance" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Accounting Services →
          </Link>
          <Link href="/outsourcing" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Outsourcing Services →
          </Link>
          <Link href="/gcc-setup-india" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            GCC Setup in India →
          </Link>
          <Link href="/blog/mail-box-dtaa-benefits" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Tiger Global Mailbox-Company Ruling →
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
