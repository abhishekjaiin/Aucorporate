export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center px-4"
      role="status"
      aria-label="Loading page"
    >
      <div className="w-full max-w-5xl space-y-4 animate-pulse" aria-hidden="true">
        <div className="h-10 w-2/3 mx-auto rounded bg-gray-100" />
        <div className="h-4 w-1/2 mx-auto rounded bg-gray-100" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
          <div className="h-28 rounded-xl bg-gray-100" />
          <div className="h-28 rounded-xl bg-gray-100" />
          <div className="h-28 rounded-xl bg-gray-100" />
        </div>
      </div>
      <span className="sr-only">Loading</span>
    </div>
  )
}
