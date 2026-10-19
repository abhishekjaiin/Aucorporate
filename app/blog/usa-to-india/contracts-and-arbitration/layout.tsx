import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration in India for US Companies",
  },
  description:
    "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/contracts-and-arbitration",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/contracts-and-arbitration",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/contracts-and-arbitration",
    },
  },
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
