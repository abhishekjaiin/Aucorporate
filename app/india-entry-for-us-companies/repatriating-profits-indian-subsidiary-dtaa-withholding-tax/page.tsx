import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { LeadForm } from '@/components/LeadForm'
import { Percent, FileCheck2, Landmark, ShieldCheck } from 'lucide-react'

const quickFacts = [
  { icon: Percent, value: '15%', label: 'Treaty Rate on Dividends (≥10% Voting Stock)' },
  { icon: FileCheck2, value: 'Form 145/146', label: 'Replaces Form 15CA/15CB from 1 April 2026' },
  { icon: Landmark, value: '12.5% LTCG', label: 'Buyback Tax, Non-Promoter Non-Residents, from 1 April 2026' },
  { icon: ShieldCheck, value: 'No PPT', label: "US Hasn't Signed the OECD's Multilateral Instrument" },
]

const trcSteps = [
  {
    title: 'Confirm the claim before applying',
    desc: 'Identify the income type (dividend, interest, royalty, FIS), the payer, and the tax period the certificate needs to cover before starting the IRS process.',
  },
  {
    title: 'File Form 8802 to request Form 6166',
    desc: "Form 6166 is the IRS's US residency certification, which Indian payers and the Indian tax portal treat as the US parent's TRC. Form 8802 currently carries a processing fee for business applicants — confirm the exact current figure against the IRS's own Form 8802 instructions before applying, rather than relying on a secondary source.",
  },
  {
    title: 'State the treaty, article, and income type',
    desc: "India, the specific DTAA article the payment falls under, and the tax year the certificate should cover. A mismatch here is a common reason a certificate doesn't line up with what the Indian payer or Form 41 is asking for.",
  },
  {
    title: 'Allow for IRS processing time',
    desc: "Before the payment date you're planning around. Turnaround varies — confirm it against the IRS's current published guidance rather than relying on last year's timeline.",
  },
  {
    title: 'File Form 41 (replacing Form 10F)',
    desc: "Filed electronically on India's income tax e-filing portal once Form 6166 is in hand, under Section 159(8) of the Income-tax Act, 2025 and Rule 75 of the Income-tax Rules, 2026. In practice it's filed alongside the TRC in almost every case, not as an occasional extra step.",
  },
  {
    title: 'Renew annually',
    desc: "A TRC generally covers a specific financial year, and Indian payers want a certificate covering the year the payment actually falls in — treat this as a recurring item tied to the subsidiary's repatriation calendar, not a one-time task from the parent's incorporation.",
  },
]

const faqs = [
  {
    q: 'How much tax does a US company pay repatriating a dividend from its Indian subsidiary?',
    a: "Before any US-side offset, a US parent holding at least 10% of the Indian subsidiary's voting stock is subject to 15% Indian withholding under the treaty, against a 20%+surcharge+cess domestic default if the TRC and Form 41 aren't on file. That Indian withholding generally isn't the full net cost, though: for a US C-corporation, dividends from a 10%-or-more-owned foreign subsidiary typically qualify for a 100% dividends-received deduction under Section 245A, which usually removes the dividend from US taxable income altogether — meaning the 15% Indian withholding is often close to the actual net cost of the dividend route itself, rather than being layered on top of separate US tax on the same income.",
  },
  {
    q: 'Is dividend or royalty better for repatriating profits from an Indian subsidiary, tax-efficiency-wise?',
    a: "It depends on what the payment actually represents and how the numbers net out on both sides. Dividends carry the more favorable 15% treaty tier (for a ≥10% voting-stock holder) and, for a US C-corporation, are often shielded from further US tax by the Section 245A dividends-received deduction — but a dividend can only be paid out of distributable profits and requires board/shareholder approval. A royalty or FIS payment is taxed at 10-15% depending on category, is fully includible in US taxable income, and generally supports a Section 901/904 foreign tax credit via Form 1118 rather than a deduction — meaning it's taxed once at the higher of the Indian and US rates rather than exempted outright. Neither route is categorically better; the right answer depends on the payment's substance, the subsidiary's distributable profits position, and whether the fee genuinely qualifies as a royalty/FIS payment under the treaty's \"make available\" standard in the first place.",
  },
  {
    q: 'Does buyback tax in India for non-resident shareholders compare favorably to dividend repatriation in 2026?',
    a: "For a buyback completed on or after 1 April 2026, a non-promoter, non-resident shareholder is taxed on capital gains at 12.5% (for unlisted shares held over 24 months), with the original cost basis deductible against proceeds — a meaningfully different math than the 15% dividend withholding, since the 12.5% rate applies only to the gain portion, not the full proceeds. Whether it's actually more favorable depends on the shareholder's cost basis relative to the buyback price, and buyback carries the added procedural weight of a formal valuation, Companies Act buyback limits, and a Form FC-TRS filing that a dividend doesn't require — it isn't simply a lower-rate substitute for a dividend without those additional steps.",
  },
  {
    q: 'How does a US company get a tax residency certificate to claim DTAA benefits in India?',
    a: 'By filing IRS Form 8802 to request Form 6166 (the US residency certification Indian payers and the Indian tax portal treat as the TRC), then filing Form 41 (replacing Form 10F, under Section 159(8) of the Income-tax Act, 2025) electronically on India\'s e-filing portal once Form 6166 is received. Both need to be renewed annually, tied to the year the specific payment falls in, not obtained once at incorporation and forgotten.',
  },
  {
    q: 'What is Form 15CA and 15CB (now Form 145 and 146), and who needs to file them for a dividend remittance?',
    a: "Form 145 (formerly 15CA) is a declaration by the remitter — typically the Indian subsidiary's finance team, with its Authorised Dealer bank — confirming the nature of the payment and the tax treatment applied. Above a threshold reported to carry over the ₹5 lakh figure from the old Form 15CB regime (confirm the current figure against the Form 145/146 user manuals before relying on it), Form 146 (formerly 15CB) is also required: a Chartered Accountant's certificate confirming the DTAA and Income-tax Act provisions were correctly applied. Both are filed under Section 393(2) of the Income-tax Act, 2025, and the subsidiary's bank generally won't release the remittance without them.",
  },
  {
    q: 'Is there a way to reduce withholding tax on a dividend repatriation from India — a lower TDS certificate?',
    a: "Section 197 of the Income-tax Act allows an application for a lower or nil withholding certificate where the payer's actual expected Indian tax liability is genuinely below what standard withholding would produce. It's a discretionary, case-specific process rather than a routine filing, and it isn't a substitute for having the TRC and Form 41 in place to access the treaty rate itself — it's a separate route worth exploring only where the underlying facts support a liability below even the treaty rate.",
  },
  {
    q: 'Can a foreign company repatriate profits from its Indian subsidiary?',
    a: 'Yes — this entire page describes the mechanics for exactly that: a foreign (in this case, US) parent company moving profits out of an Indian subsidiary via dividend, royalty, management fee, or buyback, subject to DTAA withholding rates, FEMA classification, and the remittance-certification paperwork covered above.',
  },
  {
    q: 'Does the India-US DTAA carry the same treaty-shopping risk (PPT) as India\'s other tax treaties?',
    a: "No — and this is worth flagging explicitly because it's the opposite of what applies to some of India's other treaty partners. The US hasn't signed the OECD's Multilateral Instrument, so the India-US treaty isn't modified by the Principal Purpose Test that applies under several of India's other DTAAs, including its treaty with the UK. A genuine, operating Indian subsidiary with real commercial substance is on solid ground here; India's domestic GAAR remains a separate, general anti-avoidance backstop regardless of treaty, but the specific MLI/PPT layer simply doesn't apply to this treaty relationship.",
  },
  {
    q: 'Do we need a new tax residency certificate every year?',
    a: "Yes. Form 6166 (and the TRC it represents) is generally issued to cover a specific tax year, and Indian payers want a certificate covering the year the actual payment falls in — building the Form 8802 filing into the subsidiary's annual repatriation planning, rather than treating it as a one-off from incorporation, is what actually keeps the treaty rate available when a payment needs to move.",
  },
]

export default function RepatriatingProfitsDTAAPage() {
  return (
    <RegionClusterTemplate
      title="Repatriating Profits from Your Indian Subsidiary to a US Parent Company"
      subtitle="DTAA rates on dividends, interest and royalties, the Finance Act 2026 buyback rules, and the Form 145/146 remittance chain — sourced to the IRS treaty text and the Indian government's own rate comparison, with what it costs a US parent net of a foreign tax credit."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "Repatriating Profits: DTAA & Withholding Tax" },
            ]}
    >

      <div className="mb-12">
        <p className="mb-4 text-sm text-gray-500">
          Last updated: 30 September 2026 — prepared by AU Corporate&apos;s taxation and regulatory compliance practice.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The India-US DTAA doesn&apos;t change whether a US parent company can repatriate profits from its Indian subsidiary — FEMA already permits that, for dividends, royalties and fees, as ordinary current-account transactions. What the treaty changes is how much India can withhold on the way out. Left to India&apos;s domestic rate, withholding runs at 20% plus surcharge and cess. The treaty caps that materially lower on most payment types, but only if the subsidiary&apos;s bank has the right paperwork on file before the payment is processed — the treaty rate is elected, not automatic.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Section 90(2) of the Income-tax Act, 1961 — carried forward as Section 159 of the Income-tax Act, 2025, effective from the 2026-27 assessment year — is the actual legal basis for that election: a non-resident is taxed at whichever of the domestic rate or the treaty rate is more beneficial. Everything below assumes a US parent company that already has an operating Indian subsidiary and is deciding how, and through which route, to bring profits home this quarter.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickFacts.map((stat) => (
            <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
              <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </ClickableReveal>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">DTAA Rates vs. Domestic Withholding — Dividends, Interest, Royalties and Fees for Included Services</h2>
        <p className="text-gray-700 mb-4">
          These figures are drawn from the US Treasury&apos;s{' '}
          <a href="https://www.irs.gov/pub/irs-trty/inditech.pdf" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Technical Explanation of the India-US tax treaty and protocol
          </a>{' '}
          and cross-checked against the{' '}
          <a href="https://www.indianembassyusa.gov.in" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Indian Embassy in Washington&apos;s own published comparison
          </a>{' '}
          of Income-tax Act rates against the DTAA — both cited directly here rather than presented as unsourced commentary, since neither source is something the competing guides on this topic typically show their reader.
        </p>
        <p className="text-gray-700 mb-6">
          Dividends weren&apos;t always taxed this way. Until 31 March 2020, Indian companies paid a Dividend Distribution Tax (DDT) themselves on profits distributed as dividends, and the dividend was tax-free in the shareholder&apos;s hands regardless of who the shareholder was or whether a treaty applied — a flat, company-level tax that made the shareholder&apos;s country and treaty position largely irrelevant. The Finance Act 2020 abolished DDT effective 1 April 2020 and reverted India to the classical system, taxing the dividend in the shareholder&apos;s hands instead — which is exactly why the treaty rate a US parent can claim on Article 10 dividend income, set out in the table below, is now the operative question rather than a moot one.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-4 text-left font-bold">Income Type</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Treaty Rate</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Condition</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Domestic Rate (No Treaty)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Dividends (Article 10)</td>
                <td className="border border-gray-300 p-4 text-sm">15%</td>
                <td className="border border-gray-300 p-4 text-sm">Beneficial owner is a company holding ≥10% of the payer&apos;s voting stock</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 p-4 font-semibold">Dividends (Article 10)</td>
                <td className="border border-gray-300 p-4 text-sm">25%</td>
                <td className="border border-gray-300 p-4 text-sm">All other cases</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Interest (Article 11)</td>
                <td className="border border-gray-300 p-4 text-sm">15%</td>
                <td className="border border-gray-300 p-4 text-sm">General rate</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 p-4 font-semibold">Interest (Article 11)</td>
                <td className="border border-gray-300 p-4 text-sm">10%</td>
                <td className="border border-gray-300 p-4 text-sm">Beneficial owner is a bank or similar financial institution</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Interest (Article 11)</td>
                <td className="border border-gray-300 p-4 text-sm">0%</td>
                <td className="border border-gray-300 p-4 text-sm">Certain government-approved or government-guaranteed loans</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 p-4 font-semibold">Royalties (Article 12(2)(a))</td>
                <td className="border border-gray-300 p-4 text-sm">15%</td>
                <td className="border border-gray-300 p-4 text-sm">Copyright (literary, artistic, scientific, film/TV/radio), patents, trademarks, designs or models, secret formulas or processes, and industrial/commercial/scientific know-how</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Royalties (Article 12(2)(b))</td>
                <td className="border border-gray-300 p-4 text-sm">10%</td>
                <td className="border border-gray-300 p-4 text-sm">Use of industrial, commercial, or scientific equipment</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 p-4 font-semibold">Fees for Included Services / FIS (Article 12)</td>
                <td className="border border-gray-300 p-4 text-sm">15%</td>
                <td className="border border-gray-300 p-4 text-sm">Standard rate</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Fees for Included Services / FIS (Article 12)</td>
                <td className="border border-gray-300 p-4 text-sm">10%</td>
                <td className="border border-gray-300 p-4 text-sm">Ancillary or subsidiary to a royalty payment</td>
                <td className="border border-gray-300 p-4 text-sm">20% + surcharge + cess</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          A wholly owned US parent company almost always clears the ≥10% voting-stock threshold for the 15% dividend tier — the 25% tier is realistically relevant only to a minority non-resident shareholder. Note the India-US treaty&apos;s Article 12 uses &quot;Fees for Included Services&quot; (FIS) rather than the more generic &quot;Fees for Technical Services&quot; (FTS) wording most of India&apos;s other treaties use — FIS carries a narrower &quot;make available&quot; standard, meaning the service has to actually transfer usable technical knowledge, skill or know-how to the Indian subsidiary to qualify. A fee that doesn&apos;t clear that bar isn&apos;t automatically FIS-taxed at all; see the management/service fee section below.
        </p>
        <p className="text-gray-700 mb-6">
          The domestic 20% base rate sits in the Income-tax Act itself; surcharge (which varies by income slab for a foreign company) and a 4% health and education cess sit on top, producing an effective domestic rate commonly cited in the 20.8%-23.9% range depending on the payer&apos;s income bracket. Section 159 (formerly Section 90(2)) is what lets a US parent elect the lower of the two — but only where the treaty rate is actually substantiated with a valid Tax Residency Certificate and Form 41 on file, which is the whole subject of the section further down this page.
        </p>

        <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded text-sm text-gray-700">
          <span className="font-semibold">Illustration (figures below are illustrative only — not a quote, and dependent on the applicable surcharge slab for the specific payer): </span>
          on a ₹1 crore dividend to a US parent holding 100% of the subsidiary&apos;s voting stock, the 15% treaty rate withholds ₹15 lakh. If the TRC and Form 41 aren&apos;t on file when the payment is processed, the payer defaults to the domestic rate instead — roughly ₹20.8-23.9 lakh once surcharge and cess are added — meaning the paperwork gap alone can leave an extra ₹5.8-8.9 lakh sitting with the Indian tax authority until it&apos;s separately reclaimed, rather than moving with the rest of the distribution.
        </div>

        <div className="mb-8 p-6 bg-gray-100 rounded-lg">
          <h3 className="font-bold text-lg mb-2">The paperwork changed names on 1 April 2026 — not the requirement</h3>
          <p className="text-gray-700">
            The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026, and several of the forms this page relies on were renumbered along with it. What was Form 15CA and Form 15CB (filed under old Section 195) are now <strong>Form 145 and Form 146</strong>, filed under new Section 393(2). What was Form 10F (filed under old Section 90) is now <strong>Form 41</strong>, filed under Section 159(8) of the new Act and Rule 75 of the Income-tax Rules, 2026. None of this changes what a US parent&apos;s Indian subsidiary actually has to do before a payment clears the bank — a TRC plus a self-declaration to access the treaty rate, and a CA-certified declaration before the remittance itself. Only the form numbers and section citations changed. Payments processed before 1 April 2026 remain governed by the old forms and sections; anything from that date forward uses the new ones.
          </p>
        </div>

        <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <h3 className="font-bold text-lg mb-2">Why this treaty doesn&apos;t carry the treaty-shopping test most of India&apos;s others do</h3>
          <p className="text-gray-700">
            The US has not signed the OECD&apos;s Multilateral Instrument (MLI) — the mechanism that layers a Principal Purpose Test (PPT) onto many of India&apos;s other tax treaties, including India&apos;s treaty with the UK. That means the India-US DTAA is <strong>not</strong> modified by a PPT: there&apos;s no separate anti-abuse test asking whether obtaining the treaty benefit was a principal purpose of how a structure was set up, the way there is under several of India&apos;s other treaty relationships. This is a genuine, non-obvious point of difference — most competing guides on this topic don&apos;t cover it, and it&apos;s worth flagging explicitly because it cuts the opposite way from what a reader might expect if they&apos;ve also looked at how India&apos;s treaty with a country like the UK works. (For a live example of how much teeth a PPT-style challenge can actually have under a treaty where one does apply, the Supreme Court&apos;s{' '}
            <Link href="/blog/mail-box-dtaa-benefits" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              Tiger Global ruling on treaty-shopping through a Mauritius conduit structure
            </Link>{' '}
            is a useful contrasting read — a different transaction type from ongoing subsidiary repatriation, but the same underlying anti-abuse logic.) None of this means the India-US treaty is immune from scrutiny generally — a structure with no genuine commercial substance can still be challenged under India&apos;s domestic General Anti-Avoidance Rule (GAAR) — but the specific MLI/PPT layer that complicates treaty access elsewhere simply isn&apos;t part of this treaty relationship.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Dividend, Royalty, Management Fee, or Buyback — Comparing the Repatriation Routes</h2>
        <p className="text-gray-700 mb-6">
          Not every route out of an Indian subsidiary is the same kind of transaction under FEMA, and that distinction is worth understanding before comparing tax rates. Dividends, royalty/FIS payments, and management or service fees are all <strong>current-account transactions</strong> — they don&apos;t need RBI approval, only tax withholding and the remittance-certification paperwork below. A share buyback or capital reduction is a <strong>capital-account transaction</strong> instead — it needs a formal valuation, Companies Act procedure, and its own FEMA filing, which is a materially heavier lift than sending a dividend. That&apos;s the organizing logic behind why buyback, covered in its own section further down, takes more planning lead time than the other three routes.
        </p>

        <h3 className="text-xl font-bold mb-3">Dividend</h3>
        <p className="text-gray-700 mb-6">
          The default route for most subsidiaries, and the one the rate table above applies to directly: 15% under the treaty for a US parent holding ≥10% of voting stock, against a 20%+surcharge+cess domestic default if the TRC/Form 41 paperwork isn&apos;t in place. Dividends require board and shareholder approval and sufficient distributable profits under the Companies Act, but no separate RBI filing beyond what the subsidiary&apos;s bank requires to process the remittance itself.
        </p>

        <h3 className="text-xl font-bold mb-3">Royalty / Fees for Included Services</h3>
        <p className="text-gray-700 mb-6">
          Same Article 12 tiers apply: a royalty on copyright, patent, trademark, design, or know-how is taxed at 15%, while a narrower 10% tier applies specifically to equipment royalties (payment for the use of industrial, commercial, or scientific equipment) and to a standalone FIS payment that&apos;s ancillary or subsidiary to a royalty. One cost layer worth flagging separately: cross-border royalty and FIS payments to a foreign parent typically attract an 18% GST reverse charge on the Indian subsidiary, on top of the withholding tax discussed here — a real cash-flow cost, though a mechanically distinct one from DTAA withholding. Our{' '}
          <Link href="/services/taxation-regulatory" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            GST reverse charge guidance for cross-border payments
          </Link>{' '}
          covers the mechanics in more depth; it&apos;s not repeated here.
        </p>

        <h3 className="text-xl font-bold mb-3">Management / Service Fees</h3>
        <p className="text-gray-700 mb-6">
          This is where the India-US treaty&apos;s narrower FIS &quot;make available&quot; standard actually matters in practice. A management or service fee only falls under Article 12&apos;s FIS withholding if the service transfers usable technical knowledge, skill, or know-how to the Indian subsidiary — routine coordination, back-office support, or general oversight typically doesn&apos;t clear that bar. A fee that doesn&apos;t meet the &quot;make available&quot; standard falls instead under the treaty&apos;s Business Profits article, which generally means India cannot tax it at all unless the US parent has a{' '}
          <Link href="/india-entry-for-us-companies/permanent-establishment-risk-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            permanent establishment
          </Link>{' '}
          in India — a materially better outcome than the FIS-withholding default, and one worth checking carefully rather than assuming any cross-border service fee is automatically FIS-taxable. This characterization question is separate from whether the fee is priced at arm&apos;s length in the first place — that&apos;s the{' '}
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            transfer pricing question
          </Link>{' '}
          covered on our companion guide, and a fee can be correctly priced under Section 92 rules and still turn on a separate FIS-vs-Business-Profits characterization question for withholding purposes.
        </p>

        <h3 className="text-xl font-bold mb-3">Share Buyback</h3>
        <p className="text-gray-700">
          A capital-account route with its own tax regime, timeline, and FEMA filing — covered in full below rather than as a footnote here, since it&apos;s currently the fastest-moving part of this topic.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Share Buyback: The Finance Act 2026 Capital-Gains Reform</h2>
        <p className="text-gray-700 mb-4">
          Buyback taxation for non-resident shareholders has gone through three distinct regimes in a short span, and which one applies turns entirely on the date of the buyback:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
          <li><strong>Before 1 October 2024:</strong> buyback proceeds were effectively taxed as a company-level distribution.</li>
          <li><strong>1 October 2024 – 31 March 2026:</strong> the full buyback consideration was taxed as a deemed dividend in the shareholder&apos;s hands, with no deduction for the shareholder&apos;s original cost basis in the shares bought back — a treatment that could tax proceeds well in excess of the shareholder&apos;s actual economic gain.</li>
          <li><strong>From 1 April 2026:</strong> buyback proceeds are taxed as capital gains rather than a deemed dividend — for a non-promoter, non-resident shareholder holding unlisted shares for more than 24 months, that means long-term capital gains treatment at 12.5%, with the shareholder&apos;s original cost basis now deductible against the proceeds.</li>
        </ul>
        <p className="text-gray-700">
          For a US parent that has held its Indian subsidiary&apos;s shares for the qualifying period, the post-April-2026 regime is generally a more tax-efficient route than it was even eighteen months ago — but it&apos;s still a capital-account transaction under FEMA, not a current-account one. That means a formal fair-value determination under RBI&apos;s pricing guidelines, Companies Act buyback procedure (including the 25% paid-up-capital-plus-free-reserves ceiling on buyback size), and — because shares are changing hands between the subsidiary and its shareholder — the same <strong>Form FC-TRS filing</strong> already governed by FEMA. We don&apos;t re-explain the FC-TRS mechanics, filing window, or FIRMS-portal process here; our{' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance guide for US companies
          </Link>{' '}
          covers that filing in full.
        </p>
      </div>

      <div className="mb-12">
        <LeadForm
          title="Planning a Dividend, Royalty, or Buyback Out of Your Indian Subsidiary?"
          description="Tell us which route you're considering and the rough timing — our tax team will confirm the applicable treaty rate, the paperwork you'll need in place beforehand, and what it's likely to cost net of a US foreign tax credit."
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Claiming the Treaty Rate — Tax Residency Certificate and Form 41</h2>
        <p className="text-gray-700 mb-6">
          None of the treaty rates above apply automatically. The Indian subsidiary&apos;s bank needs a valid Tax Residency Certificate (TRC) for the US parent, plus Form 41 (formerly Form 10F), on file before it will apply the treaty rate rather than the domestic default. For a US parent, the certificate itself comes from the IRS, not from India:
        </p>
        <div className="relative space-y-4 mb-6">
          <div aria-hidden="true" className="absolute left-[35px] top-9 bottom-9 hidden w-px bg-yellow-200 sm:block" />
          {trcSteps.map((step, index) => (
            <ClickableReveal key={step.title} className="relative flex gap-5 rounded-xl border bg-white p-6 cursor-pointer">
              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">{index + 1}</div>
              <div>
                <h3 className="font-bold text-base mb-1 text-[#081a42]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
                <p className="mt-2 text-xs font-semibold text-yellow-600">Talk to an expert &rarr;</p>
              </div>
            </ClickableReveal>
          ))}
        </div>
        <p className="text-gray-700 mb-8">
          The most common way a US parent company loses the treaty benefit isn&apos;t a question of eligibility — it&apos;s paperwork timing. If the TRC and Form 41 aren&apos;t on file when a payment is processed, the subsidiary&apos;s bank is required to withhold at the domestic rate by default, and reclaiming the difference afterward through an income tax return is a slower, separate process than simply having the paperwork in place beforehand.
        </p>

        <h3 className="text-xl font-bold mb-3">Lower or Nil Withholding Certificate (Section 197)</h3>
        <p className="text-gray-700">
          Where a US parent&apos;s expected annual Indian tax liability is genuinely lower than even the treaty-rate withholding would produce — for instance, where losses or credits offset most of the India-side liability — Section 197 of the Income-tax Act allows an application to the Indian tax officer for a certificate authorizing a lower, or nil, withholding rate on specific payments. This is a real, available route, but the application and approval process is discretionary and fact-specific rather than a routine filing, and it isn&apos;t something the standard treaty-rate paperwork above substitutes for. Treat it as worth exploring case-by-case rather than a default step in every repatriation.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Before the Money Actually Leaves India — Form 145 and Form 146</h2>
        <p className="text-gray-700 mb-4">
          Even with a valid TRC, Form 41 on file, and the correct treaty rate identified, the subsidiary&apos;s bank still won&apos;t release the remittance without one more layer of paperwork: <strong>Form 145</strong> (a declaration by the remitter, replacing Form 15CA) and, above a prescribed threshold, <strong>Form 146</strong> (a Chartered Accountant&apos;s certificate confirming that the DTAA and Income-tax Act provisions were correctly applied to the payment, replacing Form 15CB). Both are filed under Section 393(2) of the Income-tax Act, 2025.
        </p>
        <p className="text-gray-700">
          Form 146 is worth being precise about: it isn&apos;t an optional add-on service — it is, by law, a Chartered Accountant&apos;s certification that has to exist before a remittance above the threshold clears the bank. The CA is certifying the treaty article relied on, the rate applied, and that the Income-tax Act&apos;s provisions were correctly followed — the same analysis this page walks through above, put into a certified form the bank will actually act on. The threshold at which Form 146 becomes required is reported to carry over the ₹5 lakh figure that applied under the old Form 15CB regime, though this page treats that as needing direct confirmation against the current Form 145/146 user manuals on the income tax portal rather than asserting it as settled without a check.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How This Interacts With Your US Parent&apos;s Own Return</h2>
        <p className="text-gray-700 mb-4">
          Indian withholding is only half of what a repatriation actually costs a US parent company. The other half is what happens on the US side of the same payment.
        </p>
        <p className="text-gray-700 mb-4">
          For a US C-corporation, foreign income taxes paid or accrued — including the Indian withholding on a royalty, FIS, or interest payment — are generally creditable against US federal tax on the same income, claimed on <strong>Form 1118</strong> (the corporate foreign tax credit form under IRC Sections 901 and 904 — not Form 1116, which is the individual filer&apos;s version and doesn&apos;t apply here). The credit is subject to Section 904&apos;s limitation, calculated by income category (&quot;basket&quot;), so it isn&apos;t always a dollar-for-dollar offset in every fact pattern — but where it applies cleanly, the effect is that the payment ends up taxed once, at whichever of the Indian and US rates is higher, rather than twice.
        </p>
        <div className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded text-sm text-gray-700">
          <span className="font-semibold">Illustrative example only — figures assume full creditability under Section 904&apos;s general limitation basket and a flat 21% US federal corporate rate, and don&apos;t reflect state tax, basket-specific limitations, or a specific taxpayer&apos;s actual position: </span>
          on a $100,000 FIS payment from the Indian subsidiary, a 15% treaty rate withholds $15,000 in India. The US parent includes the $100,000 in US taxable income, computes $21,000 of US federal tax on it, and claims a $15,000 foreign tax credit against that liability — netting $6,000 of additional US tax due. Combined, the payment is taxed at $21,000 total — the higher of the two rates, not the sum of both.
        </div>
        <p className="text-gray-700 mb-4">
          Dividends specifically often work differently on the US side: a US C-corporation that owns 10% or more of a foreign corporation generally qualifies for a 100% dividends-received deduction under Section 245A, which typically removes the dividend from US taxable income entirely — and with no US tax on the dividend, there&apos;s usually no separate FTC to claim against it either. In practice, Form 1118 tends to matter most for royalty, FIS, and interest withholding, and for any Subpart F or GILTI-type (now NCTI, following the 2025 tax legislation) inclusions the US parent already has from owning a controlled foreign corporation independent of any actual distribution — a separate US-side question worth raising with the parent&apos;s own US tax advisor alongside the repatriation decision itself, not one this page develops further.
        </p>
        <p className="text-gray-700">
          We don&apos;t prepare or file Form 1118 on a US parent&apos;s behalf, but our Chartered Accountants produce the underlying record the parent&apos;s own US CPA actually needs to substantiate the credit — the exact treaty article relied on, the withholding rate applied, and the CA-certified Form 146 figures — in a form built to reconcile cleanly with the US return rather than requiring the numbers to be re-derived from scratch.
        </p>
      </div>

      <div className="mb-12">
        <LeadForm
          title="Have a Repatriation Coming Up This Quarter?"
          description="Whether you're still deciding between a dividend, royalty, or buyback, or you already have a TRC application or a Form 145/146 filing in motion, our CA and US CPA-qualified team can review where you stand and what's still needed before the payment can clear."
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/permanent-establishment-risk-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Permanent Establishment Risk in India for US Companies →
          </Link>
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for US Companies After Incorporation →
          </Link>
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transfer Pricing &amp; Section 482 for US-India Subsidiaries →
          </Link>
          <Link href="/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India-UK DTAA &amp; Withholding Tax Rates →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
