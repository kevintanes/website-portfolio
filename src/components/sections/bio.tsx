import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

export function Bio() {
  return (
    <section id="bio" className="border-border border-b">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3 lg:gap-16 lg:py-24">
        <SectionHeading
          label={siteConfig.bio.label}
          title={siteConfig.bio.heading}
        />

        <div className="flex flex-col gap-4 lg:col-span-2">
          {siteConfig.bio.body.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "text-foreground text-base leading-relaxed"
                  : "text-muted-foreground text-base leading-relaxed"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
