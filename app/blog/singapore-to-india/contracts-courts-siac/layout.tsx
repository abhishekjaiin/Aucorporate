import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts, Courts and SIAC Arbitration: Enforcing Singapore Awards and Judgments in India",
  },
  description:
    "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India, stamping, interim relief and drafting points.",
  alternates: guideAlternates("singapore", "contracts-and-arbitration"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Contracts, Courts and SIAC Arbitration: Enforcing Singapore Awards and Judgments in India",
    description:
      "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India, stamping, interim relief and drafting points.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/contracts-courts-siac",
    locale: "en_GB",
  },
  twitter: {
    title: "Contracts, Courts and SIAC Arbitration: Enforcing Singapore Awards and Judgments in India",
    description:
      "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India, stamping, interim relief and drafting points.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
