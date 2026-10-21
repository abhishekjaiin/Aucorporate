type Tab = { title: string; body: string }

/**
 * A stack of long comparison write-ups as a one-open-at-a-time accordion.
 * Built on native <details name="..."> so every write-up is in the
 * server-rendered HTML and it works without JavaScript.
 */
export function TabbedComparison({ tabs }: { tabs: Tab[] }) {
  const group = `comparison-${tabs[0]?.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
  return (
    <div className="rounded-xl border bg-white divide-y overflow-hidden">
      {tabs.map((tab, i) => (
        <details key={tab.title} name={group} open={i === 0} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-[#081a42] group-open:bg-gray-50 [&::-webkit-details-marker]:hidden">
            {tab.title}
            <span className="text-xl leading-none text-yellow-500" aria-hidden="true">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <div className="px-6 pb-6 pt-2 md:px-8">
            {tab.body.split("\n\n").map((para, j) => (
              <p key={j} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  )
}
