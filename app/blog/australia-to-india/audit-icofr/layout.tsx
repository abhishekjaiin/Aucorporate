import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies",
  },
  description:
    "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group. What to expect and how to prepare.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/audit-icofr",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group. What to expect and how to prepare.",
    url: "https://www.theaucorp.com/blog/australia-to-india/audit-icofr",
    locale: "en_AU",
  },
  twitter: {
    title: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group. What to expect and how to prepare.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
