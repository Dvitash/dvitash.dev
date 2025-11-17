import { BiError } from "react-icons/bi";
import { SiTradingview, SiPinescript, SiRust, SiGo, SiLua, SiTypescript, SiJavascript, SiCplusplus, SiSwift, SiKotlin, SiTailwindcss, SiNodedotjs, SiDocker, SiReact, SiPreact, SiNextdotjs, SiVite, SiVapor, SiGooglechrome, SiSpotify, SiGit, SiVercel, SiRedis, SiDocusaurus, SiRider, SiXcode, SiRobloxstudio, SiPython } from "react-icons/si";
import { NamedIcon } from "@/components/icon";
import { MdAutoFixHigh } from "react-icons/md";

import LinkButton from "@/components/linkButton";
import Container from "@/components/container";
import { VscVscode } from "react-icons/vsc";
import Link from "@/components/link";
import Tooltip from "@/components/tooltip";

interface Experience {
  name: string;
  technologies?: Array<string>;
  time: string;
  icon: React.ReactNode;
  desc: React.ReactNode;
  links?: Array<string>;
}

const experience: Array<Experience> = [
  {
    name: "Trading Algorithm",
    technologies: ["tradingview", "pinescript"],
    time: "November 2023 - now",
    icon: <NamedIcon name="nexus-blast" size={56} />,
    desc: (
      <>
        The trading algorithm driving my company, Synapse Dynamics.{"\n"}
        Hosted and ran on the TradingView cloud.{"\n"}
        Provides real-time trade entry & exit alerts for myself and my clients.
      </>
    ),
    links: ["https://docs.google.com/spreadsheets/d/1ZkMmbKwuAI89oNNKozUIAiriOyR1O3F1xWMw0-agyEo/edit?usp=sharing"],
  },
  {
    name: "Autotrader",
    technologies: ["tradingview", "pinescript", "python"],
    time: "May 2023 - August 2023",
    icon: <MdAutoFixHigh size={56} />,
    desc: (
      <>
        Software that turned text-based alerts from the Nexus Blast trading algorithm {"\n"}
        into real orders on the user's futures broker of choice. {"\n"}
        Utilized TradingView API calls with their broker integration feature {"\n"}
        to execute orders on the users' behalf. Supported complex order management systems {"\n"}
        such as automatic stop loss and take profit levels, as well as automatic break-even adjustment when {"\n"}a take profit level is hit.
      </>
    ),
    links: [],
  },
  {
    name: "Synapse Dynamics LLC — Founder & CEO",
    technologies: ["tradingview", "pinescript", "python"],
    time: "2022 - Present",
    icon: <SiTradingview size={56} />,
    desc: (
      <>
        Algorithmic Trading company primarily focused on trading the S&P 500.{"\n"}
        Leading development of proprietary trading algorithms and managing client portfolios.{"\n"}
        Driving innovation in automated trading systems and market analysis.
      </>
    ),
    links: [],
  },
  {
    name: "Archipelago Analytics - Engineering Intern",
    technologies: ["python", "node", "docker"],
    time: "Summer 2025",
    icon: <SiPython size={56} />,
    desc: (
      <>
        Assisted in the creation and optimization of multiple data processing pipelines for{"\n"}
        property insurance documents. Contributed to significant improvements in data extraction{"\n"}
        accuracy and reliability. Deployed 3 live code deployments to production environments.
      </>
    ),
    links: [],
  },
  {
    name: "NASA Research Grant",
    technologies: ["python", "rust"],
    time: "Summer 2024 - Present",
    icon: <SiPython size={56} />,
    desc: (
      <>
        Conducting research on optimizing 5G channel estimation and beamforming algorithms.{"\n"}
        Developing advanced signal processing techniques for next-generation wireless communication.{"\n"}
        Contributing to cutting-edge research in telecommunications and network optimization.
      </>
    ),
    links: [],
  },
  {
    name: "Alphabet Academy - IT Systems Administrator",
    technologies: [],
    time: "January 2021 - Present",
    icon: <VscVscode size={56} />,
    desc: (
      <>
        Provided comprehensive IT support and administration including setup,{"\n"}
        troubleshooting, and maintenance of PCs, IP cameras, MS servers, and storage systems.{"\n"}
        Managed network infrastructure and ensured system reliability for educational environment.
      </>
    ),
    links: [],
  },
];

export default function Experience() {
  function getAutoScaledFontSize(name: string) {
    const length = name.length;
    const containerWidth = 600; // Fixed container width in pixels
    const avgCharWidthRatio = 0.6; // Average character width as ratio of font size

    // Calculate ideal font size to fit container: container_width / (text_length * avg_char_width_ratio)
    // This gives us the maximum font size that would fit the text on one line
    const idealFontSize = containerWidth / (length * avgCharWidthRatio);

    // Apply diminishing returns for very short text (don't make it ridiculously large)
    const adjustedIdealSize = Math.min(idealFontSize, length < 20 ? idealFontSize * 0.8 : idealFontSize);

    // Clamp between reasonable bounds for readability
    const minSize = 14; // Minimum readable size
    const maxSize = 48; // Maximum reasonable size
    const clampedSize = Math.max(minSize, Math.min(maxSize, adjustedIdealSize));

    // For mobile, scale down slightly but maintain proportions
    const mobileSize = Math.max(minSize, clampedSize * 0.75);

    return {
      fontSize: `clamp(${mobileSize}px, ${clampedSize / 16}rem, ${clampedSize}px)`,
    };
  }

  function technologies(technologies: Array<string>) {
    function div(index: number, icon: React.ReactNode, name: string) {
      return (
        <div key={index} className="pl-2 relative group">
          {icon}
          <Tooltip>{name}</Tooltip>
        </div>
      );
    }

    return technologies.map((technology, index) => {
      switch (technology) {
        case "rust":
          return div(index, <SiRust />, "Rust");
        case "go":
          return div(index, <SiGo />, "Go");
        case "lua":
          return div(index, <SiLua />, "Lua");
        case "ts":
          return div(index, <SiTypescript />, "TypeScript");
        case "js":
          return div(index, <SiJavascript />, "JavaScript");
        case "cpp":
          return div(index, <SiCplusplus />, "C++");
        case "swift":
          return div(index, <SiSwift />, "Swift");
        case "kotlin":
          return div(index, <SiKotlin />, "Kotlin");
        case "redis":
          return div(index, <SiRedis />, "Redis");
        case "docker":
          return div(index, <SiDocker />, "Docker");
        case "tailwind":
          return div(index, <SiTailwindcss />, "Tailwind CSS");
        case "node":
          return div(index, <SiNodedotjs />, "Node.js");
        case "react":
          return div(index, <SiReact />, "React");
        case "preact":
          return div(index, <SiPreact />, "Preact");
        case "next":
          return div(index, <SiNextdotjs />, "Next.js");
        case "vite":
          return div(index, <SiVite />, "Vite");
        case "doc":
          return div(index, <SiDocusaurus />, "Docusaurus");
        case "vercel":
          return div(index, <SiVercel />, "Vercel");
        case "vapor":
          return div(index, <SiVapor />, "Vapor");
        case "chrome":
          return div(index, <SiGooglechrome />, "Chrome");
        case "spotify":
          return div(index, <SiSpotify />, "Spotify");
        case "git":
          return div(index, <SiGit />, "Git");
        case "vsc":
          return div(index, <VscVscode />, "VS Code");
        case "rider":
          return div(index, <SiRider />, "Rider");
        case "xcode":
          return div(index, <SiXcode />, "Xcode");
        case "roblox":
          return div(index, <SiRobloxstudio />, "Roblox Studio");
        case "tradingview":
          return div(index, <SiTradingview />, "TradingView");
        case "pinescript":
          return div(index, <SiPinescript />, "PineScript");
        case "python":
          return div(index, <SiPython />, "Python");
        default:
          return div(index, <BiError />, technology);
      }
    });
  }

  function buttons(links: Array<string>) {
    return links.map((link, index) => {
      return <LinkButton key={index} index={index} link={link} tooltip="Project website" />;
    });
  }

  return (
    <div className="w-full">
      <p className="text-center text-xs opacity-60 pt-[10px] -mb-[10px] sm:hidden">Rotate your device to see more details</p>
      <div className="flex flex-wrap justify-center">
        {experience.map((project, index) => {
          return (
            <Container key={index} className="w-[600px] m-4 self-center h-[350px] flex flex-col">
              <Container className="h-[78px] flex flex-row" borders="b">
                <Container className="min-w-[76px] h-full flex items-center justify-center" borders="r">
                  {project.icon}
                </Container>

                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <b className="text-balance" style={getAutoScaledFontSize(project.name)}>
                    {project.name}
                  </b>
                </div>
              </Container>

              <div className="flex-1 p-4 overflow-hidden relative">
                <p className="text-justify">{project.desc}</p>
                <p className="absolute bottom-4 left-4 opacity-60">{project.time}</p>
                <div className="absolute bottom-4 right-4 hidden sm:flex flex-row text-2xl">{technologies(project.technologies || [])}</div>
              </div>

              {project.links && project.links.length > 0 && (
                <Container className="h-[78px] flex flex-row" borders="t">
                  {buttons(project.links)}
                </Container>
              )}
            </Container>
          );
        })}
      </div>
    </div>
  );
}
