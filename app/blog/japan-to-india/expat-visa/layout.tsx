import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Sending a Japanese Executive to India: Visa, Housing and Tax",
  },
  description:
    "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
  alternates: guideAlternates("japan", "expat-visa"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Sending a Japanese Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
    url: "https://www.theaucorp.com/blog/japan-to-india/expat-visa",
  },
  twitter: {
    title: "Sending a Japanese Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
