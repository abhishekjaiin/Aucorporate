import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting, Reporting and Audit Support for Project Offices in India",
  },
  description:
    "Project-wise accounting, head office reconciliation, retention and work in progress, TDS and GST workings, reporting in US GAAP or IFRS and audit support for the India project office.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-accounting-audit",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Accounting, Reporting and Audit Support for Project Offices in India",
    description:
      "Project-wise accounting, head office reconciliation, retention and work in progress, TDS and GST workings, reporting in US GAAP or IFRS and audit support for the India project office.",
    url: "https://www.theaucorp.com/project-office-accounting-audit",
  },
  twitter: {
    title: "Accounting, Reporting and Audit Support for Project Offices in India",
    description:
      "Project-wise accounting, head office reconciliation, retention and work in progress, TDS and GST workings, reporting in US GAAP or IFRS and audit support for the India project office.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
