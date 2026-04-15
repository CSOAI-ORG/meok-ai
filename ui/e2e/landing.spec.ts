import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test("shows MEOK branding and hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/MEOK/);
    // Hero has two A/B variants — check for common anchor text that exists in both
    await expect(page.getByText("MEOK remembers").first()).toBeVisible();
  });

  test("shows archetype names in Characters nav or homepage copy", async ({ page }) => {
    await page.goto("/");
    // Characters listed in nav dropdown
    for (const name of ["Aria", "Sage", "Marcus", "Luna", "Scout"]) {
      const el = page.getByText(name).first();
      await expect(el).toBeAttached();
    }
  });

  test("shows pricing tiers on homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Explorer").first()).toBeAttached();
    await expect(page.getByText("Sovereign").first()).toBeAttached();
  });

  test("Start free CTA links to /start", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: /Start free/i }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/start");
  });

  test("footer links exist", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await expect(footer.getByRole("link", { name: "Privacy" }).first()).toBeVisible({ timeout: 10_000 });
    await expect(footer.getByRole("link", { name: "Terms" }).first()).toBeVisible({ timeout: 10_000 });
    await expect(footer.getByText(/Powered by CSOAI/i).first()).toBeVisible({ timeout: 10_000 });
  });
});

test.describe("Auth pages", () => {
  test("login page loads", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByText("Welcome back")).toBeVisible();
  });

  test("register page loads", async ({ page }) => {
    await page.goto("/register");
    // Heading is "Almost there. Your companion is waiting."
    await expect(page.getByText("Almost there").first()).toBeVisible();
    await expect(page.getByText("Your companion is waiting").first()).toBeVisible();
  });

  test("login → register link works", async ({ page }) => {
    await page.goto("/login");
    // The "Create account" link may be on the page OR inside a Clerk iframe —
    // check that at least one exists and is navigable
    const link = page.getByRole("link", { name: "Create account" }).first();
    await expect(link).toBeAttached({ timeout: 10_000 });
    await link.click();
    await expect(page).toHaveURL(/\/(register|sign-up)/, { timeout: 10_000 });
  });
});

test.describe("Legal pages", () => {
  test("privacy page loads", async ({ page }) => {
    await page.goto("/privacy");
    await expect(page.getByRole("heading", { name: "Privacy Policy" })).toBeVisible();
    await expect(page.getByText(/UK GDPR/).first()).toBeVisible();
  });

  test("terms page loads", async ({ page }) => {
    await page.goto("/terms");
    await expect(page.getByRole("heading", { name: "Terms of Service" })).toBeVisible();
  });

  test("maternal covenant page loads", async ({ page }) => {
    const response = await page.goto("/maternal-covenant", { timeout: 60_000 });
    expect(response?.status()).toBeLessThan(500);
    await expect(page.locator("body")).not.toBeEmpty();
    const bodyText = (await page.locator("body").textContent()) || "";
    expect(bodyText.toLowerCase()).toContain("maternal covenant");
  });
});

test.describe("Public pages — FAQ", () => {
  test("FAQ page loads and has FAQ content", async ({ page }) => {
    const response = await page.goto("/faq");
    expect(response?.status()).toBeLessThan(400);
    // Page should have a heading
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 15_000 });
    // Should contain FAQ-related text — questions, answers, or the word "FAQ"
    const faqContent = page.getByText(/FAQ|frequently asked|question/i).first();
    await expect(faqContent).toBeAttached({ timeout: 10_000 });
  });

  test("FAQ page has content", async ({ page }) => {
    const response = await page.goto("/faq");
    expect(response?.status()).toBeLessThan(500);
    await expect(page.locator("body")).not.toBeEmpty();
    const bodyText = (await page.locator("body").textContent()) || "";
    expect(bodyText.toLowerCase()).toMatch(/faq|question|help/);
  });
});

test.describe("Public pages — Gaming", () => {
  test("Gaming page loads and has gaming content", async ({ page }) => {
    const response = await page.goto("/gaming");
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 15_000 });
    // Should contain gaming-related keywords
    const gamingContent = page.getByText(/gaming|game|play|companion/i).first();
    await expect(gamingContent).toBeAttached({ timeout: 10_000 });
  });
});

test.describe("Public pages — Characters", () => {
  test("Characters page loads and shows character cards", async ({ page }) => {
    const response = await page.goto("/characters");
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 15_000 });
    // Should show at least one known character name
    const knownCharacter = page.getByText("Aria").first();
    await expect(knownCharacter).toBeAttached({ timeout: 10_000 });
  });
});

test.describe("VPS API smoke (requires network)", () => {
  test.skip("VPS health endpoint returns healthy", async ({ request }) => {
    // Skipped in CI — VPS health is environment-specific
    const resp = await request.get("http://198.53.64.194:40646/health");
    expect(resp.ok()).toBeTruthy();
    const body = await resp.json();
    expect(body.status).toBe("healthy");
  });
});
