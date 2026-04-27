import type { SectionContent, Service } from "@/types/landing";

import { Section } from "../shared/section";
import { SectionHeader } from "../shared/section-header";

type ServicesSectionProps = {
  content: SectionContent;
  services: Service[];
};

export function ServicesSection({ content, services }: ServicesSectionProps) {
  return (
    <Section id={content.id} labelledBy="services-title">
      <div className="space-y-12 border-t border-white/10 pt-10">
        <SectionHeader
          id="services-title"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
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

                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
