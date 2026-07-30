import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Company Formation in India | Entity Types & Process",
  },
  description:
    "Comparing entity types for India business setup — Private Limited, LLP, branch, and liaison office — and how to form each.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/company-formation",
  },
  openGraph: {
    title: "Company Formation in India | Entity Types & Process",
    description:
      "Comparing entity types for India business setup — Private Limited, LLP, branch, and liaison office — and how to form each.",
    url: "https://www.theaucorp.com/india-business-setup/company-formation",
  },
  twitter: {
    title: "Company Formation in India | Entity Types & Process",
    description:
      "Comparing entity types for India business setup — Private Limited, LLP, branch, and liaison office — and how to form each.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
