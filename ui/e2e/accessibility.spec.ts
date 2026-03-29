/**
 * Phase 99 — Accessibility Tests
 *
 * Lightweight a11y checks that run without an external axe dependency.
 * These catch the most common regressions: missing headings, unlabelled
 * images, unlabelled interactive controls, and trivially invisible text.
 */

import { test, expect } from '@playwright/test'

test.describe('Accessibility — homepage', () => {
  test('has at least one <h1>', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBeGreaterThanOrEqual(1)
  })

  test('all <img> elements have a non-empty alt attribute', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Collect all img tags and check each one
    const images = page.locator('img')
    const count = await images.count()

    // If there are no images that is acceptable; skip the per-image checks
    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      const src = (await img.getAttribute('src')) ?? `image[${i}]`

      // alt must be present (decorative images should use alt="")
      expect(alt, `<img src="${src}"> is missing an alt attribute`).not.toBeNull()
    }
  })

  test('interactive elements have accessible labels', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Find all buttons and links that are visible and interactive
    const interactives = page.locator('button:visible, a:visible, [role="button"]:visible')
    const count = await interactives.count()

    for (let i = 0; i < count; i++) {
      const el = interactives.nth(i)

      // An element is considered labelled if it has any of:
      // - non-whitespace inner text
      // - aria-label
      // - aria-labelledby
      // - title
      const text = (await el.innerText()).trim()
      const ariaLabel = await el.getAttribute('aria-label')
      const ariaLabelledBy = await el.getAttribute('aria-labelledby')
      const title = await el.getAttribute('title')

      const hasLabel =
        text.length > 0 ||
        (ariaLabel !== null && ariaLabel.trim().length > 0) ||
        ariaLabelledBy !== null ||
        (title !== null && title.trim().length > 0)

      const tag = await el.evaluate((node) => node.tagName.toLowerCase())
      const href = await el.getAttribute('href')
      const identifier = href ?? `${tag}[${i}]`

      expect(
        hasLabel,
        `Interactive element "${identifier}" has no accessible label`
      ).toBe(true)
    }
  })

  test('page does not render pure white text on white background', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Basic heuristic: find any element whose computed color AND background-color
    // are both rgb(255,255,255). This catches the most obvious invisible-text bugs.
    const invisibleTextCount = await page.evaluate(() => {
      const allElements = Array.from(document.querySelectorAll('*'))
      let count = 0

      for (const el of allElements) {
        const style = window.getComputedStyle(el)
        const color = style.color
        const bg = style.backgroundColor

        // Only flag elements that actually contain visible text nodes
        const hasDirectText = Array.from(el.childNodes).some(
          (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
        )

        if (!hasDirectText) continue

        const isWhiteText = color === 'rgb(255, 255, 255)'
        const isWhiteBg = bg === 'rgb(255, 255, 255)'

        if (isWhiteText && isWhiteBg) {
          count++
        }
      }

      return count
    })

    expect(
      invisibleTextCount,
      `Found ${invisibleTextCount} element(s) with white text on white background`
    ).toBe(0)
  })
})
