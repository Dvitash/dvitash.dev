import { SiGit, SiRobloxstudio, SiBlender, SiCplusplus, SiPython, SiTradingview, SiAmazonwebservices } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { NamedIcon } from "@/components/icon";
import { calculateAge } from "@/lib/utils";

const techStack = {
  languages: [
    { name: "Luau", icon: <NamedIcon name="luau" tintWithAccent /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
  ],
  platforms: [
    { name: "Roblox", icon: <SiRobloxstudio /> },
    { name: "TradingView", icon: <SiTradingview /> },
    { name: "AWS", icon: <SiAmazonwebservices /> },
  ],
  tools: [
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Blender", icon: <SiBlender /> },
  ],
};

const currentlyUsing = ["Luau", "Python", "VS Code", "Git"];

function TechTag({ name, icon }: { name: string; icon: React.ReactNode | null }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 border border-[var(--border)] text-sm">
      {icon && <span className="text-[var(--accent)]">{icon}</span>}
      <span>{name}</span>
    </div>
  );
}

function TechGroup({ title, items }: { title: string; items: Array<{ name: string; icon: React.ReactNode | null }> }) {
  return (
    <div>
      <p className="font-label text-[var(--text-muted)] mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <TechTag key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="section">
      {/* header */}
      <div className="mb-12">
        <p className="font-label text-[var(--accent)] mb-4">About</p>
        <h1 className="font-display text-3xl md:text-4xl mb-6">Daniel Vitashkevich</h1>
      </div>

      {/* main content grid */}
      <div className="grid lg:grid-cols-5 gap-12">
        {/* bio */}
        <div className="lg:col-span-3">
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>I&apos;m {calculateAge(2005, 2, 5)} years old, based in the United States, and currently a senior Computer Science student on track to complete my Master&apos;s degree next spring.</p>
            <p>I&apos;ve been programming since 2020 and am entirely self-taught. My primary focus right now is Roblox development with Luau, alongside building trading systems and quantitative tools.</p>
            <p>I&apos;ve worked on everything from open-source developer tools to production trading algorithms to published research with NASA. I&apos;m interested in software that solves real problems.</p>
          </div>
        </div>
      </div>

      {/* tech stack */}
      <section className="mt-16 pt-12 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-3 gap-8">
          <TechGroup title="Languages" items={techStack.languages} />
          <TechGroup title="Platforms" items={techStack.platforms} />
          <TechGroup title="Tools" items={techStack.tools} />
        </div>
      </section>
    </div>
  );
}
