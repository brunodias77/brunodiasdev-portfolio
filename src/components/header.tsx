import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Github, Linkedin, Instagram, X, Menu } from 'lucide-react';
import logo from '../assets/logo-branco.png';
import SocialIcon from './social-icon';
import { NAV_LINKS } from '../data/nav-links';
import { MobileMenu } from './mobile-menu';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Estado para a seção ativa
    const location = useLocation();

    // Efeito para detectar o scroll e mudar o background do header
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Efeito para o Scroll Spy (Intersection Observer)
    useEffect(() => {
        // Opções do observador
        const options = {
            root: null, // viewport
            rootMargin: '-100px 0px -40% 0px', // Ativa quando a seção estiver um pouco abaixo do topo
            threshold: 0.1 // 10% da seção visível
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        // Seleciona todas as seções que têm ID (home, sobre, experience, etc)
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [location.pathname]); // Recria o observer se mudar de rota

    // Função auxiliar para verificar se o link está ativo
    const isLinkActive = (href: string) => {
        // Se for rota interna (ex: /projects), usa o pathname do router
        if (href.startsWith('/') && !href.startsWith('/#')) {
            return location.pathname === href;
        }

        // Se for âncora (ex: /#home), verifica o activeSection
        const sectionId = href.replace('/#', '');
        return activeSection === sectionId;
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/60 backdrop-blur-md  shadow-lg border-b border-white/5' : 'bg-transparent '}`}>
            <div className='container flex justify-between items-center '>
                <a href="/" className='flex items-center justify-center'>
                    <img src={logo} alt="" height={50} width={50} />
                    <div className=' '>
                        <span className="font-bold text-xl text-white">Bruno</span>
                        <span className="text-emerald-400 font-bold text-sm">Dias</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    <ul className="flex gap-4 lg:gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`text-xs lg:text-sm font-medium transition-colors ${isLinkActive(link.href)
                                            ? 'text-emerald-400'
                                            : 'text-zinc-400 hover:text-emerald-400'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="h-4 w-px bg-zinc-700 mx-2"></div>
                    {/* Social Icons */}
                    <div className="flex items-center gap-2 lg:gap-4">
                        <SocialIcon Icon={Github} href="https://github.com/brunodias77" />
                        <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/brunohenriquedias/" />
                        <SocialIcon Icon={Instagram} href="https://www.instagram.com/diasdev_/" />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={NAV_LINKS} />
        </header>
    )
}

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Github, Linkedin, Instagram, X, Menu } from 'lucide-react';
// import logo from '../assets/logo-branco.png';
// import SocialIcon from './social-icon';
// import { NAV_LINKS } from '../data/nav-links';
// import { MobileMenu } from './mobile-menu';

// export function Header() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 50);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/60 backdrop-blur-md  shadow-lg border-b border-white/5' : 'bg-transparent '}`}>
//             <div className='container flex justify-between items-center '>
//                 <a href="/" className='flex items-center justify-center'>
//                     <img src={logo} alt="" height={50} width={50} />
//                     <div className=' '>
//                         <span className="font-bold text-xl text-white">Bruno</span>
//                         <span className="text-emerald-400 font-bold text-sm">Dias</span>
//                     </div>
//                 </a>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex items-center gap-4 lg:gap-8">
//                     <ul className="flex gap-4 lg:gap-8">
//                         {NAV_LINKS.map((link) => (
//                             <li key={link.name}>
//                                 <a
//                                     href={link.href}
//                                     className={`text-xs lg:text-sm font-medium transition-colors ${(location.pathname + location.hash) === link.href
//                                         ? 'text-emerald-400'
//                                         : 'text-zinc-400 hover:text-emerald-400'
//                                         }`}
//                                 >
//                                     {link.name}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="h-4 w-px bg-zinc-700 mx-2"></div>
//                     {/* Social Icons */}
//                     <div className="flex items-center gap-2 lg:gap-4">
//                         <SocialIcon Icon={Github} href="https://github.com/brunodias77" />
//                         <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/brunohenriquedias/" />
//                         <SocialIcon Icon={Instagram} href="https://www.instagram.com/diasdev_/" />
//                     </div>
//                 </div>

//                 {/* Mobile Toggle */}
//                 <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
//                     {isOpen ? <X /> : <Menu />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={NAV_LINKS} />
//         </header>
//     )



// }