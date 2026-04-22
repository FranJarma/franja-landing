const processSteps = [
  {
    label: "01",
    title: "Análisis",
    body: "Leemos el contexto del negocio, el mercado y las restricciones reales para detectar oportunidades concretas.",
  },
  {
    label: "02",
    title: "Diseño",
    body: "Bajamos estrategia a experiencia, arquitectura y decisiones visuales con foco en claridad y conversión.",
  },
  {
    label: "03",
    title: "Implementación",
    body: "Desarrollamos con criterio de producto, performance y escalabilidad para llegar rápido sin improvisar.",
  },
  {
    label: "04",
    title: "Despliegue",
    body: "Publicamos en entornos confiables, medimos el comportamiento real y dejamos todo listo para iterar.",
  },
  {
    label: "05",
    title: "Integración continua",
    body: "Conectamos herramientas, automatizamos validaciones y sostenemos una entrega continua con menos fricción.",
  },
  {
    label: "06",
    title: "Gestión de proyecto",
    body: "Trabajamos con cadencia ágil, seguimiento claro y prioridades visibles para entregar en tiempo y forma.",
  },
];

export function DeliveryCycle() {
  return (
    <section id="proceso" className="section-frame py-24 md:py-32">
      <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
        <div className="grid gap-12 p-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-12">
          <div className="space-y-6">
            <p className="eyebrow">Ciclo de trabajo</p>
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.05em] md:text-5xl">
              Un desarrollo moderno, minimalista y orientado a resultados.
            </h2>
            <p className="body-muted max-w-xl">
              Somos una agencia ágil. Diseñamos, construimos y entregamos con
              método, velocidad y visibilidad para que cada etapa empuje el
              resultado de negocio.
            </p>
            <div className="franja-divider max-w-sm" />
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Tiempo y forma. Menos fricción. Más avance real.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step) => (
              <article key={step.label} className="process-step">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-accent/80">
                    {step.label}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {step.title}
                  </h3>
                  <p className="body-muted text-sm md:text-base">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
