export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: '#0d0c18' }}>
      <div className="flex flex-col items-center gap-6">
        {/* CSOAI Robot with pulse */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl animate-ping opacity-10"
            style={{ background: '#c9a84c' }}
          />
          <img
            src="/brand/csoai-robot.png"
            alt="Loading..."
            className="w-24 h-24 object-cover rounded-xl animate-pulse"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.3))',
            }}
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-[#c9a84c] mb-1">
            CSOAI
          </p>
          <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Initializing...
          </p>
        </div>
      </div>
    </div>
  );
}
