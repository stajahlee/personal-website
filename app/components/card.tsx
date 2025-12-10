"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

import { PropsWithChildren } from "react";

type Props = {
  withMotion?: boolean;
  motionColors?: string[];
};

export const Card: React.FC<PropsWithChildren & Props> = ({
  children,
  withMotion,
  motionColors = [""],
}) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const gradientColors = motionColors?.length
    ? motionColors.join(", ")
    : "rgba(255,255,255,0.1)";
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      id="card"
      onMouseMove={withMotion ? onMouseMove : undefined}
      className="p-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 "
    >
      {withMotion && (
        <div className="pointer-events-none">
          <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
          <motion.div
            className="absolute inset-0 z-10 opacity-100 transition duration-1000 group-hover:opacity-50"
            style={{
              ...style,
              background: `radial-gradient(circle, ${gradientColors})`,
            }}
          />
          <motion.div
            className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
            style={style}
          />
        </div>
      )}

      {children}
    </div>
  );
};
