"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
  onCopy?: () => void;
}

export function CopyButton({ text, className = "", onCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy?.();

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [text, onCopy]);

  return (
    <button type="button"
      onClick={handleCopy}
      className={`p-2 rounded-lg transition-all duration-200 ${
        copied
          ? "bg-green-500/20 text-green-400"
          : "text-white/40 hover:text-white/70 hover:bg-white/10"
      } ${className}`}
      title={copied ? "Copied!" : "Copy to clipboard"}
      aria-label={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}

// With text label variant
interface CopyWithLabelProps extends CopyButtonProps {
  label?: string;
}

export function CopyWithLabel({
  text,
  label = "Copy",
  className = "",
  onCopy,
}: CopyWithLabelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy?.();

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [text, onCopy]);

  return (
    <button type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
        copied
          ? "bg-green-500/20 text-green-400 border border-green-500/30"
          : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          {label}
        </>
      )}
    </button>
  );
}

// Code block with copy button
interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = false,
  className = "",
}: CodeBlockProps) {
  const lines = code.trim().split("\n");

  return (
    <div
      className={`relative rounded-xl bg-[#0d0c18] border border-white/10 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          {language && (
            <span className="ml-3 text-xs text-white/40 font-mono">
              {language}
            </span>
          )}
        </div>
        <CopyButton text={code} />
      </div>

      {/* Code */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-white/80 leading-relaxed">
          {showLineNumbers ? (
            <div className="flex">
              <div className="select-none pr-4 text-right text-white/20">
                {lines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div>
                {lines.map((line, i) => (
                  <div key={i}>{line || " "}</div>
                ))}
              </div>
            </div>
          ) : (
            code
          )}
        </pre>
      </div>
    </div>
  );
}
