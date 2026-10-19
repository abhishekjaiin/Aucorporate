import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from the UK: 2026 Guide",
  },
  description:
    "How UK companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-UK tax treaty, CETA, staff and compliance. By a Chartered Accountant.",
  alternates: guideAlternates("uk", "hub"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from the UK: 2026 Guide",
    description:
      "How UK companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-UK tax treaty, CETA, staff and compliance. By a Chartered Accountant.",
    url: "https://www.theaucorp.com/blog/uk-to-india",
    locale: "en_GB",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from the UK: 2026 Guide",
    description:
      "How UK companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-UK tax treaty, CETA, staff and compliance. By a Chartered Accountant.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
