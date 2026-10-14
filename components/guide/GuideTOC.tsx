export type TocItem = { id: string; label: string }

/** "On this page" jump-link box, two columns on wider screens. */
export function GuideTOC({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="On this page" className="bg-secondary/40 rounded-lg p-5 mb-8 text-sm">
      <strong className="block mb-2 text-gray-900">On this page</strong>
      <ol className="sm:columns-2 gap-x-8 pl-5 space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-blue-800 hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
