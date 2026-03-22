import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'MEOK.AI';
  const desc =
    searchParams.get('desc') ||
    'Your sovereign AI. Built to remember. Designed to care.';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0c18',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial gold glow backdrop */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 800,
            height: 800,
            transform: 'translate(-50%, -55%)',
            background:
              'radial-gradient(ellipse at center, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.06) 40%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Egg SVG */}
        <svg width="80" height="94" viewBox="0 0 120 140" fill="none">
          <defs>
            <radialGradient id="eggGrad" cx="38%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#f5f0e8" />
              <stop offset="60%" stopColor="#e8dcc8" />
              <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.5" />
            </radialGradient>
          </defs>
          <ellipse cx="60" cy="72" rx="46" ry="58" fill="url(#eggGrad)" />
          <ellipse
            cx="60"
            cy="72"
            rx="46"
            ry="58"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="2"
          />
        </svg>

        {/* MEOK.AI brand */}
        <div
          style={{
            color: '#c9a84c',
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: -1,
            marginTop: 20,
            lineHeight: 1,
          }}
        >
          MEOK.AI
        </div>

        {/* Title */}
        <div
          style={{
            color: '#ffffff',
            fontSize: title.length > 40 ? 32 : 40,
            fontWeight: 700,
            marginTop: 20,
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.2,
            padding: '0 60px',
          }}
        >
          {title}
        </div>

        {/* Desc */}
        <div
          style={{
            color: 'rgba(245,240,232,0.6)',
            fontSize: 24,
            fontWeight: 400,
            marginTop: 16,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
            padding: '0 60px',
          }}
        >
          {desc}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#c9a84c',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 3,
            opacity: 0.8,
          }}
        >
          meok.ai
        </div>

        {/* Subtle bottom border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              'linear-gradient(90deg, transparent 0%, #c9a84c 30%, #c9a84c 70%, transparent 100%)',
            opacity: 0.5,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
