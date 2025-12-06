interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    navLinks: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, setIsOpen, navLinks }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="text-zinc-300 hover:text-emerald-400 py-2 border-b border-zinc-800/50"
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
}