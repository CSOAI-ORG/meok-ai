"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Copy, Check, Clock, AlertCircle, Loader2 } from "lucide-react";

export default function SharedResearchPage() {
  const params = useParams();
  const shareId = params?.id as string;
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{
    query: string;
    answer: string;
    sources: Array<{ title: string; url: string; snippet?: string }>;
    createdAt: string;
    expiresAt: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!shareId) return;
    
    fetch(`/api/research/share?id=${shareId}`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          setError(json.error);
        } else {
          setData(json);
        }
      })
      .catch(() => setError('Failed to load research'))
      .finally(() => setLoading(false));
  }, [shareId]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0c18] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#c9a84c] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0d0c18] flex flex-col items-center justify-center p-8">
        <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
        <h1 className="text-xl font-bold text-white mb-2">Link Not Found</h1>
        <p className="text-gray-400 mb-6">{error}</p>
        <Link href="/research" className="flex items-center gap-2 text-[#c9a84c] hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0c18] p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/research" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <button type="button"
            onClick={copyLink}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-[#c9a84c]/20 text-[#c9a84c] hover:bg-[#c9a84c]/30"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Share Link'}
          </button>
        </div>

        {/* Query */}
        <div className="mb-6">
          <p className="text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Research Query</p>
          <h1 className="text-2xl font-bold text-white">{data?.query}</h1>
        </div>

        {/* Answer */}
        <div className="bg-[#13121f] rounded-xl p-6 border border-white/10 mb-6">
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{data?.answer}</p>
        </div>

        {/* Sources */}
        {data?.sources && data.sources.length > 0 && (
          <div className="bg-[#13121f] rounded-xl p-6 border border-white/10">
            <p className="text-xs text-[#c9a84c] uppercase tracking-widest mb-4">Sources</p>
            <div className="space-y-3">
              {data.sources.map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-xs font-bold w-6 h-6 rounded flex items-center justify-center bg-[#c9a84c]/20 text-[#c9a84c]">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm truncate">{source.title}</div>
                    <div className="text-gray-500 text-xs truncate">{source.url}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Created {data?.createdAt && new Date(data.createdAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Expires {data?.expiresAt && new Date(data.expiresAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}