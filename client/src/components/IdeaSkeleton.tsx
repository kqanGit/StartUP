export default function IdeaSkeleton() {
  return (
    <div className="w-full max-w-2xl animate-pulse">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        {/* Header skeleton */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="h-7 w-3/4 rounded-lg bg-white/10" />
            <div className="h-7 w-1/2 rounded-lg bg-white/10" />
          </div>
          <div className="h-6 w-16 rounded-full bg-white/10" />
        </div>

        {/* Description skeleton */}
        <div className="mb-8 space-y-2">
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-5/6 rounded bg-white/10" />
          <div className="h-4 w-4/6 rounded bg-white/10" />
        </div>

        {/* Grid skeleton */}
        <div className="grid gap-6 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-white/5 p-4"
            >
              <div className="mb-3 h-4 w-28 rounded bg-white/10" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-white/8" />
                <div className="h-3 w-5/6 rounded bg-white/8" />
                <div className="h-3 w-4/6 rounded bg-white/8" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer skeleton */}
        <div className="mt-8 rounded-xl border border-white/5 bg-white/5 px-4 py-3">
          <div className="h-4 w-48 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}
