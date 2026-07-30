import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Doing Business in India | AU Corporate Blog",
  },
  description:
    "Practical insights on doing business in India for foreign companies evaluating market entry.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/doing-business-india",
  },
  openGraph: {
    title: "Doing Business in India | AU Corporate Blog",
    description:
      "Practical insights on doing business in India for foreign companies evaluating market entry.",
    url: "https://www.theaucorp.com/blog/doing-business-india",
  },
  twitter: {
    title: "Doing Business in India | AU Corporate Blog",
    description:
      "Practical insights on doing business in India for foreign companies evaluating market entry.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
