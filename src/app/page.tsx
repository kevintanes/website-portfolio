import { Bio } from "@/components/sections/bio";
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
      <div id="work" />
      <div id="contact" />
    </>
  );
}
