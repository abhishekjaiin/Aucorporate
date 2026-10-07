import type { Metadata } from "next"

const title = "Finance & Accounting Outsourcing for Foreign Companies in India | AU Corporate"
const description =
  "Outsourced bookkeeping, monthly accounting, GST/TDS accounting support, MIS and parent-company reporting, and audit support for foreign companies and their Indian subsidiaries."

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "https://www.theaucorp.com/outsourcing",
  },
  openGraph: {
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
