import { readFileSync } from "node:fs";
import { clamp } from "./utils";
import type { TokenDay } from "./token-format";
import snapshot from "./token-snapshot.json";

export interface TokenActivity {
  bars: Array<TokenDay>;
  totalTokens: number;
  totalRequests: number;
  totalCost: number;
}

const LAST_DAYS = 30;
const STATS_BASE =
  process.env.OMP_STATS_BASE_URL ?? "http://127.0.0.1:3847";

interface Bucket {
  timestamp: number;
  tokens: number;
  requests: number;
  cost: number;
}

function toDateKey(ts: number): string {
  return new Date(ts).toISOString().split("T")[0];
}

function buildActivity(buckets: Array<Bucket>): TokenActivity {
  const byDate = new Map<string, Bucket>();
  for (const b of buckets) {
    byDate.set(toDateKey(b.timestamp), b);
  }

  const bars: Array<TokenDay> = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let max = 0;

  for (let i = LAST_DAYS - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split("T")[0];
    const b = byDate.get(key);
    const tokens = b?.tokens ?? 0;
    if (tokens > max) max = tokens;
    bars.push({
      date: key,
      tokens,
      requests: b?.requests ?? 0,
      cost: b?.cost ?? 0,
      opacity: 0,
    });
  }

  // sqrt curve: counts span ~100M–5B, linear would crush small days to black
  let totalTokens = 0;
  let totalRequests = 0;
  let totalCost = 0;
  for (const day of bars) {
    day.opacity =
      day.tokens > 0 && max > 0
        ? clamp(0.25 + 0.75 * Math.sqrt(day.tokens / max), 0, 1)
        : 0.1;
    totalTokens += day.tokens;
    totalRequests += day.requests;
    totalCost += day.cost;
  }

  return { bars, totalTokens, totalRequests, totalCost };
}

export async function fetchTokenActivity(): Promise<TokenActivity> {
  // 1. hourly poller snapshot (production: Oracle pulls Spark over tailnet)
  const snapshotPath = process.env.TOKEN_SNAPSHOT_PATH;
  if (snapshotPath) {
    try {
      const raw = readFileSync(snapshotPath, "utf-8");
      const json = JSON.parse(raw);
      if (json?.timeSeries) return buildActivity(json.timeSeries as Array<Bucket>);
    } catch {
      // fall through to live fetch
    }
  }
  // 2. live stats server (dev on Spark, or any host on the tailnet)
  try {
    const res = await fetch(`${STATS_BASE}/api/stats/overview?range=30d`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 600 },
    });
    if (!res.ok) throw new Error(`stats ${res.status}`);
    const json = await res.json();
    if (!json?.timeSeries) throw new Error("bad stats payload");
    return buildActivity(json.timeSeries as Array<Bucket>);
  } catch {
    // 3. committed snapshot so the chart still shows real recent data.
    const buckets = (snapshot as { timeSeries: Array<Bucket> }).timeSeries;
    return buildActivity(buckets);
  }
}
