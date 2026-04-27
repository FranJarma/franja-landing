export const defaultLocale = "es";

export const locales = ["es", "en"] as const;

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const localeMetadata = {
  en: {
    ogLocale: "en_US",
  },
  es: {
    ogLocale: "es_AR",
  },
} satisfies Record<Locale, { ogLocale: string }>;

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
