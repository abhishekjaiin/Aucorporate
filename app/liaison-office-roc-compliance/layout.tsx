import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "ROC Compliance for a Liaison Office in India: Forms FC-1, FC-3, FC-4",
  },
  description:
    "Form FC-1 registration, FC-2 changes, FC-3 accounts, FC-4 annual return, authorised representative and closure filings for the India liaison office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/foreign-company-roc-compliance",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "ROC Compliance for a Liaison Office in India: Forms FC-1, FC-3, FC-4",
    description:
      "Form FC-1 registration, FC-2 changes, FC-3 accounts, FC-4 annual return, authorised representative and closure filings for the India liaison office of a foreign company.",
    url: "https://www.theaucorp.com/liaison-office-roc-compliance",
  },
  twitter: {
    title: "ROC Compliance for a Liaison Office in India: Forms FC-1, FC-3, FC-4",
    description:
      "Form FC-1 registration, FC-2 changes, FC-3 accounts, FC-4 annual return, authorised representative and closure filings for the India liaison office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
