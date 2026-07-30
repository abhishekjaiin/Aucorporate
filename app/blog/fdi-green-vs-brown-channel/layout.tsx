import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FDI Green vs Brown Channel in India | AU Corporate Blog",
  },
  description:
    "The difference between green channel and brown channel FDI routes in India and which applies to your investment.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/fdi-green-vs-brown-channel",
  },
  openGraph: {
    title: "FDI Green vs Brown Channel in India | AU Corporate Blog",
    description:
      "The difference between green channel and brown channel FDI routes in India and which applies to your investment.",
    url: "https://www.theaucorp.com/blog/fdi-green-vs-brown-channel",
  },
  twitter: {
    title: "FDI Green vs Brown Channel in India | AU Corporate Blog",
    description:
      "The difference between green channel and brown channel FDI routes in India and which applies to your investment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
