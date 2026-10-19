import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Australia, Step by Step",
  },
  description:
    "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/incorporation-process",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/incorporation-process",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/incorporation-process",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from Australia, Step by Step",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
    url: "https://www.theaucorp.com/blog/australia-to-india/incorporation-process",
    locale: "en_AU",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from Australia, Step by Step",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
