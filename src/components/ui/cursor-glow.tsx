"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
} from "react";

export function CursorGlow() {
  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    damping: 25,
    stiffness: 150,
  });

  const smoothY = useSpring(mouseY, {
    damping: 25,
    stiffness: 150,
  });

  useEffect(() => {
    const handleMouseMove = (
      e: MouseEvent
    ) => {
      mouseX.set(e.clientX - 150);

      mouseY.set(e.clientY - 150);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
}