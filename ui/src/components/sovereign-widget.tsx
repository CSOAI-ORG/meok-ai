'use client';
import { useState, useRef, useEffect } from 'react';

interface Msg { role: 'user' | 'assistant'; content: string; }

const WELCOME_MSG: Msg = {
  role: 'assistant',
  content: "👋 I'm your MEOK sovereign AI. Ask me anything — or say \"show me\" to see the birth ceremony."
};

export function SovereignWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME_MSG]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [streamText, setStreamText] = useState('');
  const [pulse, setPulse] = useState(true);
  const [shown, setShown] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-show widget hint after 4 seconds
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) setPulse(false);
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [open, messages, streamText]);

  async function send() {
    if (!input.trim() || streaming) return;
    const userMsg: Msg = { role: 'user', content: input.trim() };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInput('');
    setStreaming(true);
    setStreamText('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMsgs }),
      });
      if (!res.body) throw new Error('no stream');
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let full = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const lines = dec.decode(value).split('\n');
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const d = line.slice(6);
          if (d === '[DONE]') break;
          try {
            const p = JSON.parse(d);
            if (p.text) { full += p.text; setStreamText(full); }
          } catch { /* ignore parse errors */ }
        }
      }
      setMessages(prev => [...prev, { role: 'assistant', content: full }]);
      setStreamText('');
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'One moment — something went wrong. Try again.' }]);
    } finally { setStreaming(false); }
  }

  return (
    <>
      {/* Hint tooltip — appears after 4s if widget closed */}
      {shown && !open && (
        <div
          className="fixed bottom-24 right-6 z-[60] bg-[#1a1a2e] text-white text-xs font-medium px-3 py-2 rounded-xl shadow-lg animate-fade-in cursor-pointer select-none max-w-[160px] text-center"
          onClick={() => setOpen(true)}
          style={{ animation: 'fadeInUp 0.4s ease forwards' }}
        >
          Talk to your sovereign AI →
          <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-[#1a1a2e] rotate-45" />
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => { setOpen(!open); setShown(false); }}
        className="fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #c9a84c 0%, #8B6914 100%)',
          boxShadow: pulse ? '0 0 0 0 rgba(201,168,76,0.7)' : '0 4px 20px rgba(201,168,76,0.4)',
          animation: pulse ? 'widgetPulse 2s infinite' : 'none',
        }}
        aria-label="Open sovereign AI chat"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <span className="text-2xl select-none">🥚</span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[65] w-80 sm:w-96 rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col"
          style={{
            background: '#0d0d14',
            maxHeight: '70vh',
            animation: 'slideUp 0.25s cubic-bezier(0.16,1,0.3,1) forwards',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#0a0a0f]/60 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-amber-700 flex items-center justify-center text-sm">🥚</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">MEOK Sovereign AI</p>
              <p className="text-[10px] text-white/30">Maternal Covenant active</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-white/20">Live</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0" style={{ maxHeight: '320px' }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-amber-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">🥚</div>
                )}
                <div className={`max-w-[78%] text-xs leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-white/[0.08] border border-white/[0.1] rounded-2xl rounded-tr-sm px-3 py-2 text-white/80'
                    : 'text-white/70'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {streaming && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-amber-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">🥚</div>
                <div className="text-xs text-white/70 leading-relaxed">
                  {streamText || (
                    <span className="flex gap-1 items-center h-5">
                      <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  )}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-white/[0.08] flex-shrink-0">
            <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] rounded-xl px-3 py-2 focus-within:border-[#c9a84c]/40 transition-colors">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), send())}
                placeholder="Ask your sovereign AI…"
                className="flex-1 bg-transparent text-xs text-white/80 placeholder-white/20 outline-none"
                disabled={streaming}
              />
              <button
                onClick={send}
                disabled={!input.trim() || streaming}
                className="w-6 h-6 rounded-lg bg-[#c9a84c] hover:bg-[#d4b463] disabled:opacity-30 flex items-center justify-center transition-all flex-shrink-0"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" className="rotate-90"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-0.5">
              <a href="/register" className="text-[10px] text-[#c9a84c] hover:underline font-semibold">Hatch your own →</a>
              <span className="text-[10px] text-white/15">meok.ai</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes widgetPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.6); }
          50% { box-shadow: 0 0 0 14px rgba(201,168,76,0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
