"use client";

import { motion } from "framer-motion";

import {
  Code2,
  Sparkles,
  LayoutDashboard,
  Rocket,
} from "lucide-react";

const stats = [
  {
    value: "6+",
    label: "Projects Built",
    icon: LayoutDashboard,
  },

  {
    value: "10+",
    label: "Technologies",
    icon: Code2,
  },

  {
    value: "100+",
    label: "DSA Problems",
    icon: Sparkles,
  },

  {
    value: "90+",
    label: "Lighthouse Scores",
    icon: Rocket,
  },
];

export function About() {
  return (
    <motion.section
      id="about"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative py-32 bg-black text-white overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <p className="text-blue-500 uppercase tracking-wider text-sm mb-4">
              About Me
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Frontend engineer passionate about modern UI systems.
            </h2>

            <div className="w-24 h-[2px] bg-blue-500/40 rounded-full mb-10" />

            <div className="space-y-7 text-zinc-400 text-lg leading-relaxed">

              <p>
                Passionate Frontend Developer with hands-on experience building responsive and high-performance web applications using React.js, Next.js, TypeScript and Tailwind CSS.
              </p>

              <p>
                I specialize in translating ideas and Figma designs into clean, scalable and accessible interfaces with smooth interactions and modern user experiences.
              </p>

              <p>
                Currently focused on frontend engineering, performance optimization, design systems and continuously improving through real-world projects.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-500"
                >

                  {/* Hover Glow */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-500/5" />

                  <div className="relative z-10">

                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">

                      <Icon
                        size={26}
                        className="text-blue-400"
                      />

                    </div>

                    <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                      {stat.value}
                    </h3>

                    <p className="text-zinc-400">
                      {stat.label}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </motion.section>
  );
}