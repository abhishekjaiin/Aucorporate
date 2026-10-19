import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk",
  },
  description:
    "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/dtaa-pe-risk",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/dtaa-pe-risk",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/dtaa-pe-risk",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk",
    description:
      "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
    url: "https://www.theaucorp.com/blog/australia-to-india/dtaa-pe-risk",
    locale: "en_AU",
  },
  twitter: {
    title: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk",
    description:
      "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
