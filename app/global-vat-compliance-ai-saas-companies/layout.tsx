import type { Metadata } from "next"

const title = "Global VAT & Sales Tax Compliance for AI & SaaS Companies (2026 Guide)"
const description =
  "Selling AI or SaaS subscriptions internationally? We handle VAT/GST/sales-tax registration, data sorting, and monthly filing across the US, EU, UK, Japan, and more — zero engineering effort required."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "global VAT compliance for SaaS companies",
    "sales tax compliance for AI companies",
    "SaaS VAT registration",
    "digital services tax compliance",
    "EU OSS VAT filing SaaS",
    "US economic nexus sales tax SaaS",
    "cross-border VAT compliance for startups",
    "managed VAT filing service SaaS",
  ],
  alternates: {
    canonical: "https://www.theaucorp.com/global-vat-compliance-ai-saas-companies",
  },
  openGraph: {
    title,
    description,
    url: "https://www.theaucorp.com/global-vat-compliance-ai-saas-companies",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
