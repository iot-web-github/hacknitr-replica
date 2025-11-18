import { useEffect, useState } from "react";

interface Shape3D {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: 'cube' | 'pyramid' | 'sphere';
  depth: number;
}

export const Floating3DShapes = () => {
  const [shapes, setShapes] = useState<Shape3D[]>([]);

  useEffect(() => {
    // Initialize 3D shapes
    const shapeTypes: ('cube' | 'pyramid' | 'sphere')[] = ['cube', 'pyramid', 'sphere'];
    const initialShapes: Shape3D[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      depth: Math.random() * 50 + 50,
    }));
    setShapes(initialShapes);

    // Animate shapes
    const animationInterval = setInterval(() => {
      setShapes(prevShapes =>
        prevShapes.map(shape => ({
          ...shape,
          rotation: (shape.rotation + shape.rotationSpeed) % 360,
        }))
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="floating-shape absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            transform: `perspective(1000px) rotateX(${shape.rotation}deg) rotateY(${shape.rotation * 1.5}deg) translateZ(${shape.depth}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          <div className={`floating-shape-${shape.type}`} />
        </div>
      ))}
    </div>
  );
};
