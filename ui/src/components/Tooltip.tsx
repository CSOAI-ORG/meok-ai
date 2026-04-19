"use client";

import { useState, useRef, useEffect } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export function Tooltip({
  content,
  children,
  position = "top",
  delay = 300,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        let x = 0;
        let y = 0;

        switch (position) {
          case "top":
            x = rect.left + rect.width / 2;
            y = rect.top - 8;
            break;
          case "bottom":
            x = rect.left + rect.width / 2;
            y = rect.bottom + 8;
            break;
          case "left":
            x = rect.left - 8;
            y = rect.top + rect.height / 2;
            break;
          case "right":
            x = rect.right + 8;
            y = rect.top + rect.height / 2;
            break;
        }

        setCoords({ x, y });
        setIsVisible(true);
      }
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const positionStyles = {
    top: { transform: "translate(-50%, -100%)", bottom: "auto", left: coords.x, top: coords.y },
    bottom: { transform: "translate(-50%, 0)", top: coords.y, left: coords.x },
    left: { transform: "translate(-100%, -50%)", right: "auto", top: coords.y, left: coords.x },
    right: { transform: "translate(0, -50%)", left: coords.x, top: coords.y },
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && (
        <div
          className="fixed z-50 px-3 py-1.5 text-xs font-medium text-white bg-[#1a1a2e] border border-white/10 rounded-lg shadow-lg pointer-events-none animate-fade-in"
          style={positionStyles[position]}
        >
          {content}
          {/* Arrow */}
          <div
            className={`absolute w-2 h-2 bg-[#1a1a2e] border-white/10 ${
              position === "top"
                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 border-b border-r"
                : position === "bottom"
                ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-t border-l"
                : position === "left"
                ? "right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45 border-t border-r"
                : "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-l"
            }`}
          />
        </div>
      )}
    </>
  );
}
