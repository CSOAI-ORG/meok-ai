import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat | MEOK AI',
  description: 'Talk with your AI companion',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
