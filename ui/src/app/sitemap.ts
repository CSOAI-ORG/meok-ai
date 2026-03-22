import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { PROBLEMS } from '@/data/problems'
import { CHARACTERS } from '@/data/characters'

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
    // ── Core / marketing ───────────────────────────────────────────────
    { url: 'https://meok.ai', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://meok.ai/easter', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://meok.ai/birth', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/register', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/pricing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://meok.ai/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/faq', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/compare', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/how-it-works', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/product', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/roadmap', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://meok.ai/waitlist', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://meok.ai/hatch', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://meok.ai/connect', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/sovereign', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/smb', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ── Live / team / press ───────────────────────────────────────────
    { url: 'https://meok.ai/live', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://meok.ai/team', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/press', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ── Problems ──────────────────────────────────────────────────────
    { url: 'https://meok.ai/problems', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ── OS subpages ───────────────────────────────────────────────────
    { url: 'https://meok.ai/os', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/os/birth-ceremony', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://meok.ai/os/any-llm', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://meok.ai/os/consciousness', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://meok.ai/os/sovereign-display', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://meok.ai/os/sovereign', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // ── Personal ──────────────────────────────────────────────────────
    { url: 'https://meok.ai/personal', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/personal/care', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/personal/morning-brief', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ── Work ──────────────────────────────────────────────────────────
    { url: 'https://meok.ai/work', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/work/documents', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/work/email', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/work/research', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ── Terminal ──────────────────────────────────────────────────────
    { url: 'https://meok.ai/terminal', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ── Guardian ──────────────────────────────────────────────────────
    { url: 'https://meok.ai/guardian', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/guardian/elderly', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/guardian/children', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ── Gaming ────────────────────────────────────────────────────────
    { url: 'https://meok.ai/gaming', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/gaming/live-copilot', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/gaming/post-game', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/gaming/strategy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/gaming/platforms', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ── Characters ────────────────────────────────────────────────────
    { url: 'https://meok.ai/characters', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/characters/legendary', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/characters/timeless', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://meok.ai/characters/elemental', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ── Product sub-pages ─────────────────────────────────────────────
    { url: 'https://meok.ai/product/characters', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/product/family-guardian', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ── Council / memory ──────────────────────────────────────────────
    { url: 'https://meok.ai/council', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/memory/connect', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ── Dashboard ─────────────────────────────────────────────────────
    { url: 'https://meok.ai/dashboard/chat', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ── Labs and research ─────────────────────────────────────────────
    { url: 'https://meok.ai/labs', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/open-source', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://meok.ai/research', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://meok.ai/labs/csga-cai-2026-001', lastModified: new Date('2026-02-15'), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://meok.ai/labs/csga-cai-2026-002', lastModified: new Date('2026-03-15'), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://meok.ai/labs/csga-cai-2026-003', lastModified: new Date('2026-03-19'), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://meok.ai/labs/csga-cai-2026-004', lastModified: new Date('2026-03-20'), changeFrequency: 'yearly', priority: 0.8 },

    // ── Maternal Covenant / Family / Ralph ────────────────────────────
    { url: 'https://meok.ai/maternal-covenant', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/family', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/ralph', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ── Blog ──────────────────────────────────────────────────────────
    { url: 'https://meok.ai/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // ── Legal ─────────────────────────────────────────────────────────
    { url: 'https://meok.ai/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://meok.ai/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://meok.ai/cookies', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },

    // ── Problem detail pages (dynamic) ────────────────────────────────
    ...PROBLEMS.map(p => ({
      url: `https://meok.ai/problems/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // ── Blog posts (dynamic) ──────────────────────────────────────────
    ...blogUrls,

    // ── Character detail pages (dynamic) ─────────────────────────────
    ...CHARACTERS.map(c => ({
      url: `https://meok.ai/characters/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
