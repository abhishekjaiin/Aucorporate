import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Audit and ICOFR for Indian Subsidiaries of US Companies",
  },
  description:
    "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a US group. What to expect and how to prepare.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/audit-icofr",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Audit and ICOFR for Indian Subsidiaries of US Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a US group. What to expect and how to prepare.",
    url: "https://www.theaucorp.com/blog/usa-to-india/audit-icofr",
  },
  twitter: {
    title: "Audit and ICOFR for Indian Subsidiaries of US Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a US group. What to expect and how to prepare.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
