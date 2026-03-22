import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Everything You Need to Know About MEOK',
  description:
    'Comprehensive answers about MEOK sovereign AI: privacy, memory, pricing, archetypes, the Maternal Covenant, Byzantine Council governance, and more. 25+ questions answered.',
  alternates: { canonical: 'https://meok.ai/faq' },
  openGraph: {
    title: 'FAQ — Everything You Need to Know About MEOK',
    description:
      'Comprehensive answers about MEOK sovereign AI: privacy, memory, pricing, archetypes, the Maternal Covenant, Byzantine Council governance, and more.',
    type: 'website',
    url: 'https://meok.ai/faq',
    siteName: 'MEOK.AI',
    images: [{ url: 'https://meok.ai/api/og?title=FAQ+%E2%80%94+Everything+You+Need+to+Know&desc=Privacy%2C+memory%2C+pricing%2C+archetypes%2C+Maternal+Covenant+%E2%80%94+25%2B+questions+answered.', width: 1200, height: 630, alt: 'MEOK FAQ — Everything You Need to Know' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Everything You Need to Know About MEOK',
    description:
      'Comprehensive answers about MEOK sovereign AI: privacy, memory, pricing, archetypes, and more. 25+ questions answered.',
    images: ['https://meok.ai/api/og?title=FAQ+%E2%80%94+Everything+You+Need+to+Know&desc=Privacy%2C+memory%2C+pricing%2C+archetypes%2C+Maternal+Covenant+%E2%80%94+25%2B+questions+answered.'],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
