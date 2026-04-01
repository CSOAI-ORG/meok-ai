export default function BirthLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0c18]">
      <div
        className="w-24 h-28 rounded-full mb-6"
        style={{
          background: 'radial-gradient(ellipse at 40% 35%, rgba(245,240,232,0.15), rgba(201,168,76,0.08))',
          border: '2px solid rgba(201,168,76,0.2)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
      <p className="text-sm font-medium" style={{ color: 'rgba(201,168,76,0.5)' }}>
        Preparing the Birth Ceremony...
      </p>
    </div>
  );
}
