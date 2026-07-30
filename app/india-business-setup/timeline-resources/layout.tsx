import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Timeline & Resources | India Business Setup Guide",
  },
  description:
    "Realistic timelines and resource planning for foreign companies setting up a business entity in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/timeline-resources",
  },
  openGraph: {
    title: "Timeline & Resources | India Business Setup Guide",
    description:
      "Realistic timelines and resource planning for foreign companies setting up a business entity in India.",
    url: "https://www.theaucorp.com/india-business-setup/timeline-resources",
  },
  twitter: {
    title: "Timeline & Resources | India Business Setup Guide",
    description:
      "Realistic timelines and resource planning for foreign companies setting up a business entity in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
