"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Tooltip({ children, className }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find the parent element with the "group" class
    let groupElement: Element | null = container;
    while (groupElement && !groupElement.classList.contains("group")) {
      groupElement = groupElement.parentElement;
    }

    if (!groupElement) return;

    const handleMouseEnter = () => {
      const rect = groupElement!.getBoundingClientRect();
      setPosition({
        top: rect.top - 8, // 8px above the trigger
        left: rect.left + rect.width / 2, // center horizontally
      });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Listen for hover on the group element
    groupElement.addEventListener("mouseenter", handleMouseEnter);
    groupElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      groupElement!.removeEventListener("mouseenter", handleMouseEnter);
      groupElement!.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const tooltipContent = (
    <div
      className={`fixed pointer-events-none z-[9999] px-4 py-2 text-center text-xs transform -translate-x-1/2 -translate-y-full ${isVisible ? "opacity-100" : "opacity-0"} bg-black dark:bg-white text-white dark:text-black ${className || ""}`}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {children}

      <svg className="absolute left-1/2 top-full h-3 w-6 -translate-x-1/2 text-black dark:text-white" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 255 255">
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  );

  return <div ref={containerRef}>{isClient && createPortal(tooltipContent, document.body)}</div>;
}
