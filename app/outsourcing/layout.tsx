import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting & Finance Outsourcing in India | AU Corp",
  },
  description:
    "Bookkeeping, payroll, MIS reporting, and Virtual CFO outsourcing services for global businesses with India operations.",
  alternates: {
    canonical: "https://www.theaucorp.com/outsourcing",
  },
  openGraph: {
    title: "Accounting & Finance Outsourcing in India | AU Corp",
    description:
      "Bookkeeping, payroll, MIS reporting, and Virtual CFO outsourcing services for global businesses with India operations.",
    url: "https://www.theaucorp.com/outsourcing",
  },
  twitter: {
    title: "Accounting & Finance Outsourcing in India | AU Corp",
    description:
      "Bookkeeping, payroll, MIS reporting, and Virtual CFO outsourcing services for global businesses with India operations.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
