import { MetadataRoute } from 'next';
import { readdirSync } from 'fs';
import { join } from 'path';

/**
 * Walk src/app at build time and return every static public route that has a
 * page.tsx. Excludes dynamic segments, route groups, and private/auth/admin
 * areas. Wrapped by the caller in try/catch so a discovery failure can never
 * break the build — it just falls back to the hand-curated lists below.
 */
function discoverPublicRoutes(): string[] {
  const appDir = join(process.cwd(), 'src', 'app');
  const routes: string[] = [];

  // Drop a route if any of these match. Keeps dashboards, auth, archives,
  // and system/internal pages out of the index.
  const DENY_EXACT = new Set([
    '/terminal', '/publickey', '/register', '/buy', '/download', '/connect',
    '/feedback', '/grid', '/legion', '/hatch', '/live', '/start', '/self-audit',
  ]);
  const DENY_PREFIX = [
    '/dashboard', '/admin', '/api', '/work', '/sign-in', '/sign-up', '/login',
    '/checkout', '/settings', '/account', '/billing', '/onboarding', '/chat',
    '/register/', '/sov3', '/investors', '/os/_archive', '/os/settings',
  ];
  const denied = (r: string) =>
    DENY_EXACT.has(r) ||
    DENY_PREFIX.some((p) => r === p || r.startsWith(p + '/') || r.startsWith(p)) ||
    /-dashboard$/.test(r) ||           // *-dashboard
    /\/_/.test('/' + r.slice(1)) ||    // any private _segment
    r.includes('[');                    // dynamic

  const walk = (dir: string, prefix: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      if (name.startsWith('[') || name.startsWith('@') || name.startsWith('_') || name.startsWith('(')) {
        // dynamic, parallel, private, or route-group dirs — skip for discovery
        if (name.startsWith('(')) {
          // route group: descend but don't add the group name to the path
          walk(join(dir, name), prefix);
        }
        continue;
      }
      const route = `${prefix}/${name}`;
      const childDir = join(dir, name);
      const children = readdirSync(childDir);
      if (children.includes('page.tsx') && !denied(route)) routes.push(route);
      walk(childDir, route);
    }
  };

  walk(appDir, '');
  return routes;
}

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

  const curated = [
    highValue, geoAuthority, euAiActArticles, verticals, newPublicPages,
    verticalConsulting, mcpLandingPages, industryHubs, mcpServers, versusPages,
    blogIndex, product, blogPosts, legal,
  ];

  const curatedEntries: MetadataRoute.Sitemap = [
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
  ];

  // Auto-discovered public routes not already curated above. Build-time fs
  // walk; never throws — on failure we ship only the curated list (prior
  // behaviour). Blog posts get a slightly higher priority than other tail pages.
  let discoveredEntries: MetadataRoute.Sitemap = [];
  try {
    const curatedSet = new Set(curated.flat().map((r) => r || '/'));
    const discovered = discoverPublicRoutes().filter((r) => !curatedSet.has(r));
    const blogTail = discovered.filter((r) => r.startsWith('/blog/'));
    const otherTail = discovered.filter((r) => !r.startsWith('/blog/'));
    discoveredEntries = [
      ...merge(blogTail, 0.6, 'weekly'),
      ...merge(otherTail, 0.5, 'monthly'),
    ];
  } catch {
    discoveredEntries = [];
  }

  return [...curatedEntries, ...discoveredEntries] as MetadataRoute.Sitemap;
}
