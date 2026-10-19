import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More",
  },
  description:
    "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets, transfer pricing and thin capitalisation. A guide for Australian finance teams.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/australian-parent-obligations",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/us-parent-obligations",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/australian-parent-obligations",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More",
    description:
      "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets, transfer pricing and thin capitalisation. A guide for Australian finance teams.",
    url: "https://www.theaucorp.com/blog/australia-to-india/australian-parent-obligations",
    locale: "en_AU",
  },
  twitter: {
    title: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More",
    description:
      "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets, transfer pricing and thin capitalisation. A guide for Australian finance teams.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
