import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for a Japanese Company: Contracts and Payroll",
  },
  description:
    "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
  alternates: guideAlternates("japan", "hiring-and-payroll"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Hiring in India for a Japanese Company: Contracts and Payroll",
    description:
      "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
    url: "https://www.theaucorp.com/blog/japan-to-india/hiring-and-payroll",
  },
  twitter: {
    title: "Hiring in India for a Japanese Company: Contracts and Payroll",
    description:
      "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
