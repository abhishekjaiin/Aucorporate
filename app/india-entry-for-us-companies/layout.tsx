import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for US Companies | Subsidiary Setup & Compliance",
  },
  description:
    "How US companies enter India — subsidiary vs branch structuring, FEMA compliance, transfer pricing, and incorporation support.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-us-companies",
  },
  openGraph: {
    title: "India Entry for US Companies | Subsidiary Setup & Compliance",
    description:
      "How US companies enter India — subsidiary vs branch structuring, FEMA compliance, transfer pricing, and incorporation support.",
    url: "https://www.theaucorp.com/india-entry-for-us-companies",
  },
  twitter: {
    title: "India Entry for US Companies | Subsidiary Setup & Compliance",
    description:
      "How US companies enter India — subsidiary vs branch structuring, FEMA compliance, transfer pricing, and incorporation support.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
