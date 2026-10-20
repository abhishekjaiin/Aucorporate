import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Japanese Parent Reporting for an Indian Subsidiary",
  },
  description:
    "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.",
  alternates: guideAlternates("japan", "parent-obligations"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Japanese Parent Reporting for an Indian Subsidiary",
    description:
      "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.",
    url: "https://www.theaucorp.com/blog/japan-to-india/japan-parent-obligations",
  },
  twitter: {
    title: "Japanese Parent Reporting for an Indian Subsidiary",
    description:
      "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
