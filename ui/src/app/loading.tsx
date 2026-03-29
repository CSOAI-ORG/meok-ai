export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: '#0d0c18' }}>
      <div className="flex flex-col items-center gap-4">
        {/* Pulsing orb */}
        <div className="relative w-16 h-16">
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: '#c9a84c' }}
          />
          <div
            className="absolute inset-2 rounded-full animate-pulse"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #c9a84ccc, #c9a84c44)',
              boxShadow: '0 0 24px #c9a84c44',
            }}
          />
        </div>
        <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Loading...
        </p>
      </div>
    </div>
  );
}
