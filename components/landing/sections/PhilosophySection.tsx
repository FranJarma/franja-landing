import type { PhilosophyContent } from "@/types/landing";

import { Section } from "../shared/section";
import { SectionHeader } from "../shared/section-header";

type PhilosophySectionProps = {
  content: PhilosophyContent;
};

export function PhilosophySection({ content }: PhilosophySectionProps) {
  return (
    <Section id={content.id} labelledBy="philosophy-title">
      <div className="grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <SectionHeader
          id="philosophy-title"
          eyebrow={content.eyebrow}
          heading={content.heading}
          className="space-y-6"
          headingClassName="max-w-xl"
        />

        <div className="mt-10 space-y-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
