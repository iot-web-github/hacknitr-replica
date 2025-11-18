import { Brain, Leaf, Shield, Smartphone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tracks = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Build intelligent systems that learn and adapt using cutting-edge ML techniques.",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Create solutions that address environmental challenges and promote sustainability.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Develop tools and systems that protect digital infrastructure and user privacy.",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Innovation",
    description: "Design next-generation mobile experiences that enhance daily life.",
    color: "from-indigo-500/20 to-cyan-500/20",
  },
];

export const Tracks = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="tracks" className="py-12 sm:py-16 md:py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
            Competition Categories
          </span>
          <div className="h-px w-32 bg-blueprint-line mx-auto mt-2 mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold sketch-text">
            Tracks
          </h2>
        </div>

        {/* Tracks grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br bg-card border-2 border-border p-4 sm:p-6 md:p-8 hover-lift hover:border-primary transition-all duration-700 overflow-hidden hover:shadow-2xl hover:shadow-primary/30 ${
                  isVisible ? 'opacity-100 scale-100 rotate-0 animate-bounce-in' : 'opacity-0 scale-95 rotate-3'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.15}s`,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Background gradient effect with animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`} />
                
                {/* Animated gradient border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient" style={{ 
                    backgroundSize: '200% 100%',
                    padding: '2px',
                    borderRadius: 'inherit',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }} />
                </div>

                {/* Particle trail on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-ping" />
                  <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute bottom-8 left-8 w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.6s' }} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg] animate-float">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:scale-110 transition-transform animate-glow-pulse" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{track.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Corner decorations with staggered animation */}
                <svg className="absolute top-0 right-0 w-12 h-12 text-primary/20 group-hover:text-primary/60 transition-colors" viewBox="0 0 50 50">
                  <line 
                    x1="50" y1="0" x2="50" y2="50" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={isVisible ? 'animate-draw-path' : ''}
                    style={{ 
                      strokeDasharray: '50',
                      strokeDashoffset: isVisible ? '0' : '50',
                      animationDelay: `${index * 0.15 + 0.3}s`
                    }}
                  />
                  <line 
                    x1="0" y1="0" x2="50" y2="0" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={isVisible ? 'animate-draw-path' : ''}
                    style={{ 
                      strokeDasharray: '50',
                      strokeDashoffset: isVisible ? '0' : '50',
                      animationDelay: `${index * 0.15 + 0.4}s`
                    }}
                  />
                </svg>
                <svg className="absolute bottom-0 left-0 w-12 h-12 text-primary/20 group-hover:text-primary/60 transition-colors" viewBox="0 0 50 50">
                  <line 
                    x1="0" y1="0" x2="0" y2="50" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={isVisible ? 'animate-draw-path' : ''}
                    style={{ 
                      strokeDasharray: '50',
                      strokeDashoffset: isVisible ? '0' : '50',
                      animationDelay: `${index * 0.15 + 0.5}s`
                    }}
                  />
                  <line 
                    x1="0" y1="50" x2="50" y2="50" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={isVisible ? 'animate-draw-path' : ''}
                    style={{ 
                      strokeDasharray: '50',
                      strokeDashoffset: isVisible ? '0' : '50',
                      animationDelay: `${index * 0.15 + 0.6}s`
                    }}
                  />
                </svg>
              </div>
            );
          })}
        </div>

        {/* Open innovation track */}
        <div className={`mt-8 text-center p-8 border-2 border-dashed border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden group ${
          isVisible ? 'opacity-100 animate-scale-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.8s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="relative z-10 font-bold text-xl mb-2 group-hover:text-primary transition-colors">Open Innovation Track</h3>
          <p className="relative z-10 text-muted-foreground">
            Don't fit into any category? Build anything that solves a real problem or showcases your creativity!
          </p>
        </div>
      </div>
    </section>
  );
};
