import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "10 Common Mistakes Japanese Companies Make Setting Up in India",
  },
  description:
    "The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  alternates: guideAlternates("japan", "common-mistakes"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "10 Common Mistakes Japanese Companies Make Setting Up in India",
    description:
      "The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
    url: "https://www.theaucorp.com/blog/japan-to-india/common-mistakes",
  },
  twitter: {
    title: "10 Common Mistakes Japanese Companies Make Setting Up in India",
    description:
      "The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
