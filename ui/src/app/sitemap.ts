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
    { url: 'https://meok.ai/start', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://meok.ai/connect', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/sovereign', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/smb', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/faith', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/community', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://meok.ai/changelog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://meok.ai/download', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/accessibility', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://meok.ai/security', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/care', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/ai-act', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

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
    { url: 'https://meok.ai/dashboard/evolution', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://meok.ai/dashboard/progress', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },

    // ── Labs and research ─────────────────────────────────────────────
    { url: 'https://meok.ai/labs', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/open-source', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/research', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ── What is MEOK / Sovereignty ────────────────────────────────────
    { url: 'https://meok.ai/what-is-meok', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/sovereignty', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ── Maternal Covenant / Family / Ralph ────────────────────────────
    { url: 'https://meok.ai/maternal-covenant', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/family', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/ralph', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ── Blog ──────────────────────────────────────────────────────────
    { url: 'https://meok.ai/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-companion-app-2026', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-elderly', lastModified: new Date('2026-03-29'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-for-neurodivergent', lastModified: new Date('2026-03-28'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/what-is-ai-os', lastModified: new Date('2026-03-29'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-depression', lastModified: new Date('2026-03-28'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-companion-not-ai-girlfriend', lastModified: new Date('2026-03-27'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-companion-for-loneliness', lastModified: new Date('2026-03-27'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-that-remembers-you', lastModified: new Date('2026-03-26'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/personal-ai-assistant', lastModified: new Date('2026-03-25'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/meok-for-anxiety', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-vs-replika', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/meok-review', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-journaling', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-relationships', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-grief-support', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-companion-for-kids', lastModified: new Date('2026-03-25'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-vs-claude', lastModified: new Date('2026-03-26'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/why-meok-never-trains-on-you', lastModified: new Date('2026-03-21'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/the-40-day-build', lastModified: new Date('2026-03-19'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/byzantine-fault-tolerance-your-ai', lastModified: new Date('2026-03-18'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/building-care-into-ai', lastModified: new Date('2026-03-17'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/why-your-ai-should-have-states-of-consciousness', lastModified: new Date('2026-03-16'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/the-memory-problem', lastModified: new Date('2026-03-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-vs-chatgpt', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-companion-for-elderly', lastModified: new Date('2026-03-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-for-adhd', lastModified: new Date('2026-03-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/cognitive-symbiosis', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/the-maternal-covenant', lastModified: new Date('2026-03-21'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/what-is-sovereign-ai', lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/why-your-nan-needs-sovereign-ai', lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/memory-portability', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/sovereign-ai-vs-cloud-ai', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/hydro-neuromorphic', lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/if-ai-becomes-conscious', lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/origin-story', lastModified: new Date('2026-03-18'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/why-i-built-meok', lastModified: new Date('2026-03-17'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/why-meok', lastModified: new Date('2026-03-16'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/byzantine-council', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/byzantine-council-explained', lastModified: new Date('2026-03-21'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/archetypes-guide', lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/ralph-mode-guide', lastModified: new Date('2026-03-19'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/guardian-family-safety', lastModified: new Date('2026-03-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-gaming-companion', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/personal-vs-cloud-ai', lastModified: new Date('2026-03-21'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/emotional-lock-in', lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/morning-brief-guide', lastModified: new Date('2026-03-19'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/senior-mode-guide', lastModified: new Date('2026-03-18'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/faith-companion', lastModified: new Date('2026-03-17'), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://meok.ai/blog/privacy-covenant', lastModified: new Date('2026-03-18'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/open-source-release', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/90-day-gtm', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://meok.ai/blog/meok-vs-character-ai', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-autism', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/best-ai-productivity-2026', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/meok-vs-pi-ai', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-ptsd', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/meok-vs-gemini', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-students', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/what-is-mcp', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-seniors-uk', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/sovereign-ai-uk', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/meok-vs-copilot', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-mental-health-2026', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-companion-for-men', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/personal-data-rights-ai', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-freelancers', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-chronic-illness', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/what-is-byzantine-consensus', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-carers', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-vs-woebot', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-small-business', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/how-sovereign-ai-works', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-anxiety', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/what-is-an-ai-companion', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-veterans', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-addiction-recovery', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-companion-uk', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-companion-vs-therapist', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-memory-explained', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/data-sovereignty-ai', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-insomnia', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-teens', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-parents', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-relationship-anxiety', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-for-remote-workers', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-companion-for-menopause', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/sovereignty-explained', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-entrepreneurs', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-single-parents', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-chronic-fatigue', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-creative-professionals', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-vs-notion-ai', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-bipolar', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/meok-for-students', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/what-is-morning-briefing', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-grief-counselling', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-companion-for-autism', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-home-workers', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-ocd', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-social-anxiety', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-chronic-pain', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-eating-disorders', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://meok.ai/blog/ai-for-older-adults', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-burnout', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/free-ai-companion', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-life-coach', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-chatbot-with-memory', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/best-ai-chatbot-uk', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-companion-for-women', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/what-is-care-based-ai', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-self-improvement', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/meok-vs-perplexity', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/meok-vs-microsoft-copilot', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-menopause', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-for-weight-loss', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-productivity-app', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://meok.ai/blog/ai-companion-app', lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.9 },

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
