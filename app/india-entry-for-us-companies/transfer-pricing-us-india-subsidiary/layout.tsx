import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing & Section 482 for US-India Subsidiaries",
  },
  description:
    "How Section 482 and India's transfer pricing rules interact for related-party transactions between a US parent and Indian subsidiary.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary",
  },
  openGraph: {
    title: "Transfer Pricing & Section 482 for US-India Subsidiaries",
    description:
      "How Section 482 and India's transfer pricing rules interact for related-party transactions between a US parent and Indian subsidiary.",
    url: "https://www.theaucorp.com/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary",
  },
  twitter: {
    title: "Transfer Pricing & Section 482 for US-India Subsidiaries",
    description:
      "How Section 482 and India's transfer pricing rules interact for related-party transactions between a US parent and Indian subsidiary.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
