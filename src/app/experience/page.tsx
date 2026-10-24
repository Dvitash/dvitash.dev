import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import LiveCount from "@/components/live-count";
import { type LiveStats, fetchLiveStats } from "@/lib/live-stats";
import { type Project, projects } from "@/lib/projects";

function TechnologyBadge({ tech }: { tech: { icon: React.ReactNode; name: string } }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 text-xs border border-[var(--border)] text-[var(--text-muted)]">
      <span className="text-sm">{tech.icon}</span>
      <span className="font-label">{tech.name}</span>
    </div>
  );
}

const compactFormat = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });

function ProjectCard({ project, stats }: { project: Project; stats: LiveStats }) {
  const liveVisits = project.universeId ? stats.visits[project.universeId] : undefined;
  const liveStars = project.repo ? stats.stars[project.repo] : undefined;
  return (
    <article className={`card p-6 ${project.featured ? "md:p-8" : ""}`}>
      <div className="flex flex-col gap-4">
        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <h3 className="font-display text-xl md:text-2xl">{project.name}</h3>
          <div className="flex flex-col sm:items-end gap-1 shrink-0">
            <span className="font-label text-xs text-[var(--text-muted)]">{project.time}</span>
            {project.visitCount !== undefined && <span className="font-label text-xs text-[var(--accent)]">{compactFormat.format(project.visitCount)} visits</span>}
            {liveVisits !== undefined && <LiveCount source="visits" id={String(project.universeId)} initial={liveVisits} label="visits" />}
            {liveStars !== undefined && project.repo && <LiveCount source="stars" id={project.repo} initial={liveStars} label="stars" />}
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
  const stats = await fetchLiveStats();

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
            <ProjectCard key={index} project={project} stats={stats} />
          ))}
        </div>
      </section>

      {/* other work */}
      <section className="border-t border-[var(--border)] pt-12">
        <p className="font-label text-[var(--text-muted)] mb-6">Other Work</p>
        <div className="grid gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} stats={stats} />
          ))}
        </div>
      </section>
    </div>
  );
}
