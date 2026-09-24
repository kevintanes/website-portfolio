import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

export function Experience() {
  return (
    <section id="work" className="border-border border-b">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3 lg:gap-16 lg:py-24">
        <SectionHeading
          label={siteConfig.experience.label}
          title={siteConfig.experience.heading}
        />

        <div className="flex flex-col lg:col-span-2">
          {siteConfig.experience.items.map((item) => (
            <div
              key={item.period}
              className="border-border flex flex-col gap-2 border-b py-8 first:pt-0 last:border-b-0 sm:flex-row sm:gap-8"
            >
              <p className="text-brand w-45 shrink-0 font-mono text-sm">
                {item.period}
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold">
                  {item.role}{" "}
                  <span className="text-muted-foreground font-normal">
                    at
                  </span>{" "}
                  {item.company}
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
