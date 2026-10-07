import type { Metadata } from "next"

// The admin area must never be indexed — enforced here in addition to the
// robots.ts disallow rule, so it holds even if robots.txt is ever bypassed.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-100">{children}</div>
}
