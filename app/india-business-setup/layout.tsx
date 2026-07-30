import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Business Setup | Company Formation & FDI Guide",
  },
  description:
    "Everything foreign companies need to know about setting up a business in India — FDI routes, formation, compliance, and banking.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup",
  },
  openGraph: {
    title: "India Business Setup | Company Formation & FDI Guide",
    description:
      "Everything foreign companies need to know about setting up a business in India — FDI routes, formation, compliance, and banking.",
    url: "https://www.theaucorp.com/india-business-setup",
  },
  twitter: {
    title: "India Business Setup | Company Formation & FDI Guide",
    description:
      "Everything foreign companies need to know about setting up a business in India — FDI routes, formation, compliance, and banking.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
