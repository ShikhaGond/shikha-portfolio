export function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-blue-500 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Let’s Build Something Great
        </h2>
        <div className="w-24 h-[2px] bg-blue-500/40 rounded-full mt-6" />

        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
          I’m currently open to frontend development opportunities and collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:shikhagond18@gmail.com"
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all"
          >
            Email Me
          </a>

          <a
            href="https://github.com/ShikhaGond"
            target="_blank"
            className="px-6 py-3 rounded-2xl glass"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shikhagond-fresherdev/"
            target="_blank"
            className="px-6 py-3 rounded-2xl glass"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}