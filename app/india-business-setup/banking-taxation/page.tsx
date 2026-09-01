import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'

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

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Continue Your Setup</h2>
          <div className="grid sm:grid-cols-2 gap-6">
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
