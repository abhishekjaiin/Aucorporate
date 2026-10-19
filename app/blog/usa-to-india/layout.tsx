import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from the USA: 2026 Guide",
  },
  description:
    "How US companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from the USA: 2026 Guide",
    description:
      "How US companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
    url: "https://www.theaucorp.com/blog/usa-to-india",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from the USA: 2026 Guide",
    description:
      "How US companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
