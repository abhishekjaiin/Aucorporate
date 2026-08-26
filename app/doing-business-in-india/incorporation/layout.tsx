import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Should You Incorporate in India Now? A Strategic Decision Guide",
  },
  description:
    "When incorporating in India actually makes sense versus other routes to market, the timing mistakes to avoid, and what changes once you commit.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india/incorporation",
  },
  openGraph: {
    title: "Should You Incorporate in India Now? A Strategic Decision Guide",
    description:
      "When incorporating in India actually makes sense versus other routes to market, the timing mistakes to avoid, and what changes once you commit.",
    url: "https://www.theaucorp.com/doing-business-in-india/incorporation",
  },
  twitter: {
    title: "Should You Incorporate in India Now? A Strategic Decision Guide",
    description:
      "When incorporating in India actually makes sense versus other routes to market, the timing mistakes to avoid, and what changes once you commit.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
