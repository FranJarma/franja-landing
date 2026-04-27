import type { ContactContent } from "@/types/landing";

import { CtaButton } from "../shared/cta-button";
import { Section } from "../shared/section";

type ContactSectionProps = {
  content: ContactContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <Section id={content.id} labelledBy="contact-title">
      <div className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <header className="space-y-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2
              id="contact-title"
              className="max-w-3xl text-4xl font-bold leading-none tracking-[-0.06em] md:text-7xl"
            >
              {content.heading}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              {content.description}
            </p>
          </header>

          <address className="flex flex-col gap-3 not-italic sm:flex-row">
            {content.ctas.map((cta) => (
              <CtaButton key={cta.href} {...cta} className="px-6" />
            ))}
          </address>
        </div>
      </div>
    </Section>
  );
}
