import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Regulatory Compliance for India Business Setup",
  },
  description:
    "The regulatory compliance landscape foreign-owned businesses in India need to navigate — FEMA, RBI, and sector-specific rules.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/regulatory-compliance",
  },
  openGraph: {
    title: "Regulatory Compliance for India Business Setup",
    description:
      "The regulatory compliance landscape foreign-owned businesses in India need to navigate — FEMA, RBI, and sector-specific rules.",
    url: "https://www.theaucorp.com/india-business-setup/regulatory-compliance",
  },
  twitter: {
    title: "Regulatory Compliance for India Business Setup",
    description:
      "The regulatory compliance landscape foreign-owned businesses in India need to navigate — FEMA, RBI, and sector-specific rules.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
