import { useEffect, useRef, useState } from "react";

interface Island {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  depth: number;
}

export const FloatingIslands = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [islands, setIslands] = useState<Island[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const initialIslands: Island[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: 10 + i * 25,
      y: 20 + (i % 2) * 30,
      width: 150 + Math.random() * 100,
      height: 80 + Math.random() * 60,
      rotation: (Math.random() - 0.5) * 10,
      depth: 100 + i * 50,
    }));
    setIslands(initialIslands);

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {islands.map((island) => {
        const parallaxOffset = (scrollY * island.depth) / 1000;
        const floatOffset = Math.sin(Date.now() / 1000 + island.id) * 10;

        return (
          <div
            key={island.id}
            className="absolute transition-transform duration-100 ease-out"
            style={{
              left: `${island.x}%`,
              top: `${island.y}%`,
              width: `${island.width}px`,
              height: `${island.height}px`,
              transform: `
                translateY(${parallaxOffset + floatOffset}px)
                rotateX(${island.rotation}deg)
                rotateZ(${island.rotation * 0.5}deg)
                perspective(1000px)
              `,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative w-full h-full">
              {/* Island platform */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      hsl(var(--primary) / 0.08) 0%,
                      hsl(var(--accent) / 0.08) 50%,
                      hsl(var(--primary) / 0.12) 100%
                    )
                  `,
                  boxShadow: `
                    0 20px 60px -15px hsl(var(--primary) / 0.3),
                    inset 0 -10px 30px hsl(var(--primary) / 0.1)
                  `,
                  border: '2px solid hsl(var(--primary) / 0.15)',
                  transform: 'translateZ(-20px)',
                }}
              />
              
              {/* Island depth */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(180deg, 
                    transparent 0%,
                    hsl(var(--primary) / 0.15) 100%
                  )`,
                  transform: 'translateZ(-40px)',
                  filter: 'blur(4px)',
                }}
              />

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-slow"
                style={{
                  background: `radial-gradient(ellipse at center, 
                    hsl(var(--primary) / 0.15) 0%,
                    transparent 70%
                  )`,
                  transform: 'translateZ(10px) scale(1.2)',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
