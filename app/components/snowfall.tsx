"use client";

import React, { useRef, useEffect } from "react";

interface SnowfallProps {
  className?: string;
  snowflakeCount?: number;
  speed?: number;
  wind?: number;
}

type Snowflake = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
};

export default function Snowfall({
  className = "",
  snowflakeCount = 150,
  speed = 1,
  wind = 0.5,
}: SnowfallProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const snowflakes = useRef<Snowflake[]>([]);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const animationFrameId = useRef<number>(0);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    createSnowflakes();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      snowflakes.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const createSnowflake = (): Snowflake => {
    return {
      x: Math.random() * canvasSize.current.w,
      y: Math.random() * canvasSize.current.h - canvasSize.current.h,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.3 + 0.2,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.02 + 0.01,
    };
  };

  const createSnowflakes = () => {
    snowflakes.current = [];
    for (let i = 0; i < snowflakeCount; i++) {
      const flake = createSnowflake();
      // Distribute initial snowflakes across the screen
      flake.y = Math.random() * canvasSize.current.h;
      snowflakes.current.push(flake);
    }
  };

  const drawSnowflake = (flake: Snowflake) => {
    if (!context.current) return;

    context.current.beginPath();
    context.current.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    context.current.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    context.current.fill();
  };

  const updateSnowflake = (flake: Snowflake) => {
    // Update wobble for side-to-side motion
    flake.wobble += flake.wobbleSpeed;

    // Move snowflake down with speed factor
    flake.y += flake.speed * speed;

    // Add wobble and wind effect for horizontal movement
    flake.x += Math.sin(flake.wobble) * 0.5 + wind;

    // Reset snowflake when it goes off screen
    if (flake.y > canvasSize.current.h + flake.size) {
      flake.y = -flake.size;
      flake.x = Math.random() * canvasSize.current.w;
    }

    // Wrap horizontally
    if (flake.x > canvasSize.current.w + flake.size) {
      flake.x = -flake.size;
    } else if (flake.x < -flake.size) {
      flake.x = canvasSize.current.w + flake.size;
    }
  };

  const clearCanvas = () => {
    if (!context.current) return;
    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
  };

  const animate = () => {
    clearCanvas();

    snowflakes.current.forEach((flake) => {
      updateSnowflake(flake);
      drawSnowflake(flake);
    });

    animationFrameId.current = requestAnimationFrame(animate);
  };

  return (
    <div
      ref={canvasContainerRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
