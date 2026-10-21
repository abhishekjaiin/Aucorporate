import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Singapore: Dividends, Fees, Royalties and Loans",
  },
  description:
    "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.",
  alternates: guideAlternates("singapore", "repatriating-profits"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Singapore: Dividends, Fees, Royalties and Loans",
    description:
      "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/repatriating-profits",
    locale: "en_GB",
  },
  twitter: {
    title: "Repatriating Profits from India to Singapore: Dividends, Fees, Royalties and Loans",
    description:
      "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
