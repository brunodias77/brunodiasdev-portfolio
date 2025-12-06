import { ContactSection } from "../components/contact-section";
import { ExperienceSection } from "../components/experience-section";
import { AboutSection } from "../components/home/about-section";
import { HeroSection } from "../components/home/hero-section";
import { ProjectSection } from "../components/project-section";

export function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <ContactSection />
        </>
    )
}

