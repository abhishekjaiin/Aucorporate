import type { Metadata } from "next"

const title = "Doing Business in India in 2026: What's Actually Changed"
const description =
  "GST 2.0, four new Labour Codes, a record FDI year, and a stale World Bank ranking — what's genuinely changed for foreign companies in India in 2026."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://www.theaucorp.com/blog/doing-business-india",
  },
  openGraph: {
    title,
    description,
    url: "https://www.theaucorp.com/blog/doing-business-india",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
