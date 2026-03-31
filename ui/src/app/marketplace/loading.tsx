export default function MarketplaceLoading() {
  return (
    <div className="min-h-screen p-6" style={{ background: '#0d0c18' }}>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="h-8 w-56 rounded-lg bg-white/5 animate-pulse" />
        <div className="flex gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: `${i * 60}ms` }} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ background: '#13121f', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="aspect-square bg-white/5 animate-pulse" style={{ animationDelay: `${i * 60}ms` }} />
              <div className="p-3 space-y-2">
                <div className="h-4 w-24 rounded bg-white/5 animate-pulse" />
                <div className="h-3 w-16 rounded bg-white/5 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
