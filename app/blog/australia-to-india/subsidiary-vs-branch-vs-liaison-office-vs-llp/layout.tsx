import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary vs Branch vs Liaison Office vs LLP for Australian Companies",
  },
  description:
    "Compare the four ways an Australian company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
    },
  },
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
