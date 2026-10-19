import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "US Parent Reporting for an Indian Subsidiary: 5471, FBAR and More",
  },
  description:
    "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/us-parent-obligations",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/us-parent-obligations",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/australian-parent-obligations",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "US Parent Reporting for an Indian Subsidiary: 5471, FBAR and More",
    description:
      "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.",
    url: "https://www.theaucorp.com/blog/usa-to-india/us-parent-obligations",
  },
  twitter: {
    title: "US Parent Reporting for an Indian Subsidiary: 5471, FBAR and More",
    description:
      "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
