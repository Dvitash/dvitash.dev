"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { LiveStats } from "@/lib/live-stats";

const POLL_MS = 30_000;
const TWEEN_MS = 1200;
const countFormat = new Intl.NumberFormat("en-US");

// One poller shared by every mounted counter; it stops when the last one unmounts.
let latest: LiveStats | undefined;
const listeners = new Set<() => void>();
let timer: number | undefined;

async function poll() {
  if (document.visibilityState === "hidden") return;
  try {
    const res = await fetch("/api/stats", { cache: "no-store" });
    if (!res.ok) return;
    latest = await res.json();
    for (const listener of listeners) listener();
  } catch {
    // Network blip: keep showing the last value.
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  timer ??= window.setInterval(poll, POLL_MS);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.clearInterval(timer);
      timer = undefined;
    }
  };
}

export default function LiveCount({ source, id, initial, label }: { source: keyof LiveStats; id: string; initial: number; label: string }) {
  const target = useSyncExternalStore(
    subscribe,
    () => latest?.[source][id] ?? initial,
    () => initial,
  );
  const [shown, setShown] = useState(target);
  const shownRef = useRef(target);

  // Count up to each new value instead of jumping.
  useEffect(() => {
    const from = shownRef.current;
    if (from === target) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const t = reduceMotion ? 1 : Math.min((now - start) / TWEEN_MS, 1);
      const value = Math.round(from + (target - from) * (1 - (1 - t) ** 3));
      shownRef.current = value;
      setShown(value);
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <span className="font-label text-xs text-[var(--accent)] tabular-nums">
      {countFormat.format(shown)} {label}
    </span>
  );
}
