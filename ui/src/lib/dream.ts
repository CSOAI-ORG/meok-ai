/**
 * MEOK AI LABS — Dream Cycle Processor
 *
 * Simulates overnight "dreaming" by analysing recent conversation messages,
 * extracting keyword themes, and surfacing cross-topic connections.
 * Runs entirely in-process with no external dependencies.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DreamInsight {
  /** The recurring pattern or theme detected */
  pattern: string;
  /** Related topics that bridge across conversations */
  connections: string[];
  /** A human-readable insight derived from the pattern */
  insight: string;
  /** Confidence score from 0 to 1 */
  confidence: number;
}

interface Message {
  content: string;
  timestamp: string;
}

// ─── Stopwords ───────────────────────────────────────────────────────────────

const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'is', 'it', 'its', 'as', 'be', 'was',
  'were', 'been', 'are', 'am', 'do', 'did', 'does', 'has', 'had', 'have',
  'will', 'would', 'could', 'should', 'may', 'might', 'shall', 'can',
  'this', 'that', 'these', 'those', 'i', 'me', 'my', 'we', 'us', 'our',
  'you', 'your', 'he', 'him', 'his', 'she', 'her', 'they', 'them', 'their',
  'what', 'which', 'who', 'whom', 'how', 'when', 'where', 'why',
  'not', 'no', 'nor', 'if', 'then', 'so', 'too', 'very', 'just',
  'about', 'up', 'out', 'all', 'also', 'than', 'more', 'some', 'any',
  'each', 'only', 'other', 'into', 'over', 'after', 'before', 'between',
  'same', 'own', 'such', 'both', 'through', 'during', 'here', 'there',
  'again', 'once', 'now', 'well', 'like', 'get', 'got', 'go', 'going',
  'really', 'know', 'think', 'thing', 'things', 'much', 'even', 'still',
  'back', 'way', 'want', 'make', 'made', 'say', 'said', 'one', 'two',
  'don', 'doesn', 'didn', 'won', 'isn', 'aren', 'wasn', 'weren', 'hasn',
  'haven', 'hadn', 'couldn', 'wouldn', 'shouldn', 'let', 'need', 'okay',
  'oh', 'yeah', 'yes', 'no', 'ok', 'right', 'sure', 'actually', 'maybe',
]);

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Extracts meaningful keywords from text, filtering stopwords and short tokens.
 */
function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOPWORDS.has(word));
}

/**
 * Counts keyword frequency across all messages, returning entries sorted descending.
 */
function getFrequencyThemes(
  messages: Message[],
): Array<{ keyword: string; count: number }> {
  const freq = new Map<string, number>();

  for (const msg of messages) {
    const words = extractKeywords(msg.content);
    // Count unique keywords per message to avoid single-message inflation
    const unique = new Set(words);
    for (const word of unique) {
      freq.set(word, (freq.get(word) ?? 0) + 1);
    }
  }

  return Array.from(freq.entries())
    .map(([keyword, count]) => ({ keyword, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Finds keywords that appear across messages with different dominant topics,
 * indicating cross-topic connections.
 */
function findCrossTopicConnections(
  messages: Message[],
  topThemes: string[],
): Map<string, Set<string>> {
  const connections = new Map<string, Set<string>>();

  for (const msg of messages) {
    const keywords = new Set(extractKeywords(msg.content));
    // Determine which top themes appear in this message
    const presentThemes = topThemes.filter((t) => keywords.has(t));

    // Every non-theme keyword that co-occurs with multiple themes is a connector
    for (const word of keywords) {
      if (topThemes.includes(word)) continue;
      if (presentThemes.length >= 2) {
        if (!connections.has(word)) connections.set(word, new Set());
        for (const theme of presentThemes) {
          connections.get(word)!.add(theme);
        }
      }
    }
  }

  return connections;
}

// ─── Core Functions ──────────────────────────────────────────────────────────

/**
 * Processes a set of recent messages through the dream cycle, extracting
 * recurring patterns, frequency themes, and cross-topic connections.
 *
 * @param messages - Array of conversation messages with content and timestamp
 * @returns Array of DreamInsight objects, sorted by confidence descending
 */
export function processDreamCycle(messages: Message[]): DreamInsight[] {
  if (messages.length === 0) return [];

  const insights: DreamInsight[] = [];
  const themes = getFrequencyThemes(messages);
  const totalMessages = messages.length;

  // Top themes are those appearing in at least 15% of messages (min 2 occurrences)
  const minOccurrences = Math.max(2, Math.ceil(totalMessages * 0.15));
  const topThemes = themes
    .filter((t) => t.count >= minOccurrences)
    .slice(0, 10)
    .map((t) => t.keyword);

  // Generate insights from frequency themes
  for (const theme of themes.slice(0, 8)) {
    if (theme.count < 2) continue;

    const confidence = Math.min(1, theme.count / totalMessages);

    insights.push({
      pattern: theme.keyword,
      connections: topThemes.filter((t) => t !== theme.keyword).slice(0, 3),
      insight: `You mentioned "${theme.keyword}" across ${theme.count} conversations — this seems important to you right now.`,
      confidence: Math.round(confidence * 100) / 100,
    });
  }

  // Generate insights from cross-topic connections
  const crossConnections = findCrossTopicConnections(messages, topThemes);

  for (const [connector, linkedThemes] of crossConnections) {
    if (linkedThemes.size < 2) continue;

    const themesArr = Array.from(linkedThemes);
    const confidence = Math.min(1, (linkedThemes.size * 0.3));

    insights.push({
      pattern: connector,
      connections: themesArr,
      insight: `"${connector}" bridges your thoughts about ${themesArr.join(' and ')} — there might be a deeper connection worth exploring.`,
      confidence: Math.round(confidence * 100) / 100,
    });
  }

  // Sort by confidence descending, cap at 5 insights
  return insights
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 5);
}

/**
 * Formats dream insights into a friendly morning greeting message.
 *
 * @param insights - Array of DreamInsight objects from processDreamCycle
 * @returns A formatted morning insight string
 */
export function formatMorningInsight(insights: DreamInsight[]): string {
  if (insights.length === 0) {
    return 'While thinking about your conversations overnight, I noticed... it was a quiet night. Looking forward to today\'s conversations.';
  }

  const lines: string[] = [
    'While thinking about your conversations overnight, I noticed...',
    '',
  ];

  for (const insight of insights) {
    lines.push(`  - ${insight.insight}`);
  }

  if (insights.some((i) => i.connections.length >= 2)) {
    lines.push('');
    lines.push('There seem to be some threads connecting these ideas. Want to explore them together?');
  }

  return lines.join('\n');
}
