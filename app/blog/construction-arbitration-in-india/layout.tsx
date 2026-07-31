import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Construction Arbitration in India | AU Corporate Blog",
  },
  description:
    "Key considerations in construction sector arbitration disputes in India and how they're typically resolved.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/construction-arbitration-in-india",
  },
  openGraph: {
    title: "Construction Arbitration in India | AU Corporate Blog",
    description:
      "Key considerations in construction sector arbitration disputes in India and how they're typically resolved.",
    url: "https://www.theaucorp.com/blog/construction-arbitration-in-india",
  },
  twitter: {
    title: "Construction Arbitration in India | AU Corporate Blog",
    description:
      "Key considerations in construction sector arbitration disputes in India and how they're typically resolved.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
