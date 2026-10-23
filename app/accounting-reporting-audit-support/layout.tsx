import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting & Audit Support for Indian Subsidiaries",
  },
  description:
    "Monthly accounting, reconciliations, TDS and GST workings and US GAAP or IFRS reporting for your Indian subsidiary, plus audit support. From USD 240 a month.",
  alternates: {
    canonical: "https://www.theaucorp.com/accounting-reporting-audit-support",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Accounting & Audit Support for Indian Subsidiaries",
    description:
      "Monthly accounting, reconciliations, TDS and GST workings and US GAAP or IFRS reporting for your Indian subsidiary, plus audit support. From USD 240 a month.",
    url: "https://www.theaucorp.com/accounting-reporting-audit-support",
  },
  twitter: {
    title: "Accounting & Audit Support for Indian Subsidiaries",
    description:
      "Monthly accounting, reconciliations, TDS and GST workings and US GAAP or IFRS reporting for your Indian subsidiary, plus audit support. From USD 240 a month.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
