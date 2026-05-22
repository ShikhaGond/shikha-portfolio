import { projects } from "@/src/constants/projects";

import { ProjectCard } from "../shared/project-card";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-blue-500 mb-3">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}