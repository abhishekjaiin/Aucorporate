import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary, Branch, Liaison Office or LLP: Choosing a Structure in India from the UK",
  },
  description:
    "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company.",
  alternates: guideAlternates("uk", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Subsidiary, Branch, Liaison Office or LLP: Choosing a Structure in India from the UK",
    description:
      "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company.",
    url: "https://www.theaucorp.com/blog/uk-to-india/structure-options",
    locale: "en_GB",
  },
  twitter: {
    title: "Subsidiary, Branch, Liaison Office or LLP: Choosing a Structure in India from the UK",
    description:
      "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
