const sponsorTiers = [
  {
    tier: "Platinum",
    sponsors: ["TechCorp Global", "InnovateLabs"],
  },
  {
    tier: "Gold",
    sponsors: ["CloudSync", "DataFlow Inc", "DevTools Pro"],
  },
  {
    tier: "Silver",
    sponsors: ["CodeBase", "AppMakers", "WebWorks", "StartupHub"],
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-12 sm:py-16 md:py-24 px-4 bg-muted/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
            Our Partners
          </span>
          <div className="h-px w-32 bg-blueprint-line mx-auto mt-2 mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold sketch-text mb-4">
            Sponsors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Supported by industry leaders who believe in fostering innovation and empowering the next generation of builders.
          </p>
        </div>

        {/* Sponsor tiers */}
        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="text-center">
              <h3 className="text-xl font-bold mb-6 text-primary">{tier.tier} Sponsors</h3>
              <div className={`grid gap-6 ${
                tier.tier === "Platinum" ? "md:grid-cols-2" : 
                tier.tier === "Gold" ? "md:grid-cols-3" : 
                "md:grid-cols-4"
              }`}>
                {tier.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-card border-2 border-border p-4 sm:p-6 md:p-8 flex items-center justify-center hover-lift hover:border-primary transition-all group hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-xl sm:text-2xl font-bold text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {sponsor.charAt(0)}
                      </div>
                      <p className="font-bold text-xs sm:text-sm">{sponsor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-16 text-center p-12 border-2 border-border bg-card">
          <h3 className="font-bold text-2xl mb-3">Interested in Sponsoring?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Partner with us to reach thousands of talented students and support the future of technology.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold hover-lift hover:bg-primary/90 transition-all"
          >
            Get Sponsorship Brochure
          </a>
        </div>
      </div>
    </section>
  );
};
