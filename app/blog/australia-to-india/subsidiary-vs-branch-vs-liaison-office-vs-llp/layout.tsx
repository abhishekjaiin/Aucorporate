import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary vs Branch vs Liaison Office vs LLP for Australian Companies",
  },
  description:
    "Compare the four ways an Australian company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
  alternates: guideAlternates("australia", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Subsidiary vs Branch vs Liaison Office vs LLP for Australian Companies",
    description:
      "Compare the four ways an Australian company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
    url: "https://www.theaucorp.com/blog/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
    locale: "en_AU",
  },
  twitter: {
    title: "Subsidiary vs Branch vs Liaison Office vs LLP for Australian Companies",
    description:
      "Compare the four ways an Australian company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
