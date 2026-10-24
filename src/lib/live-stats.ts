import { projects } from "./projects";

/** Roblox visits keyed by universe ID and GitHub stars keyed by "owner/name". */
export interface LiveStats {
  visits: Record<string, number>;
  stars: Record<string, number>;
}

// Upstream fetches are cached this long; the client polls /api/stats on the same interval.
export const LIVE_STATS_TTL_SECONDS = 30;

async function fetchVisits(universeIds: number[]): Promise<Record<string, number>> {
  const visits: Record<string, number> = {};
  if (universeIds.length === 0) return visits;
  try {
    const res = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeIds.join(",")}`, {
      next: { revalidate: LIVE_STATS_TTL_SECONDS },
    });
    if (!res.ok) return visits;
    const body: { data: Array<{ id: number; visits: number }> } = await res.json();
    for (const game of body.data) visits[game.id] = game.visits;
  } catch {
    // Roblox API unreachable: cards render without a visit count.
  }
  return visits;
}

async function fetchStars(repos: string[]): Promise<Record<string, number>> {
  const stars: Record<string, number> = {};
  const headers: HeadersInit = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
  await Promise.all(
    repos.map(async (repo) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, { headers, next: { revalidate: LIVE_STATS_TTL_SECONDS } });
        if (!res.ok) return;
        const body: { stargazers_count: number } = await res.json();
        stars[repo] = body.stargazers_count;
      } catch {
        // GitHub unreachable: card renders without a star count.
      }
    }),
  );
  return stars;
}

export async function fetchLiveStats(): Promise<LiveStats> {
  const [visits, stars] = await Promise.all([
    fetchVisits(projects.flatMap((p) => (p.universeId ? [p.universeId] : []))),
    fetchStars(projects.flatMap((p) => (p.repo ? [p.repo] : []))),
  ]);
  return { visits, stars };
}
