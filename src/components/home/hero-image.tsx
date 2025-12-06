import TechBadge from "../tech-badge";
import { TECH_STACK } from "../../data/tech-stack";

export function HeroImage() {
    return (
        <div className="relative flex items-center justify-center w-full h-full ">
            {/* Retroiluminação */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[230px] h-[230px] md:w-[350px] md:h-[350px] 
                bg-emerald-400/30 rounded-full blur-[80px] 
                opacity-20 animate-pulse z-0">
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] rounded-full p-1 bg-gradient-to-br from-emerald-400/20 to-transparent shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#121212] rounded-full m-[2px] overflow-hidden">
                            <img
                                src="http://avatars.githubusercontent.com/u/51303140?v=4"
                                alt="Bruno Dias"
                                className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {TECH_STACK.map((tech, index) => (
                    <TechBadge
                        key={index}
                        icon={<tech.icon size={tech.size} />}
                        label={tech.label}
                        color={tech.color}
                        position={tech.position}
                        delay={tech.delay}
                        isFront={tech.isFront}
                    />
                ))}

                {/* Decorative Orbital Ring */}
                <svg className="absolute  animate-[spin_20s_linear_infinite] opacity-10 pointer-events-none" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="35" stroke="#4ADE80" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                </svg>
            </div>
        </div>
    );
}