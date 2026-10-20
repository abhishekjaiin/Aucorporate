import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Japan: 2026 Guide",
  },
  description:
    "How Japanese companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
  alternates: guideAlternates("japan", "hub"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Japan: 2026 Guide",
    description:
      "How Japanese companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
    url: "https://www.theaucorp.com/blog/japan-to-india",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Japan: 2026 Guide",
    description:
      "How Japanese companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
