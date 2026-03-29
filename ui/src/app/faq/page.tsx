import type { Metadata } from 'next';
import FAQClient from './faq-client';

export const metadata: Metadata = {
  title: 'FAQ — MEOK AI LABS',
  description:
    'Frequently asked questions about MEOK: personal sovereign AI, privacy, hatching, pricing, Byzantine Council governance, and more.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ — MEOK AI LABS',
    description:
      'Everything you need to know about MEOK — sovereign AI, privacy, pricing, and technical details answered clearly.',
    type: 'website',
    url: '/faq',
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
