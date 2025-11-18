import { useEffect, useRef } from "react";

export const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = document.documentElement.classList.contains('dark');
      
      // Draw multiple wave layers
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
          const y = 
            canvas.height / 2 + 
            Math.sin((x * 0.01) + (time * 0.02) + (i * 2)) * (20 + i * 10) +
            Math.sin((x * 0.005) + (time * 0.015) + (i * 1.5)) * (15 + i * 5);
          
          ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        if (isDark) {
          gradient.addColorStop(0, `rgba(155, 89, 255, ${0.02 + i * 0.01})`);
          gradient.addColorStop(1, `rgba(0, 191, 255, ${0.01 + i * 0.005})`);
        } else {
          gradient.addColorStop(0, `rgba(155, 89, 255, ${0.03 + i * 0.015})`);
          gradient.addColorStop(1, `rgba(0, 191, 255, ${0.02 + i * 0.01})`);
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{ opacity: 0.3 }}
    />
  );
};
