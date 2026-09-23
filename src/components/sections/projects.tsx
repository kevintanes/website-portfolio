import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

export function Projects() {
  return (
    <section id="projects" className="border-border border-b">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <SectionHeading
          label={siteConfig.projects.label}
          title={siteConfig.projects.heading}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteConfig.projects.items.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          {siteConfig.projects.items.length < 3 && (
            <div className="border-border text-muted-foreground flex min-h-50 flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-center">
              <span className="font-mono text-xs tracking-wide uppercase">
                More coming soon
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
