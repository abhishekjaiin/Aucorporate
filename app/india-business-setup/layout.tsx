import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Business Setup Guide: Company Formation & FDI for Foreign Companies",
  },
  description:
    "India business setup guide for foreign companies — entity types, FDI routes, formation, compliance, banking and realistic timelines in one place.",
  keywords: ["India business setup", "business setup in India", "business setup India", "setting up a business in India", "India company setup", "company formation India", "FDI in India", "foreign company registration India"],
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup",
  },
  openGraph: {
    title: "India Business Setup Guide: Company Formation & FDI for Foreign Companies",
    description:
      "India business setup guide for foreign companies — entity types, FDI routes, formation, compliance, banking and realistic timelines in one place.",
    url: "https://www.theaucorp.com/india-business-setup",
  },
  twitter: {
    title: "India Business Setup Guide: Company Formation & FDI for Foreign Companies",
    description:
      "India business setup guide for foreign companies — entity types, FDI routes, formation, compliance, banking and realistic timelines in one place.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
