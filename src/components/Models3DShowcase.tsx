import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Interactive3DModel } from "./Interactive3DModel";
import { Trophy, Code2, Sparkles } from "lucide-react";

export const Models3DShowcase = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="3d-showcase" className="py-12 sm:py-16 md:py-24 px-4 relative bg-muted/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
              Interactive Experience
            </span>
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sketch-text">
            <span className="text-primary">3D</span> Innovation Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our hackathon in 3D. Interact with models, rotate, and zoom to experience the future of innovation.
          </p>
        </div>

        {/* 3D Model Display */}
        <div 
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30">
            <Interactive3DModel />
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Trophy,
              title: "Prize Trophy",
              description: "Beautifully crafted 3D trophy representing excellence and achievement.",
            },
            {
              icon: Code2,
              title: "Interactive Cube",
              description: "Hover over the wireframe cube to see dynamic transformations.",
            },
            {
              icon: Sparkles,
              title: "Real-time Rendering",
              description: "Powered by Three.js and React Three Fiber for smooth 3D experiences.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 border-2 border-border bg-card/50 backdrop-blur hover:border-primary transition-all duration-500 hover-lift hover:shadow-xl hover:shadow-primary/20 ${
                  isVisible ? 'opacity-100 animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${0.5 + index * 0.15}s`,
                  animationDelay: `${0.7 + index * 0.15}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="relative z-10 w-8 h-8 mb-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <h3 className="relative z-10 font-bold text-xl mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
