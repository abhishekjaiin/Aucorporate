import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts, Courts and Arbitration for UK Companies in India: English Judgments, LCIA and Indian Courts",
  },
  description:
    "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments and arbitral awards in India.",
  alternates: guideAlternates("uk", "contracts-and-arbitration"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Contracts, Courts and Arbitration for UK Companies in India: English Judgments, LCIA and Indian Courts",
    description:
      "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments and arbitral awards in India.",
    url: "https://www.theaucorp.com/blog/uk-to-india/contracts-courts-arbitration",
    locale: "en_GB",
  },
  twitter: {
    title: "Contracts, Courts and Arbitration for UK Companies in India: English Judgments, LCIA and Indian Courts",
    description:
      "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments and arbitral awards in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
