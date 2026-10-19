import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "13 Mistakes UK Companies Make Setting Up in India, and How to Avoid Them",
  },
  description:
    "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.",
  alternates: guideAlternates("uk", "common-mistakes"),
  openGraph: {
    siteName: "AU Corporate",
    title: "13 Mistakes UK Companies Make Setting Up in India, and How to Avoid Them",
    description:
      "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.",
    url: "https://www.theaucorp.com/blog/uk-to-india/common-mistakes",
    locale: "en_GB",
  },
  twitter: {
    title: "13 Mistakes UK Companies Make Setting Up in India, and How to Avoid Them",
    description:
      "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
