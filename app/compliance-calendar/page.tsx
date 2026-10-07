import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

const NAVY = "#0E1B4D"
const GOLD = "#FFD21F"

type Row = string[]

function CalendarTable({ headers, rows }: { headers: string[]; rows: Row[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#0E1B4D] hover:bg-[#0E1B4D]">
            {headers.map((h) => (
              <TableHead key={h} className="whitespace-normal text-xs font-bold uppercase tracking-wide text-white">
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, j) => (
                <TableCell key={j} className="whitespace-normal align-top text-sm text-gray-700">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const monthlyRows: Row[] = [
  ["7th", "Deposit of TDS deducted in the previous month (March deductions: 30 April)", "Income Tax Department", "Interest for each month of delay; expenses can be disallowed"],
  ["10th", "GSTR-7, GST TDS return (only if the company is required to deduct GST TDS)", "GST", "Late fee and interest"],
  ["11th", "GSTR-1, details of sales invoices", "GST", "Late fee per day; customers cannot claim input credit"],
  ["15th", "Provident Fund (PF) and ESI contributions", "EPFO and ESIC", "Interest and damages"],
  ["20th", "GSTR-3B, summary return and GST payment", "GST", "Late fee per day plus interest on tax paid late"],
  ["Varies by state", "Professional tax on salaries", "State government", "Penalty and interest under state law"],
  ["Your agreed date", "Monthly accounts, MIS and reporting pack to the parent", "Internal", "Parent loses visibility; year-end audit gets harder"],
]

const quarterlyRows: Row[] = [
  ["15 June", "Advance tax, 1st instalment (15% of estimated tax)", "Income Tax Department", "Interest on the shortfall"],
  ["31 July", "TDS returns for April–June (Forms 138, 140 and 144 under the Income-tax Act 2025)", "Income Tax Department", "Late fee per day and penalty"],
  ["15 September", "Advance tax, 2nd instalment (45% cumulative)", "Income Tax Department", "Interest on the shortfall"],
  ["31 October", "TDS returns for July–September", "Income Tax Department", "Late fee per day and penalty"],
  ["31 October", "MSME-1, dues to micro and small suppliers for April–September (if any are outstanding beyond 45 days)", "Registrar of Companies (ROC)", "Penalty on company and officers"],
  ["15 December", "Advance tax, 3rd instalment (75% cumulative)", "Income Tax Department", "Interest on the shortfall"],
  ["31 January", "TDS returns for October–December", "Income Tax Department", "Late fee per day and penalty"],
  ["15 March", "Advance tax, 4th instalment (100%)", "Income Tax Department", "Interest on the shortfall"],
  ["30 April", "MSME-1 for October–March", "Registrar of Companies (ROC)", "Penalty on company and officers"],
  ["31 May", "TDS returns for January–March", "Income Tax Department", "Late fee per day and penalty"],
]

const annualRows: Row[] = [
  ["30 June", "DPT-3, return of deposits and outstanding loans", "Registrar of Companies (ROC)", "Additional fees and penalty"],
  ["30 June (once every 3 years)", "DIR-3 KYC for each director (moved from annual to a 3-year cycle from 31 March 2026)", "Ministry of Corporate Affairs", "DIN deactivated; fee to reactivate"],
  ["15 July", "FLA return, annual return on foreign liabilities and assets", "Reserve Bank of India (RBI)", "Treated as a FEMA contravention; compounding may be needed"],
  ["By 30 September", "Statutory audit of financial statements, then board approval", "Statutory auditor", "AGM cannot be held on time"],
  ["30 September", "Tax audit report, Form 26 (replaces Form 3CA/3CB/3CD)", "Income Tax Department", "Fixed fee for late filing"],
  ["30 September", "Annual General Meeting (AGM)", "Shareholders (the parent)", "Penalty on company and directors"],
  ["Within 15 days of AGM", "ADT-1, auditor appointment or reappointment", "ROC", "Additional fees"],
  ["Within 30 days of AGM", "AOC-4, financial statements", "ROC", "Additional fees per day"],
  ["31 October", "Transfer pricing report, Form 48 (replaces Form 3CEB)", "Income Tax Department", "Penalty; higher scrutiny of intercompany pricing"],
  ["Within 60 days of AGM", "MGT-7, annual return", "ROC", "Additional fees per day"],
  ["30 November", "Income tax return (companies with a transfer pricing report; otherwise 31 October)", "Income Tax Department", "Late fee, interest and loss of some carry-forward benefits"],
  ["31 December", "GSTR-9 annual GST return, and GSTR-9C where turnover requires it", "GST", "Late fee per day"],
  ["Throughout the year", "At least four board meetings, with no more than 120 days between two meetings", "Companies Act", "Penalty on company and officers"],
]

const eventRows: Row[] = [
  ["Company incorporated", "First auditor appointed by the board", "Within 30 days of incorporation", "Companies Act"],
  ["Company incorporated", "Share certificates issued to the parent", "Within 2 months of incorporation", "Companies Act"],
  ["Company incorporated", "INC-20A, declaration of commencement of business", "Within 180 days of incorporation", "ROC"],
  ["Shares issued to the parent (including at incorporation)", "FC-GPR on the FIRMS portal", "Within 30 days of allotment", "RBI (FEMA)"],
  ["Shares allotted after incorporation", "PAS-3, return of allotment", "Within 30 days of allotment", "ROC"],
  ["Shares transferred between a resident and a non-resident", "FC-TRS", "Within 60 days of transfer or receipt of payment, whichever is earlier", "RBI (FEMA)"],
  ["Foreign loan from the parent (ECB)", "ECB-2 monthly return", "7th of the following month", "RBI via bank"],
  ["Payment to a non-resident (fees, royalty, reimbursements)", "Form 15CA, and 15CB where applicable", "Before making the remittance", "Income Tax Department"],
  ["Director appointed or resigns", "DIR-12", "Within 30 days", "ROC"],
  ["Change in a director's mobile number or email", "DIR-3 KYC", "Within 30 days", "Ministry of Corporate Affairs"],
  ["Registered office shifted", "INC-22", "Within 30 days", "ROC"],
  ["Certain board or special resolutions passed", "MGT-14", "Within 30 days", "ROC"],
  ["Change in business details (address, directors, signatories)", "GST registration amendment", "Within 15 days", "GST"],
]

export default function ComplianceCalendarPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-4xl px-4">
        <Breadcrumb items={[{ label: "Compliance Calendar" }]} />

        <header className="mb-8 mt-2">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl" style={{ color: NAVY }}>
            India Subsidiary Compliance Calendar
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: 7 October 2026 · AU Corporate</p>
        </header>

        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          An Indian private limited company owned by a foreign parent has filings every month, every quarter, every year, and whenever certain events happen. This calendar lists the common ones for a company with a 31 March financial year end (1 April to 31 March).
        </p>
        <p className="mb-12 text-lg leading-relaxed text-gray-700">
          Each table shows what the filing is, who it goes to, when it is due, and what happens if it is missed. Dates that fall on a holiday or weekend usually move to the next working day, and regulators often extend deadlines, so always confirm the current date before filing.
        </p>

        <h2 className="mb-2 font-heading text-2xl font-bold" style={{ color: NAVY }}>
          Monthly compliance
        </h2>
        <p className="mb-4 text-gray-700">Most monthly filings fall between the 7th and the 20th of the following month.</p>
        <CalendarTable headers={["Due date", "Filing", "Regulator", "If missed"]} rows={monthlyRows} />
        <p className="mb-12 text-sm text-gray-500">
          Companies that opt for the quarterly GST scheme (QRMP) file GSTR-1 by the 13th and GSTR-3B by the 22nd or 24th of the month after each quarter.
        </p>

        <h2 className="mb-2 font-heading text-2xl font-bold" style={{ color: NAVY }}>
          Quarterly and half-yearly compliance
        </h2>
        <p className="mb-4 text-gray-700">Advance tax is paid in four instalments, and TDS returns are filed one quarter in arrears.</p>
        <CalendarTable headers={["Due date", "Filing", "Regulator", "If missed"]} rows={quarterlyRows} />
        <p className="mb-12 text-sm text-gray-500">
          TDS certificates follow each return: Form 130 for salaries (replacing Form 16) and Form 131 for other payments (replacing Form 16A).
        </p>

        <h2 className="mb-2 font-heading text-2xl font-bold" style={{ color: NAVY }}>
          Annual compliance (in date order)
        </h2>
        <p className="mb-4 text-gray-700">The annual cycle runs from June to December after each financial year end, with the AGM by 30 September as the anchor.</p>
        <CalendarTable headers={["Due date", "Filing", "Regulator", "If missed"]} rows={annualRows} />
        <p className="mb-12 text-sm text-gray-500">The first AGM of a new company can be held within nine months of its first financial year end.</p>

        <h2 className="mb-2 font-heading text-2xl font-bold" style={{ color: NAVY }}>
          Event-based filings
        </h2>
        <p className="mb-4 text-gray-700">These are triggered by something happening, not by a date, and they are where foreign-owned subsidiaries most often fall behind.</p>
        <CalendarTable headers={["Trigger", "Filing", "Deadline", "Regulator"]} rows={eventRows} />

        <div className="mb-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3 font-heading text-xl font-bold" style={{ color: NAVY }}>
            Important note
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            This calendar is a general guide prepared by AU Corporate for information only. It does not constitute legal, tax or professional advice, and it is not a complete list of every obligation that may apply to a particular company.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-600">
            Actual compliance requirements depend on each company&apos;s facts, including its industry, turnover, number of employees, state of registration, transactions with its parent, and any approvals or licences it holds. Laws, forms and due dates are amended frequently, and authorities may extend or change deadlines by notification after this calendar was prepared.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Readers should confirm every requirement and due date with a qualified professional, or on the relevant government portal, before acting. AU Corporate, its partners and its employees shall not be held responsible for any loss, penalty, interest, fee or other consequence arising from reliance on this calendar, or from any error, omission or change in law after the date of preparation.
          </p>
        </div>

        <div className="mb-16 rounded-2xl p-8 text-center" style={{ backgroundColor: NAVY }}>
          <h2 className="mb-3 font-heading text-2xl font-bold text-white">Need help staying compliant?</h2>
          <p className="mx-auto mb-6 max-w-xl text-white/75">
            AU Corporate handles incorporation, monthly accounting, FEMA filings, secretarial compliance, tax compliance, expat services and annual audit support for Indian subsidiaries of foreign companies.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-lg px-6 py-3 text-sm font-bold text-[#0E1B4D] transition hover:bg-[#F2B705]"
            style={{ backgroundColor: GOLD }}
          >
            Book a consultation with an expert
          </Link>
          <p className="mt-4 text-sm text-white/60">
            Or write to partner@theaucorp.com, or call +91-9999010513.
          </p>
        </div>
      </div>
    </div>
  )
}
