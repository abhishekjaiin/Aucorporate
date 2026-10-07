import type { TocItem } from "@/lib/content/toc"

/**
 * Pure server-rendered ToC — no scrollspy JS, just anchor links into the
 * heading ids injected by lib/content/toc.ts. Rendered twice (a collapsed
 * <details> on mobile, a plain list on desktop) rather than toggled with
 * client JS, so it works with zero hydration cost either way.
 */
export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length < 2) return null

  const list = (
    <ol className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
          <a href={`#${item.id}`} className="text-gray-600 hover:text-gold-dark transition-colors">
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <nav aria-label="Table of contents" className="mb-8">
      <details className="lg:hidden rounded-xl border border-gray-200 bg-gray-100 p-4">
        <summary className="cursor-pointer text-sm font-bold text-blue">
          Table of Contents
        </summary>
        <div className="mt-4">{list}</div>
      </details>

      <div className="hidden lg:block rounded-xl border border-gray-200 bg-gray-100 p-5">
        <p className="mb-3 text-sm font-bold text-blue">Table of Contents</p>
        {list}
      </div>
    </nav>
  )
}
