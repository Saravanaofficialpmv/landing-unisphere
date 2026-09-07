"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = React.memo(({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const cardRef = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  // Use raw motion values with spring physics for 0-rerender 60fps GPU transforms!
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const isHovered = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  const innerScale = useSpring(useTransform(isHovered, [0, 1], [1, 1.025]), springConfig);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    isHovered.set(1);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    let rect = rectRef.current;
    if (!rect && cardRef.current) {
      rect = cardRef.current.getBoundingClientRect();
      rectRef.current = rect;
    }
    if (!rect) return;
    const x = (event.clientX - (rect.left + rect.width / 2)) / 20;
    const y = (event.clientY - (rect.top + rect.height / 2)) / 20;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    isHovered.set(0);
    rawX.set(0);
    rawY.set(0);
    rectRef.current = null;
  };

  return (
    <motion.section
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "mx-auto w-full bg-indigo-800 relative rounded-2xl overflow-hidden will-change-transform",
        containerClassName
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(15, 23, 42, 0.16), 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        }}
      >
        <motion.div
          style={{
            x: useTransform(springX, (x) => -x),
            y: useTransform(springY, (y) => -y),
            scale: innerScale,
          }}
          className={cn("h-full p-4 sm:p-6 lg:p-8 will-change-transform", className)}
        >
          <Noise />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
});

WobbleCard.displayName = "WobbleCard";

const Noise = React.memo(() => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-20 [mask-image:radial-gradient(#fff,transparent,85%)] pointer-events-none"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "200px 200px",
      }}
    />
  );
});

Noise.displayName = "Noise";
