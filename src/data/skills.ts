import { Cpu, Database, Server } from "lucide-react";
import { FaReact, FaAngular, FaNodeJs, FaDocker } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiDotnet, SiPostgresql } from "react-icons/si";

export const SKILLS = {
  frontend: [
    { name: "React.js", icon: FaReact, size: 18 },
    { name: "TypeScript", icon: BiLogoTypescript, size: 18 },
    { name: "Tailwind", icon: BiLogoTailwindCss, size: 18 },
    { name: "Angular", icon: FaAngular, size: 18 },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, size: 18 },
    { name: ".NET / C#", icon: SiDotnet, size: 18 },
    { name: "SQL", icon: SiPostgresql, size: 18 },
    { name: "Docker", icon: FaDocker, size: 18 },
  ],
};
