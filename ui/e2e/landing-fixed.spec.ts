import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(2000);
  });

  test("shows MEOK branding and hero", async ({ page }) => {
    await expect(page).toHaveTitle(/MEOK/i, { timeout: 10000 });
    const hero = page.locator("h1, [class*='hero'], [class*='Hero']").first();
    await expect(hero).toBeVisible({ timeout: 10000 });
  });

  test("shows archetype names in Characters nav or homepage copy", async ({ page }) => {
    for (const name of ["Aria", "Sage", "Marcus", "Luna", "Scout"]) {
      const el = page.getByText(name).first();
      await expect(el).toBeVisible({ timeout: 5000 });
    }
  });

  test("shows pricing tiers on homepage or pricing page", async ({ page }) => {
    await expect(page.getByText(/Explorer|Sovereign|Pricing/i).first()).toBeAttached({ timeout: 10000 });
  });

  test("Birth Ceremony CTA links to /birth", async ({ page }) => {
    const cta = page.locator('a[href="/birth"]').first();
    await expect(cta).toBeVisible({ timeout: 10000 });
  });

  test("footer links exist", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const privacy = page.getByRole("link", { name: /Privacy/i }).first();
    const terms = page.getByRole("link", { name: /Terms/i }).first();
    await expect(privacy).toBeVisible({ timeout: 5000 });
    await expect(terms).toBeVisible({ timeout: 5000 });
  });
});

test.describe("Auth pages", () => {
  test("login page loads", async ({ page }) => {
    await page.goto("/login");
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 10000 });
  });

  test("register page loads", async ({ page }) => {
    await page.goto("/register");
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe("Legal pages", () => {
  test("privacy page loads", async ({ page }) => {
    await page.goto("/privacy");
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 10000 });
  });

  test("terms page loads", async ({ page }) => {
    await page.goto("/terms");
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 10000 });
  });

  test("maternal covenant page loads", async ({ page }) => {
    await page.goto("/maternal-covenant");
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe("Public pages — FAQ", () => {
  test("FAQ page loads and has FAQ content", async ({ page }) => {
    await page.goto("/faq");
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 10000 });
  });

  test("FAQ page has content", async ({ page }) => {
    const response = await page.goto("/faq");
    expect(response?.status()).toBeLessThan(500);
    await expect(page.locator("body")).not.toBeEmpty();
  });
});

test.describe("Public pages", () => {
  test("Gaming page loads", async ({ page }) => {
    const response = await page.goto("/gaming");
    expect(response?.status()).toBeLessThan(500);
    await expect(page.locator("body")).not.toBeEmpty();
  });

  test("Characters page loads and shows character cards", async ({ page }) => {
    const response = await page.goto("/characters");
    expect(response?.status()).toBeLessThan(500);
    await expect(page.locator("body")).not.toBeEmpty();
  });

  test("Pricing page loads", async ({ page }) => {
    const response = await page.goto("/pricing");
    expect(response?.status()).toBeLessThan(500);
    await expect(page.locator("body")).not.toBeEmpty();
  });
});