import { useTranslations } from "next-intl";

import { SectionHeading } from "@/components/section-heading";

const paragraphKeys = ["p1", "p2"] as const;

export function Bio() {
  const t = useTranslations("bio");

  return (
    <section id="bio" className="border-border border-b">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3 lg:gap-16 lg:py-24">
        <SectionHeading label={t("label")} title={t("heading")} />

        <div className="flex flex-col gap-4 lg:col-span-2">
          {paragraphKeys.map((key, index) => (
            <p
              key={key}
              className={
                index === 0
                  ? "text-foreground text-base leading-relaxed"
                  : "text-muted-foreground text-base leading-relaxed"
              }
            >
              {t(`body.${key}`)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
