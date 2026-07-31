import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for Chinese Companies | Press Note 3 Guide",
  },
  description:
    "Navigate India's Press Note 3 approval framework for China-linked FDI — the March 2026 amendment, beneficial ownership rules, and compliant entry structuring.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-china-companies",
  },
  openGraph: {
    title: "India Entry for Chinese Companies | Press Note 3 Guide",
    description:
      "Navigate India's Press Note 3 approval framework for China-linked FDI — the March 2026 amendment, beneficial ownership rules, and compliant entry structuring.",
    url: "https://www.theaucorp.com/india-entry-for-china-companies",
  },
  twitter: {
    title: "India Entry for Chinese Companies | Press Note 3 Guide",
    description:
      "Navigate India's Press Note 3 approval framework for China-linked FDI — the March 2026 amendment, beneficial ownership rules, and compliant entry structuring.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
