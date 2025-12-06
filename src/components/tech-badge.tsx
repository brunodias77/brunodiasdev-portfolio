import type { ReactNode } from 'react';

interface TechBadgeProps {
    icon: ReactNode;
    label: string;
    color: string;
    position: string;
    delay: string;
    isFront?: boolean;
}

const TechBadge = ({ icon, label, color, position, delay, isFront = false }: TechBadgeProps) => {
    return (
        <div
            className={`absolute cursor-pointer flex flex-col items-center gap-2 ${position} ${isFront ? 'z-30 floating-icon-primary' : 'z-10 opacity-40 blur-[1px] scale-75 floating-icon-secondary'}`}
            style={{ animationDelay: delay }}
        >
            <div
                className={`flex items-center justify-center rounded-xl backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300
          ${isFront ? 'w-16 h-16 bg-[#1A1A1A]/80 hover:border-[#4ADE80]/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]' : 'w-12 h-12 bg-[#1A1A1A]/40'}
        `}
            >
                <div style={{ color: color }}>{icon}</div>
            </div>
            {isFront && (
                <span className="text-xs font-bold tracking-wide  px-2 py-0.5 rounded-full  text-gray-300">
                    {label}
                </span>
            )}
        </div>
    );
};

export default TechBadge;