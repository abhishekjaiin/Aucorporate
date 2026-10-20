import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar for Japanese Companies",
  },
  description:
    "The yearly compliance calendar of an Indian subsidiary owned by a Japanese company: monthly, quarterly and annual filings, mapped to a 31 March parent year-end.",
  alternates: guideAlternates("japan", "compliance-calendar"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar for Japanese Companies",
    description:
      "The yearly compliance calendar of an Indian subsidiary owned by a Japanese company: monthly, quarterly and annual filings, mapped to a 31 March parent year-end.",
    url: "https://www.theaucorp.com/blog/japan-to-india/compliance-calendar",
  },
  twitter: {
    title: "India Subsidiary Compliance Calendar for Japanese Companies",
    description:
      "The yearly compliance calendar of an Indian subsidiary owned by a Japanese company: monthly, quarterly and annual filings, mapped to a 31 March parent year-end.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
