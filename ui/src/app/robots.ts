import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/terminal/', '/api/', '/birth/', '/chat/', '/settings/'],
      },
      // Explicitly allow AI crawlers to index research and editorial content
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'anthropic-ai', 'Googlebot-Extended'],
        allow: ['/', '/product', '/labs', '/blog', '/about', '/faq', '/compare', '/maternal-covenant'],
        disallow: ['/dashboard/', '/terminal/', '/api/'],
      },
    ],
    sitemap: 'https://meok.ai/sitemap.xml',
    host: 'https://meok.ai',
  }
}
