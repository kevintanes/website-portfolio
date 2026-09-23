import { Bio } from "@/components/sections/bio";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Stack />
      <div id="work" />
      <div id="contact" />
    </>
  );
}
