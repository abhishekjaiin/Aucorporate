import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Risk Management & Advisory Services | AU Corporate",
  },
  description:
    "Risk advisory, management assurance, and fraud risk management services to protect and strengthen your India operations.",
  alternates: {
    canonical: "https://www.theaucorp.com/services/risk-management",
  },
  openGraph: {
    title: "Risk Management & Advisory Services | AU Corporate",
    description:
      "Risk advisory, management assurance, and fraud risk management services to protect and strengthen your India operations.",
    url: "https://www.theaucorp.com/services/risk-management",
  },
  twitter: {
    title: "Risk Management & Advisory Services | AU Corporate",
    description:
      "Risk advisory, management assurance, and fraud risk management services to protect and strengthen your India operations.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
