import type { Metadata } from "next"

const title = "GST & OIDAR Registration for Foreign SaaS Companies in India (2026 Guide)"
const description =
  "No Indian entity, but Indian customers? Here's when OIDAR/GST registration is mandatory, the GSTR-5A filing calendar, and what non-compliance actually costs."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "OIDAR registration India",
    "GST registration for SaaS companies in India",
    "OIDAR GST India",
    "SaaS company GST registration India",
    "GSTR-5A filing OIDAR",
    "non-resident taxable person GST India registration",
    "digital services tax India foreign company",
    "GST registration for foreign companies with no office in India",
    "foreign SaaS company GST India",
    "OIDAR registration for foreign SaaS providers",
  ],
  alternates: {
    canonical: "https://www.theaucorp.com/oidar-gst-registration-india",
  },
  openGraph: {
    title,
    description,
    url: "https://www.theaucorp.com/oidar-gst-registration-india",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
