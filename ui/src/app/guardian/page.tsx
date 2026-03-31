import type { Metadata } from 'next';
import GuardianClient from './guardian-client';

export const metadata: Metadata = {
  title: 'Guardian 24/7 — MEOK AI LABS',
  description:
    'MEOK Guardian is a 24/7 AI safety layer that protects your family from scams, grooming, financial fraud, and manipulation in real time.',
  alternates: { canonical: 'https://meok.ai/guardian' },
  openGraph: {
    title: 'Guardian 24/7 — MEOK AI LABS',
    description:
      'AI-powered family protection. Real-time scam detection, grooming prevention, elder care, and relationship safety.',
    type: 'website',
    url: '/guardian',
    images: [{ url: '/api/og?title=Guardian+24%2F7&desc=AI-powered+family+protection.+Real-time+scam+detection.', width: 1200, height: 630, alt: 'Guardian 24/7' }],
  },
};

export default function GuardianPage() {
  return <GuardianClient />;
}
