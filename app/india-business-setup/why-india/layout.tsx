import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Why Set Up a Business in India | Key Advantages",
  },
  description:
    "The strategic, economic, and demographic advantages driving foreign companies to set up business operations in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/why-india",
  },
  openGraph: {
    title: "Why Set Up a Business in India | Key Advantages",
    description:
      "The strategic, economic, and demographic advantages driving foreign companies to set up business operations in India.",
    url: "https://www.theaucorp.com/india-business-setup/why-india",
  },
  twitter: {
    title: "Why Set Up a Business in India | Key Advantages",
    description:
      "The strategic, economic, and demographic advantages driving foreign companies to set up business operations in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
