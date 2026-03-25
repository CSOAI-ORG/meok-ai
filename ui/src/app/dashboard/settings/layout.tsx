import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | MEOK AI',
  description: 'Manage your MEOK AI preferences',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
