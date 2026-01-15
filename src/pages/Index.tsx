import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import BentoGrid from "@/components/BentoGrid";
import AnimatedStats from "@/components/AnimatedStats";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ParallaxSection from "@/components/ParallaxSection";
import PhilosophySection from "@/components/PhilosophySection";
import DevelopersSection from "@/components/DevelopersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <BentoGrid />
        <AnimatedStats />
        <ServicesSection />
        <CapabilitiesSection />
        <ParallaxSection />
        <PhilosophySection />
        {/* <DevelopersSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
