import { SiLatex, SiDatadog, SiNumpy, SiPandas, SiNasa, SiTradingview, SiPinescript, SiRust, SiGo, SiLua, SiTypescript, SiJavascript, SiCplusplus, SiSwift, SiKotlin, SiTailwindcss, SiNodedotjs, SiDocker, SiReact, SiPreact, SiNextdotjs, SiVite, SiVapor, SiGooglechrome, SiSpotify, SiGit, SiVercel, SiRedis, SiDocusaurus, SiRider, SiXcode, SiRobloxstudio, SiPython } from "react-icons/si";
import { MdAutoFixHigh, MdSchool } from "react-icons/md";
import { NamedIcon } from "@/components/icon";
import { BiError } from "react-icons/bi";
import { FaAws } from "react-icons/fa";

import LinkButton from "@/components/linkButton";
import Container from "@/components/container";
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
    name: "Archipelago Analytics Engineering Intern",
    technologies: ["python", "docker", "pandas", "numpy", "aws", "datadog", "git"],
    time: "Summer 2025",
    icon: <NamedIcon name="archipelago" size={56} />,
    desc: (
      <>
        Assisted in the creation and optimization of multiple data processing pipelines for{"\n"}
        property insurance documents. Contributed to significant improvements in data extraction{"\n"}
        accuracy and reliability. Deployed 3 live code deployments to production environments.
      </>
    ),
    links: ["https://www.onarchipelago.com/"],
  },
  {
    name: "NASA Research Grant",
    technologies: ["python", "latex"],
    time: "Summer 2024 - Present",
    icon: <SiNasa size={56} />,
    desc: (
      <>
        Conducting research on optimizing 5G channel estimation and beamforming algorithms.{"\n"}
        Developing advanced signal processing techniques for next-generation wireless communication.{"\n"}
        Contributing to cutting-edge research in telecommunications and network optimization.
      </>
    ),
    links: ["https://www.researchgate.net/publication/394617605_AI-Enhanced_Deep_Neural_Network_Architecture_for_Accurate_Channel_Estimation_in_6G_Networks"],
  },
];

const MAX_FONT_SIZE = 24; // Maximum font size constant for name fields

export default function Experience() {
  function getConsistentFontSize() {
    // For mobile, scale down slightly but maintain proportions
    const mobileSize = Math.max(14, MAX_FONT_SIZE * 0.75);

    return {
      fontSize: `clamp(${mobileSize}px, ${MAX_FONT_SIZE / 16}rem, ${MAX_FONT_SIZE}px)`,
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
        case "lua":
          return div(index, <SiLua />, "Lua");
        case "docker":
          return div(index, <SiDocker />, "Docker");
        case "git":
          return div(index, <SiGit />, "Git");
        case "roblox":
          return div(index, <SiRobloxstudio />, "Roblox Studio");
        case "tradingview":
          return div(index, <SiTradingview />, "TradingView");
        case "pinescript":
          return div(index, <SiPinescript />, "PineScript");
        case "python":
          return div(index, <SiPython />, "Python");
        case "pandas":
          return div(index, <SiPandas />, "Pandas");
        case "numpy":
          return div(index, <SiNumpy />, "NumPy");
        case "aws":
          return div(index, <FaAws />, "AWS");
        case "datadog":
          return div(index, <SiDatadog />, "Datadog");
        case "latex":
          return div(index, <SiLatex />, "LaTeX");
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

                <div className="relative w-full h-full flex items-center justify-start p-4">
                  <b className="text-balance" style={getConsistentFontSize()}>
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
