// context-compressor.ts
// Head-plus-tail context compression for the MEOK chat pipeline.
// Keeps first HEAD_MESSAGES + last TAIL_MESSAGES, summarizes the middle.
// TODO: replace extractive summarizeMiddle with a real LLM call (gpt-4o-mini or claude-haiku).

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface CompressionResult {
  messages: ChatMessage[]
  wasCompressed: boolean
  originalCount: number
  compressedCount: number
  summaryTokenEstimate: number
}

// Config
export const COMPRESSION_CONFIG = {
  HEAD_MESSAGES: 3,           // Keep first N messages
  TAIL_MESSAGES: 4,           // Keep last N messages
  COMPRESS_THRESHOLD: 10,     // Only compress if total > this
  TARGET_SUMMARY_TOKENS: 200, // Target summary length
}

/**
 * Compresses a message array using head-plus-tail strategy.
 * If messages.length <= threshold, returns as-is with wasCompressed: false.
 * Otherwise keeps head + tail and inserts an extractive summary in the middle.
 */
export async function compressContext(
  messages: ChatMessage[],
  userId: string,
  options?: {
    headMessages?: number
    tailMessages?: number
    compressThreshold?: number
  }
): Promise<CompressionResult> {
  const headCount = options?.headMessages ?? COMPRESSION_CONFIG.HEAD_MESSAGES
  const tailCount = options?.tailMessages ?? COMPRESSION_CONFIG.TAIL_MESSAGES
  const threshold = options?.compressThreshold ?? COMPRESSION_CONFIG.COMPRESS_THRESHOLD

  if (!shouldCompress(messages, threshold)) {
    return {
      messages,
      wasCompressed: false,
      originalCount: messages.length,
      compressedCount: messages.length,
      summaryTokenEstimate: 0,
    }
  }

  const head = messages.slice(0, headCount)
  const tail = messages.slice(-tailCount)
  const middle = messages.slice(headCount, -tailCount)

  const summary = await summarizeMiddle(middle)
  const summaryMessage: ChatMessage = {
    role: 'system',
    content: `[Earlier conversation summary]: ${summary}`,
  }

  const compressed = [...head, summaryMessage, ...tail]

  return {
    messages: compressed,
    wasCompressed: true,
    originalCount: messages.length,
    compressedCount: compressed.length,
    summaryTokenEstimate: estimateTokens(summary),
  }
}

/**
 * Produces a plain-English extractive summary of the middle messages.
 * Samples every 3rd message, joins with " | ", and truncates to TARGET_SUMMARY_TOKENS.
 *
 * TODO: replace with a real LLM summarization call:
 *   - Fast model: gpt-4o-mini or claude-haiku
 *   - Prompt: "Summarize the following conversation excerpt in under 200 tokens..."
 *   - Stream or non-stream, fire-and-forget cache optional
 */
async function summarizeMiddle(messages: ChatMessage[]): Promise<string> {
  if (messages.length === 0) return ''

  const sampled = messages
    .filter((_, i) => i % 3 === 0)
    .map((m) => m.content.trim())
    .filter(Boolean)

  const joined = sampled.join(' | ')
  const prefixed = `Earlier in this conversation: ${joined}`

  // Truncate at word boundary to stay within TARGET_SUMMARY_TOKENS
  return truncateToTokens(prefixed, COMPRESSION_CONFIG.TARGET_SUMMARY_TOKENS)
}

/**
 * Simple token estimator: words * 1.3.
 * Close enough for compression threshold decisions; not suitable for billing.
 */
export function estimateTokens(text: string): number {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  return Math.ceil(wordCount * 1.3)
}

/**
 * Returns true if the message array is long enough to warrant compression.
 */
export function shouldCompress(
  messages: ChatMessage[],
  threshold?: number
): boolean {
  return messages.length > (threshold ?? COMPRESSION_CONFIG.COMPRESS_THRESHOLD)
}

/**
 * Assembles the final context window from a system prompt, memory context,
 * and (potentially compressed) conversation messages.
 *
 * Layout:
 *   1. System message  = systemPrompt + "\n\n" + memoryContext
 *   2. Compression pass (if messages exceed threshold)
 *   3. Return [...systemMessages, ...compressedMessages]
 *
 * maxTokens default: 16000 (safe for most Claude / GPT models).
 * Note: token budget enforcement beyond compression is a TODO — currently
 * we rely on compression alone and trust callers to pass reasonable input.
 */
export function buildContextWindow(
  systemPrompt: string,
  memoryContext: string,
  messages: ChatMessage[],
  maxTokens?: number
): ChatMessage[] {
  void maxTokens // reserved for future hard-trim pass

  const systemContent = memoryContext
    ? `${systemPrompt}\n\n${memoryContext}`
    : systemPrompt

  const systemMessage: ChatMessage = {
    role: 'system',
    content: systemContent,
  }

  // Synchronous fast-path: check threshold before async compress.
  // Callers that need async compression should call compressContext() directly
  // and then prepend the system message themselves.
  if (!shouldCompress(messages)) {
    return [systemMessage, ...messages]
  }

  // Inline synchronous fallback (same logic as compressContext but without await).
  // This keeps buildContextWindow synchronous for call sites that can't await.
  const head = messages.slice(0, COMPRESSION_CONFIG.HEAD_MESSAGES)
  const tail = messages.slice(-COMPRESSION_CONFIG.TAIL_MESSAGES)
  const middle = messages.slice(
    COMPRESSION_CONFIG.HEAD_MESSAGES,
    -COMPRESSION_CONFIG.TAIL_MESSAGES
  )

  const sampled = middle
    .filter((_, i) => i % 3 === 0)
    .map((m) => m.content.trim())
    .filter(Boolean)
    .join(' | ')

  const summary = truncateToTokens(
    `Earlier in this conversation: ${sampled}`,
    COMPRESSION_CONFIG.TARGET_SUMMARY_TOKENS
  )

  const summaryMessage: ChatMessage = {
    role: 'system',
    content: `[Earlier conversation summary]: ${summary}`,
  }

  return [systemMessage, ...head, summaryMessage, ...tail]
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Truncates text to approximately maxTokens by cutting at the nearest word
 * boundary below the estimated token budget.
 */
function truncateToTokens(text: string, maxTokens: number): string {
  const words = text.split(/\s+/)
  // estimateTokens uses words * 1.3, so max words ≈ maxTokens / 1.3
  const maxWords = Math.floor(maxTokens / 1.3)
  if (words.length <= maxWords) return text
  return words.slice(0, maxWords).join(' ')
}
