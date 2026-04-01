/**
 * Tests for context-compressor.ts — head-plus-tail message compression.
 */
import { compressContext, COMPRESSION_CONFIG, type ChatMessage } from '@/lib/context-compressor';

function makeMessages(count: number): ChatMessage[] {
  return Array.from({ length: count }, (_, i) => ({
    role: i % 2 === 0 ? 'user' as const : 'assistant' as const,
    content: `Message ${i + 1}: ${'x'.repeat(50)}`,
  }));
}

describe('compressContext', () => {
  it('returns uncompressed when below threshold', async () => {
    const msgs = makeMessages(5);
    const result = await compressContext(msgs, 'user-1');
    expect(result.wasCompressed).toBe(false);
    expect(result.messages).toEqual(msgs);
    expect(result.compressedCount).toBe(5);
  });

  it('returns uncompressed when exactly at threshold', async () => {
    const msgs = makeMessages(COMPRESSION_CONFIG.COMPRESS_THRESHOLD);
    const result = await compressContext(msgs, 'user-1');
    expect(result.wasCompressed).toBe(false);
  });

  it('compresses when above threshold', async () => {
    const msgs = makeMessages(20);
    const result = await compressContext(msgs, 'user-1');
    expect(result.wasCompressed).toBe(true);
    expect(result.compressedCount).toBeLessThan(20);
    expect(result.originalCount).toBe(20);
  });

  it('preserves head messages', async () => {
    const msgs = makeMessages(20);
    const result = await compressContext(msgs, 'user-1');
    // First HEAD_MESSAGES should be preserved
    for (let i = 0; i < COMPRESSION_CONFIG.HEAD_MESSAGES; i++) {
      expect(result.messages[i].content).toBe(msgs[i].content);
    }
  });

  it('preserves tail messages', async () => {
    const msgs = makeMessages(20);
    const result = await compressContext(msgs, 'user-1');
    const tail = COMPRESSION_CONFIG.TAIL_MESSAGES;
    // Last TAIL_MESSAGES should be preserved
    for (let i = 0; i < tail; i++) {
      const resultIdx = result.messages.length - tail + i;
      const origIdx = msgs.length - tail + i;
      expect(result.messages[resultIdx].content).toBe(msgs[origIdx].content);
    }
  });

  it('inserts a summary message in the middle', async () => {
    const msgs = makeMessages(20);
    const result = await compressContext(msgs, 'user-1');
    const summaryMsg = result.messages.find(m => m.content.includes('[Earlier conversation summary]'));
    expect(summaryMsg).toBeDefined();
    expect(summaryMsg?.role).toBe('system');
  });

  it('empty messages returns empty', async () => {
    const result = await compressContext([], 'user-1');
    expect(result.wasCompressed).toBe(false);
    expect(result.messages).toEqual([]);
  });

  it('respects custom options', async () => {
    const msgs = makeMessages(15);
    const result = await compressContext(msgs, 'user-1', {
      headMessages: 2,
      tailMessages: 2,
      compressThreshold: 5,
    });
    expect(result.wasCompressed).toBe(true);
    // 2 head + 1 summary + 2 tail = 5
    expect(result.compressedCount).toBe(5);
  });
});

describe('COMPRESSION_CONFIG', () => {
  it('has sensible defaults', () => {
    expect(COMPRESSION_CONFIG.HEAD_MESSAGES).toBeGreaterThanOrEqual(1);
    expect(COMPRESSION_CONFIG.TAIL_MESSAGES).toBeGreaterThanOrEqual(1);
    expect(COMPRESSION_CONFIG.COMPRESS_THRESHOLD).toBeGreaterThan(
      COMPRESSION_CONFIG.HEAD_MESSAGES + COMPRESSION_CONFIG.TAIL_MESSAGES
    );
  });
});
