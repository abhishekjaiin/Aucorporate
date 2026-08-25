"use client"

import { useEffect, useRef, useState } from "react"

export function CountUp({
  value,
  suffix = "",
  duration = 2000,
  decimals = 0,
}: {
  value: number
  suffix?: string
  duration?: number
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const current = value * progress
            setDisplay(decimals > 0 ? Number(current.toFixed(decimals)) : Math.floor(current))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, decimals])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
