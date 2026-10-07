import type { Metadata } from "next"

const title = "India Subsidiary Compliance Calendar | AU Corporate"
const description =
  "The monthly, quarterly, annual and event-based filings an Indian subsidiary of a foreign parent has to track — TDS, GST, ROC, RBI/FEMA and income tax, mapped by due date for a 31 March financial year."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://www.theaucorp.com/compliance-calendar",
  },
  openGraph: {
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
