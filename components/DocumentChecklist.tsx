"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Circle } from "lucide-react"

type Group = { title: string; items: string[] }

const groups: Group[] = [
  {
    title: "From the Indian Side",
    items: [
      "Proof of registered office — a lease/ownership document",
      "A recent utility bill for the registered office",
      "Identity proof for any resident director or shareholder (PAN, Aadhaar)",
      "A recent address document for any resident director or shareholder",
    ],
  },
  {
    title: "From the Foreign Parent's Side",
    items: [
      "Apostille (not just notarisation) for documents from a Hague Apostille Convention country — covers most jurisdictions foreign investors come from (Australia, US, UK, Singapore, most of the EU)",
      "Consular/embassy legalisation instead, if the document is from a non-Hague-Convention country — generally takes longer",
      "Foreign director's apostilled/legalised passport copy and overseas address proof",
      "The foreign parent's apostilled/legalised certificate of incorporation, board resolution authorising the Indian subsidiary, and MOA/AOA (or local equivalent)",
    ],
  },
]

const STORAGE_KEY = "au-company-formation-checklist"
const allItems = groups.flatMap((g) => g.items)

export function DocumentChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setChecked(JSON.parse(saved))
    } catch {
      // ignore — localStorage unavailable, start fresh
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
    } catch {
      // ignore
    }
  }, [checked, hydrated])

  const doneCount = allItems.filter((i) => checked[i]).length

  return (
    <div className="rounded-xl border bg-white p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-[#081a42]">Your Document Checklist</h3>
        <span className="text-xs font-semibold text-gray-500">
          {doneCount} / {allItems.length} gathered
        </span>
      </div>
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-300"
          style={{ width: `${(doneCount / allItems.length) * 100}%` }}
        />
      </div>

      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">{group.title}</h4>
            <ul className="space-y-3">
              {group.items.map((item) => {
                const isChecked = !!checked[item]
                return (
                  <li key={item}>
                    <button
                      onClick={() => setChecked((prev) => ({ ...prev, [item]: !prev[item] }))}
                      className="flex w-full items-start gap-3 text-left"
                    >
                      {isChecked ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
                      ) : (
                        <Circle className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />
                      )}
                      <span className={`text-sm leading-relaxed ${isChecked ? "text-gray-400 line-through" : "text-gray-700"}`}>
                        {item}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-gray-400">Your progress is saved in this browser only — check items off as you gather them.</p>
    </div>
  )
}
