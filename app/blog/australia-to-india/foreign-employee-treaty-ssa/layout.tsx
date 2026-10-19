import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA",
  },
  description:
    "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day rule, Indian tax residency, certificates of coverage, provident fund and superannuation.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/foreign-employee-treaty-ssa",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA",
    description:
      "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day rule, Indian tax residency, certificates of coverage, provident fund and superannuation.",
    url: "https://www.theaucorp.com/blog/australia-to-india/foreign-employee-treaty-ssa",
    locale: "en_AU",
  },
  twitter: {
    title: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA",
    description:
      "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day rule, Indian tax residency, certificates of coverage, provident fund and superannuation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
