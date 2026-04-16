import type { Metadata } from 'next';
import FamilyOSDashboard from '@/components/family-os-dashboard';

export const metadata: Metadata = {
  title: 'Family OS Dashboard — MEOK AI',
  description: 'Your family\'s digital command center with Guardian protection',
};

export default function FamilyOSPage() {
  return <FamilyOSDashboard />;
}