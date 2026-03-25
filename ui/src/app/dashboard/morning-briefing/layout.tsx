import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Morning Briefing | MEOK AI',
  description: 'Your personalized daily briefing from your companion',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
