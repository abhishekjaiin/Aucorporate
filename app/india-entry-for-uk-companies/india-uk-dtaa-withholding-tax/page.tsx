import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'

const trcSteps = [
  { title: 'Confirm the claim before you apply', desc: 'HMRC will only issue the certificate if it is satisfied your company is genuinely UK tax resident for the period claimed and is entitled to the India-UK treaty benefit — have the income type (dividend, interest, royalty), the amount, and the payer identified before you start.' },
  { title: 'Apply online through HMRC\'s digital service', desc: 'Companies and partnerships apply for a Certificate of Residence (what India\'s payer will treat as your TRC) through HMRC\'s online RES1 service, accessed via your Government Gateway business tax account — not by post as a default route.' },
  { title: 'State the DTA, the article, and the tax year', desc: 'The application asks you to name the double taxation agreement (India-UK), the type of income the certificate relates to, and the specific period of residence — get this wrong and the certificate may not match what the Indian payer or Form 41 (the self-declaration that replaced Form 10F from 1 April 2026) is asking for.' },
  { title: 'No fee — delivered by email or post', desc: 'HMRC does not charge for a Certificate of Residence. You choose PDF-by-email or postal delivery when you apply; email is faster and is what most groups use to keep the TRC in hand ahead of a scheduled repatriation.' },
  { title: 'Renew it every year, not once', desc: 'A TRC generally covers a specific financial year. Indian payers typically want a certificate covering the year the payment actually falls in, so treat the HMRC application as an annual step tied to your repatriation calendar, not a one-off item from incorporation.' },
]

const faqs = [
  { q: 'Does India actually have a double taxation agreement with the UK?', a: 'Yes. India and the UK have had a double taxation agreement since 25 January 1993, updated by a Protocol in force since December 2013, and further modified by the OECD\'s Multilateral Instrument (MLI) from FY 2020-21. It\'s this tax treaty — not the separate 2025 India-UK trade agreement — that sets the withholding tax caps on this page.' },
  { q: 'What withholding tax rate applies to a dividend paid to our UK parent?', a: '10% under the treaty for most dividends, or 15% specifically where the dividend is paid out of income derived from immovable property by certain investment vehicles (broadly, REIT/InvIT-style distributions) — against a 20% domestic rate if no valid TRC and Form 41 (formerly Form 10F) are on file when the payment is processed.' },
  { q: 'Do we need a new Tax Residency Certificate every year?', a: 'Yes. A TRC/Certificate of Residence is generally issued to cover a specific financial year, and Indian payers typically ask for a fresh certificate covering the year in which the payment falls — building the HMRC application into your annual repatriation planning avoids a last-minute gap.' },
  { q: 'Is Form 10F still required if we already have a valid TRC?', a: 'The form itself has been renamed: from 1 April 2026, the self-declaration that sits alongside the TRC is Form 41, filed under Section 159(8) of the Income-tax Act, 2025 (Rule 75 of the Income-tax Rules, 2026) — it replaced Form 10F, which was filed under the old Act\'s Section 90. The underlying requirement hasn\'t changed: it\'s needed for whatever particulars the TRC itself doesn\'t already cover, and in practice most UK certificates don\'t contain every field the Act requires, so it\'s filed alongside the TRC in almost all cases. It has to be filed electronically on the income tax e-filing portal (eportal.incometax.gov.in), and non-residents who don\'t otherwise need an Indian PAN can register under a dedicated non-PAN category to file it. Payments processed before 1 April 2026 remain governed by the old Form 10F rules.' },
  { q: 'Does the DTAA reduce tax on capital gains too?', a: 'No — capital gains sit outside the treaty\'s withholding-rate caps entirely. See the capital gains section below.' },
  { q: 'Can HMRC or the Indian tax authority refuse the treaty benefit even with a valid TRC?', a: 'Yes. A TRC establishes residency, but it isn\'t an automatic guarantee of benefit — under the MLI\'s Principal Purpose Test, treaty access can still be denied if obtaining the treaty benefit was a principal purpose of how a transaction or structure was set up, rather than an incidental result of genuine business activity. See the anti-abuse section below.' },
]

export default function IndiaUKDTAAPage() {
  return (
    <RegionClusterTemplate
      title="India-UK DTAA & Withholding Tax Rates"
      subtitle="How the India-UK Double Taxation Avoidance Agreement reduces withholding tax on dividends, interest, and royalties for your Indian subsidiary."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
              { label: "India-UK DTAA & Withholding Tax Rates" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          The India-UK DTAA (signed 1993, updated by a 2012 Protocol in force since December 2013, with MLI modifications applying from FY 2020-21) caps how much withholding tax India can apply to income flowing from your Indian subsidiary back to the UK — well below India&apos;s domestic withholding rates.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Worth separating clearly from this: the UK-India Comprehensive Economic and Trade Agreement (CETA) came into force on 15 July 2026, alongside a reciprocal Double Contributions Convention on social security for seconded staff. Neither of those changes anything about the withholding rates below — CETA is a tariffs-and-market-access deal, not a tax treaty, and it doesn&apos;t touch the DTAA.
        </p>
      </div>

      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-4 text-left">Income Type</th>
              <th className="border border-gray-300 p-4 text-left">Treaty Rate</th>
              <th className="border border-gray-300 p-4 text-left">Domestic Rate (No Treaty)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Dividends</td>
              <td className="border border-gray-300 p-4 text-sm">10% (general); 15% for certain property-income-derived distributions</td>
              <td className="border border-gray-300 p-4 text-sm">20%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Interest</td>
              <td className="border border-gray-300 p-4 text-sm">10% if paid to a bank/financial institution; 15% in other cases</td>
              <td className="border border-gray-300 p-4 text-sm">20%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Royalties / Fees for Technical Services</td>
              <td className="border border-gray-300 p-4 text-sm">15% generally; 10% for equipment royalties</td>
              <td className="border border-gray-300 p-4 text-sm">20%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">
          Rates shown are treaty caps before applicable surcharge and cess under Indian domestic law. Actual withholding uses whichever of the treaty rate or domestic rate is more beneficial to the taxpayer. Domestic rates are further increased by surcharge (typically 2-5% for a foreign company, depending on income) and a 4% health and education cess.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Why the treaty rate matters more than it used to</h3>
        <p className="text-gray-700">
          Until 31 March 2023, India&apos;s domestic withholding rate on royalties and fees for technical services paid to non-residents was only 10% — barely different from, or in some cases equal to, the treaty rate itself, which made chasing the TRC and Form 10F for royalty payments a marginal exercise for many groups. The Finance Act 2023 doubled that domestic rate to 20% with effect from 1 April 2023. Against that higher baseline, the treaty&apos;s 10-15% cap on royalties and FTS is now a real, material saving — not just a compliance formality — which is exactly the kind of change worth checking your repatriation structure against if it hasn&apos;t been reviewed since before 2023.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-2">The paperwork changed names on 1 April 2026 — not the requirement</h3>
        <p className="text-gray-700">
          The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026, renumbering the relevant sections and renaming several forms this page relies on. What was Form 10F (filed under old Section 90) is now Form 41, filed under Section 159(8) of the new Act and Rule 75 of the Income-tax Rules, 2026. What was Form 15CA / Form 15CB (filed under old Section 195) is now Form 145 / Form 146, filed under new Section 393(2). None of this changes what you actually have to do — a TRC plus a self-declaration before the treaty rate is applied, and a CA-certified declaration before the remittance clears the bank — only the form numbers and legal citations changed. Payments processed before 1 April 2026 remain governed by the old forms and sections; anything from that date onward uses the new ones. (Source: Income Tax Department, Form 41 guidance, incometaxindia.gov.in.)
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What You Need to Actually Claim These Rates</h2>
        <div className="space-y-4">
          <ClickableInfoCard title="Tax Residency Certificate (TRC)" desc="Mandatory to access treaty rates. Without a valid TRC from HMRC — called a Certificate of Residence on the UK side — the Indian payer must apply domestic withholding rates instead, meaning up to double the tax on dividends and interest, and a doubled-again gap on royalties since the 2023 rate change above." />
          <ClickableInfoCard title="Form 41 (formerly Form 10F)" desc="A self-declaration filed alongside the TRC confirming beneficial ownership and treaty eligibility details not captured on the TRC itself, required under Section 159(8) of the Income-tax Act, 2025. It must be filed electronically on India's income tax portal (eportal.incometax.gov.in); non-residents who don't otherwise need an Indian PAN can register under a dedicated non-PAN category specifically to file it. Filed once per tax year, before the treaty rate is applied to a payment." />
          <ClickableInfoCard title="No Permanent Establishment Declaration (if applicable)" desc="Relevant where the UK parent wants to confirm it isn't creating a taxable presence in India beyond the subsidiary itself — important because a finding of PE would pull the UK parent's own profits into Indian tax on a net basis, separate from the withholding tax on the subsidiary's payments." />
          <ClickableInfoCard title="Form 145 / Form 146 (formerly 15CA/15CB, before the money actually leaves India)" desc="Even with the TRC, Form 41 and the correct treaty rate all in place, the Indian subsidiary's bank won't release the remittance without Form 145 (a declaration by the remitter, replacing Form 15CA) and, above a threshold, Form 146 (a Chartered Accountant's certificate confirming the DTAA and Income-tax Act provisions were correctly applied, replacing Form 15CB). This is a separate, final step most groups only discover the first time they try to actually send money." />
        </div>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">The most common way UK companies lose the treaty benefit</h3>
        <p className="text-gray-700">
          It isn&apos;t treaty eligibility — it&apos;s paperwork timing. If the TRC isn&apos;t in place before a dividend or interest payment is processed, the Indian payer is required to withhold at the higher domestic rate by default, and reclaiming the difference afterward is a slower, separate process. Getting the TRC and Form 41 (formerly Form 10F) organized before your first repatriation, not after, is what actually protects the treaty rate.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How a UK Company Actually Gets the Certificate of Residence</h2>
        <div className="relative space-y-4">
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
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Capital Gains: Not Covered by the Treaty&apos;s Rate Caps</h2>
        <p className="text-lg text-gray-700 mb-4">
          The rates table above covers recurring payments — dividends, interest, royalties and fees for technical services. Capital gains sit in a different part of the treaty (Article 14) with a different, less favourable structure for the UK side: rather than capping the Indian tax rate, Article 14 generally leaves gains taxable under each country&apos;s own domestic law, with double taxation relieved through a foreign tax credit rather than a reduced Indian rate.
        </p>
        <p className="text-lg text-gray-700">
          In practice, that means if a UK parent ever sells its shares in the Indian subsidiary, the gain is generally taxable in India under India&apos;s domestic capital gains rules (with the rate depending on the holding period), and the UK side of the transaction gets relief via credit for the Indian tax paid rather than a treaty-capped Indian rate. Indian law also taxes indirect transfers — a sale higher up a holding chain, outside India, where the underlying value substantially derives from Indian assets — so restructuring the group above the Indian subsidiary isn&apos;t automatically outside India&apos;s reach either. This is a distinct planning question from the withholding rates above and worth raising separately if a sale or restructuring is on the table.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Treaty Benefits Aren&apos;t Unconditional: The Principal Purpose Test</h2>
        <p className="text-lg text-gray-700">
          Since the MLI took effect, India-UK treaty access carries a Principal Purpose Test (PPT): benefits can be denied where it&apos;s reasonable to conclude that obtaining the treaty benefit was one of the principal purposes of an arrangement, unless granting it would still be in line with the object and purpose of the treaty provision. The CBDT issued formal guidance on how the PPT should be applied in practice in January 2025 (Circular No. 1/2025). For a UK company with a real, operating Indian subsidiary — genuine staff, activity and commercial purpose beyond tax efficiency — this isn&apos;t a live risk in the way it can be for a pure holding structure with no substance, but it&apos;s a reason to keep the underlying commercial rationale for the group structure documented rather than assuming a TRC alone is bulletproof.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Common Questions From UK Finance Teams</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <ClickableInfoCard key={item.q} title={item.q} desc={item.a} />
          ))}
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            UK Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for UK Companies →
          </Link>
          <Link href="/india-entry-for-uk-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for UK Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
