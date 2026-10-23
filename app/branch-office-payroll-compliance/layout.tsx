import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, PF, Labour Law & FRRO for Branch Offices in India",
  },
  description:
    "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-payroll-compliance",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Payroll, PF, Labour Law & FRRO for Branch Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
    url: "https://www.theaucorp.com/branch-office-payroll-compliance",
  },
  twitter: {
    title: "Payroll, PF, Labour Law & FRRO for Branch Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
