import Link from "next/link";
import { SiTradingview, SiNasa, SiRobloxstudio } from "react-icons/si";
import { fetchContributions } from "@/lib/github";
import ContributionSquare from "@/components/contribution-square";
import { fetchTokenActivity } from "@/lib/tokens";
import { formatTokens } from "@/lib/token-format";
import TokenBars from "@/components/token-bars";

// featured projects for the homepage
const selectedWork = [
  {
    name: "NASA Research Grant",
    description: "Optimizing 5G channel estimation and beamforming algorithms. Deep neural network architecture for 6G networks.",
    tags: ["Python", "Research", "Telecom"],
    link: "https://www.researchgate.net/publication/394617605_AI-Enhanced_Deep_Neural_Network_Architecture_for_Accurate_Channel_Estimation_in_6G_Networks",
    featured: false,
  },
  {
    name: "Verde",
    description: "Open-source Roblox Studio explorer extension for VS Code. Gives developers more freedom when developing off-platform.",
    tags: ["Luau", "VS Code", "Roblox"],
    link: "https://github.com/Dvitash/Verde",
    featured: true,
  },
  {
    name: "Archipelago Analytics Intern x2",
    tags: ["Python", "Data Science", "AWS"],
    description: "Engineered data pipeline solutions for property insurance document processing, shipping multiple production releases.",
    link: "https://www.onarchipelago.com/",
  },
];

export default async function Home() {
  const [contributions, tokens] = await Promise.all([fetchContributions(), fetchTokenActivity()]);

  return (
    <div>
      {/* hero section */}
      <section className="section">
        <div className="max-w-2xl">
          {/* name */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">Daniel Vitashkevich</h1>
          {/* value prop */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">I build trading systems, developer tools, and games.</p>
          {/* ctas */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/experience" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* selected work */}
      <section className="section border-t border-[var(--border)]">
        <p className="font-label text-[var(--text-muted)] mb-8">Selected Work</p>

        <div className="grid gap-6">
          {selectedWork.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={`card-featured p-6 transition-all ${project.featured ? "md:p-8" : ""}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl mb-2">{project.name}</h3>
                  <p className="text-[var(--text-secondary)] mb-4 max-w-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="font-label text-xs text-[var(--text-muted)] px-2 py-1 border border-[var(--border)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-label text-[var(--accent)] shrink-0">View →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)]">
          <Link href="/experience" className="link-accent font-label">
            View all projects →
          </Link>
        </div>
      </section>

      {/* github activity */}
      <section className="section border-t border-[var(--border)]">
        <div className="flex items-center justify-between mb-6">
          <p className="font-label text-[var(--text-muted)]">GitHub Activity</p>
          <a href="https://github.com/Dvitash" target="_blank" rel="noopener noreferrer" className="font-label text-xs text-[var(--text-secondary)] link-accent">
            View →
          </a>
        </div>
        <div className="card p-4 overflow-x-auto">
          <div className="grid grid-cols-[repeat(53,1fr)] gap-[2px] min-w-[600px]">
            {contributions.map((contribution, index) => (
              <ContributionSquare key={index} contribution={contribution} />
            ))}
          </div>
        </div>
      </section>

      {/* token usage */}
      <section className="section border-t border-[var(--border)]">
        <div className="mb-6">
          <p className="font-label text-[var(--text-muted)]">TOKEN USAGE · {formatTokens(tokens.totalTokens)} LAST 30D</p>
        </div>
        <div className="card p-4 overflow-x-auto">
          <TokenBars bars={tokens.bars} />
        </div>
      </section>
      {/* quick about */}
      <section className="section border-t border-[var(--border)]">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-label text-[var(--text-muted)] mb-4">About</p>
            <p className="text-[var(--text-secondary)] leading-relaxed">Computer Science student building software across finance, research, and games. Self-taught developer since 2020.</p>
          </div>
          <div>
            <p className="font-label text-[var(--text-muted)] mb-4">Contact</p>
            <div className="space-y-2 text-[var(--text-secondary)]">
              <p>
                <span className="text-[var(--accent)]">Discord:</span> dvitash
              </p>
              <p>
                <span className="text-[var(--accent)]">Email:</span>{" "}
                <a href="mailto:dvitash.dev@gmail.com" className="link-accent">
                  dvitash.dev@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
