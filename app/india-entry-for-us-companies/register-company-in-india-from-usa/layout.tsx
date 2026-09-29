import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Register a Company in India from the USA | AU Corporate",
  },
  description:
    "How to register a company in India from the USA: compare entity options, the resident-director rule, and the real registration process, cost and timeline.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-us-companies/register-company-in-india-from-usa",
  },
  openGraph: {
    title: "Register a Company in India from the USA | AU Corporate",
    description:
      "How to register a company in India from the USA: compare entity options, the resident-director rule, and the real registration process, cost and timeline.",
    url: "https://www.theaucorp.com/india-entry-for-us-companies/register-company-in-india-from-usa",
  },
  twitter: {
    title: "Register a Company in India from the USA | AU Corporate",
    description:
      "How to register a company in India from the USA: compare entity options, the resident-director rule, and the real registration process, cost and timeline.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
