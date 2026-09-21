import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { RelatedResources } from "@/components/RelatedResources"
import { BlogPostingSchema } from "@/components/BlogPostingSchema"
import { FaqAccordion } from "@/components/FaqAccordion"

const faqs = [
  {
    q: "Is waiver of a loan taxable in India?",
    a: "It depends on the loan and the year of waiver. For waivers before 1 April 2024, the Supreme Court's 2018 ruling in CIT v. Mahindra & Mahindra Ltd. holds that a mere waiver of loan principal — whether the loan was for a capital asset or for working capital — is not taxable under Section 28(iv) (because the benefit is received in cash, not in kind) or Section 41(1) (because a loan is not a trading liability, unless a deduction was earlier claimed in respect of it). For waivers on or after 1 April 2024, Section 28(iv) was amended by the Finance Act, 2023 to cover benefits or perquisites 'whether convertible into money or not' — so cash benefits arising from business are now within its scope, and whether a straightforward loan-principal waiver falls within that widened definition is a question tax authorities and tribunals are actively litigating.",
  },
  {
    q: "What is the difference between Section 28(iv) and Section 41(1) of the Income Tax Act?",
    a: "Section 28(iv) taxes the value of any benefit or perquisite arising from business or profession. Section 41(1) taxes the remission or cessation of a trading liability for which the assessee had earlier claimed a deduction or allowance. They apply to different fact patterns: 28(iv) is about a benefit received in the course of business, while 41(1) is specifically about a liability that generated a past tax deduction and is later written back. A loan waiver can potentially engage either provision depending on the facts, which is exactly why the two sections were litigated together in Mahindra & Mahindra.",
  },
  {
    q: "Does the Finance Act 2023 amendment to Section 28(iv) apply to old loan waivers?",
    a: "No. The amendment applies prospectively, to benefits or perquisites arising on or after 1 April 2024 (Assessment Year 2024-25 onwards). Waivers that occurred before that date continue to be governed by the pre-amendment law as interpreted by the Supreme Court in Mahindra & Mahindra — under which a cash benefit falls outside Section 28(iv) regardless of the loan's purpose, a position the Karnataka High Court reaffirmed in November 2024 in the I.G. Petrochemicals Ltd. matter.",
  },
  {
    q: "Is TDS deductible under Section 194R when a bank waives a loan?",
    a: "No. CBDT Circular No. 18/2022 (13 September 2022) clarifies that Section 194R TDS does not apply to one-time settlements or loan waivers granted by banks, NBFCs, and other specified financial institutions to their borrowers. The circular is explicit, however, that this is relief only from the TDS obligation on the lender — it does not determine whether the waived amount is taxable income in the hands of the borrower, which is governed separately by Sections 28(iv) and 41(1).",
  },
  {
    q: "Is interest waiver treated the same as principal waiver?",
    a: "Not necessarily. Interest that was claimed as a deduction against business income in an earlier year becomes taxable under Section 41(1) if it is later waived, because a deduction was actually claimed in respect of it. Interest that was capitalised into the cost of a fixed asset (and not claimed as a revenue deduction) is treated differently on waiver — it typically reduces the capitalised cost of the asset rather than being taxed as income in the year of waiver. The principal-versus-interest distinction, and whether the interest was expensed or capitalised, matters as much as the capital-versus-trading distinction discussed above.",
  },
]

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-7">

      <BlogPostingSchema
        headline="Tax Treatment of Loan Waiver in India | Supreme Court Ruling & 2023 Amendment"
        description="How Indian courts settled the tax treatment of loan waivers — from T.V. Sundaram Iyengar to the Supreme Court's 2018 ruling in Mahindra & Mahindra, and how the Finance Act 2023 amendment to Section 28(iv) reopened part of the question for waivers from AY 2024-25 onwards."
        url="https://www.theaucorp.com/blog/tax-loan-waiver-india"
        image="https://www.theaucorp.com/images/pexels-followingnyc-16094899.jpg"
        datePublished="2026-05-04"
        dateModified="2026-09-15"
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Tax on Loan Waivers" }]} />

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        Tax Treatment of Loan Waiver in India: Supreme Court Resolves Capital vs Revenue Controversy
      </h1>

      <Image
        src="/images/pexels-followingnyc-16094899.jpg"
        alt="Legal Finance Concept"
        width={1200}
        height={630}
        priority
        className="rounded-2xl mb-8 w-full h-auto"
      />

      {/* META DESCRIPTION */}
      <p className="mb-6">
        Explore the evolving judicial position on taxability of loan waiver in India through landmark rulings including T.V. Sundaram Iyengar, Solid Containers, Mahindra & Mahindra (Bombay High Court and Supreme Court), and Ramaniyam Homes. Understand how the Supreme Court settled the law on Sections 28(iv) and 41(1) of the Income Tax Act, 1961 in 2018 — and why the Finance Act, 2023 amendment to Section 28(iv) has since reopened part of that question for waivers from Assessment Year 2024-25 onwards.
      </p>

      {/* INTRODUCTION */}
      <section aria-labelledby="lw-intro">
        <h2 id="lw-intro" className="text-2xl font-semibold mt-10 mb-4">Introduction</h2>

        <p className="mb-6">
          The taxability of loan waivers in India has been one of the most litigated issues under the Income Tax Act, 1961. The central question is whether waiver of a loan — particularly the principal amount — constitutes taxable income or remains a capital receipt outside the ambit of taxation.
        </p>

        <p className="mb-6">
          Over time, courts have delivered divergent interpretations, especially on the interplay between Section 28(iv) (business benefits) and Section 41(1) (remission of trading liability). This led to prolonged uncertainty until the Supreme Court finally settled the position — for the law as it then stood — in CIT v. Mahindra & Mahindra Ltd. (2018) 404 ITR 1 (SC). That was not, however, the end of the story: the Finance Act, 2023 amended Section 28(iv) with effect from 1 April 2024, and the extent to which that amendment changes the answer for post-2024 waivers is still being worked out in the tribunals.
        </p>

        <Image
          src="/images/pexels-amar-20624924.jpg"
          alt="Supreme Court India"
          width={1000}
          height={560}
          loading="lazy"
          className="rounded-2xl mb-8 w-full h-auto"
        />
      </section>

      {/* EARLY JUDICIAL APPROACH */}
      <section aria-labelledby="lw-early">
        <h2 id="lw-early" className="text-2xl font-semibold mt-10 mb-4">
          Early Judicial Approach: Expanding Scope of Income
        </h2>

        <Image
          src="/images/pexels-pierre-blache-651604-9280877.jpg"
          alt="Finance Law Concept"
          width={1000}
          height={560}
          loading="lazy"
          className="rounded-2xl mb-8 w-full h-auto"
        />

        <p className="mb-6">
          CIT v. T.V. Sundaram Iyengar & Sons Ltd. (1996) 222 ITR 344 (SC)
        </p>

        <p className="mb-6">
          In this landmark ruling, the Supreme Court held that amounts received in the course of business, though initially not taxable, may assume the character of income if they become a trade surplus over time. The case concerned unclaimed customer deposits that the assessee had transferred to its profit and loss account after the limitation period for repayment had expired; the Court applied the principle of "commercial reality" over form, allowing taxation of such unclaimed business receipts once they were appropriated as the assessee's own money.
        </p>

        <p className="mb-6">
          This judgment became the foundation for Revenue arguments that loan waivers could similarly be taxed if they result in enrichment of the assessee — an argument that would later be tested, and substantially narrowed, in the loan-waiver cases that followed.
        </p>
      </section>

      {/* DIVERGENT VIEWS */}
      <section aria-labelledby="lw-divergent">
        <h2 id="lw-divergent" className="text-2xl font-semibold mt-10 mb-4">
          Development of Divergent Judicial Views
        </h2>

        <Image
          src="/images/pexels-pierre-blache-651604-9280877.jpg"
          alt="Tax Documents"
          width={1000}
          height={560}
          loading="lazy"
          className="rounded-2xl mb-8 w-full h-auto"
        />

        <p className="mb-6">
          <strong>Mahindra & Mahindra Ltd. v. CIT (2003) 261 ITR 501 (Bombay High Court)</strong>
        </p>

        <p className="mb-6">
          A major shift occurred in Mahindra & Mahindra Ltd. v. CIT, where the assessee had taken a loan from Kaiser Jeep Corporation, USA, to purchase dies and tools for manufacturing cars — a capital asset — and the loan was later waived. The Bombay High Court held that:
        </p>

        <p className="mb-6">
          • Section 28(iv) applies only to non-monetary benefits <br />
          • Section 41(1) applies only where an earlier deduction or allowance has been claimed in respect of the liability <br />
          • Waiver of a loan taken for capital asset acquisition is not taxable income
        </p>

        <p className="mb-6">
          This decision clearly distinguished capital borrowings from trading liabilities, limiting the scope of taxation — but it did not resolve what happens when a loan is taken for working capital or other trading purposes, which is where the case law diverged.
        </p>

        <p className="mb-6">
          <strong>Solid Containers Ltd. v. DCIT (2009) 308 ITR 417 (Bombay High Court)</strong>
        </p>

        <p className="mb-6">
          In contrast, the Bombay High Court in Solid Containers held that where a loan was taken for trading purposes (in that case, a loan used for day-to-day business operations), its waiver could be taxed as income — applying a "purpose test" to distinguish capital borrowings from trading liabilities.
        </p>

        <p className="mb-6">
          <strong>CIT v. Ramaniyam Homes (P) Ltd. (2016) 384 ITR 530 (Madras High Court)</strong>
        </p>

        <p className="mb-6">
          The divergence deepened when the Madras High Court took the argument further. Ramaniyam Homes, a real estate developer, had reached a one-time settlement (OTS) with Indian Bank and paid a fraction of the outstanding dues; the balance principal was waived. The Madras High Court held that the waived amount constituted income under Section 28(iv) — reasoning that a benefit arising for the business is taxable regardless of whether it is received in cash. This went further than Solid Containers by not confining the taxable outcome to trading-purpose loans, and it directly conflicted with the Bombay High Court's reasoning in Mahindra & Mahindra. With three high courts taking materially different positions — and no consistent rule for taxpayers to plan around — the matter needed Supreme Court intervention.
        </p>
      </section>

      {/* SUPREME COURT */}
      <section aria-labelledby="lw-supreme-court">
        <h2 id="lw-supreme-court" className="text-2xl font-semibold mt-10 mb-4">
          Supreme Court Settlement: CIT v. Mahindra & Mahindra Ltd. (2018)
        </h2>

        <Image
          src="/images/pexels-pixabay-164606.jpg"
          alt="Court Judgment"
          width={1000}
          height={560}
          loading="lazy"
          className="rounded-2xl mb-8 w-full h-auto"
        />

        <p className="mb-6">
          On 24 April 2018, the Supreme Court decided CIT v. Mahindra & Mahindra Ltd. (2018) 404 ITR 1 (SC) — a batch of connected appeals rather than a single case. Alongside the Revenue's appeal on Mahindra & Mahindra's capital-asset loan, the bench also disposed of connected matters including Dholgiri Industries, Jindal Equipments Leasing & Consultancy Services, and — significantly — Ramaniyam Homes' own appeal against the adverse Madras High Court ruling discussed above. Deciding all of them together let the Court settle the capital-versus-trading distinction in one stroke, rather than leaving Ramaniyam Homes' working-capital fact pattern to be litigated separately.
        </p>

        <p className="mb-6">
          The Supreme Court affirmed the Bombay High Court's view in Mahindra & Mahindra and rejected the Madras High Court's more expansive reading in Ramaniyam Homes. Its reasoning rested on two independent grounds:
        </p>

        <p className="mb-6">
          1. <strong>Section 28(iv) is limited to non-monetary benefits.</strong> Since the waiver was received in the form of money, it fell outside Section 28(iv), which by its terms taxes a benefit or perquisite "other than in the shape of money."<br />
          2. <strong>Section 41(1) applies only to trading liabilities where a deduction was earlier claimed.</strong> A loan — whether for a capital asset or for working capital — is not, by itself, a trading liability for which the assessee had claimed a deduction, so its waiver does not trigger Section 41(1) unless that specific condition is met.
        </p>

        <p className="mb-6">
          Because the ruling reversed Ramaniyam Homes as part of the same judgment, it effectively closed off the Revenue's broadest argument — that any monetary benefit arising from business is automatically taxable under Section 28(iv) — not just for capital-asset loans, but as a general proposition.
        </p>
      </section>

      {/* 2023 AMENDMENT */}
      <section aria-labelledby="lw-2023-amendment">
        <h2 id="lw-2023-amendment" className="text-2xl font-semibold mt-10 mb-4">
          The Law Changes Again: Finance Act, 2023 and the Amendment to Section 28(iv)
        </h2>

        <p className="mb-6">
          The Mahindra & Mahindra ruling was widely read as the final word — but Parliament partially revisited it five years later. The Finance Act, 2023 amended Section 28(iv) with effect from 1 April 2024 (Assessment Year 2024-25 onwards) to clarify that it applies to the value of any benefit or perquisite arising from business or profession, "whether convertible into money or not." That phrase directly targets the Supreme Court's core reasoning that a cash benefit falls outside Section 28(iv) — the very reasoning that shielded loan waivers from tax.
        </p>

        <p className="mb-6">
          What the amendment does not do is retrospectively disturb the Supreme Court's ruling or expressly re-legislate the specific question of loan-principal waivers. It widens Section 28(iv) to cover cash and in-kind benefits alike, going forward. Whether an ordinary loan-principal waiver — as opposed to a perquisite in the more conventional sense — now falls within that widened definition is a question tax authorities have started to press, and one that tribunals and High Courts are still working through on a case-by-case basis.
        </p>

        <p className="mb-6">
          One data point on that question: in November 2024, the Karnataka High Court, in the matter of I.G. Petrochemicals Ltd. (concerning a one-time settlement of term and working capital loans), held — in the context of the pre-amendment law — that the nature or purpose of the loan is not the determinative factor for Section 28(iv); the only test is whether the benefit is other than "in the shape of money." The Court's discussion of the 2023 amendment in that judgment confirms that assessors and taxpayers alike now treat the amendment as a live, if not fully settled, issue for waivers falling in AY 2024-25 and later years.
        </p>

        <p className="mb-6">
          A separate but related point on procedure: CBDT Circular No. 18/2022 (13 September 2022) clarifies that Section 194R — which requires TDS on benefits or perquisites provided in the course of business — does not apply to one-time settlements or loan waivers granted by banks, NBFCs, and other specified financial institutions. That circular is explicit, though, that it only removes the TDS obligation from the lender; it does not decide whether the waived amount is taxable income for the borrower, which continues to be governed by Sections 28(iv) and 41(1) on their own terms.
        </p>
      </section>

      {/* CURRENT POSITION */}
      <section aria-labelledby="lw-current-position">
        <h2 id="lw-current-position" className="text-2xl font-semibold mt-10 mb-4">
          Where This Leaves Businesses Today
        </h2>

        <p className="mb-6">
          Putting the case law and the 2023 amendment together, the practical position for a business assessing a loan waiver today is:
        </p>

        <p className="mb-6">
          • <strong>Waivers before 1 April 2024:</strong> Governed by Mahindra & Mahindra — a mere waiver of loan principal, whether for a capital asset or working capital, is not taxable under Section 28(iv) or Section 41(1), absent a prior deduction claimed on that specific liability. <br />
          • <strong>Waivers from 1 April 2024 (AY 2024-25) onwards:</strong> Section 28(iv) now reaches benefits "whether convertible into money or not," and the Revenue is expected to argue that this covers loan waivers. Whether that argument succeeds for a straightforward principal waiver — as opposed to a benefit more clearly in the nature of a perquisite — has not yet been settled by an apex court ruling interpreting the amended provision, so this needs to be assessed on the specific facts rather than assumed either way. <br />
          • <strong>Section 41(1) analysis is unchanged either way:</strong> it still applies only where the assessee had earlier claimed a deduction or allowance in respect of the specific liability now being waived — a loan for a capital asset, standing alone, will not usually meet that test.
        </p>

        <p className="mb-6">
          This is a live planning issue for foreign parent companies restructuring intercompany debt owed by an Indian subsidiary, and for companies going through a bank or NBFC one-time settlement — the tax treatment of the waived amount can differ materially depending on whether the waiver falls before or after the 1 April 2024 line, and on how the original loan was used and accounted for.
        </p>
      </section>

      {/* CONCLUSION */}
      <section aria-labelledby="lw-conclusion">
        <h2 id="lw-conclusion" className="text-2xl font-semibold mt-10 mb-4">Conclusion</h2>

        <p className="mb-6">
          The Supreme Court in CIT v. Mahindra & Mahindra Ltd. resolved a genuine three-way split among the High Courts and remains the controlling precedent for loan waivers before 1 April 2024, and for the Section 41(1) analysis in every year. It reinforced a core principle of tax law: taxability must arise from a clear statutory provision and cannot be inferred merely from commercial benefit or economic enrichment.
        </p>

        <p className="mb-6">
          But the Finance Act, 2023 amendment to Section 28(iv) means the story does not end there for waivers falling on or after 1 April 2024. Businesses restructuring debt, negotiating an OTS with a lender, or receiving a waiver from a foreign parent should treat the timing and the specific facts of the waiver as material to the tax outcome, and take advice before assuming the pre-2024 case law still gives the full answer.
        </p>

        <p className="mb-6">
          👉 Speak with AU Corporate to assess the tax treatment of a specific loan waiver, one-time settlement, or intercompany debt restructuring involving your India entity.
        </p>
      </section>

      {/* FAQ */}
      <section aria-labelledby="lw-faq" className="mt-12">
        <h2 id="lw-faq" className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* AUTHOR */}
      <div className="mt-12 pt-6 border-t">
        <p className="font-semibold">Credit:</p>
        <p className="mb-2">Somya Tiwari</p>

        <a
          href="https://www.linkedin.com/in/somya-tiwari-ca-finalist/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View LinkedIn Profile
        </a>
      </div>


      <RelatedResources
        links={[
          { label: "Taxation & Regulatory Services", href: "/services/taxation-regulatory", description: "Corporate tax, GST, and regulatory support." },
          { label: "Banking & Taxation in India", href: "/india-business-setup/banking-taxation", description: "What foreign entities need to know." },
        ]}
      />

    </main>
  );
}
