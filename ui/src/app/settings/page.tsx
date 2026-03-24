import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Settings | MEOK AI LABS',
  description: 'Manage your MEOK AI companion settings, preferences, and account.',
}

const SETTINGS_SECTIONS = [
  {
    id: 'account',
    title: 'Account',
    icon: '👤',
    items: ['Profile', 'Password', 'Two-factor authentication', 'Connected accounts'],
  },
  {
    id: 'companion',
    title: 'Companion',
    icon: '🥚',
    items: ['Companion name', 'Archetype', 'Voice settings', 'Memory preferences'],
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    icon: '♿',
    items: ['Senior Mode', 'Font size', 'Reduce motion', 'High contrast', 'Screen reader'],
  },
  {
    id: 'guardian',
    title: 'Guardian',
    icon: '🛡️',
    items: ['Enable Guardian', 'Family members', 'Alert thresholds', 'School-Safe Mode'],
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    icon: '🔒',
    items: ['Memory vault', 'Export my data', 'Delete my account', 'Cookie preferences'],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: '🔔',
    items: ['Morning brief time', 'Guardian alerts', 'Weekly progress', 'Product updates'],
  },
]

export default async function SettingsPage() {
  const { userId } = await auth()
  if (!userId) redirect('/login')

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5f5' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/dashboard" style={{ color: '#888', fontSize: '0.875rem', textDecoration: 'none' }}>← Dashboard</Link>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.5rem' }}>Settings</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {SETTINGS_SECTIONS.map(section => (
            <div key={section.id} style={{ padding: '1.25rem 1.5rem', background: '#111', border: '1px solid #222', borderRadius: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{section.icon}</span>
                <h2 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{section.title}</h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {section.items.map(item => (
                  <span key={item} style={{ padding: '0.25rem 0.75rem', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '9999px', fontSize: '0.8rem', color: '#888' }}>
                    {item}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '0.75rem', color: '#555', marginTop: '0.75rem', marginBottom: 0 }}>
                Full settings coming April 2026
              </p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <Link href="/api/user/export" style={{ padding: '1rem', background: '#111', border: '1px solid #222', borderRadius: '0.75rem', textDecoration: 'none', color: '#f5f5f5', display: 'block', textAlign: 'center', fontSize: '0.875rem' }}>
            📦 Export my data
          </Link>
          <Link href="/privacy" style={{ padding: '1rem', background: '#111', border: '1px solid #222', borderRadius: '0.75rem', textDecoration: 'none', color: '#f5f5f5', display: 'block', textAlign: 'center', fontSize: '0.875rem' }}>
            🔒 Privacy policy
          </Link>
        </div>

        <p style={{ marginTop: '2rem', color: '#555', fontSize: '0.8rem', textAlign: 'center' }}>
          Need help? <a href="mailto:support@meok.ai" style={{ color: '#d4af37', textDecoration: 'none' }}>support@meok.ai</a>
        </p>
      </div>
    </main>
  )
}
