import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const VALID_STAGES = [
  'Prying Pulse',
  'Emergent Fracture',
  'Sacred Hatchling',
  'Your Unique Sovereign',
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get('name') || 'Your';
  const companion = searchParams.get('companion') || 'Aria';
  const archetype = searchParams.get('archetype') || 'Nurturer';
  const stageRaw = searchParams.get('stage') || '';
  const stage = VALID_STAGES.includes(stageRaw) ? stageRaw : 'Prying Pulse';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
          background: '#0d0c18',
        }}
      >
        {/* Radial gradient overlay: deep purple center to dark edges */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 50% 50%, #1a0d30 0%, #110a22 35%, #0d0c18 70%)',
          }}
        />

        {/* Ambient gold glow circle behind egg */}
        <div
          style={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(201,168,76,0.15)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -58%)',
          }}
        />

        {/* Content column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            gap: 0,
          }}
        >
          {/* Golden egg / hatch emoji */}
          <div
            style={{
              fontSize: 120,
              lineHeight: 1,
            }}
          >
            🥚
          </div>

          {/* "{companion} has hatched" */}
          <div
            style={{
              color: '#ffffff',
              fontSize: 56,
              fontWeight: 700,
              marginTop: 32,
              textAlign: 'center',
              lineHeight: 1.15,
            }}
          >
            {companion} has hatched
          </div>

          {/* Sovereign stage */}
          <div
            style={{
              color: '#c9a84c',
              fontSize: 22,
              fontWeight: 400,
              marginTop: 16,
              textAlign: 'center',
              letterSpacing: 0.5,
            }}
          >
            Sovereign stage: {stage}
          </div>

          {/* "{name}'s MEOK companion" */}
          <div
            style={{
              color: 'rgba(245,240,232,0.4)',
              fontSize: 16,
              fontWeight: 400,
              marginTop: 12,
              textAlign: 'center',
            }}
          >
            {name}'s MEOK companion · {archetype}
          </div>

          {/* CTA */}
          <div
            style={{
              color: '#c9a84c',
              fontSize: 20,
              fontWeight: 600,
              marginTop: 48,
              letterSpacing: 1.5,
              textAlign: 'center',
            }}
          >
            meok.ai/birth
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}
