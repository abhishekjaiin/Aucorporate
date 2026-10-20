import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary, Branch, Liaison Office or LLP: India Options for Japanese Companies",
  },
  description:
    "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
  alternates: guideAlternates("japan", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Subsidiary, Branch, Liaison Office or LLP: India Options for Japanese Companies",
    description:
      "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
    url: "https://www.theaucorp.com/blog/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
  },
  twitter: {
    title: "Subsidiary, Branch, Liaison Office or LLP: India Options for Japanese Companies",
    description:
      "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
