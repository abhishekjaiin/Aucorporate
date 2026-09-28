import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for Australian Companies | ECTA Guide",
  },
  description:
    "How Australian companies enter India under ECTA — entity structuring, DTAA royalty rates, and FEMA/RBI compliance for Indian subsidiaries.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-australian-companies",
  },
  openGraph: {
    title: "India Entry for Australian Companies | ECTA Guide",
    description:
      "How Australian companies enter India under ECTA — entity structuring, DTAA royalty rates, and FEMA/RBI compliance for Indian subsidiaries.",
    url: "https://www.theaucorp.com/india-entry-for-australian-companies",
  },
  twitter: {
    title: "India Entry for Australian Companies | ECTA Guide",
    description:
      "How Australian companies enter India under ECTA — entity structuring, DTAA royalty rates, and FEMA/RBI compliance for Indian subsidiaries.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
