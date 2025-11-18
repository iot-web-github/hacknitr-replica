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
                  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">{track.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/60 transition-colors" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/60 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Open innovation track */}
        <div className="mt-8 text-center p-8 border-2 border-dashed border-border hover:border-primary transition-colors">
          <h3 className="font-bold text-xl mb-2">Open Innovation Track</h3>
          <p className="text-muted-foreground">
            Don't fit into any category? Build anything that solves a real problem or showcases your creativity!
          </p>
        </div>
      </div>
    </section>
  );
};
