'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED_PROMPTS = [
  "What have I been working on lately?",
  "Help me think through a decision I'm stuck on",
  "How are you different from ChatGPT?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "I'm here. What's on your mind?" }
  ]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingText]);

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim();
    if (!content || streaming) return;
    const userMsg: Message = { role: 'user', content };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setSuggestionsVisible(false);
    setStreaming(true);
    setStreamingText('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.body) throw new Error('No stream');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                full += parsed.text;
                setStreamingText(full);
              }
            } catch {
              // ignore
            }
          }
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: full }]);
      setStreamingText('');
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm not quite ready yet — MEOK is in early access. Join the waitlist at meok.ai/hatch to get your companion. 🥚" }]);
    } finally {
      setStreaming(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(undefined);
    }
  }

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + 'px';
    }
  }, [input]);

  return (
    <div className="flex h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-white/[0.06] flex flex-col bg-[#0d0d14]">
        <div className="p-4 border-b border-white/[0.06]">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-black text-lg tracking-tight">MEOK<span className="text-[#c9a84c]">.AI</span></span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-white/60 hover:text-white hover:bg-white/[0.07] transition-all mb-4">
            <span className="text-[#c9a84c]">+</span> New conversation
          </button>

          <div className="space-y-1">
            <div className="px-3 py-2 rounded-lg text-sm text-white/40 cursor-default font-medium">Today</div>
            <div className="px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08] text-sm text-white/80 cursor-default">
              Your sovereign AI
            </div>
            <div className="px-3 py-2 rounded-lg text-sm text-white/40 cursor-default font-medium mt-3">Earlier</div>
            <div className="px-3 py-2 rounded-lg hover:bg-white/[0.04] text-sm text-white/50 cursor-default transition-colors">Morning brief</div>
            <div className="px-3 py-2 rounded-lg hover:bg-white/[0.04] text-sm text-white/50 cursor-default transition-colors">Decision framework</div>
          </div>
        </div>

        <div className="p-3 border-t border-white/[0.06] space-y-1">
          <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/40 hover:text-white/70 transition-colors">
            ← Dashboard
          </Link>
        </div>
      </aside>

      {/* Main chat */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-sm flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-amber-600 flex items-center justify-center text-sm">🥚</div>
            <div>
              <p className="text-sm font-semibold text-white/90">Your Sovereign</p>
              <p className="text-xs text-white/30">claude-sonnet-4-5 · Memory active</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/20 font-mono">claude-sonnet-4-5</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-amber-700 flex items-center justify-center text-sm flex-shrink-0 mt-1">🥚</div>
              )}
              <div className={`max-w-[75%] ${msg.role === 'user'
                ? 'bg-white/[0.07] border border-white/[0.1] rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white/90'
                : 'text-sm text-white/80 leading-relaxed'
              }`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
                {/* Suggested prompts — shown only below the first assistant message */}
                {i === 0 && suggestionsVisible && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#c9a84c]/40 text-[#c9a84c]/80 hover:border-[#c9a84c]/70 hover:text-[#c9a84c] hover:bg-[#c9a84c]/[0.06] transition-all"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center text-sm flex-shrink-0 mt-1 text-white/60">N</div>
              )}
            </div>
          ))}

          {/* Streaming response */}
          {streaming && (
            <div className="flex gap-4 justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-amber-700 flex items-center justify-center text-sm flex-shrink-0 mt-1">🥚</div>
              <div className="max-w-[75%] text-sm text-white/80 leading-relaxed">
                {streamingText ? (
                  <p className="whitespace-pre-wrap">{streamingText}<span className="inline-block w-0.5 h-4 bg-[#c9a84c] ml-0.5 animate-pulse" /></p>
                ) : (
                  <div className="flex gap-1 items-center h-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                )}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t border-white/[0.06] bg-[#0a0a0f]/80 flex-shrink-0">
          <div className="flex items-end gap-3 bg-white/[0.04] border border-white/[0.1] rounded-2xl px-4 py-3 focus-within:border-[#c9a84c]/40 transition-colors">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Talk to your sovereign AI…"
              rows={1}
              className="flex-1 bg-transparent text-sm text-white/90 placeholder-white/20 resize-none outline-none min-h-[24px] max-h-[200px] leading-6"
              disabled={streaming}
            />
            <button
              onClick={() => sendMessage(undefined)}
              disabled={!input.trim() || streaming}
              className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#c9a84c] hover:bg-[#d4b463] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a2e] rotate-90"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
            </button>
          </div>
          <p className="text-center text-xs text-white/15 mt-2">Your conversations are sovereign. Stored locally. Never sold.</p>
        </div>
      </div>
    </div>
  );
}
