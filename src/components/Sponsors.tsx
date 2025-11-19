import { useState } from "react";
import { Crown, Award, Medal, Sparkles, Mail } from "lucide-react";

const sponsorTiers = [
  {
    tier: "Platinum",
    icon: Crown,
    sponsors: ["TechCorp Global", "InnovateLabs"],
    color: "from-yellow-400 via-yellow-200 to-yellow-400",
    glowColor: "shadow-yellow-400/50",
  },
  {
    tier: "Gold",
    icon: Award,
    sponsors: ["CloudSync", "DataFlow Inc", "DevTools Pro"],
    color: "from-orange-400 via-amber-300 to-orange-400",
    glowColor: "shadow-orange-400/50",
  },
  {
    tier: "Silver",
    icon: Medal,
    sponsors: ["CodeBase", "AppMakers", "WebWorks", "StartupHub"],
    color: "from-slate-300 via-slate-100 to-slate-300",
    glowColor: "shadow-slate-400/50",
  },
];

export const Sponsors = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <section id="sponsors" className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: hoveredIndex 
            ? `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.15), transparent 40%)`
            : 'none'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-slow" />
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
              Our Partners
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 animate-pulse-slow" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold sketch-text mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Sponsors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Supported by industry leaders who believe in fostering innovation and empowering the next generation of builders.
          </p>
        </div>

        {/* Sponsor tiers */}
        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => {
            const TierIcon = tier.icon;
            return (
              <div key={tierIndex} className="text-center">
                {/* Tier header with animated badge */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className={`relative p-3 rounded-full bg-gradient-to-br ${tier.color} shadow-lg ${tier.glowColor} animate-glow-pulse`}>
                    <TierIcon className="w-6 h-6 text-background" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {tier.tier} Sponsors
                  </h3>
                </div>

                {/* Sponsor cards */}
                <div className={`grid gap-6 ${
                  tier.tier === "Platinum" ? "md:grid-cols-2 max-w-3xl mx-auto" : 
                  tier.tier === "Gold" ? "md:grid-cols-3" : 
                  "md:grid-cols-2 lg:grid-cols-4"
                }`}>
                  {tier.sponsors.map((sponsor, index) => {
                    const cardKey = `${tierIndex}-${index}`;
                    return (
                      <div
                        key={index}
                        className="group relative"
                        onMouseEnter={(e) => {
                          setHoveredIndex(cardKey);
                          const rect = e.currentTarget.getBoundingClientRect();
                          document.documentElement.style.setProperty('--mouse-x', `${rect.left + rect.width / 2}px`);
                          document.documentElement.style.setProperty('--mouse-y', `${rect.top + rect.height / 2}px`);
                        }}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {/* Glassmorphism card */}
                        <div
                          className="relative bg-card/40 backdrop-blur-xl border-2 border-border/50 p-6 sm:p-8 rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2"
                          style={{
                            transform: hoveredIndex === cardKey ? 'perspective(1000px) rotateX(2deg) rotateY(2deg)' : '',
                          }}
                        >
                          {/* Animated gradient border */}
                          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-border" 
                            style={{ padding: '2px', zIndex: -1 }}>
                            <div className="w-full h-full bg-card rounded-xl" />
                          </div>

                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
                          
                          {/* Shimmer on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl" />

                          {/* Content */}
                          <div className="relative z-10 flex flex-col items-center">
                            {/* Logo placeholder with animated gradient */}
                            <div className={`w-20 h-20 mb-4 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center text-2xl font-bold text-background shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden`}>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                              <span className="relative z-10">{sponsor.charAt(0)}</span>
                              
                              {/* Rotating ring */}
                              <div className="absolute inset-0 border-4 border-transparent border-t-white/50 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100" />
                            </div>

                            {/* Company name */}
                            <p className="font-bold text-base sm:text-lg text-center group-hover:text-primary transition-colors duration-300">
                              {sponsor}
                            </p>

                            {/* Tier badge */}
                            <div className="mt-3 px-3 py-1 rounded-full bg-muted/50 text-xs font-semibold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {tier.tier}
                            </div>
                          </div>

                          {/* Corner accent */}
                          <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${tier.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-bl-full`} />
                        </div>

                        {/* Magnetic glow effect */}
                        <div className={`absolute inset-0 rounded-xl blur-xl ${tier.glowColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-20 relative group">
          {/* Animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-border rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative bg-card/80 backdrop-blur-xl p-8 sm:p-12 rounded-xl border-2 border-primary/30 overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" />
                <h3 className="font-bold text-2xl sm:text-3xl text-center">Interested in Sponsoring?</h3>
                <Sparkles className="w-6 h-6 text-accent animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              </div>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
                Partner with us to reach thousands of talented students and support the future of technology.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="group/btn relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  
                  <Mail className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Get Sponsorship Brochure</span>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity">
                    <div className="absolute inset-0 rounded-lg animate-ripple border-2 border-white/30" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
