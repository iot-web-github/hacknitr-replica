import { Code2, Users, Trophy, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ParallaxBackground } from "./ParallaxBackground";

const stats = [
  { icon: Users, value: "1000+", label: "Participants" },
  { icon: Code2, value: "48", label: "Hours" },
  { icon: Trophy, value: "$50K", label: "Prize Pool" },
  { icon: Zap, value: "100+", label: "Projects" },
];

export const About = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
              About The Event
            </span>
            <div className="h-px w-full bg-blueprint-line mt-2" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sketch-text">
            Build. Innovate. <span className="text-primary">Transform.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the largest student-run hackathon where innovation meets opportunity. 
            Connect with brilliant minds, build groundbreaking projects, and compete for amazing prizes.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ParallaxBackground speed={0.1 * (index + 1)} key={index}>
                <div
                  className={`group relative bg-card border-2 border-border p-4 sm:p-6 md:p-8 text-center hover-lift hover:border-primary transition-all duration-700 hover:shadow-lg hover:shadow-primary/20 ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                {/* Technical corner marks */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sketch-text group-hover:text-primary transition-colors">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wider uppercase">
                  {stat.label}
                </div>
                </div>
              </ParallaxBackground>
            );
          })}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Learning Workshops",
              description: "Participate in hands-on workshops led by industry experts and learn cutting-edge technologies.",
            },
            {
              title: "Mentorship Program",
              description: "Get guidance from experienced mentors who'll help bring your ideas to life.",
            },
            {
              title: "Networking Hub",
              description: "Connect with fellow innovators, sponsors, and potential future employers.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`relative p-4 sm:p-6 border-l-4 border-primary bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
