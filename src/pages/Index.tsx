import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Tracks } from "@/components/Tracks";
import { Sponsors } from "@/components/Sponsors";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { Floating3DShapes } from "@/components/Floating3DShapes";
import { WaveBackground } from "@/components/WaveBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated background elements */}
      <FloatingParticles />
      <AnimatedGrid />
      <Floating3DShapes />
      <WaveBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Timeline />
        <Tracks />
        <Sponsors />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
