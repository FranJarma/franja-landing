import { Sora } from "next/font/google";

import { siteConfig } from "@/constants/landing";
import {
  localeMetadata,
  locales,
  type Locale,
} from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";

import "../globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const canonicalPath = `/${locale}`;
  const title = dictionary.metadata.title;
  const description = dictionary.metadata.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    applicationName: siteConfig.name,
    keywords: dictionary.metadata.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    alternates: {
      canonical: canonicalPath,
      languages: locales.reduce(
        (languages, language) => ({
          ...languages,
          [language]: `/${language}`,
        }),
        {} as Record<Locale, string>,
      ),
    },
    openGraph: {
      type: "website",
      locale: localeMetadata[locale].ogLocale,
      url: canonicalPath,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/hero.png",
          width: 8000,
          height: 4500,
          alt: dictionary.metadata.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero.png"],
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} className={sora.variable}>
      <body className="bg-background font-sans text-foreground">
        <a href="#contenido" className="sr-only focus:not-sr-only">
          {dictionary.accessibility.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
