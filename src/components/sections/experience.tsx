import { useFormatter, useTranslations } from "next-intl";

import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

function formatPeriod(
  format: ReturnType<typeof useFormatter>,
  start: string,
  end: string
) {
  const options = { month: "short", year: "numeric" } as const;
  const startLabel = format.dateTime(new Date(`${start}-01`), options);
  const endLabel = format.dateTime(new Date(`${end}-01`), options);

  return `${startLabel} — ${endLabel}`.toUpperCase();
}

export function Experience() {
  const t = useTranslations("experience");
  const format = useFormatter();

  return (
    <section id="work" className="border-border border-b">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3 lg:gap-16 lg:py-24">
        <SectionHeading label={t("label")} title={t("heading")} />

        <div className="flex flex-col lg:col-span-2">
          {siteConfig.experience.items.map((item) => (
            <div
              key={item.id}
              className="border-border flex flex-col gap-2 border-b py-8 first:pt-0 last:border-b-0 sm:flex-row sm:gap-8"
            >
              <p className="text-brand w-45 shrink-0 font-mono text-sm">
                {formatPeriod(format, item.start, item.end)}
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold">
                  {t(`items.${item.id}.role`)}{" "}
                  <span className="text-muted-foreground font-normal">
                    {t("at")}
                  </span>{" "}
                  {item.company}
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {t(`items.${item.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
