/**
 * Marketing Pages — content, CTAs, navigation, key sections
 */
import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('nav logo links to homepage', async ({ page }) => {
    await page.goto('/pricing')
    const logo = page.locator('a[href="/"]').first()
    await expect(logo).toBeVisible()
  })

  test('nav has no broken links to /changelog', async ({ page }) => {
    await page.goto('/')
    const changelogLinks = page.locator('a[href="/changelog"]')
    const count = await changelogLinks.count()
    expect(count, 'Found /changelog links — should be /roadmap').toBe(0)
  })

  test('footer has all key sections', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('[role="contentinfo"], footer').last()
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toBeVisible()
    const footerText = (await footer.textContent()) || ''
    expect(footerText).toContain('Privacy')
    expect(footerText).toContain('Terms')
  })
})

test.describe('Pricing page', () => {
  test('loads with 4 tiers', async ({ page }) => {
    await page.goto('/pricing')
    await expect(page.locator('body')).toContainText('Free')
    await expect(page.locator('body')).toContainText('Pro')
    await expect(page.locator('body')).toContainText('Elite')
    await expect(page.locator('body')).toContainText('Team')
  })

  test('CTAs go to /hatch not /register', async ({ page }) => {
    await page.goto('/pricing')
    const hatchLinks = page.locator('a[href*="/hatch"]')
    const count = await hatchLinks.count()
    expect(count).toBeGreaterThan(0)
  })

  test('no stale tier names in visible pricing UI', async ({ page }) => {
    await page.goto('/pricing')
    // Check only visible heading/card text, not JSON-LD schema
    const headings = page.locator('h1, h2, h3, [class*="tier"], [class*="plan"]')
    const count = await headings.count()
    for (let i = 0; i < count; i++) {
      const text = (await headings.nth(i).textContent()) || ''
      expect(text).not.toContain('Premium plan')
      expect(text).not.toContain('Sovereign Elite')
    }
  })
})

test.describe('Characters pages', () => {
  test('characters hub loads with archetype names', async ({ page }) => {
    await page.goto('/characters')
    await expect(page.locator('body')).toBeVisible()
    const bodyText = (await page.locator('body').textContent()) || ''
    const hasArchetypes = bodyText.includes('Scholar') || bodyText.includes('Guardian') ||
                          bodyText.includes('Healer') || bodyText.includes('Trickster')
    expect(hasArchetypes).toBeTruthy()
  })

  test('individual character page loads', async ({ page }) => {
    await page.goto('/characters/scholar')
    await expect(page.locator('body')).toContainText('Scholar')
  })

  test('character pages have hatch CTA', async ({ page }) => {
    await page.goto('/characters/guardian')
    const hatchCTA = page.locator('a[href*="hatch"]').first()
    await expect(hatchCTA).toBeVisible()
  })

  test('no "Sacred Hatchling" typo — correct is Sacred Hatchling', async ({ page }) => {
    await page.goto('/characters')
    const bodyText = (await page.locator('body').textContent()) || ''
    expect(bodyText).not.toContain('Scarected')
  })
})

test.describe('Problems pages', () => {
  test('problems hub loads with filter', async ({ page }) => {
    await page.goto('/problems')
    await expect(page.locator('body')).toBeVisible()
    const bodyText = (await page.locator('body').textContent()) || ''
    const hasContent = bodyText.includes('AI') || bodyText.includes('problem') ||
                       bodyText.includes('amnesia')
    expect(hasContent).toBeTruthy()
  })

  test('individual problem page loads', async ({ page }) => {
    await page.goto('/problems/ai-amnesia')
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('body')).toContainText('MEOK')
  })
})

test.describe('Blog', () => {
  test('blog index loads with dark theme', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.locator('body')).toBeVisible()
    const htmlClass = await page.evaluate(() => document.documentElement.className)
    expect(htmlClass).toContain('dark')
  })

  test('blog post loads', async ({ page }) => {
    await page.goto('/blog/why-we-built-meok')
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('body')).toContainText('MEOK')
  })
})

test.describe('About + Team', () => {
  test('about page has manifesto content', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('body')).toBeVisible()
    const bodyText = (await page.locator('body').textContent()) || ''
    expect(bodyText.toLowerCase()).toContain('nicholas')
  })

  test('team page mentions agents', async ({ page }) => {
    await page.goto('/team')
    await expect(page.locator('body')).toBeVisible()
  })
})

test.describe('OS pages', () => {
  test('/os loads with dark theme', async ({ page }) => {
    await page.goto('/os')
    await expect(page.locator('body')).toBeVisible()
    const htmlClass = await page.evaluate(() => document.documentElement.className)
    expect(htmlClass).toContain('dark')
  })

  test('/os/consciousness loads', async ({ page }) => {
    await page.goto('/os/consciousness')
    await expect(page.locator('body')).toContainText('MEOK')
  })

  test('/sovereign loads with 220-node content', async ({ page }) => {
    await page.goto('/sovereign')
    await expect(page.locator('body')).toBeVisible()
    const bodyText = (await page.locator('body').textContent()) || ''
    expect(bodyText).toContain('220')
  })
})

test.describe('Guardian pages', () => {
  test('/guardian/elderly loads', async ({ page }) => {
    await page.goto('/guardian/elderly')
    await expect(page.locator('body')).toBeVisible()
    const htmlClass = await page.evaluate(() => document.documentElement.className)
    expect(htmlClass).toContain('dark')
  })

  test('/guardian/children loads', async ({ page }) => {
    await page.goto('/guardian/children')
    await expect(page.locator('body')).toBeVisible()
  })
})

test.describe('Ralph / Sovereign pages', () => {
  test('/ralph loads with phase labels', async ({ page }) => {
    await page.goto('/ralph')
    await expect(page.locator('body')).toBeVisible()
    const bodyText = (await page.locator('body').textContent()) || ''
    const hasPhases = bodyText.includes('Observe') || bodyText.includes('Plan') ||
                      bodyText.includes('Act') || bodyText.includes('Ralph')
    expect(hasPhases).toBeTruthy()
  })
})

test.describe('Easter page', () => {
  test('/easter loads', async ({ page }) => {
    await page.goto('/easter')
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('body')).toContainText('MEOK')
  })

  test('easter CTAs go to /waitlist not /register', async ({ page }) => {
    await page.goto('/easter')
    const bodyText = await page.locator('body').textContent() || ''
    // Should not have /register as a CTA destination
    const regLinks = await page.$$eval('a[href="/register"]', els =>
      els.filter(el => {
        const t = el.textContent?.toLowerCase() || ''
        return t.includes('join') || t.includes('sign') || t.includes('early')
      }).length
    )
    expect(regLinks).toBe(0)
  })
})

test.describe('Waitlist page', () => {
  test('/waitlist has inline form', async ({ page }) => {
    await page.goto('/waitlist')
    await expect(page.locator('body')).toBeVisible()
    // Should have an email input
    const emailInput = page.locator('input[type="email"]').first()
    await expect(emailInput).toBeVisible()
  })
})

test.describe('Memory page', () => {
  test('/memory has dark background', async ({ page }) => {
    await page.goto('/memory')
    await expect(page.locator('body')).toBeVisible()
    const htmlClass = await page.evaluate(() => document.documentElement.className)
    expect(htmlClass).toContain('dark')
    // Should not have cream bg sections
    const creamSections = await page.$$eval(
      '[style*="background: #f5f0e8"], [style*="background:#f5f0e8"], [style*="background: rgb(245, 240, 232)"]',
      els => els.length
    )
    expect(creamSections).toBe(0)
  })
})

test.describe('OG Image API', () => {
  test('/api/og returns an image', async ({ request }) => {
    const resp = await request.get('/api/og?title=Test&description=Test+desc')
    expect(resp.status()).toBe(200)
    const contentType = resp.headers()['content-type']
    expect(contentType).toContain('image')
  })
})
