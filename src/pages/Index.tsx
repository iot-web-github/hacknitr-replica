import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Tracks } from "@/components/Tracks";
import { Sponsors } from "@/components/Sponsors";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Tracks />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
