// SOV3 Unified Topology — single source of truth for MEOK Grid
// Generated 2026-06-14 from Namecheap export + portfolio CSV + GitHub scan

export interface DomainNode {
  id: string;
  name: string;
  domain: string;
  category: string;
  industryHive: string;
  readiness: number;
  status: 'live' | 'alpha' | 'beta' | 'dev' | 'down' | 'idea';
  mrr: number;
  valuation: string;
  lat: number;
  lng: number;
  color: string;
  githubRepo?: string;
  mcpEndpoint?: string;
}

export interface ToolNode {
  id: string;
  name: string;
  role: string;
  status: 'running' | 'code' | 'deployed' | 'down';
  port?: number;
  repo?: string;
  configPath?: string;
  models?: string[];
  lastSeen?: string;
}

export interface Hive {
  id: string;
  name: string;
  type: 'industry' | 'regional' | 'protocol';
  domains: string[];
  color: string;
  lat: number;
  lng: number;
}

export interface CrossLink {
  from: string;
  to: string;
  label: string;
  active: boolean;
}

export interface Fire {
  id: string;
  name: string;
  color: string;
  description: string;
  domainIds: string[];
}

export const KING_HIVE = {
  id: 'sov3',
  name: 'SOV3 King Hive',
  lat: 53.2307,
  lng: -0.5406,
  status: 'running',
  endpoint: 'http://localhost:3101',
  functions: ['BFT Council', 'DID/VC Identity', 'OpenRouter Routing', 'Topology Orchestration'],
};

export const HORUS = {
  id: 'horus',
  name: 'Horus Oversight',
  role: 'auditor + reconciler + safety veto',
  status: 'code',
  repo: 'CSOAI-ORG/meok-one',
  path: 'meok_one/horus.py',
};

export const FIRES: Fire[] = [
  {
    id: 'cost',
    name: 'The Cost Fire',
    color: '#F39C12',
    description: 'Publish benchmarks showing open-source models at 10% of Western pricing.',
    domainIds: ['meok', 'openmoe', 'transparencyof', 'socialmediamanager', 'loopfactory'],
  },
  {
    id: 'open-source',
    name: 'The Open-Source Fire',
    color: '#27AE60',
    description: 'Open-source everything — routing, adapters, compliance engines.',
    domainIds: ['openmoe', 'csoai', 'councilof', 'loopfactory', 'transparencyof'],
  },
  {
    id: 'sovereignty',
    name: 'The Sovereignty Fire',
    color: '#2980B9',
    description: 'Win government/defense/healthcare deals that require air-gapped deployment.',
    domainIds: ['councilof', 'proofof', 'agisafe', 'asisecurity', 'landlaw', 'csoai'],
  },
  {
    id: 'agent',
    name: 'The Agent Fire',
    color: '#9B59B6',
    description: 'Build MCP-native architecture; enable agent-to-agent payments.',
    domainIds: ['meok', 'openmoe', 'loopfactory', 'fishkeeper', 'grabhire', 'muckaway'],
  },
  {
    id: 'regulatory',
    name: 'The Regulatory Fire',
    color: '#E74C3C',
    description: 'Automate EU AI Act, NIST RMF, HIPAA compliance.',
    domainIds: [
      'safetyof',
      'transparencyof',
      'accountabilityof',
      'biasdetectionof',
      'dataprivacyof',
      'ethicalgovernanceof',
      'landlaw',
      'agisafe',
    ],
  },
];

export const TOOL_NODES: ToolNode[] = [
  {
    id: 'hermes',
    name: 'Hermes Agent',
    role: 'Self-improving worker / messaging gateway / cron',
    status: 'running',
    port: 9120,
    repo: 'NousResearch/hermes-agent',
    configPath: '~/.hermes/config.yaml',
    models: ['MiniMax-M3', 'Kimi K2.7', 'Claude Opus 4.8', 'DeepSeek V4'],
    lastSeen: '2026-06-14T03:25:00Z',
  },
  {
    id: 'minimax',
    name: 'MiniMax Code',
    role: 'Inference worker — M2.7 / M3 / multimodal',
    status: 'running',
    repo: 'MiniMax',
    configPath: '~/.minimax/config.yaml',
    models: ['MiniMax-M3', 'MiniMax-M2.7-highspeed'],
    lastSeen: '2026-06-14T03:25:00Z',
  },
  {
    id: 'openclaw',
    name: 'OpenClaw',
    role: 'Messaging interface — WhatsApp/Telegram/Discord',
    status: 'running',
    repo: 'openclaw/openclaw',
    lastSeen: '2026-06-14T03:25:00Z',
  },
  {
    id: 'github-mcp',
    name: 'GitHub MCP',
    role: 'Code/project ops connector',
    status: 'running',
    repo: 'github.com/modelcontextprotocol/servers',
    lastSeen: '2026-06-14T03:25:00Z',
  },
  {
    id: 'kimi-bridge',
    name: 'Kimi Bridge',
    role: 'Eastern model provider bridge — Kimi K2 / K2.7',
    status: 'running',
    repo: 'CSOAI-ORG/openmoe',
    configPath: 'router/openmoe_router/providers.py',
    models: ['Kimi K2', 'Kimi K2.7', 'kimi-k2-0711-preview'],
    lastSeen: '2026-06-14T03:25:00Z',
  },
  {
    id: 'horus-layer0',
    name: 'Horus Layer 0',
    role: 'Substrate auditor / Layer 0 observer across all hives',
    status: 'code',
    repo: 'CSOAI-ORG/meok-one',
    configPath: 'meok_one/horus_layer0.py',
    models: ['local Ollama', 'SOV3 Hermes', 'OpenRouter'],
    lastSeen: '2026-06-14T03:25:00Z',
  },
  HORUS as ToolNode,
];

export const INDUSTRY_HIVES: Hive[] = [
  { id: 'construction', name: 'Construction Hive', type: 'industry', domains: ['grabhire.ai', 'muckaway.ai', 'planthire.ai'], color: '#C0392B', lat: 53.0, lng: -0.3 },
  { id: 'agriculture', name: 'Agriculture Hive', type: 'industry', domains: ['fishkeeper.ai', 'koikeeper.ai'], color: '#27AE60', lat: 53.1, lng: -0.4 },
  { id: 'governance', name: 'Governance Hive', type: 'industry', domains: ['councilof.ai', 'proofof.ai', 'csoai.org', 'agisafe.ai', 'asisecurity.ai'], color: '#2980B9', lat: 53.2, lng: -0.5 },
  { id: 'gaming', name: 'Gaming Hive', type: 'industry', domains: ['blizzard-wow-mcp', 'mmoagent-mcp', 'evergame-hive-mcp'], color: '#9B59B6', lat: 53.3, lng: -0.6 },
  { id: 'compliance', name: 'Compliance Hive', type: 'industry', domains: ['safetyof.ai', 'transparencyof.ai', 'accountabilityof.ai', 'biasdetectionof.ai', 'dataprivacyof.ai', 'ethicalgovernanceof.ai'], color: '#8E44AD', lat: 53.4, lng: -0.7 },
  { id: 'productivity', name: 'Productivity Hive', type: 'industry', domains: ['loopfactory.ai', 'socialmediamanager.ai', 'optimobile.ai'], color: '#F39C12', lat: 53.5, lng: -0.8 },
];

export const REGIONAL_HIVES: Hive[] = [
  { id: 'uk', name: 'UK Hive', type: 'regional', domains: ['grabhire.ai', 'muckaway.ai', 'planthire.ai'], color: '#1ABC9C', lat: 54.0, lng: -2.0 },
  { id: 'eu', name: 'EU Hive', type: 'regional', domains: ['councilof.ai', 'csoai.org'], color: '#3498DB', lat: 50.5, lng: 6.0 },
  { id: 'us', name: 'US Hive', type: 'regional', domains: ['proofof.ai', 'agisafe.ai'], color: '#E74C3C', lat: 39.0, lng: -98.5 },
  { id: 'asean', name: 'ASEAN Hive', type: 'regional', domains: ['fishkeeper.ai', 'koikeeper.ai'], color: '#E67E22', lat: 1.3, lng: 103.8 },
];

export const PROTOCOL_HIVES: Hive[] = [
  { id: 'asi-evolve', name: 'ASI-Evolve Hive', type: 'protocol', domains: ['openmoe.ai', 'meok.ai', 'csoai.org'], color: '#D946EF', lat: 52.8, lng: -0.2 },
];

export const DOMAIN_NODES: DomainNode[] = [
  { id: 'meok', name: 'MEOK', domain: 'meok.ai', category: 'Consumer / sovereign AI OS', industryHive: 'governance', readiness: 90, status: 'live', mrr: 0, valuation: '£5M-£10M', lat: 53.2307, lng: -0.5406, color: '#C0392B', githubRepo: 'CSOAI-ORG/meok-ai', mcpEndpoint: 'https://meok.ai/mcp' },
  { id: 'openmoe', name: 'OpenMoE', domain: 'openmoe.ai', category: 'Mixture-of-Experts / open-source AI', industryHive: 'governance', readiness: 55, status: 'beta', mrr: 0, valuation: '£2M-£5M', lat: 37.7749, lng: -122.4194, color: '#E74C3C', githubRepo: 'CSOAI-ORG/openmore.ai', mcpEndpoint: 'https://openmoe.ai/mcp' },
  { id: 'proofof', name: 'Proofof', domain: 'proofof.ai', category: 'Verification / deepfake detection', industryHive: 'governance', readiness: 62, status: 'down', mrr: 0, valuation: '£1.5M-£2.5M', lat: 51.5074, lng: -0.1278, color: '#8E44AD', githubRepo: 'CSOAI-ORG/proofof-ai' },
  { id: 'councilof', name: 'Councilof', domain: 'councilof.ai', category: 'AI governance / BFT council', industryHive: 'governance', readiness: 75, status: 'live', mrr: 0, valuation: '£1.5M-£2.5M', lat: 52.2053, lng: 0.1218, color: '#2980B9', githubRepo: 'CSOAI-ORG/councilof-ai', mcpEndpoint: 'https://councilof.ai/mcp' },
  { id: 'csoai', name: 'CSOAI', domain: 'csoai.org', category: 'Protocol institution', industryHive: 'governance', readiness: 30, status: 'down', mrr: 0, valuation: '—', lat: 51.752, lng: -1.2577, color: '#2C3E50', githubRepo: 'CSOAI-ORG/csoai-org' },
  { id: 'agisafe', name: 'AgiSafe', domain: 'agisafe.ai', category: 'Insurance / AGI safety', industryHive: 'governance', readiness: 22, status: 'live', mrr: 0, valuation: '£10K-£50K', lat: 53.0, lng: -1.0, color: '#D35400', githubRepo: 'CSOAI-ORG/agisafe-ai' },
  { id: 'asisecurity', name: 'ASISecurity', domain: 'asisecurity.ai', category: 'AI security / CISO tooling', industryHive: 'compliance', readiness: 20, status: 'live', mrr: 0, valuation: '£10K-£50K', lat: 53.1, lng: -1.1, color: '#E67E22', githubRepo: 'CSOAI-ORG/asisecurity-ai' },
  { id: 'grabhire', name: 'GrabHire', domain: 'grabhire.ai', category: 'Construction equipment rental', industryHive: 'construction', readiness: 67, status: 'live', mrr: 0, valuation: '£1.5M-£2.5M', lat: 53.2, lng: -0.5, color: '#C0392B', githubRepo: 'CSOAI-ORG/grabhire-ai', mcpEndpoint: 'https://grabhire.ai/mcp' },
  { id: 'muckaway', name: 'MuckAway', domain: 'muckaway.ai', category: 'Construction waste logistics', industryHive: 'construction', readiness: 66, status: 'live', mrr: 0, valuation: '£1.5M-£2.5M', lat: 53.15, lng: -0.45, color: '#E67E22', githubRepo: 'CSOAI-ORG/muckaway-ai', mcpEndpoint: 'https://muckaway.ai/mcp' },
  { id: 'planthire', name: 'PlantHire', domain: 'planthire.ai', category: 'Construction plant hire', industryHive: 'construction', readiness: 40, status: 'live', mrr: 0, valuation: '£10K-£20K', lat: 53.1, lng: -0.4, color: '#F39C12', githubRepo: 'CSOAI-ORG/planthire-ai', mcpEndpoint: 'https://planthire.ai/mcp' },
  { id: 'fishkeeper', name: 'FishKeeper', domain: 'fishkeeper.ai', category: 'Aquaculture / pond management', industryHive: 'agriculture', readiness: 87, status: 'live', mrr: 0, valuation: '£100K-£250K', lat: 53.25, lng: -0.35, color: '#27AE60', githubRepo: 'CSOAI-ORG/fishkeeper-ai', mcpEndpoint: 'https://fishkeeper.ai/mcp' },
  { id: 'koikeeper', name: 'KoiKeeper', domain: 'koikeeper.ai', category: 'Koi pond / aquaculture', industryHive: 'agriculture', readiness: 81, status: 'live', mrr: 0, valuation: '£100K-£250K', lat: 53.3, lng: -0.3, color: '#16A085', githubRepo: 'CSOAI-ORG/koikeeper-ai', mcpEndpoint: 'https://koikeeper.ai/mcp' },
  { id: 'loopfactory', name: 'LoopFactory', domain: 'loopfactory.ai', category: 'Automation / MCP marketplace', industryHive: 'productivity', readiness: 58, status: 'live', mrr: 0, valuation: '£10K-£25K', lat: 52.9, lng: -0.6, color: '#F39C12', githubRepo: 'CSOAI-ORG/loopfactory-ai' },
  { id: 'socialmediamanager', name: 'SocialMediaManager', domain: 'socialmediamanager.ai', category: 'Social media management SaaS', industryHive: 'productivity', readiness: 65, status: 'live', mrr: 0, valuation: '£1.5M-£2.5M', lat: 52.8, lng: -0.7, color: '#E67E22', githubRepo: 'CSOAI-ORG/socialmediamanager-ai' },
  { id: 'optimobile', name: 'Optimobile', domain: 'optimobile.ai', category: 'Fleet / mobile optimization', industryHive: 'productivity', readiness: 65, status: 'down', mrr: 0, valuation: '£1.5M-£2.5M', lat: 52.7, lng: -0.8, color: '#E74C3C', githubRepo: 'CSOAI-ORG/optimobile-ai' },
  { id: 'landlaw', name: 'LandLaw', domain: 'landlaw.ai', category: 'Legal tech / property law', industryHive: 'compliance', readiness: 58, status: 'live', mrr: 0, valuation: '£1.0M-£3.0M', lat: 53.4, lng: -0.2, color: '#8E44AD', githubRepo: 'CSOAI-ORG/landlaw-ai' },
  { id: 'diyhelp', name: 'DIYHelp', domain: 'diyhelp.ai', category: 'DIY / home improvement', industryHive: 'productivity', readiness: 25, status: 'down', mrr: 0, valuation: '£5K-£15K', lat: 53.5, lng: -0.1, color: '#95A5A6', githubRepo: 'CSOAI-ORG/diyhelp-ai' },
  { id: 'pokerhud', name: 'PokerHUD', domain: 'pokerhud.ai', category: 'Poker analytics / HUD', industryHive: 'gaming', readiness: 48, status: 'down', mrr: 0, valuation: '£50K-£100K', lat: 53.6, lng: 0.0, color: '#9B59B6', githubRepo: 'CSOAI-ORG/pokerhud-ai' },
  { id: 'cobolbridge', name: 'COBOLBridge', domain: 'cobolbridge.ai', category: 'COBOL modernization', industryHive: 'compliance', readiness: 30, status: 'down', mrr: 0, valuation: '£10K-£50K', lat: 53.7, lng: 0.1, color: '#7F8C8D', githubRepo: 'CSOAI-ORG/cobolbridge-ai' },
  { id: 'suicidestop', name: 'SuicideStop', domain: 'suicidestop.ai', category: 'Mental health / crisis intervention', industryHive: 'compliance', readiness: 18, status: 'live', mrr: 0, valuation: '£0K-£50K', lat: 53.8, lng: 0.2, color: '#1ABC9C', githubRepo: 'CSOAI-ORG/suicidestop-ai' },
  { id: 'accountabilityof', name: 'AccountabilityOf', domain: 'accountabilityof.ai', category: 'AI accountability', industryHive: 'compliance', readiness: 23, status: 'live', mrr: 0, valuation: '£5K-£15K', lat: 53.9, lng: 0.3, color: '#34495E', githubRepo: 'CSOAI-ORG/accountabilityof-ai' },
  { id: 'biasdetectionof', name: 'BiasDetectionOf', domain: 'biasdetectionof.ai', category: 'AI bias / fairness', industryHive: 'compliance', readiness: 30, status: 'live', mrr: 0, valuation: '£10K-£50K', lat: 54.0, lng: 0.4, color: '#34495E', githubRepo: 'CSOAI-ORG/biasdetectionof-ai' },
  { id: 'dataprivacyof', name: 'DataPrivacyOf', domain: 'dataprivacyof.ai', category: 'GDPR / AI data privacy', industryHive: 'compliance', readiness: 15, status: 'live', mrr: 0, valuation: '£0K-£0K', lat: 54.1, lng: 0.5, color: '#34495E', githubRepo: 'CSOAI-ORG/dataprivacyof-ai' },
  { id: 'ethicalgovernanceof', name: 'EthicalGovernanceOf', domain: 'ethicalgovernanceof.ai', category: 'AI ethics governance', industryHive: 'compliance', readiness: 30, status: 'live', mrr: 0, valuation: '£10K-£50K', lat: 54.2, lng: 0.6, color: '#34495E', githubRepo: 'CSOAI-ORG/ethicalgovernanceof-ai' },
  { id: 'safetyof', name: 'SafetyOf', domain: 'safetyof.ai', category: 'AI safety assessments', industryHive: 'compliance', readiness: 25, status: 'live', mrr: 0, valuation: '£10K-£25K', lat: 54.3, lng: 0.7, color: '#34495E', githubRepo: 'CSOAI-ORG/safetyof-ai' },
  { id: 'transparencyof', name: 'TransparencyOf', domain: 'transparencyof.ai', category: 'AI transparency', industryHive: 'compliance', readiness: 45, status: 'live', mrr: 0, valuation: '£250K-£500K', lat: 54.4, lng: 0.8, color: '#34495E', githubRepo: 'CSOAI-ORG/transparencyof-ai' },
  { id: 'commercialvehicle', name: 'CommercialVehicle', domain: 'commercialvehicle.ai', category: 'Fleet / commercial vehicle mgmt', industryHive: 'productivity', readiness: 26, status: 'live', mrr: 0, valuation: '£10K-£25K', lat: 54.5, lng: 0.9, color: '#F39C12', githubRepo: 'CSOAI-ORG/commercialvehicle-ai' },
];

export const CROSS_LINKS: CrossLink[] = [
  { from: 'fishkeeper', to: 'muckaway', label: 'waste logistics', active: true },
  { from: 'grabhire', to: 'planthire', label: 'equipment share', active: true },
  { from: 'muckaway', to: 'grabhire', label: 'site coordination', active: true },
  { from: 'councilof', to: 'proofof', label: 'audit trail', active: false },
  { from: 'meok', to: 'openmoe', label: 'inference', active: true },
  { from: 'csoai', to: 'councilof', label: 'protocol → product', active: false },
  { from: 'agisafe', to: 'grabhire', label: 'liability cover', active: false },
];

export interface Layer0Link {
  from: string;
  to: string;
  label: string;
  active: boolean;
}

export const LAYER0_LINKS: Layer0Link[] = [
  { from: 'horus-layer0', to: 'construction', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'agriculture', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'governance', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'gaming', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'compliance', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'productivity', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'uk', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'eu', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'us', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'asean', label: 'audit', active: true },
  { from: 'horus-layer0', to: 'asi-evolve', label: 'safety feed', active: true },
  { from: 'asi-evolve', to: 'sov3', label: 'learns from King', active: true },
];

export const GITHUB_STATS = {
  org: 'CSOAI-ORG',
  totalRepos: 535,
  privateRepos: 29,
  archivedRepos: 11,
  openIssues: 13,
  openPRs: 251,
  pagesEnabled: 6,
  releases: 202,
  containerPackages: 8,
};

export const FARM_TELEMETRY = {
  location: { lat: 53.2307, lng: -0.5406, name: 'iokfarm.co.uk' },
  sensors: [
    { id: 'pond-ph', name: 'Pond pH', value: 7.2, unit: '', status: 'normal' },
    { id: 'pond-temp', name: 'Pond Temp', value: 18.5, unit: '°C', status: 'normal' },
    { id: 'pond-o2', name: 'Dissolved O2', value: 8.1, unit: 'mg/L', status: 'normal' },
    { id: 'tunnel-temp', name: 'Tunnel Temp', value: 22.3, unit: '°C', status: 'normal' },
    { id: 'soil-moisture', name: 'Soil Moisture', value: 64, unit: '%', status: 'normal' },
  ],
};

export function getNodeById(id: string): DomainNode | ToolNode | undefined {
  return DOMAIN_NODES.find((d) => d.id === id) || TOOL_NODES.find((t) => t.id === id);
}

export function getHiveById(id: string): Hive | undefined {
  return [...INDUSTRY_HIVES, ...REGIONAL_HIVES, ...PROTOCOL_HIVES].find((h) => h.id === id);
}

export function getEntityPosition(id: string): { lat: number; lng: number } | undefined {
  const domain = DOMAIN_NODES.find((d) => d.id === id);
  if (domain) return { lat: domain.lat, lng: domain.lng };
  const hive = getHiveById(id);
  if (hive) return { lat: hive.lat, lng: hive.lng };
  if (id === KING_HIVE.id) return { lat: KING_HIVE.lat, lng: KING_HIVE.lng };
  return undefined;
}

export function getFiresForDomain(domainId: string): Fire[] {
  return FIRES.filter((f) => f.domainIds.includes(domainId));
}

export function getFireById(id: string): Fire | undefined {
  return FIRES.find((f) => f.id === id);
}
