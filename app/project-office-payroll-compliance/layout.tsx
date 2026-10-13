import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, Social Security, Labour Law and FRRO for Project Offices in India",
  },
  description:
    "Payroll, social security compliance, professional tax, Labour Codes, contract labour and FRRO support for expats at the India project office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-payroll-compliance",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Payroll, Social Security, Labour Law and FRRO for Project Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes, contract labour and FRRO support for expats at the India project office of a foreign company.",
    url: "https://www.theaucorp.com/project-office-payroll-compliance",
  },
  twitter: {
    title: "Payroll, Social Security, Labour Law and FRRO for Project Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes, contract labour and FRRO support for expats at the India project office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
