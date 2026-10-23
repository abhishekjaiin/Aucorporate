import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Audit and ICOFR for Indian Subsidiaries of Japanese Companies",
  },
  description:
    "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a Japanese group. What to expect and how to prepare.",
  alternates: guideAlternates("japan", "audit-icofr"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Audit and ICOFR for Indian Subsidiaries of Japanese Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a Japanese group. What to expect and how to prepare.",
    url: "https://www.theaucorp.com/blog/japan-to-india/audit-icofr",
  },
  twitter: {
    title: "Audit and ICOFR for Indian Subsidiaries of Japanese Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a Japanese group. What to expect and how to prepare.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
