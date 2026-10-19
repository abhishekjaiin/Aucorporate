import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Australia, Step by Step",
  },
  description:
    "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  alternates: guideAlternates("australia", "incorporation-process"),
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
