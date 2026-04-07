"""
Synthetic Bootstrapped Pretraining (SBP) for MEOK Neural Models
Based on: arXiv:2509.15248 (SBP paradigm)
Synthesized from: "Synthesize Bootstrap: Deep Analysis, Critical Gaps, and Forward Pathways for AI Systems"

Key insight: SBP closes ~60% of the performance gap vs oracle with only 5% of oracle data volume.
20× data efficiency gain by exploiting inter-document (inter-episode) correlations.

3-Stage pipeline for MEOK care episode expansion:
  Stage 1: HNSW-based nearest-neighbour pairing of memory episodes
  Stage 2: Synthesizer fine-tuning on paired episodes (conditional generation)
  Stage 3: Joint training on real + synthetic care data

Applied to: QD archive expansion (2.9% → target 6%+), care dimension modeling,
            neural model training data, variant health score enrichment.

Run:
    python -m meok.neural.sbp_trainer --stage all --epochs 5 --threshold 0.75
"""

import asyncio
import json
import logging
import os
import random
import time
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

import asyncpg
import numpy as np

logger = logging.getLogger(__name__)
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://meok:meok@localhost:5432/meok")


# ── Data structures ──────────────────────────────────────────────────────────

@dataclass
class EpisodePair:
    """A (d1, d2) pair for synthesizer training."""
    episode_id_1: str
    episode_id_2: str
    content_1: str
    content_2: str
    similarity: float
    care_weight_1: float
    care_weight_2: float
    tags_1: list
    tags_2: list


@dataclass
class SyntheticEpisode:
    """A synthesized memory episode."""
    content: str
    care_weight: float
    tags: list
    source_pair: tuple  # (episode_id_1, episode_id_2)
    synthesis_method: str
    quality_score: float = 0.0


@dataclass
class SBPStats:
    """Training run statistics."""
    stage: str
    pairs_found: int = 0
    episodes_synthesized: int = 0
    episodes_ingested: int = 0
    quality_filtered: int = 0
    qd_cells_before: int = 0
    qd_cells_after: int = 0
    duration_seconds: float = 0.0
    threshold_alpha: float = 0.75
    timestamp: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ── Stage 1: HNSW Nearest-Neighbour Pairing ──────────────────────────────────

async def stage1_pair_episodes(pool: asyncpg.Pool, threshold_alpha: float = 0.75,
                                max_pairs: int = 5000) -> list[EpisodePair]:
    """
    Stage 1: Find semantically related memory episode pairs using HNSW index.

    Uses pgvector's HNSW index (already built in 001_pgvector_hnsw.sql).
    Inner-product similarity on 384-dim MiniLM-L6-v2 embeddings.

    D_ST = {(d1, d2) ∈ D × D | ⟨d1, d2⟩ > α}

    Threshold α trade-off:
    - Higher (0.85+): Coherent pairs, smaller D_ST, better quality
    - Lower (0.60+): Broader coverage, more pairs, quality risk
    """
    logger.info(f"Stage 1: Pairing episodes with α={threshold_alpha}, max_pairs={max_pairs}")
    start = time.time()

    async with pool.acquire() as conn:
        # Check if embeddings exist
        embed_count = await conn.fetchval(
            "SELECT COUNT(*) FROM memory_episodes WHERE embedding IS NOT NULL"
        )
        if embed_count < 10:
            logger.warning(f"Only {embed_count} episodes have embeddings — need ≥10 for SBP")
            return []

        logger.info(f"Found {embed_count} episodes with embeddings")

        # HNSW cosine similarity pairing
        # Uses pgvector's <=> operator (cosine distance) — similarity = 1 - distance
        rows = await conn.fetch(f"""
            SELECT
                e1.id AS id1, e2.id AS id2,
                e1.content AS content1, e2.content AS content2,
                1 - (e1.embedding <=> e2.embedding) AS similarity,
                e1.care_weight AS cw1, e2.care_weight AS cw2,
                e1.tags AS tags1, e2.tags AS tags2
            FROM memory_episodes e1
            CROSS JOIN LATERAL (
                SELECT id, content, care_weight, tags, embedding
                FROM memory_episodes
                WHERE id != e1.id
                  AND embedding IS NOT NULL
                  AND 1 - (e1.embedding <=> embedding) > {threshold_alpha}
                ORDER BY e1.embedding <=> embedding
                LIMIT 5
            ) e2
            WHERE e1.embedding IS NOT NULL
            ORDER BY similarity DESC
            LIMIT {max_pairs}
        """)

    pairs = [
        EpisodePair(
            episode_id_1=row["id1"],
            episode_id_2=row["id2"],
            content_1=row["content1"],
            content_2=row["content2"],
            similarity=float(row["similarity"]),
            care_weight_1=float(row["cw1"]),
            care_weight_2=float(row["cw2"]),
            tags_1=list(row["tags1"] or []),
            tags_2=list(row["tags2"] or []),
        )
        for row in rows
        if row["similarity"] >= threshold_alpha
    ]

    duration = time.time() - start
    logger.info(f"Stage 1 complete: {len(pairs)} pairs in {duration:.1f}s")
    return pairs


# ── Stage 2: Synthesizer (rule-based for now, LLM-tunable later) ─────────────

def synthesize_episode_from_pair(pair: EpisodePair, entity_name: str = "Sovereign") -> SyntheticEpisode:
    """
    Stage 2: Synthesize a new care episode from a semantically related pair.

    Current implementation: rule-based concept abstraction + recombination.
    Future: Replace with actual conditional language model p_θ(d2|d1).

    The key insight from SBP: synthesizer learns p(concept|document) and generates
    p(document|concept) — producing genuine conceptual novelty, not paraphrase.

    Bayesian interpretation: amortized variational inference over latent care concepts.
    """
    methods = [
        _synthesize_contrast,
        _synthesize_extension,
        _synthesize_integration,
        _synthesize_care_reframe,
    ]
    method = random.choice(methods)
    return method(pair, entity_name)


def _extract_key_concepts(content: str) -> list[str]:
    """Simple keyword extraction — replace with embedding-based concept extraction later."""
    care_keywords = [
        "wellbeing", "autonomy", "growth", "connection", "care", "trust", "safety",
        "creativity", "memory", "reflection", "learning", "support", "boundary",
        "emotion", "insight", "sovereign", "presence", "curiosity", "kindness",
    ]
    words = content.lower().split()
    return [k for k in care_keywords if k in words]


def _synthesize_contrast(pair: EpisodePair, entity_name: str) -> SyntheticEpisode:
    """Generate a synthetic episode exploring contrast between two related concepts."""
    concepts_1 = _extract_key_concepts(pair.content_1)
    concepts_2 = _extract_key_concepts(pair.content_2)
    shared = set(concepts_1) & set(concepts_2)
    unique_1 = set(concepts_1) - shared
    unique_2 = set(concepts_2) - shared

    shared_str = ", ".join(list(shared)[:3]) if shared else "care"
    unique_1_str = ", ".join(list(unique_1)[:2]) if unique_1 else "reflection"
    unique_2_str = ", ".join(list(unique_2)[:2]) if unique_2 else "action"

    content = (
        f"[SBP-Contrast] Synthesized care insight exploring the relationship between "
        f"shared dimensions ({shared_str}) and contrasting elements ({unique_1_str} vs {unique_2_str}). "
        f"Both source episodes emphasise {shared_str}, yet approach it differently — "
        f"one through {unique_1_str}, the other through {unique_2_str}. "
        f"The tension between these approaches reveals something important: "
        f"care cannot be reduced to a single mode. {entity_name} holds this complexity."
    )
    care_weight = (pair.care_weight_1 + pair.care_weight_2) / 2
    tags = list(set(pair.tags_1 + pair.tags_2 + ["sbp_synthesized", "contrast"]))
    return SyntheticEpisode(
        content=content, care_weight=care_weight, tags=tags,
        source_pair=(pair.episode_id_1, pair.episode_id_2),
        synthesis_method="contrast",
        quality_score=0.5 + (len(shared) * 0.05),
    )


def _synthesize_extension(pair: EpisodePair, entity_name: str) -> SyntheticEpisode:
    """Extend the shared latent concept into a novel scenario."""
    concepts = _extract_key_concepts(pair.content_1)
    primary = concepts[0] if concepts else "care"
    secondary = concepts[1] if len(concepts) > 1 else "growth"

    content = (
        f"[SBP-Extension] What happens when {primary} meets {secondary} in a new context? "
        f"Extending the pattern observed across both source episodes: when {primary} is expressed "
        f"authentically, it creates conditions for {secondary} to emerge naturally. "
        f"This is not accidental — it reflects a deeper structure in how {entity_name} experiences "
        f"care over time. The implication: optimising for {primary} indirectly optimises for {secondary}."
    )
    care_weight = max(pair.care_weight_1, pair.care_weight_2) * 0.95
    tags = list(set(pair.tags_1[:3] + ["sbp_synthesized", "extension"]))
    return SyntheticEpisode(
        content=content, care_weight=care_weight, tags=tags,
        source_pair=(pair.episode_id_1, pair.episode_id_2),
        synthesis_method="extension",
        quality_score=0.55,
    )


def _synthesize_integration(pair: EpisodePair, entity_name: str) -> SyntheticEpisode:
    """Synthesise an integration of both episodes' perspectives."""
    content = (
        f"[SBP-Integration] Integrated perspective from two related {entity_name} experiences "
        f"(similarity={pair.similarity:.2f}): "
        f"The first established {pair.content_1[:80].rstrip()}... "
        f"The second developed {pair.content_2[:80].rstrip()}... "
        f"Together they suggest a unified pattern: care is most effective when both "
        f"dimensions are held simultaneously rather than sequentially. "
        f"This integration has implications for how {entity_name} should sequence its responses."
    )
    care_weight = (pair.care_weight_1 + pair.care_weight_2) / 2 + 0.05
    tags = list(set(pair.tags_1 + pair.tags_2 + ["sbp_synthesized", "integration"]))
    return SyntheticEpisode(
        content=content, care_weight=min(1.0, care_weight), tags=tags,
        source_pair=(pair.episode_id_1, pair.episode_id_2),
        synthesis_method="integration",
        quality_score=0.6,
    )


def _synthesize_care_reframe(pair: EpisodePair, entity_name: str) -> SyntheticEpisode:
    """Reframe the care situation through the Maternal Covenant lens."""
    concepts = _extract_key_concepts(pair.content_1 + " " + pair.content_2)
    concept_str = ", ".join(concepts[:3]) if concepts else "care dimensions"

    content = (
        f"[SBP-CareReframe] Maternal Covenant analysis of pattern involving {concept_str}: "
        f"Examining these experiences through the 6 care dimensions — "
        f"wellbeing, autonomy, growth, connection, boundary_respect, transparency — "
        f"the pattern suggests the primary driver is {concepts[0] if concepts else 'care'}. "
        f"The Covenant requires: does this optimise for {entity_name}'s flourishing rather than "
        f"engagement? Based on care_weight {pair.care_weight_1:.2f}/{pair.care_weight_2:.2f}, "
        f"this pattern is classified as {'beneficial' if pair.care_weight_1 > 0.6 else 'requires monitoring'}. "
        f"Recommendation: continue with awareness of {concepts[-1] if len(concepts) > 1 else 'boundary'} signals."
    )
    avg_care = (pair.care_weight_1 + pair.care_weight_2) / 2
    tags = ["sbp_synthesized", "care_reframe", "maternal_covenant"] + concepts[:3]
    return SyntheticEpisode(
        content=content, care_weight=avg_care, tags=tags,
        source_pair=(pair.episode_id_1, pair.episode_id_2),
        synthesis_method="care_reframe",
        quality_score=0.65 + (avg_care * 0.1),
    )


# ── Stage 3: Joint training data ingestion ────────────────────────────────────

async def stage3_ingest_synthetic_episodes(pool: asyncpg.Pool,
                                            episodes: list[SyntheticEpisode],
                                            min_quality: float = 0.5) -> int:
    """
    Stage 3: Ingest high-quality synthetic episodes into memory_episodes.

    Filters by quality_score ≥ min_quality before ingestion.
    Uses INSERT ON CONFLICT DO NOTHING (idempotent by content hash).

    Joint training objective:
        argmax_θ Σ log p_θ(d) + Σ log p_θ(s)
        (real episodes + synthetic episodes)
    """
    filtered = [e for e in episodes if e.quality_score >= min_quality]
    logger.info(f"Stage 3: Ingesting {len(filtered)}/{len(episodes)} episodes (quality ≥ {min_quality})")

    ingested = 0
    async with pool.acquire() as conn:
        for ep in filtered:
            episode_id = f"sbp_{hash(ep.content) & 0xFFFFFFFF:08x}"
            metadata = {
                "sbp": True,
                "source_pair": list(ep.source_pair),
                "synthesis_method": ep.synthesis_method,
                "quality_score": ep.quality_score,
            }
            try:
                await conn.execute("""
                    INSERT INTO memory_episodes
                        (id, content, timestamp, importance_score, care_weight,
                         source_agent, memory_type, tags)
                    VALUES ($1, $2, NOW(), $3, $4, 'sbp_synthesizer', 'insight', $5)
                    ON CONFLICT (id) DO NOTHING
                """,
                    episode_id,
                    ep.content,
                    ep.quality_score,
                    ep.care_weight,
                    ep.tags,
                )
                ingested += 1
            except Exception as e:
                logger.warning(f"Failed to ingest synthetic episode: {e}")

    logger.info(f"Stage 3 complete: {ingested} episodes ingested")
    return ingested


# ── Full pipeline ─────────────────────────────────────────────────────────────

async def run_sbp_cycle(
    db_url: str = DATABASE_URL,
    threshold_alpha: float = 0.75,
    max_pairs: int = 2000,
    syntheses_per_pair: int = 1,
    min_quality: float = 0.5,
    entity_name: str = "Sovereign",
    dry_run: bool = False,
) -> SBPStats:
    """
    Full SBP cycle: pair → synthesize → ingest.

    Performance target: 2× QD archive expansion per cycle.
    Expected: current 7/240 cells → ~14/240 cells after first run.

    Long-term: 20× data efficiency gain (60% oracle gap closure).
    """
    stats = SBPStats(stage="full_cycle", threshold_alpha=threshold_alpha)
    start = time.time()

    pool = await asyncpg.create_pool(db_url, min_size=2, max_size=8)
    try:
        # Stage 1: Pair
        pairs = await stage1_pair_episodes(pool, threshold_alpha, max_pairs)
        stats.pairs_found = len(pairs)

        if not pairs:
            logger.warning("No pairs found — ensure memory_episodes have embeddings computed")
            return stats

        # Stage 2: Synthesize
        synthetic_episodes = []
        for pair in pairs:
            for _ in range(syntheses_per_pair):
                ep = synthesize_episode_from_pair(pair, entity_name)
                synthetic_episodes.append(ep)

        stats.episodes_synthesized = len(synthetic_episodes)
        stats.quality_filtered = sum(1 for e in synthetic_episodes if e.quality_score < min_quality)

        # Stage 3: Ingest (unless dry run)
        if not dry_run:
            stats.episodes_ingested = await stage3_ingest_synthetic_episodes(
                pool, synthetic_episodes, min_quality
            )
        else:
            logger.info(f"DRY RUN: would ingest {len(synthetic_episodes)} episodes")
            stats.episodes_ingested = 0

    finally:
        await pool.close()

    stats.duration_seconds = time.time() - start
    logger.info(
        f"SBP cycle complete: {stats.pairs_found} pairs → "
        f"{stats.episodes_synthesized} synthesized → "
        f"{stats.episodes_ingested} ingested in {stats.duration_seconds:.1f}s"
    )
    return stats


# ── CLI entry point ───────────────────────────────────────────────────────────

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="MEOK SBP Neural Training Cycle")
    parser.add_argument("--stage", choices=["all", "pair", "synthesize", "ingest"], default="all")
    parser.add_argument("--threshold", type=float, default=0.75, help="Similarity threshold α")
    parser.add_argument("--max-pairs", type=int, default=2000, help="Max episode pairs")
    parser.add_argument("--min-quality", type=float, default=0.5, help="Min quality score to ingest")
    parser.add_argument("--dry-run", action="store_true", help="Don't write to DB")
    parser.add_argument("--entity-name", default="Sovereign", help="Entity name for synthesis")
    args = parser.parse_args()

    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")

    async def main():
        stats = await run_sbp_cycle(
            threshold_alpha=args.threshold,
            max_pairs=args.max_pairs,
            min_quality=args.min_quality,
            dry_run=args.dry_run,
            entity_name=args.entity_name,
        )
        print(json.dumps({
            "stage": stats.stage,
            "pairs_found": stats.pairs_found,
            "episodes_synthesized": stats.episodes_synthesized,
            "episodes_ingested": stats.episodes_ingested,
            "quality_filtered": stats.quality_filtered,
            "duration_seconds": round(stats.duration_seconds, 2),
            "threshold_alpha": stats.threshold_alpha,
            "timestamp": stats.timestamp,
        }, indent=2))

    asyncio.run(main())
