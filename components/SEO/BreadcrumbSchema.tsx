import Link from "next/link"
import { Script } from "next/script"

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.theaucorp.com${item.url}`,
    })),
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        strategy="afterInteractive"
      />

      <nav className="flex items-center gap-2 text-sm mb-6">
        {items.map((item, index) => (
          <div key={item.url} className="flex items-center gap-2">
            <Link
              href={item.url}
              className="text-blue-600 hover:underline"
            >
              {item.name}
            </Link>
            {index < items.length - 1 && (
              <span className="text-gray-400">/</span>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
