import { Navbar } from "@/src/components/layout/navbar";

import { Footer } from "@/src/components/layout/footer";

import { Hero } from "@/src/components/sections/hero";

import { About } from "@/src/components/sections/about";

import { Skills } from "@/src/components/sections/skills";

import { Projects } from "@/src/components/sections/projects";

import { Journey } from "@/src/components/sections/journey";

import { Certificates } from "@/src/components/sections/certificates";

import { Testimonials } from "@/src/components/sections/testimonials";

import { Contact } from "@/src/components/sections/contact";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Journey />

      <Certificates />

      <Testimonials />

      <Contact />

      <Footer />

    </main>
  );
}