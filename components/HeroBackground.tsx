/**
 * Self-hosted, dependency-free hero background: brand-navy gradient with
 * soft glow accents and a faint grid texture — no external image fetch.
 * Replaces hotlinked Unsplash hero photos, which fail in production
 * (Vercel's image optimizer 404s on every images.unsplash.com request;
 * likely Unsplash rate-limiting automated CDN re-fetches). Pure CSS,
 * static except one slow, cheap opacity pulse — no continuous heavy
 * animation, consistent with this site's existing performance work.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#081A42]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a5c] via-[#081A42] to-[#050f28]" />

      <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-[#facc15]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-24 w-[36rem] h-[36rem] rounded-full bg-[#1e3a8a]/50 blur-3xl" />
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#facc15]/5 blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  )
}
