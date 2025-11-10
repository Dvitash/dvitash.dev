import { SiGit, SiRobloxstudio, SiBlender, SiCplusplus, SiPython } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { NamedIcon } from "@/components/icon";
import Container from "@/components/container";
import { calculateAge } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const softwareSkills: Array<Skill> = [
  {
    name: "Visual Studio Code",
    level: 100,
    icon: <VscVscode />,
  },
  {
    name: "Git",
    level: 70,
    icon: <SiGit />,
  },
  {
    name: "Roblox Studio",
    level: 100,
    icon: <SiRobloxstudio />,
  },
  {
    name: "Blender",
    level: 40,
    icon: <SiBlender />,
  },
];

const languageSkills: Array<Skill> = [
  {
    name: "C++",
    level: 50,
    icon: <SiCplusplus />,
  },
  {
    name: "Lua(u)",
    level: 100,
    icon: <NamedIcon name="luau" />,
  },
  {
    name: "Python",
    level: 60,
    icon: <SiPython />,
  },
  {
    name: "Java",
    level: 80,
    icon: <NamedIcon name="java" />,
  },
];

export default function About() {
  function graphs(skills: Array<Skill>) {
    return skills.map((skill, index) => {
      return (
        <Container key={index} className="h-[78px]" borders={index == 0 ? "" : "t"}>
          <Container className="h-1/2 flex flex-row" borders="b">
            <Container className="min-w-[37px] h-full text-2xl flex items-center justify-center" borders="r">
              {skill.icon}
            </Container>

            <div className="w-full h-full text-sm sm:text-xl flex items-center justify-center">
              <b className="text-center">{skill.name}</b>
            </div>
          </Container>

          <div className="h-1/2 flex flex-row">
            <Container className="w-full h-full" borders="r">
              <div className="h-full" style={{ width: "100%" }}>
                <div className="h-full animate-progress bg-[var(--text-primary)]" style={{ width: `${skill.level}%` }} />
              </div>
            </Container>

            <div className="w-[75px] px-2 flex items-center justify-center">{Math.round(skill.level / 10)}/10</div>
          </div>
        </Container>
      );
    });
  }

  return (
    <div className="w-full flex flex-wrap justify-center">
      <Container className="w-[700px] m-[20px] self-center">
        <Container className="h-[78px] text-3xl sm:text-4xl flex items-center justify-center" borders="b">
          <b>More about me</b>
        </Container>

        <p className="px-4 py-2 text-justify">My name is Daniel Vitashkevich, I’m {calculateAge(2005, 2, 5)} years old and live in the United States. I am a Senior Computer Science Student, on track to get my Master's Degree next spring.</p>

        <p className="px-4 py-2 text-justify">
          I’ve been programming since 2020 and i’m 100% self-taught. Currently I focus on <b>Roblox (Luau)</b>.
        </p>
      </Container>

      <Container className="w-[600px] m-[20px] self-center">
        <Container className="h-[78px] text-3xl sm:text-4xl flex items-center justify-center" borders="b">
          <b>Tech Stack</b>
        </Container>

        <div className="flex flex-row">
          <Container className="w-1/2" borders="r">
            {graphs(softwareSkills)}
          </Container>

          <div className="w-1/2">{graphs(languageSkills)}</div>
        </div>
      </Container>
    </div>
  );
}
