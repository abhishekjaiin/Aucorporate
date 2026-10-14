import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting, Reporting and Audit Support for Liaison Offices in India",
  },
  description:
    "Monthly accounting, remittance and expense reconciliation, TDS workings, head office reporting and audit support for the India liaison office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-accounting-audit",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Accounting, Reporting and Audit Support for Liaison Offices in India",
    description:
      "Monthly accounting, remittance and expense reconciliation, TDS workings, head office reporting and audit support for the India liaison office of a foreign company.",
    url: "https://www.theaucorp.com/liaison-office-accounting-audit",
  },
  twitter: {
    title: "Accounting, Reporting and Audit Support for Liaison Offices in India",
    description:
      "Monthly accounting, remittance and expense reconciliation, TDS workings, head office reporting and audit support for the India liaison office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
