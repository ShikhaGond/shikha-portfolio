export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-zinc-500 text-sm">
          © 2025 Shikha Gond. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm text-zinc-400">

          <a
            href="https://github.com/ShikhaGond"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shikhagond-fresherdev/"
            target="_blank"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </footer>
  );
}