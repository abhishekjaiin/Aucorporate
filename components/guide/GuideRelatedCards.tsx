import Link from "next/link"

export type GuideCard = { title: string; desc: string; href: string }

/** Grid of related-guide cards, used for the hub's "full guide series" section
 *  and each spoke's "related guides" section. */
export function GuideRelatedCards({ cards }: { cards: GuideCard[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="block rounded-lg border p-5 hover:border-blue-800 hover:shadow-sm transition-all bg-white"
        >
          <h3 className="font-bold text-gray-900 mb-1.5">{card.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{card.desc}</p>
          <span className="text-sm font-bold text-blue-800">Read the guide &rarr;</span>
        </Link>
      ))}
    </div>
  )
}
