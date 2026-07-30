import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Blog | AU Corporate Insights on India Business & Compliance",
  },
  description:
    "Insights and guides from AU Corporate on India market entry, taxation, compliance, and business advisory topics.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog",
  },
  openGraph: {
    title: "Blog | AU Corporate Insights on India Business & Compliance",
    description:
      "Insights and guides from AU Corporate on India market entry, taxation, compliance, and business advisory topics.",
    url: "https://www.theaucorp.com/blog",
  },
  twitter: {
    title: "Blog | AU Corporate Insights on India Business & Compliance",
    description:
      "Insights and guides from AU Corporate on India market entry, taxation, compliance, and business advisory topics.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
