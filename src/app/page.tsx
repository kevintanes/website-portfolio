import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <h1>Website Portfolio</h1>
      <Button>test</Button>
      {/* TODO: move into header/nav once built */}
      <ThemeToggle />
    </>
  );
}
