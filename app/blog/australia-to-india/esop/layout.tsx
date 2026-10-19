import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ESOPs for Indian Employees of an Australian Parent Company",
  },
  description:
    "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for an Australian parent.",
  alternates: guideAlternates("australia", "esop"),
  openGraph: {
    siteName: "AU Corporate",
    title: "ESOPs for Indian Employees of an Australian Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for an Australian parent.",
    url: "https://www.theaucorp.com/blog/australia-to-india/esop",
    locale: "en_AU",
  },
  twitter: {
    title: "ESOPs for Indian Employees of an Australian Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for an Australian parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
