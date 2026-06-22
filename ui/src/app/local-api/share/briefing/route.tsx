import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get('name') || 'You';
  const highlightsRaw = searchParams.get('highlights') || 'Your overnight sprint completed';
  const careScoreRaw = searchParams.get('care_score');
  const careScore = careScoreRaw !== null ? Math.min(100, Math.max(0, Number(careScoreRaw))) : 85;

  const highlights = highlightsRaw
    .split('|')
    .map((h) => h.trim())
    .filter(Boolean)
    .slice(0, 3);

  // Care score ring geometry
  const ringDiameter = 120;
  const ringRadius = 48;
  const ringCx = ringDiameter / 2;
  const ringCy = ringDiameter / 2;
  const circumference = 2 * Math.PI * ringRadius;
  const dashOffset = circumference - (careScore / 100) * circumference;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0c18',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top-right gold gradient glow */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.08) 45%, transparent 70%)',
          }}
        />

        {/* MEOK wordmark — top left */}
        <div
          style={{
            position: 'absolute',
            top: 44,
            left: 60,
            color: '#c9a84c',
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          MEOK
        </div>

        {/* meok.ai — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 60,
            color: 'rgba(245,240,232,0.35)',
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: 1,
          }}
        >
          meok.ai
        </div>

        {/* Main content area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '0 60px',
          }}
        >
          {/* Left column: greeting + subtext + highlights */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              paddingRight: 60,
            }}
          >
            {/* H1: Good morning */}
            <div
              style={{
                color: '#ffffff',
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.1,
                marginTop: 0,
              }}
            >
              Good morning, {name}
            </div>

            {/* Subtext */}
            <div
              style={{
                color: '#c9a84c',
                fontSize: 24,
                fontWeight: 400,
                marginTop: 16,
                lineHeight: 1.4,
              }}
            >
              Your sovereign briefed while you slept.
            </div>

            {/* Highlights list */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 40,
                gap: 16,
              }}
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: '#c9a84c',
                      fontSize: 20,
                      fontWeight: 700,
                      lineHeight: 1.5,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      color: '#ffffff',
                      fontSize: 20,
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: care score ring */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg
              width={ringDiameter}
              height={ringDiameter}
              viewBox={`0 0 ${ringDiameter} ${ringDiameter}`}
              style={{ display: 'block' }}
            >
              {/* Track ring */}
              <circle
                cx={ringCx}
                cy={ringCy}
                r={ringRadius}
                fill="none"
                stroke="rgba(201,168,76,0.18)"
                strokeWidth="8"
              />
              {/* Progress ring */}
              <circle
                cx={ringCx}
                cy={ringCy}
                r={ringRadius}
                fill="none"
                stroke="#c9a84c"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={`${dashOffset}`}
                transform={`rotate(-90 ${ringCx} ${ringCy})`}
              />
              {/* Center label — two tspan lines */}
              <text
                x={ringCx}
                y={ringCy - 6}
                textAnchor="middle"
                fill="#c9a84c"
                fontSize="14"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                Care
              </text>
              <text
                x={ringCx}
                y={ringCy + 14}
                textAnchor="middle"
                fill="#c9a84c"
                fontSize="16"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                {careScore}%
              </text>
            </svg>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
