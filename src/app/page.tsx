import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ContactSection />
      </main>
    </>
  );
}
