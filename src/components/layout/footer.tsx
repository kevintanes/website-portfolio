import { useTranslations } from "next-intl";

import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-6 text-center font-mono text-xs sm:flex-row sm:justify-between sm:text-left">
        <p>{t("copyright", { year: 2026, name: siteConfig.name })}</p>
        <p>{t("builtWith")}</p>
      </div>
    </footer>
  );
}
