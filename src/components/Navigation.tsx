import { useState, useEffect } from "react";
import { Home, Calendar, Trophy, Users, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about", icon: Home },
  { name: "Timeline", href: "#timeline", icon: Calendar },
  { name: "Tracks", href: "#tracks", icon: Trophy },
  { name: "Sponsors", href: "#sponsors", icon: Users },
  { name: "FAQs", href: "#faqs", icon: HelpCircle },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(progress);

      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted/20 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "backdrop-blur-2xl bg-background/70 shadow-lg shadow-primary/5 border-b border-border/30" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            <a href="#" className="flex items-center gap-2 group relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div 
                className={`relative rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center font-bold text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/50 overflow-hidden ${
                  isScrolled ? "w-10 h-10" : "w-12 h-12"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 border-2 border-transparent border-t-white/50 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100" />
                <span className="relative z-10 text-lg">HB</span>

                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-burst"
                    style={{
                      left: '50%',
                      top: '50%',
                      animationDelay: `${i * 0.05}s`,
                      transform: `rotate(${i * 45}deg) translateY(-20px)`
                    }}
                  />
                ))}
              </div>
              <span className={`font-bold transition-all duration-500 group-hover:text-primary hidden sm:inline ${
                isScrolled ? "text-base" : "text-xl"
              }`}>
                Hack Beyond 1.0
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative group px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                    
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/20 rounded-lg border border-primary/30">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 animate-shimmer" />
                      </div>
                    )}

                    <div className="relative flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? 'text-primary' : 'text-foreground/70 group-hover:text-primary'
                      }`} />
                      <span className={`text-sm font-medium transition-all duration-300 ${
                        isActive ? 'text-primary' : 'text-foreground/70 group-hover:text-foreground'
                      }`}>
                        {item.name}
                      </span>
                    </div>

                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
              
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative group"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 top-1 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`} />
                  <span className={`absolute left-0 top-3 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`} />
                  <span className={`absolute left-0 top-5 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`} />
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="relative backdrop-blur-2xl bg-background/90 border-t border-border/30 px-4 py-6 space-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center gap-3 p-4 rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 ${
                    isActive ? 'bg-primary/20 text-primary' : 'text-foreground/70'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMobileMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                  
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/50 hover:scale-110 hover:shadow-2xl hover:shadow-primary/60 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping" />
        </button>
      )}
    </>
  );
};
