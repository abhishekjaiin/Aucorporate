import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-UK CETA: What the Trade Agreement Changes for UK Companies Entering India",
  },
  description:
    "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double Contributions Convention and what stays unchanged.",
  alternates: guideAlternates("uk", "trade-agreement"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India-UK CETA: What the Trade Agreement Changes for UK Companies Entering India",
    description:
      "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double Contributions Convention and what stays unchanged.",
    url: "https://www.theaucorp.com/blog/uk-to-india/india-uk-ceta",
    locale: "en_GB",
  },
  twitter: {
    title: "India-UK CETA: What the Trade Agreement Changes for UK Companies Entering India",
    description:
      "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double Contributions Convention and what stays unchanged.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
