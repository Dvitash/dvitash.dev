"use client";

import { useState, useRef, useEffect } from "react";
import { ContributionData } from "@/lib/github";

interface Props {
  contribution: ContributionData;
}

export default function ContributionSquare({ contribution }: Props) {
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);
  const [isAbove, setIsAbove] = useState(true);
  const squareRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  function updateTooltipPosition() {
    if (!squareRef.current || !tooltipRef.current) return;

    requestAnimationFrame(() => {
      if (!squareRef.current || !tooltipRef.current) return;

      const squareRect = squareRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      let left = squareRect.left + squareRect.width / 2 - tooltipRect.width / 2;
      let top = squareRect.top - tooltipRect.height - 8;
      let above = true;

      const minLeft = 8;
      const maxLeft = viewportWidth - tooltipRect.width - 8;
      left = Math.max(minLeft, Math.min(maxLeft, left));

      const minTop = 8;
      if (top < minTop) {
        top = squareRect.bottom + 8;
        above = false;
      }

      setIsAbove(above);
      setTooltipStyle({
        left: `${left}px`,
        top: `${top}px`,
      });
    });
  }

  useEffect(() => {
    if (isHovered) {
      updateTooltipPosition();
      const interval = setInterval(updateTooltipPosition, 100);
      return () => clearInterval(interval);
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

  const date = new Date(contribution.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div
      ref={squareRef}
      className="group relative aspect-square p-[0.1rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full h-full bg-[var(--accent)]"
        style={{ opacity: contribution.opacity }}
      />
      <div
        ref={tooltipRef}
        className="fixed pointer-events-none z-50 px-3 py-2 text-xs opacity-0 group-hover:delay-300 group-hover:opacity-100 bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] whitespace-nowrap transition-opacity duration-200"
        style={tooltipStyle}
      >
        <div className="font-bold text-[var(--accent)]">
          {contribution.count} {contribution.count === 1 ? "contribution" : "contributions"}
        </div>
        <div className="text-[var(--text-secondary)]">
          {dayName}, {formattedDate}
        </div>
      </div>
    </div>
  );
}
