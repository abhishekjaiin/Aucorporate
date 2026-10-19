import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing in India for Australian-Owned Subsidiaries",
  },
  description:
    "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/transfer-pricing",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/transfer-pricing",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/transfer-pricing",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Transfer Pricing in India for Australian-Owned Subsidiaries",
    description:
      "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
    url: "https://www.theaucorp.com/blog/australia-to-india/transfer-pricing",
    locale: "en_AU",
  },
  twitter: {
    title: "Transfer Pricing in India for Australian-Owned Subsidiaries",
    description:
      "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
