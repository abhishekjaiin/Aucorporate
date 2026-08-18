import Link from "next/link"
import { ArrowRight } from "lucide-react"

type RelatedLink = {
  label: string
  href: string
  description: string
}

export function RelatedResources({ links }: { links: RelatedLink[] }) {
  return (
    <div className="mt-12 pt-8 border-t">
      <h2 className="text-xl font-bold mb-4" style={{ color: "#081A42" }}>
        Related Resources
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="p-4 border rounded-lg hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <span className="font-semibold text-sm mb-1">{link.label}</span>
            <span className="text-xs text-gray-500">{link.description}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 font-semibold text-sm hover:underline"
        style={{ color: "#081A42" }}
      >
        Talk to an Expert <ArrowRight size={16} />
      </Link>
    </div>
  )
}
