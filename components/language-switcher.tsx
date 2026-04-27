"use client";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/cn";
import {
  localeLabels,
  locales,
  type Locale,
  isValidLocale,
} from "@/src/i18n/config";

type LanguageSwitcherProps = {
  ariaLabel: string;
  className?: string;
  locale: Locale;
};

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (isValidLocale(currentLocale)) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

export function LanguageSwitcher({
  ariaLabel,
  className,
  locale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-1 border border-white/10 bg-white/[0.03] p-1",
        className,
      )}
    >
      {locales.map((targetLocale) => {
        const localizedPath = getLocalizedPath(pathname, targetLocale);
        const active = targetLocale === locale;

        return (
          <a
            key={targetLocale}
            href={localizedPath}
            hrefLang={targetLocale}
            aria-current={active ? "true" : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push(
                `${localizedPath}${window.location.search}${window.location.hash}`,
              );
            }}
            className={cn(
              "inline-flex h-8 min-w-10 items-center justify-center px-3 text-xs font-bold uppercase tracking-[0.18em] text-white/45 hover:text-accent",
              active && "bg-accent !text-black",
            )}
          >
            <span className="sr-only">{localeLabels[targetLocale]}</span>
            {targetLocale}
          </a>
        );
      })}
    </nav>
  );
}
