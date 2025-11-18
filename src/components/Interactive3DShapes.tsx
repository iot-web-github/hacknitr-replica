import { useEffect, useRef, useState } from "react";

interface Shape3D {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  rotation: { x: number; y: number; z: number };
  rotationSpeed: { x: number; y: number; z: number };
  type: 'torus' | 'octahedron' | 'dodecahedron' | 'prism' | 'cylinder' | 'cone';
  color: string;
  morphProgress: number;
}

export const Interactive3DShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<Shape3D[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const shapeTypes: Shape3D['type'][] = ['torus', 'octahedron', 'dodecahedron', 'prism', 'cylinder', 'cone'];
    const colors = ['primary', 'accent', 'primary', 'accent', 'primary', 'accent'];
    
    const initialShapes: Shape3D[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 300 + 50,
      size: Math.random() * 80 + 60,
      rotation: { x: Math.random() * 360, y: Math.random() * 360, z: Math.random() * 360 },
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.8,
        y: (Math.random() - 0.5) * 0.8,
        z: (Math.random() - 0.5) * 0.3,
      },
      type: shapeTypes[i],
      color: colors[i],
      morphProgress: 0,
    }));
    setShapes(initialShapes);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      setShapes(prevShapes =>
        prevShapes.map(shape => ({
          ...shape,
          rotation: {
            x: (shape.rotation.x + shape.rotationSpeed.x) % 360,
            y: (shape.rotation.y + shape.rotationSpeed.y) % 360,
            z: (shape.rotation.z + shape.rotationSpeed.z) % 360,
          },
          morphProgress: (shape.morphProgress + 0.01) % 1,
        }))
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {shapes.map((shape) => {
        const parallaxX = mousePos.x * (shape.z / 300) * 30;
        const parallaxY = mousePos.y * (shape.z / 300) * 30;
        const scale = 1 + Math.sin(shape.morphProgress * Math.PI * 2) * 0.15;

        return (
          <div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              transform: `
                translate(${parallaxX}px, ${parallaxY}px)
                perspective(1000px)
                rotateX(${shape.rotation.x}deg)
                rotateY(${shape.rotation.y}deg)
                rotateZ(${shape.rotation.z}deg)
                translateZ(${shape.z}px)
                scale(${scale})
              `,
              transition: 'transform 0.05s linear',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className={`interactive-shape-${shape.type} interactive-shape-${shape.color}`} />
          </div>
        );
      })}
      <style>{`
        .interactive-shape-torus {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 12px solid hsl(var(--primary) / 0.15);
          box-shadow: 
            inset 0 0 30px hsl(var(--primary) / 0.3),
            0 0 40px hsl(var(--primary) / 0.2);
          background: linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05));
        }
        
        .interactive-shape-octahedron {
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 80px solid hsl(var(--accent) / 0.2);
          position: relative;
          filter: drop-shadow(0 0 25px hsl(var(--accent) / 0.4));
        }
        
        .interactive-shape-octahedron::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-top: 80px solid hsl(var(--accent) / 0.15);
          left: -50px;
          top: 0;
        }
        
        .interactive-shape-dodecahedron {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--accent) / 0.12));
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          box-shadow: 
            inset -15px -15px 40px hsl(var(--primary) / 0.2),
            0 0 50px hsl(var(--primary) / 0.25);
          border: 2px solid hsl(var(--primary) / 0.3);
        }
        
        .interactive-shape-prism {
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, 
            hsl(var(--accent) / 0.08) 0%,
            hsl(var(--accent) / 0.15) 50%,
            hsl(var(--accent) / 0.08) 100%
          );
          clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
          box-shadow: 
            inset 10px 0 20px hsl(var(--accent) / 0.3),
            0 0 35px hsl(var(--accent) / 0.3);
        }
        
        .interactive-shape-cylinder {
          width: 60%;
          height: 100%;
          margin: 0 auto;
          background: linear-gradient(to bottom,
            hsl(var(--primary) / 0.18) 0%,
            hsl(var(--primary) / 0.08) 50%,
            hsl(var(--primary) / 0.18) 100%
          );
          border-radius: 15px;
          border-top: 8px solid hsl(var(--primary) / 0.25);
          border-bottom: 8px solid hsl(var(--primary) / 0.25);
          box-shadow: 
            inset -10px 0 30px hsl(var(--primary) / 0.3),
            0 0 40px hsl(var(--primary) / 0.2);
        }
        
        .interactive-shape-cone {
          width: 0;
          height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 120px solid hsl(var(--accent) / 0.18);
          filter: drop-shadow(0 0 30px hsl(var(--accent) / 0.35));
          position: relative;
        }
        
        .interactive-shape-cone::before {
          content: '';
          position: absolute;
          width: 80px;
          height: 20px;
          background: radial-gradient(ellipse, hsl(var(--accent) / 0.25), transparent);
          border-radius: 50%;
          left: -40px;
          top: 120px;
        }
        
        .interactive-shape-accent {
          filter: hue-rotate(180deg);
        }
      `}</style>
    </div>
  );
};
