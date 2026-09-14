import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { ArrowRight, Percent, Landmark, FileCheck2, Layers } from 'lucide-react'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'

const financialComponents = [
  {
    title: 'Banking Account Setup',
    description:
      "A foreign-owned Indian entity can only open a corporate current account once incorporation is complete — banks require the Certificate of Incorporation, PAN, the MOA/AOA, KYC documents and a board resolution naming authorised signatories, and foreign-sourced documents typically need to be apostilled or embassy-attested before an Indian bank will accept them. The account has to sit with an RBI-authorised (AD Category-I) bank, since that is the channel through which the entity receives its foreign direct investment. When the parent remits the initial share capital, the bank issues a Foreign Inward Remittance Certificate (FIRC) confirming receipt, and the company must then report the resulting share allotment to RBI through Form FC-GPR on the FIRMS portal — the filing that formally records the FDI against the entity.",
  },
  {
    title: 'GST Registration',
    description:
      "GST registration becomes mandatory once aggregate turnover crosses the applicable threshold — currently Rs 20 lakh for a services business in most states (lower in a handful of special-category states), with a higher Rs 40 lakh threshold for businesses supplying only goods. Many foreign-owned entities, particularly ones billing only their overseas parent, register voluntarily even before crossing that threshold, since registration lets them file a Letter of Undertaking (LUT) and invoice exports as zero-rated without charging tax. Once registered, GST covers the CGST/SGST/IGST due on taxable supplies of goods or services and brings recurring monthly and annual return-filing obligations.",
  },
  {
    title: 'Tax Registration (PAN/TAN)',
    description:
      "PAN (Permanent Account Number) is the entity's core tax identity — needed to open a bank account, register for GST, and file any tax return — and is issued automatically alongside the Certificate of Incorporation as part of the integrated SPICe+ incorporation filing with the MCA. TAN (Tax Deduction and Collection Account Number) is a separate registration, obtained in that same SPICe+ filing, that the company needs before it can legally deduct and deposit tax at source on salaries or vendor payments. Both are typically in hand from day one of incorporation rather than requiring a follow-up application.",
  },
  {
    title: 'Payroll & Salary Processing',
    description:
      "Employers must deduct tax at source (TDS) from employee salaries under the Income Tax Act, 2025 — which replaced the 1961 Act with effect from 1 April 2026 — based on each employee's chosen tax regime and applicable slab rates, and then deposit and report that TDS on a periodic basis. Once headcount crosses the applicable statutory thresholds, Provident Fund (PF) and Employees' State Insurance (ESI) registration and contributions also come into play, adding employer and employee contributions on top of salary TDS. Sequencing this correctly — TDS from the first payroll run, PF/ESI as headcount grows — is a common first-year compliance gap for newly incorporated entities.",
  },
  {
    title: 'Accounting System',
    description:
      "Every Indian company must maintain statutory books of account under the Companies Act, 2013 — the general ledger, minute books and statutory registers — on an accrual basis at its registered office or another board-approved location. Certain classes of companies, based on net worth, listing status and other criteria notified by the Ministry of Corporate Affairs, are additionally required to prepare financial statements under Indian Accounting Standards (Ind AS) rather than standard Indian GAAP. That distinction matters for a foreign-owned subsidiary from the outset, since the chart of accounts and reporting stack are easier to build correctly the first time than to retrofit, particularly where the parent consolidates under IFRS.",
  },
  {
    title: 'Annual Filing',
    description:
      "Beyond the recurring monthly and quarterly obligations, every Indian company faces a fixed set of annual filings: a statutory audit of its financial statements, annual filings with the Registrar of Companies (financial statements and annual return), an Annual General Meeting, and an income tax return. A foreign-owned entity typically carries two further annual obligations on top — an Annual Return on Foreign Liabilities and Assets (FLA) to RBI for as long as it holds foreign investment on its books, and, where it has international related-party transactions, a Form 3CEB transfer pricing report. Missing any one of these is treated as a compliance lapse in its own right, independent of whether the underlying tax or FDI position was actually correct.",
  },
]

const bankingTaxationFaqs = [
  {
    q: 'How long does it take to open a business bank account in India for a foreign-owned company?',
    a: "There's no single official figure — it depends heavily on how quickly the foreign parent's documents clear apostille or embassy attestation, since that runs through authorities in the parent's home country rather than anything India-side can expedite. Once the Certificate of Incorporation, PAN, apostilled documents and board resolution are all in hand, the bank's own KYC verification and account activation is typically the faster part of the process; the apostille step is the one most foreign parents underestimate on timing.",
  },
  {
    q: 'Is GST registration mandatory for a foreign-owned Indian subsidiary?',
    a: "Only once aggregate turnover crosses the applicable threshold — Rs 20 lakh for a services business in most states, Rs 40 lakh for a goods-only supplier. It is not triggered by incorporation or foreign ownership itself. Many foreign-owned entities register voluntarily before crossing that threshold anyway, particularly where they bill only their overseas parent, since registration lets them file a Letter of Undertaking and invoice exports as zero-rated.",
  },
  {
    q: 'What is the corporate income tax rate for a foreign-owned company incorporated in India?',
    a: "An Indian subsidiary is taxed as a domestic company regardless of how much of its capital is foreign-owned — it is not taxed at the higher rate that applies to a foreign company's branch office. Most newly incorporated subsidiaries opt into the concessional regime, at a flat 22% (plus applicable surcharge and cess), in exchange for giving up certain exemptions and deductions; the standard rate for a domestic company that doesn't opt in is otherwise 25% or 30% depending on turnover. A narrower 15% concessional rate exists for new manufacturing companies meeting specific conditions. Once elected, the concessional regime generally continues to apply going forward, so it's worth deciding deliberately rather than defaulting into the standard rate.",
  },
  {
    q: 'Do we need to withhold tax when paying dividends or royalties back to the foreign parent?',
    a: "Yes. Domestic law otherwise sets withholding at 20% (plus surcharge and cess) on dividends, royalties and fees for technical services paid to a non-resident, but the Double Taxation Avoidance Agreement (DTAA) between India and the parent's home jurisdiction typically caps that rate lower. Claiming the treaty rate requires the recipient to furnish a Tax Residency Certificate and, in most cases, Form 10F — without that paperwork in place, the bank will withhold at the higher domestic rate by default.",
  },
  {
    q: 'Are PAN and TAN separate applications from company incorporation?',
    a: "No — both are issued automatically as part of the same SPICe+ incorporation filing with the MCA, alongside the Certificate of Incorporation, rather than requiring a follow-up application after the company already exists.",
  },
  {
    q: "What's the single biggest first-year banking and tax mistake foreign-owned entities make?",
    a: 'Sequencing. Attempting to open a bank account before the apostille chain is complete, assuming GST registration is optional indefinitely once it should really be filed under an LUT for a parent-billing entity, or treating the FLA return as unnecessary in a year with no transactions — all three are avoidable, and all three are among the most common gaps our regulatory compliance practice sees in a foreign-owned entity\'s first year.',
  },
]

export default function BankingTaxationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Business Setup", href: "/india-business-setup" }, { label: "Banking & Taxation" }]} />

      <section className="py-20 bg-linear-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Banking & Taxation Setup</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Establish your financial infrastructure in India. From opening business bank accounts to understanding GST and corporate tax obligations, we guide you through the financial setup.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/doing-business-in-india/post-incorporation">
              Next: Post-Incorporation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Landmark, value: 'AD Cat-I', label: 'Bank Required for FDI Account' },
              { icon: Percent, value: '22%', label: 'Concessional Corporate Tax Rate' },
              { icon: Layers, value: 'Rs 20L', label: 'GST Threshold (Services)' },
              { icon: FileCheck2, value: '1', label: 'SPICe+ Filing for PAN & TAN' },
            ].map((stat) => (
              <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white/70 p-4 text-center backdrop-blur-sm cursor-pointer">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
                <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </ClickableReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Financial Setup Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {financialComponents.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE TAX RATES */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Corporate Income Tax Rates for a Foreign-Owned Indian Company</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An Indian subsidiary is taxed as a domestic company regardless of how much of its capital is foreign-owned — this is a distinct, and generally more favourable, position than the higher rate that applies to a foreign company operating through a branch office rather than an incorporated subsidiary. Most newly incorporated subsidiaries opt into the concessional regime, a flat 22% rate (plus applicable surcharge and cess), in exchange for giving up certain exemptions and deductions such as accelerated depreciation and specific investment-linked incentives. Companies that don&apos;t opt in are instead taxed at the standard domestic company rate of 25% or 30%, depending on turnover, and a narrower 15% concessional rate is available for new manufacturing companies meeting specific conditions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Once a company elects into the concessional regime, that election generally continues to apply in subsequent years rather than being a year-by-year choice — which is why this is worth deciding deliberately as part of initial tax structuring, alongside the accounting-system choices covered above, rather than defaulting into whichever rate the first return happens to apply.
          </p>
        </div>
      </section>

      {/* WITHHOLDING TAX / REPATRIATION */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Repatriating Profits: Withholding Tax and DTAA Relief</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once a subsidiary starts sending money back to its foreign parent — as dividends, royalties, or fees for technical services — that payment attracts withholding tax at source before it leaves India. Domestic law otherwise sets that withholding at 20% (plus surcharge and cess), but where India has a Double Taxation Avoidance Agreement (DTAA) with the parent&apos;s home jurisdiction, that treaty typically caps the rate lower. Claiming the treaty rate isn&apos;t automatic: the recipient generally needs to furnish a Tax Residency Certificate and, in most cases, Form 10F before the payment is made — without that paperwork in hand, the bank will withhold at the higher domestic rate by default and the difference has to be reclaimed later through a tax return.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This sits alongside, not instead of, the FEMA/RBI reporting already covered above — a dividend or royalty payment out of India is a tax event and, depending on the payment type, may also carry its own RBI reporting step. Getting the DTAA paperwork in place before the first repatriation is due is generally far simpler than reclaiming over-withheld tax after the fact.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <FaqAccordion faqs={bankingTaxationFaqs} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: bankingTaxationFaqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
      </section>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Continue Your Setup</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/india-business-setup/company-formation" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Company Registration</h3>
              <p className="text-sm text-gray-600">The full incorporation sequence that precedes bank account opening and tax registration</p>
            </Link>
            <Link href="/india-business-setup/regulatory-compliance" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-sm text-gray-600">The full six-regime compliance framework beyond banking and tax</p>
            </Link>
            <Link href="/doing-business-in-india/post-incorporation" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Life After Incorporation</h3>
              <p className="text-sm text-gray-600">Strategic priorities as you scale — finance function, governance, and second-year mistakes</p>
            </Link>
            <Link href="/contact" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Financial Consultation</h3>
              <p className="text-sm text-gray-600">Expert guidance on banking and taxation</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
