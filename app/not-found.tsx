import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | AU Corporate",
  },
  robots: {
    index: false,
    follow: true,
  },
}

const helpfulLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/doing-business-in-india", label: "Doing Business in India" },
  { href: "/india-entry-for-us-companies", label: "India Entry for US Companies" },
  { href: "/india-entry-for-uk-companies", label: "India Entry for UK Companies" },
  { href: "/contact", label: "Contact Us" },
]

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-xl w-full text-center">
        <p className="text-yellow-500 font-bold text-lg mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          We couldn&apos;t find that page
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for may have moved or no longer exists. Here are some places to start instead:
        </p>

        <div className="flex flex-col gap-2 mb-8 text-left max-w-sm mx-auto">
          {helpfulLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm py-1"
            >
              {link.label} →
            </Link>
          ))}
        </div>

        <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Link href="/">Back to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}
