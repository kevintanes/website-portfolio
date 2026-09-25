import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { siteConfig } from "@/lib/site-config";

type Project = (typeof siteConfig)["projects"]["items"][number];

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");
  const title = t(`items.${project.id}.title`);

  return (
    <div className="bg-card border-border flex flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-200 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-50 w-full">
        <Image
          src={project.image}
          alt={t("imageAlt", { title })}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-card-foreground text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(`items.${project.id}.description`)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-muted text-muted-foreground rounded-sm border-transparent font-mono text-[11px] font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "brand", size: "sm" })}
            >
              {t("live")}
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              {t("github")}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
