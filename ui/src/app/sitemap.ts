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
