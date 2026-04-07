"use client";

import { useState } from "react";
import { FileDown, FileText, File, Printer, Download } from "lucide-react";

interface ExportMenuProps {
  onExport?: (format: 'markdown' | 'html' | 'text') => void;
  query: string;
  answer: string;
  sources: Array<{ title: string; url: string; snippet?: string }>;
  className?: string;
}

export function ResearchExportMenu({ 
  onExport, 
  query, 
  answer, 
  sources, 
  className = "" 
}: ExportMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  const handleExport = (format: 'markdown' | 'html' | 'text') => {
    setShowMenu(false);
    onExport?.(format);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:bg-white/10"
        style={{ border: `1px solid rgba(255,255,255,0.1)` }}
      >
        <FileDown className="w-3.5 h-3.5" />
        Export
      </button>

      {showMenu && (
        <div className="absolute right-0 top-full mt-1 z-50 min-w-40 bg-slate-800 border border-slate-600 rounded-lg shadow-xl overflow-hidden">
          <button
            onClick={() => handleExport('markdown')}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/80 hover:bg-white/10 text-left"
          >
            <FileText className="w-3.5 h-3.5" />
            Markdown (.md)
          </button>
          <button
            onClick={() => handleExport('html')}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/80 hover:bg-white/10 text-left"
          >
            <File className="w-3.5 h-3.5" />
            HTML (Print to PDF)
          </button>
          <button
            onClick={() => handleExport('text')}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/80 hover:bg-white/10 text-left"
          >
            <Download className="w-3.5 h-3.5" />
            Plain Text (.txt)
          </button>
          <div className="border-t border-slate-700" />
          <button
            onClick={() => {
              window.print();
              setShowMenu(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/80 hover:bg-white/10 text-left"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save as PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default ResearchExportMenu;