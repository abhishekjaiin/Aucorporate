import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "100 FAQs: Setting Up an India Subsidiary from the USA",
  },
  description:
    "100 plain answers for US companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/faq",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "100 FAQs: Setting Up an India Subsidiary from the USA",
    description:
      "100 plain answers for US companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
    url: "https://www.theaucorp.com/blog/usa-to-india/faq",
  },
  twitter: {
    title: "100 FAQs: Setting Up an India Subsidiary from the USA",
    description:
      "100 plain answers for US companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
