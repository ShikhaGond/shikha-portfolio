export function About() {
  return (
    <section
      id="about"
      className="py-32 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-500 mb-4">
          About Me
        </p>

        <h2 className="text-5xl font-bold mb-10">
          Frontend developer focused on modern UI engineering
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">

            <p>
              Passionate Frontend Developer with hands-on experience building responsive and high-performance web applications using React.js, Next.js, TypeScript and Tailwind CSS.
            </p>

            <p>
              I specialize in building scalable interfaces with clean architecture, accessibility and smooth user experiences.
            </p>

            <p>
              Currently exploring modern frontend systems, animations and AI-assisted workflows.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="glass rounded-3xl p-8">
              <h3 className="text-4xl font-bold mb-3">
                15+
              </h3>

              <p className="text-zinc-400">
                Projects Built
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-4xl font-bold mb-3">
                10+
              </h3>

              <p className="text-zinc-400">
                Technologies
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-4xl font-bold mb-3">
                100+
              </h3>

              <p className="text-zinc-400">
                DSA Problems
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-4xl font-bold mb-3">
                90+
              </h3>

              <p className="text-zinc-400">
                Lighthouse Scores
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}