import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration in India for US Companies",
  },
  description:
    "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
  alternates: guideAlternates("usa", "contracts-and-arbitration"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Contracts and Arbitration in India for US Companies",
    description:
      "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
    url: "https://www.theaucorp.com/blog/usa-to-india/contracts-and-arbitration",
  },
  twitter: {
    title: "Contracts and Arbitration in India for US Companies",
    description:
      "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
