import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Careers at AU Corporate | Join Our Advisory Team",
  },
  description:
    "Explore career opportunities at AU Corporate, a professional services firm specializing in India entry, taxation, and regulatory advisory.",
  alternates: {
    canonical: "https://www.theaucorp.com/career",
  },
  openGraph: {
    title: "Careers at AU Corporate | Join Our Advisory Team",
    description:
      "Explore career opportunities at AU Corporate, a professional services firm specializing in India entry, taxation, and regulatory advisory.",
    url: "https://www.theaucorp.com/career",
  },
  twitter: {
    title: "Careers at AU Corporate | Join Our Advisory Team",
    description:
      "Explore career opportunities at AU Corporate, a professional services firm specializing in India entry, taxation, and regulatory advisory.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
