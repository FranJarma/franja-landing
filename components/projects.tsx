import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      className="section-frame py-24 md:py-32"
    >
      <div className="space-y-12 border-t border-white/10 pt-10">
        <SectionHeading
          id="services-title"
          label="Servicios"
          title="Diseño, desarrollo y operación digital para marcas que necesitan resultados."
          body="Tomamos cada proyecto de punta a punta: presencia digital, producto, automatización y despliegue."
        />

        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <li key={service.name} className="list-none">
              <article className="service-card group h-full hover:-translate-y-1 hover:border-accent/60">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.28em] text-accent/80">
                        {service.kicker}
                      </span>
                      <span className="text-sm text-white/25 transition group-hover:text-accent">
                        0{service.order}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-[-0.04em]">
                      {service.name}
                    </h3>
                    <p className="body-muted text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <li
                        key={item}
                        className="border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50 transition group-hover:border-accent/50 group-hover:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
