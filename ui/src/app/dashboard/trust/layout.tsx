import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust | MEOK AI',
  description: 'Transparency into how your AI companion works',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
