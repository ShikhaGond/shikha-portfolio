"use client";

import Link from "next/link";

import { navigation } from "@/src/constants/navigation";

import { ThemeToggle } from "@/src/components/ui/theme-toggle";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="font-semibold text-lg"
        >
          Shikha.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}