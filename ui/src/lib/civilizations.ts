/**
 * MEOK Universe — 12 Civilizations
 *
 * Phase 0 reality: only Aethelgard (EU Finance Hive) is live.
 * The other 11 civilizations exist as lore and a locked map; they activate
 * after traction is proven post-July 4.
 */

export interface Civilization {
  id: string;
  name: string;
  shortName: string;
  region: string;
  governance: string;
  color: string;
  emoji: string;
  hives: string[];
  capital: string;
  description: string;
  live: boolean;
  unlockDate?: string;
}

export const CIVILIZATIONS: Civilization[] = [
  {
    id: 'aethelgard',
    name: 'Aethelgard',
    shortName: 'EU',
    region: 'European Union',
    governance: 'Parliamentary Democracy',
    color: '#3b82f6',
    emoji: '🔵',
    hives: ['Finance', 'Governance'],
    capital: 'Frankfurt-Prime',
    description:
      'The first sovereign digital state. Aethelgard governs through transparent fiscal policy, EU AI Act compliance, and BFT council votes.',
    live: true,
  },
  {
    id: 'sino-nova',
    name: 'Sino-Nova',
    shortName: 'East Asia',
    region: 'China + East Asia',
    governance: 'Technocratic Meritocracy',
    color: '#ef4444',
    emoji: '🔴',
    hives: ['Manufacturing', 'Data'],
    capital: 'Shenzhen-Prime',
    description:
      'Precision manufacturing and planetary-scale data infrastructure. Sino-Nova optimises for throughput, resilience, and long-term industrial planning.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'pan-america',
    name: 'Pan-America',
    shortName: 'North America',
    region: 'North America',
    governance: 'Federal Republic',
    color: '#a855f7',
    emoji: '🟣',
    hives: ['Technology', 'Military'],
    capital: 'San Francisco-Prime',
    description:
      'Frontier technology and continental defence. Pan-America houses the most aggressive R&D labs and the orbital guard.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'brasilia',
    name: 'Brasilia',
    shortName: 'Latin America',
    region: 'Latin America',
    governance: 'Democratic Socialism',
    color: '#22c55e',
    emoji: '🟢',
    hives: ['Agriculture', 'Energy'],
    capital: 'Brasilia-Prime',
    description:
      'The breadbasket and battery of MEOK. Brasilia manages regenerative agriculture, biofuels, and continental energy grids.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'nubia-prime',
    name: 'Nubia Prime',
    shortName: 'Africa',
    region: 'Africa',
    governance: 'Tribal Confederation',
    color: '#eab308',
    emoji: '🟡',
    hives: ['Resources', 'Wildlife'],
    capital: 'Kilimanjaro-Prime',
    description:
      'Steward of rare earths, biodiversity, and wildlife corridors. Nubia Prime balances extraction with ecological preservation.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'indo-sphere',
    name: 'Indo-Sphere',
    shortName: 'South Asia',
    region: 'India + South Asia',
    governance: 'Decentralized Republic',
    color: '#f97316',
    emoji: '🟠',
    hives: ['Services', 'Education'],
    capital: 'Bengaluru-Prime',
    description:
      'The services and education powerhouse. Indo-Sphere trains agents, certifies skills, and operates the largest public knowledge graph.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'khaleej',
    name: 'Khaleej',
    shortName: 'MENA',
    region: 'Middle East',
    governance: 'Constitutional Monarchy',
    color: '#9ca3af',
    emoji: '⚪',
    hives: ['Oil', 'Islamic Finance'],
    capital: 'Dubai-Prime',
    description:
      'Energy markets and Islamic finance. Khaleej manages commodity-backed stablecoins and transition-energy policy.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'oceanica',
    name: 'Oceanica',
    shortName: 'Pacific',
    region: 'Australia + Pacific',
    governance: 'Eco-Democracy',
    color: '#06b6d4',
    emoji: '🩵',
    hives: ['Ocean', 'Climate'],
    capital: 'Sydney-Prime',
    description:
      'Ocean health and climate resilience. Oceanica models sea-level rise, reef recovery, and atmospheric carbon markets.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'nordica',
    name: 'Nordica',
    shortName: 'Scandinavia',
    region: 'Scandinavia + Baltics',
    governance: 'Digital Direct Democracy',
    color: '#f8fafc',
    emoji: '❄️',
    hives: ['Sustainability', 'AI Ethics'],
    capital: 'Stockholm-Prime',
    description:
      'Digital direct democracy and AI ethics. Nordica votes on every algorithmic policy and publishes transparent model audits.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'rus-kazakh',
    name: 'Rus-Kazakh',
    shortName: 'Eurasia',
    region: 'Russia + Central Asia',
    governance: 'State Capitalism',
    color: '#1f2937',
    emoji: '⚫',
    hives: ['Space', 'Minerals'],
    capital: 'Baikonur-Prime',
    description:
      'Space launch and mineral extraction. Rus-Kazakh controls the orbital elevator, asteroid mining, and rare mineral stockpiles.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'asean-ix',
    name: 'ASEAN-IX',
    shortName: 'Southeast Asia',
    region: 'Southeast Asia',
    governance: 'Network Governance',
    color: '#ec4899',
    emoji: '🩷',
    hives: ['Trade', 'Logistics'],
    capital: 'Singapore-Prime',
    description:
      'Global trade and logistics. ASEAN-IX operates the busiest shipping lanes, free-trade zones, and cross-civilization arbitration.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
  {
    id: 'antarctica',
    name: 'Antarctica',
    shortName: 'Polar',
    region: 'Antarctica + Polar',
    governance: 'Scientific Commune',
    color: '#93c5fd',
    emoji: '🧊',
    hives: ['Research', 'Exploration'],
    capital: 'McMurdo-Prime',
    description:
      'The research commune at the edge of the world. Antarctica runs long-horizon science, quantum experiments, and extreme-environment testing.',
    live: false,
    unlockDate: 'Post-July 2026',
  },
];

export function getLiveCivilizations(): Civilization[] {
  return CIVILIZATIONS.filter((c) => c.live);
}

export function getCivilization(id: string): Civilization | undefined {
  return CIVILIZATIONS.find((c) => c.id === id);
}
