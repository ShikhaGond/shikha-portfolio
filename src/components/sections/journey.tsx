"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2020",
    title: "Started Web Development",
    description:
      "Began learning HTML, CSS and JavaScript fundamentals while exploring frontend development.",
  },

  {
    year: "2021",
    title: "Responsive UI Development",
    description:
      "Built responsive websites and improved understanding of modern UI design principles.",
  },

  {
    year: "2023",
    title: "React Ecosystem",
    description:
      "Focused on React.js, reusable component architecture and frontend application development.",
  },

  {
    year: "2024",
    title: "Modern Frontend Engineering",
    description:
      "Built scalable Next.js applications with TypeScript, Tailwind CSS and performance-focused UI systems.",
  },

  {
    year: "Present",
    title: "Continuous Growth",
    description:
      "Actively building frontend projects, exploring AI-assisted workflows and improving engineering practices.",
  },
];

export function Journey() {
  return (
    <motion.section
      id="journey"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative py-32 bg-black text-white overflow-hidden"
    >

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <p className="text-blue-500 uppercase tracking-wider text-sm mb-4">
          Journey
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Growth Through Continuous Learning
        </h2>

        <div className="w-24 h-[2px] bg-blue-500/40 rounded-full mb-20" />

        <div className="relative border-l border-white/10 pl-10 space-y-16">

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              className="relative"
            >

              <div className="absolute -left-[49px] top-1 w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40" />

              <p className="text-blue-500 mb-2">
                {item.year}
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.section>
  );
}