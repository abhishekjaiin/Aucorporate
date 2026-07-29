"use client"

export interface TOCItem {
  id: string
  title: string
  level: 1 | 2 | 3
}

export interface TableOfContentsProps {
  items: TOCItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="bg-white border rounded-lg p-6 my-8">
      <h2 className="text-lg font-bold mb-4">Table of Contents</h2>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} style={{ marginLeft: `${(item.level - 1) * 1.5}rem` }}>
            <a
              href={`#${item.id}`}
              className="text-blue-600 hover:underline text-sm"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
