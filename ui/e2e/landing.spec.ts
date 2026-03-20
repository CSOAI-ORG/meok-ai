import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test("shows MEOK branding and hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/MEOK/);
    await expect(page.getByText("Your AI.")).toBeVisible();
    await expect(page.getByText("Truly yours.")).toBeVisible();
  });

  test("shows all 7 archetypes", async ({ page }) => {
    await page.goto("/");
    for (const name of ["Companion", "Strategist", "Guardian", "Sage", "Creator", "Scout", "Sovereign"]) {
      await expect(page.getByText(name).first()).toBeVisible();
    }
  });

  test("shows 3 pricing tiers", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Explorer")).toBeVisible();
    await expect(page.getByText("Sovereign").first()).toBeVisible();
    await expect(page.getByText("Sovereign Elite")).toBeVisible();
  });

  test("Hatch your AI CTA links to register", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: /Hatch your AI/i }).first();
    await expect(cta).toHaveAttribute("href", "/register");
  });

  test("footer links exist", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Privacy" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Terms" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Maternal Covenant" })).toBeVisible();
  });
});

test.describe("Auth pages", () => {
  test("login page loads", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByText("Sign in to your sovereign AI")).toBeVisible();
    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
  });

  test("register page loads", async ({ page }) => {
    await page.goto("/register");
    await expect(page.getByText("Hatch Your AI")).toBeVisible();
    await expect(page.getByText("Name your AI")).toBeVisible();
  });

  test("login → register link works", async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("link", { name: "Hatch your AI" }).click();
    await expect(page).toHaveURL(/\/register/);
  });
});

test.describe("Legal pages", () => {
  test("privacy page loads", async ({ page }) => {
    await page.goto("/privacy");
    await expect(page.getByText("Privacy Policy")).toBeVisible();
    await expect(page.getByText("UK GDPR")).toBeVisible();
  });

  test("terms page loads", async ({ page }) => {
    await page.goto("/terms");
    await expect(page.getByText("Terms of Service")).toBeVisible();
  });

  test("maternal covenant page loads", async ({ page }) => {
    await page.goto("/maternal-covenant");
    await expect(page.getByText("The Maternal Covenant")).toBeVisible();
    await expect(page.getByText("Care before engagement")).toBeVisible();
  });
});

test.describe("VPS API smoke (requires network)", () => {
  test("VPS health endpoint returns healthy", async ({ request }) => {
    const resp = await request.get("http://198.53.64.194:40646/health");
    expect(resp.ok()).toBeTruthy();
    const body = await resp.json();
    expect(body.status).toBe("healthy");
  });
});
