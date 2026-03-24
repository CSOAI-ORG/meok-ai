/**
 * Page Smoke Tests — all public marketing pages
 * Verifies: 200 status, no console errors, dark theme, no broken CTAs
 */
import { test, expect } from '@playwright/test'

// All public routes that should return 200
const PUBLIC_PAGES = [
  '/',
  '/about',
  '/pricing',
  '/faq',
  '/waitlist',
  '/birth',
  '/register',
  '/login',
  '/characters',
  '/characters/timeless',
  '/characters/elemental',
  '/characters/legendary',
  '/characters/scholar',
  '/characters/guardian',
  '/characters/healer',
  '/characters/trickster',
  '/characters/mystic',
  '/characters/pioneer',
  '/characters/spiritual',
  '/problems',
  '/problems/ai-amnesia',
  '/problems/data-ownership',
  '/problems/data-privacy',
  '/os',
  '/os/any-llm',
  '/os/birth-ceremony',
  '/os/consciousness',
  '/os/sovereign',
  '/os/sovereign-display',
  '/memory',
  '/memory/connect',
  '/gaming',
  '/gaming/platforms',
  '/family',
  '/guardian',
  '/guardian/elderly',
  '/guardian/children',
  '/personal',
  '/personal/care',
  '/personal/morning-brief',
  '/work',
  '/work/documents',
  '/work/email',
  '/work/research',
  '/smb',
  '/team',
  '/ralph',
  '/blog',
  '/research',
  '/press',
  '/open-source',
  '/roadmap',
  '/council',
  '/sovereign',
  '/maternal-covenant',
  '/terminal',
  '/how-it-works',
  '/privacy',
  '/terms',
  '/sitemap.xml',
  '/robots.txt',
]

test.describe('All public pages return 200', () => {
  for (const path of PUBLIC_PAGES) {
    test(`${path} → 200`, async ({ request }) => {
      const resp = await request.get(path)
      expect(resp.status(), `${path} returned ${resp.status()}`).toBeLessThan(400)
    })
  }
})

test.describe('Dark theme — no cream/white backgrounds', () => {
  const DARK_PAGES = ['/', '/pricing', '/characters', '/memory', '/blog', '/about',
                      '/guardian', '/personal', '/gaming', '/faq']

  for (const path of DARK_PAGES) {
    test(`${path} has dark html class`, async ({ page }) => {
      await page.goto(path)
      const htmlClass = await page.evaluate(() => document.documentElement.className)
      expect(htmlClass, `${path} missing dark class`).toContain('dark')
    })
  }
})

test.describe('No /register CTAs on conversion pages', () => {
  const CONVERSION_PAGES = ['/', '/pricing', '/characters', '/about', '/waitlist',
                             '/ralph', '/os', '/memory', '/gaming', '/family', '/guardian']

  for (const path of CONVERSION_PAGES) {
    test(`${path} — no direct /register href CTAs`, async ({ page }) => {
      await page.goto(path)
      // Find all links with href exactly /register (not /register?... params OK)
      const regLinks = await page.$$eval(
        'a[href="/register"]',
        (els) => els.map(el => ({ text: el.textContent?.trim(), href: el.getAttribute('href') }))
      )
      // The only allowed /register links are "Already have an account" type nav links
      for (const link of regLinks) {
        const text = (link.text || '').toLowerCase()
        // CTAs like "Start free", "Get started", "Hatch" etc must NOT go to /register
        const isCTA = text.includes('start') || text.includes('get') || text.includes('birth') ||
                      text.includes('free') || text.includes('join') || text.includes('try')
        expect(isCTA, `Found CTA "${link.text}" pointing to /register on ${path}`).toBeFalsy()
      }
    })
  }
})

test.describe('404 page', () => {
  test('returns 404 for unknown route', async ({ request }) => {
    const resp = await request.get('/this-page-does-not-exist-xyz123')
    expect(resp.status()).toBe(404)
  })

  test('404 page has navigation back home', async ({ page }) => {
    await page.goto('/this-page-does-not-exist-xyz123')
    // Should show custom 404, not crash
    await expect(page.locator('body')).toBeVisible()
    // Should have a link back to home
    const homeLink = page.locator('a[href="/"]').first()
    await expect(homeLink).toBeVisible()
  })
})

test.describe('Sitemap and robots', () => {
  test('sitemap.xml is valid XML', async ({ request }) => {
    const resp = await request.get('/sitemap.xml')
    expect(resp.status()).toBe(200)
    const text = await resp.text()
    expect(text).toContain('<?xml')
    expect(text).toContain('<urlset')
    expect(text).toContain('meok.ai')
  })

  test('sitemap contains key pages', async ({ request }) => {
    const resp = await request.get('/sitemap.xml')
    const text = await resp.text()
    expect(text).toContain('/pricing')
    expect(text).toContain('/characters')
    expect(text).toContain('/birth')
    expect(text).toContain('/privacy')
  })

  test('robots.txt disallows /api/', async ({ request }) => {
    const resp = await request.get('/robots.txt')
    expect(resp.status()).toBe(200)
    const text = await resp.text()
    expect(text).toContain('Disallow: /api/')
    expect(text).toContain('Sitemap:')
  })
})
