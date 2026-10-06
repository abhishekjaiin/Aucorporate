import type { SeoHealthReport } from "@/lib/seo/health"

export function SeoHealthPanel({ report }: { report: SeoHealthReport }) {
  const color = report.score >= 80 ? "text-green-700" : report.score >= 50 ? "text-amber-700" : "text-red-700"

  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#081a42]">Content SEO Health</p>
        <p className={`text-xl font-bold ${color}`}>{report.score}/100</p>
      </div>
      <p className="mb-3 text-xs text-gray-400">
        An internal, rule-based content/SEO checklist score — not a Google ranking score.
      </p>

      {report.failed.length > 0 && (
        <div className="mb-3">
          <p className="mb-1 text-xs font-semibold text-red-700">Failed checks</p>
          <ul className="space-y-1 text-xs text-gray-600">
            {report.failed.map((c) => <li key={c.id}>✗ {c.label}</li>)}
          </ul>
        </div>
      )}

      {report.warnings.length > 0 && (
        <div className="mb-3">
          <p className="mb-1 text-xs font-semibold text-amber-700">Warnings</p>
          <ul className="space-y-1 text-xs text-gray-600">
            {report.warnings.map((c) => <li key={c.id}>⚠ {c.label}</li>)}
          </ul>
        </div>
      )}

      <div>
        <p className="mb-1 text-xs font-semibold text-green-700">Passed checks</p>
        <ul className="space-y-1 text-xs text-gray-500">
          {report.passed.map((c) => <li key={c.id}>✓ {c.label}</li>)}
        </ul>
      </div>
    </div>
  )
}
