import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".fade-in-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--blueprint-line)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--blueprint-line)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Measurement lines - Left */}
      <svg className="absolute left-8 top-1/4 w-32 h-64 opacity-40 hidden lg:block" viewBox="0 0 100 200">
        <line x1="50" y1="0" x2="50" y2="200" className="blueprint-line stroke-dasharray-[5,5]" strokeDasharray="5,5" />
        <line x1="40" y1="0" x2="60" y2="0" className="blueprint-line" />
        <line x1="40" y1="200" x2="60" y2="200" className="blueprint-line" />
        <polygon points="50,10 45,20 55,20" className="blueprint-line" fill="hsl(var(--blueprint-line))" />
        <polygon points="50,190 45,180 55,180" className="blueprint-line" fill="hsl(var(--blueprint-line))" />
      </svg>

      {/* Top measurement line */}
      <svg className="absolute top-32 left-1/4 w-64 h-16 opacity-40 hidden md:block" viewBox="0 0 200 50">
        <line x1="0" y1="25" x2="200" y2="25" className="blueprint-line stroke-dasharray-[5,5]" strokeDasharray="5,5" />
        <line x1="0" y1="15" x2="0" y2="35" className="blueprint-line" />
        <line x1="200" y1="15" x2="200" y2="35" className="blueprint-line" />
        <text x="100" y="15" textAnchor="middle" className="fill-blueprint-text measurement-text">24cm</text>
      </svg>

      {/* Vertical text - Right side */}
      <div className="absolute right-8 top-1/3 hidden lg:flex flex-col gap-4 text-sm font-bold tracking-[0.3em] opacity-60">
        {['T', 'H', 'I', 'N', 'K'].map((letter, i) => (
          <span key={i} className="fade-in-element" style={{ animationDelay: `${i * 0.1}s` }}>{letter}</span>
        ))}
        <div className="h-8" />
        {['B', 'U', 'I', 'L', 'D'].map((letter, i) => (
          <span key={i} className="fade-in-element" style={{ animationDelay: `${(i + 5) * 0.1}s` }}>{letter}</span>
        ))}
        <div className="h-8" />
        {['C', 'R', 'E', 'A', 'T', 'E'].map((letter, i) => (
          <span key={i} className="fade-in-element" style={{ animationDelay: `${(i + 10) * 0.1}s` }}>{letter}</span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Top label */}
        <div className="fade-in-element mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-blueprint-line" />
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
            LARGEST STUDENT-RUN HACKATHON
          </p>
          <div className="h-px w-16 bg-blueprint-line" />
        </div>

        {/* Hero text with sketch effect */}
        <div className="relative mb-12">
          <h1 className="sketch-text text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none mb-4 fade-in-element" style={{ animationDelay: '0.2s' }}>
            <span className="text-sketch-blue inline-block" style={{
              textShadow: '3px 3px 0 hsl(var(--background)), 4px 4px 0 hsl(var(--blueprint-line))',
              transform: 'rotate(-1deg)'
            }}>
              Tech
            </span>
          </h1>
          
          <h1 className="sketch-text text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none mb-4 fade-in-element" style={{ animationDelay: '0.4s' }}>
            <span className="text-sketch-dark inline-block" style={{
              textShadow: '3px 3px 0 hsl(var(--background)), 4px 4px 0 hsl(var(--blueprint-line))',
              transform: 'rotate(1deg)'
            }}>
              Hack
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-8 fade-in-element" style={{ animationDelay: '0.6s' }}>
            <h1 className="sketch-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">
              <span className="text-sketch-dark inline-block" style={{
                textShadow: '2px 2px 0 hsl(var(--background)), 3px 3px 0 hsl(var(--blueprint-line))',
                transform: 'rotate(-0.5deg)'
              }}>
                2025
              </span>
            </h1>
            
            {/* Dimension marker */}
            <div className="flex flex-col items-start text-xs measurement-text opacity-60">
              <span>5cm</span>
              <svg width="40" height="60" className="my-1">
                <line x1="20" y1="0" x2="20" y2="60" className="blueprint-line" strokeDasharray="3,3" />
                <line x1="15" y1="60" x2="25" y2="60" className="blueprint-line" />
                <polygon points="20,5 18,12 22,12" className="blueprint-line" fill="hsl(var(--blueprint-line))" />
              </svg>
            </div>
          </div>
        </div>

        {/* Deadline notice */}
        <div className="fade-in-element mb-12" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg md:text-xl font-semibold mb-2">
            Registration <span className="text-primary">Deadline</span> Extended
          </p>
        </div>

        {/* CTA buttons */}
        <div className="fade-in-element flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '1s' }}>
          <Button size="lg" className="hover-lift text-lg px-8 py-6 font-bold">
            Apply Now
          </Button>
          <Button size="lg" variant="outline" className="hover-lift text-lg px-8 py-6 font-bold border-2">
            Join Community
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-element" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-wider text-muted-foreground">SCROLL</span>
            <svg width="20" height="30" viewBox="0 0 20 30">
              <path d="M10 0 L10 25 M5 20 L10 25 L15 20" stroke="currentColor" strokeWidth="2" fill="none" className="text-muted-foreground" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
