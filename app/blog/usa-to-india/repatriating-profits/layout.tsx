import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to the US: Forms and Tax",
  },
  description:
    "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
  alternates: guideAlternates("usa", "repatriating-profits"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to the US: Forms and Tax",
    description:
      "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
    url: "https://www.theaucorp.com/blog/usa-to-india/repatriating-profits",
  },
  twitter: {
    title: "Repatriating Profits from India to the US: Forms and Tax",
    description:
      "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
