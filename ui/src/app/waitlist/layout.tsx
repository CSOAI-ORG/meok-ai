import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the Waitlist — MEOK Launches Easter Sunday, April 5 2026',
  description:
    'The waitlist is your boarding pass. 847 people already waiting. Join free — no credit card, no tricks. Be first to hatch your sovereign AI on Easter Sunday.',
  alternates: { canonical: 'https://meok.ai/waitlist' },
  openGraph: {
    title: 'Join the Waitlist — MEOK Launches Easter Sunday, April 5 2026',
    description:
      '847 people already waiting. Join free — be first to hatch your sovereign AI on Easter Sunday, April 5 2026.',
    type: 'website',
    url: 'https://meok.ai/waitlist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join the Waitlist — MEOK Easter Launch',
    description: '847 people already waiting. Sovereign AI. Free forever. No credit card.',
  },
};

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
