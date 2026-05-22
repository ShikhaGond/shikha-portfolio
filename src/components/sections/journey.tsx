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
    <section
      id="journey"
      className="py-32 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-blue-500 mb-4">
          My Journey
        </p>
        

        <h2 className="text-5xl font-bold mb-20">
          Growth Through Continuous Learning
        </h2>
        

        <div className="relative border-l border-white/10 pl-10 space-y-16">

          {timeline.map((item) => (
            <div
              key={item.year}
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

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}