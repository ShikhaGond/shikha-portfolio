"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { Project } from "@/src/types/project";

type Props = {
  project: Project;
};

export function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >

      {/* Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-500/5 pointer-events-none" />

      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

      </div>

      {/* Content */}

      <div className="relative p-8">

        <div className="flex items-start justify-between mb-5">

          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <ArrowUpRight
            size={20}
            className="text-zinc-500 group-hover:text-blue-400 transition-colors"
          />

        </div>

        <p className="text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mb-8">

          {project.tech.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-5">

          <a
            href={project.live}
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>

        </div>

      </div>

    </motion.div>
  );
}