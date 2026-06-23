'use client';

import { useState } from 'react';
import { Copy, Check, Twitter, Linkedin, Gift } from 'lucide-react';

interface TrialExtendProps {
  referralCode: string;
}

const SHARE_TEXT =
  "I've been using MEOK AI — your personal AI companion that actually remembers you. Check it out and we both get more time free:";

export function TrialExtend({ referralCode }: TrialExtendProps) {
  const [copied, setCopied] = useState(false);

  const referralUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/join?ref=${referralCode}`
      : `https://meok.ai/join?ref=${referralCode}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const shareTwitter = () => {
    const encoded = encodeURIComponent(`${SHARE_TEXT} ${referralUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const shareLinkedIn = () => {
    const encoded = encodeURIComponent(referralUrl);
    const summary = encodeURIComponent(SHARE_TEXT);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}&summary=${summary}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: 'rgba(201,168,76,0.04)',
        border: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.22)',
          }}
        >
          <Gift className="w-5 h-5" style={{ color: '#c9a84c' }} />
        </div>
        <div>
          <h3 className="text-white font-bold text-sm">Get 7 more days free</h3>
          <p className="text-white/40 text-xs mt-0.5">
            Share MEOK with a friend — when they sign up you both extend your trial.
          </p>
        </div>
      </div>

      {/* Referral link */}
      <div
        className="flex items-center gap-2 rounded-lg px-3 py-2.5 mb-3"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <span className="flex-1 text-xs text-white/50 font-mono truncate">{referralUrl}</span>
        <button type="button"
          onClick={copy}
          aria-label="Copy referral link"
          className="shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md transition-all hover:opacity-90 active:scale-95"
          style={{
            background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(201,168,76,0.15)',
            border: copied ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(201,168,76,0.25)',
            color: copied ? '#10B981' : '#c9a84c',
          }}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Share buttons */}
      <div className="flex items-center gap-2">
        <span className="text-white/25 text-xs mr-1">Share via</span>
        <button type="button"
          onClick={shareTwitter}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-90 active:scale-95"
          style={{
            background: 'rgba(29,161,242,0.10)',
            border: '1px solid rgba(29,161,242,0.22)',
            color: '#1da1f2',
          }}
        >
          <Twitter className="w-3.5 h-3.5" />
          Twitter
        </button>
        <button type="button"
          onClick={shareLinkedIn}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-90 active:scale-95"
          style={{
            background: 'rgba(10,102,194,0.10)',
            border: '1px solid rgba(10,102,194,0.22)',
            color: '#0a66c2',
          }}
        >
          <Linkedin className="w-3.5 h-3.5" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
