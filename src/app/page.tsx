import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import FeatureSection from "@/components/FeatureSection";
import {
  ProjectTrackerMockup,
  LaundryServiceMockup,
  OrderlyMockup,
} from "@/components/ProjectMockups";
import ToolkitSection from "@/components/ToolkitSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Marquee />

      <div id="projects">
        <FeatureSection
          label="Project 01"
          title="Project Tracker"
          description="A comprehensive project management tool with real-time progress tracking, team collaboration, and milestone visualization."
          bullets={[
            "Real-time progress bars and status updates",
            "Team member assignment and notifications",
            "Milestone tracking with deadline alerts",
          ]}
          mockup={<ProjectTrackerMockup />}
        />

        <FeatureSection
          label="Project 02"
          title="Laundry Service"
          description="A full-featured laundry service management platform for tracking orders, scheduling pickups, and managing customer accounts."
          bullets={[
            "Order tracking with live status updates",
            "Automated scheduling and notifications",
            "Customer dashboard with order history",
          ]}
          mockup={<LaundryServiceMockup />}
          reverse
          bgAlt
        />

        <FeatureSection
          label="Project 03"
          title="Orderly"
          description="A task management application featuring kanban boards, drag-and-drop organization, and automated workflow triggers."
          bullets={[
            "Kanban boards with drag-and-drop cards",
            "Custom workflow automation rules",
            "Team collaboration with role-based access",
          ]}
          mockup={<OrderlyMockup />}
        />
      </div>

      <div id="toolkit">
        <ToolkitSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <TestimonialsSection />

      <div id="faq">
        <FAQSection />
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}
