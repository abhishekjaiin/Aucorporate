/**
 * Self-hosted, dependency-free hero illustration for the global VAT/sales-tax
 * compliance page — an inline SVG globe with market pins and a "filed"
 * confirmation card. No external image fetch (see HeroBackground.tsx for why
 * that matters on this site: hotlinked images have previously 404'd in prod).
 */
export function GlobalComplianceHeroGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-auto max-w-md mx-auto"
      role="img"
      aria-label="Illustration of a globe with tax-compliance checkpoints across multiple markets"
    >
      <circle cx="200" cy="200" r="180" fill="#081A42" opacity="0.04" />
      <circle cx="200" cy="200" r="150" fill="#081A42" opacity="0.06" />

      {/* globe */}
      <circle cx="200" cy="200" r="130" fill="#081A42" />
      <g stroke="#ffffff" strokeOpacity="0.14" fill="none">
        <ellipse cx="200" cy="200" rx="130" ry="46" />
        <ellipse cx="200" cy="200" rx="130" ry="88" />
        <ellipse cx="200" cy="200" rx="60" ry="130" />
        <ellipse cx="200" cy="200" rx="100" ry="130" />
        <line x1="200" y1="70" x2="200" y2="330" />
      </g>
      <circle cx="200" cy="200" r="130" fill="none" stroke="#facc15" strokeOpacity="0.35" strokeWidth="1.5" />

      {/* market pins */}
      {[
        { cx: 150, cy: 148 },
        { cx: 228, cy: 138 },
        { cx: 258, cy: 176 },
        { cx: 168, cy: 254 },
        { cx: 236, cy: 246 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="10" fill="#facc15" opacity="0.18" />
          <circle cx={p.cx} cy={p.cy} r="5" fill="#facc15" />
        </g>
      ))}

      {/* filed-confirmation card */}
      <g transform="translate(238,252)">
        <rect width="140" height="64" rx="14" fill="white" stroke="#e5e7eb" />
        <circle cx="28" cy="32" r="16" fill="#dcfce7" />
        <path d="M21 32 l5 5 l9 -10" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="52" y="28" fontSize="12" fontWeight="700" fill="#081a42" fontFamily="var(--font-heading, sans-serif)">
          Filed &amp; Confirmed
        </text>
        <text x="52" y="44" fontSize="10" fill="#6b7280">
          EU · UK · US · Japan
        </text>
      </g>

      {/* small data card, upper-left */}
      <g transform="translate(24,76)">
        <rect width="110" height="46" rx="12" fill="white" stroke="#e5e7eb" />
        <text x="14" y="20" fontSize="9" fill="#6b7280" fontWeight="600">
          Monthly Returns
        </text>
        <text x="14" y="36" fontSize="13" fill="#081a42" fontWeight="700">
          Multi-Market
        </text>
      </g>
    </svg>
  )
}
