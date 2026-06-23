"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-[calc(100vw-2rem)]",
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  showCloseButton = true,
}: ModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative w-full ${sizeClasses[size]} bg-[#13121f] border border-white/10 rounded-2xl shadow-2xl animate-scale-in max-h-[calc(100vh-2rem)] overflow-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-start justify-between gap-4 p-6 pb-0">
            <div className="flex-1">
              {title && (
                <h2 className="text-xl font-bold text-white">{title}</h2>
              )}
              {description && (
                <p className="text-sm text-white/50 mt-1">{description}</p>
              )}
            </div>
            {showCloseButton && (
              <button type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// Confirm modal variant
interface ConfirmModalProps extends Omit<ModalProps, "children"> {
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  variant?: "danger" | "primary";
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "primary",
}: ConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <p className="text-white/70 mb-6">{description}</p>
      <div className="flex gap-3 justify-end">
        <button type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-lg border border-white/20 text-white/70 font-medium hover:bg-white/5 transition-colors"
        >
          {cancelText}
        </button>
        <button type="button"
          onClick={handleConfirm}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            variant === "danger"
              ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
              : "bg-[#c9a84c] text-[#0d0c18] hover:bg-[#d4b85c]"
          }`}
        >
          {confirmText}
        </button>
      </div>
    </Modal>
  );
}
