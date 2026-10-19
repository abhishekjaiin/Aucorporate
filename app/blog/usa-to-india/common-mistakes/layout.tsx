import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "10 Common Mistakes US Companies Make Setting Up in India",
  },
  description:
    "The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/common-mistakes",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/common-mistakes",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/common-mistakes",
    },
  },
  openGraph: {
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
