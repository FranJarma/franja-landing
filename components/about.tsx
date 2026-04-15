import { SectionHeading } from "@/components/section-heading";

const pillars = [
  "Estrategia y visión de producto desde el día uno",
  "Ejecución técnica con criterio real de negocio",
  "Sistemas pensados para escalar sin romperse",
];

export function About() {
  return (
    <section id="sobre" className="section-frame py-24 md:py-32">
      <div className="grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <SectionHeading
          label="Sobre nosotros"
          title="Una agencia que trabaja donde se cruzan producto, diseño y tecnología."
          body="No somos una fábrica de features. Somos un equipo que piensa antes de construir, con mirada técnica y criterio para que cada decisión haga avanzar al negocio."
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
