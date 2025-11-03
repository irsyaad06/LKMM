import { useRef, useEffect, useState, type ReactNode } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

interface StarfieldWarpProps {
  children?: ReactNode;
}

const StarfieldWarp: React.FC<StarfieldWarpProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const { width, height } = rect;
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);

      setDimensions({ width, height });
      initStars(width, height);
    };

    const initStars = (width: number, height: number) => {
      const starCount = width < 768 ? 300 : 500;
      const stars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 60 + 200}, 100%, ${
            Math.random() * 30 + 70
          }%)`,
        });
      }

      starsRef.current = stars;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const warpSpeed = 0.8; // 🌌 kecepatan lambat bintang

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 20, 0.3)";
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      const stars = starsRef.current;
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;

      for (const star of stars) {
        star.z -= warpSpeed;
        if (star.z <= 0) {
          star.x = Math.random() * dimensions.width - centerX;
          star.y = Math.random() * dimensions.height - centerY;
          star.z = 1000;
          star.size = Math.random() * 2 + 1;
        }

        const projectedX = (star.x / star.z) * 500 + centerX;
        const projectedY = (star.y / star.z) * 500 + centerY;
        const projectedSize = star.size * (1 - star.z / 1000);

        if (
          projectedX < -10 ||
          projectedX > dimensions.width + 10 ||
          projectedY < -10 ||
          projectedY > dimensions.height + 10
        )
          continue;

        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full min-h-screen overflow-hidden bg-gray-900"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarfieldWarp;
