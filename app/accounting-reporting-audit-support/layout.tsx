import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting, Reporting & Audit Support for Indian Subsidiaries",
  },
  description:
    "Monthly accounting, reconciliations, fixed assets, TDS and GST workings and US GAAP / IFRS reporting for your India subsidiary, plus audit support. From USD 240 per month, 3-day onboarding.",
  alternates: {
    canonical: "https://www.theaucorp.com/accounting-reporting-audit-support",
  },
  openGraph: {
    title: "Accounting, Reporting & Audit Support for Indian Subsidiaries",
    description:
      "Monthly accounting, reconciliations, fixed assets, TDS and GST workings and US GAAP / IFRS reporting for your India subsidiary, plus audit support. From USD 240 per month, 3-day onboarding.",
    url: "https://www.theaucorp.com/accounting-reporting-audit-support",
  },
  twitter: {
    title: "Accounting, Reporting & Audit Support for Indian Subsidiaries",
    description:
      "Monthly accounting, reconciliations, fixed assets, TDS and GST workings and US GAAP / IFRS reporting for your India subsidiary, plus audit support. From USD 240 per month, 3-day onboarding.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
