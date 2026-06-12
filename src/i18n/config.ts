export const locales = ["fr", "en", "ar", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** Native language names shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
  es: "Español",
};

/** Locales that render right-to-left. */
export const rtlLocales: Locale[] = ["ar"];
