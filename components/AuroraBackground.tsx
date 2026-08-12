"use client"

/**
 * Pure-CSS animated gradient mesh background. Replaces the earlier
 * canvas-based globe, which went through several rounds of rendering
 * bugs (0x0 sizing race condition, overlay opacity issues) that were
 * hard to fix without visual testing. This is GPU-accelerated CSS only
 * — no JS measurement, no timing dependency, no way to render blank.
 */
export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base navy */}
      <div className="absolute inset-0 bg-[#081A42]" />

      {/* Drifting gradient orbs */}
      <div className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full opacity-40 blur-3xl animate-aurora-1"
        style={{ background: "radial-gradient(circle, rgba(250,204,21,0.35) 0%, rgba(250,204,21,0) 70%)" }}
      />
      <div className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full opacity-30 blur-3xl animate-aurora-2"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)" }}
      />
      <div className="absolute top-1/3 right-1/4 w-[45vw] h-[45vw] rounded-full opacity-25 blur-3xl animate-aurora-3"
        style={{ background: "radial-gradient(circle, rgba(250,204,21,0.25) 0%, rgba(250,204,21,0) 70%)" }}
      />

      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bottom fade for smooth transition into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#081A42] to-transparent" />

      <style jsx>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 8%) scale(1.1); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-6%, -5%) scale(1.08); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 6%) scale(1.12); }
        }
        .animate-aurora-1 { animation: aurora-1 18s ease-in-out infinite; }
        .animate-aurora-2 { animation: aurora-2 22s ease-in-out infinite; }
        .animate-aurora-3 { animation: aurora-3 16s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-aurora-1, .animate-aurora-2, .animate-aurora-3 {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
