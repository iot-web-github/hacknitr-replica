import { Calendar, Clock, Droplet } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ParallaxBackground } from "./ParallaxBackground";
import { useEffect, useRef, useState } from "react";

const events = [
  {
    time: "Day 1 - 9:00 AM",
    title: "Registration & Check-in",
    description: "Get your badges, swag, and settle in. Meet your fellow hackers!",
  },
  {
    time: "Day 1 - 10:00 AM",
    title: "Opening Ceremony",
    description: "Kick-off with inspiring talks and event overview.",
  },
  {
    time: "Day 1 - 11:00 AM",
    title: "Hacking Begins",
    description: "Form teams and start building your amazing projects!",
  },
  {
    time: "Day 1 - 2:00 PM",
    title: "Tech Workshops",
    description: "Learn from industry experts on various technologies and tools.",
  },
  {
    time: "Day 1 - 8:00 PM",
    title: "Midnight Snacks",
    description: "Refuel with food and connect with other participants.",
  },
  {
    time: "Day 2 - 11:00 AM",
    title: "Project Submissions",
    description: "Final deadline to submit your projects for judging.",
  },
  {
    time: "Day 2 - 1:00 PM",
    title: "Judging & Demo",
    description: "Present your projects to our panel of expert judges.",
  },
  {
    time: "Day 2 - 4:00 PM",
    title: "Closing Ceremony",
    description: "Award ceremony and celebration of all the amazing work!",
  },
];

const FluidTimeline = ({ isVisible }: { isVisible: boolean }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathLength = 1000;

  return (
    <svg ref={svgRef} className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-32 hidden md:block pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id="fluidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2">
            <animate attributeName="offset" values="0;0.3;0" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8">
            <animate attributeName="offset" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2">
            <animate attributeName="offset" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="dropletGradient">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
        </radialGradient>
      </defs>
      <path d={`M 16 0 Q 20 50, 16 100 T 16 200 T 16 300 T 16 400 T 16 500 T 16 600 T 16 700 T 16 800 T 16 900 T 16 ${pathLength}`} stroke="url(#fluidGradient)" strokeWidth="4" fill="none" strokeLinecap="round" filter="url(#glow)" style={{ strokeDasharray: pathLength, strokeDashoffset: isVisible ? pathLength * (1 - scrollProgress) : pathLength, transition: 'stroke-dashoffset 0.1s ease-out' }} />
      {isVisible && [0, 0.25, 0.5, 0.75].map((offset, i) => (
        <circle key={i} r="3" fill="url(#dropletGradient)" filter="url(#glow)" className="animate-droplet-fall" style={{ animationDelay: `${i * 0.7}s`, animationDuration: '2.8s' }}>
          <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${i * 0.7}s`} path={`M 16 ${offset * pathLength} Q 20 ${50 + offset * pathLength}, 16 ${100 + offset * pathLength} T 16 ${pathLength}`} />
        </circle>
      ))}
    </svg>
  );
};

export const Timeline = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-24 px-4 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary animate-pulse-slow" />
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">Event Schedule</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold sketch-text mb-4">Timeline</h2>
          <div className="flex items-center justify-center gap-2">
            <Droplet className="w-4 h-4 animate-bounce text-accent" />
            <p className="text-sm text-muted-foreground">Flow through the journey</p>
            <Droplet className="w-4 h-4 animate-bounce text-accent" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>

        <div className="relative">
          <FluidTimeline isVisible={isVisible} />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <ParallaxBackground speed={0.05 * (index + 1)} key={index}>
                <div
                  className={`relative flex items-center gap-8 transition-all duration-700 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                {/* Timeline dot with ripple animation */}
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10 animate-ripple group-hover:scale-125 transition-transform" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="relative bg-card border-2 border-border p-4 sm:p-6 hover-lift hover:border-primary transition-all group hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Particle trail on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-ping" />
                      <div className="absolute top-4 right-6 w-1 h-1 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.2s' }} />
                      <div className="absolute top-6 right-4 w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.4s' }} />
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-2 mb-2 text-primary justify-start md:justify-end">
                      <Clock className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      <span className="font-semibold text-sm measurement-text">
                        {event.time}
                      </span>
                    </div>
                    <h3 className="relative z-10 font-bold text-xl mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="relative z-10 text-muted-foreground">{event.description}</p>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                  </div>
                </div>

                {/* Mobile timeline indicator with pulse */}
                <div className="md:hidden absolute left-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 animate-pulse" />
                </div>
              </ParallaxBackground>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
