import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimelineSection from "@/components/TimelineSection";
import Layout from "./layout/Layout";

const App = () => (
  <Layout>
    <HeroSection />
    <TimelineSection />
    <ProjectsSection />
    <PublicationsSection />
    <SkillsSection />
    <TestimonialsSection />
  </Layout>
);

export default App;
