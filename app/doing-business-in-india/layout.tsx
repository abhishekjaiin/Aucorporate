import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Doing Business in India | Guide for Foreign Companies",
  },
  description:
    "A practical guide to entering and operating in India — market entry routes, incorporation, compliance, and post-setup requirements.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india",
  },
  openGraph: {
    title: "Doing Business in India | Guide for Foreign Companies",
    description:
      "A practical guide to entering and operating in India — market entry routes, incorporation, compliance, and post-setup requirements.",
    url: "https://www.theaucorp.com/doing-business-in-india",
  },
  twitter: {
    title: "Doing Business in India | Guide for Foreign Companies",
    description:
      "A practical guide to entering and operating in India — market entry routes, incorporation, compliance, and post-setup requirements.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
