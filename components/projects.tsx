import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="proyectos" className="section-frame py-24 md:py-32">
      <div className="space-y-12 border-t border-white/10 pt-10">
        <SectionHeading
          label="Proyectos"
          title="Proyectos que empujan más allá del delivery."
          body="Cada trabajo está pensado para ser entendible, escalable y útil. Menos ruido. Más intención."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="project-card group hover:-translate-y-1 hover:border-accent/60 hover:bg-white/[0.04]"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-[-0.04em]">
                    {project.name}
                  </h3>
                  <p className="body-muted text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50 transition group-hover:border-accent/50 group-hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
