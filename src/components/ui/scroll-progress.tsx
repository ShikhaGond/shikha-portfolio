"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9999] bg-gradient-to-r from-blue-500 to-violet-500"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}