import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meok.ai';

  const highValue = [
    '',
    '/scorecard',
    '/fine-calculator',
    '/audit-prep-bundle',
    '/transparency',
    '/watermark-starter',
    '/article-50-kit',
    '/nis2-de-kit',
    '/dora-belgium-late-fee-recovery',
    '/uk-csr-readiness',
    '/bias-detection',
    '/care-homes',
    '/consulting',
    '/pricing',
    '/refund',
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

  const product = [
    '/os', '/os/control-room',
    '/dashboard',
    '/os/sovereign-os', '/os/fly-eye', '/os/any-llm', '/os/consciousness',
    '/birth', '/birth/aria', '/birth/sage', '/birth/marcus',
    '/birth/luna', '/birth/gabriel', '/birth/shanti', '/birth/scout',
    '/work', '/work/ralph',
    '/guardian', '/guardian/scam-stop', '/guardian/school-safe', '/guardian/predator-stop',
    '/gaming', '/gaming/live-copilot', '/gaming/strategy', '/gaming/post-game',
    '/personal', '/family', '/for-developers', '/business', '/sovereign',
    '/about', '/csoai', '/open-source',
    '/start', '/connect', '/help',
    '/labs', '/labs/mcp', '/labs/mcp/packs', '/labs/mcp/servers',
    '/mcp-dashboard', '/marketplace',
    '/waitlist',
  ];

  const legal = [
    '/privacy', '/terms', '/cookies', '/ai-act', '/accessibility', '/sub-processors',
  ];

  const blogIndex = ['/blog'];

  const blogPosts = [
    '/blog/what-is-sovereign-ai',
    '/blog/maternal-covenant-explained',
    '/blog/sovereign-ai-explained',
    '/blog/byzantine-council-explained',
    '/blog/cognitive-symbiosis-explained',
    '/blog/what-is-mcp',
    '/blog/best-ai-companion-2026',
    '/blog/why-meok',
    '/blog/the-40-day-build',
    '/blog/why-i-built-meok',
    '/blog/ralph-mode-explained',
    '/blog/morning-briefing-explained',
    '/blog/data-sovereignty-ai',
    '/blog/personal-ai-data-sovereignty',
    '/blog/care-based-ai-alignment',
    '/blog/meok-vs-chatgpt',
    '/blog/meok-vs-claude',
    '/blog/meok-vs-replika',
    '/blog/meok-vs-character-ai',
    '/blog/meok-review',
    '/blog/the-future-of-ai-companions',
    '/blog/what-is-an-ai-companion',
    '/blog/ai-memory-explained',
    '/blog/origin-story',
    '/blog/90-day-gtm',
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
    ...merge(euAiActArticles, 0.95, 'weekly'),
    ...merge(verticals, 0.92, 'weekly'),
    ...merge(versusPages, 0.9, 'weekly'),
    ...merge(blogIndex, 0.85, 'daily'),
    ...merge(product, 0.7, 'weekly'),
    ...merge(blogPosts, 0.6, 'weekly'),
    ...merge(legal, 0.4, 'monthly'),
  ] as MetadataRoute.Sitemap;
}
