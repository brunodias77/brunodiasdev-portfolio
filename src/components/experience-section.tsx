import { ExternalLink } from "lucide-react";

export const ExperienceSection = () => {
    const experiences = [
        {
            company: 'Casa e Sonho',
            role: 'Programador Front-End Júnior',
            period: 'Jan 2022 - Jul 2024',
            description: 'Atuei como programador front-end júnior na Casa e Sonho, contribuindo para projetos web em equipe e desenvolvendo soluções com HTML, CSS e JavaScript. Além de participar de todo o ciclo de desenvolvimento, também realizei manutenção de sites e aplicativos, aprimorando minhas habilidades técnicas e de resolução de problemas. Essa experiência fortaleceu minha atuação proativa e minha capacidade de trabalhar em ambientes dinâmicos.',
            techs: ['React', 'JavaScript', 'CSS3']
        },
        {
            company: 'HC FAMEMA',
            role: 'Analista de Sistemas',
            period: 'Nov 2024 - Atual',
            description: 'Atuo no Hospital das Clínicas de Marília (HCFAMEMA) desenvolvendo e mantendo sistemas que integram áreas administrativas e assistenciais. Sou responsável por aprimorar e garantir o funcionamento das soluções tecnológicas do ecossistema hospitalar, assegurando eficiência e confiabilidade no atendimento. Trabalho com .NET Framework, Windows Forms e ReactJS, focando em melhorias contínuas, modernização de processos e conformidade com boas práticas de desenvolvimento e segurança da informação.',
            techs: ['.NET/C#', 'React', 'Docker', 'Oracle']
        },
        // Adicione mais experiências aqui se necessário
    ];

    return (
        <section id="experience" className="py-24 bg-[#242424]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-2">Trajetória Profissional</h2>
                    <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative border-l border-zinc-700 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-[-5px] w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(0,255,153,0.5)] z-10"></div>

                            <div className="md:grid md:grid-cols-5 gap-8 items-start group">
                                <div className="md:col-span-1 text-sm text-zinc-500 font-mono mb-2 md:mb-0 md:text-right pt-1">
                                    {exp.period}
                                </div>

                                <div className="md:col-span-4 bg-[#1A1A1A] p-6 rounded-xl border border-zinc-800 hover:border-emerald-500/30 transition-all shadow-lg">
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-emerald-400 font-medium mb-4 flex items-center gap-2">
                                        {exp.company}
                                        <ExternalLink size={14} />
                                    </h4>
                                    <p className="text-zinc-400 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.techs.map((tech) => (
                                            <span key={tech} className="text-xs px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};