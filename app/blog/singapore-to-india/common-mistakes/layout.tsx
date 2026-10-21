import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "12 Common Mistakes Singapore Companies Make in India (and the Fix for Each)",
  },
  description:
    "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps.",
  alternates: guideAlternates("singapore", "common-mistakes"),
  openGraph: {
    siteName: "AU Corporate",
    title: "12 Common Mistakes Singapore Companies Make in India (and the Fix for Each)",
    description:
      "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/common-mistakes",
    locale: "en_GB",
  },
  twitter: {
    title: "12 Common Mistakes Singapore Companies Make in India (and the Fix for Each)",
    description:
      "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
