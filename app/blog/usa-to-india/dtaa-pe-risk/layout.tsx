import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India-US Tax Treaty and Permanent Establishment Risk",
  },
  description:
    "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/dtaa-pe-risk",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "India-US Tax Treaty and Permanent Establishment Risk",
    description:
      "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
    url: "https://www.theaucorp.com/blog/usa-to-india/dtaa-pe-risk",
  },
  twitter: {
    title: "India-US Tax Treaty and Permanent Establishment Risk",
    description:
      "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
