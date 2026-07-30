import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Banking & Taxation for India Business Setup",
  },
  description:
    "How banking and taxation work for a newly-formed Indian entity — account opening, capital inflow, and initial tax registrations.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/banking-taxation",
  },
  openGraph: {
    title: "Banking & Taxation for India Business Setup",
    description:
      "How banking and taxation work for a newly-formed Indian entity — account opening, capital inflow, and initial tax registrations.",
    url: "https://www.theaucorp.com/india-business-setup/banking-taxation",
  },
  twitter: {
    title: "Banking & Taxation for India Business Setup",
    description:
      "How banking and taxation work for a newly-formed Indian entity — account opening, capital inflow, and initial tax registrations.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
