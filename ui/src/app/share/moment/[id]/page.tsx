/** MEOK AI LABS — Shared Moment Page */

import { Metadata } from 'next';
import Link from 'next/link';

// ---------------------------------------------------------------------------
// Brand tokens
// ---------------------------------------------------------------------------

const COLORS = {
  DEEP: '#0d0c18',
  SURFACE: '#13121f',
  GOLD: '#c9a84c',
  TEXT: '#e2e0ec',
  MUTED: '#8a879c',
} as const;

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Shared Moment — MEOK AI',
  description: 'A conversation moment shared from MEOK AI companion.',
};

// ---------------------------------------------------------------------------
// Placeholder data (in production: fetch from DB by id)
// ---------------------------------------------------------------------------

function getPlaceholderMoment(id: string) {
  return {
    id,
    companionName: 'Luna',
    companionSeed: `companion-${id}`,
    userMessage: 'What does it mean to really know someone?',
    assistantMessage:
      'Knowing someone isn\u2019t about memorising facts \u2014 it\u2019s about understanding the shape of their silences, the things they reach for when the world gets heavy, and the dreams they\u2019re almost too afraid to speak aloud.',
    sharedAt: new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default async function SharedMomentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const moment = getPlaceholderMoment(id);

  const avatarUrl = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${encodeURIComponent(
    moment.companionSeed,
  )}&backgroundColor=c9a84c`;

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.DEEP,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 520,
          width: '100%',
          backgroundColor: COLORS.SURFACE,
          borderRadius: 16,
          border: `1px solid ${COLORS.GOLD}33`,
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '1.25rem 1.5rem',
            borderBottom: `1px solid ${COLORS.GOLD}22`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarUrl}
            alt={moment.companionName}
            width={44}
            height={44}
            style={{ borderRadius: '50%', background: COLORS.DEEP }}
          />
          <div>
            <div style={{ color: COLORS.GOLD, fontWeight: 600, fontSize: 16 }}>
              {moment.companionName}
            </div>
            <div style={{ color: COLORS.MUTED, fontSize: 12 }}>
              MEOK AI Companion
            </div>
          </div>
        </div>

        {/* Exchange */}
        <div style={{ padding: '1.25rem 1.5rem', display: 'grid', gap: 16 }}>
          {/* User bubble */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div
              style={{
                backgroundColor: `${COLORS.GOLD}18`,
                color: COLORS.TEXT,
                borderRadius: '14px 14px 4px 14px',
                padding: '0.75rem 1rem',
                maxWidth: '85%',
                fontSize: 14,
                lineHeight: 1.55,
              }}
            >
              {moment.userMessage}
            </div>
          </div>

          {/* Assistant bubble */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div
              style={{
                backgroundColor: `${COLORS.GOLD}0d`,
                border: `1px solid ${COLORS.GOLD}22`,
                color: COLORS.TEXT,
                borderRadius: '14px 14px 14px 4px',
                padding: '0.75rem 1rem',
                maxWidth: '85%',
                fontSize: 14,
                lineHeight: 1.55,
              }}
            >
              {moment.assistantMessage}
            </div>
          </div>
        </div>

        {/* Footer / CTA */}
        <div
          style={{
            padding: '1rem 1.5rem 1.25rem',
            borderTop: `1px solid ${COLORS.GOLD}22`,
            textAlign: 'center',
          }}
        >
          <div style={{ color: COLORS.MUTED, fontSize: 11, marginBottom: 12 }}>
            Shared from MEOK AI
          </div>
          <Link
            href="/hatch"
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.GOLD,
              color: COLORS.DEEP,
              fontWeight: 600,
              fontSize: 14,
              padding: '0.6rem 1.5rem',
              borderRadius: 8,
              textDecoration: 'none',
            }}
          >
            Create your own companion
          </Link>
        </div>
      </div>
    </main>
  );
}
