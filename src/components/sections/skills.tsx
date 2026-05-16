const skillCategories = [
  {
    title: "Frontend",
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
    skills: [
      "Tailwind CSS",
      "SCSS",
      "Responsive Design",
      "Framer Motion",
    ],
  },

  {
    title: "Backend Basics",
    skills: [
      "Node.js",
      "Firebase",
      "REST APIs",
      "SQL",
    ],
  },

  {
    title: "Tools",
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
      className="py-32 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-500 mb-4">
          Skills
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Technologies I Work With
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass rounded-3xl p-8"
            >

              <h3 className="text-2xl font-semibold mb-8">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <p className="text-sm font-medium">
                      {skill}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}