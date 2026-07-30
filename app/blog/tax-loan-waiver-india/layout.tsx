import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Implications of Loan Waivers in India | AU Corporate Blog",
  },
  description:
    "How loan waivers are treated under Indian tax law and the implications for both lender and borrower entities.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/tax-loan-waiver-india",
  },
  openGraph: {
    title: "Tax Implications of Loan Waivers in India | AU Corporate Blog",
    description:
      "How loan waivers are treated under Indian tax law and the implications for both lender and borrower entities.",
    url: "https://www.theaucorp.com/blog/tax-loan-waiver-india",
  },
  twitter: {
    title: "Tax Implications of Loan Waivers in India | AU Corporate Blog",
    description:
      "How loan waivers are treated under Indian tax law and the implications for both lender and borrower entities.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
