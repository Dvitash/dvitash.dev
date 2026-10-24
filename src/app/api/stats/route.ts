import { fetchLiveStats } from "@/lib/live-stats";

export async function GET() {
  return Response.json(await fetchLiveStats(), { headers: { "Cache-Control": "no-store" } });
}
