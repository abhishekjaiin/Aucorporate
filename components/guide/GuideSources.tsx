export type GuideSource = { label: string; href: string }

export function GuideSources({ sources, note }: { sources: GuideSource[]; note?: string }) {
  return (
    <div>
      {note && <p className="text-gray-600 leading-relaxed mb-4">{note}</p>}
      <ul className="space-y-1.5 text-sm">
        {sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
