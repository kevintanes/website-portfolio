import { useTranslations } from "next-intl";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  Prisma: SiPrisma,
  "TanStack Query": SiReactquery,
  "shadcn/ui": SiShadcnui,
};

export function Stack() {
  const t = useTranslations("stack");

  return (
    <section id="stack" className="border-border border-b">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3 lg:gap-16 lg:py-24">
        <SectionHeading label={t("label")} title={t("heading")} />

        <div className="flex flex-wrap gap-3 lg:col-span-2">
          {siteConfig.stack.items.map((item) => {
            const Icon = iconMap[item];

            return (
              <Badge
                key={item}
                variant="outline"
                className="h-9 gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              >
                <Icon className="text-brand size-4" />
                {item}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
}
