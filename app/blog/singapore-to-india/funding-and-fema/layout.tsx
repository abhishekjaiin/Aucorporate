import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Singapore: Equity, ECB and FEMA Reporting",
  },
  description:
    "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.",
  alternates: guideAlternates("singapore", "funding-fema-fc-gpr"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Singapore: Equity, ECB and FEMA Reporting",
    description:
      "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/funding-and-fema",
    locale: "en_GB",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Singapore: Equity, ECB and FEMA Reporting",
    description:
      "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
