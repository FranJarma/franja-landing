import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/landing";
import { locales } from "@/src/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "es" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((language) => [language, `${siteConfig.url}/${language}`]),
      ),
    },
  }));
}
