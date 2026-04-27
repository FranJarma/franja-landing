import type { AboutContent } from "@/types/landing";

import { FranjaDivider } from "../shared/franja-divider";
import { Section } from "../shared/section";
import { SectionHeader } from "../shared/section-header";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <Section id={content.id} labelledBy="about-title">
      <div className="grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <SectionHeader
          id="about-title"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
        />

        <div className="space-y-10">
          <FranjaDivider />
          <ul className="space-y-6">
            {content.pillars.map((pillar) => (
              <li
                key={pillar}
                className="flex items-start gap-4 border-b border-white/10 pb-5"
              >
                <span className="mt-2 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                <p className="text-lg font-medium leading-8 text-white/90">{pillar}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
