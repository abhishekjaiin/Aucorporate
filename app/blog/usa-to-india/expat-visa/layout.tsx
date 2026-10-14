import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Sending a US Executive to India: Visa, Housing and Tax",
  },
  description:
    "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/expat-visa",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Sending a US Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
    url: "https://www.theaucorp.com/blog/usa-to-india/expat-visa",
  },
  twitter: {
    title: "Sending a US Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
