import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ParallaxBackground } from "./ParallaxBackground";
import { ChevronDown } from "lucide-react";
export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".fade-in-element");
      elements.forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5 animate-gradient-reverse" />

      {/* Measurement lines - Left with parallax */}
      <ParallaxBackground speed={0.3}>
        <svg className="absolute left-8 top-1/4 w-32 h-64 opacity-40 hidden lg:block" viewBox="0 0 100 200">
        <line x1="50" y1="0" x2="50" y2="200" className="blueprint-line stroke-dasharray-[5,5]" strokeDasharray="5,5" />
        <line x1="40" y1="0" x2="60" y2="0" className="blueprint-line" />
        <line x1="40" y1="200" x2="60" y2="200" className="blueprint-line" />
        <polygon points="50,10 45,20 55,20" className="blueprint-line" fill="hsl(var(--blueprint-line))" />
        <polygon points="50,190 45,180 55,180" className="blueprint-line" fill="hsl(var(--blueprint-line))" />
        </svg>
      </ParallaxBackground>

      {/* Top measurement line with parallax */}
      <ParallaxBackground speed={0.2}>
        <svg className="absolute top-32 left-1/4 w-64 h-16 opacity-40 hidden md:block" viewBox="0 0 200 50">
        <line x1="0" y1="25" x2="200" y2="25" className="blueprint-line stroke-dasharray-[5,5]" strokeDasharray="5,5" />
        <line x1="0" y1="15" x2="0" y2="35" className="blueprint-line" />
        <line x1="200" y1="15" x2="200" y2="35" className="blueprint-line" />
        <text x="100" y="15" textAnchor="middle" className="fill-blueprint-text measurement-text">24cm</text>
        </svg>
      </ParallaxBackground>

      {/* Vertical text - Right side */}
      <div className="absolute right-8 top-1/3 hidden lg:flex flex-col gap-4 text-sm font-bold tracking-[0.3em] opacity-60">
        {['T', 'H', 'I', 'N', 'K'].map((letter, i) => <span key={i} className="fade-in-element" style={{
        animationDelay: `${i * 0.1}s`
      }}>{letter}</span>)}
        <div className="h-8" />
        {['B', 'U', 'I', 'L', 'D'].map((letter, i) => <span key={i} className="fade-in-element" style={{
        animationDelay: `${(i + 5) * 0.1}s`
      }}>{letter}</span>)}
        <div className="h-8" />
        {['C', 'R', 'E', 'A', 'T', 'E'].map((letter, i) => <span key={i} className="fade-in-element" style={{
        animationDelay: `${(i + 10) * 0.1}s`
      }}>{letter}</span>)}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6">
        {/* Top label */}
        <div className="fade-in-element mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-blueprint-line" />
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
            LARGEST STUDENT-RUN HACKATHON
          </p>
          <div className="h-px w-16 bg-blueprint-line" />
        </div>

        {/* Hero text with sketch effect */}
        <div className="relative mb-8 sm:mb-12">
          <h1 className="sketch-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-none mb-4 fade-in-element font-display animate-text-reveal" style={{
          animationDelay: '0.2s'
        }}>
            <span className="text-sketch-blue inline-block hover:scale-110 transition-transform duration-300" style={{
            textShadow: '3px 3px 0 hsl(var(--background)), 4px 4px 0 hsl(var(--blueprint-line))',
            transform: 'rotate(-1deg)'
          }}>
              HACK
            </span>
          </h1>
          
          <h1 className="sketch-text text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none mb-4 fade-in-element font-display" style={{
          animationDelay: '0.4s'
        }}>
            <span className="text-sketch-orange inline-block" style={{
            textShadow: '3px 3px 0 hsl(var(--background)), 4px 4px 0 hsl(var(--blueprint-line))',
            transform: 'rotate(1deg)'
          }}>
              BEYOND
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-8 fade-in-element" style={{
          animationDelay: '0.6s'
        }}>
            <h1 className="sketch-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none font-display">
              <span className="text-primary inline-block" style={{
              textShadow: '2px 2px 0 hsl(var(--background)), 3px 3px 0 hsl(var(--accent))'
            }}>
                1.0
              </span>
            </h1>
          </div>
        </div>

        {/* Deadline notice */}
        <div className="fade-in-element mb-8 sm:mb-12 px-4 animate-fade-in" style={{
        animationDelay: '0.8s'
      }}>
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-2">
            Registration <span className="text-primary">Deadline</span> Extended
          </p>
        </div>

        {/* CTA buttons */}
        <div className="fade-in-element flex flex-col sm:flex-row items-center justify-center gap-4 px-4 animate-bounce-in" style={{
        animationDelay: '1s'
      }}>
          <Button size="lg" className="hover-lift text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold w-full sm:w-auto shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
            Apply Now
          </Button>
          <Button size="lg" variant="outline" className="hover-lift text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold border-2 w-full sm:w-auto hover:bg-primary/10 transition-all duration-300">
            Join Community
          </Button>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 fade-in-element cursor-pointer group" style={{
        animationDelay: '1.2s'
      }} onClick={() => window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })}>
          
        </div>
      </div>
    </section>;
};