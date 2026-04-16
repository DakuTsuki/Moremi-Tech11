import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollingBanner from "@/components/ScrollingBanner";
import GoalsSection from "@/components/GoalsSection";
import ProgramsSection from "@/components/ProgramsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollingBanner />
      <GoalsSection />
      <ProgramsSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
