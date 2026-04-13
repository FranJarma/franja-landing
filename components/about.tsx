import { SectionHeading } from "@/components/section-heading";

const pillars = [
  "Sistemas escalables desde la base",
  "Productos reales con criterio de negocio",
  "Decisiones técnicas que simplifican a futuro",
];

export function About() {
  return (
    <section id="sobre" className="section-frame py-24 md:py-32">
      <div className="grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <SectionHeading
          label="Sobre mí"
          title="Ingeniero de software y builder con foco en lo que sostiene de verdad."
          body="Trabajo donde se cruzan producto, arquitectura y ejecución. Construyo con mirada técnica, pero también con criterio para negocio, claridad y velocidad."
        />

        <div className="space-y-10">
          <div className="franja-divider" />
          <div className="space-y-6">
            {pillars.map((pillar) => (
              <div
                key={pillar}
                className="flex items-start gap-4 border-b border-white/10 pb-5"
              >
                <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                <p className="text-lg font-medium leading-8 text-white/90">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
