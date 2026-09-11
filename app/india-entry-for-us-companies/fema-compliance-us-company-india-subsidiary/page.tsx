import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'

const faqs = [
  {
    q: 'Does a US-owned Indian subsidiary need to file FC-GPR, FC-TRS, and the FLA return every year?',
    a: "FC-GPR and FC-TRS are transaction-triggered — you only file FC-GPR when shares are allotted against fresh FDI, and FC-TRS when shares change hands between a resident and a non-resident. The Annual FLA Return is different: it's a standing obligation every year the subsidiary carries foreign investment on its books as of 31 March, whether or not any transaction happened that year, and is due by 15 July for the preceding financial year.",
  },
  {
    q: 'What happens if the subsidiary misses the FC-GPR or FC-TRS filing deadline?',
    a: "A late filing isn't cleared by simply paying a fee after the fact — it has to go through RBI's compounding process under Section 13 of FEMA, 1999, now governed by the Foreign Exchange (Compounding Proceedings) Rules, 2024. You file a compounding application (with a nominal processing fee), RBI calculates a compounding amount using its published guidance note — capped at 300% of the sum involved in the contravention — and the lapse stays open on the entity's compliance record until that amount is paid and the case is formally closed.",
  },
  {
    q: 'Does FEMA compliance affect what our US finance team has to report to the IRS?',
    a: "Yes, indirectly, in two separate ways. First, a US parent that owns 10% or more of the Indian subsidiary is a Form 5471 filer — typically Category 5, since a majority-owned Indian subsidiary is a Controlled Foreign Corporation — and the capital and share-allotment records behind your FC-GPR filing are the same numbers that need to tie out on that form. Second, because a US person's 'financial interest' in a foreign account extends to accounts held by an entity they own more than 50% of, the subsidiary's Indian bank accounts are very often reportable on the US parent's own FBAR (FinCEN Form 114) — a Treasury filing, separate from Form 5471 and the IRS — once aggregate foreign account value exceeds $10,000 at any point in the year.",
  },
  {
    q: 'Can the US parent lend money directly to the Indian subsidiary?',
    a: "Yes, but it's regulated as an External Commercial Borrowing (ECB) under FEMA rather than treated as a simple intercompany loan. A foreign equity holder with at least 25% direct equity in the subsidiary (or 51%+ indirect equity, or group-company status) qualifies as a recognised lender — which a wholly owned US parent comfortably meets. The loan still has to be registered with RBI via Form ECB, through the subsidiary's Authorised Dealer bank, to obtain a Loan Registration Number before the first drawdown, with ongoing drawdowns and repayments reported on Form ECB-2.",
  },
  {
    q: 'Is the Annual FLA return really required if the subsidiary had zero transactions during the year?',
    a: "Yes — this is the single most commonly missed filing precisely because it isn't triggered by activity. Any Indian entity carrying foreign investment on its balance sheet as of 31 March has to file the Annual FLA Return by 15 July, even in a year where no shares were allotted, transferred, or repaid. It's filed directly by the entity on RBI's dedicated FLA portal, separately from the FIRMS/Single Master Form filings used for FC-GPR and FC-TRS.",
  },
  {
    q: "Who is authorised to file these RBI forms on the subsidiary's behalf?",
    a: "FC-GPR and FC-TRS are filed on the FIRMS portal under the Single Master Form framework, typically by an authorised official of the Indian subsidiary (often the company secretary or CFO) working with the subsidiary's Authorised Dealer (AD Category-I) bank, which reviews and forwards the filing to RBI. The Annual FLA Return is filed directly by the entity after a one-time portal registration. A US parent's own signing authority doesn't extend directly into these portals — the filings run through the Indian entity and its Indian banking relationship.",
  },
]

export default function FemaComplianceUSCompanyPage() {
  return (
    <RegionClusterTemplate
      title="FEMA Compliance for US Companies in India"
      subtitle="The recurring RBI and FEMA filings a US parent's Indian subsidiary needs to stay compliant after incorporation."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "FEMA Compliance for US Companies in India" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Once your Indian subsidiary is incorporated and receives foreign direct investment (FDI) from the US parent, FEMA (Foreign Exchange Management Act, 1999) compliance becomes an ongoing obligation — not a one-time task. Missing a filing deadline doesn&apos;t just risk a fine; it has to be formally resolved through RBI&apos;s compounding process before the lapse comes off the entity&apos;s record, and it can hold up future fund remittances, share transfers, or RBI approvals in the meantime. The filings themselves are mechanical once you know the sequence — the harder part for a US parent is that none of it runs on a US corporate calendar, and several of these obligations (the FLA return in particular) aren&apos;t triggered by any transaction at all.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core RBI Filings for a US-Owned Subsidiary</h2>
        <div className="space-y-6">
          <ClickableInfoCard title="Form FC-GPR" desc="Filed with the RBI via the FIRMS portal within 30 days of allotting shares to the US parent against inward FDI. This is the filing that formally records the foreign investment in the subsidiary's capital structure." />
          <ClickableInfoCard title="Form FC-TRS" desc="Filed within 60 days of the transfer of capital instruments (or receipt/remittance of consideration, whichever is earlier) whenever shares change hands between a resident and non-resident — relevant if the US parent later transfers shares, brings in a co-investor, or restructures ownership." />
          <ClickableInfoCard title="Annual FLA Return" desc="The Foreign Liabilities and Assets return is filed annually — by 15 July, for the position as of 31 March — with the RBI by every Indian entity that carries FDI or overseas investment on its books, regardless of whether there was any transaction that year. This is the filing most foreign-owned subsidiaries forget once the initial setup is done." />
          <ClickableInfoCard title="Form ECB / Form ECB-2" desc="Relevant if the US parent funds the subsidiary through a loan rather than equity. The loan is registered with RBI via Form ECB (through the subsidiary's Authorised Dealer bank) to obtain a Loan Registration Number before the first drawdown, with ongoing drawdowns and debt-servicing reported on Form ECB-2." />
        </div>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Why this trips up US parent companies specifically</h3>
        <p className="text-gray-700">
          US corporate calendars and Indian RBI filing calendars don&apos;t align, and the FLA return in particular is easy to miss because it isn&apos;t triggered by a transaction — it&apos;s an annual requirement regardless of activity. Add in the fact that any funding structured as a loan rather than equity pulls in a separate ECB registration, and it&apos;s easy for a US finance team managing this alongside dozens of other jurisdictions to lose track of which filing applies to which transaction. We track these deadlines against your subsidiary&apos;s actual filing history so nothing falls through between your US finance team and your Indian entity.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Happens If a Filing Is Missed: The RBI Compounding Process</h2>
        <p className="text-gray-700 mb-6">
          A missed FC-GPR or FC-TRS window doesn&apos;t resolve itself the way a late tax return might — it&apos;s a contravention under FEMA, 1999, and has to be formally compounded with the RBI before the entity&apos;s compliance record is clear. The process, as governed by the Foreign Exchange (Compounding Proceedings) Rules, 2024 (which replaced the earlier 2000 rules), runs roughly as follows:
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <ClickableReveal className="p-6 border-2 border-gray-200 rounded-lg cursor-pointer">
            <h3 className="font-bold text-lg mb-3">The process</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• The entity files a compounding application with RBI, along with a nominal processing fee</li>
              <li>• RBI calculates a compounding amount using its published guidance note under Section 13 of FEMA, 1999 — capped at 300% of the sum involved in the contravention</li>
              <li>• RBI is required to pass its order within 180 days of receiving a complete application</li>
              <li>• The amount typically has to be paid within a short window after the order before the contravention is treated as compounded and closed</li>
            </ul>
          </ClickableReveal>
          <ClickableReveal className="p-6 border-2 border-gray-200 rounded-lg cursor-pointer">
            <h3 className="font-bold text-lg mb-3">The real cost</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Until compounding is complete, the lapse sits on the subsidiary&apos;s compliance record</li>
              <li>• Open contraventions can complicate later FIRMS filings and RBI approvals</li>
              <li>• They can also surface during due diligence on a later fundraise, sale, or restructuring</li>
              <li>• The paperwork and turnaround time is usually a bigger cost than the compounding amount itself</li>
            </ul>
          </ClickableReveal>
        </div>
        <p className="text-gray-700 mt-6 text-sm">
          The exact compounding amount is case-specific and calculated by RBI against its own guidance note — treat the figures above as the governing framework rather than a quote, and confirm the current amount against RBI&apos;s published guidance at the time of filing.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">External Commercial Borrowings: When the US Parent Lends to the Subsidiary</h2>
        <p className="text-gray-700">
          Not all funding from the US parent has to be equity. It&apos;s common, especially for working-capital support, to structure some funding as a loan instead — and when that happens, it&apos;s regulated as an External Commercial Borrowing (ECB) under FEMA, not a plain intercompany loan. A wholly owned US subsidiary structure comfortably clears the 25% direct equity threshold that qualifies a foreign shareholder as a &ldquo;recognised lender&rdquo; under the ECB framework, so the parent can lend directly — but the loan still has to be registered: Form ECB is filed through the subsidiary&apos;s Authorised Dealer (AD Category-I) bank to obtain a Loan Registration Number before the first drawdown, and ongoing drawdowns and debt-servicing (interest and principal repayments) are reported on Form ECB-2. The framework carries a general Minimum Average Maturity Period of three years (shorter or longer depending on end-use and lender category), and was significantly liberalised on 16 February 2026 under the Foreign Exchange Management (Borrowing and Lending) (First Amendment) Regulations, 2026 — making parent-to-subsidiary lending more workable than it previously was, though the registration and reporting steps themselves haven&apos;t gone away.
        </p>
      </div>

      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h3 className="font-bold text-lg mb-2">How This Interacts With Your US-Side Reporting</h3>
        <p className="text-gray-700">
          None of this happens in isolation from what your US finance team owes the IRS and the US Treasury. If the US parent owns 10% or more of the Indian subsidiary, it&apos;s a Form 5471 filer — typically Category 5, since a majority-owned Indian subsidiary meets the definition of a Controlled Foreign Corporation — and, as covered in more depth on our <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-blue-700 font-semibold hover:underline">Transfer Pricing & Section 482 page</Link>, the intercompany figures reported on Schedule M of that form need to tie back to the same capital and transaction records that support your FC-GPR and FC-TRS filings in India. Separately, because a US person&apos;s &ldquo;financial interest&rdquo; in a foreign account extends to accounts held by an entity they own more than 50% of, a wholly owned Indian subsidiary&apos;s bank accounts are very often reportable on the US parent&apos;s own FBAR (FinCEN Form 114) — a Treasury filing, filed independently of Form 5471 and the IRS — once the aggregate value of the subsidiary&apos;s foreign accounts exceeds $10,000 at any point in the year, which is the case for almost any operating subsidiary. We don&apos;t file US returns, but we keep the underlying share-allotment, capital and transaction records structured so your US tax advisor isn&apos;t reconciling two different sets of numbers between the FEMA filings and the Form 5471/FBAR filings.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
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
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transfer Pricing & Section 482 for US Parent Companies →
          </Link>
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Complete Guide to Company Registration in India →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
