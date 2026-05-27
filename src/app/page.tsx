import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
