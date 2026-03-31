export default function ChatLoading() {
  return (
    <div className="flex h-screen" style={{ background: '#0d0c18' }}>
      {/* Sidebar skeleton */}
      <div className="w-64 flex-shrink-0 hidden md:block" style={{ background: '#13121f', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="p-4 space-y-3">
          <div className="h-4 w-32 rounded bg-white/5 animate-pulse" />
          <div className="h-8 w-full rounded-lg bg-white/5 animate-pulse" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 w-full rounded-lg bg-white/5 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </div>
      {/* Chat area skeleton */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-12 flex items-center px-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#13121f' }}>
          <div className="h-6 w-6 rounded-full bg-white/5 animate-pulse" />
          <div className="h-4 w-24 rounded ml-2 bg-white/5 animate-pulse" />
        </div>
        {/* Messages */}
        <div className="flex-1 px-4 py-6 space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-white/5 animate-pulse" />
          </div>
          <div className="h-5 w-48 mx-auto rounded bg-white/5 animate-pulse" />
          <div className="h-4 w-32 mx-auto rounded bg-white/5 animate-pulse" />
        </div>
        {/* Input */}
        <div className="p-4">
          <div className="h-12 rounded-2xl bg-white/5 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
