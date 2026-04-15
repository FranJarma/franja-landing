export function FinalCta() {
  return (
    <section id="contacto" className="section-frame py-24 md:py-32">
      <div className="border-y border-white/10 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="space-y-5">
            <p className="eyebrow">CTA</p>
            <h2 className="max-w-3xl text-4xl font-bold leading-none tracking-[-0.06em] md:text-7xl">
              Construyamos algo que no pase desapercibido juntos.
            </h2>
          </div>

          <a
            href="mailto:hola@franja.dev"
            className="inline-flex items-center justify-center border border-accent bg-accent px-6 py-3 text-sm font-bold text-black hover:bg-transparent hover:text-accent"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}
