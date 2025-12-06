import { Download } from "lucide-react";
import { StatusBadge } from "../status-badge";

export function HeroContent() {
    return (
        <div className="animate-fade-in-up flex flex-col justify-center items-center md:block md:justify-normal md:items-stretch
 ">
            <StatusBadge />
            <div className="flex flex-col w-full mt-7! gap-3">
                <h1 className="text-5xl md:text-4xl  lg:text-6xl font-bold text-white leading-tight text-center md:text-left">
                    Full Stack <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                        Developer
                    </span>
                </h1>

                <p className="text-zinc-400 text-sm lg:text-base text-justify px-5 md:px-0">
                    Transformo ideias complexas em experiências digitais fluidas.
                    Especialista em construir aplicações web escaláveis com foco em performance e design.
                </p>

                <div className="flex flex-wrap gap-4 pt-4 items-center justify-center md:justify-normal md:items-stretch">
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-[#121212] font-bold px-4 py-2 lg:px-8 lg:py-3 rounded-lg flex items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(0,255,153,0.39)] transform hover:-translate-y-1 cursor-pointer">
                        <Download size={18} />
                        Download CV
                    </button>
                    <button className="border border-zinc-700 hover:border-emerald-500 text-white px-4 py-2 lg:px-8 lg:py-3 rounded-lg font-medium transition-all hover:bg-emerald-500/10 cursor-pointer">
                        Entre em contato
                    </button>
                </div>
            </div>
        </div>
    );
}