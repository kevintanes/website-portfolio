import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="hero" className="border-border border-b">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 py-16 lg:flex-row lg:items-center lg:gap-20 lg:py-32">
        <div className="flex flex-1 flex-col items-start gap-8">
          <Badge
            variant="outline"
            className="bg-brand/10 text-brand border-transparent font-mono text-[0.65rem] tracking-wide uppercase"
          >
            {siteConfig.role}
          </Badge>

          <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {siteConfig.title}
          </h1>

          <p className="text-muted-foreground max-w-md text-lg leading-relaxed text-balance">
            {siteConfig.tagline}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={siteConfig.resumeUrl}
              className={buttonVariants({ variant: "brand", size: "lg" })}
            >
              Download CV
            </Link>
            <Link
              href={siteConfig.socialLinks[0].href}
              className={buttonVariants({ variant: "link" })}
            >
              View Github
            </Link>
          </div>
        </div>

        <div className="border-border w-full max-w-95 shrink-0 overflow-hidden rounded-lg border shadow-lg lg:w-95">
          <Image
            src={siteConfig.photo.src}
            alt={siteConfig.photo.alt}
            width={380}
            height={480}
            loading="eager"
            fetchPriority="high"
            className="h-105 w-full object-cover lg:h-120"
          />
        </div>
      </div>
    </section>
  );
}
