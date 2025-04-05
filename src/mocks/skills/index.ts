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
        id: 1,
        name: "React",
        icon: IoLogoReact,
    },
    {
        id: 2,
        name: "Typescript",
        icon: SiTypescript
    },
    {
        id: 3,
        name: "JavaScript",
        icon: IoLogoJavascript
    },
    {
        id: 4,
        name: "HTML",
        icon: IoLogoHtml5
    },
    {
        id: 5,
        name: "CSS",
        icon: IoLogoCss3,
    },
    {
        id: 6,
        name: "Scrum",
        icon: DiScrum
    },
    {
        id: 7,
        name: "My Sql",
        icon: SiMysql
    },
    {
        id: 8,
        name: "Node.js",
        icon: IoLogoNodejs
    },
    {
        id: 9,
        name: "GitHub",
        icon: IoLogoGithub
    },
    {
        id: 10,
        name: "Java",
        icon: FaJava
    },
    {
        id: 11,
        name: "Kotlin",
        icon: SiKotlin
    }
]