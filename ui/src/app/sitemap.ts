import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meok.ai';
  const routes = [
    // Core
    '', '/birth', '/pricing', '/characters',
    // OS
    '/os', '/os/control-room',
    // Dashboard
    '/dashboard',
    // Product pillars
    '/os/sovereign-os', '/os/fly-eye', '/os/any-llm', '/os/consciousness',
    '/characters/aria', '/characters/sage', '/characters/marcus',
    '/characters/luna', '/characters/gabriel', '/characters/shanti', '/characters/scout',
    '/work', '/work/orion', '/work/riri', '/work/hourman', '/work/ralph',
    '/guardian', '/guardian/children', '/guardian/seniors', '/guardian/preparedness',
    '/guardian/scam-stop', '/guardian/school-safe', '/guardian/predator-stop',
    '/gaming', '/gaming/coaching', '/gaming/stats', '/gaming/community',
    // Marketing pages
    '/personal', '/family', '/families', '/for-developers', '/business', '/sovereign',
    // About / Company
    '/about', '/about/labs', '/about/roadmap', '/about/press',
    // Legal
    '/privacy', '/terms', '/cookies', '/ai-act', '/accessibility',
    '/faq', '/help', '/connect', '/compare',
    // Blog categories
    '/blog', '/blog/cognitive-symbiosis', '/blog/hydro-neuromorphic',
    '/blog/what-is-sovereign-ai', '/blog/maternal-covenant-explained',
    // MCP & Open Source
    '/mcp-dashboard', '/open-source', '/marketplace',
    // Onboarding
    '/hatch', '/onboarding', '/registry',
  ];
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/pricing' ? 0.9 : 0.8,
  }));
}
