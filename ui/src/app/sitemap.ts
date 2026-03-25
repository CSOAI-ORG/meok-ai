import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.meok.ai';
  const routes = [
    '', '/pricing', '/characters', '/guardian', '/about', '/help', '/feedback',
    '/privacy', '/terms', '/faq', '/changelog', '/roadmap', '/research',
    '/work', '/gaming', '/family', '/personal', '/for-developers', '/for-families',
    '/guardian/scam-stop', '/guardian/relationship-shield', '/guardian/social-guardian',
    '/guardian/elderly', '/guardian/children',
    '/birth', '/hatch', '/onboarding', '/registry',
  ];
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/pricing' ? 0.9 : 0.7,
  }));
}
