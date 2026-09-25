import Link from "next/link"
import { ChevronRight } from "lucide-react"

export type BreadcrumbItem = {
  label: string
  href?: string // omit on the last (current page) item
}

/**
 * Renders a visible breadcrumb trail AND the matching BreadcrumbList
 * JSON-LD in one place, so the two can't drift out of sync (which is
 * exactly what happened before this component existed: 17 pages had
 * breadcrumb schema with no visible breadcrumb UI at all).
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  // "AU Corporate", not "Home": Google's SERP breadcrumb rich result reads
  // this BreadcrumbList schema's first item name directly, and a generic
  // "Home" gives it no brand string to associate with the site — a likely
  // contributor to Google/Bing showing the raw domain instead of the brand
  // name in search results across every page. Keeping the visible trail
  // and the schema in sync (this component's whole reason for existing).
  const withHome: BreadcrumbItem[] = [{ label: "AU Corporate", href: "/" }, ...items]

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://www.theaucorp.com${item.href === "/" ? "" : item.href}` }
        : {}),
    })),
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-gray-500">
          {withHome.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="text-gray-300" aria-hidden="true" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-yellow-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  )
}
