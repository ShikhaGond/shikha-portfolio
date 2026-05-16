"use client";

import Image from "next/image";

import { motion } from "framer-motion";

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
  scale: 1.02,
}}
      className="glass rounded-3xl overflow-hidden"
    >
      <div className="relative h-60">

        <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-zinc-400 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-white/5 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">

          <a
            href={project.live}
            target="_blank"
            className="text-blue-500"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="text-zinc-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}