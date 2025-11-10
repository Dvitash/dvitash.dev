import { BiError } from "react-icons/bi";
import { SiTradingview, SiPinescript, SiRust, SiGo, SiLua, SiTypescript, SiJavascript, SiCplusplus, SiSwift, SiKotlin, SiTailwindcss, SiNodedotjs, SiDocker, SiReact, SiPreact, SiNextdotjs, SiVite, SiVapor, SiGooglechrome, SiSpotify, SiGit, SiVercel, SiRedis, SiDocusaurus, SiRider, SiXcode, SiRobloxstudio } from "react-icons/si";
import { NamedIcon } from "@/components/icon";

import LinkButton from "@/components/linkButton";
import Container from "@/components/container";
import { VscVscode } from "react-icons/vsc";
import Link from "@/components/link";

interface Project {
  name: string;
  technologies: Array<string>;
  time: string;
  icon: React.ReactNode;
  desc: React.ReactNode;
  links: Array<string>;
}

const projects: Array<Project> = [
  {
    name: "Trading Algorithm",
    technologies: ["tradingview", "pinescript"],
    time: "November 2023 - now",
    icon: <NamedIcon name="nexus-blast" size={56} />,
    desc: <>The trading algorithm driving my company, Synapse Dynamics. Hosted and ran on the TradingView cloud. Provides real-time trade entry & exit alerts for myself and my clients.</>,
    links: ["https://docs.google.com/spreadsheets/d/1ZkMmbKwuAI89oNNKozUIAiriOyR1O3F1xWMw0-agyEo/edit?usp=sharing"],
  },
];

export default function Projects() {
  function technologies(technologies: Array<string>) {
    function div(index: number, icon: React.ReactNode) {
      return (
        <div key={index} className="pl-2">
          {icon}
        </div>
      );
    }

    return technologies.map((technology, index) => {
      switch (technology) {
        case "rust":
          return div(index, <SiRust />);
        case "go":
          return div(index, <SiGo />);
        case "lua":
          return div(index, <SiLua />);
        case "ts":
          return div(index, <SiTypescript />);
        case "js":
          return div(index, <SiJavascript />);
        case "cpp":
          return div(index, <SiCplusplus />);
        case "swift":
          return div(index, <SiSwift />);
        case "kotlin":
          return div(index, <SiKotlin />);
        case "redis":
          return div(index, <SiRedis />);
        case "docker":
          return div(index, <SiDocker />);
        case "tailwind":
          return div(index, <SiTailwindcss />);
        case "node":
          return div(index, <SiNodedotjs />);
        case "react":
          return div(index, <SiReact />);
        case "preact":
          return div(index, <SiPreact />);
        case "next":
          return div(index, <SiNextdotjs />);
        case "vite":
          return div(index, <SiVite />);
        case "doc":
          return div(index, <SiDocusaurus />);
        case "vercel":
          return div(index, <SiVercel />);
        case "vapor":
          return div(index, <SiVapor />);
        case "chrome":
          return div(index, <SiGooglechrome />);
        case "spotify":
          return div(index, <SiSpotify />);
        case "git":
          return div(index, <SiGit />);
        case "vsc":
          return div(index, <VscVscode />);
        case "rider":
          return div(index, <SiRider />);
        case "xcode":
          return div(index, <SiXcode />);
        case "roblox":
          return div(index, <SiRobloxstudio />);
        case "tradingview":
          return div(index, <SiTradingview />);
        case "pinescript":
          return div(index, <SiPinescript />);
        default:
          return div(index, <BiError />);
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
        {projects.map((project, index) => {
          return (
            <Container key={index} className="w-[600px] m-[20px] self-center">
              <Container className="h-[78px] flex flex-row" borders="b">
                <Container className="min-w-[76px] h-full flex items-center justify-center" borders="r">
                  {project.icon}
                </Container>

                <div className="relative w-full h-full flex items-center justify-center sm:block sm:pl-2 sm:pt-1">
                  <b className="text-3xl sm:text-4xl text-center">{project.name}</b>
                  <p className="hidden sm:block opacity-60">{project.time}</p>

                  <div className="absolute top-0 right-0 h-1/2 hidden sm:flex flex-row p-2 text-2xl">{technologies(project.technologies)}</div>
                </div>
              </Container>

              <p className="px-4 py-2 text-justify">{project.desc}</p>

              <Container className="h-[78px] flex flex-row" borders="t">
                {buttons(project.links)}
              </Container>
            </Container>
          );
        })}
      </div>
    </div>
  );
}
