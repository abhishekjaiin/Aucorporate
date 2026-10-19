import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Australia: 2026 Guide",
  },
  description:
    "How Australian companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, the India-Australia tax treaty and compliance. By a Chartered Accountant.",
  alternates: guideAlternates("australia", "hub"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Australia: 2026 Guide",
    description:
      "How Australian companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, the India-Australia tax treaty and compliance. By a Chartered Accountant.",
    url: "https://www.theaucorp.com/blog/australia-to-india",
    locale: "en_AU",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Australia: 2026 Guide",
    description:
      "How Australian companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, the India-Australia tax treaty and compliance. By a Chartered Accountant.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
