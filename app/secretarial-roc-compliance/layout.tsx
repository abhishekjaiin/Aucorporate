import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Secretarial and ROC Compliance for Indian Subsidiaries",
  },
  description:
    "Board meetings, AGM, ROC filings, registered office shifting, MCA notices (Section 206), mergers, winding up, resident director and registered office for your Indian subsidiary.",
  alternates: {
    canonical: "https://www.theaucorp.com/secretarial-roc-compliance",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Secretarial and ROC Compliance for Indian Subsidiaries",
    description:
      "Board meetings, AGM, ROC filings, registered office shifting, MCA notices (Section 206), mergers, winding up, resident director and registered office for your Indian subsidiary.",
    url: "https://www.theaucorp.com/secretarial-roc-compliance",
  },
  twitter: {
    title: "Secretarial and ROC Compliance for Indian Subsidiaries",
    description:
      "Board meetings, AGM, ROC filings, registered office shifting, MCA notices (Section 206), mergers, winding up, resident director and registered office for your Indian subsidiary.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
