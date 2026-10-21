/**
 * Fades and lifts its children in as they scroll into view, using a
 * CSS scroll-driven animation (see `.reveal` in globals.css) instead of
 * JavaScript. The content is always in the server-rendered HTML and fully
 * visible without JavaScript; browsers without scroll-driven animations,
 * and users who prefer reduced motion, simply see it with no animation.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  /** Seconds; staggers items that enter the viewport together. */
  delay?: number
  y?: number
  onClick?: () => void
}) {
  return (
    <div
      className={className ? `reveal ${className}` : "reveal"}
      style={{ "--reveal-y": `${y}px`, "--reveal-delay": `${delay * 40}%` } as React.CSSProperties}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  )
}
