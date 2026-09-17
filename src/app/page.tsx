import { Bio } from "@/components/sections/bio";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <div id="stack" />
      <div id="work" />
      <div id="contact" />
    </>
  );
}
