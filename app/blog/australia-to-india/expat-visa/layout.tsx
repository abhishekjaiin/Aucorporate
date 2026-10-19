import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Sending an Australian Executive to India: Visa, Housing and Tax",
  },
  description:
    "How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/expat-visa",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Sending an Australian Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
    url: "https://www.theaucorp.com/blog/australia-to-india/expat-visa",
    locale: "en_AU",
  },
  twitter: {
    title: "Sending an Australian Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
