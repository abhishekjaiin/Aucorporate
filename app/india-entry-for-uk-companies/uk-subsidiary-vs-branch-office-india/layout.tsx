import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "UK Subsidiary vs Branch Office in India | Comparison Guide",
  },
  description:
    "Comparing subsidiary and branch office structures for UK companies entering India, including DTAA tax treatment differences.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india",
  },
  openGraph: {
    title: "UK Subsidiary vs Branch Office in India | Comparison Guide",
    description:
      "Comparing subsidiary and branch office structures for UK companies entering India, including DTAA tax treatment differences.",
    url: "https://www.theaucorp.com/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india",
  },
  twitter: {
    title: "UK Subsidiary vs Branch Office in India | Comparison Guide",
    description:
      "Comparing subsidiary and branch office structures for UK companies entering India, including DTAA tax treatment differences.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
