import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Transaction & Business Advisory Services | AU Corporate",
  },
  description:
    "Business valuation, transaction advisory, and M&A support services for companies entering or expanding in the Indian market.",
  alternates: {
    canonical: "https://www.theaucorp.com/services/transaction-advisory",
  },
  openGraph: {
    title: "Transaction & Business Advisory Services | AU Corporate",
    description:
      "Business valuation, transaction advisory, and M&A support services for companies entering or expanding in the Indian market.",
    url: "https://www.theaucorp.com/services/transaction-advisory",
  },
  twitter: {
    title: "Transaction & Business Advisory Services | AU Corporate",
    description:
      "Business valuation, transaction advisory, and M&A support services for companies entering or expanding in the Indian market.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
