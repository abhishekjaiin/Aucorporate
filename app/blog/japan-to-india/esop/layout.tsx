import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ESOPs for Indian Employees of a Japanese Parent Company",
  },
  description:
    "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a Japanese parent.",
  alternates: guideAlternates("japan", "esop"),
  openGraph: {
    siteName: "AU Corporate",
    title: "ESOPs for Indian Employees of a Japanese Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a Japanese parent.",
    url: "https://www.theaucorp.com/blog/japan-to-india/esop",
  },
  twitter: {
    title: "ESOPs for Indian Employees of a Japanese Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a Japanese parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
