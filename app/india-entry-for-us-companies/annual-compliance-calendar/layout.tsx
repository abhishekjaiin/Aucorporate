import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Annual Compliance Calendar for Foreign Subsidiary Companies in India | AU Corporate",
  },
  description:
    "The dated AOC-4, MGT-7, ADT-1 and DIR-3 KYC calendar for a foreign-owned subsidiary in India — board meetings, AGM, and FEMA filings shown together, built for US parent companies.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-us-companies/annual-compliance-calendar",
  },
  openGraph: {
    title: "Annual Compliance Calendar for Foreign Subsidiary Companies in India | AU Corporate",
    description:
      "The dated AOC-4, MGT-7, ADT-1 and DIR-3 KYC calendar for a foreign-owned subsidiary in India — board meetings, AGM, and FEMA filings shown together, built for US parent companies.",
    url: "https://www.theaucorp.com/india-entry-for-us-companies/annual-compliance-calendar",
  },
  twitter: {
    title: "Annual Compliance Calendar for Foreign Subsidiary Companies in India | AU Corporate",
    description:
      "The dated AOC-4, MGT-7, ADT-1 and DIR-3 KYC calendar for a foreign-owned subsidiary in India — board meetings, AGM, and FEMA filings shown together, built for US parent companies.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
