import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Arbitration Enforcement in India | AU Corporate Blog",
  },
  description:
    "How arbitration awards are enforced in India, and what foreign companies should know about the enforcement process.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/arbitration-enforcement-india",
  },
  openGraph: {
    title: "Arbitration Enforcement in India | AU Corporate Blog",
    description:
      "How arbitration awards are enforced in India, and what foreign companies should know about the enforcement process.",
    url: "https://www.theaucorp.com/blog/arbitration-enforcement-india",
  },
  twitter: {
    title: "Arbitration Enforcement in India | AU Corporate Blog",
    description:
      "How arbitration awards are enforced in India, and what foreign companies should know about the enforcement process.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
