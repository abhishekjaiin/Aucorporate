'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to console so it's visible in Vercel's function/runtime logs
    console.error('Unhandled application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-xl w-full text-center">
        <p className="text-yellow-500 font-bold text-lg mb-2">Something went wrong</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          We hit an unexpected error
        </h1>
        <p className="text-gray-600 mb-8">
          This has been logged on our end. You can try again, or head back to the homepage.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button onClick={() => reset()} className="bg-yellow-400 text-black hover:bg-yellow-500">
            Try Again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
