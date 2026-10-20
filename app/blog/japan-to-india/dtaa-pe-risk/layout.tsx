import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Japan Tax Treaty and Permanent Establishment Risk",
  },
  description:
    "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.",
  alternates: guideAlternates("japan", "dtaa-pe-risk"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India-Japan Tax Treaty and Permanent Establishment Risk",
    description:
      "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.",
    url: "https://www.theaucorp.com/blog/japan-to-india/dtaa-pe-risk",
  },
  twitter: {
    title: "India-Japan Tax Treaty and Permanent Establishment Risk",
    description:
      "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
