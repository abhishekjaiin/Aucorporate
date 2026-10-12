import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, Social Security, Labour Law and FRRO for Branch Offices in India",
  },
  description:
    "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-payroll-compliance",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Payroll, Social Security, Labour Law and FRRO for Branch Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
    url: "https://www.theaucorp.com/branch-office-payroll-compliance",
  },
  twitter: {
    title: "Payroll, Social Security, Labour Law and FRRO for Branch Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
