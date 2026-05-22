const uiProjects = [
  {
    title: "Modern Dashboard UI",
    description:
      "Clean analytics dashboard with modern SaaS-inspired interface system.",
  },

  {
    title: "Glassmorphism Landing Page",
    description:
      "Experimental futuristic landing page with layered glass effects and gradients.",
  },

  {
    title: "Minimal Mobile UI",
    description:
      "Mobile-first responsive interface focused on accessibility and usability.",
  },
];

export function UIShowcase() {
  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-500 mb-4">
          UI Explorations
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Interface & UX Experiments
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {uiProjects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500"
            >

              <div className="h-56 bg-gradient-to-br from-blue-500/20 to-violet-500/10 border-b border-white/10" />

              <div className="p-8">

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}