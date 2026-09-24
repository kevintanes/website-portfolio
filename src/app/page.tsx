import { Bio } from "@/components/sections/bio";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
