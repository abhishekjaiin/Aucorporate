import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Choosing an Indian Structure from Singapore: Subsidiary, Branch, LLP, GIFT City or EOR",
  },
  description:
    "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax results and a choice by business model.",
  alternates: guideAlternates("singapore", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Choosing an Indian Structure from Singapore: Subsidiary, Branch, LLP, GIFT City or EOR",
    description:
      "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax results and a choice by business model.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/structure-options",
    locale: "en_GB",
  },
  twitter: {
    title: "Choosing an Indian Structure from Singapore: Subsidiary, Branch, LLP, GIFT City or EOR",
    description:
      "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax results and a choice by business model.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
