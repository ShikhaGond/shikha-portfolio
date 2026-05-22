"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ThemeToggle } from "@/src/components/ui/theme-toggle";

const navItems = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Journey",
    href: "#journey",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <motion.header
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="fixed top-0 left-0 w-full z-50"
    >

      <div className="max-w-7xl mx-auto px-6 pt-5">

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl px-6 h-16 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            Shikha.
          </Link>

          {/* Nav */}

          <nav className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm text-zinc-400 hover:text-white transition-colors duration-300 group"
              >

                {item.label}

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />

              </a>
            ))}

          </nav>

          {/* Right */}

          <div className="flex items-center gap-4">

            <ThemeToggle />

          </div>

        </div>

      </div>

    </motion.header>
  );
}