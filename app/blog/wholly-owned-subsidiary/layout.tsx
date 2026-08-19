import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Wholly Owned Subsidiary in India | Setup & Compliance Guide",
  },
  description:
    "Step-by-step guide for foreign companies setting up a wholly owned subsidiary in India — incorporation process, FEMA compliance, and regulatory requirements.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/wholly-owned-subsidiary",
  },
  openGraph: {
    title: "Wholly Owned Subsidiary in India | Setup & Compliance Guide",
    description:
      "Step-by-step guide for foreign companies setting up a wholly owned subsidiary in India — incorporation process, FEMA compliance, and regulatory requirements.",
    url: "https://www.theaucorp.com/blog/wholly-owned-subsidiary",
  },
  twitter: {
    title: "Wholly Owned Subsidiary in India | Setup & Compliance Guide",
    description:
      "Step-by-step guide for foreign companies setting up a wholly owned subsidiary in India — incorporation process, FEMA compliance, and regulatory requirements.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
