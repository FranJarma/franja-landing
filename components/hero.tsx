"use client";

import { useState } from "react";
import { FranjaMark } from "@/components/franja-mark";

const heroLinks = [
  { label: "Trabajá conmigo", href: "#contacto", primary: true },
  { label: "Ver proyectos", href: "#proyectos", primary: false },
];

const navLinks = [
  { label: "Sobre mí", href: "#sobre" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Enfoque", href: "#enfoque" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="section-frame flex min-h-screen flex-col justify-between py-6">
      <header className="relative flex items-center border-b border-white/10 py-6">
        {/* Logo: centrado en mobile, izquierda en desktop */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src="/logo.png" alt="Franja Mark" className="h-24 w-auto md:h-32" />
        </a>

        {/* Nav desktop */}
        <nav className="ml-auto hidden items-center gap-8 text-sm text-white/60 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger mobile */}
        <button
          className="ml-auto text-white/60 hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
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
        </button>
      </header>

      {/* Menú desplegable mobile */}
      {menuOpen && (
        <nav className="flex flex-col border-b border-white/10 py-2 text-sm text-white/60 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <div className="grid gap-14 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] md:items-end md:py-20">
        <div className="space-y-8">
          <p className="eyebrow animate-rise [animation-delay:100ms] opacity-0">
            Ingeniería, producto y dirección
          </p>
          <div className="space-y-6">
            <h1 className="max-w-5xl animate-rise text-[clamp(4rem,14vw,9.5rem)] font-bold uppercase leading-[0.88] tracking-hero-tight opacity-0 [animation-delay:180ms]">
              Rompé
              <br />
              la franja.
            </h1>
            <p className="max-w-xl animate-rise text-lg leading-8 text-white/70 opacity-0 [animation-delay:280ms] md:text-xl">
              Diseño y construyo sistemas, productos y experiencias que no
              siguen las reglas.
            </p>
          </div>

          <div className="flex animate-rise flex-col gap-4 opacity-0 [animation-delay:360ms] sm:flex-row">
            {heroLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.primary
                    ? "inline-flex items-center justify-center border border-accent bg-accent px-6 py-3 text-sm font-bold text-black hover:bg-transparent hover:text-accent"
                    : "inline-flex items-center justify-center border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-accent hover:text-accent"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[360px] animate-rise items-end justify-end overflow-hidden border border-white/10 opacity-0 [animation-delay:460ms]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="absolute inset-y-0 left-8 hidden md:block">
            <FranjaMark orientation="vertical" className="h-full" />
          </div>
          <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-10">
            <p className="max-w-[12rem] text-xs uppercase tracking-[0.3em] text-white/40">
              Systems first. Product aware. Built to scale.
            </p>
            <div className="ml-auto w-full max-w-xs space-y-4">
              <div className="franja-divider" />
              <p className="text-right text-sm leading-7 text-white/60">
                No vendo horas. Diseño claridad, estructura y decisiones que
                hacen que un producto avance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
