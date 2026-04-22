import { siteConfig } from "@/data/site";

export function FinalCta() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="section-frame py-24 md:py-32"
    >
      <div className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <header className="space-y-5">
            <p className="eyebrow">Trabajemos juntos</p>
            <h2
              id="contact-title"
              className="max-w-3xl text-4xl font-bold leading-none tracking-[-0.06em] md:text-7xl"
            >
              ¿Listo para convertir una idea en un sistema que entregue valor?
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              Diseñamos, construimos y desplegamos con foco en resultado,
              velocidad y continuidad operativa.
            </p>
          </header>

          <address className="flex flex-col gap-3 not-italic sm:flex-row">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-accent bg-accent px-6 py-3 text-sm font-bold text-black hover:bg-transparent hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-accent hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}
