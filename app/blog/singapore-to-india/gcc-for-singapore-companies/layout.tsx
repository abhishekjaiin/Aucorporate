import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global Capability Centres in India for Singapore Companies: Models, Pricing and Tax",
  },
  description:
    "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST on exports, PE risk, MAS third-party rules and talent.",
  alternates: guideAlternates("singapore", "gcc"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Global Capability Centres in India for Singapore Companies: Models, Pricing and Tax",
    description:
      "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST on exports, PE risk, MAS third-party rules and talent.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/gcc-for-singapore-companies",
    locale: "en_GB",
  },
  twitter: {
    title: "Global Capability Centres in India for Singapore Companies: Models, Pricing and Tax",
    description:
      "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST on exports, PE risk, MAS third-party rules and talent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
