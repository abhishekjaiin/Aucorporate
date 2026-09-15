import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Construction Arbitration in India: From Winning Claims to Enforcing Awards | AU Corporate Blog",
  },
  description:
    "How construction disputes reach arbitration in India, the claim types that dominate the docket — extension of time, liquidated damages, defects liability — and what happens between a favourable award and enforcement.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/construction-arbitration-india",
  },
  openGraph: {
    title: "Construction Arbitration in India: From Winning Claims to Enforcing Awards | AU Corporate Blog",
    description:
      "How construction disputes reach arbitration in India, the claim types that dominate the docket — extension of time, liquidated damages, defects liability — and what happens between a favourable award and enforcement.",
    url: "https://www.theaucorp.com/blog/construction-arbitration-india",
  },
  twitter: {
    title: "Construction Arbitration in India: From Winning Claims to Enforcing Awards | AU Corporate Blog",
    description:
      "How construction disputes reach arbitration in India, the claim types that dominate the docket — extension of time, liquidated damages, defects liability — and what happens between a favourable award and enforcement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
