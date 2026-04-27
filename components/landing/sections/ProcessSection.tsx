import type { ProcessContent } from "@/types/landing";

import { FranjaDivider } from "../shared/franja-divider";
import { Section } from "../shared/section";

type ProcessSectionProps = {
  content: ProcessContent;
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <Section id={content.id} labelledBy="process-title">
      <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
        <div className="grid gap-12 p-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-12">
          <header className="space-y-6">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2
              id="process-title"
              className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.05em] md:text-5xl"
            >
              {content.heading}
            </h2>
            <p className="body-muted max-w-xl">{content.description}</p>
            <FranjaDivider className="max-w-sm" />
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              {content.closingStatement}
            </p>
          </header>

          <ol className="grid gap-4 sm:grid-cols-2">
            {content.steps.map((step) => (
              <li key={step.label} className="list-none">
                <article className="process-step h-full">
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-accent/80">
                      {step.label}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {step.heading}
                    </h3>
                    <p className="body-muted text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
