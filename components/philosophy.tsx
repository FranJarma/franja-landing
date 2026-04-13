export function Philosophy() {
  return (
    <section id="enfoque" className="section-frame py-24 md:py-32">
      <div className="grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="space-y-6">
          <p className="eyebrow">Enfoque</p>
          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.05em] md:text-5xl">
            No escribo código para llenar un backlog.
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-2xl font-bold leading-tight tracking-[-0.04em] text-white/90 md:text-4xl">
            Resuelvo problemas. Pienso en sistemas. Optimizo para claridad,
            escalabilidad e intención.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <p className="body-muted">
              Construyo productos que pueden crecer sin romperse y sin volverse
              ilegibles para el equipo.
            </p>
            <p className="body-muted">
              La mejor decisión técnica no siempre es la más compleja. Es la que
              deja al negocio avanzar con más precisión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
