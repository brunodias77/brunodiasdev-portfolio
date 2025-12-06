import { FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiDotnet } from "react-icons/si";
import { Database } from 'lucide-react';

export const TECH_STACK = [
    {
        icon: FaReact,
        size: 32,
        label: "React",
        color: "#61DAFB",
        position: "top-0 right-10",
        delay: "0s",
        isFront: true
    },
    {
        icon: SiDotnet,
        size: 32,
        label: "C#",
        color: "#5026D5",
        position: "bottom-20 left-0",
        delay: "1s",
        isFront: true
    },
    {
        icon: FaJava,
        size: 20,
        label: "Java",
        color: "#CC2927",
        position: "top-1/2 right-[-20px]",
        delay: "4s",
        isFront: false
    },
    {
        icon: SiTypescript,
        size: 24,
        label: "Typescript",
        color: "#2F75C1",
        position: "bottom-10 right-20",
        delay: "3s",
        isFront: false
    },
    {
        icon: Database,
        size: 24,
        label: "SQL",
        color: "#CC2927",
        position: "top-10 left-10",
        delay: "2s",
        isFront: false
    },
];
