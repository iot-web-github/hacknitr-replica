import { useState } from "react";
import { Crown, Award, Medal, Sparkles, Mail } from "lucide-react";
const sponsorTiers = [{
  tier: "Platinum",
  icon: Crown,
  sponsors: ["TechCorp Global", "InnovateLabs"],
  color: "from-yellow-400 via-yellow-200 to-yellow-400",
  glowColor: "shadow-yellow-400/50"
}, {
  tier: "Gold",
  icon: Award,
  sponsors: ["CloudSync", "DataFlow Inc", "DevTools Pro"],
  color: "from-orange-400 via-amber-300 to-orange-400",
  glowColor: "shadow-orange-400/50"
}, {
  tier: "Silver",
  icon: Medal,
  sponsors: ["CodeBase", "AppMakers", "WebWorks", "StartupHub"],
  color: "from-slate-300 via-slate-100 to-slate-300",
  glowColor: "shadow-slate-400/50"
}];
export const Sponsors = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  return <section id="sponsors" className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary/10 rounded-full animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${8 + Math.random() * 8}s`
      }} />)}
      </div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300" style={{
      background: hoveredIndex ? `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.15), transparent 40%)` : 'none'
    }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-slow" />
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
              Our Partners
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse-slow" style={{
            animationDelay: '0.5s'
          }} />
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
          return;
        })}
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-20 relative group">
          {/* Animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-border rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative bg-card/80 backdrop-blur-xl p-8 sm:p-12 rounded-xl border-2 border-primary/30 overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />)}
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" />
                <h3 className="font-bold text-2xl sm:text-3xl text-center">Interested in Sponsoring?</h3>
                <Sparkles className="w-6 h-6 text-accent animate-pulse-slow" style={{
                animationDelay: '0.5s'
              }} />
              </div>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
                Partner with us to reach thousands of talented students and support the future of technology.
              </p>
              <div className="flex justify-center">
                <a href="#contact" className="group/btn relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
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
    </section>;
};