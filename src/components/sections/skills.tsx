"use client";

import {
  Code2,
  Palette,
  Database,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },

  {
    title: "Styling",
    icon: Palette,

    skills: [
      "Tailwind CSS",
      "SCSS",
      "Responsive Design",
      "Framer Motion",
    ],
  },

  {
    title: "Backend Basics",
    icon: Database,

    skills: [
      "Node.js",
      "Firebase",
      "REST APIs",
      "SQL",
    ],
  },

  {
    title: "Tools",
    icon: Wrench,

    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-black text-white overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-20"
        >

          <p className="text-blue-500 mb-4 tracking-wider uppercase text-sm">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Technologies I Work With
          </h2>

          <div className="w-24 h-[2px] bg-blue-500/40 rounded-full mt-6" />

        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
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
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
              >

                {/* Hover Glow */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-500/5" />

                {/* Header */}

                <div className="relative flex items-center gap-4 mb-10">

                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">

                    <Icon
                      size={26}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold">
                      {category.title}
                    </h3>

                    <p className="text-zinc-500 text-sm mt-1">
                      Modern frontend stack
                    </p>

                  </div>

                </div>

                {/* Skills */}

                <div className="flex flex-wrap gap-4">

                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.04] hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                    >

                      <p className="text-sm font-medium">
                        {skill}
                      </p>

                    </div>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}