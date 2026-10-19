import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing for UK-Owned Indian Subsidiaries: Documentation, Methods and Audits",
  },
  description:
    "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime.",
  alternates: guideAlternates("uk", "transfer-pricing"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Transfer Pricing for UK-Owned Indian Subsidiaries: Documentation, Methods and Audits",
    description:
      "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime.",
    url: "https://www.theaucorp.com/blog/uk-to-india/transfer-pricing",
    locale: "en_GB",
  },
  twitter: {
    title: "Transfer Pricing for UK-Owned Indian Subsidiaries: Documentation, Methods and Audits",
    description:
      "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
