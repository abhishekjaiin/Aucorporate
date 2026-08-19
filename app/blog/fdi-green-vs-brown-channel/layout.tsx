import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FDI in India: Green Channel vs Brown Channel | AU Corporate",
  },
  description:
    "FDI in India explained: the regulatory framework, automatic vs. government route, and how Green Channel and Brown Channel approvals differ.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/fdi-green-vs-brown-channel",
  },
  openGraph: {
    title: "FDI in India: Green Channel vs Brown Channel | AU Corporate",
    description:
      "FDI in India explained: the regulatory framework, automatic vs. government route, and how Green Channel and Brown Channel approvals differ.",
    url: "https://www.theaucorp.com/blog/fdi-green-vs-brown-channel",
  },
  twitter: {
    title: "FDI in India: Green Channel vs Brown Channel | AU Corporate",
    description:
      "FDI in India explained: the regulatory framework, automatic vs. government route, and how Green Channel and Brown Channel approvals differ.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
