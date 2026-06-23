"use client";

import { useEffect, useState, createContext, useContext, useCallback } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);

    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

const colors = {
  success: { bg: "rgba(34,197,94,0.15)", border: "rgba(34,197,94,0.3)", icon: "#22c55e" },
  error: { bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.3)", icon: "#ef4444" },
  info: { bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.3)", icon: "#3b82f6" },
  warning: { bg: "rgba(251,191,36,0.15)", border: "rgba(251,191,36,0.3)", icon: "#fbbf24" },
};

function ToastContainer({ toasts, onRemove }: { toasts: Toast[]; onRemove: (id: string) => void }) {
  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast, index) => {
        const Icon = icons[toast.type];
        const color = colors[toast.type];

        return (
          <div
            key={toast.id}
            className="pointer-events-auto w-[380px] max-w-[calc(100vw-2rem)] animate-toast-in"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div
              className="rounded-xl border p-4 shadow-lg backdrop-blur-sm"
              style={{
                background: color.bg,
                borderColor: color.border,
              }}
            >
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: color.icon }} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm">{toast.title}</p>
                  {toast.message && (
                    <p className="text-white/70 text-xs mt-1">{toast.message}</p>
                  )}
                </div>
                <button type="button"
                  onClick={() => onRemove(toast.id)}
                  className="p-1 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* Progress bar */}
              <div className="mt-3 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full animate-toast-progress"
                  style={{ background: color.icon }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
