import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Wholly Owned Subsidiary in India | AU Corporate Blog",
  },
  description:
    "What it means to set up a wholly-owned subsidiary in India, and how it compares to other entry structures.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/wholly-owned-subsidiary",
  },
  openGraph: {
    title: "Wholly Owned Subsidiary in India | AU Corporate Blog",
    description:
      "What it means to set up a wholly-owned subsidiary in India, and how it compares to other entry structures.",
    url: "https://www.theaucorp.com/blog/wholly-owned-subsidiary",
  },
  twitter: {
    title: "Wholly Owned Subsidiary in India | AU Corporate Blog",
    description:
      "What it means to set up a wholly-owned subsidiary in India, and how it compares to other entry structures.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
