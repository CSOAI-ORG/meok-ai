/**
 * MEOK AI LABS — Character Database Seed Script
 *
 * Seeds the PostgreSQL characters table from the static TS data.
 * Generates bge-m3 personality embeddings via M2 Ollama (1024-dim).
 *
 * Usage:
 *   DATABASE_URL=postgres://... npx tsx scripts/seed-characters.ts
 *   DATABASE_URL=postgres://... npx tsx scripts/seed-characters.ts --no-embeddings
 *
 * Options:
 *   --no-embeddings   Skip embedding generation (seeds metadata only, faster)
 *   --force           Re-embed all characters even if already seeded
 *   --batch N         Batch size for embedding calls (default: 10)
 *
 * Requires:
 *   - DATABASE_URL pointing to Neon (with pgvector + migrate-v6.sql applied)
 *   - M2 Ollama running with bge-m3: http://192.168.1.159:11434 (or M2_OLLAMA_HOST env)
 */

import 'dotenv/config';

const M2_OLLAMA_HOST = process.env.M2_OLLAMA_HOST ?? '192.168.1.159';
const M2_OLLAMA_PORT = process.env.M2_OLLAMA_PORT ?? '11434';
const M2_OLLAMA_URL  = `http://${M2_OLLAMA_HOST}:${M2_OLLAMA_PORT}`;
const EMBED_MODEL    = 'bge-m3';

// Parse CLI flags
const args = process.argv.slice(2);
const NO_EMBEDDINGS = args.includes('--no-embeddings');
const FORCE_EMBED   = args.includes('--force');
const BATCH_SIZE    = parseInt(args.find(a => a.startsWith('--batch='))?.split('=')[1] ?? '10', 10);

// ── Static character data ─────────────────────────────────────────────────────

// Import after dotenv so DATABASE_URL is available
const { getAllCharacters } = await import('../src/lib/characters.js');
const { dbUpsertCharacter } = await import('../src/lib/db/characters.js');

// ── Embedding helper ──────────────────────────────────────────────────────────

async function getEmbedding(text: string): Promise<number[] | null> {
  try {
    const res = await fetch(`${M2_OLLAMA_URL}/api/embeddings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: EMBED_MODEL, prompt: text }),
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as { embedding: number[] };
    return data.embedding;
  } catch (err) {
    console.warn(`  ⚠️  Embedding failed: ${err}`);
    return null;
  }
}

function buildEmbedText(char: Awaited<ReturnType<typeof getAllCharacters>>[number]): string {
  // Build a rich text representation for embedding:
  // name + title + tagline + personality traits + tags
  const parts = [
    char.name,
    char.title ?? '',
    char.tagline ?? '',
    ...(char.personality ?? []),
    ...(char.tags ?? []),
  ].filter(Boolean);
  return parts.join('. ');
}

// ── Main seed ─────────────────────────────────────────────────────────────────

async function main() {
  console.log('🌱 MEOK Character Database Seed');
  console.log(`   DB: ${process.env.DATABASE_URL ? '✅' : '❌ DATABASE_URL missing'}`);
  console.log(`   M2 Ollama: ${M2_OLLAMA_URL}`);
  console.log(`   Embeddings: ${NO_EMBEDDINGS ? 'SKIP' : `${EMBED_MODEL}`}`);
  console.log();

  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is required');
    process.exit(1);
  }

  // Check M2 Ollama availability
  let ollamaAvailable = false;
  if (!NO_EMBEDDINGS) {
    try {
      const r = await fetch(`${M2_OLLAMA_URL}/api/tags`, { signal: AbortSignal.timeout(5000) });
      ollamaAvailable = r.ok;
      console.log(`   M2 Ollama: ${ollamaAvailable ? '✅ connected' : '❌ unavailable'}`);
    } catch {
      console.log(`   M2 Ollama: ❌ unreachable — seeding without embeddings`);
    }
    console.log();
  }

  const characters = getAllCharacters();
  console.log(`📦 Found ${characters.length} characters to seed`);
  console.log();

  let seeded = 0;
  let embedded = 0;
  let failed = 0;

  // Process in batches
  for (let i = 0; i < characters.length; i += BATCH_SIZE) {
    const batch = characters.slice(i, i + BATCH_SIZE);

    await Promise.all(batch.map(async (char) => {
      try {
        let personalityEmbedding: number[] | undefined;

        if (!NO_EMBEDDINGS && ollamaAvailable) {
          const embedText = buildEmbedText(char);
          const emb = await getEmbedding(embedText);
          if (emb && emb.length === 1024) {
            personalityEmbedding = emb;
            embedded++;
          }
        }

        await dbUpsertCharacter({
          id:                 char.id,
          name:               char.name,
          title:              char.title,
          archetype:          char.archetype,
          emoji:              char.emoji,
          color:              char.color,
          tagline:            char.tagline,
          systemPrompt:       char.systemPrompt,
          personality:        char.personality,
          tags:               char.tags,
          tier:               char.tier,
          license:            char.license ?? 'original',
          voiceStyle:         char.voiceStyle,
          communicationStyle: char.communicationStyle,
          dynamism:           char.dynamism,
          dimensions:         char.dimensions as Record<string, number> | undefined,
          personalityEmbedding,
          isMarketplace:      char.license === 'CC0',
        });

        seeded++;
        process.stdout.write(`\r  ✅ ${seeded}/${characters.length} seeded${embedded > 0 ? `, ${embedded} embedded` : ''}`);
      } catch (err) {
        failed++;
        console.error(`\n  ❌ Failed to seed '${char.id}': ${err}`);
      }
    }));
  }

  console.log(`\n\n✅ Seed complete!`);
  console.log(`   Seeded:   ${seeded} characters`);
  console.log(`   Embedded: ${embedded} characters (bge-m3 1024-dim)`);
  if (failed > 0) console.log(`   Failed:   ${failed} characters`);
  console.log();
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
