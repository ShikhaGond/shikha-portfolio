"use client";

import { motion } from "framer-motion";

import { projects } from "@/src/constants/projects";

import { ProjectCard } from "@/src/components/shared/project-card";

export function Projects() {
  return (
    <motion.section
      id="projects"
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

      {/* Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-20">

          <p className="text-blue-500 uppercase tracking-wider text-sm mb-4">
            Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Featured Work
          </h2>

          <div className="w-24 h-[2px] bg-blue-500/40 rounded-full mt-6" />

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
            >

              <ProjectCard project={project} />

            </motion.div>
          ))}

        </div>

      </div>

    </motion.section>
  );
}