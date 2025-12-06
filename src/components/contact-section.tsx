import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

/**
 * SEÇÃO: Contato
 * Formulário estilizado como editor de código para manter a imersão.
 */
export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-[#242424] relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Vamos conversar?</h2>
                    <p className="text-zinc-400">
                        Estou sempre aberto a novas oportunidades e projetos desafiadores.
                        Envie uma mensagem e eu responderei o mais rápido possível.
                    </p>
                </div>

                <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-zinc-800 shadow-2xl">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-emerald-500 font-mono">// Seu nome</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#242424] border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-zinc-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-emerald-500 font-mono">// Seu email</label>
                                <input
                                    type="email"
                                    placeholder="john@exemplo.com"
                                    className="w-full bg-[#242424] border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-zinc-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-emerald-500 font-mono">// Mensagem</label>
                            <textarea
                                rows={5}
                                placeholder="Vamos construir algo incrível..."
                                className="w-full bg-[#242424] border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-zinc-600 resize-none"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 rounded-lg flex justify-center items-center gap-2 transition-all transform hover:-translate-y-1">
                            <Send size={18} />
                            Enviar Mensagem
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-center items-center gap-8">
                        <a href="mailto:bruno@email.com" className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
                            <Mail size={18} />
                            <span>brunohenriqueadias@gmail.com</span>
                        </a>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/brunohenriquedias/" className="text-zinc-400 hover:text-white hover:bg-[#0077b5] p-2 rounded-full transition-all"><Linkedin size={20} /></a>
                            <a href="https://github.com/brunodias77" className="text-zinc-400 hover:text-white hover:bg-[#333] p-2 rounded-full transition-all"><Github size={20} /></a>
                            <a href="https://www.instagram.com/diasdev_/" className="text-zinc-400 hover:text-white hover:bg-[#E1306C] p-2 rounded-full transition-all"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};