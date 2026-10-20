import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Residency for Japanese Expats in India: Treaty Rules",
  },
  description:
    "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.",
  alternates: guideAlternates("japan", "expat-tax-residency"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Tax Residency for Japanese Expats in India: Treaty Rules",
    description:
      "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.",
    url: "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan",
  },
  twitter: {
    title: "Tax Residency for Japanese Expats in India: Treaty Rules",
    description:
      "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
