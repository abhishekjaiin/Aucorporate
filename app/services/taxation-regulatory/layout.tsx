import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Taxation & Regulatory Services in India | AU Corporate",
  },
  description:
    "Corporate tax planning, GST compliance, tax audit, transfer pricing, and regulatory advisory for foreign and domestic businesses operating in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/services/taxation-regulatory",
  },
  openGraph: {
    title: "Taxation & Regulatory Services in India | AU Corporate",
    description:
      "Corporate tax planning, GST compliance, tax audit, transfer pricing, and regulatory advisory for foreign and domestic businesses operating in India.",
    url: "https://www.theaucorp.com/services/taxation-regulatory",
  },
  twitter: {
    title: "Taxation & Regulatory Services in India | AU Corporate",
    description:
      "Corporate tax planning, GST compliance, tax audit, transfer pricing, and regulatory advisory for foreign and domestic businesses operating in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
