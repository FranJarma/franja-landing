"use client";

import { useEffect, useState } from "react";

const heroLinks = [
  { label: "Trabajá con nosotros", href: "#contacto", primary: true },
  { label: "Ver servicios", href: "#servicios", primary: false },
];

const navLinks = [
  { label: "Sobre nosotros", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Contacto", href: "#contacto" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-8 pt-24 md:min-h-screen md:pb-6 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-right"
        />
        <div className="absolute inset-0 bg-[#0B0B0B]/74 md:bg-[#0B0B0B]/68" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/98 via-30% to-transparent md:w-[72%] md:via-[#0B0B0B]/90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      </div>

      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0B0B0B]/88 backdrop-blur-xl">
        <div className="section-frame flex items-center py-4 md:py-5">
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            <img src="/logo.png" alt="Franja Mark" className="h-10 w-auto md:h-24" />
          </a>

          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="ml-auto text-white/60 hover:text-accent md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
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
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0B0B] md:hidden">
          <div className="section-frame flex h-full flex-col py-6">
            <div className="relative flex items-center border-b border-white/10 py-4">
              <a
                href="/"
                className="absolute left-1/2 -translate-x-1/2"
                onClick={() => setMenuOpen(false)}
              >
                <img src="/logo.png" alt="Franja Mark" className="h-10 w-auto" />
              </a>

              <button
                className="ml-auto text-white/60 hover:text-accent"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
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
      )}

      <div className="section-frame relative z-10 grid gap-10 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] md:items-end md:py-20">
        <div className="space-y-5 md:space-y-8">
          <div className="max-w-5xl space-y-5 md:space-y-6">
            <p className="eyebrow max-w-[16rem] animate-rise [animation-delay:100ms] opacity-0">
              Estrategia, diseño y tecnología
            </p>
            <h1 className="max-w-[8ch] animate-rise text-[clamp(2.45rem,12vw,4.9rem)] font-bold uppercase leading-[0.96] tracking-[-0.08em] opacity-0 [animation-delay:180ms] md:max-w-none md:text-[clamp(3.2rem,11vw,5rem)] md:leading-[1.02] md:tracking-hero-tight">
              Soluciones digitales que funcionan
            </h1>
            <p className="max-w-[32rem] animate-rise text-[1.05rem] leading-8 text-white/70 opacity-0 [animation-delay:280ms] md:max-w-xl md:text-xl">
              Diseñamos y construimos sistemas, productos y experiencias que
              van más allá de lo normal, con foco en impacto real y ejecución
              sostenida.
            </p>
          </div>

          <div className="flex animate-rise flex-col gap-3 pb-4 opacity-0 [animation-delay:360ms] sm:flex-row sm:pb-0">
            {heroLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.primary
                    ? "inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-5 py-3 text-sm font-bold text-black hover:bg-transparent hover:text-accent"
                    : "inline-flex min-h-12 items-center justify-center border border-white/20 px-5 py-3 text-sm font-bold text-white hover:border-accent hover:text-accent"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
