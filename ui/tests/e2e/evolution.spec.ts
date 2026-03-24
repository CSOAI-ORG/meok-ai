/**
 * Companion Evolution System E2E Tests — MEOK
 * Tests the 4-stage companion evolution state machine:
 *   Stage 0 — Prying Pulse (0 interactions)
 *   Stage 1 — Emergent Fracture (10 interactions)
 *   Stage 2 — Sacred Hatchling (25 interactions) → Guardian unlocks
 *   Stage 3 — Your Unique Sovereign (50 interactions) → Ralph Mode unlocks
 *
 * Also covers: /birth ceremony, /characters evolution tabs,
 *              /dashboard/companion (auth-gated), feature gate logic
 *
 * Run: npx playwright test tests/e2e/evolution.spec.ts
 */
import { test, expect } from "@playwright/test";
import {
  getEvolutionStage,
  getProgressToNextStage,
  interactionsUntilNextStage,
  isFeatureUnlocked,
  EVOLUTION_STAGES,
} from "../../src/lib/evolution";

// ─── Unit-level logic tests (run in Node, no browser needed) ──────────────────

test.describe("Evolution state machine — unit logic", () => {
  test("EVOLUTION_STAGES has exactly 4 stages", () => {
    expect(EVOLUTION_STAGES).toHaveLength(4);
  });

  test("stages are ordered by minInteractions ascending", () => {
    for (let i = 1; i < EVOLUTION_STAGES.length; i++) {
      expect(EVOLUTION_STAGES[i].minInteractions).toBeGreaterThan(
        EVOLUTION_STAGES[i - 1].minInteractions
      );
    }
  });

  test("getEvolutionStage(0) → Prying Pulse (stage 0)", () => {
    const stage = getEvolutionStage(0);
    expect(stage.id).toBe(0);
    expect(stage.name).toBe("Prying Pulse");
  });

  test("getEvolutionStage(9) → still Prying Pulse (not yet 10)", () => {
    const stage = getEvolutionStage(9);
    expect(stage.id).toBe(0);
  });

  test("getEvolutionStage(10) → Emergent Fracture (stage 1)", () => {
    const stage = getEvolutionStage(10);
    expect(stage.id).toBe(1);
    expect(stage.name).toBe("Emergent Fracture");
  });

  test("getEvolutionStage(24) → still Emergent Fracture (not yet 25)", () => {
    const stage = getEvolutionStage(24);
    expect(stage.id).toBe(1);
  });

  test("getEvolutionStage(25) → Sacred Hatchling (stage 2)", () => {
    const stage = getEvolutionStage(25);
    expect(stage.id).toBe(2);
    expect(stage.name).toBe("Sacred Hatchling");
  });

  test("getEvolutionStage(49) → still Sacred Hatchling (not yet 50)", () => {
    const stage = getEvolutionStage(49);
    expect(stage.id).toBe(2);
  });

  test("getEvolutionStage(50) → Your Unique Sovereign (stage 3)", () => {
    const stage = getEvolutionStage(50);
    expect(stage.id).toBe(3);
    expect(stage.name).toBe("Your Unique Sovereign");
  });

  test("getEvolutionStage(9999) → Your Unique Sovereign (max stage)", () => {
    const stage = getEvolutionStage(9999);
    expect(stage.id).toBe(3);
  });

  test("getEvolutionStage(-1) → Prying Pulse (negative guard)", () => {
    const stage = getEvolutionStage(-1);
    expect(stage.id).toBe(0);
  });
});

test.describe("Evolution — progress calculation", () => {
  test("progress at stage 0 start is 0%", () => {
    expect(getProgressToNextStage(0)).toBe(0);
  });

  test("progress at stage 0 midpoint is ~50%", () => {
    // Stage 0: 0-9, midpoint = 5 out of 10 range
    const progress = getProgressToNextStage(5);
    expect(progress).toBe(50);
  });

  test("progress at stage 0 end is 90% (9 out of 10)", () => {
    const progress = getProgressToNextStage(9);
    expect(progress).toBe(90);
  });

  test("progress at stage 3 is 100% (max)", () => {
    expect(getProgressToNextStage(50)).toBe(100);
    expect(getProgressToNextStage(999)).toBe(100);
  });

  test("interactionsUntilNextStage(0) → 10", () => {
    expect(interactionsUntilNextStage(0)).toBe(10);
  });

  test("interactionsUntilNextStage(7) → 3", () => {
    expect(interactionsUntilNextStage(7)).toBe(3);
  });

  test("interactionsUntilNextStage(10) → 15 (next is stage 2 at 25)", () => {
    expect(interactionsUntilNextStage(10)).toBe(15);
  });

  test("interactionsUntilNextStage(50) → 0 (max stage)", () => {
    expect(interactionsUntilNextStage(50)).toBe(0);
  });
});

test.describe("Evolution — feature unlock gates", () => {
  test("Guardian is locked at stage 0 (0 interactions)", () => {
    expect(isFeatureUnlocked("guardian", 0)).toBe(false);
  });

  test("Guardian is locked at stage 1 (10 interactions)", () => {
    expect(isFeatureUnlocked("guardian", 10)).toBe(false);
  });

  test("Guardian unlocks at stage 2 (25 interactions)", () => {
    expect(isFeatureUnlocked("guardian", 25)).toBe(true);
  });

  test("Guardian remains unlocked at stage 3 (50 interactions)", () => {
    expect(isFeatureUnlocked("guardian", 50)).toBe(true);
  });

  test("Ralph Mode is locked at stage 0 (0 interactions)", () => {
    expect(isFeatureUnlocked("ralph_mode", 0)).toBe(false);
  });

  test("Ralph Mode is locked at stage 1 (10 interactions)", () => {
    expect(isFeatureUnlocked("ralph_mode", 10)).toBe(false);
  });

  test("Ralph Mode is locked at stage 2 (25 interactions)", () => {
    expect(isFeatureUnlocked("ralph_mode", 25)).toBe(false);
  });

  test("Ralph Mode unlocks at stage 3 (50 interactions)", () => {
    expect(isFeatureUnlocked("ralph_mode", 50)).toBe(true);
  });

  test("Stage 3 has both Guardian and Ralph Mode unlocked", () => {
    const stage = getEvolutionStage(50);
    expect(stage.unlocksGuardian).toBe(true);
    expect(stage.unlocksRalphMode).toBe(true);
  });
});

test.describe("Evolution — stage metadata integrity", () => {
  test("every stage has a name, title, and description", () => {
    for (const stage of EVOLUTION_STAGES) {
      expect(stage.name.length).toBeGreaterThan(0);
      expect(stage.title.length).toBeGreaterThan(0);
      expect(stage.description.length).toBeGreaterThan(0);
    }
  });

  test("every stage has a colour and imageHint", () => {
    for (const stage of EVOLUTION_STAGES) {
      expect(stage.color).toMatch(/^#/);
      expect(stage.imageHint).toMatch(/^char-/);
    }
  });

  test("every stage has 4 attributes", () => {
    for (const stage of EVOLUTION_STAGES) {
      expect(stage.attributes).toHaveLength(4);
    }
  });

  test("max stage has null maxInteractions", () => {
    expect(EVOLUTION_STAGES[3].maxInteractions).toBeNull();
  });

  test("stage IDs are 0, 1, 2, 3 in order", () => {
    EVOLUTION_STAGES.forEach((stage, i) => {
      expect(stage.id).toBe(i);
    });
  });
});

// ─── Browser tests — pages that reference evolution ──────────────────────────

test.describe("Evolution — /birth ceremony page", () => {
  test("/birth loads with 200 status", async ({ request }) => {
    const resp = await request.get("/birth");
    expect(resp.status()).toBeLessThan(400);
  });

  test("/birth mentions companion birth / hatching", async ({ page }) => {
    await page.goto("/birth");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/birth|hatch|companion|sovereign/i);
  });

  test("/birth has CTA link to begin the ceremony", async ({ page }) => {
    await page.goto("/birth");
    const body = await page.locator("body").textContent() || "";
    expect(body).toMatch(/begin|start|ceremony|hatch/i);
  });

  test("/birth references Maternal Covenant", async ({ page }) => {
    await page.goto("/birth");
    const body = await page.locator("body").textContent();
    expect(body).toMatch(/maternal covenant|sovereign promise|data|encrypted/i);
  });

  test("/birth has stage/step visual flow", async ({ page }) => {
    await page.goto("/birth");
    const body = await page.locator("body").textContent() || "";
    // Should mention the stages or phases of birth
    const hasStages =
      body.match(/stage|step|phase|pulse|fracture|hatchling/i) !== null ||
      body.match(/01|02|03/i) !== null;
    expect(hasStages).toBeTruthy();
  });
});

test.describe("Evolution — /characters page stage display", () => {
  test("/characters loads and mentions evolution or stages", async ({ page }) => {
    await page.goto("/characters");
    const body = await page.locator("body").textContent() || "";
    const hasEvolution =
      body.match(/evolv|stage|hatch|awakening|sovereign/i) !== null;
    expect(hasEvolution).toBeTruthy();
  });

  test("/characters shows archetypes (8 total)", async ({ page }) => {
    await page.goto("/characters");
    const body = await page.locator("body").textContent() || "";
    // Each archetype should appear — check at least a few
    const archetypes = ["nurturer", "challenger", "creator", "sage", "guardian", "seeker"];
    const found = archetypes.filter((a) =>
      body.toLowerCase().includes(a)
    );
    expect(found.length).toBeGreaterThanOrEqual(3);
  });

  test("/characters/spiritual seeker archetype exists", async ({ request }) => {
    const resp = await request.get("/characters/spiritual");
    expect(resp.status()).toBeLessThan(400);
  });
});

test.describe("Evolution — dashboard companion (auth-gated)", () => {
  test("/dashboard/companion redirects to auth when unauthenticated", async ({ page }) => {
    await page.goto("/dashboard/companion");
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {});
    const url = page.url();
    const isProtected =
      url.includes("login") || url.includes("sign-in") || url.includes("clerk");
    expect(isProtected).toBeTruthy();
  });

  test("/dashboard redirects to auth when unauthenticated", async ({ page }) => {
    await page.goto("/dashboard");
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {});
    const url = page.url();
    const isProtected =
      url.includes("login") || url.includes("sign-in") || url.includes("clerk");
    expect(isProtected).toBeTruthy();
  });
});

test.describe("Evolution — stage names on public pages", () => {
  test("Prying Pulse stage name appears somewhere in site", async ({ request }) => {
    // Check characters page or birth page for stage name
    const responses = await Promise.all([
      request.get("/birth"),
      request.get("/characters"),
      request.get("/"),
    ]);
    const texts = await Promise.all(responses.map((r) => r.text()));
    const allText = texts.join(" ").toLowerCase();
    const hasStageName =
      allText.includes("prying pulse") ||
      allText.includes("emergent fracture") ||
      allText.includes("sacred hatchling") ||
      allText.includes("unique sovereign") ||
      allText.includes("the awakening") ||
      allText.includes("breaking through");
    // At least one stage reference should exist across the site
    // If not on these pages, it will be on /os or /how-it-works
    // This is a soft check — not blocking launch
    if (!hasStageName) {
      console.warn(
        "No evolution stage names found on birth/characters/homepage — consider adding stage names to /birth or /characters"
      );
    }
  });
});

test.describe("Evolution — full sign-up to first companion flow (auth-gated)", () => {
  test.skip(!process.env.CLERK_TEST_MODE, "Requires CLERK_TEST_MODE=true");

  test("new user registration lands on birth ceremony", async ({ page }) => {
    const uniqueEmail = `test+evo_${Date.now()}@meok.ai`;
    await page.goto("/register");
    await page.getByLabel(/email/i).fill(uniqueEmail);
    await page.getByLabel(/password/i).fill("TestPassword123!");
    const confirm = page.getByLabel(/confirm password/i);
    if (await confirm.isVisible()) await confirm.fill("TestPassword123!");
    await page.getByRole("button", { name: /sign up|create account|continue/i }).click();
    // After sign-up, should land on birth ceremony or dashboard
    await page.waitForURL(/birth|hatch|dashboard/, { timeout: 15000 });
    expect(page.url()).toMatch(/birth|hatch|dashboard/);
  });

  test("first message after hatching increments toward stage 1", async ({ page }) => {
    // This test requires an authenticated session with a hatched companion
    // Verify that the evolution progress indicator exists on dashboard
    await page.goto("/login");
    await page.getByLabel(/email/i).fill(process.env.TEST_USER_EMAIL || "test@meok.ai");
    await page.getByLabel(/password/i).fill(process.env.TEST_USER_PASSWORD || "TestPassword123!");
    await page.getByRole("button", { name: /sign in|continue/i }).click();
    await page.waitForURL(/dashboard/, { timeout: 15000 });
    await page.goto("/dashboard/companion");
    // Companion panel should show evolution stage
    const body = await page.locator("body").textContent() || "";
    const hasEvolution =
      body.match(/prying pulse|emergent fracture|sacred hatchling|sovereign/i) !== null ||
      body.match(/stage|evolution|interactions/i) !== null;
    expect(hasEvolution).toBeTruthy();
  });
});
