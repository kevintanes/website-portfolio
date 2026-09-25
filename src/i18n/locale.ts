"use server";

import { cookies } from "next/headers";

import { defaultLocale, LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export async function getUserLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  if (!isLocale(locale)) return;

  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
