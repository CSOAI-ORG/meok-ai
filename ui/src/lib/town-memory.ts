/**
 * Persistent per-agent conversation memory for the Aethelgard Finance Hive.
 *
 * Uses Upstash Redis when UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
 * are configured; otherwise falls back to an in-memory Map (history is lost on
 * server restart but works fine for local development).
 */

import { Redis } from '@upstash/redis';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const TTL_SECONDS = 24 * 60 * 60; // 24 hours
const MAX_TURNS = 20; // last N user+assistant exchanges

function getKey(agentId: string, userId: string): string {
  return `town:chat:${agentId}:${userId}`;
}

function createRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

const memoryStore = new Map<string, Message[]>();

function capHistory(messages: Message[]): Message[] {
  // Each turn is a user message + assistant reply. Keep the last MAX_TURNS turns
  // (i.e. MAX_TURNS * 2 messages) to control token usage.
  if (messages.length <= MAX_TURNS * 2) return messages;
  return messages.slice(-MAX_TURNS * 2);
}

/**
 * Load the persisted conversation history for an agent + user pair.
 */
export async function loadHistory(agentId: string, userId?: string): Promise<Message[]> {
  const uid = userId || 'anon';
  const key = getKey(agentId, uid);

  const redis = createRedisClient();
  if (redis) {
    try {
      const data = await redis.get<Message[]>(key);
      if (Array.isArray(data)) {
        return capHistory(data);
      }
    } catch (err) {
      console.warn(`[town-memory] Redis load failed for ${key}:`, err);
    }
  }

  return capHistory(memoryStore.get(key) ?? []);
}

/**
 * Persist the conversation history for an agent + user pair.
 */
export async function saveHistory(agentId: string, messages: Message[], userId?: string): Promise<void> {
  const uid = userId || 'anon';
  const key = getKey(agentId, uid);
  const capped = capHistory(messages);

  const redis = createRedisClient();
  if (redis) {
    try {
      await redis.set(key, capped, { ex: TTL_SECONDS });
      return;
    } catch (err) {
      console.warn(`[town-memory] Redis save failed for ${key}, falling back to memory:`, err);
    }
  }

  memoryStore.set(key, capped);
}
