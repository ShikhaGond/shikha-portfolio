"use client";

import {
  Globe,
  Mail,
  User,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* Glow */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* Top */}

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-16">

          {/* Left */}

          <div className="max-w-2xl">

            <p className="text-blue-500 uppercase tracking-wider text-sm mb-4">
              Let&apos;s Build Something Great
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Designing modern digital experiences with clean frontend engineering.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Passionate about building performant, accessible and visually polished web applications using modern frontend technologies.
            </p>

          </div>

          {/* Availability */}

          <div className="glass rounded-3xl px-8 py-6 min-w-[260px]">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

              <p className="text-sm text-zinc-300">
                Available for opportunities
              </p>

            </div>

            <p className="text-zinc-500 text-sm leading-relaxed">
              Currently open to frontend developer roles, freelance work and collaborative product opportunities.
            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-zinc-500 text-sm">
            © 2026 Shikha Gond. Crafted with Next.js & Tailwind CSS.
          </p>

          {/* Socials */}

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/ShikhaGond"
              target="_blank"
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
            >

              <Globe size={18} />

            </a>

            <a
              href="https://www.linkedin.com/in/shikhagond-fresherdev/"
              target="_blank"
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
            >

              <User size={18} />

            </a>

            <a
              href="mailto:shikhagond18@gmail.com"
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
            >

              <Mail size={18} />

            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}