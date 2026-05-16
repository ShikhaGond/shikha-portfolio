"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[140px] rounded-full" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Radial Fade */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,black_75%)]" />

      {/* Content */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-blue-400 tracking-[0.25em] text-sm font-medium mb-8"
        >
          FRONTEND DEVELOPER
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-10"
        >
          Building
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            {" "}modern{" "}
          </span>
          frontend
          <br />
          experiences.
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="max-w-3xl mx-auto text-zinc-400 text-xl md:text-2xl leading-relaxed mb-14"
        >
          Frontend Developer specializing in React, Next.js and TypeScript with strong focus on responsive UI engineering, performance and elegant user experiences.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="flex flex-wrap justify-center gap-6"
        >

          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="https://github.com/ShikhaGond/frontenddev-resume"
            target="_blank"
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
          >
            Download Resume
          </a>

        </motion.div>

      </div>
    </section>
  );
}