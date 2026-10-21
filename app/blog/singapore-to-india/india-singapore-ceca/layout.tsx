import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Singapore CECA: What the 2005 Trade Agreement Means for Singapore Companies in India",
  },
  description:
    "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services, people, the EPF exemption and the open review.",
  alternates: guideAlternates("singapore", "trade-agreement"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India-Singapore CECA: What the 2005 Trade Agreement Means for Singapore Companies in India",
    description:
      "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services, people, the EPF exemption and the open review.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/india-singapore-ceca",
    locale: "en_GB",
  },
  twitter: {
    title: "India-Singapore CECA: What the 2005 Trade Agreement Means for Singapore Companies in India",
    description:
      "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services, people, the EPF exemption and the open review.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
