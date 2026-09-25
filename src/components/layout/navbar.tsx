import Link from "next/link";
import { useTranslations } from "next-intl";

import { buttonVariants } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";

import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#hero" className="font-mono text-sm font-medium">
          <span className="text-brand">[{siteConfig.initials}]</span>{" "}
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-sm text-muted-foreground md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {t(link.id)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href={siteConfig.navLinks.at(-1)!.href}
            className={buttonVariants({ variant: "default" })}
          >
            {t("cta")}
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
