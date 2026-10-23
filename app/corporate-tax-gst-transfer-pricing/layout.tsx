import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Corporate Tax, GST and Transfer Pricing in India for Subsidiaries",
  },
  description:
    "Corporate tax at 25.17%, GST, transfer pricing, DTAA, repatriation tax, expat taxation, tax litigation and GST refunds for Indian subsidiaries. Reasonable fees.",
  alternates: {
    canonical: "https://www.theaucorp.com/corporate-tax-gst-transfer-pricing",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Corporate Tax, GST and Transfer Pricing in India for Subsidiaries",
    description:
      "Corporate tax at 25.17%, GST, transfer pricing, DTAA, repatriation tax, expat taxation, tax litigation and GST refunds for Indian subsidiaries. Reasonable fees.",
    url: "https://www.theaucorp.com/corporate-tax-gst-transfer-pricing",
  },
  twitter: {
    title: "Corporate Tax, GST and Transfer Pricing in India for Subsidiaries",
    description:
      "Corporate tax at 25.17%, GST, transfer pricing, DTAA, repatriation tax, expat taxation, tax litigation and GST refunds for Indian subsidiaries. Reasonable fees.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
