'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SensorySettingsPanel } from '@/components/sensory-settings'

/* ── Brand tokens ── */
const DEEP = '#0a0a0f'
const SURFACE = '#111118'
const SURFACE2 = '#18181f'
const BORDER = 'rgba(255,255,255,0.08)'
const GOLD = '#c9a84c'
const GOLD_DIM = 'rgba(201,168,76,0.12)'
const TEXT = '#e8e6de'
const TEXT_DIM = 'rgba(255,255,255,0.45)'
const RED = '#e05252'
const RED_DIM = 'rgba(224,82,82,0.12)'
const GREEN = '#52c078'

/* ── Types ── */
interface Profile {
  name: string
  email: string
  tier: string
  companionName: string
  companionId: string
  guardianEnabled: boolean
  streakDays: number
  messagesTotal: number
  createdAt: string
}

/* ── Section wrapper ── */
function Section({
  title,
  icon,
  children,
}: {
  title: string
  icon: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '1rem 1.5rem',
          borderBottom: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>{icon}</span>
        <h2 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: 0, color: TEXT }}>
          {title}
        </h2>
      </div>
      <div style={{ padding: '1.25rem 1.5rem' }}>{children}</div>
    </div>
  )
}

/* ── Toggle row ── */
function ToggleRow({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description?: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '0.875rem 0',
        borderTop: `1px solid ${BORDER}`,
      }}
    >
      <div>
        <p style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, color: TEXT }}>{label}</p>
        {description && (
          <p style={{ fontSize: '0.78125rem', color: TEXT_DIM, margin: '0.25rem 0 0' }}>
            {description}
          </p>
        )}
      </div>
      <button type="button"
        onClick={() => onChange(!checked)}
        aria-checked={checked}
        role="switch"
        style={{
          width: 44,
          height: 24,
          borderRadius: 12,
          background: checked ? GOLD : 'rgba(255,255,255,0.1)',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          flexShrink: 0,
          transition: 'background 0.2s',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 3,
            left: checked ? 23 : 3,
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#fff',
            transition: 'left 0.2s',
          }}
        />
      </button>
    </div>
  )
}

/* ── Save banner ── */
function SaveBanner({ saving, saved }: { saving: boolean; saved: boolean }) {
  if (!saving && !saved) return null
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: saved ? GREEN : GOLD,
        color: '#0a0a0f',
        padding: '0.625rem 1.5rem',
        borderRadius: 8,
        fontSize: '0.875rem',
        fontWeight: 700,
        zIndex: 50,
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {saving ? 'Saving...' : 'Settings saved'}
    </div>
  )
}

/* ── Main client component ── */
export default function SettingsClient({ profile }: { profile: Profile }) {
  // Notification prefs
  const [morningBrief, setMorningBrief] = useState(false)
  const [weeklyProgress, setWeeklyProgress] = useState(true)
  const [guardianAlerts, setGuardianAlerts] = useState(profile.guardianEnabled)
  const [productUpdates, setProductUpdates] = useState(true)

  // Privacy prefs
  const [memoryEnabled, setMemoryEnabled] = useState(true)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)

  // Save state
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)

  async function savePreferences() {
    setSaving(true)
    setSaved(false)
    try {
      await fetch('/api/user/preferences', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          morning_brief_enabled: morningBrief,
          guardian_enabled: guardianAlerts,
        }),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } catch {
      // silently fail — preferences are best-effort
    } finally {
      setSaving(false)
    }
  }

  async function saveCompanionSettings(companionName: string, archetype: string) {
    setSaving(true)
    setSaved(false)
    try {
      await fetch('/api/user/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companion_name: companionName, archetype }),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } catch {
      // silently fail
    } finally {
      setSaving(false)
    }
  }

  const joinedDate = new Date(profile.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main style={{ minHeight: '100vh', background: DEEP, color: TEXT }}>
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '2.5rem 1.25rem 5rem',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            href="/dashboard"
            style={{ color: TEXT_DIM, fontSize: '0.8125rem', textDecoration: 'none' }}
          >
            ← Dashboard
          </Link>
          <h1
            style={{ fontSize: '1.625rem', fontWeight: 800, marginTop: '0.5rem', margin: '0.5rem 0 0.25rem' }}
          >
            Settings
          </h1>
          <p style={{ fontSize: '0.875rem', color: TEXT_DIM, margin: 0 }}>
            Manage your profile, companion, and preferences.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* ── Profile ── */}
          <Section title="Profile" icon="👤">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                <div>
                  <label
                    style={{ fontSize: '0.75rem', color: TEXT_DIM, display: 'block', marginBottom: '0.375rem' }}
                  >
                    Name
                  </label>
                  <div
                    style={{
                      padding: '0.625rem 0.875rem',
                      background: SURFACE2,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      fontSize: '0.875rem',
                      color: TEXT,
                    }}
                  >
                    {profile.name}
                  </div>
                </div>
                <div>
                  <label
                    style={{ fontSize: '0.75rem', color: TEXT_DIM, display: 'block', marginBottom: '0.375rem' }}
                  >
                    Email
                  </label>
                  <div
                    style={{
                      padding: '0.625rem 0.875rem',
                      background: SURFACE2,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      fontSize: '0.875rem',
                      color: TEXT,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {profile.email}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: GOLD_DIM,
                  borderRadius: 10,
                  border: `1px solid rgba(201,168,76,0.15)`,
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: GOLD }}>
                    {profile.messagesTotal.toLocaleString()}
                  </p>
                  <p style={{ fontSize: '0.6875rem', color: TEXT_DIM, margin: '0.25rem 0 0' }}>
                    Total messages
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: GOLD }}>
                    {profile.streakDays}d
                  </p>
                  <p style={{ fontSize: '0.6875rem', color: TEXT_DIM, margin: '0.25rem 0 0' }}>
                    Current streak
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      margin: 0,
                      color: GOLD,
                      textTransform: 'capitalize',
                    }}
                  >
                    {profile.tier}
                  </p>
                  <p style={{ fontSize: '0.6875rem', color: TEXT_DIM, margin: '0.25rem 0 0' }}>
                    Plan
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.75rem', color: TEXT_DIM, margin: 0 }}>
                Member since {joinedDate}. To update your name or email, visit{' '}
                <a
                  href="https://accounts.clerk.dev/user"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: GOLD, textDecoration: 'none' }}
                >
                  account settings
                </a>
                .
              </p>
            </div>
          </Section>

          {/* ── Companion ── */}
          <CompanionSection
            companionName={profile.companionName}
            companionId={profile.companionId}
            onSave={saveCompanionSettings}
          />

          {/* ── Notifications ── */}
          <Section title="Notifications" icon="🔔">
            <p style={{ fontSize: '0.8125rem', color: TEXT_DIM, margin: '0 0 0.25rem' }}>
              Choose what MEOK sends you.
            </p>
            <ToggleRow
              label="Morning Brief"
              description="Daily AI-generated summary delivered each morning."
              checked={morningBrief}
              onChange={(v) => { setMorningBrief(v); void savePreferences() }}
            />
            <ToggleRow
              label="Weekly Progress"
              description="Your weekly relationship and mood summary."
              checked={weeklyProgress}
              onChange={setWeeklyProgress}
            />
            <ToggleRow
              label="Guardian Alerts"
              description="Immediate alerts for safety or unusual activity."
              checked={guardianAlerts}
              onChange={(v) => { setGuardianAlerts(v); void savePreferences() }}
            />
            <ToggleRow
              label="Product Updates"
              description="New features, characters, and announcements."
              checked={productUpdates}
              onChange={setProductUpdates}
            />
          </Section>

          {/* ── Comfort ── */}
          <Section title="Comfort &amp; Accessibility" icon="♿">
            <SensorySettingsPanel />
          </Section>

          {/* ── Privacy ── */}
          <Section title="Privacy &amp; Data" icon="🔒">
            <p style={{ fontSize: '0.8125rem', color: TEXT_DIM, margin: '0 0 0.25rem' }}>
              Control how MEOK stores and uses your data.
            </p>
            <ToggleRow
              label="Memory Vault"
              description="Allow your companion to remember things you share."
              checked={memoryEnabled}
              onChange={setMemoryEnabled}
            />
            <ToggleRow
              label="Usage Analytics"
              description="Help us improve MEOK with anonymised usage data."
              checked={analyticsEnabled}
              onChange={setAnalyticsEnabled}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.625rem',
                marginTop: '1.25rem',
              }}
            >
              <a
                href="/api/user/export"
                style={{
                  display: 'block',
                  padding: '0.75rem',
                  background: SURFACE2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  textDecoration: 'none',
                  color: TEXT,
                  fontSize: '0.8125rem',
                  textAlign: 'center',
                  fontWeight: 500,
                }}
              >
                Export my data
              </a>
              <Link
                href="/privacy"
                style={{
                  display: 'block',
                  padding: '0.75rem',
                  background: SURFACE2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  textDecoration: 'none',
                  color: TEXT,
                  fontSize: '0.8125rem',
                  textAlign: 'center',
                  fontWeight: 500,
                }}
              >
                Privacy policy
              </Link>
            </div>
          </Section>

          {/* ── Danger zone ── */}
          <Section title="Account" icon="⚠️">
            <p style={{ fontSize: '0.8125rem', color: TEXT_DIM, margin: '0 0 1rem' }}>
              Deleting your account schedules a 30-day grace period before permanent removal
              (GDPR Art. 17). You can reactivate at any time within that window.
            </p>

            {!deleteConfirm ? (
              <button type="button"
                onClick={() => setDeleteConfirm(true)}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: RED_DIM,
                  border: `1px solid rgba(224,82,82,0.25)`,
                  borderRadius: 8,
                  color: RED,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Delete account
              </button>
            ) : (
              <div
                style={{
                  padding: '1rem',
                  background: RED_DIM,
                  border: `1px solid rgba(224,82,82,0.3)`,
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <p
                  style={{ fontSize: '0.875rem', color: RED, fontWeight: 600, margin: 0 }}
                >
                  Are you sure? This will schedule your account for deletion in 30 days.
                </p>
                <div style={{ display: 'flex', gap: '0.625rem' }}>
                  <button type="button"
                    onClick={async () => {
                      try {
                        await fetch('/api/user/delete', { method: 'POST' })
                        window.location.href = '/login'
                      } catch {
                        setDeleteConfirm(false)
                      }
                    }}
                    style={{
                      padding: '0.5rem 1rem',
                      background: RED,
                      border: 'none',
                      borderRadius: 6,
                      color: '#fff',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Yes, delete my account
                  </button>
                  <button type="button"
                    onClick={() => setDeleteConfirm(false)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: SURFACE2,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 6,
                      color: TEXT,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Section>
        </div>

        <p
          style={{
            marginTop: '2rem',
            color: TEXT_DIM,
            fontSize: '0.75rem',
            textAlign: 'center',
          }}
        >
          Need help?{' '}
          <a href="mailto:support@meok.ai" style={{ color: GOLD, textDecoration: 'none' }}>
            support@meok.ai
          </a>
        </p>
      </div>

      <SaveBanner saving={saving} saved={saved} />
    </main>
  )
}

/* ── Companion section (has local form state) ── */
function CompanionSection({
  companionName,
  companionId,
  onSave,
}: {
  companionName: string
  companionId: string
  onSave: (name: string, archetype: string) => void
}) {
  const ARCHETYPES = [
    { id: 'aria', label: 'Aria' },
    { id: 'marcus', label: 'Marcus' },
    { id: 'luna', label: 'Luna' },
    { id: 'kai', label: 'Kai' },
    { id: 'sage', label: 'Sage' },
    { id: 'ananda', label: 'Ananda' },
    { id: 'gabriel', label: 'Gabriel' },
    { id: 'shanti', label: 'Shanti' },
  ]

  const [name, setName] = useState(companionName)
  const [archetype, setArchetype] = useState(companionId)
  const [dirty, setDirty] = useState(false)

  return (
    <div
      style={{
        background: 'rgba(201,168,76,0.04)',
        border: `1px solid rgba(201,168,76,0.18)`,
        borderRadius: 14,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '1rem 1.5rem',
          borderBottom: `1px solid rgba(201,168,76,0.12)`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>🥚</span>
        <h2 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: 0, color: TEXT }}>
          Companion
        </h2>
      </div>
      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label
            style={{
              fontSize: '0.75rem',
              color: TEXT_DIM,
              display: 'block',
              marginBottom: '0.375rem',
            }}
          >
            Companion name
          </label>
          <input
            value={name}
            onChange={(e) => { setName(e.target.value); setDirty(true) }}
            placeholder="Give your companion a name..."
            style={{
              width: '100%',
              padding: '0.625rem 0.875rem',
              background: SURFACE2,
              border: `1px solid ${BORDER}`,
              borderRadius: 8,
              fontSize: '0.875rem',
              color: TEXT,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label
            style={{
              fontSize: '0.75rem',
              color: TEXT_DIM,
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            Character
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {ARCHETYPES.map((a) => (
              <button type="button"
                key={a.id}
                onClick={() => { setArchetype(a.id); setDirty(true) }}
                style={{
                  padding: '0.375rem 0.875rem',
                  borderRadius: 20,
                  border: `1px solid ${archetype === a.id ? GOLD : BORDER}`,
                  background: archetype === a.id ? GOLD_DIM : SURFACE2,
                  color: archetype === a.id ? GOLD : TEXT_DIM,
                  fontSize: '0.8125rem',
                  fontWeight: archetype === a.id ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {dirty && (
          <button type="button"
            onClick={() => { onSave(name, archetype); setDirty(false) }}
            style={{
              alignSelf: 'flex-start',
              padding: '0.5rem 1.25rem',
              background: GOLD,
              border: 'none',
              borderRadius: 8,
              color: '#0a0a0f',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Save companion
          </button>
        )}
      </div>
    </div>
  )
}
