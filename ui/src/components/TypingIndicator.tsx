"use client";

interface TypingIndicatorProps {
  name?: string;
}

export function TypingIndicator({ name = "CSOAI" }: TypingIndicatorProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="relative">
        <img
          src="/brand/csoai-robot.png"
          alt=""
          className="w-8 h-8 rounded-lg object-cover"
          style={{ filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))" }}
        />
        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#13121f]" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-white/50 mb-1">{name} is thinking</span>
        <div className="flex items-center gap-1">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
