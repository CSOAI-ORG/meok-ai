import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  let blogUrls: MetadataRoute.Sitemap = []
  try {
    const posts = getAllPosts()
    blogUrls = posts.map(p => ({
      url: `https://meok.ai/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly' as const,
      priority: p.priority === 'high' ? 0.9 : 0.7,
    }))
  } catch {
    // Graceful on build-time errors
  }

  return [
    // Core pages
    { url: 'https://meok.ai', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://meok.ai/product', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/pricing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://meok.ai/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/faq', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://meok.ai/compare', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/maternal-covenant', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog index
    { url: 'https://meok.ai/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // Labs and research
    { url: 'https://meok.ai/labs', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/labs/csga-cai-2026-001', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/labs/csga-cai-2026-002', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/labs/csga-cai-2026-003', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/labs/csga-cai-2026-004', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Product subpages
    { url: 'https://meok.ai/product/companions', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/product/governance', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/product/memory', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Legal
    { url: 'https://meok.ai/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://meok.ai/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },

    // Blog posts (dynamic)
    ...blogUrls,
  ]
}
