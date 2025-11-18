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
import { Interactive3DShapes } from "@/components/Interactive3DShapes";
import { ParticleField3D } from "@/components/ParticleField3D";
import { MeshGradient } from "@/components/MeshGradient";
import { FloatingIslands } from "@/components/FloatingIslands";
import { Floating3DModels } from "@/components/Floating3DModels";
import { Models3DShowcase } from "@/components/Models3DShowcase";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layer - z-0 */}
      <AnimatedGrid />
      
      {/* Mid-layer 3D effects - z-[1] */}
      <MeshGradient />
      <FloatingIslands />
      <Floating3DShapes />
      <Interactive3DShapes />
      <Floating3DModels />
      
      {/* Particle effects - z-[2] */}
      <WaveBackground />
      <ParticleField3D />
      <FloatingParticles />
      
      {/* Main content - z-10 */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Models3DShowcase />
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
