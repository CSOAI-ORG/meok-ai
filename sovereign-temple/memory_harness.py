"""
MEOK Memory Enhancement - Context Compression
Adds context compression for long conversations
"""

from typing import List, Dict, Any


class ContextCompressor:
    """Compresses conversation context while preserving key information."""

    def __init__(self, max_messages: int = 20, summarize_older: bool = True):
        self.max_messages = max_messages
        self.summarize_older = summarize_older

    def compress(
        self,
        messages: List[Dict[str, str]],
        summary_prompt: str = "Summarize this conversation briefly, preserving key facts, preferences, and decisions:",
    ) -> List[Dict[str, str]]:
        """Compress messages to fit within token limits."""

        if len(messages) <= self.max_messages:
            return messages

        # Keep recent messages (half of max)
        keep_count = self.max_messages // 2
        recent = messages[-keep_count:]

        # Summarize older messages
        older = messages[:-keep_count]

        if not older:
            return recent

        # Create a summary message
        older_text = "\n".join(
            f"{m.get('role', 'user')}: {m.get('content', '')}" for m in older
        )

        # In production, you'd call an LLM to summarize
        # For now, create a placeholder summary
        summary = {
            "role": "system",
            "content": f"[Previous {len(older)} messages summarized. Key points: {len(older)} earlier messages condensed]",
        }

        return [summary] + recent

    def get_priority_score(self, message: Dict[str, Any]) -> float:
        """Calculate priority score for a message (for selective retention)."""
        content = message.get("content", "").lower()
        score = 0.0

        # Important keywords
        important_words = [
            "remember",
            "preference",
            "important",
            "never",
            "always",
            "favorite",
            "hate",
            "love",
            "don't forget",
            "make sure",
            "task",
            "deadline",
            "goal",
            "plan",
            "decision",
        ]

        for word in important_words:
            if word in content:
                score += 1.0

        # Recent messages have higher priority
        # (in real implementation, track timestamps)

        return score


class MemoryHarness:
    """
    Recursive Memory Harness (inspired by Ori-Mnemos)
    Manages memory lifecycle: encode, consolidate, retrieve, forget
    """

    def __init__(self, db_connection=None):
        self.db = db_connection
        self.compressor = ContextCompressor()

    def encode(self, interaction: Dict[str, Any]) -> Dict[str, Any]:
        """Encode an interaction into memory."""
        memory = {
            "content": interaction.get("content", ""),
            "timestamp": interaction.get("timestamp"),
            "emotion": interaction.get("emotion", "neutral"),
            "importance": self._calculate_importance(interaction),
            "recency_weight": 1.0,
            "access_count": 0,
        }
        return memory

    def _calculate_importance(self, interaction: Dict[str, Any]) -> float:
        """Calculate importance score (0-1)."""
        content = interaction.get("content", "").lower()
        score = 0.5  # Base score

        # Important markers
        if any(w in content for w in ["remember", "important", "never forget"]):
            score += 0.3
        if any(w in content for w in ["preference", "like", "hate", "love"]):
            score += 0.2
        if any(w in content for w in ["task", "deadline", "goal"]):
            score += 0.2

        # Emotion intensity
        emotion = interaction.get("emotion", "neutral")
        if emotion in ["excited", "loving"]:
            score += 0.1
        elif emotion in ["sad", "worried"]:
            score += 0.1

        return min(score, 1.0)

    def consolidate(self, memories: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Consolidate related memories."""
        # Group by topic/keyword
        topics = {}
        for mem in memories:
            key = self._extract_topic(mem.get("content", ""))
            if key not in topics:
                topics[key] = []
            topics[key].append(mem)

        # Merge related memories
        consolidated = []
        for topic, group in topics.items():
            if len(group) > 1:
                # Merge into single consolidated memory
                merged = {
                    "content": f"Multiple interactions about {topic}",
                    "timestamp": max(m.get("timestamp") for m in group),
                    "emotion": group[0].get("emotion", "neutral"),
                    "importance": max(m.get("importance", 0) for m in group),
                    "access_count": sum(m.get("access_count", 0) for m in group),
                }
                consolidated.append(merged)
            else:
                consolidated.extend(group)

        return consolidated

    def _extract_topic(self, text: str) -> str:
        """Extract main topic from text (simplified)."""
        words = text.lower().split()
        # Return first meaningful word
        for word in words:
            if len(word) > 4:
                return word
        return "general"

    def retrieve(
        self, query: str, memories: List[Dict[str, Any]], top_k: int = 5
    ) -> List[Dict[str, Any]]:
        """Retrieve most relevant memories."""
        # Simple keyword matching (in production, use embeddings)
        query_words = set(query.lower().split())

        scored = []
        for mem in memories:
            content_words = set(mem.get("content", "").lower().split())
            overlap = len(query_words & content_words)

            # Combine with importance and recency
            score = (
                overlap * 0.4
                + mem.get("importance", 0.5) * 0.3
                + mem.get("recency_weight", 0.5) * 0.3
            )
            scored.append((score, mem))

        scored.sort(reverse=True)
        return [mem for _, mem in scored[:top_k]]

    def forget_gracefully(
        self, memories: List[Dict[str, Any]], max_memories: int = 1000
    ) -> List[Dict[str, Any]]:
        """Remove low-priority memories (graceful forgetting)."""
        if len(memories) <= max_memories:
            return memories

        # Score each memory for retention
        scored = []
        for mem in memories:
            score = (
                mem.get("importance", 0.5) * 0.4
                + mem.get("recency_weight", 0.5) * 0.3
                + min(mem.get("access_count", 0) / 100, 0.3)
            )
            scored.append((score, mem))

        # Keep top memories
        scored.sort(reverse=True)
        return [mem for _, mem in scored[:max_memories]]


# Usage in SOV3 consciousness:
"""
from memory_harness import MemoryHarness

# Initialize
memory = MemoryHarness(db_connection)

# Encode new interaction
encoded = memory.encode({
    "content": "I prefer dark mode for coding",
    "emotion": "happy",
    "timestamp": "2026-04-07T10:00:00Z"
})

# Compress long conversations
compressed = compressor.compress(messages)

# Retrieve relevant memories
relevant = memory.retrieve("preferences", all_memories, top_k=5)

# Graceful forgetting
pruned = memory.forget_gracefully(all_memories)
"""
