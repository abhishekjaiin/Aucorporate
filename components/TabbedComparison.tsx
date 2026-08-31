"use client"

import { useState } from "react"

type Tab = { title: string; body: string }

/** Turns a stack of long comparison write-ups into a clickable tabbed panel. */
export function TabbedComparison({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      <div className="flex flex-wrap border-b bg-gray-50" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`flex-1 min-w-[140px] px-4 py-4 text-sm font-semibold text-center transition border-b-2 ${
              active === i
                ? "border-yellow-400 bg-white text-[#081a42]"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-6 md:p-8">
        {tabs[active].body.split("\n\n").map((para, i) => (
          <p key={i} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}
