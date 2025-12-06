import ParticleBackground from "../background-animate";
import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function HeroSection() {
    return (
        <section className="AppBody  bg-[#242424] " id="home" w-screen>
            <ParticleBackground />

            <div className="container my-[20%]! lg:my-[10%]! grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
}