import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Compliance Calendar for an Indian Subsidiary of a UK Company: Month by Month Against the UK Year",
  },
  description:
    "A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings, mapped against the UK parent's Companies House and HMRC dates.",
  alternates: guideAlternates("uk", "compliance-calendar"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Compliance Calendar for an Indian Subsidiary of a UK Company: Month by Month Against the UK Year",
    description:
      "A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings, mapped against the UK parent's Companies House and HMRC dates.",
    url: "https://www.theaucorp.com/blog/uk-to-india/compliance-calendar",
    locale: "en_GB",
  },
  twitter: {
    title: "Compliance Calendar for an Indian Subsidiary of a UK Company: Month by Month Against the UK Year",
    description:
      "A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings, mapped against the UK parent's Companies House and HMRC dates.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
