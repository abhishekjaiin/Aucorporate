import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporation Process for an Indian Subsidiary, Step by Step",
  },
  description:
    "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/incorporation-process",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Incorporation Process for an Indian Subsidiary, Step by Step",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
    url: "https://www.theaucorp.com/blog/australia-to-india/incorporation-process",
    locale: "en_AU",
  },
  twitter: {
    title: "Incorporation Process for an Indian Subsidiary, Step by Step",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
