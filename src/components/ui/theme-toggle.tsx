"use client";

import dynamic from "next/dynamic";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

function ThemeToggleComponent() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Theme"
      className="w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-105"
      onClick={() =>
        setTheme(
          resolvedTheme === "dark"
            ? "light"
            : "dark"
        )
      }
    >
      {resolvedTheme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}

export const ThemeToggle = dynamic(
  async () => ThemeToggleComponent,
  {
    ssr: false,
  }
);