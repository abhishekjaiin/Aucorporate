import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "13 Common Mistakes Australian Companies Make Setting Up in India",
  },
  description:
    "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  alternates: guideAlternates("australia", "common-mistakes"),
  openGraph: {
    siteName: "AU Corporate",
    title: "13 Common Mistakes Australian Companies Make Setting Up in India",
    description:
      "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
    url: "https://www.theaucorp.com/blog/australia-to-india/common-mistakes",
    locale: "en_AU",
  },
  twitter: {
    title: "13 Common Mistakes Australian Companies Make Setting Up in India",
    description:
      "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
