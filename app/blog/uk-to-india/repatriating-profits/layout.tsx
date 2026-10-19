import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Getting Money Out of India: Dividends, Fees, Royalties and Loan Repayments to a UK Parent",
  },
  description:
    "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.",
  alternates: guideAlternates("uk", "repatriating-profits"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Getting Money Out of India: Dividends, Fees, Royalties and Loan Repayments to a UK Parent",
    description:
      "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.",
    url: "https://www.theaucorp.com/blog/uk-to-india/repatriating-profits",
    locale: "en_GB",
  },
  twitter: {
    title: "Getting Money Out of India: Dividends, Fees, Royalties and Loan Repayments to a UK Parent",
    description:
      "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
