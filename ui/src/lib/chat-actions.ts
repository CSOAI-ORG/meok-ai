/**
 * MEOK AI LABS — Chat Action Utilities
 *
 * Client-side helpers for chat interaction buttons:
 * - Copy to clipboard
 * - Export conversation as markdown
 * - Truncate message for conversation title
 */

/**
 * Copy text to the clipboard using the Clipboard API.
 * Returns true on success, false on failure.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers or insecure contexts
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  }
}

/**
 * Format a conversation as readable markdown for export.
 */
export function formatForExport(
  messages: Array<{ role: string; content: string }>,
  companionName: string,
): string {
  const date = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const lines = [
    `# Conversation with ${companionName}`,
    `_Exported on ${date}_`,
    '',
    '---',
    '',
  ];

  for (const msg of messages) {
    const speaker = msg.role === 'user' ? 'You' : companionName;
    lines.push(`**${speaker}:**`);
    lines.push(msg.content);
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Truncate the first user message to use as a conversation title.
 * Strips newlines and trims to maxLen characters.
 */
export function truncateForTitle(text: string, maxLen = 50): string {
  const cleaned = text.replace(/\n+/g, ' ').trim();
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, maxLen - 1).trimEnd() + '\u2026';
}
