import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'MEOK launches Easter Sunday — April 5, 2026';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0d0c18 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Egg SVG */}
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
          <defs>
            <radialGradient id="g2" cx="38%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#f5f0e8" />
              <stop offset="60%" stopColor="#e8dcc8" />
              <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          <ellipse cx="60" cy="72" rx="46" ry="58" fill="url(#g2)" />
          <ellipse cx="60" cy="72" rx="46" ry="58" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
        </svg>
        {/* Headline */}
        <div style={{ color: '#ffffff', fontSize: 72, fontWeight: 900, marginTop: 32, textAlign: 'center', lineHeight: 1.1 }}>
          MEOK launches Easter Sunday
        </div>
        <div style={{ color: '#c9a84c', fontSize: 48, fontWeight: 700, marginTop: 12 }}>
          April 5, 2026
        </div>
        {/* Tagline */}
        <div style={{ color: 'rgba(245,240,232,0.6)', fontSize: 24, marginTop: 24, textAlign: 'center', maxWidth: 700 }}>
          The world&apos;s first personal sovereign AI OS.
          Your AI is born, not downloaded.
        </div>
        {/* URL */}
        <div style={{ color: '#c9a84c', fontSize: 20, marginTop: 40, letterSpacing: 2 }}>
          meok.ai/easter
        </div>
      </div>
    ),
    { ...size }
  );
}
