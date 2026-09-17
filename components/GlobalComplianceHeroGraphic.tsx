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
      <defs>
        <radialGradient id="globeFill" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#16305f" />
          <stop offset="55%" stopColor="#0d2348" />
          <stop offset="100%" stopColor="#081a42" />
        </radialGradient>
        <filter id="cardShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#081A42" floodOpacity="0.18" />
        </filter>
        <filter id="globeShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#081A42" floodOpacity="0.22" />
        </filter>
      </defs>

      <circle cx="200" cy="200" r="180" fill="#081A42" opacity="0.04" />
      <circle cx="200" cy="200" r="150" fill="#facc15" opacity="0.05" className="animate-pulse" style={{ animationDuration: "5s" }} />

      {/* globe */}
      <g filter="url(#globeShadow)">
        <circle cx="200" cy="200" r="130" fill="url(#globeFill)" />
      </g>
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
          <circle cx={p.cx} cy={p.cy} r="2" fill="#081a42" />
        </g>
      ))}

      {/* filed-confirmation card — width sized to fit its text fully within the
          400-unit viewBox (a narrower card previously let "Filed & Confirmed"
          and the market list run past the SVG's right edge and get clipped) */}
      <g transform="translate(190,258)" filter="url(#cardShadow)">
        <rect width="196" height="64" rx="14" fill="white" />
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
      <g transform="translate(16,68)" filter="url(#cardShadow)">
        <rect width="110" height="46" rx="12" fill="white" />
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
