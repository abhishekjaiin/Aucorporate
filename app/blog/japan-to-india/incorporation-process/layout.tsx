import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Japan, Step by Step",
  },
  description:
    "The eight steps to incorporate a wholly owned subsidiary in India from Japan: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  alternates: guideAlternates("japan", "incorporation-process"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from Japan, Step by Step",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from Japan: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
    url: "https://www.theaucorp.com/blog/japan-to-india/incorporation-process",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from Japan, Step by Step",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from Japan: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
