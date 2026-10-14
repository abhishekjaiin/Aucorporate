import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "ESOPs for Indian Employees of a US Parent Company",
  },
  description:
    "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a US parent.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/esop",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "ESOPs for Indian Employees of a US Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a US parent.",
    url: "https://www.theaucorp.com/blog/usa-to-india/esop",
  },
  twitter: {
    title: "ESOPs for Indian Employees of a US Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a US parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
