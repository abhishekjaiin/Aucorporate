import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing in India for Japanese-Owned Subsidiaries",
  },
  description:
    "How transfer pricing works for an Indian subsidiary of a Japanese company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
  alternates: guideAlternates("japan", "transfer-pricing"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Transfer Pricing in India for Japanese-Owned Subsidiaries",
    description:
      "How transfer pricing works for an Indian subsidiary of a Japanese company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
    url: "https://www.theaucorp.com/blog/japan-to-india/transfer-pricing",
  },
  twitter: {
    title: "Transfer Pricing in India for Japanese-Owned Subsidiaries",
    description:
      "How transfer pricing works for an Indian subsidiary of a Japanese company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
