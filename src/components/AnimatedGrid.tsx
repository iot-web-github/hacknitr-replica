import { useEffect, useRef } from "react";

export const AnimatedGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return;
      const scrolled = window.pageYOffset;
      const speed = 0.1;
      gridRef.current.style.transform = `translate3d(${scrolled * speed * 0.3}px, ${scrolled * speed}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 pointer-events-none z-0 transition-transform will-change-transform"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--blueprint-line) / 0.03) 1.5px, transparent 1.5px),
          linear-gradient(90deg, hsl(var(--blueprint-line) / 0.03) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.6,
      }}
    />
  );
};
