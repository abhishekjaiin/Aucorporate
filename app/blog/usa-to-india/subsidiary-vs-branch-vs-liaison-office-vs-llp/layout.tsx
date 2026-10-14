import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary vs Branch vs Liaison Office vs LLP in India",
  },
  description:
    "Compare the four ways a US company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Subsidiary vs Branch vs Liaison Office vs LLP in India",
    description:
      "Compare the four ways a US company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
    url: "https://www.theaucorp.com/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
  },
  twitter: {
    title: "Subsidiary vs Branch vs Liaison Office vs LLP in India",
    description:
      "Compare the four ways a US company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
