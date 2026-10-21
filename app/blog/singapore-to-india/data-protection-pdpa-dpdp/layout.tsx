import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Data Protection for Singapore Companies in India: PDPA Transfers and India's DPDP Act",
  },
  description:
    "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation, contracts, breach notice, consent, penalties and a build plan.",
  alternates: guideAlternates("singapore", "data-protection"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Data Protection for Singapore Companies in India: PDPA Transfers and India's DPDP Act",
    description:
      "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation, contracts, breach notice, consent, penalties and a build plan.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/data-protection-pdpa-dpdp",
    locale: "en_GB",
  },
  twitter: {
    title: "Data Protection for Singapore Companies in India: PDPA Transfers and India's DPDP Act",
    description:
      "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation, contracts, breach notice, consent, penalties and a build plan.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
