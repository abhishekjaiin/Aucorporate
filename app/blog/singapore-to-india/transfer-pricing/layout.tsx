import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing Between Singapore and India: Form 48, Benchmarking and IRAS Differences",
  },
  description:
    "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.",
  alternates: guideAlternates("singapore", "transfer-pricing"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Transfer Pricing Between Singapore and India: Form 48, Benchmarking and IRAS Differences",
    description:
      "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/transfer-pricing",
    locale: "en_GB",
  },
  twitter: {
    title: "Transfer Pricing Between Singapore and India: Form 48, Benchmarking and IRAS Differences",
    description:
      "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
