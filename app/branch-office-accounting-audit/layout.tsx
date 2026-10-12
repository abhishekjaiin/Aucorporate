import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting, Reporting and Audit Support for Branch Offices in India",
  },
  description:
    "Monthly accounting, head office reconciliation, TDS and GST workings, reporting in US GAAP or IFRS and audit support for the India branch office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-accounting-audit",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Accounting, Reporting and Audit Support for Branch Offices in India",
    description:
      "Monthly accounting, head office reconciliation, TDS and GST workings, reporting in US GAAP or IFRS and audit support for the India branch office of a foreign company.",
    url: "https://www.theaucorp.com/branch-office-accounting-audit",
  },
  twitter: {
    title: "Accounting, Reporting and Audit Support for Branch Offices in India",
    description:
      "Monthly accounting, head office reconciliation, TDS and GST workings, reporting in US GAAP or IFRS and audit support for the India branch office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
