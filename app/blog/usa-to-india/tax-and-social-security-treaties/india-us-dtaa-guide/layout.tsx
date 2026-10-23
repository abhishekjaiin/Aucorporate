import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-US DTAA: Tax Treaty Between the US and India Explained",
  },
  description:
    "The India-US DTAA, the income tax treaty between the USA and India, explained: who qualifies, taxes covered, residency, relief from double tax and disputes.",
  alternates: guideAlternates("usa", "india-dtaa"),
  openGraph: {
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India-US DTAA: Tax Treaty Between the US and India Explained",
    description:
      "The India-US DTAA, the income tax treaty between the USA and India, explained: who qualifies, taxes covered, residency, relief from double tax and disputes.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide",
  },
  twitter: {
    title: "India-US DTAA: Tax Treaty Between the US and India Explained",
    description:
      "The India-US DTAA, the income tax treaty between the USA and India, explained: who qualifies, taxes covered, residency, relief from double tax and disputes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
