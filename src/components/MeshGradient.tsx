import { useEffect, useRef } from "react";

export const MeshGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      
      // Create mesh grid
      const gridSize = 80;
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * gridSize;
          const y = i * gridSize;

          // Calculate animated offset
          const offsetX = Math.sin(time * 0.001 + j * 0.5) * 30;
          const offsetY = Math.cos(time * 0.001 + i * 0.5) * 30;

          // Calculate color based on position and time
          const hue1 = 262; // Primary purple
          const hue2 = 195; // Accent cyan
          const hueShift = Math.sin(time * 0.0005 + i * 0.1 + j * 0.1) * 30;
          const currentHue = hue1 + hueShift;

          const sat = 83;
          const light = isDark ? 58 + Math.sin(time * 0.002 + i + j) * 10 : 68;
          const alpha = 0.03 + Math.sin(time * 0.001 + i * 0.2 + j * 0.2) * 0.02;

          // Create gradient for each cell
          const gradient = ctx.createRadialGradient(
            x + offsetX + gridSize / 2,
            y + offsetY + gridSize / 2,
            0,
            x + offsetX + gridSize / 2,
            y + offsetY + gridSize / 2,
            gridSize
          );

          gradient.addColorStop(0, `hsla(${currentHue}, ${sat}%, ${light}%, ${alpha})`);
          gradient.addColorStop(0.5, `hsla(${hue2}, 100%, 50%, ${alpha * 0.6})`);
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, gridSize, gridSize);
        }
      }

      // Add flowing waves
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x += 5) {
          const y = 
            canvas.height / 2 +
            Math.sin((x * 0.005) + (time * 0.001) + (w * 2)) * (40 + w * 20) +
            Math.sin((x * 0.002) + (time * 0.0008) + (w * 1.5)) * (20 + w * 10);
          
          ctx.lineTo(x, y);
        }

        const waveHue = w % 2 === 0 ? 262 : 195;
        const waveAlpha = isDark ? 0.02 + w * 0.01 : 0.025 + w * 0.012;
        ctx.strokeStyle = `hsla(${waveHue}, ${w % 2 === 0 ? 83 : 100}%, ${w % 2 === 0 ? 58 : 50}%, ${waveAlpha})`;
        ctx.lineWidth = 3;
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
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.5 }}
    />
  );
};
