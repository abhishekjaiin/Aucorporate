import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Residency for US Expats in India: Treaty and Credits",
  },
  description:
    "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.",
  alternates: guideAlternates("usa", "expat-tax-residency"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Tax Residency for US Expats in India: Treaty and Credits",
    description:
      "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us",
  },
  twitter: {
    title: "Tax Residency for US Expats in India: Treaty and Credits",
    description:
      "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
