import { ChevronRight, ExternalLink, Github } from "lucide-react";

export const ProjectSection = () => {
    const projects = [
        {
            title: 'DT Money',
            description: 'Aplicação de controle financeiro pessoal. Permite cadastro de entradas e saídas com cálculo total em tempo real.',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80', // Placeholder de alta qualidade
            techs: ['React', 'TypeScript', 'Styled Comp'],
            links: { demo: '#', repo: '#' }
        },
        {
            title: 'Dashboard Admin',
            description: 'Painel administrativo com gráficos interativos e gerenciamento de usuários completo.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            techs: ['Next.js', 'Tailwind', 'Recharts'],
            links: { demo: '#', repo: '#' }
        }
    ];

    return (
        <section id="projects" className="py-24 bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Projetos em Destaque</h2>
                        <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                        Ver todos no GitHub <ChevronRight size={16} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-[#242424] rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-emerald-500/5">
                            {/* Imagem do Projeto */}
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[#000]/20 group-hover:bg-transparent transition-all z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Conteúdo */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <a href={project.links.repo} className="text-zinc-400 hover:text-white transition-colors" title="Code"><Github size={20} /></a>
                                        <a href={project.links.demo} className="text-zinc-400 hover:text-white transition-colors" title="Live Demo"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <p className="text-zinc-400 mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techs.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-[#1A1A1A] text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-emerald-400 font-medium">
                        Ver todos no GitHub <ChevronRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};