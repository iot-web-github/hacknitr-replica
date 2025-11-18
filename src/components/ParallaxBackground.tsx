import { useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxBackground = ({ children, speed = 0.5, className = "" }: ParallaxBackgroundProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.pageYOffset;
      const rect = parallaxRef.current.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      
      // Only apply parallax when element is in viewport
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={parallaxRef} className={`transition-transform will-change-transform ${className}`}>
      {children}
    </div>
  );
};
