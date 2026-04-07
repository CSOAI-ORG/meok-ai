"""
Thompson Sampling Multi-Armed Bandit for MEOK variant allocation.
Assigns new users to A/B/n variants by sampling from Beta distributions.

Variants map to: homepage hero, onboarding flow, pricing layout,
care messaging style, dashboard layout — see 10-variant Compass doc.

Each arm tracks:  alpha (successes), beta (failures), conversions, impressions
Reward signal:    7-day retention × care score (Variant Health Score)
"""

import asyncio
import json
import logging
import os
import random
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from typing import Optional

import asyncpg

logger = logging.getLogger(__name__)
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://meok:meok@localhost:5432/meok")


@dataclass
class VariantArm:
    variant_id: str
    name: str
    description: str
    alpha: float = 1.0   # successes + 1 (Beta prior)
    beta: float = 1.0    # failures + 1 (Beta prior)
    impressions: int = 0
    conversions: int = 0
    care_score_sum: float = 0.0
    active: bool = True

    @property
    def conversion_rate(self) -> float:
        total = self.impressions or 1
        return self.conversions / total

    @property
    def mean_care_score(self) -> float:
        if self.conversions == 0:
            return 0.5
        return self.care_score_sum / self.conversions

    def sample(self) -> float:
        """Draw from Beta(alpha, beta) — Thompson sampling."""
        return random.betavariate(self.alpha, self.beta)


# Default variants from 10-variant launch strategy
DEFAULT_VARIANTS = [
    VariantArm("v1_control",     "Control",        "Current baseline experience"),
    VariantArm("v2_hero_a",      "Hero Option A",  "Your AI. Your rules. Your sovereignty."),
    VariantArm("v3_hero_b",      "Hero Option B",  "AI that actually cares about you."),
    VariantArm("v4_birth_quiz",  "Birth Quiz",     "5-screen quiz-first onboarding"),
    VariantArm("v5_birth_egg",   "Birth Egg",      "Egg-first emotional hook onboarding"),
    VariantArm("v6_pricing_a",   "Pricing A",      "3-tier simple pricing"),
    VariantArm("v7_pricing_b",   "Pricing B",      "Annual billing emphasis"),
    VariantArm("v8_care_heavy",  "Care Heavy",     "Maternal Covenant messaging prominent"),
    VariantArm("v9_tech_heavy",  "Tech Heavy",     "220-node council messaging prominent"),
    VariantArm("v10_trust",      "Trust First",    "Privacy/sovereignty messaging first"),
]


class ThompsonSamplingBandit:
    """
    Multi-armed bandit with Thompson sampling for variant allocation.
    Persists arm state to PostgreSQL; falls back to in-memory if DB unavailable.
    """

    def __init__(self, db_url: str = DATABASE_URL):
        self.db_url = db_url
        self.pool: Optional[asyncpg.Pool] = None
        self.arms: dict[str, VariantArm] = {v.variant_id: v for v in DEFAULT_VARIANTS}

    async def connect(self):
        try:
            self.pool = await asyncpg.create_pool(self.db_url, min_size=1, max_size=5)
            await self._ensure_table()
            await self._load_arms()
            logger.info("ThompsonSamplingBandit connected to DB")
        except Exception as e:
            logger.warning(f"DB unavailable, using in-memory bandit: {e}")

    async def _ensure_table(self):
        async with self.pool.acquire() as conn:
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS variant_arms (
                    variant_id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    description TEXT,
                    alpha FLOAT NOT NULL DEFAULT 1.0,
                    beta FLOAT NOT NULL DEFAULT 1.0,
                    impressions INTEGER NOT NULL DEFAULT 0,
                    conversions INTEGER NOT NULL DEFAULT 0,
                    care_score_sum FLOAT NOT NULL DEFAULT 0.0,
                    active BOOLEAN NOT NULL DEFAULT true,
                    updated_at TIMESTAMP DEFAULT NOW()
                )
            """)
            # Seed default variants
            for arm in DEFAULT_VARIANTS:
                await conn.execute("""
                    INSERT INTO variant_arms (variant_id, name, description)
                    VALUES ($1, $2, $3)
                    ON CONFLICT (variant_id) DO NOTHING
                """, arm.variant_id, arm.name, arm.description)

    async def _load_arms(self):
        async with self.pool.acquire() as conn:
            rows = await conn.fetch("SELECT * FROM variant_arms WHERE active = true")
            for row in rows:
                arm = self.arms.get(row["variant_id"])
                if arm:
                    arm.alpha = row["alpha"]
                    arm.beta = row["beta"]
                    arm.impressions = row["impressions"]
                    arm.conversions = row["conversions"]
                    arm.care_score_sum = row["care_score_sum"]

    def select_variant(self, user_id: Optional[str] = None) -> VariantArm:
        """
        Thompson sampling: draw from each arm's Beta distribution,
        pick the arm with highest sample.
        Deterministic for known user_id (hash to consistent arm).
        """
        active_arms = [a for a in self.arms.values() if a.active]
        if not active_arms:
            return list(self.arms.values())[0]

        # For known users: consistent assignment via hash
        if user_id:
            idx = hash(user_id) % len(active_arms)
            return active_arms[idx]

        # Thompson sampling for new/anonymous visitors
        sampled = [(arm.sample(), arm) for arm in active_arms]
        _, winner = max(sampled, key=lambda x: x[0])
        return winner

    async def record_impression(self, variant_id: str):
        """Record that a user saw this variant."""
        if variant_id in self.arms:
            self.arms[variant_id].impressions += 1
        if self.pool:
            try:
                async with self.pool.acquire() as conn:
                    await conn.execute("""
                        UPDATE variant_arms
                        SET impressions = impressions + 1, updated_at = NOW()
                        WHERE variant_id = $1
                    """, variant_id)
            except Exception as e:
                logger.warning(f"DB impression update failed: {e}")

    async def record_conversion(self, variant_id: str, care_score: float = 0.5,
                                 reward: float = 1.0):
        """
        Record a conversion event (signup, 7-day retention, etc).
        Updates Beta distribution: alpha += reward, beta += (1-reward).
        """
        arm = self.arms.get(variant_id)
        if arm:
            arm.alpha += reward
            arm.beta += (1.0 - reward)
            arm.conversions += 1
            arm.care_score_sum += care_score

        if self.pool:
            try:
                async with self.pool.acquire() as conn:
                    await conn.execute("""
                        UPDATE variant_arms
                        SET alpha = alpha + $1,
                            beta = beta + $2,
                            conversions = conversions + 1,
                            care_score_sum = care_score_sum + $3,
                            updated_at = NOW()
                        WHERE variant_id = $4
                    """, reward, 1.0 - reward, care_score, variant_id)
            except Exception as e:
                logger.warning(f"DB conversion update failed: {e}")

    def get_stats(self) -> list[dict]:
        """Return current arm statistics for dashboard/monitoring."""
        return sorted([
            {
                "variant_id": arm.variant_id,
                "name": arm.name,
                "description": arm.description,
                "alpha": round(arm.alpha, 3),
                "beta": round(arm.beta, 3),
                "impressions": arm.impressions,
                "conversions": arm.conversions,
                "conversion_rate": round(arm.conversion_rate, 4),
                "mean_care_score": round(arm.mean_care_score, 3),
                "expected_reward": round(arm.alpha / (arm.alpha + arm.beta), 4),
            }
            for arm in self.arms.values() if arm.active
        ], key=lambda x: x["expected_reward"], reverse=True)


# Singleton instance
bandit = ThompsonSamplingBandit()
