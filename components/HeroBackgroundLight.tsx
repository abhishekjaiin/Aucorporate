/**
 * Light-toned counterpart to HeroBackground, for hero sections designed
 * with a mostly-white background and dark text (previously a photo faded
 * under a bg-white/80 overlay). Same rationale: self-hosted, no external
 * image fetch. Pure CSS, static except one slow, cheap opacity pulse.
 */
export function HeroBackgroundLight() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/40" />

      <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-[#facc15]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-24 w-[36rem] h-[36rem] rounded-full bg-[#081A42]/5 blur-3xl" />
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#081A42]/[0.03] blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #081A42 1px, transparent 1px), linear-gradient(to bottom, #081A42 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  )
}
