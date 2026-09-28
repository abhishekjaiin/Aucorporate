import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Construction Arbitration in India: Claims to Enforcing Awards",
  },
  description:
    "How construction disputes reach arbitration in India, the claim types that dominate the docket, and what happens between a favourable award and enforcement.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/construction-arbitration-india",
  },
  openGraph: {
    title: "Construction Arbitration in India: Claims to Enforcing Awards",
    description:
      "How construction disputes reach arbitration in India, the claim types that dominate the docket, and what happens between a favourable award and enforcement.",
    url: "https://www.theaucorp.com/blog/construction-arbitration-india",
  },
  twitter: {
    title: "Construction Arbitration in India: Claims to Enforcing Awards",
    description:
      "How construction disputes reach arbitration in India, the claim types that dominate the docket, and what happens between a favourable award and enforcement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
