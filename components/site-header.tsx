"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/cn";
import type { Locale } from "@/src/i18n/config";
import type { Dictionary } from "@/types/landing";

type LogoLinkProps = {
  className?: string;
  homeAriaLabel: string;
  locale: Locale;
  onClick?: () => void;
  priority?: boolean;
};

type MenuIconProps = {
  open?: boolean;
};

type SiteHeaderProps = {
  dictionary: Dictionary;
  locale: Locale;
};

function LogoLink({
  className,
  homeAriaLabel,
  locale,
  onClick,
  priority,
}: LogoLinkProps) {
  return (
    <a
      href={`/${locale}`}
      className={cn("absolute left-1/2 -translate-x-1/2", className)}
      onClick={onClick}
      aria-label={homeAriaLabel}
    >
      <Image
        src="/logo.png"
        alt="Franja"
        width={1672}
        height={941}
        priority={priority}
        className="h-20 w-auto lg:h-24"
        sizes="(max-width: 1024px) 122px, 171px"
      />
    </a>
  );
}

function MenuIcon({ open }: MenuIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader({ dictionary, locale }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0B0B0B]/88 backdrop-blur-xl">
        <div className="section-frame flex items-center py-8 lg:py-5">
          <LogoLink
            priority
            className="lg:static lg:translate-x-0"
            homeAriaLabel={dictionary.nav.home}
            locale={locale}
          />

          <nav
            className="ml-auto hidden items-center gap-8 lg:flex"
            aria-label={dictionary.nav.ariaLabel}
          >
            {dictionary.nav.links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <LanguageSwitcher
            ariaLabel={dictionary.languageSwitcher.ariaLabel}
            locale={locale}
            className="ml-5 hidden lg:inline-flex"
          />

          <button
            type="button"
            className="ml-auto text-white/60 hover:text-accent lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={
              menuOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu
            }
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-[#0B0B0B] lg:hidden">
          <div className="section-frame flex h-full flex-col">
            <div className="relative flex items-center border-b border-white/10 py-8 lg:py-5">
              <LogoLink
                homeAriaLabel={dictionary.nav.home}
                locale={locale}
                onClick={() => setMenuOpen(false)}
              />

              <button
                type="button"
                className="ml-auto text-white/60 hover:text-accent"
                onClick={() => setMenuOpen(false)}
                aria-label={dictionary.nav.closeMenu}
              >
                <MenuIcon open />
              </button>
            </div>

            <nav
              id="mobile-nav"
              className="flex flex-1 flex-col items-center justify-center gap-8 py-6"
              aria-label={dictionary.nav.mobileAriaLabel}
            >
              {dictionary.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link py-3 text-center text-2xl font-semibold tracking-[-0.04em]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <LanguageSwitcher
                ariaLabel={dictionary.languageSwitcher.ariaLabel}
                locale={locale}
              />
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
