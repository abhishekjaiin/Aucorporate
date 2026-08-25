import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "UK Subsidiary vs Branch Office in India | Comparison Guide",
  },
  description:
    "Branch vs subsidiary in India for UK companies: RBI approval timelines, permitted activities, corporate tax rates, and DTAA withholding differences compared side by side.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india",
  },
  openGraph: {
    title: "UK Subsidiary vs Branch Office in India | Comparison Guide",
    description:
      "Branch vs subsidiary in India for UK companies: RBI approval timelines, permitted activities, corporate tax rates, and DTAA withholding differences compared side by side.",
    url: "https://www.theaucorp.com/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india",
  },
  twitter: {
    title: "UK Subsidiary vs Branch Office in India | Comparison Guide",
    description:
      "Branch vs subsidiary in India for UK companies: RBI approval timelines, permitted activities, corporate tax rates, and DTAA withholding differences compared side by side.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
