import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Compliance Calendar for an Indian Subsidiary with a Singapore Parent",
  },
  description:
    "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates alongside and a note on year-end alignment.",
  alternates: guideAlternates("singapore", "compliance-calendar"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Compliance Calendar for an Indian Subsidiary with a Singapore Parent",
    description:
      "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates alongside and a note on year-end alignment.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/compliance-calendar",
    locale: "en_GB",
  },
  twitter: {
    title: "Compliance Calendar for an Indian Subsidiary with a Singapore Parent",
    description:
      "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates alongside and a note on year-end alignment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
