import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'

const filingCalendar = [
  { filing: 'Entity Master Form (EMF)', trigger: 'One-time — registers the subsidiary itself on RBI’s FIRMS platform', deadline: 'Before any FC-GPR or FC-TRS can be filed', via: 'FIRMS portal' },
  { filing: 'Form FC-GPR', trigger: 'Allotment of shares (or other capital instruments) to the UK parent against inward FDI', deadline: 'Within 30 days of allotment', via: 'FIRMS — Single Master Form' },
  { filing: 'Form FC-TRS', trigger: 'Transfer of shares between a resident and a non-resident (e.g. the UK parent buys out a co-investor, or vice versa)', deadline: 'Within 60 days of receipt of consideration', via: 'FIRMS — Single Master Form, via your AD bank' },
  { filing: 'Annual FLA Return', trigger: 'Standing obligation for any entity carrying FDI on its books as of 31 March, whether or not a transaction occurred that year', deadline: 'By 15 July every year', via: 'FLAIR portal (flair.rbi.org.in)' },
  { filing: 'Form ECB-2', trigger: 'Only applies if the subsidiary is funded (in whole or part) by a loan from the UK parent rather than equity', deadline: 'Within 7 calendar days of the month-end in which a drawdown or debt-servicing event occurs', via: 'Via your AD bank' },
]

const ukTimeline = [
  { title: 'Certificate of Incorporation issued', desc: 'The subsidiary legally exists. FIRMS registration (Entity Master Form) can be filed from this point.' },
  { title: 'Capital remitted, FIRC issued', desc: 'Once the UK parent wires the share subscription money into the Indian bank account, the AD bank issues a Foreign Inward Remittance Certificate confirming receipt — the trigger that starts the FC-GPR clock once shares are actually allotted.' },
  { title: 'Shares allotted — FC-GPR window opens', desc: 'The 30-day filing deadline runs from the allotment date, not the remittance date, so board timing on the allotment resolution matters.' },
  { title: 'If loan-funded: ECB registration and monthly reporting begins', desc: 'A UK parent loan to the subsidiary is treated as External Commercial Borrowing under FEMA, not an informal intercompany arrangement — it needs a Loan Registration Number before drawdown and ongoing Form ECB-2 reporting.' },
  { title: 'Every 15 July: Annual FLA Return', desc: 'Falls independently of any transaction. Because both the UK tax year (to 5 April) and India’s financial year (to 31 March) close within days of each other — unlike a US parent working to a calendar year — UK finance teams can usually fold the FLA return into the same year-end reporting cycle as the group accounts rather than treating it as an unrelated Indian-only deadline.' },
  { title: 'Before any dividend or fee remittance to the UK', desc: 'Sits alongside FEMA rather than inside it — the Indian entity also needs the tax-side Form 15CA/15CB certification, and the UK parent needs its Tax Residency Certificate and Form 10F in place to access the DTAA rate. See the DTAA callout below.' },
]

export default function FemaComplianceUKCompanyPage() {
  return (
    <RegionClusterTemplate
      title="FEMA Compliance for UK Companies in India"
      subtitle="The recurring RBI and FEMA filings a UK parent's Indian subsidiary needs to stay compliant after incorporation."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
              { label: "FEMA Compliance for UK Companies in India" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Once your Indian subsidiary receives foreign direct investment (FDI) from the UK parent, FEMA (Foreign Exchange Management Act, 1999) compliance becomes an ongoing obligation, administered by the RBI through the FIRMS and FLAIR portals rather than a one-time incorporation step. These filings sit alongside — and are separate from — the tax filings needed to claim India-UK DTAA treaty rates on repatriated income. The UK-India trade relationship has moved fast recently (the UK-India Comprehensive Economic and Trade Agreement came into force on 15 July 2026, alongside a reciprocal Double Contributions Convention on social security for seconded staff), but neither of those changes anything about the FEMA reporting mechanics below — they affect tariffs and secondment costs, not how RBI wants your equity and loan filings reported.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Filing Calendar at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Filing</th>
                <th className="border border-gray-300 p-4 text-left">What triggers it</th>
                <th className="border border-gray-300 p-4 text-left">Deadline</th>
                <th className="border border-gray-300 p-4 text-left">Filed via</th>
              </tr>
            </thead>
            <tbody>
              {filingCalendar.map((row) => (
                <tr key={row.filing}>
                  <td className="border border-gray-300 p-4 font-semibold text-sm">{row.filing}</td>
                  <td className="border border-gray-300 p-4 text-sm">{row.trigger}</td>
                  <td className="border border-gray-300 p-4 text-sm">{row.deadline}</td>
                  <td className="border border-gray-300 p-4 text-sm">{row.via}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          FC-TRS and ECB-2 only apply if the relevant event actually happens (a share transfer, or loan funding) — every entity with FDI files the Entity Master Form once and the FLA Return annually regardless.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Each Filing Actually Involves</h2>
        <div className="space-y-6">
          <ClickableInfoCard title="Entity Master Form (EMF) — FIRMS onboarding" desc="A one-time registration of the Indian entity itself on RBI's FIRMS platform, done before any transaction-level filing. It's the step foreign parents most often overlook because it isn't triggered by a transaction — without it, FC-GPR can't be filed at all, which is why the 30-day FC-GPR clock effectively starts running the moment you know the allotment is happening, not the moment shares are actually allotted." />
          <ClickableInfoCard title="Form FC-GPR" desc="Filed with the RBI within 30 days of allotting shares to the UK parent against inward FDI — the filing that formally records the investment in the subsidiary's capital structure. The issue price also has to clear FEMA's pricing floor: for an unlisted company, fair value determined by an internationally accepted method (typically DCF or NAV) and certified by a Chartered Accountant or SEBI-registered Merchant Banker, valid for 90 days from the certificate date." />
          <ClickableInfoCard title="Form FC-TRS" desc="Required within 60 days of receipt of consideration for any share transfer between a resident and non-resident — relevant if the UK parent later restructures ownership or brings in a co-investor." />
          <ClickableInfoCard title="Annual FLA Return" desc="Filed annually with the RBI, by 15 July, by every entity that has received FDI, regardless of whether any transaction occurred that year. Not transaction-triggered, which is exactly why it's the filing most foreign-owned subsidiaries miss — a dormant subsidiary with no activity still has to file it." />
          <ClickableInfoCard title="Form ECB-2 (loan-funded subsidiaries only)" desc="If the UK parent funds the subsidiary partly through a loan rather than pure equity, that loan is treated as External Commercial Borrowing under FEMA — it needs a Loan Registration Number before drawdown, and under the revised ECB reporting framework, Form ECB-2 is filed on an event basis: within 7 calendar days of the month-end in which a drawdown or debt-servicing transaction occurs." />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Missing a Deadline: Late Submission Fee vs. Compounding</h2>
        <p className="text-lg text-gray-700 mb-6">
          A late filing doesn't automatically mean a formal RBI compounding case, and it's worth understanding the distinction before assuming the worst. RBI runs two separate tracks for FEMA reporting lapses:
        </p>
        <div className="space-y-6">
          <ClickableInfoCard title="Late Submission Fee (LSF) — the route for most routine delays" desc="For straightforward reporting delays — a late FC-GPR, FC-TRS, FLA Return or ECB-2 — RBI's uniform LSF framework (in force since a September 2022 circular) lets the entity self-pay a matrix-based fee through its AD bank or the FIRMS portal, without filing a separate compounding application. The fee scales with the size of the delayed transaction and how long the delay ran, capped at 100% of the amount involved; for non-transactional returns like the FLA Return, it's a flat per-return fee. This is the track the large majority of foreign-owned subsidiaries actually fall into." />
          <ClickableInfoCard title="Compounding — reserved for more serious or repeated contraventions" desc="Where a lapse falls outside the LSF matrix — repeated contraventions within three years, or substantive breaches rather than a late report — it goes through RBI's formal compounding process instead: a compounding application (currently a ₹10,000-plus-GST application fee) filed with the relevant RBI Regional Office or FED CO Cell, an order issued within 180 days of the application, and a compounding amount set using RBI's published guidance-note matrix, capped at up to three times the contravention amount under Section 13 of FEMA. Until the case is compounded, the lapse sits on the entity's compliance record and can complicate future RBI filings or approvals." />
        </div>
        <div className="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <h3 className="font-bold text-lg mb-2">The practical takeaway</h3>
          <p className="text-gray-700">
            Treat the 30/60-day windows as hard deadlines rather than soft targets — but if one is missed, don't assume it's an expensive, months-long compounding case by default. Most routine delays clear through the AD bank as a straightforward LSF payment. What actually escalates a lapse into formal compounding is leaving it unfiled and unaddressed rather than a delay on its own.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">A Practical First-Year Timeline for a UK Parent</h2>
        <div className="relative space-y-4">
          <div aria-hidden="true" className="absolute left-[35px] top-9 bottom-9 hidden w-px bg-yellow-200 sm:block" />
          {ukTimeline.map((step, index) => (
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

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Where this connects to your DTAA position</h3>
        <p className="text-gray-700">
          FEMA compliance and DTAA treaty benefits are handled by different authorities (RBI vs. Indian tax authorities) but both depend on the same underlying paperwork discipline. A subsidiary with clean FEMA filing history has an easier time when its UK parent later needs a Tax Residency Certificate cross-check or faces scrutiny on a repatriation, and most outward remittances also need their own Form 15CA/15CB certification on the tax side before the AD bank will release funds. We track both calendars together rather than treating them as separate workstreams.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Common Questions From UK Finance Teams</h2>
        <div className="space-y-6">
          <ClickableInfoCard title="We haven't done anything with the subsidiary this year — do we still need to file the FLA Return?" desc="Yes. The FLA Return is a census-based, standing obligation for any entity carrying FDI on its books as of 31 March — it isn't triggered by activity, and a dormant or inactive subsidiary still has to file it every year by 15 July for as long as the foreign investment remains on the balance sheet." />
          <ClickableInfoCard title="Does RBI need to approve the UK parent's investment before it's made?" desc="Not for most sectors. The great majority of sectors sit under the Automatic Route, meaning the investment can proceed without prior RBI or government approval — the entity's obligation is to report it correctly afterward (FC-GPR within 30 days), not to seek approval beforehand. A shorter list of sensitive sectors requires prior Government Route approval instead." />
          <ClickableInfoCard title="Is a loan from the UK parent to the subsidiary simpler than issuing shares?" desc="Not necessarily simpler — just differently regulated. A parent loan is treated as External Commercial Borrowing under FEMA, which brings its own registration (a Loan Registration Number before drawdown) and ongoing Form ECB-2 reporting, rather than avoiding RBI reporting altogether." />
          <ClickableInfoCard title="What is the FIRMS portal, and is it the same thing as filing FC-GPR?" desc="FIRMS is the RBI's reporting platform, not a single form. It has two parts: the Entity Master Form, a one-time registration of the subsidiary itself, and the Single Master Form, which is where FC-GPR, FC-TRS and other transaction-level reports are actually filed. The Entity Master Form has to be completed first — it's a common source of an unnecessary FC-GPR delay when it's overlooked." />
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India-UK DTAA & Withholding Rates →
          </Link>
          <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            UK Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            How to Incorporate a Subsidiary from the UK →
          </Link>
          <Link href="/india-entry-for-uk-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for UK Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
