import type { Metadata } from 'next';
import FamilyClient from './family-client';

export const metadata: Metadata = {
  title: 'Family OS — MEOK AI LABS',
  description:
    'MEOK Family OS gives every family member their own sovereign AI companion with private memory, Guardian safety, and a shared family dashboard.',
  alternates: { canonical: '/family' },
  openGraph: {
    title: 'Family OS — MEOK AI LABS',
    description:
      'Sovereign AI for the whole family. Private companions, Guardian safety, and a shared wellbeing dashboard.',
    type: 'website',
    url: '/family',
  },
};

export default function FamilyPage() {
  return <FamilyClient />;
}
