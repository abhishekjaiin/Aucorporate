import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for a Singapore Company: Contracts, Provident Fund, Labour Codes and Share Plans",
  },
  description:
    "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.",
  alternates: guideAlternates("singapore", "hiring-and-payroll"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Hiring in India for a Singapore Company: Contracts, Provident Fund, Labour Codes and Share Plans",
    description:
      "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/hiring-in-india",
    locale: "en_GB",
  },
  twitter: {
    title: "Hiring in India for a Singapore Company: Contracts, Provident Fund, Labour Codes and Share Plans",
    description:
      "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
