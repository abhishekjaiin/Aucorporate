import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Global VAT for US Companies Selling Abroad",
  },
  description:
    "How VAT works for US companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/global-vat",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/global-vat",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/global-vat",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Global VAT for US Companies Selling Abroad",
    description:
      "How VAT works for US companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
    url: "https://www.theaucorp.com/blog/usa-to-india/global-vat",
  },
  twitter: {
    title: "Global VAT for US Companies Selling Abroad",
    description:
      "How VAT works for US companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
