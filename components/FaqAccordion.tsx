/**
 * Collapsible FAQ list built on native <details>/<summary>, so every answer
 * is in the server-rendered HTML on load (readable by crawlers that don't
 * run JavaScript, and by the browser's find-in-page) while still showing
 * collapsed to visitors. Needs no client JavaScript.
 */
function FaqItem({ q, a, compact }: { q: string; a: string; compact?: boolean }) {
  return (
    <details className={`group border-b border-gray-200 ${compact ? "py-3.5" : "py-5"}`}>
      <summary className="w-full flex justify-between items-center text-left gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className={compact ? "text-sm font-semibold font-heading" : "font-semibold font-heading"}>{q}</span>
        <span
          className={compact ? "text-lg leading-none shrink-0 text-gold" : "text-2xl leading-none shrink-0 text-gold"}
          aria-hidden="true"
        >
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      <p className={compact ? "text-gray-600 mt-2 text-xs leading-relaxed" : "text-gray-600 mt-3 text-sm leading-relaxed"}>{a}</p>
    </details>
  )
}

export function FaqAccordion({ faqs, compact }: { faqs: { q: string; a: string }[]; compact?: boolean }) {
  return (
    <div>
      {faqs.map((f) => (
        <FaqItem key={f.q} q={f.q} a={f.a} compact={compact} />
      ))}
    </div>
  )
}
