/**
 * Visual Audit — Screenshot all pages at 3 breakpoints
 *
 * Captures every public page at 375px (mobile), 768px (tablet), 1440px (desktop).
 * Screenshots saved to test-results/visual-audit/
 */

import { test, expect } from '@playwright/test'

const BREAKPOINTS = [
  { name: 'mobile',  width: 375,  height: 812 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
]

const PUBLIC_PAGES = [
  { path: '/',                    name: 'homepage' },
  { path: '/hatch',              name: 'hatch-intro' },
  { path: '/marketplace',        name: 'marketplace' },
  { path: '/characters',         name: 'characters' },
  { path: '/characters/aria',    name: 'character-detail' },
  { path: '/login',              name: 'login' },
  { path: '/register',           name: 'register' },
  { path: '/pricing',            name: 'pricing' },
  { path: '/os/birth-ceremony',  name: 'birth-ceremony' },
]

for (const bp of BREAKPOINTS) {
  test.describe(`Visual Audit — ${bp.name} (${bp.width}px)`, () => {
    test.use({ viewport: { width: bp.width, height: bp.height } })

    for (const page of PUBLIC_PAGES) {
      test(`${page.name} renders at ${bp.width}px`, async ({ page: p }) => {
        await p.goto(page.path, { waitUntil: 'networkidle', timeout: 30_000 })

        // Wait for main content
        await p.waitForTimeout(1000)

        // Check no horizontal overflow
        const bodyWidth = await p.evaluate(() => document.body.scrollWidth)
        const viewportWidth = await p.evaluate(() => window.innerWidth)

        // Screenshot
        await p.screenshot({
          path: `test-results/visual-audit/${page.name}-${bp.name}.png`,
          fullPage: true,
        })

        // Verify no significant horizontal overflow (allow 5px tolerance)
        expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5)
      })
    }
  })
}
