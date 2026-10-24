import { SiLatex, SiDatadog, SiNumpy, SiPandas, SiNasa, SiTradingview, SiPinescript, SiGit, SiRobloxstudio, SiPython, SiTypescript, SiLua } from "react-icons/si";
import { MdAutoFixHigh, MdSchool } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { NamedIcon } from "@/components/icon";

export interface Project {
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

export const projects: Project[] = [
  {
    name: "Resin AI",
    technologies: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiGit />, name: "Git" },
    ],
    time: "August 2026 - Present",
    description: "Turns repeated coding-agent workflows into reusable, versioned tools served over a local MCP gateway. Works with Claude Code, Codex CLI, Cursor CLI and other agents; each tool runs within declared filesystem, network and secret limits, and prompts and source code stay on the local machine.",
    links: [
      { url: "https://resin.sh", label: "Website" },
      { url: "https://github.com/Resin-AI/resin", label: "GitHub" },
    ],
    featured: true,
  },
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
    description: "Built and optimized data processing pipelines for property insurance documents, improving extraction accuracy. Greatly improved developer quality of life across the team's tooling and workflows.",
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