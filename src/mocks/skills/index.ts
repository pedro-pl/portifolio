import { IoLogoJavascript, IoLogoReact, IoLogoGithub, IoLogoCss3, IoLogoNodejs, IoLogoHtml5 } from "react-icons/io5";
import { SiTypescript, SiMysql, SiKotlin } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { FaJava } from "react-icons/fa6";

type Skill = {
    id: number
    name: string;
    icon: React.ElementType;
  };

export const skills: Skill[] = [
    {
        id: 0,
        name: "React",
        icon: IoLogoReact,
    },
    {
        id: 1,
        name: "Typescript",
        icon: SiTypescript
    },
    {
        id: 2,
        name: "JavaScript",
        icon: IoLogoJavascript
    },
    {
        id: 3,
        name: "HTML",
        icon: IoLogoHtml5
    },
    {
        id: 4,
        name: "CSS",
        icon: IoLogoCss3,
    },
    {
        id: 5,
        name: "Scrum",
        icon: DiScrum
    },
    {
        id: 6,
        name: "My Sql",
        icon: SiMysql
    },
    {
        id: 7,
        name: "Node.js",
        icon: IoLogoNodejs
    },
    {
        id: 8,
        name: "GitHub",
        icon: IoLogoGithub
    },
    {
        id: 9,
        name: "Java",
        icon: FaJava
    },
    {
        id: 10,
        name: "Kotlin",
        icon: SiKotlin
    }
]