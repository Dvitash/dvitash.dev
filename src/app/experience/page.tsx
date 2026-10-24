import Link from "next/link";
import { SiLatex, SiDatadog, SiNumpy, SiPandas, SiNasa, SiTradingview, SiPinescript, SiGit, SiRobloxstudio, SiPython, SiTypescript, SiLua } from "react-icons/si";
import { MdAutoFixHigh, MdSchool } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { NamedIcon } from "@/components/icon";

interface Project {
  name: string;
  technologies: Array<{ icon: React.ReactNode; name: string }>;
  time: string;
  description: string;
  links?: Array<{ url: string; label: string }>;
  featured?: boolean;
  /** Roblox universe ID; the card shows its live visit count. */
  universeId?: number;
  /** Fixed visit count for a game the Roblox API no longer reports. */
  visitCount?: number;
  /** GitHub "owner/name"; the card shows its live star count. */
  repo?: string;
}

const projects: Project[] = [
  {
    name: "Verde",
    technologies: [
      { icon: <SiRobloxstudio />, name: "Roblox Studio" },
      { icon: <NamedIcon name="luau" dimmed />, name: "Luau" },
      { icon: <SiGit />, name: "Git" },
    ],
    time: "2025 - Present",
    description: "Open-source Roblox Studio explorer and properties emulator extension for VS Code. Enables off-platform development with full project synchronization.",
    links: [
      { url: "https://github.com/Dvitash/Verde", label: "GitHub" },
      { url: "https://marketplace.visualstudio.com/items?itemName=Dvitash.verde", label: "VS Marketplace" },
    ],
    featured: true,
  },
  {
    name: "Synapse Dynamics Trading Algorithm",
    technologies: [
      { icon: <SiTradingview />, name: "TradingView" },
      { icon: <SiPinescript />, name: "PineScript" },
    ],
    time: "November 2023 - Present",
    description: "Algorithmic trading system providing real-time entry and exit alerts for futures markets. Hosted on TradingView cloud with live client distribution.",
    links: [{ url: "https://docs.google.com/spreadsheets/d/1ZkMmbKwuAI89oNNKozUIAiriOyR1O3F1xWMw0-agyEo/edit?usp=sharing", label: "Performance" }],
    featured: true,
  },
  {
    name: "NASA Research Grant",
    technologies: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiLatex />, name: "LaTeX" },
    ],
    time: "Summer 2024 - Fall 2025",
    description: "Research on optimizing 5G channel estimation and beamforming algorithms. Developing deep neural network architectures for 6G wireless communication.",
    links: [{ url: "https://www.researchgate.net/publication/394617605_AI-Enhanced_Deep_Neural_Network_Architecture_for_Accurate_Channel_Estimation_in_6G_Networks", label: "Paper" }],
    featured: true,
  },
  {
    name: "Archipelago Analytics Intern x2",
    technologies: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiDatadog />, name: "Datadog" },
    ],
    time: "Summer 2025 - Present",
    description: "Built and optimized data processing pipelines for property insurance documents. Deployed 3 production releases with improved extraction accuracy.",
    links: [{ url: "https://www.onarchipelago.com/", label: "Company" }],
  },
  {
    name: "Futures Autotrader",
    technologies: [
      { icon: <SiTradingview />, name: "TradingView" },
      { icon: <SiPinescript />, name: "PineScript" },
      { icon: <SiPython />, name: "Python" },
    ],
    time: "May 2023 - August 2023",
    description: "Automated execution system converting text alerts into live futures orders. Implemented complex order management with stop loss, take profit, and break-even adjustment.",
  },
  {
    name: "Orca Contributor",
    technologies: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiGit />, name: "Git" },
    ],
    time: "2026",
    description: "Merged three fixes to Orca, a desktop, mobile and remote workspace for running fleets of coding agents. Stopped terminal and worktree titles flickering for OMP sessions, locally and over remote runtimes.",
    links: [{ url: "https://github.com/stablyai/orca/pulls?q=is%3Apr+author%3ADvitash+is%3Amerged", label: "PRs" }],
    repo: "stablyai/orca",
  },
  {
    name: "robloxstudio-mcp Contributor",
    technologies: [
      { icon: <SiLua />, name: "Lua" },
      { icon: <SiRobloxstudio />, name: "Roblox Studio" },
    ],
    time: "2026",
    description: "Merged three changes to an MCP server that lets AI agents debug, playtest and inspect Roblox Studio. Added rbxm import/export and memory snapshot tools, ran managed Studio under Wine on native Linux, and hardened Studio launch process identity.",
    links: [{ url: "https://github.com/Chrrxs/robloxstudio-mcp/pulls?q=is%3Apr+author%3ADvitash+is%3Amerged", label: "PRs" }],
    repo: "Chrrxs/robloxstudio-mcp",
  },
  {
    name: "Build the Titanic",
    technologies: [
      { icon: <SiRobloxstudio />, name: "Roblox Studio" },
      { icon: <NamedIcon name="luau" dimmed />, name: "Luau" },
    ],
    time: "October 2026 - Present",
    description: "Co-op Roblox game where the whole server carries crates to build the Titanic, then watches it sail. Each finished ship unlocks new training areas.",
    universeId: 10769868953,
  },
  {
    name: "Grow a Coral Reef",
    technologies: [
      { icon: <SiRobloxstudio />, name: "Roblox Studio" },
      { icon: <NamedIcon name="luau" dimmed />, name: "Luau" },
    ],
    time: "Summer 2025",
    description: "Roblox game with custom growth algorithms and procedural coral animations. Full-stack development including server logic, client UI, and database integration.",
    universeId: 7670673278,
  },
  {
    name: "Ro-Bio Experiment",
    technologies: [
      { icon: <SiRobloxstudio />, name: "Roblox Studio" },
      { icon: <NamedIcon name="luau" dimmed />, name: "Luau" },
    ],
    time: "Summer 2024",
    description: "Lead developer managing team coordination and core system development. Planned updates and collaborated directly with the game creator.",
    visitCount: 110_000_000,
  },
];

function TechnologyBadge({ tech }: { tech: { icon: React.ReactNode; name: string } }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 text-xs border border-[var(--border)] text-[var(--text-muted)]">
      <span className="text-sm">{tech.icon}</span>
      <span className="font-label">{tech.name}</span>
    </div>
  );
}

async function fetchVisits(universeIds: number[]): Promise<Map<number, number>> {
  const visits = new Map<number, number>();
  try {
    const res = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeIds.join(",")}`, { next: { revalidate: 3600 } });
    if (!res.ok) return visits;
    const body: { data: Array<{ id: number; visits: number }> } = await res.json();
    for (const game of body.data) visits.set(game.id, game.visits);
  } catch {
    // Roblox API unreachable: cards render without a visit count.
  }
  return visits;
}

const visitFormat = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });

async function fetchStars(repos: string[]): Promise<Map<string, number>> {
  const stars = new Map<string, number>();
  await Promise.all(
    repos.map(async (repo) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, { next: { revalidate: 3600 } });
        if (!res.ok) return;
        const body: { stargazers_count: number } = await res.json();
        stars.set(repo, body.stargazers_count);
      } catch {
        // GitHub unreachable: card renders without a star count.
      }
    }),
  );
  return stars;
}

function ProjectCard({ project, visits, stars }: { project: Project; visits: Map<number, number>; stars: Map<string, number> }) {
  const visitCount = project.visitCount ?? (project.universeId ? visits.get(project.universeId) : undefined);
  const starCount = project.repo ? stars.get(project.repo) : undefined;
  return (
    <article className={`card p-6 ${project.featured ? "md:p-8" : ""}`}>
      <div className="flex flex-col gap-4">
        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <h3 className="font-display text-xl md:text-2xl">{project.name}</h3>
          <div className="flex flex-col sm:items-end gap-1 shrink-0">
            <span className="font-label text-xs text-[var(--text-muted)]">{project.time}</span>
            {visitCount !== undefined && <span className="font-label text-xs text-[var(--accent)]">{visitFormat.format(visitCount)} visits</span>}
            {starCount !== undefined && <span className="font-label text-xs text-[var(--accent)]">{visitFormat.format(starCount)} stars</span>}
          </div>
        </div>

        {/* description */}
        <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{project.description}</p>

        {/* tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <TechnologyBadge key={index} tech={tech} />
          ))}
        </div>

        {/* links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-2">
            {project.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-accent font-label text-sm flex items-center gap-1">
                {link.label}
                <IoArrowForward size={12} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default async function Experience() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const [visits, stars] = await Promise.all([
    fetchVisits(projects.flatMap((p) => (p.universeId ? [p.universeId] : []))),
    fetchStars(projects.flatMap((p) => (p.repo ? [p.repo] : []))),
  ]);

  return (
    <div className="section">
      {/* header */}
      <div className="mb-12">
        <p className="font-label text-[var(--accent)] mb-4">Work</p>
        <h1 className="font-display text-3xl md:text-4xl mb-4">Projects & Experience</h1>
        <p className="text-[var(--text-secondary)] max-w-xl">A mix of professional work, research, and personal projects spanning trading systems, game development, and developer tooling.</p>
      </div>

      {/* featured work */}
      <section className="mb-16">
        <p className="font-label text-[var(--text-muted)] mb-6">Featured</p>
        <div className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} visits={visits} stars={stars} />
          ))}
        </div>
      </section>

      {/* other work */}
      <section className="border-t border-[var(--border)] pt-12">
        <p className="font-label text-[var(--text-muted)] mb-6">Other Work</p>
        <div className="grid gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} visits={visits} stars={stars} />
          ))}
        </div>
      </section>
    </div>
  );
}
