"use client"

import { useEffect, useState } from "react"

export function ReadingProgressBar({ color = "#BC002D", colorEnd = "#facc15" }: { color?: string; colorEnd?: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${color}, ${colorEnd})` }}
      />
    </div>
  )
}
