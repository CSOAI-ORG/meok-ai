'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, MessageSquare, Heart, Clock, Shield, X } from 'lucide-react';

/**
 * Post-hatching onboarding checklist — guides new users through
 * key first actions that build habit and demonstrate MEOK's value.
 *
 * Completing all items grants evolution XP boost.
 * Persisted in localStorage.
 */

interface ChecklistItem {
  id: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  href?: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'work',
    label: 'Tell MEOK about your work',
    desc: 'Share what you do — your companion starts building context.',
    icon: <MessageSquare className="w-4 h-4" />,
    href: '/dashboard/chat',
  },
  {
    id: 'personal',
    label: 'Ask a personal question',
    desc: 'Something only a friend would know how to answer.',
    icon: <Heart className="w-4 h-4" />,
    href: '/dashboard/chat',
  },
  {
    id: 'return',
    label: 'Come back tomorrow',
    desc: 'Test memory — your companion will remember today.',
    icon: <Clock className="w-4 h-4" />,
  },
  {
    id: 'guardian',
    label: 'Try Guardian',
    desc: 'Scan a suspicious message or link.',
    icon: <Shield className="w-4 h-4" />,
    href: '/dashboard/guardian',
  },
];

export function OnboardingChecklist() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('meok-onboarding-checklist');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.dismissed) setDismissed(true);
        if (Array.isArray(data.completed)) setCompleted(new Set(data.completed));
      } catch { /* ignore */ }
    }
    setMounted(true);
  }, []);

  const toggle = (id: string) => {
    const next = new Set(completed);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCompleted(next);
    localStorage.setItem('meok-onboarding-checklist', JSON.stringify({
      completed: Array.from(next),
      dismissed: false,
    }));
  };

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem('meok-onboarding-checklist', JSON.stringify({
      completed: Array.from(completed),
      dismissed: true,
    }));
  };

  if (!mounted || dismissed) return null;

  const allDone = completed.size === CHECKLIST_ITEMS.length;

  return (
    <div
      className="rounded-2xl p-5 mb-6"
      style={{
        background: 'rgba(201,168,76,0.04)',
        border: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-bold text-sm">Getting Started</h3>
          <p className="text-white/30 text-xs">
            {completed.size}/{CHECKLIST_ITEMS.length} complete
          </p>
        </div>
        <button onClick={dismiss} className="text-white/20 hover:text-white/50 transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-1 rounded-full transition-all duration-500"
          style={{
            width: `${(completed.size / CHECKLIST_ITEMS.length) * 100}%`,
            background: allDone ? '#10B981' : '#c9a84c',
          }}
        />
      </div>

      <div className="space-y-2">
        {CHECKLIST_ITEMS.map((item) => {
          const done = completed.has(item.id);
          const Inner = (
            <div
              className="flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer hover:bg-white/[0.03]"
              onClick={() => toggle(item.id)}
            >
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-all"
                style={{
                  background: done ? '#c9a84c' : 'rgba(255,255,255,0.06)',
                  border: done ? 'none' : '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {done && <Check className="w-3 h-3 text-[#1a1a2e]" />}
              </div>
              <div>
                <p className={`text-sm font-medium ${done ? 'text-white/30 line-through' : 'text-white/80'}`}>
                  {item.label}
                </p>
                <p className="text-white/25 text-xs">{item.desc}</p>
              </div>
              <span className="ml-auto text-white/15">{item.icon}</span>
            </div>
          );

          return item.href && !done ? (
            <Link key={item.id} href={item.href}>{Inner}</Link>
          ) : (
            <div key={item.id}>{Inner}</div>
          );
        })}
      </div>

      {allDone && (
        <div className="mt-4 text-center">
          <p className="text-[#10B981] text-xs font-bold">All done! +50 evolution XP earned.</p>
        </div>
      )}
    </div>
  );
}
