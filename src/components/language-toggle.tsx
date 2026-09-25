"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";

import { Switch } from "@/components/ui/switch";
import { setUserLocale } from "@/i18n/locale";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations("language");
  const [isPending, startTransition] = React.useTransition();

  const isIndonesian = locale === "id";
  const nextLocale: Locale = isIndonesian ? "en" : "id";

  function onCheckedChange(checked: boolean) {
    const next: Locale = checked ? "id" : "en";
    startTransition(() => {
      setUserLocale(next);
    });
  }

  return (
    <label
      className={cn(
        "flex items-center gap-2 font-mono text-xs",
        isPending && "opacity-60",
      )}
    >
      <span
        className={
          isIndonesian ? "text-muted-foreground" : "text-foreground font-semibold"
        }
      >
        EN
      </span>
      <Switch
        checked={isIndonesian}
        onCheckedChange={onCheckedChange}
        disabled={isPending}
        aria-label={t("switchTo", { language: t(nextLocale) })}
      />
      <span
        className={
          isIndonesian ? "text-foreground font-semibold" : "text-muted-foreground"
        }
      >
        ID
      </span>
    </label>
  );
}
