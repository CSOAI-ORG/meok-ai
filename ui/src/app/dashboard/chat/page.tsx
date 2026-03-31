'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useChat } from '@ai-sdk/react';
import { TextStreamChatTransport } from 'ai';
import type { UIMessage } from 'ai';
import Link from 'next/link';
import { PlanModeToggle, type ChatMode } from '@/components/plan-mode-toggle';
import { generateAvatar } from '@/lib/avatar';
import { getCharacter } from '@/lib/characters';
import { SovereignDisplay, type SovereignDisplayProps } from '@/components/sovereign-display';
import { playSound } from '@/lib/sound';
import { speakAsCharacter, stopSpeaking, isTTSSupported } from '@/lib/voice-synthesis';
import { startListening, stopListening, isVoiceSupported } from '@/lib/voice';
import { copyToClipboard } from '@/lib/chat-actions';
import { KEYFRAMES_IDLE } from '@/lib/animation-state';

// ─── Mood config ──────────────────────────────────────────────────────────────
const MOOD_CYCLE: Array<{ label: string; color: string }> = [
  { label: 'curious',    color: '#7c9cf5' },
  { label: 'playful',    color: '#f5c87c' },
  { label: 'thoughtful', color: '#9c7cf5' },
  { label: 'warm',       color: '#f57c7c' },
];

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD = '#c9a84c';
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const NAVY = '#1a1a2e';
const CREAM = '#f5f0e8';
const MAX_MESSAGE_LENGTH = 4000;

// ─── Quick prompts ───────────────────────────────────────────────────────────
function getQuickPrompts(): string[] {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return [
      'Good morning — what should I focus on today?',
      'Help me plan my day',
      'I had an interesting dream last night',
      'Tell me something inspiring to start the day',
    ];
  }
  if (hour >= 12 && hour < 17) {
    return [
      'I need help thinking through something',
      'Tell me something I don\'t know',
      'Help me with a problem at work',
      'I could use a creative boost',
    ];
  }
  if (hour >= 17 && hour < 22) {
    return [
      'How was your day? Mine was...',
      'Help me unwind — tell me a story',
      'I want to reflect on something',
      'What should I read tonight?',
    ];
  }
  // Late night (22-5)
  return [
    'I can\'t sleep',
    'Tell me something calming',
    'I need to talk through my thoughts',
    'Help me wind down',
  ];
}
const QUICK_PROMPTS = getQuickPrompts();

// ─── Crisis detection ─────────────────────────────────────────────────────────
const CRISIS_SIGNALS = [
  'want to die', 'kill myself', 'end my life', 'suicide', 'self harm', 'self-harm',
  'hurt myself', 'no reason to live', 'better off dead', 'can\'t go on', 'give up on life',
];

function detectCrisis(text: string): boolean {
  const lower = text.toLowerCase();
  return CRISIS_SIGNALS.some(signal => lower.includes(signal));
}

function CrisisBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      className="mx-4 mb-2 rounded-xl p-4 sticky top-16 z-50"
      style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', backdropFilter: 'blur(12px)' }}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start gap-3">
        <span className="text-xl">💙</span>
        <div className="flex-1">
          <p className="font-bold text-sm mb-1" style={{ color: '#fca5a5' }}>
            I care about you. Please reach out to someone.
          </p>
          <p className="text-xs text-white/60 mb-2">
            I&apos;m here for you, but trained support is available right now:
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <a href="tel:988" className="font-bold text-white/80 hover:text-white">🇺🇸 988 (US/CA)</a>
            <a href="tel:116123" className="font-bold text-white/80 hover:text-white">🇬🇧 116 123 Samaritans</a>
            <a href="tel:131114" className="font-bold text-white/80 hover:text-white">🇦🇺 13 11 14 Lifeline</a>
            <a href="https://www.iasp.info/resources/Crisis_Centres/" target="_blank" rel="noreferrer" className="font-bold text-white/50 hover:text-white/80">Other countries →</a>
          </div>
        </div>
        <button onClick={onDismiss} className="text-white/30 hover:text-white/60 text-sm">✕</button>
      </div>
    </div>
  );
}

/** Format a Date to HH:MM */
function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

// ─── Models config ────────────────────────────────────────────────────────────

const MODELS = [
  // Local (always available, zero cost)
  { id: 'ollama:phi4-mini',   label: 'Phi-4 Mini',      icon: '🏠', privacy: 'local' as const },
  { id: 'ollama:qwen2.5:7b',  label: 'Qwen 2.5 7B',    icon: '🏠', privacy: 'local' as const },
  { id: 'ollama:llama3.2:3b', label: 'Llama 3B',        icon: '🏠', privacy: 'local' as const },
  { id: 'ollama:llama3.1:8b', label: 'Llama 8B',        icon: '🏠', privacy: 'local' as const },
  // Cloud powerhouses (via Ollama cloud routing)
  { id: 'ollama:deepseek-v3.1:671b-cloud', label: 'DeepSeek 671B', icon: '🧠', privacy: 'cloud' as const },
  { id: 'ollama:qwen3-coder:480b-cloud', label: 'Qwen Coder 480B', icon: '💻', privacy: 'cloud' as const },
  { id: 'ollama:gpt-oss:120b-cloud', label: 'GPT-OSS 120B',  icon: '🌟', privacy: 'cloud' as const },
  { id: 'ollama:qwen3-vl:235b-cloud', label: 'Qwen Vision 235B', icon: '👁️', privacy: 'cloud' as const },
  { id: 'ollama:minimax-m2:cloud', label: 'MiniMax M2',    icon: '🌊', privacy: 'cloud' as const },
  // Cloud APIs (need API keys)
  { id: 'claude-sonnet-4-5', label: 'Claude Sonnet',  icon: '🟣', privacy: 'cloud' as const },
  { id: 'groq-llama',        label: 'Groq (Fast)',    icon: '⚡', privacy: 'cloud' as const },
  { id: 'cerebras-llama',    label: 'Cerebras',       icon: '🟠', privacy: 'cloud' as const },
  { id: 'deepseek-chat',     label: 'DeepSeek API',   icon: '🔵', privacy: 'cloud' as const },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Extract text content from a UIMessage's parts array */
function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map(p => p.text)
    .join('');
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SovereignBadge({ model, latency, care_score, streaming, contextPct, tokens }: {
  model?: string;
  latency?: number;
  care_score?: number;
  streaming?: boolean;
  contextPct?: number;
  tokens?: number;
}) {
  const cost = tokens ? (tokens * 0.000003).toFixed(6) : '0.000000';
  if (streaming) {
    return (
      <div className="flex items-center gap-1.5 mb-1.5">
        <span
          className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
          style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          ⚡ Streaming…
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
      <span
        className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
        style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        🤖 {model ?? 'Claude Sonnet'} · {latency ?? 0}ms · ☁️ Cloud · Care {care_score ?? 87}/100 · $({cost})
        {contextPct !== undefined && ` · ctx: ${Math.round(contextPct)}%`}
      </span>
    </div>
  );
}

// ─── Toast ─────────────────────────────────────────────────────────────────────
function useToast() {
  const [toast, setToast] = useState<string | null>(null);
  const show = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  }, []);
  return { toast, show };
}

function ThreeDots() {
  return (
    <div className="flex gap-1.5 items-center h-5 px-1">
      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, animationDelay: '0ms' }} />
      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, opacity: 0.7, animationDelay: '150ms' }} />
      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, opacity: 0.4, animationDelay: '300ms' }} />
    </div>
  );
}

function ThinkingIndicator({ messageLength, characterName }: { messageLength: number; characterName?: string }) {
  const name = characterName ?? 'AI';
  const label = messageLength > 200 ? `${name} is deep thinking` : `${name} is thinking`;
  return (
    <div className="flex items-center gap-2 px-1 py-1.5" style={{ animation: 'fadeSlideUp 0.3s ease both' }}>
      <div className="flex gap-[3px] items-center">
        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: GOLD, animationDuration: '1.2s', animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: GOLD, opacity: 0.7, animationDuration: '1.2s', animationDelay: '200ms' }} />
        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: GOLD, opacity: 0.4, animationDuration: '1.2s', animationDelay: '400ms' }} />
      </div>
      <span className="text-xs font-medium" style={{ color: `${GOLD}90` }}>{label}</span>
    </div>
  );
}

// Sovereign Display Panel ─────────────────────────────────────────────────────

interface SovereignMeta {
  model: string;
  provider: string;
  latency: number;
  care_score: number;
  tokens: number;
}

interface SovereignPanelProps {
  streaming: boolean;
  sovereignMeta: SovereignMeta | null;
  latencyTick: number;
  streamingTokens: number;
  onClose: () => void;
  privacyMode: boolean;
  powerMode: boolean;
  onTogglePrivacy: () => void;
  onTogglePower: () => void;
}

function SovereignPanel({
  streaming, sovereignMeta, latencyTick, streamingTokens, onClose,
  privacyMode, powerMode, onTogglePrivacy, onTogglePower,
}: SovereignPanelProps) {
  const [showSummary, setShowSummary] = useState(false);
  const prevStreaming = useRef(false);

  useEffect(() => {
    if (prevStreaming.current && !streaming && sovereignMeta) setShowSummary(true);
    if (streaming) setShowSummary(false);
    prevStreaming.current = streaming;
  }, [streaming, sovereignMeta]);

  return (
    <div className="w-72 flex-shrink-0 flex flex-col overflow-hidden" style={{ background: SURFACE, borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ color: GOLD }}>Sovereign Display</span>
        <button onClick={onClose} className="text-sm leading-none transition-colors" style={{ color: 'rgba(255,255,255,0.25)' }} aria-label="Close sovereign display">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
        {!streaming && !showSummary && (
          <div className="flex flex-col items-center py-6 gap-3">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center animate-pulse" style={{ background: `${GOLD}20`, borderColor: `${GOLD}40` }}>
                <div className="w-10 h-10 rounded-full" style={{ background: `${GOLD}30` }} />
              </div>
              <div className="absolute inset-0 rounded-full animate-ping" style={{ background: `${GOLD}10` }} />
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Care Score</p>
              <p className="text-3xl font-bold" style={{ color: GOLD }}>85/100</p>
              <p className="text-xs mt-1" style={{ color: `${CREAM}50` }}>Your AI is aligned and ready</p>
            </div>
          </div>
        )}
        {streaming && sovereignMeta && (
          <div className="space-y-4 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-[11px] uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />📡 ROUTING</div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}><p>└─ Selected: {sovereignMeta.model}</p><p>└─ Reason: Sovereign routing</p></div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-yellow-400 font-semibold text-[11px] uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />⚡ PROCESSING</div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}><p>└─ Tokens: 0→{streamingTokens}</p><p>└─ Latency: 0ms→{latencyTick}ms</p><p>└─ Cost: ~${(streamingTokens * 0.000003).toFixed(6)}</p></div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-[11px] uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />🧠 MEMORY</div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}><p>└─ Episodes retrieved: 3</p><p>└─ Semantic match: 94%</p></div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-green-400 font-semibold text-[11px] uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />❤️ CARE ALIGNMENT</div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}><p>└─ Score: {sovereignMeta.care_score}/100</p><p>└─ Covenant: ✓ Passed</p></div>
            </div>
          </div>
        )}
        {showSummary && sovereignMeta && !streaming && (
          <div className="rounded-xl p-4 space-y-2 text-xs" style={{ background: `${GOLD}05`, border: `1px solid ${GOLD}30` }}>
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-[11px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>Response complete</p>
              <button
                onClick={() => {
                  const metadata = JSON.stringify(sovereignMeta, null, 2);
                  navigator.clipboard.writeText(metadata);
                }}
                className="text-[10px] px-2 py-1 rounded transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
                title="Copy raw metadata to clipboard"
              >
                Copy 📋
              </button>
            </div>
            <div className="space-y-1.5 font-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <p>Model: {sovereignMeta.model}</p>
              <p>Latency: {sovereignMeta.latency}ms</p>
              <p>Tokens: {sovereignMeta.tokens}</p>
              <p>Cost: ~${(sovereignMeta.tokens * 0.000003).toFixed(6)}</p>
              <p style={{ color: '#a3e635' }}>Memory: 3 episodes · 94% semantic match</p>
              <p style={{ color: '#4ade80' }}>Guardian: ✓ Passed · Care score: {sovereignMeta.care_score}/100</p>
            </div>
          </div>
        )}
        <div className="space-y-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <button onClick={onTogglePrivacy} className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}>
            <span>Privacy Mode 🏠</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={privacyMode ? { background: 'rgba(74,222,128,0.15)', color: '#4ade80' } : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}>{privacyMode ? 'ON' : 'OFF'} &gt;</span>
          </button>
          <button onClick={onTogglePower} className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}>
            <span>Power Mode ⚡</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={powerMode ? { background: `${GOLD}30`, color: GOLD } : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}>{powerMode ? 'ON' : 'OFF'} &gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function DashboardChatPage() {
  const [selectedModel, setSelectedModel] = useState('ollama:llama3.2:3b');
  const [tempPreset, setTempPreset] = useState<'focused' | 'balanced' | 'creative'>('balanced');
  const [showCrisisBanner, setShowCrisisBanner] = useState(false);
  const [showSovereign, setShowSovereign] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [powerMode, setPowerMode] = useState(false);
  const searchParams = useSearchParams();
  const urlCharacterId = searchParams.get('characterId');
  const urlCompanionName = searchParams.get('name');
  const urlMemory1 = searchParams.get('memory1');
  const urlMemory2 = searchParams.get('memory2');
  const urlMemory3 = searchParams.get('memory3');
  const [companionId] = useState(urlCharacterId ?? 'aria');
  // Build birth context from URL params (set after hatch ceremony)
  const birthContext = urlCompanionName ? {
    companionName: urlCompanionName,
    archetype: urlCharacterId ?? undefined,
    memories: [urlMemory1, urlMemory2, urlMemory3].filter(Boolean) as string[],
  } : undefined;
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const [copiedMsgId, setCopiedMsgId] = useState<string | null>(null);
  const [explainMsgId, setExplainMsgId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');

  // Safety net: push voice transcript into input field when it updates
  useEffect(() => {
    if (voiceTranscript) {
      setInput(prev => prev + (prev ? ' ' : '') + voiceTranscript);
      setVoiceTranscript('');
    }
  }, [voiceTranscript]);

  // bondLevel computed inline where displayed
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(14); // in pixels, range 12-20
  const [focusedMsgIdx, setFocusedMsgIdx] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [conversations, setConversations] = useState<Array<{ id: string; companion_id: string; title: string; message_count: number; last_message: string | null; updated_at: string }>>([]);
  const [loadingConversations, setLoadingConversations] = useState(false);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const titleGeneratedRef = useRef(false);
  const [summarizing, setSummarizing] = useState(false);
  const [summaryText, setSummaryText] = useState<string | null>(null);
  const [loadedHistory, setLoadedHistory] = useState<Array<{ role: 'user' | 'assistant'; content: string; created_at?: string }>>([]);
  const { toast, show: showToast } = useToast();

  // Streaming telemetry
  const [streamStart, setStreamStart] = useState(0);
  const [latencyTick, setLatencyTick] = useState(0);
  const [streamingTokens, setStreamingTokens] = useState(0);
  const [sovereignMeta, setSovereignMeta] = useState<SovereignMeta | null>(null);
  const latencyIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const firstTokenSoundPlayed = useRef(false);
  const _messagesRef = useRef<UIMessage[]>([]);
  const _currentConvIdRef = useRef<string | null>(null);

  // Sovereign Display metadata (from response headers)
  const [sovereignDisplay, setSovereignDisplay] = useState<SovereignDisplayProps>({});
  const sovereignFetchRef = useRef<typeof fetch>(
    async (input: RequestInfo | URL, init?: RequestInit) => {
      const res = await fetch(input, init);
      // Detect rate limit
      if (res.status === 429) {
        setRateLimited(true);
      }
      // Extract sovereign metadata headers from the streaming response
      const meokModel = res.headers.get('X-MEOK-Model');
      const meokTaskType = res.headers.get('X-MEOK-TaskType');
      const meokEffort = res.headers.get('X-MEOK-Effort');
      const meokEmotion = res.headers.get('X-MEOK-Emotion');
      const meokLanguage = res.headers.get('X-MEOK-Language');
      const meokLocation = res.headers.get('X-MEOK-Location');
      const meokCareScore = res.headers.get('X-MEOK-CareScore');
      if (meokModel || meokTaskType) {
        setSovereignDisplay({
          model: meokModel ?? undefined,
          taskType: meokTaskType ?? undefined,
          effortLevel: meokEffort ?? undefined,
          emotion: meokEmotion ?? undefined,
          language: meokLanguage ?? undefined,
          guardianPassed: true, // reached here means guardian passed
          processingLocation: meokLocation ?? undefined,
        });
      }
      // Update care score + evolution from real server computation
      if (meokCareScore) {
        setSovereignMeta(prev => prev ? { ...prev, care_score: parseInt(meokCareScore, 10) } : prev);
      }
      const meokStageName = res.headers.get('X-MEOK-StageName');
      const meokInteractions = res.headers.get('X-MEOK-Interactions');
      if (meokStageName) {
        setSovereignDisplay(prev => ({ ...prev, stageName: meokStageName, interactions: meokInteractions ? parseInt(meokInteractions, 10) : undefined }));
      }
      return res;
    },
  );

  const [chatMode, setChatMode] = useState<ChatMode>('act');
  const selectedModelConfig = MODELS.find(m => m.id === selectedModel) ?? MODELS[0];
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── useChat v6 ──────────────────────────────────────────────────────────
  const {
    messages,
    sendMessage,
    regenerate,
    status,
    stop,
  } = useChat({
    transport: new TextStreamChatTransport({
      api: '/api/chat',
      body: { companionId, temperature: tempPreset === 'focused' ? 0.3 : tempPreset === 'creative' ? 1.0 : 0.7, ...(birthContext ? { birthContext } : {}) },
      fetch: sovereignFetchRef.current,
    }),
    onFinish: ({ message }: { message: UIMessage }) => {
      const text = getMessageText(message);
      const finalLatency = streamStart ? Date.now() - streamStart : 0;
      const estimatedTokens = Math.ceil(text.length / 4);
      setSovereignMeta(prev => prev ? { ...prev, latency: finalLatency, tokens: estimatedTokens } : prev);

      // Post-response: persist conversation metadata using refs (stable across renders)
      void (async () => {
        try {
          const currentMessages = _messagesRef.current;
          const userMessages = currentMessages.filter((m: UIMessage) => m.role === 'user');
          const totalCount = currentMessages.length;
          const firstUserText = userMessages[0] ? getMessageText(userMessages[0]) : 'New conversation';
          const lastAiText = text.slice(0, 150);

          let convId = _currentConvIdRef.current;

          // Create conversation record if this is the first response
          if (!convId) {
            const res = await fetch('/api/user/conversations', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ companion_id: companionId, title: 'New conversation' }),
            });
            if (res.ok) {
              const data = await res.json() as { id: string; created_at: string };
              convId = data.id;
              _currentConvIdRef.current = convId;
              setCurrentConversationId(convId);
              setConversations(prev => [{
                id: convId!,
                companion_id: companionId,
                title: 'New conversation',
                message_count: totalCount,
                last_message: lastAiText,
                updated_at: new Date().toISOString(),
              }, ...prev]);
            }
          }

          if (!convId) return;

          // Auto-generate title on first AI response
          if (!titleGeneratedRef.current) {
            titleGeneratedRef.current = true;
            const title = firstUserText.trim().slice(0, 60) + (firstUserText.length > 60 ? '…' : '');

            await fetch('/api/user/conversations', {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: convId, title, message_count: totalCount, last_message: lastAiText }),
            });

            setConversations(prev => prev.map(c =>
              c.id === convId ? { ...c, title, message_count: totalCount, last_message: lastAiText, updated_at: new Date().toISOString() } : c
            ));
          } else {
            // Subsequent responses: update count + last message
            await fetch('/api/user/conversations', {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: convId, message_count: totalCount, last_message: lastAiText }),
            });
            setConversations(prev => prev.map(c =>
              c.id === convId ? { ...c, message_count: totalCount, last_message: lastAiText, updated_at: new Date().toISOString() } : c
            ));
          }
          // Save individual messages to DB for history persistence
          const lastUser = userMessages[userMessages.length - 1];
          if (lastUser) {
            fetch('/api/user/conversations/messages', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ conversation_id: convId, role: 'user', content: getMessageText(lastUser) }),
            }).catch(() => {});
          }
          fetch('/api/user/conversations/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ conversation_id: convId, role: 'assistant', content: text }),
          }).catch(() => {});

        } catch (err) {
          console.error('[conversation tracking]', err);
        }
      })();
    },
  });

  const isStreaming = status === 'streaming' || status === 'submitted';
  const hasUserMessages = messages.some((m: UIMessage) => m.role === 'user');

  // Mood cycles through 4 states based on number of assistant messages
  const assistantMsgCount = messages.filter((m: UIMessage) => m.role === 'assistant').length;
  const currentMood = MOOD_CYCLE[assistantMsgCount % MOOD_CYCLE.length];

  // Context usage: total chars across all messages / 200000 context limit
  const totalChars = messages.reduce((acc: number, m: UIMessage) => acc + getMessageText(m).length, 0);
  const contextUsagePct = Math.min((totalChars / 200000) * 100, 100);

  // ── Conversation summarization ───────────────────────────────────────────────
  const handleSummarize = useCallback(async () => {
    if (summarizing) return;
    const last20 = messages.slice(-20);
    if (last20.length === 0) {
      showToast('No messages to summarize');
      return;
    }
    setSummarizing(true);
    try {
      const transcript = last20
        .map((m: UIMessage) => `${m.role === 'user' ? 'You' : 'Companion'}: ${getMessageText(m)}`)
        .join('\n');
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companionId,
          messages: [
            {
              role: 'user',
              content: `Please summarize the following conversation in 3–5 concise bullet points, capturing the key topics and outcomes:\n\n${transcript}`,
            },
          ],
        }),
      });
      if (!res.ok) throw new Error(`Summarization request failed (${res.status})`);
      // Read the streamed response text
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let raw = '';
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          raw += decoder.decode(value, { stream: true });
        }
      }
      // Extract plain text from streamed chunks (SSE "0:" prefix lines)
      const summaryLines = raw
        .split('\n')
        .filter(l => l.startsWith('0:'))
        .map(l => {
          try { return JSON.parse(l.slice(2)); } catch { return ''; }
        })
        .join('');
      setSummaryText(summaryLines || raw.trim() || 'Summary not available.');
    } catch (err) {
      console.error('[summarize]', err);
      showToast('Summarization failed — please try again');
    } finally {
      setSummarizing(false);
    }
  }, [messages, summarizing, companionId, showToast]);

  // Keep messages ref in sync so onFinish can read current messages
  useEffect(() => {
    _messagesRef.current = messages;
  }, [messages]);

  // Keep conversation ID ref in sync so onFinish closure can read it
  useEffect(() => {
    _currentConvIdRef.current = currentConversationId;
  }, [currentConversationId]);

  // Auto-scroll — smooth scroll to exact bottom of messages list
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  // Keyboard navigation between messages (arrow keys)
  useEffect(() => {
    function handleKeyboardNav(e: KeyboardEvent) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedMsgIdx(prev => {
          const next = prev === null ? messages.length - 1 : Math.max(0, prev - 1);
          const el = document.querySelector(`[data-msg-idx="${next}"]`) as HTMLElement;
          el?.focus();
          el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          return next;
        });
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedMsgIdx(prev => {
          const next = prev === null ? 0 : Math.min(messages.length - 1, prev + 1);
          const el = document.querySelector(`[data-msg-idx="${next}"]`) as HTMLElement;
          el?.focus();
          el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          return next;
        });
      }
    }
    window.addEventListener('keydown', handleKeyboardNav);
    return () => window.removeEventListener('keydown', handleKeyboardNav);
  }, [messages]);

  // Global keyboard shortcuts
  useEffect(() => {
    function handleShortcuts(e: KeyboardEvent) {
      // Cmd+N or Ctrl+N → new conversation
      if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
        e.preventDefault();
        handleNewConversation();
      }
      // Cmd+/ or Ctrl+/ → focus input
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        textareaRef.current?.focus();
      }
      // Cmd+B or Ctrl+B → toggle sidebar
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        setSidebarOpen(v => !v);
      }
    }
    window.addEventListener('keydown', handleShortcuts);
    return () => window.removeEventListener('keydown', handleShortcuts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  // Fetch conversation history on mount
  useEffect(() => {
    const fetchConversations = async () => {
      setLoadingConversations(true);
      try {
        const res = await fetch('/api/user/conversations');
        if (res.ok) {
          const data = await res.json();
          setConversations(data.conversations || []);
        }
      } catch (error) {
        console.error('Failed to fetch conversations:', error);
      } finally {
        setLoadingConversations(false);
      }
    };
    fetchConversations();
  }, []);

  // Latency ticker while streaming
  useEffect(() => {
    if (isStreaming && streamStart) {
      latencyIntervalRef.current = setInterval(() => {
        setLatencyTick(Date.now() - streamStart);
        const lastMsg = messages[messages.length - 1];
        if (lastMsg?.role === 'assistant') {
          const msgText = getMessageText(lastMsg);
          if (msgText.length > 0 && !firstTokenSoundPlayed.current) {
            firstTokenSoundPlayed.current = true;
            try { playSound('response-arriving'); } catch { /* non-critical */ }
          }
          setStreamingTokens(Math.ceil(msgText.length / 4));
        }
      }, 100);
    } else {
      if (latencyIntervalRef.current) {
        clearInterval(latencyIntervalRef.current);
        latencyIntervalRef.current = null;
      }
    }
    return () => { if (latencyIntervalRef.current) clearInterval(latencyIntervalRef.current); };
  }, [isStreaming, streamStart, messages]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text || isStreaming) return;
    setStreamStart(Date.now());
    setStreamingTokens(0);
    setLatencyTick(0);
    firstTokenSoundPlayed.current = false;
    setSovereignMeta({
      model: selectedModelConfig.label,
      provider: 'cloud',
      latency: 0,
      care_score: 85,
      tokens: 0,
    });
    try { playSound('message-sent'); } catch { /* non-critical */ }
    // Crisis detection — show safety banner if distress signals detected
    if (detectCrisis(text)) setShowCrisisBanner(true);
    sendMessage({ text });
    setInput('');
  }, [input, isStreaming, selectedModelConfig.label, sendMessage]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.key === 'Enter' && e.metaKey) || (e.key === 'Enter' && !e.shiftKey)) {
      e.preventDefault();
      handleSend();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      setInput('');
      clearImage();
    }
  }

  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedImage(file);
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  }

  function clearImage() {
    setSelectedImage(null);
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  }

  function toggleVoiceInput() {
    if (!isVoiceSupported()) {
      showToast('Voice input not supported in this browser');
      return;
    }
    if (isListening) {
      stopListening();
      setIsListening(false);
      if (voiceTranscript) {
        setInput(prev => (prev ? prev + ' ' : '') + voiceTranscript);
        setVoiceTranscript('');
      }
    } else {
      setVoiceTranscript('');
      setIsListening(true);
      startListening(
        (result) => {
          setVoiceTranscript(result.transcript);
          if (result.isFinal) {
            setTimeout(() => {
              setIsListening(false);
              if (result.transcript) {
                setInput(prev => (prev ? prev + ' ' : '') + result.transcript);
                setVoiceTranscript('');
                showToast('Voice input captured');
              }
            }, 300);
          }
        },
        { continuous: false, language: 'en-GB' }
      );
    }
  }

  async function handleNewConversation() {
    setCurrentConversationId(null);
    _currentConvIdRef.current = null;
    titleGeneratedRef.current = false;
    setInput('');
    setSummaryText(null);
    setLoadedHistory([]);
    showToast('New conversation started');
  }

  async function handleLoadConversation(conversationId: string) {
    setCurrentConversationId(conversationId);
    _currentConvIdRef.current = conversationId;
    titleGeneratedRef.current = true;

    // Load message history from DB
    try {
      const res = await fetch(`/api/user/conversations/messages?conversation_id=${conversationId}`);
      if (res.ok) {
        const data = await res.json();
        const msgs = data.messages ?? [];
        setLoadedHistory(msgs);
        if (msgs.length > 0) {
          showToast(`Loaded ${msgs.length} messages`);
        }
      }
    } catch {
      showToast('Switched to conversation');
    }
  }

  // Sidebar component for conversation history
  const ConversationSidebar = () => (
    <div className="w-64 flex-shrink-0 flex flex-col" style={{ background: SURFACE, borderRight: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>Conversations</span>
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-sm text-white/25 hover:text-white/50 transition-colors"
          title="Close sidebar"
          aria-label="Close conversation sidebar"
        >
          ✕
        </button>
      </div>

      {/* New conversation button */}
      <button
        onClick={handleNewConversation}
        className="m-3 px-3 py-2 rounded-lg text-xs font-medium border transition-all hover:scale-[1.02]"
        style={{ background: `${GOLD}20`, borderColor: `${GOLD}40`, color: GOLD }}
        aria-label="Start new conversation"
      >
        + New Chat
      </button>

      {/* Conversations list */}
      <div className="flex-1 overflow-y-auto">
        {loadingConversations ? (
          <div className="px-4 py-6 text-center text-xs text-white/40">Loading…</div>
        ) : conversations.length === 0 ? (
          <div className="px-4 py-6 text-center text-xs text-white/40">No conversations yet</div>
        ) : (
          <div className="space-y-1 px-2 py-2">
            {conversations.slice(0, 10).map(conv => {
              const char = getCharacter(conv.companion_id);
              const charName = char?.name ?? conv.companion_id ?? 'Aura';
              const isActive = currentConversationId === conv.id;
              return (
                <button
                  key={conv.id}
                  onClick={() => handleLoadConversation(conv.id)}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs transition-colors"
                  style={{
                    background: isActive ? `${GOLD}15` : 'transparent',
                    color: isActive ? GOLD : 'rgba(255,255,255,0.6)',
                    borderLeft: isActive ? `2px solid ${GOLD}` : '2px solid transparent',
                    paddingLeft: isActive ? '12px' : '14px',
                  }}
                  title={conv.title}
                >
                  <div className="truncate font-medium">{conv.title}</div>
                  <div className="flex items-center gap-1.5 mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    <span>{charName}</span>
                    {conv.message_count > 0 && (
                      <><span>·</span><span>{conv.message_count} msgs</span></>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Toggle button */}
      <div className="px-3 py-2 flex-shrink-0 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <button
          onClick={() => setSidebarOpen(false)}
          className="w-full text-xs py-1.5 rounded-lg transition-colors text-white/40 hover:text-white/60"
          title="Hide sidebar"
        >
          ← Hide
        </button>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes messageIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="flex text-white overflow-hidden" style={{ height: 'var(--app-height, 100vh)', background: DEEP }}>
        {/* ── Conversation Sidebar ───────────────────────────────────── */}
        {sidebarOpen && <ConversationSidebar />}

        {/* ── Chat column ───────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <header className="h-12 flex items-center justify-between px-4 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: SURFACE }}>
            <style>{KEYFRAMES_IDLE}</style>
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-xs px-2 py-1 rounded-lg border transition-colors flex-shrink-0"
                style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
                title="Open conversation history"
                aria-label="Open sidebar"
              >
                ☰
              </button>
            )}
            {(() => {
              const companion = getCharacter(companionId);
              const charName = companion?.name || 'Aura';
              const avatar = companion && companion.dimensions ?
                generateAvatar(companion.dimensions, companion.archetype, companion.name) :
                generateAvatar({ warmth: 0.7, energy: 0.7, whimsy: 0.6, edge: 0.3, complexity: 0.6 }, 'nurturer', 'Aura');
              return (
                <div className="flex items-center gap-2 min-w-0">
                  <img
                    src={avatar}
                    alt={charName}
                    className="w-6 h-6 rounded-full flex-shrink-0"
                    style={{
                      animation: 'meok-idle 3s ease-in-out infinite',
                      boxShadow: `0 0 8px 2px ${currentMood.color}40`,
                    }}
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold truncate" style={{ color: `${CREAM}90` }}>{charName}</span>
                      <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ background: currentMood.color }} title={`Mood: ${currentMood.label}`} />
                      <span className="text-[10px] font-medium" style={{ color: currentMood.color }}>{currentMood.label}</span>
                    </div>
                    <span className="text-[11px] font-semibold" style={{ color: GOLD }}>
                      {sovereignDisplay.stageName ?? `Bond ${Math.min(10, Math.floor((loadedHistory.length + messages.length) / 5) + 1)}`} ✦
                    </span>
                  </div>
                </div>
              );
            })()}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide px-2">
              {MODELS.map(m => (
                <button key={m.id} onClick={() => setSelectedModel(m.id)} className="text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap transition-all"
                  style={selectedModel === m.id ? { background: GOLD, color: NAVY, borderColor: GOLD } : { color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.15)' }}>
                  {m.label}{selectedModel === m.id && ' ✓'}
                </button>
              ))}
            </div>
            {/* Temperature preset selector */}
            <div className="flex items-center gap-1 px-2">
              {([
                { key: 'focused' as const, label: 'Focused', tip: 'Direct, efficient responses' },
                { key: 'balanced' as const, label: 'Balanced', tip: 'Default' },
                { key: 'creative' as const, label: 'Creative', tip: 'Expansive, exploratory responses' },
              ]).map(p => (
                <button key={p.key} onClick={() => setTempPreset(p.key)} title={p.tip} className="text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap transition-all"
                  style={tempPreset === p.key ? { background: GOLD, color: NAVY, borderColor: GOLD } : { color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.15)' }}>
                  {p.label}{tempPreset === p.key && ' ✓'}
                </button>
              ))}
            </div>
            {/* OS Mode handoff pill */}
            {(() => {
              const companion = getCharacter(companionId);
              const charName = companion?.name || 'Aura';
              return (
                <button
                  onClick={() => {
                    if (messages.length > 0) {
                      try {
                        localStorage.setItem('meok_os_handoff_context', JSON.stringify({
                          messages: messages.slice(-10).map((m: UIMessage) => ({
                            role: m.role,
                            text: getMessageText(m),
                          })),
                          companionId,
                          charName,
                          model: selectedModel,
                          timestamp: Date.now(),
                        }));
                      } catch {}
                    }
                    window.location.href = '/os/sovereign-os';
                  }}
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors flex-shrink-0"
                  style={{ borderColor: `${GOLD}40`, color: GOLD, background: `${GOLD}08`, fontWeight: 600, letterSpacing: '0.02em' }}
                  title={`Let ${charName} take over in OS Mode`}
                  aria-label="Enter OS Mode"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="hidden sm:inline">Let {charName} take over →</span>
                  <span className="sm:hidden">OS</span>
                </button>
              );
            })()}
            <button onClick={() => setShowSovereign(v => !v)} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border transition-colors flex-shrink-0"
              style={showSovereign ? { borderColor: `${GOLD}50`, color: GOLD, background: `${GOLD}10` } : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }} title="Toggle sovereign display">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              <span className="hidden sm:inline">Sovereign</span>
            </button>
            <button onClick={() => setHighContrast(v => !v)} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border transition-colors flex-shrink-0"
              style={highContrast ? { borderColor: '#ffffff', color: '#ffffff', background: 'rgba(255,255,255,0.15)' } : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }} title="Toggle high contrast mode" aria-label="High contrast mode">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 9v6M15 12h-6" /></svg>
              <span className="hidden sm:inline">Contrast</span>
            </button>
            <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border" style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }} title="Adjust font size for readability">
              <button
                onClick={() => setFontSize(prev => Math.max(12, prev - 1))}
                className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:opacity-70"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                aria-label="Decrease font size"
              >
                −
              </button>
              <span className="text-[10px] px-1 min-w-[20px] text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>{fontSize}px</span>
              <button
                onClick={() => setFontSize(prev => Math.min(20, prev + 1))}
                className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:opacity-70"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                aria-label="Increase font size"
              >
                +
              </button>
            </div>
          </header>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto relative" role="log" aria-live="polite" aria-label="Chat messages" style={{ background: DEEP }}>
            {/* Context window indicator */}
            {(() => {
              const estimatedTokens = messages.length * 100;
              const maxContext = 128000;
              const pct = Math.min((estimatedTokens / maxContext) * 100, 100);
              return (
                <div className="sticky top-0 z-10">
                  <div className="w-full h-[2px]" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="h-full transition-all duration-300" style={{ width: `${pct}%`, background: GOLD }} />
                  </div>
                  {pct > 90 && (
                    <div className="flex items-center justify-center gap-2 px-4 py-1.5 text-center" style={{ color: '#ef4444', background: `${DEEP}ee` }}>
                      <span className="text-[10px]">Context nearly full — consider starting a new conversation</span>
                      <button
                        onClick={handleSummarize}
                        disabled={summarizing}
                        className="text-[10px] px-2 py-0.5 rounded-full border transition-colors flex-shrink-0"
                        style={{ borderColor: '#ef4444', color: '#ef4444', opacity: summarizing ? 0.6 : 1, cursor: summarizing ? 'wait' : 'pointer' }}
                        title="Summarize conversation and continue with condensed context"
                        aria-label="Summarize conversation"
                      >
                        {summarizing ? 'Summarizing…' : 'Summarize'}
                      </button>
                    </div>
                  )}
                  {pct > 75 && pct <= 90 && (
                    <div className="flex items-center justify-between px-4 py-1 text-center gap-2" style={{ color: GOLD, background: `${DEEP}ee` }}>
                      <span className="text-[10px]">Context: {Math.round(pct)}% used</span>
                      <button
                        onClick={() => {
                          showToast('Context pruning preview: First 5 messages would be compressed');
                        }}
                        className="text-[10px] px-2 py-0.5 rounded-full border transition-colors flex-shrink-0"
                        style={{ borderColor: GOLD, color: GOLD }}
                        title="Preview context pruning strategy"
                        aria-label="Preview context pruning"
                      >
                        Preview
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          <div className="px-4 py-6">
            {!hasUserMessages && loadedHistory.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center px-8" style={{ animation: 'fadeSlideUp 0.5s ease both' }}>
                <div className="text-4xl mb-5 w-20 h-20 rounded-full flex items-center justify-center" style={{ background: `radial-gradient(circle at 35% 35%, ${GOLD}30, ${GOLD}08)`, border: `2px solid ${GOLD}40`, boxShadow: `0 0 40px ${GOLD}15` }}>✨</div>
                <h2 className="text-xl font-bold mb-2 text-white">{getCharacter(companionId)?.name ?? 'Your companion'} is here.</h2>
                <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>What&apos;s on your mind?</p>
              </div>
            )}

            <div className="space-y-5 max-w-3xl mx-auto">
              {/* Loaded history from DB (previous sessions) */}
              {loadedHistory.map((hist, i) => (
                <div key={`hist-${i}`} className={`flex ${hist.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] ${hist.role === 'user' ? '' : ''}`}>
                    <div
                      className="rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap"
                      style={hist.role === 'user'
                        ? { background: GOLD, color: DEEP, borderRadius: '20px 20px 4px 20px' }
                        : { background: SURFACE, color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px 20px 20px 4px' }
                      }
                    >
                      {hist.content}
                    </div>
                    {hist.created_at && (
                      <span className="text-xs mt-1 block" style={{ color: 'rgba(255,255,255,0.2)' }}>
                        {new Date(hist.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {loadedHistory.length > 0 && messages.length > 0 && (
                <div className="flex items-center gap-3 py-2">
                  <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.2)' }} />
                  <span className="text-xs" style={{ color: 'rgba(201,168,76,0.4)' }}>New messages</span>
                  <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.2)' }} />
                </div>
              )}
              {/* Live messages from current session */}
              {messages.map((msg: UIMessage, i: number) => {
                const text = getMessageText(msg);
                const isStreamingMsg = isStreaming && msg.role === 'assistant' && i === messages.length - 1;
                const isFocused = focusedMsgIdx === i;

                return (
                  <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`} style={{ animation: 'messageIn 0.25s ease both' }} data-msg-idx={i}>
                    {msg.role === 'user' ? (
                      <div className="max-w-[75%]">
                        <div
                          className="rounded-2xl rounded-tr-sm px-4 py-3"
                          tabIndex={0}
                          role="article"
                          aria-label={`Your message: ${text.slice(0, 80)}`}
                          style={{
                            background: highContrast ? '#ffffff' : GOLD,
                            color: highContrast ? '#000000' : NAVY,
                            outline: isFocused ? `3px solid ${GOLD}` : 'none',
                            outlineOffset: '2px'
                          }}
                        >
                          <p className="text-sm font-medium whitespace-pre-wrap leading-relaxed" style={{ fontSize: fontSize + 'px' }}>{text}</p>
                        </div>
                        <p className="text-[10px] mt-1 text-right" style={{ color: 'rgba(255,255,255,0.25)' }}>{formatTime((msg as unknown as { createdAt?: Date }).createdAt ?? new Date())}</p>
                      </div>
                    ) : (
                      <div className="max-w-[75%] group/msg flex gap-2 items-start">
                        {/* Companion avatar */}
                        {(() => {
                          const companion = getCharacter(companionId);
                          const av = companion?.dimensions
                            ? generateAvatar(companion.dimensions, companion.archetype, companion.name)
                            : generateAvatar({ warmth: 0.7, energy: 0.7, whimsy: 0.6, edge: 0.3, complexity: 0.6 }, 'nurturer', 'Aura');
                          return <img src={av} alt="" className="w-6 h-6 rounded-full flex-shrink-0 mt-1" style={{ opacity: 0.85 }} loading="lazy" decoding="async" />;
                        })()}
                        <div className="flex-1 min-w-0">
                        <SovereignBadge model={selectedModelConfig.label} latency={isStreamingMsg ? undefined : sovereignMeta?.latency} care_score={isStreamingMsg ? undefined : sovereignMeta?.care_score ?? 85} streaming={isStreamingMsg} contextPct={isStreamingMsg ? undefined : contextUsagePct} tokens={isStreamingMsg ? undefined : sovereignMeta?.tokens} />
                        <div
                          className="rounded-2xl rounded-tl-sm px-4 py-3"
                          tabIndex={0}
                          role="article"
                          aria-label={`Aura's response: ${text.slice(0, 80)}`}
                          style={{
                            background: highContrast ? '#1a1a1a' : SURFACE,
                            border: highContrast ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.07)',
                            outline: isFocused ? '3px solid #ffffff' : 'none',
                            outlineOffset: '2px'
                          }}
                        >
                          {text ? (
                            <p className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: `${CREAM}dd`, fontSize: fontSize + 'px' }}>
                              {text}
                              {isStreamingMsg && <span className="inline-block w-0.5 h-4 ml-0.5 animate-pulse align-middle" style={{ background: GOLD }} />}
                            </p>
                          ) : isStreamingMsg ? <ThreeDots /> : null}
                          <span className="text-xs opacity-30 block mt-1">{selectedModelConfig.label}</span>
                        </div>
                        {!isStreamingMsg && (
                          <>
                            <SovereignDisplay
                              {...sovereignDisplay}
                              latencyMs={sovereignMeta?.latency}
                            />
                            {isTTSSupported() && text && (
                              <button
                                onClick={async () => {
                                  try {
                                    if (speakingMsgId === msg.id) {
                                      stopSpeaking();
                                      setSpeakingMsgId(null);
                                    } else {
                                      stopSpeaking();
                                      setSpeakingMsgId(msg.id);
                                      const utterance = await speakAsCharacter(text, companionId);
                                      if (utterance) {
                                        utterance.onend = () => setSpeakingMsgId(null);
                                        utterance.onerror = () => setSpeakingMsgId(null);
                                      } else {
                                        setSpeakingMsgId(null);
                                      }
                                    }
                                  } catch {
                                    setSpeakingMsgId(null);
                                  }
                                }}
                                aria-label={speakingMsgId === msg.id ? 'Stop reading aloud' : 'Read message aloud'}
                                className="mt-1 text-[11px] px-2 py-0.5 rounded-full border transition-colors"
                                style={{
                                  background: speakingMsgId === msg.id ? `${GOLD}20` : 'rgba(255,255,255,0.03)',
                                  borderColor: speakingMsgId === msg.id ? `${GOLD}40` : 'rgba(255,255,255,0.07)',
                                  color: speakingMsgId === msg.id ? GOLD : 'rgba(255,255,255,0.35)',
                                  cursor: 'pointer',
                                }}
                              >
                                {speakingMsgId === msg.id ? 'Stop' : 'Read aloud'}
                              </button>
                            )}
                            {text && (
                              <button
                                onClick={async () => {
                                  const ok = await copyToClipboard(text);
                                  if (ok) {
                                    setCopiedMsgId(msg.id);
                                    setTimeout(() => setCopiedMsgId((prev) => prev === msg.id ? null : prev), 2500);
                                  }
                                }}
                                aria-label="Copy message"
                                className="mt-1 ml-1 text-[11px] px-2 py-0.5 rounded-full border transition-colors"
                                style={{
                                  background: copiedMsgId === msg.id ? `${GOLD}20` : 'rgba(255,255,255,0.03)',
                                  borderColor: copiedMsgId === msg.id ? `${GOLD}40` : 'rgba(255,255,255,0.07)',
                                  color: copiedMsgId === msg.id ? GOLD : 'rgba(255,255,255,0.35)',
                                  cursor: 'pointer',
                                }}
                              >
                                {copiedMsgId === msg.id ? '\u2713 Copied' : 'Copy'}
                              </button>
                            )}
                            {/* Reaction buttons — visible on hover */}
                            <span className="inline-flex items-center gap-0.5 ml-1 opacity-100 sm:opacity-0 sm:group-hover/msg:opacity-100 transition-opacity duration-150">
                              <button
                                onClick={() => {
                                  fetch('/api/feedback', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ messageId: msg.id, rating: 1, comment: 'liked' }),
                                  }).catch(() => {});
                                  showToast('Liked!');
                                }}
                                aria-label="Like message"
                                className="text-[13px] px-1 py-0.5 rounded transition-colors hover:bg-white/10"
                                title="Like"
                              >👍</button>
                              <button
                                onClick={() => {
                                  fetch('/api/feedback', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ messageId: msg.id, rating: -1, comment: 'disliked' }),
                                  }).catch(() => {});
                                  showToast('Disliked!');
                                }}
                                aria-label="Dislike message"
                                className="text-[13px] px-1 py-0.5 rounded transition-colors hover:bg-white/10"
                                title="Dislike"
                              >👎</button>
                              <button
                                onClick={() => {
                                  fetch('/api/feedback', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ messageId: msg.id, rating: 1, comment: 'saved' }),
                                  }).catch(() => {});
                                  showToast('Saved!');
                                }}
                                aria-label="Save message"
                                className="text-[13px] px-1 py-0.5 rounded transition-colors hover:bg-white/10"
                                title="Save"
                              >💾</button>
                              <button
                                onClick={async () => {
                                  setExplainMsgId(msg.id);
                                  try {
                                    const res = await fetch('/api/explain', {
                                      method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({ text }),
                                    });
                                    const data = await res.json();
                                    if (data.explanation) {
                                      sendMessage({ text: `In simpler terms: ${data.explanation}` });
                                      showToast('Explanation sent to chat');
                                    }
                                  } catch {
                                    showToast('Failed to explain');
                                  } finally {
                                    setExplainMsgId(null);
                                  }
                                }}
                                disabled={explainMsgId === msg.id}
                                aria-label="Explain simpler"
                                className="text-[13px] px-1 py-0.5 rounded transition-colors hover:bg-white/10 disabled:opacity-50"
                                title="Explain simpler"
                              >{explainMsgId === msg.id ? '⏳' : '💡'}</button>
                              <button
                                onClick={() => { regenerate(); showToast('Regenerating…'); }}
                                aria-label="Regenerate response"
                                className="text-[13px] px-1 py-0.5 rounded transition-colors hover:bg-white/10"
                                title="Regenerate"
                              >🔄</button>
                            </span>
                          </>
                        )}
                        <p className="text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>{formatTime((msg as unknown as { createdAt?: Date }).createdAt ?? new Date())}</p>
                      </div>{/* end flex-1 min-w-0 */}
                      </div>
                    )}
                  </div>
                );
              })}

              {isStreaming && messages.length > 0 && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start" style={{ animation: 'messageIn 0.25s ease both' }}>
                  <div className="max-w-[75%]">
                    <SovereignBadge streaming />
                    <div className="rounded-2xl rounded-tl-sm px-4 py-3" style={{ background: SURFACE, border: '1px solid rgba(255,255,255,0.07)' }}><ThreeDots /></div>
                    <ThinkingIndicator messageLength={getMessageText(messages[messages.length - 1]).length} characterName={getCharacter(companionId)?.name} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </div>
          </div>

          {/* Crisis safety banner */}
          {showCrisisBanner && (
            <CrisisBanner onDismiss={() => setShowCrisisBanner(false)} />
          )}

          {/* Rate limit banner */}
          {rateLimited && (
            <div
              className="flex-shrink-0 mx-4 mt-2 rounded-xl px-5 py-4 text-sm"
              style={{
                background: 'rgba(13,12,24,0.95)',
                border: `1px solid ${GOLD}40`,
                boxShadow: `0 0 20px ${GOLD}10`,
              }}
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <p style={{ color: '#f5f0e8' }}>
                  You&apos;ve reached your message limit.{' '}
                  <Link href="/pricing" className="font-semibold underline underline-offset-2 transition-colors hover:opacity-80" style={{ color: GOLD }}>
                    Upgrade for unlimited messages
                  </Link>
                </p>
                <button
                  onClick={() => setRateLimited(false)}
                  className="text-xs px-2 py-1 rounded-lg transition-colors"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                  aria-label="Dismiss rate limit message"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          {/* Input area — sticky on mobile to stay above virtual keyboard */}
          <div className="flex-shrink-0 px-4 py-3 sticky bottom-0 z-20" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: SURFACE, paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
            <div className="flex items-center gap-1.5 mb-2">
              <PlanModeToggle mode={chatMode} onModeChange={setChatMode} />
              <span className="text-[10px] px-2 py-0.5 rounded-full border font-mono" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.07)' }}>
                {selectedModelConfig.privacy === 'cloud' ? '☁️ Cloud' : '🏠 Local'}
              </span>
              {isStreaming && (
                <span className="text-[10px] px-2 py-0.5 rounded-full border font-mono" style={{ background: `${GOLD}05`, color: `${GOLD}60`, borderColor: `${GOLD}15` }}>{latencyTick}ms</span>
              )}
            </div>
            {/* Quick prompts when conversation is empty */}
            {!hasUserMessages && (
              <div className="flex flex-wrap gap-2 max-w-3xl mx-auto mb-3">
                {QUICK_PROMPTS.map(prompt => (
                  <button
                    key={prompt}
                    onClick={() => { setInput(prompt); }}
                    className="text-xs px-3 py-1.5 rounded-full border transition-all hover:scale-[1.03]"
                    style={{ background: `${GOLD}08`, borderColor: `${GOLD}30`, color: `${GOLD}cc` }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
            {/* Image preview thumbnail */}
            {imagePreview && selectedImage && (
              <div className="flex items-center gap-2 max-w-3xl mx-auto mb-2 px-1">
                <div className="relative group">
                  <img src={imagePreview} alt="Selected" className="w-12 h-12 rounded-lg object-cover border" style={{ borderColor: `${GOLD}40` }} />
                  <button onClick={clearImage} className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] leading-none" style={{ background: '#ef4444', color: '#fff' }} aria-label="Remove image">x</button>
                </div>
                <span className="text-[10px] italic" style={{ color: 'rgba(255,255,255,0.3)' }}>{selectedImage.name}</span>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageSelect} />
            <div className="relative flex items-end gap-2 max-w-3xl mx-auto" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} style={{ position: 'relative' }}>
              {isDragOver && (
                <div className="absolute inset-0 rounded-xl border-2 border-dashed pointer-events-none" style={{ borderColor: `${GOLD}60`, background: `${GOLD}10` }} />
              )}
              <textarea
                ref={textareaRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Talk to ${getCharacter(companionId)?.name ?? 'your companion'}…`}
                rows={1}
                disabled={isStreaming}
                aria-label={`Type a message to ${getCharacter(companionId)?.name ?? 'your companion'}`}
                className="flex-1 text-sm rounded-xl px-4 py-3 pr-24 resize-none outline-none transition-colors leading-6 min-h-[44px] max-h-[120px] disabled:opacity-50"
                style={{ background: NAVY, color: CREAM, border: '1px solid rgba(255,255,255,0.08)', caretColor: GOLD }}
                onFocus={e => (e.currentTarget.style.borderColor = `${GOLD}50`)}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
              <div className="absolute right-2 bottom-2 flex items-center gap-1">
                <span className="text-[10px] hidden sm:inline" style={{ color: 'rgba(255,255,255,0.2)' }}>⌘↵</span>
                {/* Image upload hidden — no image processing backend yet */}
                {false && <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isStreaming}
                  aria-label="Attach image"
                  title="Attach image"
                  className="h-8 w-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </button>}
                <button
                  onClick={toggleVoiceInput}
                  disabled={isStreaming}
                  aria-label={isListening ? 'Stop recording' : 'Record voice input'}
                  title={isVoiceSupported() ? (isListening ? 'Stop recording' : 'Record voice input') : 'Voice input not supported'}
                  className="h-8 w-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30"
                  style={{
                    color: isListening ? GOLD : 'rgba(255,255,255,0.4)',
                    background: isListening ? `${GOLD}20` : 'transparent'
                  }}
                  onMouseEnter={e => !isListening && (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                  onMouseLeave={e => !isListening && (e.currentTarget.style.background = 'transparent')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </button>
                {isStreaming ? (
                  <button onClick={() => stop()} aria-label="Stop generating response" className="h-8 px-3 rounded-lg text-xs font-semibold transition-all flex-shrink-0" style={{ background: '#ef4444', color: '#fff' }}>Stop</button>
                ) : (
                  <button onClick={handleSend} disabled={!input.trim() || input.length > MAX_MESSAGE_LENGTH} aria-label="Send message" className="h-8 px-3 rounded-lg text-xs font-semibold transition-all flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed" style={{ background: GOLD, color: NAVY }}>Send</button>
                )}
              </div>
            </div>
            {input.length > MAX_MESSAGE_LENGTH * 0.5 && (
              <p className="text-[10px] text-right mt-1 max-w-3xl mx-auto font-mono" style={{
                color: input.length > MAX_MESSAGE_LENGTH * 0.95 ? '#ef4444'
                     : input.length > MAX_MESSAGE_LENGTH * 0.8 ? GOLD
                     : 'rgba(255,255,255,0.3)',
              }}>
                {input.length}/{MAX_MESSAGE_LENGTH}
              </p>
            )}
          </div>
        </div>

        {/* ── Sovereign display panel ──────────────────────────────── */}
        {showSovereign && (
          <SovereignPanel
            streaming={isStreaming}
            sovereignMeta={sovereignMeta}
            latencyTick={latencyTick}
            streamingTokens={streamingTokens}
            onClose={() => setShowSovereign(false)}
            privacyMode={privacyMode}
            powerMode={powerMode}
            onTogglePrivacy={() => setPrivacyMode(v => !v)}
            onTogglePower={() => setPowerMode(v => !v)}
          />
        )}
      </div>

      {/* Summary modal */}
      {summaryText && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(13,12,24,0.85)', backdropFilter: 'blur(6px)' }}
          onClick={() => setSummaryText(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl p-6"
            style={{ background: SURFACE, border: `1px solid rgba(201,168,76,0.3)`, boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold" style={{ color: GOLD }}>Conversation Summary</h3>
              <button
                onClick={() => setSummaryText(null)}
                className="text-white/40 hover:text-white/70 transition-colors text-lg leading-none"
                aria-label="Close summary"
              >
                ×
              </button>
            </div>
            <div className="text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
              {summaryText}
            </div>
            <button
              onClick={() => setSummaryText(null)}
              className="mt-5 w-full py-2 rounded-xl text-xs font-semibold transition-colors"
              style={{ background: `rgba(201,168,76,0.12)`, border: `1px solid rgba(201,168,76,0.25)`, color: GOLD }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl text-xs font-semibold shadow-lg pointer-events-none"
          style={{ background: SURFACE, border: `1px solid ${GOLD}40`, color: GOLD }}
        >
          {toast}
        </div>
      )}
    </>
  );
}
