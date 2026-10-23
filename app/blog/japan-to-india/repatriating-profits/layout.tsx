import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Japan: Forms and Tax",
  },
  description:
    "How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
  alternates: guideAlternates("japan", "repatriating-profits"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Japan: Forms and Tax",
    description:
      "How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
    url: "https://www.theaucorp.com/blog/japan-to-india/repatriating-profits",
  },
  twitter: {
    title: "Repatriating Profits from India to Japan: Forms and Tax",
    description:
      "How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
