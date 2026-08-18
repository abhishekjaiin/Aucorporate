import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title:
    "Tax Treatment of Loan Waiver in India | Supreme Court Ruling",
  description:
    "Explore the evolving judicial position on taxability of loan waiver in India through landmark rulings including T.V. Sundaram Iyengar, Solid Containers, Mahindra & Mahindra (HC & SC), and Ramaniyam Homes. Understand how the Supreme Court finally settled the law on Sections 28(iv) and 41(1) of the Income Tax Act, 1961.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-7">

      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Tax on Loan Waivers" }]} />

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        Tax Treatment of Loan Waiver in India: Supreme Court Resolves Capital vs Revenue Controversy
      </h1>

      <img decoding="async"
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        alt="Legal Finance Concept"
        className="rounded-2xl mb-8 w-full"
      />

      {/* META DESCRIPTION (UNCHANGED) */}
      <p className="mb-6">
        Explore the evolving judicial position on taxability of loan waiver in India through landmark rulings including T.V. Sundaram Iyengar, Solid Containers, Mahindra & Mahindra (HC & SC), and Ramaniyam Homes. Understand how the Supreme Court finally settled the law on Sections 28(iv) and 41(1) of the Income Tax Act, 1961.
      </p>

      {/* INTRODUCTION */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Introduction</h2>

      <p className="mb-6">
        The taxability of loan waivers in India has been one of the most litigated issues under the Income Tax Act, 1961. The central question is whether waiver of a loan—particularly the principal amount—constitutes taxable income or remains a capital receipt outside the ambit of taxation.
      </p>

      <p className="mb-6">
        Over time, courts have delivered divergent interpretations, especially on the interplay between Section 28(iv) (business benefits) and Section 41(1) (remission of trading liability). This led to prolonged uncertainty until the Supreme Court finally settled the position in CIT v. Mahindra & Mahindra Ltd. (2018).
      </p>

      <img loading="lazy" decoding="async"
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
        alt="Supreme Court India"
        className="rounded-2xl mb-8 w-full"
      />

      {/* EARLY JUDICIAL APPROACH */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Early Judicial Approach: Expanding Scope of Income
      </h2>

      <img loading="lazy" decoding="async"
        src="https://images.unsplash.com/photo-1521790366324-2073b3e8f7e1"
        alt="Finance Law Concept"
        className="rounded-2xl mb-8 w-full"
      />

      <p className="mb-6">
        CIT v. T.V. Sundaiam Iyengar & Sons Ltd. (1996)
      </p>

      <p className="mb-6">
        In this landmark ruling, the Supreme Court held that amounts received in the course of business, though initially not taxable, may assume the character of income if they become a trade surplus over time. The Court emphasized the principle of “commercial reality” over form, allowing taxation of certain unclaimed business receipts when appropriated to profit and loss account.
      </p>

      <p className="mb-6">
        This judgment became the foundation for Revenue arguments that loan waivers could be taxed if they result in enrichment of the assessee.
      </p>

      {/* DIVERGENT VIEWS */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Development of Divergent Judicial Views
      </h2>

      <img loading="lazy" decoding="async"
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
        alt="Tax Documents"
        className="rounded-2xl mb-8 w-full"
      />

      <p className="mb-6">
        Mahindra & Mahindra (Bombay High Court)
      </p>

      <p className="mb-6">
        A major shift occurred in CIT v. Mahindra & Mahindra Ltd. (Bombay HC) where the Court held:
      </p>

      <p className="mb-6">
        • Section 28(iv) applies only to non-monetary benefits <br />
        • Section 41(1) applies only where earlier deduction or allowance has been claimed <br />
        • Waiver of loan taken for capital asset acquisition is not taxable income
      </p>

      <p className="mb-6">
        This decision clearly distinguished capital borrowings from trading liabilities, limiting the scope of taxation.
      </p>

      <p className="mb-6">
        Solid Containers Ltd. v. DCIT (2009)
      </p>

      <p className="mb-6">
        In contrast, the Bombay High Court in Solid Containers held that where a loan was taken for trading purposes, its waiver could be taxed as income.
      </p>

      {/* SUPREME COURT */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Supreme Court Settlement: CIT v. Mahindra & Mahindra Ltd. (2018)
      </h2>

      <img loading="lazy" decoding="async"
        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744"
        alt="Court Judgment"
        className="rounded-2xl mb-8 w-full"
      />

      <p className="mb-6">
        The Supreme Court conclusively settled the controversy, affirming the Bombay High Court view and rejecting expansive interpretations.
      </p>

      <p className="mb-6">
        1. Section 28(iv) – Limited to Non-Monetary Benefits <br />
        2. Section 41(1) – Applies Only to Trading Liabilities <br />
        3. Capital Receipt Doctrine <br />
        4. Rejection of Expansive Revenue Interpretation
      </p>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Conclusion</h2>

      <p className="mb-6">
        The Supreme Court in CIT v. Mahindra & Mahindra Ltd. has definitively settled the long-standing controversy on taxation of loan waivers in India. It has been held that waiver of principal loan amount constitutes a capital receipt and not taxable income.
      </p>

      <p className="mb-6">
        This ruling reinforces a core principle of tax law: taxability must arise from a clear statutory provision and cannot be inferred merely from commercial benefit or economic enrichment.
      </p>

      {/* AUTHOR */}
      <div className="mt-12 pt-6 border-t">
        <p className="font-semibold">Credit:</p>
        <p className="mb-2">Somya Tiwari</p>

        <a
          href="https://www.linkedin.com/in/somya-tiwari-ca-finalist/"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          View LinkedIn Profile
        </a>
      </div>

    </main>
  );
}
