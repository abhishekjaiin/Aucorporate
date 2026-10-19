import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Global VAT and GST for Australian Companies Selling Abroad",
  },
  description:
    "How VAT and GST work for Australian companies selling digital services and goods into Europe, the UK, New Zealand, India and beyond: registration, B2B and B2C rules and compliance.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/global-vat",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/global-vat",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/global-vat",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Global VAT and GST for Australian Companies Selling Abroad",
    description:
      "How VAT and GST work for Australian companies selling digital services and goods into Europe, the UK, New Zealand, India and beyond: registration, B2B and B2C rules and compliance.",
    url: "https://www.theaucorp.com/blog/australia-to-india/global-vat",
    locale: "en_AU",
  },
  twitter: {
    title: "Global VAT and GST for Australian Companies Selling Abroad",
    description:
      "How VAT and GST work for Australian companies selling digital services and goods into Europe, the UK, New Zealand, India and beyond: registration, B2B and B2C rules and compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
