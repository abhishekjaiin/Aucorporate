"use client"

import { useEffect, useRef } from "react"

// AU Corporate: New Delhi HQ connected to the 7 markets covered by the
// India-entry country pages (US/UK/Singapore/Australia/Germany/Japan/China).
const CITIES = [
  { name: "New Delhi · HQ", lat: 28.61, lon: 77.21, hq: true },
  { name: "New York", lat: 40.71, lon: -74.01 },
  { name: "London", lat: 51.51, lon: -0.13 },
  { name: "Singapore", lat: 1.35, lon: 103.82 },
  { name: "Sydney", lat: -33.87, lon: 151.21 },
  { name: "Munich", lat: 48.14, lon: 11.58 },
  { name: "Tokyo", lat: 35.68, lon: 139.65 },
  { name: "Shanghai", lat: 31.23, lon: 121.47 },
]

// Simplified world-coastline dot field (lon,lat pairs) used to render the
// globe's "land" texture. Purely decorative — no AU Corporate-specific data.
const LAND_STEP = 4 // sparser sampling than the original for perf inside a React re-render loop
function buildLandGrid(): number[] {
  const pts: number[] = []
  // Cheap approximation: scatter points weighted toward known landmass bands.
  // Kept intentionally simple/lightweight for a hero background element.
  const bands: [number, number, number, number][] = [
    [-170, 170, 5, 75], // Asia/Europe/N.Africa broad band
    [-130, -50, -55, 70], // Americas
    [110, 155, -45, -10], // Australia
    [10, 45, -35, 35], // Africa
  ]
  bands.forEach(([lonMin, lonMax, latMin, latMax]) => {
    for (let lon = lonMin; lon <= lonMax; lon += LAND_STEP) {
      for (let lat = latMin; lat <= latMax; lat += LAND_STEP) {
        if (Math.random() > 0.55) pts.push(lon, lat)
      }
    }
  })
  return pts
}

export default function GlobeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let W = 0,
      H = 0,
      DPR = 1
    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas!.clientWidth
      H = canvas!.clientHeight
      canvas!.width = W * DPR
      canvas!.height = H * DPR
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    window.addEventListener("resize", resize)
    resize()

    let mouseY = 0,
      targetTiltX = 0,
      tiltX = 0
    function onMouseMove(e: MouseEvent) {
      const r = canvas!.getBoundingClientRect()
      mouseY = ((e.clientY - r.top) / r.height - 0.5) * 2
      targetTiltX = mouseY * 0.12
    }
    window.addEventListener("mousemove", onMouseMove)

    const DEG = Math.PI / 180
    let TILT = -18 * DEG
    const LAND = buildLandGrid()
    const DOT_PHASE = LAND.map(() => Math.random() * Math.PI * 2)

    function project(lat: number, lon: number, rotY: number) {
      const phi = lat * DEG
      const theta = lon * DEG + rotY
      const x = Math.cos(phi) * Math.sin(theta)
      const y = Math.sin(phi)
      const z = Math.cos(phi) * Math.cos(theta)
      const y2 = y * Math.cos(TILT) - z * Math.sin(TILT)
      const z2 = y * Math.sin(TILT) + z * Math.cos(TILT)
      return { x, y: y2, z: z2 }
    }

    function unit(lat: number, lon: number) {
      const phi = lat * DEG,
        theta = lon * DEG
      return {
        x: Math.cos(phi) * Math.sin(theta),
        y: Math.sin(phi),
        z: Math.cos(phi) * Math.cos(theta),
      }
    }

    function slerpPoint(
      a: { x: number; y: number; z: number },
      b: { x: number; y: number; z: number },
      f: number
    ) {
      const dot = a.x * b.x + a.y * b.y + a.z * b.z
      const ang = Math.acos(Math.max(-1, Math.min(1, dot)))
      if (ang < 1e-6) return a
      const s = Math.sin(ang)
      const w1 = Math.sin((1 - f) * ang) / s,
        w2 = Math.sin(f * ang) / s
      return { x: a.x * w1 + b.x * w2, y: a.y * w1 + b.y * w2, z: a.z * w1 + b.z * w2 }
    }

    let rot = 0
    let t0 = performance.now()
    let rafId = 0

    function draw(now: number) {
      const dt = (now - t0) / 1000
      t0 = now
      rot += dt * 0.08
      tiltX += (targetTiltX - tiltX) * 0.06
      TILT = -18 * DEG + tiltX

      ctx!.clearRect(0, 0, W, H)

      const cx = W * 0.5
      const cy = H * 0.52
      const R = Math.min(W, H) * 0.42

      ctx!.save()

      // outer ring + latitude rings — subtle, on dark background
      ctx!.strokeStyle = "rgba(91,155,255,0.16)"
      ctx!.lineWidth = 1
      ctx!.beginPath()
      ctx!.arc(cx, cy, R, 0, Math.PI * 2)
      ctx!.stroke()
      for (let ring = 1; ring <= 2; ring++) {
        const rr = (R * ring) / 3
        ctx!.beginPath()
        ctx!.arc(cx, cy, rr, 0, Math.PI * 2)
        ctx!.strokeStyle = "rgba(91,155,255,0.08)"
        ctx!.stroke()
      }

      // land dots
      for (let i = 0; i < LAND.length; i += 2) {
        const lon = LAND[i],
          lat = LAND[i + 1]
        const p = project(lat, lon, rot)
        if (p.z < -0.05) continue
        const sx = cx + p.x * R,
          sy = cy - p.y * R
        const b = Math.max(0, p.z)
        const twinkle = 0.75 + 0.25 * Math.sin(now / 650 + DOT_PHASE[i / 2])
        const size = (0.7 + b * 1.1) * twinkle
        const useGold = (i / 2) % 23 === 0
        ctx!.fillStyle = useGold ? "rgba(250,204,21,0.9)" : "rgba(91,155,255,0.75)"
        ctx!.globalAlpha = (0.15 + b * 0.55) * twinkle
        ctx!.beginPath()
        ctx!.arc(sx, sy, size, 0, Math.PI * 2)
        ctx!.fill()
      }
      ctx!.globalAlpha = 1

      const projCities = CITIES.map((c) => {
        const u = unit(c.lat, c.lon)
        const p = project(c.lat, c.lon, rot)
        return { c, ...p, u }
      })
      const hq = projCities.find((p) => p.c.hq)!

      // arcs from HQ to each market
      ctx!.lineWidth = 1.1
      projCities.forEach((p) => {
        if (p.c.hq) return
        const steps = 40
        const path: { x: number; y: number; z: number }[] = []
        for (let s = 0; s <= steps; s++) {
          const f = s / steps
          const su = slerpPoint(hq.u, p.u, f)
          const lift = 1 + 0.18 * Math.sin(f * Math.PI)
          const rx = su.x * lift,
            ry = su.y * lift,
            rz = su.z * lift
          const ry2 = ry * Math.cos(TILT) - rz * Math.sin(TILT)
          const rz2 = ry * Math.sin(TILT) + rz * Math.cos(TILT)
          path.push({ x: rx, y: ry2, z: rz2 })
        }
        ctx!.beginPath()
        let started = false
        path.forEach((pt) => {
          if (pt.z < -0.05) {
            started = false
            return
          }
          const sx = cx + pt.x * R,
            sy = cy - pt.y * R
          if (!started) {
            ctx!.moveTo(sx, sy)
            started = true
          } else {
            ctx!.lineTo(sx, sy)
          }
        })
        const avgZ = (Math.max(0, hq.z) + Math.max(0, p.z)) / 2
        ctx!.setLineDash([6, 6])
        ctx!.lineDashOffset = -now / 40
        ctx!.strokeStyle = `rgba(91,155,255,${0.15 + avgZ * 0.4})`
        ctx!.stroke()
        ctx!.setLineDash([])
      })

      // city markers + pulsing halos + labels
      const pulse = (now % 2400) / 2400
      const pulse2 = ((now + 1200) % 2400) / 2400
      projCities.forEach((p) => {
        if (p.z < -0.05) return
        const sx = cx + p.x * R,
          sy = cy - p.y * R
        const b = Math.max(0, p.z)
        const alpha = 0.4 + b * 0.6
        ;[pulse, pulse2].forEach((pu) => {
          const haloR = 3 + pu * 14
          ctx!.strokeStyle = `rgba(250,204,21,${(1 - pu) * 0.4 * alpha})`
          ctx!.lineWidth = 1.4
          ctx!.beginPath()
          ctx!.arc(sx, sy, haloR, 0, Math.PI * 2)
          ctx!.stroke()
        })
        ctx!.fillStyle = `rgba(91,155,255,${alpha * 0.9})`
        ctx!.beginPath()
        ctx!.arc(sx, sy, (p.c.hq ? 4 : 3) + 2, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.fillStyle = `rgba(255,255,255,${alpha})`
        ctx!.beginPath()
        ctx!.arc(sx, sy, p.c.hq ? 4 : 3, 0, Math.PI * 2)
        ctx!.fill()

        if (b > 0.15) {
          const label = p.c.name
          ctx!.font = "600 11px -apple-system, sans-serif"
          const pad = 6
          const tw = ctx!.measureText(label).width
          const bx = sx + 9,
            by = sy - 8
          ctx!.globalAlpha = Math.min(1, (b - 0.15) * 2.2)
          ctx!.fillStyle = "rgba(8,26,66,0.85)"
          ctx!.beginPath()
          ctx!.roundRect(bx - pad * 0.5, by - 13, tw + pad * 2, 18, 9)
          ctx!.fill()
          ctx!.fillStyle = "#FFFFFF"
          ctx!.fillText(label, bx + pad * 0.5, by)
          ctx!.globalAlpha = 1
        }
      })

      ctx!.restore()
      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  )
}
