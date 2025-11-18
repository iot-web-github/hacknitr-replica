import { Code2, Users, Trophy, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "Participants" },
  { icon: Code2, value: "48", label: "Hours" },
  { icon: Trophy, value: "$50K", label: "Prize Pool" },
  { icon: Zap, value: "100+", label: "Projects" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
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
              <div
                key={index}
                className="group relative bg-card border-2 border-border p-8 text-center hover-lift hover:border-primary transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Technical corner marks */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl md:text-4xl font-bold mb-2 sketch-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
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
              className="relative p-6 border-l-4 border-primary bg-card/50"
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
