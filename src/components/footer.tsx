import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export function Footer() {
    return (
        <footer className=" bg-[#1A1A1A] px-4 py-10">
            <div className="container mx-auto w-full ">
                <div className="flex items-center justify-between gap-2 text-xs md:text-sm">
                    <div className=" text-white"><span className="font-bold ">Bruno</span><span className="text-emerald-400 font-bold ">Dias</span> </div>
                    <span className="text-gray-200  ">© Bruno Dias <span className="text-emerald-400  ">(@diasdev_)</span> <span className="hidden md:inline">- Desenvolvido com React & Tailwind.</span></span>
                    <nav className="flex items-center justify-center gap-2">
                        <a href=""><AiOutlineTwitter size={20} color="white" /></a>
                        <a href="https://github.com/brunodias77" className="flex items-center justify-center hover:text-green_400"><AiFillGithub size={20} color="white" /></a>
                        <a href="" className="flex items-center justify-center"><AiFillLinkedin size={20} color="white" /> </a>
                        <a href="https://www.instagram.com/brunodias_dev/" className="flex items-center justify-center"><AiFillInstagram size={20} color="white" /></a>
                    </nav>
                </div>
            </div>
        </footer>)
}