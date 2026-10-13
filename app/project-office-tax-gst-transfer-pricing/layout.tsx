import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Tax, GST and Transfer Pricing for Project Offices in India",
  },
  description:
    "Foreign company tax rate, permanent establishment, lower deduction certificate, presumptive tax, GST, transfer pricing and treaty relief for the India project office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-tax-gst-transfer-pricing",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Tax, GST and Transfer Pricing for Project Offices in India",
    description:
      "Foreign company tax rate, permanent establishment, lower deduction certificate, presumptive tax, GST, transfer pricing and treaty relief for the India project office of a foreign company.",
    url: "https://www.theaucorp.com/project-office-tax-gst-transfer-pricing",
  },
  twitter: {
    title: "Tax, GST and Transfer Pricing for Project Offices in India",
    description:
      "Foreign company tax rate, permanent establishment, lower deduction certificate, presumptive tax, GST, transfer pricing and treaty relief for the India project office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
