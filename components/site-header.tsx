"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { navLinks } from "@/constants/landing";
import { cn } from "@/lib/cn";

type LogoLinkProps = {
  priority?: boolean;
  onClick?: () => void;
  className?: string;
};

type MenuIconProps = {
  open?: boolean;
};

function LogoLink({ priority, onClick, className }: LogoLinkProps) {
  return (
    <a
      href="/"
      className={cn("absolute left-1/2 -translate-x-1/2", className)}
      onClick={onClick}
      aria-label="Ir al inicio"
    >
      <Image
        src="/logo.png"
        alt="Franja"
        width={1672}
        height={941}
        priority={priority}
        className="h-20 w-auto md:h-24"
        sizes="(max-width: 768px) 122px, 171px"
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

export function SiteHeader() {
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
        <div className="section-frame flex items-center py-4 md:py-5">
          <LogoLink priority className="md:static md:translate-x-0" />

          <nav
            className="ml-auto hidden items-center gap-8 md:flex"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="ml-auto text-white/60 hover:text-accent md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-[#0B0B0B] md:hidden">
          <div className="section-frame flex h-full flex-col">
            <div className="relative flex items-center border-b border-white/10 py-4 md:py-5">
              <LogoLink onClick={() => setMenuOpen(false)} />

              <button
                type="button"
                className="ml-auto text-white/60 hover:text-accent"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <MenuIcon open />
              </button>
            </div>

            <nav
              id="mobile-nav"
              className="flex flex-1 flex-col items-center justify-center gap-8 py-6"
              aria-label="Navegación móvil"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link py-3 text-center text-2xl font-semibold tracking-[-0.04em]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
