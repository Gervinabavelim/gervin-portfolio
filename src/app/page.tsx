import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WorkList from "@/components/WorkList";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <HeroSection />
        <WorkList />
        <ContactSection />
      </main>
    </div>
  );
}
