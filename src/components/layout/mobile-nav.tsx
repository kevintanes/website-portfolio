"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations("nav");

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-[1.2rem] w-[1.2rem]" /> : <Menu className="h-[1.2rem] w-[1.2rem]" />}
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background px-6 py-4">
          <nav className="flex flex-col gap-4 font-mono text-sm">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                {t(link.id)}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href={siteConfig.navLinks.at(-1)!.href}
              onClick={() => setOpen(false)}
              className={buttonVariants({ variant: "default" })}
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
