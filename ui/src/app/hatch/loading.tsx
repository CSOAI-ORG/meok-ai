export default function HatchLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0c18]">
      <div className="relative">
        <div
          className="w-20 h-24 rounded-[50%] mb-6"
          style={{
            background: 'radial-gradient(ellipse at 38% 35%, #f5f0e8, rgba(201,168,76,0.3))',
            border: '2px solid rgba(201,168,76,0.3)',
            animation: 'pulse 1.5s ease-in-out infinite',
            boxShadow: '0 0 30px rgba(201,168,76,0.15)',
          }}
        />
      </div>
      <p className="text-sm font-medium" style={{ color: 'rgba(201,168,76,0.5)' }}>
        Something is stirring...
      </p>
    </div>
  );
}
