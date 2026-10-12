import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Tax, GST and Transfer Pricing for Branch Offices in India",
  },
  description:
    "Foreign company tax rate, advance tax, TDS, GST, transfer pricing, permanent establishment, treaty relief and litigation for the India branch office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-tax-gst-transfer-pricing",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Tax, GST and Transfer Pricing for Branch Offices in India",
    description:
      "Foreign company tax rate, advance tax, TDS, GST, transfer pricing, permanent establishment, treaty relief and litigation for the India branch office of a foreign company.",
    url: "https://www.theaucorp.com/branch-office-tax-gst-transfer-pricing",
  },
  twitter: {
    title: "Tax, GST and Transfer Pricing for Branch Offices in India",
    description:
      "Foreign company tax rate, advance tax, TDS, GST, transfer pricing, permanent establishment, treaty relief and litigation for the India branch office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
