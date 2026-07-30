import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for Singapore Companies | Subsidiary Setup Guide",
  },
  description:
    "How Singapore companies enter and set up business operations in India, including entity structuring and compliance essentials.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-singapore-companies",
  },
  openGraph: {
    title: "India Entry for Singapore Companies | Subsidiary Setup Guide",
    description:
      "How Singapore companies enter and set up business operations in India, including entity structuring and compliance essentials.",
    url: "https://www.theaucorp.com/india-entry-for-singapore-companies",
  },
  twitter: {
    title: "India Entry for Singapore Companies | Subsidiary Setup Guide",
    description:
      "How Singapore companies enter and set up business operations in India, including entity structuring and compliance essentials.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
