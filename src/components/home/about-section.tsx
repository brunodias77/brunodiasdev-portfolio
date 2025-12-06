import { SKILLS } from "../../data/skills";

export function AboutSection() {
    return (
        <section id="sobre" className="py-24 bg-[#1A1A1A] relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                {/* Coluna Sobre */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                        Sobre Mim
                    </h2>
                    <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                        <p>
                            Com 30 anos e formado em Sistemas de Informação, sou um desenvolvedor apaixonado por resolver problemas reais através do código.
                        </p>
                        <p>
                            Minha jornada no <strong className="text-emerald-400 font-medium">Full Stack</strong> me permite navegar com fluidez entre criar interfaces no Front-end e arquitetar APIs robustas no Back-end.
                        </p>
                        <p>
                            Acredito que um bom software é a combinação de código limpo, performance excepcional e uma experiência de usuário intuitiva.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-6">
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">5+</span>
                            <span className="text-sm text-zinc-500 uppercase tracking-wider">Anos Exp.</span>
                        </div>
                        <div className="w-px h-12 bg-zinc-800"></div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">10+</span>
                            <span className="text-sm text-zinc-500 uppercase tracking-wider">Projetos</span>
                        </div>
                    </div>
                </div>

                {/* Coluna Skills */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8">Stack Tecnológica</h2>

                    <div className="space-y-8">
                        {/* Frontend Group */}
                        <div>
                            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-4 font-semibold">Front-end Development</h3>
                            <div className="flex flex-wrap gap-3">
                                {SKILLS.frontend.map((skill) => (
                                    <div key={skill.name} className="group flex items-center gap-2 bg-[#242424] border border-zinc-800 px-4 py-3 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all cursor-default transform hover:-translate-y-1">
                                        <span className="text-emerald-500 group-hover:text-emerald-400"><skill.icon size={skill.size} /></span>
                                        <span className="text-zinc-300 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend Group */}
                        <div>
                            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-4 font-semibold">Back-end & Arquitetura</h3>
                            <div className="flex flex-wrap gap-3">
                                {SKILLS.backend.map((skill) => (
                                    <div key={skill.name} className="group flex items-center gap-2 bg-[#242424] border border-zinc-800 px-4 py-3 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all cursor-default transform hover:-translate-y-1">
                                        <span className="text-emerald-500 group-hover:text-emerald-400"><skill.icon size={skill.size} /></span>
                                        <span className="text-zinc-300 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}