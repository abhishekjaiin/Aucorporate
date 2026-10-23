import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, PF, Labour Law & FRRO for Project Offices in India",
  },
  description:
    "Payroll, social security compliance, professional tax, Labour Codes, contract labour and FRRO support for expats at the India project office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-payroll-compliance",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Payroll, PF, Labour Law & FRRO for Project Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes, contract labour and FRRO support for expats at the India project office of a foreign company.",
    url: "https://www.theaucorp.com/project-office-payroll-compliance",
  },
  twitter: {
    title: "Payroll, PF, Labour Law & FRRO for Project Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes, contract labour and FRRO support for expats at the India project office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
