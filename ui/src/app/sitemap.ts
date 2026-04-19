import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meok.ai';
  const routes = [
    // Core
    '', '/start', '/birth', '/pricing', '/faq',
    // OS
    '/os', '/os/control-room',
    // Dashboard
    '/dashboard',
    // Product pillars
    '/os/sovereign-os', '/os/fly-eye', '/os/any-llm', '/os/consciousness',
    '/birth', '/birth/aria', '/birth/sage', '/birth/marcus',
    '/birth/luna', '/birth/gabriel', '/birth/shanti', '/birth/scout',
    '/work', '/work/ralph',
    '/guardian', '/guardian/scam-stop', '/guardian/school-safe', '/guardian/predator-stop',
    '/gaming', '/gaming/live-copilot', '/gaming/strategy', '/gaming/post-game',
    // Marketing pages
    '/personal', '/family', '/for-developers', '/business', '/sovereign',
    // About / Company / CSOAI
    '/about', '/csoai', '/open-source',
    // Legal
    '/privacy', '/terms', '/cookies', '/ai-act', '/accessibility',
    '/help', '/connect',
    // Blog
    '/blog', '/blog/what-is-sovereign-ai', '/blog/maternal-covenant-explained',
    // Labs & MCP
    '/labs', '/labs/mcp', '/labs/mcp/packs', '/labs/mcp/servers',
    '/mcp-dashboard', '/marketplace',
    // Waitlist
    '/waitlist',
  ];
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/pricing' ? 0.9 : 0.8,
  }));
}
