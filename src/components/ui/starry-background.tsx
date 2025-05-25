"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface StarryBackgroundProps {
  children: ReactNode;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDirection: number;
  opacitySpeed: number;
}

export default function StarryBackground({ children, className = "" }: StarryBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];

    // Set canvas dimensions to fill up the parent container
    // Create star objects
    const initializeStarryCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      stars = [];

      // Increase for less stars, decrease for more stars
      const INVERSE_STAR_DENSITY_FACTOR = 10000;
      const starCount = Math.floor((canvas.width * canvas.height) / INVERSE_STAR_DENSITY_FACTOR);

      // Create stars objects
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.8 + 0.2,
          opacityDirection: Math.random() > 0.4 ? 1 : -1,
          opacitySpeed: Math.random() * 0.004,
        });
      }
    };

    initializeStarryCanvas();

    // Handle container resizing and updating the stars accordingly
    const resizeObserver = new ResizeObserver(initializeStarryCanvas);
    resizeObserver.observe(container);

    // Animation
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draws and updates stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107, 91, 201, ${star.opacity})`;
        ctx.fill();

        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Update star opacity
        star.opacity += star.opacitySpeed * star.opacityDirection;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Change opacity direction
        if (star.opacity >= 0.9) star.opacityDirection = -1;
        if (star.opacity <= 0) star.opacityDirection = 1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ display: "block" }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
