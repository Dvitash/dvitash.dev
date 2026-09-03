"use client";

import { useState, useRef, useEffect } from "react";
import { TokenDay, formatTokens, formatCost } from "@/lib/token-format";

function TokenBar({ day, max }: { day: TokenDay; max: number }) {
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  function updateTooltipPosition() {
    if (!barRef.current || !tooltipRef.current) return;

    requestAnimationFrame(() => {
      if (!barRef.current || !tooltipRef.current) return;
      const barRect = barRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const left = Math.max(
        10,
        Math.min(
          barRect.left + barRect.width / 2 - tooltipRect.width / 2,
          window.innerWidth - tooltipRect.width - 10,
        ),
      );
      const top = barRect.top - tooltipRect.height - 8;

      setTooltipStyle({ left: `${left}px`, top: `${top}px` });
    });
  }

  useEffect(() => {
    if (isHovered) {
      updateTooltipPosition();
    }
  }, [isHovered]);

  useEffect(() => {
    if (isHovered) {
      window.addEventListener("scroll", updateTooltipPosition, true);
      window.addEventListener("resize", updateTooltipPosition);
      return () => {
        window.removeEventListener("scroll", updateTooltipPosition, true);
        window.removeEventListener("resize", updateTooltipPosition);
      };
    }
  }, [isHovered]);

  const height =
    day.tokens > 0 && max > 0
      ? Math.max(3, (day.tokens / max) * 100)
      : 2;

  const date = new Date(day.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div
      className="flex-1 h-full flex items-end min-w-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={barRef}
        className="w-full bg-[var(--accent)]"
        style={{ height: `${height}%`, opacity: day.opacity }}
      />
      <div
        ref={tooltipRef}
        className="fixed pointer-events-none z-50 px-3 py-2 text-xs bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] whitespace-nowrap transition-opacity duration-200"
        style={{ ...tooltipStyle, opacity: isHovered ? 1 : 0 }}
      >
        <div className="font-bold text-[var(--accent)]">
          {formatTokens(day.tokens)} tokens
        </div>
        <div className="text-[var(--text-secondary)]">
          {day.requests.toLocaleString()} requests • {formatCost(day.cost)}
        </div>
        <div className="text-[var(--text-secondary)]">
          {dayName}, {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default function TokenBars({ bars }: { bars: Array<TokenDay> }) {
  const max = Math.max(...bars.map((b) => b.tokens), 1);

  return (
    <div className="flex items-end gap-[3px] h-48 min-w-[600px]">
      {bars.map((day) => (
        <TokenBar key={day.date} day={day} max={max} />
      ))}
    </div>
  );
}
