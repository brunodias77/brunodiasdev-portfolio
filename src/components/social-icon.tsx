import type { LucideIcon } from 'lucide-react';

interface SocialIconProps {
    Icon: LucideIcon;
    href: string;
}

const SocialIcon = ({ Icon, href }: SocialIconProps) => (
    <a
        href={href}
        className="text-[#A1A1AA] hover:text-[#4ADE80] transition-colors hover:scale-110 transform duration-200"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon size={20} />
    </a>
);

export default SocialIcon;