import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3 lg:gap-16 lg:py-24">
        <SectionHeading
          label={siteConfig.contact.label}
          title={siteConfig.contact.heading}
        />

        <div className="flex flex-col gap-8 lg:col-span-2">
          <p className="text-muted-foreground text-lg leading-relaxed sm:text-xl">
            {siteConfig.contact.body}
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={`mailto:${siteConfig.email}`}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full rounded-lg font-mono sm:w-auto"
              )}
            >
              {siteConfig.email}
            </Link>

            <div className="flex flex-wrap gap-y-2">
              {siteConfig.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "link" })}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
