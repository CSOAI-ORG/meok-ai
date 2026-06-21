import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meok.ai';

  const highValue = [
    '',
    '/scorecard',
    '/fine-calculator',
    '/audit-prep-bundle',
    '/eu-ai-act-compliance-tool',
    '/mcp/eu-ai-act-compliance', '/mcp/bias-detection', '/mcp/ai-bom',
    '/watermark-starter',
    '/article-50-kit',
    '/article-50-marking',
    '/article-50-transparency',
    '/eu-code-of-practice',
    '/code-of-practice-2nd-draft',
    '/eu-ai-act',
    '/ai-act',
    '/gdpr',
    '/soc2',
    '/iso-27001',
    '/iso-42001',
    '/cra',
    '/nist-ai-rmf',
    '/hipaa',
    '/guides',
    '/nis2-de-kit',
    '/nis2-nl',
    '/dora-belgium-late-fee-recovery',
    '/uk-csr-readiness',
    '/bias-detection',
    '/care-homes',
    '/consulting',
    '/pricing',
    '/refund',
    '/transparency',
  ];

  const euAiActArticles = [
    '/eu-ai-act',
    '/eu-ai-act/article-4',
    '/eu-ai-act/article-5',
    '/eu-ai-act/article-9',
    '/eu-ai-act/article-10',
    '/eu-ai-act/article-13',
    '/eu-ai-act/article-14',
    '/eu-ai-act/article-15',
    '/eu-ai-act/article-26',
    '/eu-ai-act/article-43',
    '/eu-ai-act/article-50',
    '/eu-ai-act/article-72',
    '/eu-ai-act/article-99',
  ];

  const verticals = [
    '/eu-ai-act-for-fintech',
    '/eu-ai-act-for-hr-tech',
    '/eu-ai-act-for-healthcare',
    '/eu-ai-act-for-edtech',
    '/eu-ai-act-for-legal-tech',
    '/eu-ai-act-for-saas',
    '/eu-ai-act-for-ai-startups',
    '/uk-ai-bill-2026',
    '/dora',
    '/newsletter',
    '/partners',
    '/scorecard/embed',
    '/trust',
    '/security',
    '/compliance',
    '/compliance-audit',
    '/attestations',
    '/methodology',
    '/protocols',
  ];

  const versusPages = [
    '/vs-vanta',
    '/vs-drata',
    '/vs-sprinto',
    '/vs-auditboard',
    '/vs-servicenow-grc',
    '/vs-credo-ai',
    '/vs-holistic-ai',
    '/vs-comp-ai',
    '/vs-onetrust',
  ];

  const verticalConsulting = [
    '/verticals',
    '/verticals/construction',
    '/verticals/waste-management',
    '/verticals/healthcare',
  ];

  const mcpLandingPages = [
    '/mcp/watermark',
    '/mcp/cra-classifier',
    '/mcp/ai-bom',
  ];

  const product = [
    '/labs', '/labs/mcp', '/labs/mcp/packs', '/labs/mcp/servers',
    '/tools',
    '/integrations',
    '/resources',
    '/docs',
    '/case-studies',
    '/trust',
    '/smb',
  ];

  const legal = [
    '/sub-processors',
  ];

  const blogIndex = ['/blog'];

  const blogPosts = [
    '/blog/article-50-watermarking-guide',
    '/blog/digital-omnibus-delay-2026',
    '/blog/nis2-germany-deadline-2026',
    '/blog/38-governance-mcps-in-3-weeks',
    '/blog/article-50-c2pa-sigstore-moat',
  ];

  // All 38 governance/A2A/trade/cyber/industry MCP detail pages
  const mcpServers = [
    '/mcp/eu-ai-act-compliance', '/mcp/bias-detection', '/mcp/ai-bom',
    '/mcp/dora-compliance', '/mcp/nis2-compliance', '/mcp/cra-compliance',
    '/mcp/ai-incident-reporting', '/mcp/dora-nis2-crosswalk',
    '/mcp/agent-prompt-injection-firewall', '/mcp/agent-handoff-certified',
    '/mcp/agent-policy-enforcement', '/mcp/agent-audit-logger',
    '/mcp/uk-ai-bill-compliance', '/mcp/agent-rate-limiter',
    '/mcp/watermarking-authenticity', '/mcp/agent-data-residency',
    '/mcp/haulage-uk-compliance', '/mcp/skip-hire-ai', '/mcp/construction-iso-19650',
    '/mcp/nrswa-ai', '/mcp/chas-elite-prep', '/mcp/crane-hire-cpcs',
    '/mcp/concrete-pump-cpa', '/mcp/mica-crypto', '/mcp/fsa-food-safety',
    '/mcp/mdr-medical-device', '/mcp/fda-samd', '/mcp/coppa-ferpa',
    '/mcp/basel-ai-overlay', '/mcp/mifid-ii-ai', '/mcp/aml-ai',
    '/mcp/cisa-kev', '/mcp/sbom-cyclonedx', '/mcp/mitre-attack',
    '/mcp/mitre-atlas', '/mcp/slsa-supply-chain', '/mcp/sigstore-cosign',
    '/mcp/cobol-bridge',
    // Care vertical (live)
    '/mcp/care-home-cqc',
    // NOTE: gos-claim-validator, mhra-samd-optometry, dispense-record, domiciliary-care, optical-care-home-bridge
    // exist as marketplace dirs but are not yet published/in CATALOG — removed from sitemap to avoid 404s.
  ];

  const industryHubs = [
    '/medtech', '/fintech', '/cybersec', '/kidsai',
  ];

  // GEO / authority: the canonical ecosystem map + "best AI for X" answer pages.
  const geoAuthority = [
    '/constellation',
    '/sponsors',
    '/developers',
    '/developers/sdk-pro',
    '/optimobile-gos',
    '/council/certifications',
    '/best-ai-for-construction-logistics',
    '/best-ai-for-ai-safety-certification',
    '/best-ai-for-aquaculture',
    '/best-sovereign-ai-os',
  ];

  // New public pages shipped 2026-06-15 (all now carry JSON-LD structured data).
  const newPublicPages = [
    '/universe', '/dome', '/pioneer', '/go',
    // Vertical landers
    '/aquaponics', '/charity', '/construction', '/food-safety', '/haulage',
    '/hr-tech', '/legaltech', '/saas', '/waste-mgmt', '/smart-agri', '/smart-home', '/edtech',
    // Products / compliance
    '/agisafe', '/attestations', '/cobolbridge', '/cobol-bridge-audit', '/compliance',
    '/mcp-stack', '/marketplace', '/features', '/agent-orchestration', '/ai-squad', '/master-stack',
    '/product/enterprise', '/product/security',
    // Content / trust / company
    '/changelog', '/security', '/team', '/protocols', '/methodology', '/charter',
    '/csoai', '/contact', '/care', '/open-source', '/registry', '/architecture',
    '/press-kit', '/achievements', '/distributions', '/fund', '/jarvis',
  ];

  const today = new Date();

  const merge = (routes: string[], priority: number, freq: 'daily' | 'weekly' | 'monthly') =>
    routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: today,
      changeFrequency: freq,
      priority,
    }));

  return [
    ...merge(highValue, 1.0, 'weekly'),
    ...merge(geoAuthority, 0.95, 'weekly'),
    ...merge(euAiActArticles, 0.95, 'weekly'),
    ...merge(verticals, 0.92, 'weekly'),
    ...merge(newPublicPages, 0.9, 'weekly'),
    ...merge(verticalConsulting, 0.92, 'weekly'),
    ...merge(mcpLandingPages, 0.92, 'weekly'),
    ...merge(industryHubs, 0.92, 'weekly'),
    ...merge(mcpServers, 0.88, 'weekly'),
    ...merge(versusPages, 0.9, 'weekly'),
    ...merge(blogIndex, 0.85, 'daily'),
    ...merge(product, 0.7, 'weekly'),
    ...merge(blogPosts, 0.6, 'weekly'),
    ...merge(legal, 0.4, 'monthly'),
  ] as MetadataRoute.Sitemap;
}
