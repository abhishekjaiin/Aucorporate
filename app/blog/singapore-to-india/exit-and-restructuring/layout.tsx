import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Selling, Restructuring or Closing an Indian Subsidiary Owned from Singapore",
  },
  description:
    "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback, strike-off, voluntary liquidation and group restructuring.",
  alternates: guideAlternates("singapore", "restructuring-and-exit"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Selling, Restructuring or Closing an Indian Subsidiary Owned from Singapore",
    description:
      "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback, strike-off, voluntary liquidation and group restructuring.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/exit-and-restructuring",
    locale: "en_GB",
  },
  twitter: {
    title: "Selling, Restructuring or Closing an Indian Subsidiary Owned from Singapore",
    description:
      "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback, strike-off, voluntary liquidation and group restructuring.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
