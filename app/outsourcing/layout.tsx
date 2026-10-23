import type { Metadata } from "next"

const title = "Finance & Accounting Outsourcing in India | AU Corporate"
const description =
  "Outsourced bookkeeping, monthly accounting, GST and TDS support, MIS and parent reporting, and audit support for Indian subsidiaries of foreign companies."

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
