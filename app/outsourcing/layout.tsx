import type { Metadata } from "next"

const title = "Finance and Accounting Outsourcing Services in India"
const description =
  "Finance and accounting outsourcing services in India: bookkeeping, monthly accounts, GST and TDS, MIS and parent reporting, and audit support."

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "https://www.theaucorp.com/outsourcing",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title,
    description,
    url: "https://www.theaucorp.com/outsourcing",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
