import { contactContent } from "@/constants/landing";

import { CtaButton } from "../shared/cta-button";
import { Section } from "../shared/section";

export function ContactSection() {
  return (
    <Section id={contactContent.id} labelledBy="contact-title">
      <div className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <header className="space-y-5">
            <p className="eyebrow">{contactContent.eyebrow}</p>
            <h2
              id="contact-title"
              className="max-w-3xl text-4xl font-bold leading-none tracking-[-0.06em] md:text-7xl"
            >
              {contactContent.heading}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              {contactContent.description}
            </p>
          </header>

          <address className="flex flex-col gap-3 not-italic sm:flex-row">
            {contactContent.ctas.map((cta) => (
              <CtaButton key={cta.href} {...cta} className="px-6" />
            ))}
          </address>
        </div>
      </div>
    </Section>
  );
}
