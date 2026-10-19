import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Australia: Forms and Tax",
  },
  description:
    "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/repatriating-profits",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Australia: Forms and Tax",
    description:
      "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
    url: "https://www.theaucorp.com/blog/australia-to-india/repatriating-profits",
    locale: "en_AU",
  },
  twitter: {
    title: "Repatriating Profits from India to Australia: Forms and Tax",
    description:
      "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
