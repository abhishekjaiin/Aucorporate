import type { Metadata } from "next"

const title = "India Subsidiary Compliance Calendar | AU Corporate"
const description =
  "Monthly, quarterly, annual and event-based filings for an Indian subsidiary: TDS, GST, ROC, RBI/FEMA and income tax, by due date for a 31 March year."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://www.theaucorp.com/compliance-calendar",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title,
    description,
    url: "https://www.theaucorp.com/compliance-calendar",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
