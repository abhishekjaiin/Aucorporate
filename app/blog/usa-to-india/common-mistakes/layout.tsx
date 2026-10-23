import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "10 Common Mistakes US Companies Make Setting Up in India",
  },
  description:
    "The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  alternates: guideAlternates("usa", "common-mistakes"),
  openGraph: {
    locale: "en_US",
    siteName: "AU Corporate",
    title: "10 Common Mistakes US Companies Make Setting Up in India",
    description:
      "The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
    url: "https://www.theaucorp.com/blog/usa-to-india/common-mistakes",
  },
  twitter: {
    title: "10 Common Mistakes US Companies Make Setting Up in India",
    description:
      "The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
